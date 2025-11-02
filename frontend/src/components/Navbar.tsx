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
    if (href === "#register") {
      setIsRegistrationOpen(true);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#home");
                }}
                className="text-2xl font-bold gradient-text cursor-pointer"
              >
                EQUILIBRIA 26
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <Button
                onClick={() => setIsRegistrationOpen(true)}
                className="ml-2 bg-accent hover:bg-accent/90 hover-scale"
                size="sm"
              >
                Register
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
              <Button
                onClick={() => {
                  setIsRegistrationOpen(true);
                  setIsOpen(false);
                }}
                className="w-full bg-accent hover:bg-accent/90 mt-2"
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
