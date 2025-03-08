
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, MapPin, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Your Ride, <span className="text-primary">On Demand</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Book a ride instantly, track in real-time, and enjoy a safe journey to your destination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-ride">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book a Ride <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/driver">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Become a Driver
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1676920422481-137aa3b723d1?q=80&w=1200&auto=format&fit=crop"
                  alt="Ride service app" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Location</p>
                      <p className="font-medium">Times Square, New York</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose RideNow?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the best ride service with features designed for your convenience and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Safety First",
                description: "Verified drivers, real-time tracking, and 24/7 support for a secure journey."
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Quick & Reliable",
                description: "Book in seconds and get a ride within minutes, anytime and anywhere."
              },
              {
                icon: <CreditCard className="h-8 w-8 text-primary" />,
                title: "Flexible Payments",
                description: "Pay with cash or choose from multiple digital payment options."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg shadow-md border"
              >
                <div className="bg-primary/10 p-3 w-fit rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Download the RideNow App</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the full experience with our mobile app. Book rides, track drivers in real-time, and manage your trips with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28z"></path>
                    <path d="M3.52 9.45c-.1.18-.06.4.08.54l1.48 1.48c.15.15.4.17.57.04C6.95 10.69 8.95 9.89 11 9.89s4.05.8 5.36 1.62c.17.12.42.11.57-.04l1.48-1.48c.14-.14.18-.35.08-.54-.15-.29-.46-.46-.78-.4-.25.04-.49.17-.71.33-.56.4-2.31 1.31-5.99 1.31-3.68 0-5.43-.9-5.99-1.31-.22-.16-.46-.29-.71-.33-.32-.06-.63.1-.78.4z"></path>
                    <path d="M9.3 16.7c.44-.54.89-.96 1.33-1.31-.78-.09-1.48-.25-2.03-.44-.52-.17-.96-.39-1.33-.63-.36-.24-.67-.48-.91-.69-.18-.18-.34-.36-.48-.53-.14-.19-.24-.34-.3-.48-.08-.14-.13-.26-.16-.36-.03-.09-.05-.19-.05-.27-.01-.2.04-.39.15-.55.12-.17.3-.3.5-.36.08-.03.17-.04.25-.04.19 0 .38.05.55.14.56.36 1.38.76 2.54 1.01.91.2 1.98.31 3.14.31h.01c.99 0 2.02-.09 2.95-.26 1.14-.19 2.13-.51 2.91-.92.36-.19.58-.3.75-.34.15-.05.3-.08.43-.08.13 0 .25.01.36.05.14.04.26.11.35.21.08.09.15.22.18.38.01.11 0 .25-.04.36-.79.82-1.22 1.5-1.31 2.06-.04.19.01.38.12.54.11.17.29.29.49.33.24.05.48-.01.69-.16.2-.15.33-.38.36-.65.01-.05.01-.14.01-.21 0-.07 0-.16-.01-.21.01-.11.02-.21.02-.34v-.06c0-.12-.01-.33-.05-.5-.04-.18-.1-.38-.2-.56-.1-.19-.24-.37-.43-.52-.19-.15-.43-.26-.7-.3 0 0-.01 0-.01 0-.26-.03-.51.02-.75.14-.23.12-.42.31-.55.52.01.31-.19.57-.06 1.03z"></path>
                  </svg>
                  App Store
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <polygon points="3 3 21 12 3 21 3 3"></polygon>
                  </svg>
                  Google Play
                </Button>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative w-64 h-128 mx-auto overflow-hidden rounded-[40px] border-8 border-foreground/10 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581266503136-073e1fd6e5e4?q=80&w=400&auto=format&fit=crop" 
                  alt="RideNow mobile app" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
