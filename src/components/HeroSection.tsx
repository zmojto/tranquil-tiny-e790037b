import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-retreat.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image (LCP) */}
      <img
        src={heroImage}
        alt="Jógový pobyt v prírode"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p 
          className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-6 animate-fade-up font-sans"
          style={{ animationDelay: "0.1s" }}
        >
          Uvolnenie • Obnova • Premena
        </p>
        
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-fade-up leading-tight"
          style={{ animationDelay: "0.2s" }}
        >
          Nájdite svoj
          <span className="block italic">vnútorný pokoj</span>
        </h1>
        
        <p 
          className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up font-light leading-relaxed"
          style={{ animationDelay: "0.4s" }}
        >
          Transformačné 3 až 7 dňové jogové pobyty na inšpiratívnych miestach sveta.
          Spomaľte, prehĺbte svoju každodennú prax, ponorte sa do meditácie a napojte sa na svoj prúd radosti a spokojnosti. 
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button 
            variant="hero"
            onClick={() => document.getElementById('retreats')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Zobraziť pobyty
          </Button>
          <Button 
            variant="heroOutline" 
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Zistiť viac
          </Button>
        </div>
        
        <p 
          className="text-primary-foreground/60 text-sm mt-8 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          3 Transformačné pobyty • 2026
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
