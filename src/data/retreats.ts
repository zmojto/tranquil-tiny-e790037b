import cyprusBedroom from "@/assets/cyprus-bedroom.jpg";
import cyprusBlueLagoon from "@/assets/cyprus-blue-lagoon.jpg";
import cyprusHero from "@/assets/cyprus-hero.jpg";
import cyprusKonnosBay from "@/assets/cyprus-konnos-bay.jpg";
import cyprusLivingroom from "@/assets/cyprus-livingroom.jpg";
import cyprusMimosaBeach from "@/assets/cyprus-mimosa-beach.jpg";
import cyprusPoolNight from "@/assets/cyprus-pool-night.jpg";
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
  transportType?: "flight" | "car" | "individual";
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

const _retreats: Retreat[] = [
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
    name: "Cyprus Awakening",
    tagline: "Slnečný pokoj",
    location: "Protaras",
    country: "Cyprus",
    dates: "29. mája – 5. júna 2026",
    price: 1100,
    currency: "€",
    spotsLeft: 6,
    highlights: ["Meditácie pri mori", "Staroveké svätyne a energetické miesta", "Ostrovné dobrodružstvá"],
    description: `Témou 7-dňového pobytu vo Villa Lucilla v pokojnom Protarase na východnom pobreží Cypru je práca s našou životnou energiou. Ponúkame vám nový pohľad – nie ako na niečo, čo „máme alebo nemáme“, ale ako na vedome riadený zdroj, ktorý dokážeme uchopiť, rozvíjať a aktívne využívať v každodennom živote.

Každé ráno začína vedenou meditáciou a dychovými cvičeniami priamo na pláži, po ktorých nasleduje hatha jóga. Popoludnia sú venované objavovaniu prírodných krás okolia – od majestátneho Cape Greco cez morské jaskyne Ayia Napa Sea Caves až po kryštáľovo čistú Konnos Bay a slávnu Fig Tree Bay.

Villa Lucilla sa nachádza v tichej časti Protarasu (Anthorina Gardens), len krátkou prechádzkou od pláže Mimosa Beach. Ubytovanie je v dvojlôžkových izbách s prístupom k bazénu. Všetky jedlá sú vegetariánske a pripravované s láskou. Večery patria workshopom a zdieľaniu.`,
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
      "Workshopy zamerané na osobný rast",
      "Kurátorované výlety: Cape Greco, morské jaskyne, Konnos Bay, Fig Tree Bay",
      "Transfer z letiska Larnaka",
      "Voľný prístup k pláži Mimosa Beach",
    ],
    heroImage: cyprusHero,
    galleryImages: [
      cyprusPoolNight,
      cyprusLivingroom,
      cyprusBedroom,
      cyprusKonnosBay,
      cyprusBlueLagoon,
      cyprusMimosaBeach,
    ],
    travelInfo: {
      outbound: { flight: "Wizz Air – Bratislava → Larnaka", time: "Piatok 29. mája, 15:00 → 19:05 (3h 5min)" },
      returnFlight: { flight: "Wizz Air – Larnaka → Bratislava", time: "Piatok 5. júna, 12:00 → 14:25 (3h 25min)" },
      ticketPrice: "cca 200 €",
      note: "Letenky sprostredkujeme – nie sú zahrnuté v cene pobytu.",
    },
  },
  {
    id: "krpacovo-soul",
    name: "Krpáčovo Soul",
    tagline: "Tatranská harmónia",
    location: "Krpáčovo",
    country: "Slovensko",
    dates: "1. – 5. júla 2026",
    price: 390,
    spotsLeft: 12,
    highlights: ["Koliba pri jazere", "Paddleboarding", "Sauna a wellness"],
    description: `Doprajte si pokojný pobyt v srdci Nízkych Tatier, v kolibe pri jazere v malebnom Krpáčove. Čakajú vás štyri dni v objatí prírody, naplnené hlbokým oddychom a obnovou.

Každé ráno začína vedenou meditáciou a dychovými cvičeniami v lone prírody, po ktorých nasleduje hatha jóga. Popoludnia sú venované objavovaniu krás okolia – nenáročné prechádzky, náučné chodníky, Bystrianská jaskyňa, Farma Javor či Černohorská železnička. Na jazere si môžete vyskúšať paddleboarding a po aktívnom dni relaxovať vo fínskej saune alebo vonkajších vyhrievaných kadiach s vírivkou.

Ubytovanie je v trojlôžkových a štvorlôžkových izbách v kolibe priamo pri jazere. Všetky jedlá sú vegetariánske a ajurvédske, pripravované s láskou z čerstvých surovín. Večery patria workshopom na tému Mentálna odolnosť.`,
    dailySchedule: [
      { time: "6:00", activity: "Vedená meditácia a dychové cvičenia" },
      { time: "7:00", activity: "Hatha jóga" },
      { time: "9:00", activity: "Raňajky" },
      { time: "10:30", activity: "Workshop alebo voľný čas" },
      { time: "13:00", activity: "Obed" },
      { time: "15:00", activity: "Výlety v okolí (Bystrianská jaskyňa, Farma Javor, Černohorská železnička, prechádzky)" },
      { time: "17:30", activity: "Jóga a meditácia" },
      { time: "19:00", activity: "Večera" },
      { time: "20:00", activity: "Workshop" },
    ],
    inclusions: [
      "4 noci v kolibe pri jazere v trojlôžkových a štvorlôžkových izbách",
      "Vegetariánske a ajurvédske jedlá a občerstvenie",
      "Denné ranné a večerné jógové lekcie (hatha)",
      "Vedené meditácie a dychové cvičenia",
      "Workshopy na tému Mentálna odolnosť",
      "Paddleboarding na jazere",
      "Fínska sauna a vonkajšie vyhrievané kade s vírivkou",
      "Masáže k dispozícii (za príplatok)",
    ],
    heroImage: "https://i1.wp.com/www.polianka.sk/wp-content/uploads/2017/08/CountryKrpacovo2014_top58_35-1024x683.jpg?fit=1024%2C683&ssl=1",
    galleryImages: [
      "https://i1.wp.com/www.polianka.sk/wp-content/uploads/2017/08/Hotel-Polianka-vyhlad-na-jazero-2-1024x561.jpg?fit=1024%2C561&ssl=1",
      "https://i2.wp.com/www.polianka.sk/wp-content/uploads/2022/02/Polianka_wellness_lowres_027.jpg?fit=1920%2C1280&ssl=1",
      "/images/krpacovo-sup.webp",
      "https://i2.wp.com/www.polianka.sk/wp-content/uploads/2017/08/Polianka_Koliba_Jan2019_lowres_020-2.jpg?fit=1920%2C1280&ssl=1",
      "https://i1.wp.com/www.polianka.sk/wp-content/uploads/2022/02/Polianka_wellness_lowres_004.jpg?fit=1920%2C1280&ssl=1",
      "/images/krpacovo-chata.webp",
    ],
    travelInfo: {
      transportType: "individual",
      outbound: { flight: "Individuálna doprava autom", time: "Príchod 1. júla" },
      returnFlight: { flight: "Individuálna doprava autom", time: "Odchod 5. júla" },
      ticketPrice: "individuálne",
      note: "Doprava je individuálna – autom. Na požiadanie vieme sprostredkovať spoločný odvoz.",
    },
  },
  {
    id: "croatia-harmony",
    name: "Pura Vida Energia",
    tagline: "Magická Dalmácia",
    location: "Murvica, Zadar",
    country: "Chorvátsko",
    dates: "12. – 19. septembra 2026",
    price: 1550,
    spotsLeft: 12,
    highlights: ["Bazén a jacuzzi", "Tenisový kurt a sauna", "Výlety po okolí Zadaru"],
    description: `Zažite harmóniu tela a mysle v nádhernej kamennej Villa Quince neďaleko Zadaru na dalmatínskom pobreží. Táto luxusná vila s vyhrievaným bazénom, jacuzzi, saunou a tenisovým kurtom poskytuje ideálne prostredie pre 7-dňový transformačný pobyt uprostred stredomorskej prírody.

Každý deň začína vedenou meditáciou a dychovými cvičeniami, po ktorých nasleduje hatha jóga. Popoludnia sú venované objavovaniu krás dalmatínskeho pobrežia – Národný park Kornati, vodopády Krka, staré mesto Zadar so slávnym morským orgánom, pláž Saharun či ostrov Ugljan. Večery sú venované workshopom na tému Mentálny detox.

Villa Quince sa nachádza v pokojnej dedine Murvica, len niekoľko minút autom od mora. Ubytovanie je v elegantných izbách s výhľadom na záhradu. Všetky jedlá sú vegetariánske a ajurvédske, pripravované s láskou z čerstvých miestnych surovín. Večery patria workshopom zameraným na osobný rast.`,
    dailySchedule: [
      { time: "6:00", activity: "Vedená meditácia a dychové cvičenia" },
      { time: "7:00", activity: "Hatha jóga" },
      { time: "9:00", activity: "Raňajky" },
      { time: "10:30", activity: "Workshop alebo voľný čas" },
      { time: "13:00", activity: "Obed" },
      { time: "15:00", activity: "Výlet v okolí (Kornati, Krka, staré mesto Zadar, pláž Saharun, ostrov Ugljan)" },
      { time: "17:30", activity: "Jóga a meditácia" },
      { time: "19:00", activity: "Večera" },
      { time: "20:00", activity: "Workshop" },
    ],
    inclusions: [
      "7 nocí v luxusnej Villa Quince s vyhrievaným bazénom",
      "Vegetariánske a ajurvédske jedlá a občerstvenie",
      "Denné ranné a večerné jógové lekcie (hatha)",
      "Vedené meditácie a dychové cvičenia",
      "Workshopy zamerané na osobný rast",
      "Prístup k saune, jacuzzi a fitness",
      "Tenisový kurt a stolný tenis",
      "Kurátorované výlety po okolí Zadaru",
    ],
    heroImage: "https://www.zadarvillas.com/photos/villas/header/04062025094615_dji-0336.jpg",
    galleryImages: [
      "https://www.zadarvillas.com/photos/villas/galleries/22082024125935_dji-0336.jpg",
      "https://www.zadarvillas.com/photos/villas/galleries/22082024130139_dji-0413.jpg",
      "https://www.zadarvillas.com/photos/villas/galleries/22082024130153_dji-0433.jpg",
      "https://www.zadarvillas.com/photos/villas/galleries/22082024130701_dsc-5122.jpg",
      "https://www.zadarvillas.com/photos/villas/galleries/22082024130858_dsc-5453.jpg",
    ],
    travelInfo: {
      transportType: "individual",
      outbound: { flight: "Individuálna doprava autom", time: "Príchod 12. septembra" },
      returnFlight: { flight: "Individuálna doprava autom", time: "Odchod 19. septembra" },
      ticketPrice: "individuálne",
      note: "Doprava je individuálna – autom alebo na požiadanie vieme sprostredkovať spoločný odvoz.",
    },
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
  {
    id: "necpaly-retreat",
    name: "Necpaly Stillness",
    tagline: "Tichá Veľká Fatra",
    location: "Necpaly, Veľká Fatra",
    country: "Slovensko",
    dates: "15. – 18. októbra 2026",
    price: 420,
    spotsLeft: 10,
    highlights: ["Etikoterapia", "Sauna a vírivka pod hviezdami", "Túry vo Veľkej Fatre"],
    description: `Doprajte si pár dní len pre seba v Chalet Alexandra, v srdci Národného parku Veľká Fatra. Chalet je exkluzívne útočisko ponúkajúce pokoj a mnoho možností. Tento 3-dňový retreat je pozvánkou spomaliť, stíšiť sa a znovu sa naladiť na svoje vnútro. 

Etikoterapia
Séria inšpiratívnych prednášok „Spokojnosť je voľba“ vám ponúkne nový pohľad na každodenný život aj vaše vnútorné nastavenie. V rámci nich sa pozrieme bližšie na tému našej životnej spokojnosti. Nakoľko ju mám vo svojich rukách? A aké mám možnosti pri práci s ňou? Súčasťou našej práce bude aj tréning meditačnej praxe. Túto časť si pre vás pripravila Sabína Kalmárová. sabinakalmarova.sk

Jóga
Jemná, pomalá prax s dlhším zotrvaním v pozíciách prináša hlboké uvoľnenie, regeneráciu a úľavu od napätia. Pomáha znižovať stres, uvoľniť telo a upokojiť myseľ. Prax vedie lektorka Ali Hodáková, absolventka Karlovej univerzity (Fakulta telesnej výchovy a športu, odbor Jóga a jógová terapia) – ste v citlivých a odborných rukách.

Program je navrhnutý s dôrazom na rovnováhu medzi spoločným časom a priestorom len pre vás. Oddýchnite si v saune či vírivke pod hviezdami, ponorte sa do ticha s knihou v útulnej relaxačnej miestnosti alebo objavujte krásu okolitej prírody na peších prechádzkach. Každý moment je pozvaním k regenerácii, uvoľneniu a hlbokému oddychu.`,
    dailySchedule: [
      { time: "6:00", activity: "Vedená meditácia a dychové cvičenia" },
      { time: "7:00", activity: "Hatha jóga – menšia skupina, individuálny prístup" },
      { time: "9:00", activity: "Raňajky" },
      { time: "10:30", activity: "Workshop – Spokojnosť je voľba" },
      { time: "13:00", activity: "Obed" },
      { time: "15:00", activity: "Výlety v okolí (túry vo Veľkej Fatre, prírodné pamiatky)" },
      { time: "17:30", activity: "Jóga a meditácia" },
      { time: "19:00", activity: "Večera" },
      { time: "20:00", activity: "Wellness – sauna a vírivka pod hviezdami" },
    ],
    inclusions: [
      "3 noci v Chalet Alexandra (2–4 lôžkové izby)",
      "Vegetariánske a ajurvédske jedlá a občerstvenie",
      "Denné ranné a večerné jógové lekcie (hatha)",
      "Vedené meditácie a dychové cvičenia",
      "Etikoterapia workshopy – Spokojnosť je voľba",
      "Sauna a vírivka pod hviezdami",
      "Prístup k relaxačnej miestnosti a wellness",
      "Prechádzky v Národnom parku Veľká Fatra",
    ],
    heroImage: "/images/necpaly/main.jpg",
    galleryImages: [
      "/images/necpaly/vonka1.jpg",
      "/images/necpaly/vonka3.jpg",
      "/images/necpaly/dnu1.jpg",
      "/images/necpaly/dnu4.jpg",
      "/images/necpaly/vonka9.jpg",
      "/images/necpaly/dnu8.jpg",
    ],
    travelInfo: {
      transportType: "individual",
      outbound: { flight: "Individuálna doprava autom", time: "Príchod 15. októbra" },
      returnFlight: { flight: "Individuálna doprava autom", time: "Odchod 18. októbra" },
      ticketPrice: "individuálne",
      note: "Doprava je individuálna – autom. Na požiadanie vieme sprostredkovať spoločný odvoz.",
    },
  },
  {
    id: "blatinka-retreat",
    name: "Blatinka Roots",
    tagline: "Malebné Podpoľanie",
    location: "Blatinka, Podpoľanie",
    country: "Slovensko",
    dates: "14. – 16. augusta 2026",
    price: 250,
    spotsLeft: 14,
    highlights: ["Etikoterapia", "Bazén", "Krása Podpoľania"],
    description: `Srdečne vás pozývame na víkendové stretnutie na Blatinke. Spoločne sa pozrieme na to, ako sme spokojní so svojim životom, tak, ako ho žijeme. Zameriame sa na programy, ktoré riadia náš život a povieme si viac o tom, ako sa stať tvorcom svojho vlastného života a nakoľko ho máme vo svojich vlastných rukách.

Budeme pracovať s našou mysľou, s jej prepojením na telo, vôľu a naše emócie. Pracujeme metódou etikoterapie, ktorá nám pomáha odkrývať pravdu o sebe samom. Budeme si spoločne klásť otázky a hľadať na ne odpovede.

Veľkou podporou pri našej práci je krásne prostredie Podpoľania. Sme v lone prírody v starostlivých rukách milých domácich, známych svojou skvelou kuchyňou. Stravu chystá pani domáca – chutné vegetariánske jedlá z ich vlastnej záhrady. V lete je k dispozícii bazén.`,
    dailySchedule: [
      { time: "7:00", activity: "Hatha jóga" },
      { time: "9:00", activity: "Raňajky" },
      { time: "10:30", activity: "Workshop – etikoterapia" },
      { time: "13:00", activity: "Obed" },
      { time: "15:00", activity: "Bazén, voľný čas" },
      { time: "17:00", activity: "Workshop – etikoterapia" },
      { time: "19:00", activity: "Večera" },
    ],
    inclusions: [
      "2 noci v útulnom ubytovaní (spoločné izby)",
      "Vegetariánske jedlá z domácej záhrady",
      "Denné ranné jógové lekcie (hatha)",
      "Vedené meditácie a dychové cvičenia",
      "Etikoterapia workshopy – Blatinka Roots",
      "Prístup k bazénu",
    ],
    heroImage: "/images/blatinka/main.jpg",
    galleryImages: [
      "/images/blatinka/group.jpg",
      "/images/blatinka/interior.jpg",
      "/images/blatinka/garden.jpg",
      "/images/blatinka/yoga.jpg",
      "/images/blatinka/main.jpg",
    ],
    travelInfo: {
      transportType: "individual",
      outbound: { flight: "Individuálna doprava autom", time: "Príchod 14. augusta" },
      returnFlight: { flight: "Individuálna doprava autom", time: "Odchod 16. augusta" },
      ticketPrice: "individuálne",
      note: "Doprava je individuálna – autom.",
    },
  },
];

const activeOrder = ["cyprus-awakening", "krpacovo-soul", "blatinka-retreat", "croatia-harmony", "necpaly-retreat"];
const upcomingOrder = ["bali-bliss", "costa-rica", "portugal-soul", "thailand-awakening"];
export const retreats: Retreat[] = [
  ..._retreats.filter(r => activeOrder.includes(r.id)).sort((a, b) => activeOrder.indexOf(a.id) - activeOrder.indexOf(b.id)),
  ..._retreats.filter(r => upcomingOrder.includes(r.id)).sort((a, b) => upcomingOrder.indexOf(a.id) - upcomingOrder.indexOf(b.id)),
  ..._retreats.filter(r => !activeOrder.includes(r.id) && !upcomingOrder.includes(r.id)),
];

export const getRetreatById = (id: string): Retreat | undefined => {
  return retreats.find((retreat) => retreat.id === id);
};
