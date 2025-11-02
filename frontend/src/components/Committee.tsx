import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, User } from "lucide-react";

const Committee = () => {
  const committeeMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Conference Chair",
      department: "Head, Dept. of Biotechnology",
      email: "rajesh.kumar@sctce.ac.in",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Priya Menon",
      role: "Program Coordinator",
      department: "Associate Professor",
      email: "priya.menon@sctce.ac.in",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Dr. Arun Krishnan",
      role: "Technical Chair",
      department: "Assistant Professor",
      email: "arun.k@sctce.ac.in",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Aditi Sharma",
      role: "Student Coordinator",
      department: "Final Year, Biotechnology",
      email: "aditi.sharma@student.sctce.ac.in",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Arjun Nair",
      role: "Registration Head",
      department: "Third Year, Biotechnology",
      email: "arjun.nair@student.sctce.ac.in",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Meera Pillai",
      role: "Design & Media Head",
      department: "Third Year, Biotechnology",
      email: "meera.pillai@student.sctce.ac.in",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
    },
  ];

  return (
    <section id="committee" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Organizing Committee
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team behind Equilibria 26
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {committeeMembers.map((member, index) => (
            <Card
              key={index}
              className="hover-lift border-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const icon = document.createElement('div');
                        icon.className = 'w-full h-full flex items-center justify-center';
                        icon.innerHTML = '<div class="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center"><svg class="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg></div>';
                        parent.appendChild(icon);
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.department}</p>
                  <div className="flex items-center gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-xs">Email</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committee;
