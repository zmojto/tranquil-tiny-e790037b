import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 section-gradient scroll-mt-20">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" />
        
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-10 italic">
          "Tento pobyt bol zlomovým bodom v mojom živote. Kombinácia skúsených 
          učiteľov, úchvatnej lokality a duchovnej komunity vytvorila priestor, 
          kde bola skutočná premena možná. Odišla som obnovená, vycentrovaná 
          a hlboko spojená so svojím poslaním."
        </blockquote>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="font-serif text-2xl text-primary">S</span>
          </div>
          <div className="text-left">
            <p className="font-medium text-foreground">Sára Mladá</p>
            <p className="text-muted-foreground text-sm whitespace-pre-line">Učiteľka {"\n"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
