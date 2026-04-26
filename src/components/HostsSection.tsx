import sabiAli from "@/assets/sabi-ali.jpg";

const HostsSection = () => {
  return (
    <section id="hosts" className="py-24 px-6 bg-secondary/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
            <img
              src={sabiAli}
              alt="Sabínka a Ali – sprievodkyne pobytov"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary/10 w-32 h-32 rounded-2xl -z-10" />
        </div>

        <div>
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Vaše sprievodkyne
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mt-4 mb-6">
            Sabínka a Ali vás povedú
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Tešíme sa na spoločný čas s vami. Každý pobyt pripravujeme s láskou,
            pozornosťou a otvoreným srdcom – aby ste sa pri nás cítili vítaní,
            v bezpečí a inšpirovaní vrátiť sa späť k sebe.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sabínka vás prevedie meditačnou praxou a vnútorným stíšením,
            Ali sa s vami podelí o etikoterapiu a rozhovory o spokojnosti
            v každodennom živote. Spolu vytvárame priestor, kde má každý z vás
            možnosť rásť vlastným tempom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
