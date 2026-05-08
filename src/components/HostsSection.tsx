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
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Sabínka sa s vami podelí o etikoterapiu a rozhovory o spokojnosti v každodennom živote.<br />
            Ali vás prevedie jógovou a meditačnou praxou.<br />
            Spolu vytvárame priestor, kde má každý z vás možnosť rásť vlastným tempom.
          </p>
          <div className="mt-10 pt-10 border-t border-border/50 space-y-10">
            <div className="space-y-4">
              <h3 className="font-serif text-3xl text-foreground">
                Sabína Kalmárová
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vyštudovala sociológiu na FiFUK v Bratislave, školu Angelológie
                RNDr. Emila Páleša, Etikoterapiu v škole Advaita Mgr. Vladimíra
                Červenáka a je žiačkou Živej školy Iva Leinvebera.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Má bohaté skúsenosti ako etikoterapeutka aj lektorka –
                prednášala vo viac ako stovke firiem.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na našich pobytoch vás bude sprevádzať workshopmi na rôzne témy,
                ako sú <em>Mentálna odolnosť</em> či <em>Spokojnosť ako voľba</em>,
                a tiež meditačnou praxou.
              </p>
              <p className="text-lg">
                <a
                  href="https://sabinakalmarova.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  sabinakalmarova.sk
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-3xl text-foreground">
                Alena Hodáková
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vyštudovala Ekonomickú univerzitu v Bratislave, no jej cesta ju
                zaviedla k hlbšiemu poznaniu tela a mysle. Úspešne absolvovala
                štúdium Jogy a jogovej terapie na Fakulte telesnej výchovy
                a športu Univerzity Karlovej v Prahe, ako aj štúdium
                Etikoterapie v škole Advaita Mgr. Vladimíra Červenáka.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na našich pobytoch sa postará o:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground leading-relaxed">
                <li>
                  vedenie jogových cvičení (ásan) pre posilnenie a uvoľnenie
                  tela,
                </li>
                <li>
                  nácvik správnych dychových techník (pránájáma) pre upokojenie
                  mysle,
                </li>
                <li>
                  priblíženie jogovej filozofie a jej prepojenie s bežným
                  životom.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
