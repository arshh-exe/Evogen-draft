import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

const Venue = () => {
  // SCT College of Engineering, Thiruvananthapuram coordinates
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.8738953047477!2d76.90147831478365!3d8.514959993862584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec1e2b682b1%3A0x24c5ea207a43e7b2!2sSree%20Chitra%20Thirunal%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin";

  const venueDetails = [
    {
      icon: MapPin,
      title: "Address",
      description: "Sree Chitra Thirunal College of Engineering, Pappanamcode, Thiruvananthapuram, Kerala 695018"
    },
    {
      icon: Navigation,
      title: "Getting There",
      description: "5 km from Trivandrum Central Railway Station, 15 km from Trivandrum International Airport"
    },
    {
      icon: Clock,
      title: "Conference Timing",
      description: "9:00 AM - 5:00 PM (Both Days)"
    },
    {
      icon: Phone,
      title: "Venue Contact",
      description: "+91 471 2598122"
    },
  ];

  return (
    <section id="venue" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Venue
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us at the prestigious SCT College of Engineering
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Venue Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {venueDetails.map((detail, index) => (
              <Card
                key={index}
                className="hover-lift border-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <detail.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{detail.title}</h3>
                    <p className="text-sm text-muted-foreground">{detail.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Maps Embed */}
          <Card className="border-2 overflow-hidden animate-fade-in">
            <CardContent className="p-0">
              <div className="relative w-full h-[500px]">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SCT College of Engineering Location"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 bg-muted/30">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Sree Chitra Thirunal College of Engineering
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      One of the premier engineering institutions in Kerala, known for its state-of-the-art
                      facilities and academic excellence. The campus provides an ideal environment for
                      conferences and academic gatherings.
                    </p>
                    <a
                      href="https://www.google.com/maps/dir//Sree+Chitra+Thirunal+College+of+Engineering"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Venue;
