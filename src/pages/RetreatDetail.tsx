import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Users, Check, Clock, Plane, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavigationHeader from "@/components/NavigationHeader";
import FooterSection from "@/components/FooterSection";
import RetreatBookingForm from "@/components/RetreatBookingForm";
import { getRetreatById } from "@/data/retreats";

const RetreatDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const retreat = id ? getRetreatById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (retreat) {
      document.title = `${retreat.name} – Jógový pobyt | Serene`;
      
      // Update meta description
      const metaDesc = `${retreat.name} – jógový pobyt v destinácii ${retreat.location}. Meditácia, jóga a wellness pre max. 12 hostí. Rezervujte si miesto.`;
      const trimmedDesc = metaDesc.length > 160 ? metaDesc.slice(0, 157) + "..." : metaDesc;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", trimmedDesc);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogTitle) ogTitle.setAttribute("content", `${retreat.name} – Jógový pobyt | Serene`);
      if (ogDescription) ogDescription.setAttribute("content", trimmedDesc);
    }
  }, [retreat]);

  if (!retreat) {
    return (
      <div className="min-h-screen bg-background">
        <NavigationHeader />
        <div className="pt-32 pb-24 text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Pobyt nenájdený</h1>
          <p className="text-muted-foreground mb-8">Pobyt, ktorý hľadáte, neexistuje.</p>
          <Button variant="hero" onClick={() => navigate("/#retreats")}>
            Zobraziť všetky pobyty
          </Button>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${retreat.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        <div className="relative container max-w-6xl mx-auto px-6">
          <Link 
            to="/#retreats" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Späť na všetky pobyty
          </Link>

          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            {retreat.tagline}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
            {retreat.name}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{retreat.location}, {retreat.country}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>{retreat.dates}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span>{retreat.spotsLeft} zostávajúcich miest</span>
            </div>
          </div>

          <div className="flex items-baseline gap-2 mb-8">
            <span className="font-serif text-4xl md:text-5xl text-foreground">
              {retreat.price.toLocaleString()} €
            </span>
            <span className="text-muted-foreground">za osobu</span>
          </div>

          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          >
            Rezervovať miesto
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-4xl mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans text-center">
            O tomto pobyte
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 text-center">
            Vaša cesta čaká
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            {retreat.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Info Section */}
      {retreat.travelInfo && (() => {
        const isFlight = !retreat.travelInfo.transportType || retreat.travelInfo.transportType === "flight";
        const TransportIcon = isFlight ? Plane : Car;
        return (
        <section className="py-16 md:py-24 bg-background">
          <div className="container max-w-4xl mx-auto px-6">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans text-center">
              Cestovné informácie
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
              {isFlight ? "Informácie o lete" : "Informácie o doprave"}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TransportIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">{isFlight ? "Odlet" : "Príchod"}</p>
                  <p className="text-muted-foreground">{retreat.travelInfo.outbound.flight}</p>
                  <p className="text-muted-foreground text-sm">{retreat.travelInfo.outbound.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TransportIcon className={`w-5 h-5 text-primary ${isFlight ? "rotate-180" : ""}`} />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">{isFlight ? "Návrat" : "Odchod"}</p>
                  <p className="text-muted-foreground">{retreat.travelInfo.returnFlight.flight}</p>
                  <p className="text-muted-foreground text-sm">{retreat.travelInfo.returnFlight.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-medium text-sm">€</span>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">{isFlight ? "Cena letenky" : "Cena dopravy"}: {retreat.travelInfo.ticketPrice}</p>
                  <p className="text-muted-foreground text-sm">{retreat.travelInfo.note}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        );
      })()}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans text-center">
            Vzorový rozvrh
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
            Deň v raji
          </h2>
          <div className="space-y-4">
            {retreat.dailySchedule.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-primary/10"
              >
                <div className="flex items-center gap-2 min-w-[100px] text-primary">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.time}</span>
                </div>
                <span className="text-foreground">{item.activity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-4xl mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans text-center">
            Všetko čo potrebujete
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
            Čo je zahrnuté
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {retreat.inclusions.map((inclusion, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{inclusion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-6xl mx-auto px-6">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans text-center">
            Galéria
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-center">
            Pohľady do raja
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {retreat.galleryImages.map((image, index) => (
              <div 
                key={index}
                className="aspect-square rounded-xl overflow-hidden"
              >
                <img 
                  src={image} 
                  alt={`${retreat.name} galéria obrázok ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <RetreatBookingForm retreat={retreat} />

      <FooterSection />
    </div>
  );
};

export default RetreatDetail;
