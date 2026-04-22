import { Sunrise, Sun, Moon } from "lucide-react";

const DailyProgramSection = () => {
  return (
    <section id="daily-program" className="py-24 md:py-32 scroll-mt-20">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Typický deň v retreate
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Program dňa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Rytmus dňa, ktorý vás jemne prevedie od ranného prebudenia
            cez vedomý odpočinok až po hlbokú večernú regeneráciu.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <TimelineCard
            icon={<Sunrise className="w-8 h-8" />}
            time="Ráno"
            title="Hathajóga flow"
            description="Začnite deň so svitaním. Vedená meditácia, dychové cvičenia a Hathajóga flow pre prebudenie tela aj mysle."
          />
          <TimelineCard
            icon={<Sun className="w-8 h-8" />}
            time="Popoludnie"
            title="Objavovanie a relax"
            description="Čas pre seba: prechádzky v prírode, ajurvédske jedlá, sauna, čítanie alebo workshopy osobného rastu."
          />
          <TimelineCard
            icon={<Moon className="w-8 h-8" />}
            time="Večer"
            title="Regeneračná prax"
            description="Jemné večerné lekcie jógy, dychu a relaxácie pre hlboký a regeneračný spánok."
          />
        </div>
      </div>
    </section>
  );
};

interface TimelineCardProps {
  icon: React.ReactNode;
  time: string;
  title: string;
  description: string;
}

const TimelineCard = ({ icon, time, title, description }: TimelineCardProps) => {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
        {icon}
      </div>
      <p className="text-primary uppercase tracking-[0.2em] text-xs mb-2 font-sans">
        {time}
      </p>
      <h3 className="font-serif text-2xl text-foreground mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default DailyProgramSection;
