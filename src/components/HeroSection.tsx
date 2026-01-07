import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-retreat.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p 
          className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-6 animate-fade-up font-sans"
          style={{ animationDelay: "0.1s" }}
        >
          Escape • Restore • Transform
        </p>
        
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-fade-up leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          Find Your
          <span className="block italic">Inner Peace</span>
        </h1>
        
        <p 
          className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up font-light leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          A transformative 7-day yoga retreat nestled in the heart of nature. 
          Reconnect with yourself through daily practice, meditation, and mindful living.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button variant="hero">
            Reserve Your Spot
          </Button>
          <Button variant="heroOutline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            Learn More
          </Button>
        </div>
        
        <p 
          className="text-primary-foreground/60 text-sm mt-8 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          March 15-22, 2026 • Bali, Indonesia
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
