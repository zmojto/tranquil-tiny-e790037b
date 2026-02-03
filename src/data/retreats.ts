import galleryFood from "@/assets/gallery-food.jpg";
import galleryMeditation from "@/assets/gallery-meditation.jpg";
import galleryNature from "@/assets/gallery-nature.jpg";
import galleryPool from "@/assets/gallery-pool.jpg";
import galleryRoom from "@/assets/gallery-room.jpg";
import gallerySpa from "@/assets/gallery-spa.jpg";
import heroRetreat from "@/assets/hero-retreat.jpg";

export interface DailyScheduleItem {
  time: string;
  activity: string;
}

export interface Retreat {
  id: string;
  name: string;
  tagline: string;
  location: string;
  country: string;
  dates: string;
  price: number;
  spotsLeft: number;
  highlights: string[];
  description: string;
  dailySchedule: DailyScheduleItem[];
  inclusions: string[];
  heroImage: string;
  galleryImages: string[];
}

export const retreats: Retreat[] = [
  {
    id: "bali-bliss",
    name: "Bali Bliss",
    tagline: "Prebuďte sa v raji",
    location: "Ubud",
    country: "Bali, Indonézia",
    dates: "15. – 22. marca 2026",
    price: 2800,
    spotsLeft: 8,
    highlights: ["Výhľady na ryžové terasy", "Tradičné ceremónie", "Výlety k vodopádom"],
    description: `Ponorte sa do duchovného srdca Bali s naším transformačným 7-dňovým pobytom v Ubude. Obklopení bujnými ryžovými terasami a starobylými chrámami zažijete dokonalú kombináciu tradičných balijských liečebných praktík a moderných wellness techník.

Každé ráno začína jógou pri východe slnka s výhľadom na džungľový baldachýn, po ktorej nasledujú výživné organické raňajky pripravené naším miestnym šéfkuchárom. Popoludnia ponúkajú výber kultúrnych výletov, kúpeľných ošetrení alebo tichého času na rozjímanie v našich meditačných záhradách.

Tento pobyt je navrhnutý pre tých, ktorí hľadajú hlbokú vnútornú premenu. Či už ste skúsený praktizujúci alebo nováčik v jóge, naši skúsení učitelia vás povedú praxou prispôsobenou vašej úrovni a zámerom.`,
    dailySchedule: [
      { time: "6:30", activity: "Meditácia pri východe slnka a pranayama" },
      { time: "7:30", activity: "Vinyasa Flow jóga (90 min)" },
      { time: "9:00", activity: "Organické raňajky" },
      { time: "11:00", activity: "Workshop alebo voľný čas" },
      { time: "13:00", activity: "Zdravý obed" },
      { time: "15:00", activity: "Výlet alebo kúpeľné ošetrenie" },
      { time: "17:30", activity: "Regeneračná jóga a Yin" },
      { time: "19:00", activity: "Večera a večerný program" },
    ],
    inclusions: [
      "7 nocí v luxusnej vile",
      "Všetky organické jedlá a občerstvenie",
      "Denné jógové a meditačné lekcie",
      "Tradičná balijská liečebná ceremónia",
      "Návšteva chrámu a požehnanie",
      "Výlet k vodopádu",
      "Jedno 60-minútové kúpeľné ošetrenie",
      "Letiskové transfery",
      "Uvítacie a záverečné ceremónie",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryNature, galleryMeditation, gallerySpa, galleryFood, galleryRoom, galleryPool],
  },
  {
    id: "costa-rica",
    name: "Costa Rica Escape",
    tagline: "Pura Vida energia",
    location: "Nosara",
    country: "Kostarika",
    dates: "10. – 17. mája 2026",
    price: 3200,
    spotsLeft: 6,
    highlights: ["Prax pri pláži", "Lekcie surfovania", "Dobrodružstvá v džungli"],
    description: `Objavte kúzlo tichomorského pobrežia Kostariky na našom pobyte s výhľadom na pláž. Nosara, známa ako jedna z najlepších wellness destinácií na svete, ponúka dokonalé prostredie na opätovné spojenie s prírodou a sebou samým.

Prebuďte sa za zvukov revúnov a morských vĺn a potom plynule prechádzajte rannou praxou na našej jógovej platforme s výhľadom na oceán. Po hodine si vyberte medzi lekciami surfovania, túrami v džungli k skrytým vodopádom alebo jednoducho relaxujte v hojdacej sieti pod kývajúcimi sa palmami.

Náš butikový eko-lodge kladie dôraz na udržateľnosť a spojenie s prírodným svetom. Odídete osvežení, inšpirovaní a plne stelesňujúci životný štýl Pura Vida.`,
    dailySchedule: [
      { time: "6:00", activity: "Plážová meditácia a dychové cvičenia" },
      { time: "7:00", activity: "Dynamická Vinyasa Flow" },
      { time: "9:00", activity: "Tropické raňajky" },
      { time: "10:30", activity: "Lekcia surfovania alebo čas na pláži" },
      { time: "13:00", activity: "Obed z farmárskych produktov" },
      { time: "15:00", activity: "Dobrodružná aktivita alebo odpočinok" },
      { time: "17:30", activity: "Jóga pri západe slnka Yin" },
      { time: "19:30", activity: "Večera a pozorovanie hviezd" },
    ],
    inclusions: [
      "7 nocí v eko-lodge ubytovaní",
      "Všetky jedlá z miestnych organických produktov",
      "Denná jóga a meditácia",
      "Dve lekcie surfovania s vybavením",
      "Túra k vodopádu v džungli",
      "Návšteva rezervácie divokej zveri",
      "Jedna 90-minútová masáž",
      "Letiskové transfery z Liberie",
      "Táboráky pri západe slnka na pláži",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryPool, galleryNature, galleryFood, galleryMeditation, gallerySpa, galleryRoom],
  },
  {
    id: "portugal-soul",
    name: "Portugal Soul",
    tagline: "Stredomorská serenita",
    location: "Sintra",
    country: "Portugalsko",
    dates: "5. – 12. septembra 2026",
    price: 2600,
    spotsLeft: 10,
    highlights: ["Historické paláce", "Prechádzky po pobrežných útesoch", "Túry po vinárskej oblasti"],
    description: `Zažite očarujúcu krásu Sintry, miesta svetového dedičstva UNESCO zasadené v kopcoch neďaleko Lisabonu. Naša historická quinta, obklopená storočnými záhradami, poskytuje intímne prostredie pre hlbokú relaxáciu a kultúrne objavovanie.

Tento pobyt kombinuje to najlepšie z portugalskej kultúry s transformačnou jógovou praxou. Ráná sú venované vašej fyzickej a duchovnej praxi, zatiaľ čo popoludnia vás pozývajú preskúmať rozprávkové paláce, dramatické pobrežné útesy a pôvabné miestne dediny.

Večery spájajú našu skupinu pri večerách pri sviečkach s tým najlepším z portugalskej kuchyne, sprevádzané miestnymi vínami. Toto je dokonalý pobyt pre tých, ktorí chcú spojiť wellness s kultúrnym ponorením.`,
    dailySchedule: [
      { time: "7:00", activity: "Jemná ranná jóga" },
      { time: "8:30", activity: "Portugalské raňajky" },
      { time: "10:00", activity: "Kultúrny výlet" },
      { time: "13:00", activity: "Obed v miestnej reštaurácii" },
      { time: "15:00", activity: "Voľný čas alebo voliteľná túra" },
      { time: "17:00", activity: "Meditácia a Yoga Nidra" },
      { time: "18:30", activity: "Degustácia vín (vybrané dni)" },
      { time: "20:00", activity: "Gurmánska večera" },
    ],
    inclusions: [
      "7 nocí v historickej quinte",
      "Všetky jedlá s portugalským vínom k večeri",
      "Denná jóga a meditácia",
      "Sprievodená návšteva paláca Pena",
      "Prechádzka po útesoch Cabo da Roca",
      "Túra a degustácia vo vinárskej oblasti",
      "Kurz varenia s miestnym šéfkuchárom",
      "Letiskové transfery z Lisabonu",
      "Tradičný Fado večer",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryRoom, gallerySpa, galleryFood, galleryNature, galleryPool, galleryMeditation],
  },
];

export const getRetreatById = (id: string): Retreat | undefined => {
  return retreats.find((retreat) => retreat.id === id);
};
