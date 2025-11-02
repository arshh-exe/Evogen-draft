import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import RegistrationModal from "./RegistrationModal";

const Hero = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source src="https://customer-assets.emergentagent.com/job_venue-preview/artifacts/3drfgmej_microorganisms.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="video-overlay" />

      {/* Institutional Logos Header */}
      <div className="absolute top-20 left-0 right-0 z-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center glass-effect rounded-lg p-4 md:p-6">
            {/* SCTCE Logo */}
            <div className="flex items-center justify-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_venue-preview/artifacts/baopujjz_logos.png" 
                alt="SCTCE" 
                className="h-12 md:h-16 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            
            {/* Main Logo - Equilibria 26 */}
            <div className="flex justify-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_venue-preview/artifacts/asxzw3jb_IMG-20251017-WA0057.jpg" 
                alt="Equilibria 26" 
                className="h-24 md:h-32 w-auto object-contain animate-float"
              />
            </div>
            
            {/* IIChE Logo */}
            <div className="flex items-center justify-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_venue-preview/artifacts/baopujjz_logos.png" 
                alt="IIChE" 
                className="h-12 md:h-16 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 mt-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-3 glass-effect rounded-full text-white text-sm md:text-base font-semibold mb-4 animate-scale-in">
              🧬 International Technical Conference
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 drop-shadow-2xl animate-slide-up tracking-tight">
            EQUILIBRIA 26
          </h1>
          
          <p className="text-2xl md:text-3xl text-white font-semibold mb-6 drop-shadow-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
            Achieving Balance Through Innovation
          </p>
          
          <p className="text-lg md:text-xl text-white/95 mb-4 max-w-3xl mx-auto drop-shadow-md animate-fade-in leading-relaxed" style={{ animationDelay: "300ms" }}>
            A Multi-Disciplinary Conference in Biotechnology, Biochemical Engineering & Chemical Sciences
          </p>
          
          <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md animate-fade-in" style={{ animationDelay: "400ms" }}>
            Organized by EVOGEN - Department of Biotechnology and Biochemical Engineering<br />
            Sree Chitra Thirunal College of Engineering, Thiruvananthapuram
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 text-white animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="flex items-center gap-3 glass-effect px-5 py-3 rounded-full hover-scale">
              <Calendar className="w-6 h-6 text-coral" />
              <span className="text-lg font-semibold">March 15-16, 2026</span>
            </div>
            <div className="flex items-center gap-3 glass-effect px-5 py-3 rounded-full hover-scale">
              <MapPin className="w-6 h-6 text-coral" />
              <span className="text-lg font-semibold">Thiruvananthapuram, Kerala</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-coral hover:bg-coral/90 text-white hover-scale shadow-2xl font-semibold rounded-full"
              onClick={() => setIsRegistrationOpen(true)}
            >
              Submit Your Paper
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 glass-effect border-2 border-white text-white hover:bg-white hover:text-primary hover-scale shadow-2xl font-semibold rounded-full"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Conference
            </Button>
          </div>
        </div>

        <RegistrationModal 
          open={isRegistrationOpen} 
          onOpenChange={setIsRegistrationOpen} 
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div 
          className="w-8 h-12 border-2 border-white/60 rounded-full flex items-start justify-center p-2 cursor-pointer glass-effect hover-scale" 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-1.5 h-4 bg-white/80 rounded-full animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
