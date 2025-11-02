import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">EQUILIBRIA 26</h3>
            <p className="text-primary-foreground/80 mb-4">
              National Level Paper Conference organized by EVOGEN, Department of Biotechnology and Biochemical Engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#register" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Sree Chitra Thirunal College of Engineering,
                  Thiruvananthapuram, Kerala
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:evogen@sctce.ac.in" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  evogen@sctce.ac.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  +91 XXX XXX XXXX
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2026 EVOGEN - Department of Biotechnology and Biochemical Engineering, SCTCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
