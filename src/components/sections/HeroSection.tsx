import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import campHelpLogo from '@/assets/camp-help-logo.png';

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
        <div className="mb-8">
          <img 
            src={campHelpLogo} 
            alt="Camp Help Logo" 
            className="mx-auto h-24 w-auto mb-6 animate-scale-in"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Welcome to
          <span className="block text-accent">Camp Help</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-slide-up">
          Your premier educational facility providing comprehensive support for academic excellence, 
          exam preparation, and campus life enhancement.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 elegant-shadow text-lg px-8 py-6"
            onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Facilities
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            onClick={() => document.getElementById('timings')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Schedule
          </Button>
        </div>
        
        <button 
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white smooth-transition animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;