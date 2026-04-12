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

export interface TravelInfo {
  outbound: { flight: string; time: string };
  returnFlight: { flight: string; time: string };
  ticketPrice: string;
  note: string;
}

export interface Retreat {
  id: string;
  name: string;
  tagline: string;
  location: string;
  country: string;
  dates: string;
  price: number;
  currency?: string;
  spotsLeft: number;
  highlights: string[];
  description: string;
  dailySchedule: DailyScheduleItem[];
  inclusions: string[];
  heroImage: string;
  galleryImages: string[];
  travelInfo?: TravelInfo;
}

export const retreats: Retreat[] = [
  {
    id: "bali-bliss",
    name: "Bali Bliss",
    tagline: "Ostrovná harmónia",
    location: "Ubud",
    country: "Bali",
    dates: "15. – 22. marca 2026",
    price: 2800,
    spotsLeft: 12,
    highlights: ["Chrámové ceremónie", "Ryžové terasy", "Tradičný tanec"],
    description: `Ponorte sa do duchovného srdca Bali v Ubude, kde sa starobylé chrámy stretávajú s bujnými ryžovými terasami. Náš 7-dňový pobyt v tradičnom balíjskom rezorte vás pozýva na cestu hlbokej duchovnej premeny uprostred jedného z najkrajších miest na svete.

Každý deň začína rannou meditáciou v chráme, po ktorej nasleduje jógová prax na otvorenej terase s výhľadom na ryžové terasy. Popoludnia sú venované objavovaniu balíjskej kultúry – návšteva posvätných chrámov, tradičné tanečné predstavenia a prechádzky po ikonických ryžových terasách Tegallalang.

Ubud je duchovným centrom Bali, miestom kde sa umenie, príroda a spiritualita prelínajú v dokonalej harmónii. Odídete s hlbokým pochopením balíjskej filozofie Tri Hita Karana – harmónie medzi človekom, prírodou a duchom.`,
    dailySchedule: [
      { time: "6:00", activity: "Chrámová meditácia" },
      { time: "7:30", activity: "Hatha jóga na terase (90 min)" },
      { time: "9:00", activity: "Balíjske raňajky" },
      { time: "10:30", activity: "Kultúrny workshop alebo voľný čas" },
      { time: "13:00", activity: "Organický obed" },
      { time: "15:00", activity: "Návšteva chrámu alebo ryžových terás" },
      { time: "17:30", activity: "Yin jóga a meditácia" },
      { time: "19:00", activity: "Večera a tradičný tanec (vybrané dni)" },
    ],
    inclusions: [
      "7 nocí v tradičnom balíjskom rezorte",
      "Všetky organické jedlá a občerstvenie",
      "Denné jógové a meditačné lekcie",
      "Chrámové ceremónie s miestnym kňazom",
      "Prechádzka po ryžových terasách Tegallalang",
      "Tradičné tanečné predstavenie",
      "Jedno balíjske wellness ošetrenie",
      "Letiskové transfery z Denpasaru",
      "Uvítacia a záverečná ceremónia",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryPool, galleryNature, galleryFood, galleryMeditation, gallerySpa, galleryRoom],
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
  {
    id: "cyprus-awakening",
    name: "Slnečný pokoj",
    tagline: "Cyprus Awakening",
    location: "Protaras",
    country: "Cyprus",
    dates: "29. mája – 5. júna 2026",
    price: 1100,
    currency: "€",
    spotsLeft: 6,
    highlights: ["Meditácie pri mori", "Staroveké svätyne a energetické miesta", "Plavba pri západe slnka"],
    description: `Príďte zažiť transformačný pobyt vo Villa Lucilla v pokojnom Protarase na východnom pobreží Cypru. Tento 7-dňový retreat je navrhnutý tak, aby ste sa úplne odpojili od každodenného zhonu a znovu sa spojili so sebou samým.

Každé ráno začína vedenou meditáciou a dychovými cvičeniami priamo na pláži, po ktorých nasleduje hatha jóga. Popoludnia sú venované objavovaniu prírodných krás okolia – od majestátneho Cape Greco cez morské jaskyne Ayia Napa Sea Caves až po kryštáľovo čistú Konnos Bay a slávnu Fig Tree Bay.

Villa Lucilla sa nachádza v tichej časti Protarasu (Anthorina Gardens), len krátkou prechádzkou od pláže Mimosa Beach. Ubytovanie je v dvojlôžkových izbách s prístupom k bazénu. Všetky jedlá sú vegetariánske a pripravované s láskou. Večery patria workshopom, zdieľaniu a hlbokému vnútornému pokoju.`,
    dailySchedule: [
      { time: "6:00", activity: "Vedená meditácia a dychové cvičenia na pláži" },
      { time: "7:00", activity: "Hatha jóga" },
      { time: "9:00", activity: "Raňajky" },
      { time: "10:30", activity: "Workshop alebo voľný čas" },
      { time: "13:00", activity: "Obed" },
      { time: "15:00", activity: "Výlety v okolí (Cape Greco, Ayia Napa Sea Caves, Konnos Bay, Fig Tree Bay)" },
      { time: "17:30", activity: "Jóga a meditácia" },
      { time: "19:00", activity: "Večera" },
      { time: "20:00", activity: "Workshop" },
    ],
    inclusions: [
      "7 nocí v exkluzívnej Villa Lucilla s prístupom k bazénu",
      "Denné ranné a večerné jógové lekcie (hatha, vinyasa)",
      "Vedené meditácie a dychové cvičenia na pláži",
      "Vegetariánske jedlá a občerstvenie po celý deň",
      "Workshopy zamerané na osobný rast a mindfulness",
      "Kurátorované výlety: Cape Greco, morské jaskyne, Konnos Bay, Fig Tree Bay",
      "Plavba pri západe slnka",
      "Transfer z letiska Larnaka",
      "Uvítací rituál a záverečná ceremónia",
      "Voľný prístup k pláži Mimosa Beach",
    ],
    heroImage: "https://villalucilla.eu/images/hero-pool.jpg",
    galleryImages: [
      "https://villalucilla.eu/images/night-pool.jpg",
      "https://villalucilla.eu/images/livingroom1.jpeg",
      "https://villalucilla.eu/images/bedroom-master.jpg",
      "https://villalucilla.eu/images/konnos-bay.jpg",
      "https://villalucilla.eu/images/blue-lagoon.jpg",
      "https://villalucilla.eu/images/mimosa-beach-real.jpg",
    ],
    travelInfo: {
      outbound: { flight: "Wizz Air – Bratislava → Larnaka", time: "Piatok 29. mája, 15:00 → 19:05 (3h 5min)" },
      returnFlight: { flight: "Wizz Air – Larnaka → Bratislava", time: "Piatok 5. júna, 12:00 → 14:25 (3h 25min)" },
      ticketPrice: "cca 200 €",
      note: "Letenky sprostredkujeme – nie sú zahrnuté v cene pobytu.",
    },
  },
  {
    id: "sri-lanka-zen",
    name: "Sri Lanka Zen",
    tagline: "Tropický pokoj",
    location: "Ella",
    country: "Srí Lanka",
    dates: "8. – 15. augusta 2026",
    price: 2500,
    spotsLeft: 9,
    highlights: ["Čajové plantáže", "Ayurvédske ošetrenia", "Výlety k vodopádom"],
    description: `Ponorte sa do pokojnej krásy srílanskej vysočiny v mestečku Ella, obklopenom smaragdovými čajovými plantážami a hmlistými horami. Tento 7-dňový pobyt kombinuje starobylé ayurvédske tradície s modernou jógovou praxou v prostredí tropického raja.

Ráná začínajú jemnou praxou s výhľadom na Nine Arch Bridge, po ktorej nasledujú ayurvédske workshopy a organické raňajky z miestnych produktov. Popoludnia ponúkajú túry k vodopádom, návštevy čajových plantáží a relax v prírodných kúpeľoch.

Ella je miestom, kde sa čas spomaľuje a príroda lieči. Odídete s hlbokým pochopením ayurvédskych princípov, obnovení na tele aj na duchu, a s nezabudnuteľnými spomienkami na jednu z najkrajších krajín Ázie.`,
    dailySchedule: [
      { time: "6:00", activity: "Ranná meditácia v horách" },
      { time: "7:00", activity: "Ashtanga jóga (90 min)" },
      { time: "9:00", activity: "Ayurvédske raňajky" },
      { time: "10:30", activity: "Ayurvédsky workshop alebo túra" },
      { time: "13:00", activity: "Obed z miestnych produktov" },
      { time: "15:00", activity: "Výlet k vodopádu alebo čajovej plantáži" },
      { time: "17:30", activity: "Regeneračná jóga a pranayama" },
      { time: "19:00", activity: "Večera a večerná meditácia" },
    ],
    inclusions: [
      "7 nocí v horskom rezorte",
      "Všetky ayurvédske jedlá a občerstvenie",
      "Denné jógové a meditačné lekcie",
      "Ayurvédska konzultácia a ošetrenie",
      "Návšteva čajovej plantáže s degustáciou",
      "Túra k vodopádu Ravana Falls",
      "Jazda legendárnym vlakom cez hory",
      "Letiskové transfery z Colomba",
      "Safari v národnom parku Yala",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryNature, galleryMeditation, galleryFood, gallerySpa, galleryPool, galleryRoom],
  },
  {
    id: "mexico-spirit",
    name: "Mexico Spirit",
    tagline: "Mayská energia",
    location: "Tulum",
    country: "Mexiko",
    dates: "18. – 25. októbra 2026",
    price: 2700,
    spotsLeft: 8,
    highlights: ["Cenote kúpanie", "Mayské ruiny", "Kakao ceremónie"],
    description: `Zažite mystickú energiu Tulumu na pobreží Karibského mora, kde sa starobylá mayská múdrosť stretáva s moderným wellness. Náš 7-dňový pobyt v eko-rezorte obklopenom džungľou a tyrkysovým morom vás pozýva na cestu hlbokej duchovnej premeny.

Každý deň začína plážovou jógou za zvukov morských vĺn, po ktorej nasleduje kúpanie v posvätných cenote – prírodných jaskynných jazerách, ktoré Mayovia považovali za brány do podsvetia. Popoludnia ponúkajú návštevy starobylých ruín, kakao ceremónie a relax na bielych plážach.

Tulum je miestom, kde sa história, príroda a spiritualita spájajú v dokonalej harmónii. Náš pobyt zahŕňa tradičnú temazcal ceremóniu – mayský parný rituál, ktorý očisťuje telo aj dušu.`,
    dailySchedule: [
      { time: "6:30", activity: "Plážová jóga pri východe slnka" },
      { time: "8:00", activity: "Tropické raňajky" },
      { time: "10:00", activity: "Návšteva cenote alebo ruín" },
      { time: "13:00", activity: "Mexický obed" },
      { time: "15:00", activity: "Kakao ceremónia alebo voľný čas" },
      { time: "17:00", activity: "Yin jóga a zvuková terapia" },
      { time: "19:00", activity: "Večera pri sviečkach" },
      { time: "21:00", activity: "Hviezdna meditácia na pláži" },
    ],
    inclusions: [
      "7 nocí v eko-rezorte v džungli",
      "Všetky jedlá z mexickej kuchyne",
      "Denné jógové a meditačné lekcie",
      "Návšteva cenote s ceremóniou",
      "Sprievodený výlet k mayským ruinám",
      "Tradičná temazcal ceremónia",
      "Kakao ceremónia s miestnym šamanom",
      "Letiskové transfery z Cancúnu",
      "Šnorchlovanie na koralovom útese",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryPool, gallerySpa, galleryNature, galleryMeditation, galleryFood, galleryRoom],
  },
  {
    id: "thailand-awakening",
    name: "Thailand Awakening",
    tagline: "Ostrovné prebudenie",
    location: "Koh Samui",
    country: "Thajsko",
    dates: "14. – 21. novembra 2026",
    price: 3000,
    spotsLeft: 5,
    highlights: ["Thajská masáž", "Budhistické chrámy", "Ostrovný kajaking"],
    description: `Prebuďte sa na tropickom ostrove Koh Samui, kde kokosové palmy lemujú krištáľovo čisté pláže a starobylé budhistické chrámy ponúkajú priestor na hlbokú meditáciu. Náš 7-dňový pobyt v luxusnom plážovom rezorte kombinuje thajské wellness tradície s intenzívnou jógovou praxou.

Každé ráno začína meditáciou pri východe slnka na pláži, po ktorej si môžete vybrať medzi dynamickou jógou alebo lekciou Muay Thai – thajského boxu, ktorý posilňuje telo aj myseľ. Popoludnia ponúkajú kajaking po okolitých ostrovoch, návštevy zlatých chrámov a autentickú thajskú masáž.

Koh Samui je ostrov kontrastov – od rušných nočných trhov po tiché meditačné záhrady. Náš pobyt vás prevedie tým najlepším z thajskej kultúry a pomôže vám nájsť vnútorný pokoj v prostredí tropického raja.`,
    dailySchedule: [
      { time: "6:00", activity: "Meditácia pri východe slnka na pláži" },
      { time: "7:00", activity: "Vinyasa jóga alebo Muay Thai (90 min)" },
      { time: "9:00", activity: "Thajské raňajky" },
      { time: "10:30", activity: "Kajaking alebo návšteva chrámu" },
      { time: "13:00", activity: "Obed z miestnej kuchyne" },
      { time: "15:00", activity: "Thajská masáž alebo voľný čas" },
      { time: "17:30", activity: "Jóga Nidra a zvuková meditácia" },
      { time: "19:30", activity: "Večera a kultúrny program" },
    ],
    inclusions: [
      "7 nocí v plážovom rezorte",
      "Všetky jedlá z thajskej kuchyne",
      "Denné jógové a meditačné lekcie",
      "Dve tradičné thajské masáže",
      "Návšteva budhistického chrámu s mníchom",
      "Kajak výlet po ostrovoch Ang Thong",
      "Lekcia thajského varenia",
      "Letiskové transfery",
      "Návšteva nočného trhu Fisherman's Village",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryMeditation, galleryPool, galleryRoom, galleryFood, gallerySpa, galleryNature],
  },
];

export const getRetreatById = (id: string): Retreat | undefined => {
  return retreats.find((retreat) => retreat.id === id);
};
