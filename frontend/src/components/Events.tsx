import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Image, Presentation, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      icon: FileText,
      title: "Paper Presentation",
      description: "Present your original research papers and innovative ideas to an audience of experts and peers.",
      details: [
        "15-20 minute presentations",
        "Q&A session with panel",
        "Best paper awards",
        "Publication opportunities"
      ]
    },
    {
      icon: Image,
      title: "Poster Presentation",
      description: "Showcase your research through visually engaging posters in an interactive session.",
      details: [
        "A0 size poster format",
        "Interactive discussions",
        "Best poster awards",
        "Networking opportunities"
      ]
    },
    {
      icon: Presentation,
      title: "Technical Workshops",
      description: "Hands-on workshops conducted by industry experts and researchers in specialized topics.",
      details: [
        "Latest techniques and tools",
        "Practical demonstrations",
        "Certificate of participation",
        "Limited seats available"
      ]
    },
    {
      icon: Users,
      title: "Panel Discussions",
      description: "Engage in thought-provoking discussions with leading experts about the future of biotechnology.",
      details: [
        "Industry trends and insights",
        "Career guidance sessions",
        "Interactive Q&A",
        "Networking with experts"
      ]
    }
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Conference Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participate in diverse events designed to showcase research, foster learning, and build connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <event.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
