import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Globe, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "roadsafety2025@innovationlab.in",
      link: "mailto:roadsafety2025@innovationlab.in"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Government Polytechnic, Ahmedabad",
      link: "#"
    },
    {
      icon: Globe,
      title: "Website",
      info: "www.roadsafetychallenge2025.in",
      link: "https://www.roadsafetychallenge2025.in"
    }
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      title: "WhatsApp Group",
      info: "Challenge Updates",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Facebook",
      info: "Community Page",
      color: "bg-blue-600"
    }
  ];

  const organizingTeam = [
    {
      name: "Project and Innovation Lab",
      role: "Main Organizer",
      description: "Leading organization in technology and innovation"
    },
    {
      name: "Gujarat RTO",
      role: "Collaboration Partner",
      description: "Expert in road safety and traffic rules"
    },
    {
      name: "Traffic Police",
      role: "Advisor",
      description: "Practical guidance and support"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Contact and Information
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us for any questions or assistance. We are always ready to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{contact.title}</h4>
                      <a 
                        href={contact.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contact.info}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Social Media
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center`}>
                      <social.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{social.title}</h4>
                      <p className="text-muted-foreground">{social.info}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Organizing Team */}
            <Card className="bg-white border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Organizing Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {organizingTeam.map((team, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">{team.name}</h4>
                    <p className="text-primary text-sm font-medium">{team.role}</p>
                    <p className="text-muted-foreground text-sm">{team.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Ask Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="Your email" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Category
                  </label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>School Category</option>
                    <option>College Category</option>
                    <option>Open Category</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Write your question or message..."
                    rows={5}
                  />
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-hero text-white border-0 shadow-card mt-8">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                    Registration Guidelines Download
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                    FAQ Document
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                    Sample Project Templates
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Important Note */}
        <div className="mt-16">
          <Card className="bg-white border-l-4 border-primary shadow-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                📢 Important Notice
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Registration will only be accepted online</li>
                  <li>• All updates will be received via email and WhatsApp</li>
                  <li>• Plagiarism will be strictly checked</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Maximum 4 members in a team</li>
                  <li>• Registration fee: Free</li>
                  <li>• Certificates will be given to all</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;