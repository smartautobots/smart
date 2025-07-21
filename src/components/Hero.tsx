import { Button } from '@/components/ui/button';
import { Calendar, Trophy, Users } from 'lucide-react';
import heroImage from '@/assets/hero-road-safety.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Road Safety Innovation" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Event Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full text-accent-foreground font-medium mb-6 animate-float">
            <span className="mr-2">🚦</span>
            Organized by Project and Innovation Lab
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Road Safety Innovation
            <br />
            <span className="text-primary-light">Challenge 2025</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Raising awareness about road safety among youth and reducing accidents through innovative solutions
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Calendar className="h-6 w-6 text-primary-light mx-auto mb-2" />
              <p className="text-white font-semibold">21 July - 25 August</p>
              <p className="text-white/80 text-sm">Launch: Guru Purnima</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Users className="h-6 w-6 text-primary-light mx-auto mb-2" />
              <p className="text-white font-semibold">3 Categories</p>
              <p className="text-white/80 text-sm">School, College, Open</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
              <Trophy className="h-6 w-6 text-primary-light mx-auto mb-2" />
              <p className="text-white font-semibold">₹18,000</p>
              <p className="text-white/80 text-sm">Total Prize Money</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-3 animate-pulse-glow"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Tagline */}
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
            <p className="text-2xl font-heading font-semibold text-white">
              "Think for Safety... Change Roads through Innovation!"
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;