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
      ],
      gradient: "from-primary to-secondary"
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
      ],
      gradient: "from-secondary to-primary"
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
      ],
      gradient: "from-coral to-accent"
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
      ],
      gradient: "from-accent to-coral"
    }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 scientific-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Conference Events
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-coral mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participate in diverse events designed to showcase research, foster learning, and build connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/20 hover:border-primary/40 animate-fade-in bg-card/80 backdrop-blur group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-1 bg-gradient-to-r ${event.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-4 bg-gradient-to-br ${event.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{event.title}</CardTitle>
                </div>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {event.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 group/item">
                      <span className="text-coral mt-1 font-bold text-lg">•</span>
                      <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">{detail}</span>
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
