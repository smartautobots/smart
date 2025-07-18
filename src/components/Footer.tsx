import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Categories", href: "#categories" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prizes", href: "#prizes" },
    { name: "Contact", href: "#contact" }
  ];

  const importantDates = [
    { event: "Registration Opens", date: "21 July 2025" },
    { event: "Round 1 Ends", date: "1 August 2025" },
    { event: "Final Event", date: "25 August 2025" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🚦</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Road Safety Challenge</h3>
                <p className="text-sm text-gray-400">2025</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Raising awareness about road safety among youth and reducing accidents through innovative solutions.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <Heart className="h-4 w-4 text-red-500 mr-2" />
              Safe Roads, Safe Future
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Important Dates</h4>
            <ul className="space-y-3">
              {importantDates.map((item, index) => (
                <li key={index} className="text-sm">
                  <div className="text-white font-medium">{item.event}</div>
                  <div className="text-gray-400">{item.date}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                roadsafety2025@innovationlab.in
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                +91 98765 43210
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                Government Polytechnic, Ahmedabad
              </div>
            </div>
            <Button 
              className="mt-4 w-full" 
              size="sm"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register Now
            </Button>
          </div>
        </div>

        {/* Organizer Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-lg font-heading font-semibold mb-4">Organizers and Partners</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-4">
                <h5 className="font-semibold text-primary">Project and Innovation Lab</h5>
                <p className="text-gray-400 text-sm">Main Organizer</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h5 className="font-semibold text-primary">Gujarat RTO</h5>
                <p className="text-gray-400 text-sm">Collaboration Partner</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h5 className="font-semibold text-primary">Traffic Police</h5>
                <p className="text-gray-400 text-sm">Advisor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center bg-gradient-hero rounded-lg p-6">
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              "Think for Safety... Change Roads through Innovation!"
            </h3>
            <p className="text-white/90">
              Let's work together to make road safety better
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>
              © 2025 Road Safety Innovation Challenge. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Proudly organized by Project and Innovation Lab
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;