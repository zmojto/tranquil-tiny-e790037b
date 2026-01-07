import { Leaf, Heart, Sun } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-gradient scroll-mt-20">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Our Philosophy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            A Journey Within
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            More than just a retreat, this is an invitation to slow down, breathe deeply, 
            and rediscover the harmony between body, mind, and soul.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <FeatureCard 
            icon={<Sun className="w-8 h-8" />}
            title="Daily Practice"
            description="Wake with the sunrise for morning Vinyasa flows and wind down with restorative evening sessions guided by master teachers."
          />
          <FeatureCard 
            icon={<Heart className="w-8 h-8" />}
            title="Mindful Living"
            description="Embrace plant-based Ayurvedic cuisine, digital detox, and conscious living practices that nurture your whole being."
          />
          <FeatureCard 
            icon={<Leaf className="w-8 h-8" />}
            title="Nature Immersion"
            description="Surrounded by tropical gardens and rice terraces, every moment becomes an opportunity for deep connection with nature."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
        {icon}
      </div>
      <h3 className="font-serif text-2xl text-foreground mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AboutSection;
