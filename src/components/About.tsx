import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: "Main Objective",
      description: "Raise road safety awareness among youth and reduce accidents"
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Find practical solutions using technology and creativity"
    },
    {
      icon: Users,
      title: "Talent Hunt",
      description: "Identify young talent and provide them with a platform"
    },
    {
      icon: Award,
      title: "Impact Creation",
      description: "Encourage projects that bring real change to society"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Challenge Objective
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Raise awareness about road safety and promote innovative ideas among students and professionals to reduce accidents. Use education, technology, and design to improve road safety infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-float transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <objective.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {objective.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Challenge Features
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Participation in three different categories
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Specialization in various tracks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Mentorship and guidance
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Incubation opportunities
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-lg font-medium text-foreground">
                This challenge is not just a competition, but a mission for the betterment of society!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;