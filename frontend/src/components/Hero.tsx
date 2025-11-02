import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-biology.jpg";
import RegistrationModal from "./RegistrationModal";

const Hero = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full text-accent-foreground text-sm font-semibold mb-4 animate-scale-in">
              National Level Paper Conference
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            EQUILIBRIA 26
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md">
            Organized by EVOGEN
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto drop-shadow-md">
            Department of Biotechnology and Biochemical Engineering
            <br />
            Sree Chitra Thirunal College of Engineering
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">March 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">SCT College, Kerala</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 hover-scale"
              onClick={() => setIsRegistrationOpen(true)}
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary hover-scale"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>

        <RegistrationModal 
          open={isRegistrationOpen} 
          onOpenChange={setIsRegistrationOpen} 
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
