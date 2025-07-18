import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#categories', label: 'Categories' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#prizes', label: 'Prizes' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">🚦</span>
          </div>
          <div>
            <h1 className="text-xl font-heading font-bold text-foreground">
              Road Safety Challenge
            </h1>
            <p className="text-sm text-muted-foreground">2025</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Register Button */}
        <div className="hidden md:block">
          <Button variant="default" className="animate-pulse-glow" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
            Register Here
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="w-full mt-4" onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}>
              Register Here
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;