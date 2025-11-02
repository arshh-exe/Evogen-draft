import { Card, CardContent } from "@/components/ui/card";
import { Microscope, GraduationCap, Award, Atom, Dna, FlaskConical } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Atom,
      title: "Multi-Disciplinary",
      description: "Biochemistry, Biotechnology & Chemical Engineering"
    },
    {
      icon: Dna,
      title: "Cutting-Edge Research",
      description: "Latest innovations in life sciences"
    },
    {
      icon: FlaskConical,
      title: "Hands-On Workshops",
      description: "Practical laboratory sessions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 scientific-pattern">
      <div className="container mx-auto px-4">
        {/* Conference Highlights */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index}
                className="border-2 border-primary/20 hover:border-primary/40 hover-lift bg-card/80 backdrop-blur animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* About EVOGEN */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About EVOGEN
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-coral mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The driving force behind scientific innovation and research excellence
            </p>
          </div>
          
          <Card className="border-2 border-primary/20 hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                  <Microscope className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-primary">The Student-Teacher Body</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    EVOGEN is the dynamic student-teacher association of the Department of Biotechnology 
                    and Biochemical Engineering at Sree Chitra Thirunal College of Engineering. We are 
                    dedicated to fostering innovation, research excellence, and collaborative learning in 
                    the field of biotechnology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Through events like Equilibria 26, we provide a platform for budding researchers and 
                    professionals to share knowledge, present groundbreaking research, and build connections 
                    that shape the future of biotechnology.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About College */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
          <Card className="border-2 border-secondary/20 hover:shadow-2xl transition-all duration-500 bg-card/80 backdrop-blur">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl">
                  <GraduationCap className="w-10 h-10 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 text-secondary">
                    Sree Chitra Thirunal College of Engineering
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    SCT College of Engineering is a premier institution in Kerala, renowned for its 
                    excellence in technical education and research. Established under the Government 
                    of Kerala, the college has been at the forefront of producing skilled engineers 
                    and researchers who contribute significantly to society.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    The Department of Biotechnology and Biochemical Engineering stands as a beacon of 
                    innovation, equipped with state-of-the-art laboratories and guided by experienced 
                    faculty members dedicated to advancing biotechnology education and research.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About Equilibria 26 */}
        <div className="max-w-5xl mx-auto animate-fade-in">
          <Card className="border-2 border-coral/30 bg-gradient-to-br from-coral/5 via-card/80 to-accent/5 hover:shadow-2xl transition-all duration-500 backdrop-blur">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-coral/20 to-accent/20 rounded-xl">
                  <Award className="w-10 h-10 text-coral" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4 gradient-coral">About Equilibria 26</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    Equilibria 26 is an <strong>international technical conference</strong> that brings together students, 
                    researchers, and professionals from across the globe to discuss cutting-edge 
                    developments in biotechnology, biochemical engineering, and chemical sciences.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                    The conference features multiple tracks including <strong>paper presentations, poster sessions, 
                    and specialized workshops</strong>, providing participants with opportunities to showcase their 
                    research, gain valuable feedback, and network with peers and experts in the field.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Join us in this celebration of scientific inquiry and innovation as we explore the 
                    <strong> balance of nature, technology, and human ingenuity</strong>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
