import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Phone, MessageSquare, Star, Shield, Clock, Car, Navigation, User } from "lucide-react";
import { toast } from "sonner";

// Mock driver data
const mockDriver = {
  id: 1,
  name: "Michael Chen",
  profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  phone: "+1 234 567 8901",
  vehicle: "Toyota Camry",
  licensePlate: "ABC 123",
  rating: 4.9,
  estimatedArrival: "5 min",
};

// Mock ride statuses
const RIDE_STATUSES = {
  DRIVER_ASSIGNED: "driver_assigned", 
  DRIVER_EN_ROUTE: "driver_en_route",
  DRIVER_ARRIVED: "driver_arrived", 
  RIDE_IN_PROGRESS: "ride_in_progress", 
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

const RideTrackingPage = () => {
  const [rideStatus, setRideStatus] = useState(RIDE_STATUSES.DRIVER_ASSIGNED);
  const [progress, setProgress] = useState(15);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(15);

  // Simulate ride progress
  useEffect(() => {
    if (rideStatus === RIDE_STATUSES.COMPLETED || rideStatus === RIDE_STATUSES.CANCELLED) {
      return;
    }

    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        const newTime = prev + 1;
        
        // Simulate ride state changes
        if (newTime === 5 && rideStatus === RIDE_STATUSES.DRIVER_ASSIGNED) {
          setRideStatus(RIDE_STATUSES.DRIVER_EN_ROUTE);
          setProgress(30);
          toast.info("Driver is on the way!");
        } else if (newTime === 10 && rideStatus === RIDE_STATUSES.DRIVER_EN_ROUTE) {
          setRideStatus(RIDE_STATUSES.DRIVER_ARRIVED);
          setProgress(45);
          toast.info("Driver has arrived at your pickup location!");
        } else if (newTime === 15 && rideStatus === RIDE_STATUSES.DRIVER_ARRIVED) {
          setRideStatus(RIDE_STATUSES.RIDE_IN_PROGRESS);
          setProgress(60);
          toast.info("Your ride has started!");
        }
        
        return newTime;
      });
    }, 2000); // Sped up for demo purposes

    return () => clearInterval(interval);
  }, [rideStatus]);

  // Status label and color mapping
  const getStatusInfo = () => {
    switch (rideStatus) {
      case RIDE_STATUSES.DRIVER_ASSIGNED:
        return { label: "Driver assigned", color: "bg-blue-500" };
      case RIDE_STATUSES.DRIVER_EN_ROUTE:
        return { label: "Driver en route", color: "bg-amber-500" };
      case RIDE_STATUSES.DRIVER_ARRIVED:
        return { label: "Driver arrived", color: "bg-green-500" };
      case RIDE_STATUSES.RIDE_IN_PROGRESS:
        return { label: "Ride in progress", color: "bg-indigo-500" };
      case RIDE_STATUSES.COMPLETED:
        return { label: "Completed", color: "bg-green-500" };
      case RIDE_STATUSES.CANCELLED:
        return { label: "Cancelled", color: "bg-red-500" };
      default:
        return { label: "Unknown", color: "bg-gray-500" };
    }
  };

  const handleCancelRide = () => {
    toast.error("Ride cancelled successfully");
    setRideStatus(RIDE_STATUSES.CANCELLED);
  };

  const handleContactDriver = () => {
    toast.info("Calling driver...");
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="min-h-screen bg-accent/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Track Your Ride</h1>
            <p className="text-muted-foreground">
              Get real-time updates on your ride status
            </p>
          </div>

          {/* Status Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Badge className={statusInfo.color}>{statusInfo.label}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ride #RD38290
                </p>
              </div>

              <Progress value={progress} className="h-2 mb-6" />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
                {[
                  { status: RIDE_STATUSES.DRIVER_ASSIGNED, icon: <User className="h-5 w-5" />, label: "Assigned" },
                  { status: RIDE_STATUSES.DRIVER_EN_ROUTE, icon: <Car className="h-5 w-5" />, label: "En Route" },
                  { status: RIDE_STATUSES.DRIVER_ARRIVED, icon: <MapPin className="h-5 w-5" />, label: "Arrived" },
                  { status: RIDE_STATUSES.RIDE_IN_PROGRESS, icon: <Navigation className="h-5 w-5" />, label: "In Progress" },
                ].map((step) => (
                  <div key={step.status} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                        [RIDE_STATUSES.DRIVER_ASSIGNED, RIDE_STATUSES.DRIVER_EN_ROUTE, RIDE_STATUSES.DRIVER_ARRIVED, RIDE_STATUSES.RIDE_IN_PROGRESS].indexOf(rideStatus) >= 
                        [RIDE_STATUSES.DRIVER_ASSIGNED, RIDE_STATUSES.DRIVER_EN_ROUTE, RIDE_STATUSES.DRIVER_ARRIVED, RIDE_STATUSES.RIDE_IN_PROGRESS].indexOf(step.status)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span className="text-xs">{step.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-background border rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <div className="mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pickup</p>
                      <p className="font-medium">123 Main St, New York, NY</p>
                    </div>
                  </div>
                </div>

                <div className="bg-background border rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-muted-foreground">Destination</p>
                      <p className="font-medium">456 Park Ave, New York, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Estimated Time</p>
                    <p className="font-medium flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {estimatedTime} min
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Estimated Fare</p>
                    <p className="font-medium">$18.50</p>
                  </div>
                </div>

                {rideStatus !== RIDE_STATUSES.COMPLETED && rideStatus !== RIDE_STATUSES.CANCELLED && (
                  <Button variant="destructive" size="sm" onClick={handleCancelRide}>
                    Cancel Ride
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Driver Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Driver Details</h2>
                {mockDriver.rating && (
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-medium">{mockDriver.rating}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mockDriver.profileImage} alt={mockDriver.name} />
                  <AvatarFallback>{mockDriver.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{mockDriver.name}</h3>
                  <p className="text-muted-foreground">{mockDriver.vehicle} • {mockDriver.licensePlate}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-accent/50 rounded-lg p-4 flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Safety</p>
                    <p className="font-medium">Verified Driver</p>
                  </div>
                </div>
                <div className="bg-accent/50 rounded-lg p-4 flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">ETA</p>
                    <p className="font-medium">{mockDriver.estimatedArrival}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button className="w-full" onClick={handleContactDriver}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Driver
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RideTrackingPage;
