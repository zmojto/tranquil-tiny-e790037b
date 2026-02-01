import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram } from "lucide-react";

const blogCategories = [
  { label: "Yoga", href: "/blog?category=Yoga" },
  { label: "Meditation", href: "/blog?category=Meditation" },
  { label: "Wellness", href: "/blog?category=Wellness" },
  { label: "Nutrition", href: "/blog?category=Nutrition" },
];

const FooterSection = () => {
  return (
    <footer id="contact" className="py-16 md:py-20 bg-primary text-primary-foreground scroll-mt-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-4">Begin Your Journey</h3>
            <p className="text-primary-foreground/80 mb-6">
              Have questions? We'd love to hear from you. Reach out and let's 
              start a conversation about your wellness journey.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:hello@sereneretreats.com" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors justify-center md:justify-start"
              >
                <Mail className="w-5 h-5" />
                hello@sereneretreats.com
              </a>
              <a 
                href="#" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors justify-center md:justify-start"
              >
                <Instagram className="w-5 h-5" />
                @sereneretreats
              </a>
              <span className="flex items-center gap-3 text-primary-foreground/80 justify-center md:justify-start">
                <MapPin className="w-5 h-5" />
                Bali • Costa Rica • Portugal
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-serif text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</a>
              <a href="#retreats" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Our Retreats</a>
              <a href="#program" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Programs</a>
              <Link to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</Link>
            </nav>
          </div>

          {/* Blog Categories */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-lg mb-4">From the Journal</h4>
            <nav className="flex flex-col gap-2">
              {blogCategories.map((cat) => (
                <Link 
                  key={cat.label}
                  to={cat.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {cat.label} Articles
                </Link>
              ))}
            </nav>
          </div>
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
