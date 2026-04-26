import { Link } from "react-router-dom";
import { MapPin, Calendar, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { retreats } from "@/data/retreats";

const activeIds = ["cyprus-awakening", "krpacovo-soul", "blatinka-retreat", "croatia-harmony", "necpaly-retreat"];
const upcomingIds = ["bali-bliss", "costa-rica"];

const EventsSection = () => {
  // Filter retreats to show only active and selected upcoming
  const filteredRetreats = retreats.filter(
    (retreat) => activeIds.includes(retreat.id) || upcomingIds.includes(retreat.id)
  );
  return (
    <section id="retreats" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Pobyty 2026
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Vyberte si svoju cestu
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Sedem jedinečných destinácií, jeden transformačný zážitok. Všetky pobyty zahŕňajú ubytovanie, dennú jógu a meditáciu, workshopy, organické jedlá a unikátné zážitky.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRetreats.map((retreat) => {
            const isActive = activeIds.includes(retreat.id);
            return (
              <Card
                key={retreat.id}
                className={`group bg-background border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden ${
                  !isActive ? "opacity-60" : ""
                }`}
              >
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 text-center relative">
                    {!isActive && (
                      <Badge variant="secondary" className="absolute top-4 right-4 text-xs">
                        Pripravujeme
                      </Badge>
                    )}
                    <p className="text-primary text-sm uppercase tracking-widest mb-2 font-sans">
                      {retreat.tagline}
                    </p>
                    <h3 className="font-serif text-3xl text-foreground mb-2">
                      {retreat.name}
                    </h3>
                  </div>

                  {/* Details */}
                  <div className="p-8">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{retreat.location}, {retreat.country}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span>{retreat.dates}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        {isActive ? (
                          <>
                            <Users className="w-5 h-5 text-primary" />
                            <span>{retreat.spotsLeft} zostávajúcich miest</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-5 h-5 text-primary" />
                            <span>Termín sa upresní</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="mb-8 space-y-2">
                      {retreat.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Pricing & CTA */}
                    <div className="text-center border-t border-primary/10 pt-6">
                      <div className="mb-4">
                        <span className="font-serif text-4xl text-foreground">{retreat.price.toLocaleString('sk-SK')} €</span>
                        <span className="text-muted-foreground ml-2">za osobu</span>
                      </div>
                      {isActive ? (
                        <Button variant="hero" className="w-full" asChild>
                          <Link to={`/retreats/${retreat.id}`}>
                            Preskúmať pobyt
                          </Link>
                        </Button>
                      ) : (
                        <Button variant="heroOutline" className="w-full pointer-events-none opacity-70" disabled>
                          Čoskoro
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground mt-12">
          Aktivity sú starostlivo a odborne vybrané tak, aby vám priniesli vysokú kvalitu a ucelený tematický zážitok.
        </p>
      </div>
    </section>
  );
};

export default EventsSection;
