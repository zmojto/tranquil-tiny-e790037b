import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProgramSection = () => {
  const inclusions = [
  "7 nocí v luxusnom ubytovaní / 4 noci v útulnej štýlovej kolibe",
  "Denné ranné a večerné jógové lekcie",
  "Vedená meditácia a dychové cvičenia",
  "Tri ajurvédské rastlinné jedlá denne",
  "Wellness",
  "Workshopy Sloboda je voľba, o transformácii mysle: od napätia k pokoju",
  "Kurátorovaný výlet do prírody",
  "Letiskové transfery a uvítací rituál"];


  return (
    <section id="program" className="py-24 md:py-32 bg-card scroll-mt-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-sans">
              Čo je zahrnuté
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Všetko čo potrebujete na oddych
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Každý pobyt zahŕňa rovnaký starostlivo zostavený zážitok. Od chvíle príchodu jednoducho buďte prítomní. Práca s telom, mysľou a emóciami, pestovanie spokojnosti a stability v každodennom živote, je pozvánkou návratu k sebe.
            
            </p>
            
            <ul className="space-y-4 mb-10">
              {inclusions.map((item, index) =>
              <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              )}
            </ul>
          </div>
          
          {/* Pricing Card */}
          <div className="bg-background rounded-3xl p-10 md:p-12 shadow-glow">
            <div className="text-center">
              <p className="text-primary uppercase tracking-[0.2em] text-sm mb-2 font-sans">
                Investícia
              </p>
              <div className="mb-6">
                <span className="font-serif text-5xl md:text-6xl text-foreground">1 000 € - 3 200 € </span>
                <span className="text-muted-foreground text-lg ml-2 block mt-2">za osobu</span>
              </div>
              <p className="text-muted-foreground mb-8">
                Ceny sa líšia podľa destinácie • K dispozícii jednoložné izby
              </p>
              
              <Button
                variant="hero"
                className="w-full mb-4"
                onClick={() => document.getElementById('retreats')?.scrollIntoView({ behavior: 'smooth' })}>

                Vyberte si pobyt
              </Button>
              
              <p className="text-muted-foreground text-sm">
                Maximálne 12 hostí na pobyt • Záloha 500 $ na potvrdenie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ProgramSection;