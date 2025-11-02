import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import RegistrationModal from "./RegistrationModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Dates", href: "#dates" },
    { name: "Events", href: "#events" },
    { name: "Committee", href: "#committee" },
    { name: "Gallery", href: "#gallery" },
    { name: "Venue", href: "#venue" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-primary/20 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#home");
                }}
                className="cursor-pointer flex items-center gap-3 group"
              >
                <img 
                  src="https://customer-assets.emergentagent.com/job_venue-preview/artifacts/asxzw3jb_IMG-20251017-WA0057.jpg" 
                  alt="Equilibria 26" 
                  className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-2xl font-bold gradient-text hidden md:inline-block">
                  EQUILIBRIA 26
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <Button
                onClick={() => setIsRegistrationOpen(true)}
                className="ml-3 bg-gradient-to-r from-coral to-accent hover:from-coral/90 hover:to-accent/90 hover-scale text-white font-semibold rounded-full px-6"
                size="sm"
              >
                Register
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-primary/10"
              >
                {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-fade-in bg-background/95 backdrop-blur-lg border-t border-primary/20">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-4 py-3 rounded-lg text-base font-semibold text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <Button
                onClick={() => {
                  setIsRegistrationOpen(true);
                  setIsOpen(false);
                }}
                className="w-full bg-gradient-to-r from-coral to-accent hover:from-coral/90 hover:to-accent/90 text-white font-semibold rounded-full mt-3"
              >
                Register
              </Button>
            </div>
          </div>
        )}
      </nav>

      <RegistrationModal 
        open={isRegistrationOpen} 
        onOpenChange={setIsRegistrationOpen} 
      />
    </>
  );
};

export default Navbar;
