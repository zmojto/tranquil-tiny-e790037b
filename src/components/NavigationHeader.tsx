import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "O nás", href: "#about" },
  { label: "Pobyty", href: "#retreats" },
  { label: "Program", href: "#program" },
  { label: "Galéria", href: "#gallery" },
  { label: "Referencie", href: "#testimonials" },
  { label: "Časté otázky", href: "#faq" },
  { label: "Blog", href: "/blog", isPage: true },
  { label: "Kontakt", href: "#contact" },
];

const NavigationHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isRetreatPage = location.pathname.startsWith("/retreats");
  const isBlogPage = location.pathname.startsWith("/blog");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (link.isPage) {
      navigate(link.href);
      return;
    }
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/" + link.href);
      return;
    }
    
    // Scroll to section on home page
    const element = document.querySelector(link.href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isLinkActive = (link: typeof navLinks[0]) => {
    if (link.isPage && isBlogPage) return true;
    if (link.href === "#retreats" && isRetreatPage) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          onClick={handleLogoClick}
          className={`font-serif text-2xl transition-colors ${
            isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
          }`}
        >
          Samāveśa
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.isPage ? link.href : link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? isLinkActive(link) ? "text-primary" : "text-muted-foreground hover:text-primary"
                  : isLinkActive(link) ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Prepnúť menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/10 animate-fade-in">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.isPage ? link.href : link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-base font-medium transition-colors py-2 ${
                  isLinkActive(link)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavigationHeader;
