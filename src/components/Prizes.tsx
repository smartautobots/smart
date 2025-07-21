import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      position: "First Place",
      amount: "₹10,000",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
      borderColor: "border-yellow-400",
      benefits: ["Cash Prize", "Certificate", "Incubation"],
      rank: "🥇"
    },
    {
      position: "Second Place",
      amount: "₹5,000",
      icon: Medal,
      color: "from-gray-300 to-gray-500",
      borderColor: "border-gray-400",
      benefits: ["Cash Prize", "Certificate"],
      rank: "🥈"
    },
    {
      position: "Third Place",
      amount: "₹3,000",
      icon: Award,
      color: "from-amber-600 to-amber-800",
      borderColor: "border-amber-600",
      benefits: ["Cash Prize", "Certificate"],
      rank: "🥉"
    },
    {
      position: "Top 10",
      amount: "Top 10",
      icon: Star,
      color: "from-purple-400 to-purple-600",
      borderColor: "border-purple-400",
      benefits: ["Appreciation Certificates"],
      rank: "⭐"
    }
  ];

  const additionalBenefits = [
    {
      title: "Incubation Support",
      description: "Support for winning teams to convert their ideas into business",
      icon: "🚀"
    },
    {
      title: "Mentorship Program",
      description: "6-month mentorship with industry experts",
      icon: "👨‍🏫"
    },
    {
      title: "Networking",
      description: "Opportunity to connect with innovators and professionals",
      icon: "🤝"
    },
    {
      title: "Media Coverage",
      description: "Wide publicity and recognition for your ideas",
      icon: "📺"
    }
  ];

  return (
    <section id="prizes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Prizes and Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Attractive prizes and long-term benefits for your innovative ideas and hard work
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {prizes.map((prize, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br ${prize.color} border-2 ${prize.borderColor} shadow-card hover:shadow-float transition-all duration-300 animate-fade-in text-white`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{prize.rank}</div>
                <prize.icon className="h-8 w-8 mx-auto mb-2" />
                <CardTitle className="text-lg font-heading font-bold">
                  {prize.position}
                </CardTitle>
                <div className="text-2xl font-bold">{prize.amount}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {prize.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Total Prize Pool */}
        <div className="text-center mb-16">
          <Card className="bg-gradient-hero text-white border-0 shadow-float max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-heading font-bold mb-2">Total Prize Money</h3>
              <div className="text-4xl font-bold">₹18,000</div>
              <p className="text-sm mt-2 opacity-90">+ Additional Benefits</p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Benefits */}
        <div>
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            Additional Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-card hover:shadow-float transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-heading font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-accent border-0 shadow-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Are You Ready?
              </h3>
              <p className="text-muted-foreground mb-6">
                Be part of this historic challenge with your ideas and bring positive change to society
              </p>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Registration Opens: 21 July, 2025
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Prizes;