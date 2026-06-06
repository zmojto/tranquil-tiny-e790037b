import sabiAli from "@/assets/sabi-ali.jpg";

const HostsSection = () => {
  return (
    <section id="hosts" className="py-24 px-6 bg-secondary/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              pozornosťou a otvoreným srdcom – aby ste sa pri nás cítili
              v bezpečí, prirodzene, aby ste sa uvoľnili a odniesli si viac než
              len zážitok.
              <br />
              Sabínka sa s vami podelí o etikoterapiu a rozhovory o spokojnosti v každodennom živote.
              <br />
              Ali vás prevedie jógovou praxou.
              <br />
              Spolu vytvárame priestor, kde má každý z vás možnosť rásť vlastným tempom.
              <br />
              A pretože chceme, aby ste si odniesli maximum, ako bonus k nášmu pobytu dostane, v prípade záujmu, každý účastník možnosť osobnej etikoterapeutickej konzultácie v cene pobytu.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-border/50 grid md:grid-cols-2 gap-12">
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
              prednášala vo viac ako stovke firiem. Venuje sa tiež práci s pozornosťou.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na našich pobytoch vás bude sprevádzať workshopmi na rôzne témy,
              ako sú <em>Mentálna odolnosť</em> či <em>Spokojnosť ako voľba</em>,
              a tiež meditačnou praxou.{" "}
            </p>
            <p className="text-lg">
              <a
                href="https://sabinakalmarova.sk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                www.sabinakalmarova.sk
              </a>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-3xl text-foreground">
              Sabína Kalmárová
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vyštudovala Ekonomickú univerzitu v Bratislave, no jej cesta ju
              zaviedla k hlbšiemu poznaniu tela a mysle. Úspešne absolvovala
              štúdium Jógy a jógovej terapie na Fakulte telesnej výchovy
              a športu Univerzity Karlovej v Prahe, ako aj štúdium
              Etikoterapie v škole Advaita Mgr. Vladimíra Červenáka.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na našich pobytoch sa postará o vedenie jogových cvičení (ásan) pre posilnenie a uvoľnenie tela, nácvik správnych dychových techník (pránájáma) pre upokojenie mysle, priblíženie jogovej filozofie a jej prepojenie s bežným životom.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Už niekoľko rokov úspešne vedie kurzy pre malé skupinky, kde je
              jej prioritou citlivý a vysoko individuálny prístup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
