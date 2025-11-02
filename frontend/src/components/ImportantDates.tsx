import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, FileCheck, Mail } from "lucide-react";

const ImportantDates = () => {
  const dates = [
    {
      icon: FileCheck,
      title: "Abstract Submission Deadline",
      date: "January 15, 2026",
      description: "Submit your research abstracts",
      color: "from-primary to-secondary"
    },
    {
      icon: Mail,
      title: "Acceptance Notification",
      date: "February 1, 2026",
      description: "Authors will be notified",
      color: "from-secondary to-primary"
    },
    {
      icon: Clock,
      title: "Early Bird Registration",
      date: "February 15, 2026",
      description: "Get discounted registration fees",
      color: "from-coral to-accent"
    },
    {
      icon: Calendar,
      title: "Conference Dates",
      date: "March 15-16, 2026",
      description: "Two-day international conference",
      color: "from-accent to-coral"
    },
  ];

  return (
    <section id="dates" className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Important Dates
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-coral mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars with these key dates for Equilibria 26
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {dates.map((item, index) => (
            <Card
              key={index}
              className="hover-lift border-2 border-primary/20 hover:border-primary/40 animate-fade-in bg-card/80 backdrop-blur overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-1 bg-gradient-to-r ${item.color}`} />
              <CardHeader>
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-center text-lg leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-primary mb-2">{item.date}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
