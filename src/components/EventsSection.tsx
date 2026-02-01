import { useState } from "react";
import { MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BookingModal from "./BookingModal";

interface RetreatEvent {
  id: string;
  name: string;
  tagline: string;
  location: string;
  country: string;
  dates: string;
  price: number;
  spotsLeft: number;
  highlights: string[];
}

const retreats: RetreatEvent[] = [
  {
    id: "bali-bliss",
    name: "Bali Bliss",
    tagline: "Awaken in Paradise",
    location: "Ubud",
    country: "Bali, Indonesia",
    dates: "March 15-22, 2026",
    price: 2800,
    spotsLeft: 8,
    highlights: ["Rice terrace views", "Traditional ceremonies", "Waterfall excursions"]
  },
  {
    id: "costa-rica",
    name: "Costa Rica Escape",
    tagline: "Pure Vida Energy",
    location: "Nosara",
    country: "Costa Rica",
    dates: "May 10-17, 2026",
    price: 3200,
    spotsLeft: 6,
    highlights: ["Beachfront practice", "Surf lessons", "Jungle adventures"]
  },
  {
    id: "portugal-soul",
    name: "Portugal Soul",
    tagline: "Mediterranean Serenity",
    location: "Sintra",
    country: "Portugal",
    dates: "September 5-12, 2026",
    price: 2600,
    spotsLeft: 10,
    highlights: ["Historic palaces", "Ocean cliff walks", "Wine country tours"]
  }
];

const EventsSection = () => {
  const [selectedRetreat, setSelectedRetreat] = useState<RetreatEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReserveClick = (retreat: RetreatEvent) => {
    setSelectedRetreat(retreat);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="retreats" className="py-24 md:py-32 bg-card scroll-mt-20">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
              2026 Retreats
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Choose Your Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Three unique destinations, one transformative experience. Each retreat offers
              7 days of yoga, meditation, and connection in stunning natural settings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreats.map((retreat) => (
              <Card 
                key={retreat.id} 
                className="group bg-background border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Header with gradient */}
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 text-center">
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
                        <Users className="w-5 h-5 text-primary" />
                        <span>{retreat.spotsLeft} spots remaining</span>
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
                        <span className="font-serif text-4xl text-foreground">${retreat.price.toLocaleString()}</span>
                        <span className="text-muted-foreground ml-2">per person</span>
                      </div>
                      <Button 
                        variant="hero" 
                        className="w-full"
                        onClick={() => handleReserveClick(retreat)}
                      >
                        Reserve Your Spot
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12">
            All retreats include 7 nights accommodation, daily yoga & meditation, organic meals, and curated experiences.
          </p>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        retreat={selectedRetreat}
      />
    </>
  );
};

export default EventsSection;
