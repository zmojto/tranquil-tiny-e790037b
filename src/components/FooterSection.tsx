import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";

const blogCategories = [
  { label: "Jóga", href: "/blog?category=Yoga" },
  { label: "Meditácia", href: "/blog?category=Meditation" },
  { label: "Rovnováha", href: "/blog?category=Rovnováha" },
  { label: "Výživa", href: "/blog?category=Nutrition" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 md:py-20 bg-primary text-primary-foreground scroll-mt-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-4">Začnite svoju cestu</h3>
            <p className="text-primary-foreground/80 mb-6">
              Máte otázky? Rady vás vypočujeme. Napíšte nám.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:samavesa26@gmail.com" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors justify-center md:justify-start"
              >
                <Mail className="w-5 h-5" />
                samavesa26@gmail.com
              </a>
              <span className="flex items-center gap-3 text-primary-foreground/80 justify-center md:justify-start">
                <MapPin className="w-5 h-5" />
                Cyprus • Podpoľanie • Krpáčovo
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-serif text-lg mb-4">Rýchle odkazy</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">O nás</a>
              <a href="#retreats" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Naše pobyty</a>
              <a href="#program" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Program</a>
              <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</Link>
            </nav>
          </div>

          {/* Blog Categories */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg mb-4">Z blogu</h4>
            <nav className="flex flex-col gap-2">
              {blogCategories.map((cat) => (
                <Link 
                  key={cat.label}
                  to={cat.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Články o {cat.label.toLowerCase() === "jóga" ? "jóge" : cat.label.toLowerCase() === "meditácia" ? "meditácii" : cat.label.toLowerCase() === "výživa" ? "výžive" : cat.label.toLowerCase()}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Samaveša. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
