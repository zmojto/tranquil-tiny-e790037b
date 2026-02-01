import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramSection = () => {
  const inclusions = [
    "7 nights luxury eco-lodge accommodation",
    "Daily sunrise & sunset yoga sessions",
    "Guided meditation & breathwork",
    "Three organic plant-based meals daily",
    "Spa treatment or wellness massage",
    "Sound healing ceremony",
    "Curated nature excursion",
    "Airport transfers & welcome ritual"
  ];

  return (
    <section id="program" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
              What's Included
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Everything You Need to Unwind
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Every retreat includes the same thoughtfully curated experience. 
              From the moment you arrive, simply be present.
            </p>
            
            <ul className="space-y-4 mb-10">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Pricing Card */}
          <div className="bg-background rounded-3xl p-10 md:p-12 shadow-glow">
            <div className="text-center">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2 font-sans">
                Investment
              </p>
              <div className="mb-6">
                <span className="font-serif text-5xl md:text-6xl text-foreground">$2,600 – $3,200</span>
                <span className="text-muted-foreground text-lg ml-2 block mt-2">per person</span>
              </div>
              <p className="text-muted-foreground mb-8">
                Pricing varies by destination • Single rooms available
              </p>
              
              <Button 
                variant="hero" 
                className="w-full mb-4"
                onClick={() => document.getElementById('retreats')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Choose Your Retreat
              </Button>
              
              <p className="text-muted-foreground text-sm">
                Limited to 12 guests per retreat • $500 deposit to secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
