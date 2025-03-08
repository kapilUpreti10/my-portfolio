
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, CreditCard, Car, MapPin, Shield, Star, History } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Mock user data
const mockUser = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 234 567 8901",
  profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  address: "123 Main St, New York, NY",
  rides: 42,
  rating: 4.8,
  paymentMethods: [
    { id: 1, type: "credit_card", last4: "4242", brand: "Visa", isDefault: true },
    { id: 2, type: "paypal", email: "john.doe@example.com", isDefault: false },
  ],
  ridesHistory: [
    { id: 1, date: "2023-06-15", from: "Home", to: "Office", price: 12.50, status: "completed" },
    { id: 2, date: "2023-06-12", from: "Office", to: "Gym", price: 8.75, status: "completed" },
    { id: 3, date: "2023-06-10", from: "Gym", to: "Home", price: 15.20, status: "completed" },
  ],
};

const ProfilePage = () => {
  const [user, setUser] = useState(mockUser);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    address: user.address,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setUser((prev) => ({ ...prev, ...formData }));
      setEditMode(false);
      setIsLoading(false);
      toast.success("Profile updated successfully!");
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-muted-foreground">Manage your personal information and preferences</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={user.profileImage} alt={`${user.firstName} ${user.lastName}`} />
                  <AvatarFallback>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">{user.firstName} {user.lastName}</h2>
                <p className="text-muted-foreground">{user.email}</p>
                
                <div className="flex items-center mt-4">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="font-medium">{user.rating}</span>
                  <span className="text-muted-foreground mx-2">•</span>
                  <span className="text-muted-foreground">{user.rides} rides</span>
                </div>
                
                <Button variant="outline" className="mt-6 w-full" onClick={() => setEditMode(!editMode)}>
                  {editMode ? "Cancel" : "Edit Profile"}
                </Button>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{user.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium">{user.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
              <TabsTrigger value="rides">Ride History</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {editMode ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">First Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Last Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Address</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                          <Input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        <Button onClick={handleSave} disabled={isLoading}>
                          {isLoading ? "Saving..." : "Save Changes"}
                        </Button>
                        <Button variant="outline" onClick={() => setEditMode(false)}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground">First Name</p>
                          <p className="font-medium">{user.firstName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Last Name</p>
                          <p className="font-medium">{user.lastName}</p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{user.email}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{user.phone}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="font-medium">{user.address}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="payment">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>
                    Manage your payment options
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.paymentMethods.map((method) => (
                      <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          {method.type === "credit_card" ? (
                            <CreditCard className="h-5 w-5 text-primary" />
                          ) : (
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0070ba">
                              <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 0 0-.794.68l-.04.22-.63 4.03-.024.13a.804.804 0 0 1-.794.68h-2.52a.5.5 0 0 1-.488-.62l.04-.19 1.06-6.71a.5.5 0 0 1 .49-.38h1.85c1.35 0 2.91-.22 4.028-1.14.898-.73 1.34-1.79 1.563-3.27z" />
                              <path d="M8.5 7.528v.596a.5.5 0 0 0 .5.498 2.104 2.104 0 0 1 1.202.36c.537.39.859 1.01.944 1.814.113 1.062-.28 2.094-1.048 2.747-.52.443-1.169.632-1.858.632h-.74a.5.5 0 0 0-.492.41l-.736 4.663a.5.5 0 0 1-.492.41h-2.58a.5.5 0 0 1-.48-.64L4.292 8.42a.5.5 0 0 1 .48-.36h3.257a.5.5 0 0 1 .471.328z" />
                            </svg>
                          )}
                          <div>
                            <p className="font-medium">
                              {method.type === "credit_card"
                                ? `${method.brand} ending in ${method.last4}`
                                : `PayPal (${method.email})`}
                            </p>
                            {method.isDefault && (
                              <span className="text-xs text-primary">Default</span>
                            )}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="mt-4 w-full">
                      Add Payment Method
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="rides">
              <Card>
                <CardHeader>
                  <CardTitle>Ride History</CardTitle>
                  <CardDescription>
                    View your past rides
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.ridesHistory.map((ride) => (
                      <div key={ride.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-medium">{ride.date}</p>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <History className="h-4 w-4 mr-1" />
                              <span className="capitalize">{ride.status}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">${ride.price.toFixed(2)}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 space-y-3">
                          <div className="flex items-start gap-2">
                            <div className="mt-1">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                            </div>
                            <div>
                              <p className="text-sm">From</p>
                              <p className="font-medium">{ride.from}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 text-primary mt-1" />
                            <div>
                              <p className="text-sm">To</p>
                              <p className="font-medium">{ride.to}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="mt-4 w-full">
                      Load More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
