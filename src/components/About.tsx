import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: "મુખ્ય ઉદ્દેશ્ય",
      description: "યુવાનોમાં માર્ગ સલામતી અંગે જાગૃતિ વધારવી અને અકસ્માતો ઘટાડવા"
    },
    {
      icon: Lightbulb,
      title: "નવીન ઉકેલો",
      description: "ટેકનોલોજી અને ક્રિએટિવિટીના ઉપયોગથી વ્યાવહારિક સમાધાન શોધવા"
    },
    {
      icon: Users,
      title: "ટેલેન્ટ હન્ટ",
      description: "યુવા ટેલેન્ટ ઓળખીને તેમને પ્લેટફોર્મ પ્રદાન કરવું"
    },
    {
      icon: Award,
      title: "ઇમ્પેક્ટ સર્જન",
      description: "સમાજમાં વાસ્તવિક પરિવર્તન લાવવા માટેના પ્રોજેક્ટ્સને પ્રોત્સાહન"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            ચેલેન્જનો ઉદ્દેશ્ય
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            આ ચેલેન્જનો મુખ્ય હેતુ યુવાનોને માર્ગ સલામતીના ક્ષેત્રમાં નવીન વિચારો અને ઉકેલો લાવવા માટે પ્રેરિત કરવાનો છે
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
                ચેલેન્જની વિશેષતાઓ
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  ત્રણ અલગ અલગ કેટેગરીમાં પાર્ટિસિપેશન
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  વિવિધ ટ્રેક્સમાં વિશેષજ્ઞતા
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  મેન્ટરશિપ અને ગાઇડન્સ
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  ઇન્ક્યુબેશન અવસરો
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <p className="text-lg font-medium text-foreground">
                આ ચેલેન્જ ફક્ત એક સ્પર્ધા નથી, પરંતુ સમાજના ભલા માટેનું એક મિશન છે!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;