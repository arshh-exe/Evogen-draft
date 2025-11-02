import { Card, CardContent } from "@/components/ui/card";
import { Microscope, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* About EVOGEN */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About EVOGEN
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
          </div>
          
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Microscope className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">The Student-Teacher Body</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    EVOGEN is the dynamic student-teacher association of the Department of Biotechnology 
                    and Biochemical Engineering at Sree Chitra Thirunal College of Engineering. We are 
                    dedicated to fostering innovation, research excellence, and collaborative learning in 
                    the field of biotechnology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
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
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <Card className="border-2 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Sree Chitra Thirunal College of Engineering
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    SCT College of Engineering is a premier institution in Kerala, renowned for its 
                    excellence in technical education and research. Established under the Government 
                    of Kerala, the college has been at the forefront of producing skilled engineers 
                    and researchers who contribute significantly to society.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
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
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Card className="border-2 border-accent/50 bg-accent/5 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/20 rounded-lg">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">About Equilibria 26</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Equilibria 26 is a national-level paper conference that brings together students, 
                    researchers, and professionals from across the country to discuss cutting-edge 
                    developments in biotechnology and biochemical engineering.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The conference features multiple tracks including paper presentations, poster sessions, 
                    and specialized workshops, providing participants with opportunities to showcase their 
                    research, gain valuable feedback, and network with peers and experts in the field.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Join us in this celebration of scientific inquiry and innovation as we explore the 
                    balance of nature, technology, and human ingenuity.
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
