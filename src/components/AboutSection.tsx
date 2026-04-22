import { Leaf, Heart, Sun } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-gradient scroll-mt-20">
      <div className="container max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
            Naša filozofia
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Cesta do vnútra
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Viac ako len pobyt, toto je pozvánka spomaliť, hlboko sa nadýchnuť
            a znovu objaviť harmóniu medzi telom, mysľou a dušou.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <FeatureCard 
            icon={<Sun className="w-8 h-8" />}
            title="Denná prax"
            description="Prebuďte sa so svitaním na ranné Hathajóga flow a ukončite deň regeneračnými večernými lekciami pod vedením skúsených učiteľov. "
          />
          <FeatureCard 
            icon={<Heart className="w-8 h-8" />}
            title="Vedomý život"
            description="Objavte silu rastlinnej a ajurvédskej stravy, digitálneho detoxu a každodenných rituálov. Počas pobytu ich prirodzene začleníte do tela a mysle tak, že po návrate domov v nich budete plynulo pokračovať."
          />
          <FeatureCard 
            icon={<Leaf className="w-8 h-8" />}
            title="Ponorenie do prírody"
            description="Slnečné pobrežia s vôňou mora, kamenné zátoky a šum vĺn, horské lúky, husté smrekové lesy a ticho dolín – každé prostredie prináša jedinečný zážitok prepojenia s prírodou, ktorá lieči životnú energiu v našom tele."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="text-center group">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
        {icon}
      </div>
      <h3 className="font-serif text-2xl text-foreground mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AboutSection;
