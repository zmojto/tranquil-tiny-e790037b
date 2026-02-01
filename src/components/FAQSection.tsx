import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's different between each retreat?",
    answer: "While all retreats include the same core experience (7 nights, daily yoga, meditation, organic meals), each destination offers unique cultural experiences. Bali features traditional ceremonies and rice terrace views, Costa Rica offers beachfront practice and jungle adventures, and Portugal includes historic palace visits and wine country tours.",
  },
  {
    question: "What is included in the retreat package?",
    answer: "Every retreat includes luxury eco-lodge accommodation, three organic meals daily, twice-daily yoga sessions, guided meditation, spa treatments, nature excursions, and airport transfers. Each location also features unique local experiences.",
  },
  {
    question: "Do I need prior yoga experience?",
    answer: "No prior experience is necessary. Our instructors cater to all levels, from complete beginners to advanced practitioners. Each session offers modifications to suit your personal practice.",
  },
  {
    question: "What should I bring?",
    answer: "We recommend comfortable clothing for yoga, swimwear, hiking shoes, sunscreen, and a reusable water bottle. Yoga mats and props are provided, but you're welcome to bring your own if preferred.",
  },
  {
    question: "How do I get to the retreat location?",
    answer: "We provide airport transfers from the nearest international airport for each destination. Detailed travel instructions and pickup arrangements will be sent upon booking confirmation.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "Full refunds are available up to 30 days before the retreat start date. Cancellations within 30 days receive a 50% refund or full credit toward any future retreat.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-background scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4">
            Frequently Asked
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
