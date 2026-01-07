import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-24 md:py-32 section-gradient">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />
        
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-10 italic">
          "This retreat was a turning point in my life. The combination of skilled 
          teachers, breathtaking location, and soulful community created a space 
          where true transformation was possible. I left feeling renewed, centered, 
          and deeply connected to my purpose."
        </blockquote>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="font-serif text-2xl text-primary">S</span>
          </div>
          <div className="text-left">
            <p className="font-medium text-foreground">Sarah Mitchell</p>
            <p className="text-muted-foreground text-sm">Yoga Teacher, California</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
