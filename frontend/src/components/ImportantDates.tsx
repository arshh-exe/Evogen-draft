import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, FileCheck, Mail } from "lucide-react";

const ImportantDates = () => {
  const dates = [
    {
      icon: FileCheck,
      title: "Abstract Submission Deadline",
      date: "January 15, 2026",
      description: "Submit your research abstracts",
      color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30"
    },
    {
      icon: Mail,
      title: "Acceptance Notification",
      date: "February 1, 2026",
      description: "Authors will be notified",
      color: "text-green-600 bg-green-50 dark:bg-green-950/30"
    },
    {
      icon: Clock,
      title: "Early Bird Registration",
      date: "February 15, 2026",
      description: "Get discounted registration fees",
      color: "text-orange-600 bg-orange-50 dark:bg-orange-950/30"
    },
    {
      icon: Calendar,
      title: "Conference Dates",
      date: "March 15-16, 2026",
      description: "Two-day national conference",
      color: "text-purple-600 bg-purple-50 dark:bg-purple-950/30"
    },
  ];

  return (
    <section id="dates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Important Dates
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mark your calendars with these key dates for Equilibria 26
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {dates.map((item, index) => (
            <Card
              key={index}
              className="hover-lift border-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-4 mx-auto`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-center text-lg">{item.title}</CardTitle>
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
