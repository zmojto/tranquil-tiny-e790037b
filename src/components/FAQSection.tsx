import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Aký je rozdiel medzi jednotlivými pobytmi?",
    answer: "Zatiaľ čo všetky pobyty zahŕňajú rovnaký základný zážitok (7 nocí, denná jóga, meditácia, organické jedlá), každá destinácia ponúka jedinečné kultúrne zážitky. Bali ponúka tradičné ceremónie a výhľady na ryžové terasy, Kostarika plážovú prax a dobrodružstvá v džungli, a Portugalsko návštevy historických palácoov a túry po vinárskej oblasti.",
  },
  {
    question: "Čo je zahrnuté v balíku pobytu?",
    answer: "Každý pobyt zahŕňa luxusné eko-lodge ubytovanie, tri organické jedlá denne, dve jógové lekcie denne, vedené meditácie, kúpeľné ošetrenia, výlety do prírody a letiskové transfery. Každá lokácia tiež ponúka jedinečné miestne zážitky.",
  },
  {
    question: "Potrebujem predchádzajúce skúsenosti s jógou?",
    answer: "Nie, predchádzajúce skúsenosti nie sú potrebné. Naši inštruktori sa prispôsobujú všetkým úrovniam, od úplných začiatočníkov po pokročilých praktizujúcich. Každá lekcia ponúka modifikácie prispôsobené vašej osobnej praxi.",
  },
  {
    question: "Čo si mám priniesť?",
    answer: "Odporúčame pohodlné oblečenie na jógu, plavky, turistickú obuv, opaľovací krém a opakovane použiteľnú fľašu na vodu. Jógové podložky a pomôcky sú k dispozícii, ale môžete si priniesť vlastné, ak chcete.",
  },
  {
    question: "Ako sa dostanem na miesto pobytu?",
    answer: "Poskytujeme letiskové transfery z najbližšieho medzinárodného letiska pre každú destináciu. Podrobné pokyny k cestovaniu a informácie o vyzdvihnutí budú zaslané po potvrdení rezervácie.",
  },
  {
    question: "Aká je vaša politika zrušenia?",
    answer: "Plná refundácia je k dispozícii do 30 dní pred začiatkom pobytu. Zrušenia do 30 dní dostávajú 50% refundáciu alebo plný kredit na akýkoľvek budúci pobyt.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-background scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Časté otázky
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4">
            Otázky a odpovede
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-primary/20">
              <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
