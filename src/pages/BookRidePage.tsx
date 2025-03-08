import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Clock, CreditCard, Car, Check, PlusCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Mock data for vehicle types
const vehicleTypes = [
  { id: 1, name: "Economy", description: "Affordable rides for everyday use", price: 1.0, eta: "3 min" },
  { id: 2, name: "Comfort", description: "Spacious vehicles with extra legroom", price: 1.5, eta: "5 min" },
  { id: 3, name: "Premium", description: "Luxury vehicles for a premium experience", price: 2.0, eta: "7 min" },
];

const BookRidePage = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedVehicleType, setSelectedVehicleType] = useState(1);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContinue = () => {
    if (!pickup || !destination) {
      toast.error("Please enter pickup and destination locations");
      return;
    }
    setStep(2);
  };

  const handleBookRide = () => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Ride booked successfully! Finding a driver...");
      // Here you would redirect to a ride tracking page in a real app
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Book a Ride</h1>
              <p className="text-muted-foreground">Enter your pickup and destination details</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="ride-now" className="mb-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="ride-now">Ride Now</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  </TabsList>
                  <TabsContent value="ride-now" className="py-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Book a ride that will pick you up as soon as possible
                    </p>
                  </TabsContent>
                  <TabsContent value="schedule" className="space-y-4 py-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Schedule a ride for a future time
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Date</label>
                        <div className="relative">
                          <Input type="date" className="pl-10" />
                          <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Time</label>
                        <div className="relative">
                          <Input type="time" className="pl-10" />
                          <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-3 top-3 h-5 w-5 text-primary">
                      <div className="w-3 h-3 bg-primary rounded-full mx-auto"></div>
                    </div>
                    <Input
                      placeholder="Pickup location"
                      className="pl-10"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                  </div>
                  
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-primary" />
                    <Input
                      placeholder="Destination"
                      className="pl-10"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>

                {step === 1 ? (
                  <Button 
                    className="w-full mt-6" 
                    onClick={handleContinue}
                  >
                    Continue
                  </Button>
                ) : (
                  <div className="mt-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Select Vehicle Type</h3>
                      <div className="space-y-4">
                        {vehicleTypes.map((vehicle) => (
                          <div
                            key={vehicle.id}
                            className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer hover:border-primary transition-colors ${
                              selectedVehicleType === vehicle.id ? "border-primary bg-primary/5" : ""
                            }`}
                            onClick={() => setSelectedVehicleType(vehicle.id)}
                          >
                            <div className="flex items-center gap-4">
                              <div className="bg-accent p-3 rounded-full">
                                <Car className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-medium">{vehicle.name}</h4>
                                <p className="text-sm text-muted-foreground">{vehicle.description}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold">${(vehicle.price * 10).toFixed(2)}</p>
                              <p className="text-sm text-muted-foreground">{vehicle.eta}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors border-primary bg-primary/5">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-primary" />
                            <div>
                              <p className="font-medium">Cash</p>
                            </div>
                          </div>
                          <div>
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5" />
                            <div>
                              <p className="font-medium">Add Payment Method</p>
                            </div>
                          </div>
                          <div>
                            <PlusCircle className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      onClick={handleBookRide}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Book Ride"}
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <div className="lg:block">
          <Card>
            <CardHeader>
              <CardTitle>Ride Summary</CardTitle>
              <CardDescription>Estimated fare and details</CardDescription>
            </CardHeader>
            <CardContent>
              {pickup && destination ? (
                <>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <div className="flex items-start gap-2">
                        <div className="mt-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Pickup</p>
                          <p className="text-sm text-muted-foreground">{pickup}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <p className="text-sm font-medium">Destination</p>
                          <p className="text-sm text-muted-foreground">{destination}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm">Estimated distance</p>
                        <p className="text-sm font-medium">3.2 miles</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Estimated time</p>
                        <p className="text-sm font-medium">12 mins</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-sm">Base fare</p>
                        <p className="text-sm font-medium">$8.00</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Distance fee</p>
                        <p className="text-sm font-medium">$4.80</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm">Service fee</p>
                        <p className="text-sm font-medium">$1.20</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold">
                      <p>Total (estimated)</p>
                      <p>$14.00</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Search className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Enter pickup and destination to see fare estimate
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookRidePage;
