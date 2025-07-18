import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Globe, MessageCircle, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "ઈમેઈલ",
      info: "roadsafety2025@innovationlab.in",
      link: "mailto:roadsafety2025@innovationlab.in"
    },
    {
      icon: Phone,
      title: "ફોન",
      info: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      title: "સ્થળ",
      info: "Government Polytechnic, Ahmedabad",
      link: "#"
    },
    {
      icon: Globe,
      title: "વેબસાઈટ",
      info: "www.roadsafetychallenge2025.in",
      link: "https://www.roadsafetychallenge2025.in"
    }
  ];

  const socialLinks = [
    {
      icon: MessageCircle,
      title: "WhatsApp Group",
      info: "ચેલેન્જ અપડેટ્સ",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Facebook",
      info: "કમ્યુનિટી પેજ",
      color: "bg-blue-600"
    }
  ];

  const organizingTeam = [
    {
      name: "પ્રોજેક્ટ અને ઇનોવેશન લૅબ",
      role: "મુખ્ય આયોજક",
      description: "ટેકનોલોજી અને ઇનોવેશનના ક્ષેત્રમાં અગ્રેસર સંસ્થા"
    },
    {
      name: "Gujarat RTO",
      role: "સહયોગી પાર્ટનર",
      description: "માર્ગ સલામતી અને ટ્રાફિક નિયમોમાં નિષ્ણાત"
    },
    {
      name: "Traffic Police",
      role: "સલાહકાર",
      description: "વ્યાવહારિક માર્ગદર્શન અને સપોર્ટ"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            સંપર્ક અને માહિતી
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            કોઈપણ પ્રશ્ન અથવા મદદ માટે અમારી સાથે સંપર્ક કરો. અમે તમારી સહાયતા માટે હંમેશા તૈયાર છીએ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  સંપર્ક વિગતો
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
                  સોશિયલ મીડિયા
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
                  આયોજક ટીમ
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
                  પ્રશ્ન પૂછો
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      નામ *
                    </label>
                    <Input placeholder="તમારું નામ" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      ઈમેઈલ *
                    </label>
                    <Input type="email" placeholder="તમારું ઈમેઈલ" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    કેટેગરી
                  </label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>સ્કૂલ કેટેગરી</option>
                    <option>કોલેજ કેટેગરી</option>
                    <option>ઓપન કેટેગરી</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    સંદેશ *
                  </label>
                  <Textarea 
                    placeholder="તમારો પ્રશ્ન અથવા સંદેશ લખો..."
                    rows={5}
                  />
                </div>
                <Button className="w-full" size="lg">
                  સંદેશ મોકલો
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-gradient-hero text-white border-0 shadow-card mt-8">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-heading font-bold mb-4">
                  ઝડપી લિંક્સ
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
                📢 મહત્વપૂર્ણ સૂચના
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Registration માત્ર ઓનલાઇન જ સ્વીકારવામાં આવશે</li>
                  <li>• તમામ અપડેટ્સ ઈમેઈલ અને WhatsApp દ્વારા મળશે</li>
                  <li>• Plagiarism ની સખત તપાસ કરવામાં આવશે</li>
                </ul>
                <ul className="space-y-2">
                  <li>• ટીમમાં મહત્તમ 4 મેમ્બર્સ હોઈ શકે</li>
                  <li>• Registration fee: Free</li>
                  <li>• Certificates સૌને મળશે</li>
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