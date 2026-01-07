import { Mail, MapPin, Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 md:py-20 bg-primary text-primary-foreground scroll-mt-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Begin Your Journey
          </h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">
            Have questions? We'd love to hear from you. Reach out and let's 
            start a conversation about your wellness journey.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <a 
            href="mailto:hello@sereneretreats.com" 
            className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            hello@sereneretreats.com
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
            @sereneretreats
          </a>
          
          <span className="flex items-center gap-3 text-primary-foreground/80">
            <MapPin className="w-5 h-5" />
            Ubud, Bali, Indonesia
          </span>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Serene Retreats. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
