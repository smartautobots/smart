import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Building, Globe } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      icon: GraduationCap,
      title: "School Category",
      target: "Grade 9-12",
      examples: ["Poster Design", "Project Model", "Awareness Campaign"],
      color: "bg-blue-500",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      id: 2,
      icon: Building,
      title: "College Category",
      target: "Diploma, UG, PG",
      examples: ["Mobile Application", "Drone Technology", "AI Solution"],
      color: "bg-green-500",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      id: 3,
      icon: Globe,
      title: "Open Category",
      target: "Researchers, Professionals",
      examples: ["Prototype", "Pilot Plan", "Advanced AI Solutions"],
      color: "bg-purple-500",
      bgGradient: "from-purple-50 to-purple-100"
    }
  ];

  const tracks = [
    {
      title: "Technology Track",
      items: ["Smart Zebra Crossing", "AI-based Accident Detection", "Mobile Alert Apps"],
      icon: "💻"
    },
    {
      title: "Education Track",
      items: ["Short Films", "Street Plays", "Innovative Posters"],
      icon: "📚"
    },
    {
      title: "Design Track",
      items: ["Intersection Redesign", "Speed Calming Ideas", "Eco-friendly Signage"],
      icon: "🎨"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Categories Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Participation Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the appropriate category according to your eligibility and present your innovative ideas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className={`bg-gradient-to-br ${category.bgGradient} border-0 shadow-card hover:shadow-float transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold text-foreground">
                  {category.title}
                </CardTitle>
                <Badge variant="secondary" className="mx-auto">
                  {category.target}
                </Badge>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-3">Examples:</h4>
                <ul className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {example}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tracks Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Main Topics (Tracks)
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose any track according to your interest and skills and do exceptional work in it
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-0 shadow-card hover:shadow-float transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{track.icon}</div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {track.title}
                </h3>
                <ul className="space-y-2">
                  {track.items.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      • {item}
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

export default Categories;