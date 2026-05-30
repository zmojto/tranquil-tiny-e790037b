import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Aký je rozdiel medzi jednotlivými pobytmi?",
    answer: "Zatiaľ čo všetky pobyty zahŕňajú rovnaký základný zážitok (denná jóga, meditácia, workshopy, organické jedlá), každá destinácia ponúka jedinečné kultúrne zážitky. Cyprus Bali ponúka plážovú prax a návštevy historických palácov, Podpoľanie vyniká množstvom lesov, potokov a minerálnych prameňov, ale aj ľudovou kultúrou a Krpáčovo napríklad rozľahlými pláňami a túrami po Národnom parku Nízke Tatry. Okrem prírody a kultúrnych inakosti, sú pobyty rôzne dlhé.",
  },
  {
    question: "Čo je zahrnuté v balíku pobytu?",
    answer: "Každý pobyt zahŕňa ubytovanie, tri organické jedlá denne, jógové lekcie, workshopy, vedené meditácie, výlety do prírody, letiskové transfery. Od príchodu spomalíte a regenerujete. Pohyb, dych a ticho postupne uvoľnia napätie a vrátia vás viac k sebe - pokojnejších, pevnejších, viac v rovnováhe.",
  },
  {
    question: "Potrebujem predchádzajúce skúsenosti s jógou?",
    answer: "Predchádzajúce skúsenosti nie sú potrebné. Prispôsobujeme sa všetkým úrovniam, od úplných začiatočníkov po pokročilých praktizujúcich. Každá lekcia ponúka modifikácie prispôsobené vašej osobnej praxi. Pracujeme v malých skupinách. ",
  },
  {
    question: "Čo si mám priniesť?",
    answer: "Odporúčame pohodlné oblečenie na jógu, jógamatku, plavky, turistickú obuv, opaľovací krém a opakovane použiteľnú fľašu na vodu.",
  },
  {
    question: "Ako sa dostanem na miesto pobytu?",
    answer: "Poskytujeme letiskové transfery z najbližšieho medzinárodného letiska pre každú destináciu. Podrobné pokyny k cestovaniu a informácie o vyzdvihnutí budú zaslané po potvrdení rezervácie.",
  },
  {
    question: "Aká je vaša politika zrušenia?",
    answer: "Plná refundácia je k dispozícii 30 a viac dní pred začiatkom pobytu. Zrušenia do 30 dní dostávajú 0% refundáciu.",
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
              <AccordionTrigger className="text-left font-sans text-lg text-foreground hover:text-primary hover:no-underline">
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
