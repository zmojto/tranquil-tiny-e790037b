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
    tagline: "Awaken in Paradise",
    location: "Ubud",
    country: "Bali, Indonesia",
    dates: "March 15-22, 2026",
    price: 2800,
    spotsLeft: 8,
    highlights: ["Rice terrace views", "Traditional ceremonies", "Waterfall excursions"],
    description: `Immerse yourself in the spiritual heart of Bali with our transformative 7-day retreat in Ubud. Surrounded by lush rice terraces and ancient temples, you'll experience the perfect blend of traditional Balinese healing practices and modern wellness techniques.

Each morning begins with sunrise yoga overlooking the jungle canopy, followed by nourishing organic breakfasts prepared by our local chef. Afternoons offer a choice of cultural excursions, spa treatments, or quiet reflection time in our meditation gardens.

This retreat is designed for those seeking deep inner transformation. Whether you're a seasoned practitioner or new to yoga, our experienced teachers will guide you through practices tailored to your level and intentions.`,
    dailySchedule: [
      { time: "6:30 AM", activity: "Sunrise Meditation & Pranayama" },
      { time: "7:30 AM", activity: "Vinyasa Flow Yoga (90 min)" },
      { time: "9:00 AM", activity: "Organic Breakfast" },
      { time: "11:00 AM", activity: "Workshop or Free Time" },
      { time: "1:00 PM", activity: "Healthy Lunch" },
      { time: "3:00 PM", activity: "Excursion or Spa Treatment" },
      { time: "5:30 PM", activity: "Restorative Yoga & Yin" },
      { time: "7:00 PM", activity: "Dinner & Evening Program" },
    ],
    inclusions: [
      "7 nights luxury villa accommodation",
      "All organic meals and refreshments",
      "Daily yoga and meditation sessions",
      "Traditional Balinese healing ceremony",
      "Temple visit and blessing",
      "Waterfall excursion",
      "One 60-minute spa treatment",
      "Airport transfers",
      "Welcome and closing ceremonies",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryNature, galleryMeditation, gallerySpa, galleryFood, galleryRoom, galleryPool],
  },
  {
    id: "costa-rica",
    name: "Costa Rica Escape",
    tagline: "Pura Vida Energy",
    location: "Nosara",
    country: "Costa Rica",
    dates: "May 10-17, 2026",
    price: 3200,
    spotsLeft: 6,
    highlights: ["Beachfront practice", "Surf lessons", "Jungle adventures"],
    description: `Discover the magic of Costa Rica's Pacific coast in our beachfront yoga retreat. Nosara, known as one of the world's top wellness destinations, offers the perfect setting for reconnecting with nature and yourself.

Wake up to the sound of howler monkeys and ocean waves, then flow through your morning practice on our oceanview yoga platform. After class, choose between surfing lessons, jungle hikes to hidden waterfalls, or simply relaxing in a hammock under swaying palm trees.

Our boutique eco-lodge emphasizes sustainability and connection with the natural world. You'll leave feeling refreshed, inspired, and fully embodying the Pura Vida lifestyle.`,
    dailySchedule: [
      { time: "6:00 AM", activity: "Beach Meditation & Breathwork" },
      { time: "7:00 AM", activity: "Dynamic Vinyasa Flow" },
      { time: "9:00 AM", activity: "Tropical Breakfast" },
      { time: "10:30 AM", activity: "Surf Lesson or Beach Time" },
      { time: "1:00 PM", activity: "Farm-to-Table Lunch" },
      { time: "3:00 PM", activity: "Adventure Activity or Rest" },
      { time: "5:30 PM", activity: "Sunset Yin Yoga" },
      { time: "7:30 PM", activity: "Dinner & Stargazing" },
    ],
    inclusions: [
      "7 nights eco-lodge accommodation",
      "All meals featuring local organic produce",
      "Daily yoga and meditation",
      "Two surf lessons with equipment",
      "Jungle waterfall hike",
      "Wildlife sanctuary visit",
      "One 90-minute massage",
      "Airport transfers from Liberia",
      "Sunset beach bonfires",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryPool, galleryNature, galleryFood, galleryMeditation, gallerySpa, galleryRoom],
  },
  {
    id: "portugal-soul",
    name: "Portugal Soul",
    tagline: "Mediterranean Serenity",
    location: "Sintra",
    country: "Portugal",
    dates: "September 5-12, 2026",
    price: 2600,
    spotsLeft: 10,
    highlights: ["Historic palaces", "Ocean cliff walks", "Wine country tours"],
    description: `Experience the enchanting beauty of Sintra, a UNESCO World Heritage site nestled in the hills near Lisbon. Our historic quinta, surrounded by centuries-old gardens, provides an intimate setting for deep relaxation and cultural exploration.

This retreat combines the best of Portuguese culture with transformative yoga practice. Mornings are dedicated to your physical and spiritual practice, while afternoons invite you to explore fairy-tale palaces, dramatic coastal cliffs, and charming local villages.

Evenings bring together our group for candlelit dinners featuring the best of Portuguese cuisine, accompanied by local wines. This is the perfect retreat for those who want to combine wellness with cultural immersion.`,
    dailySchedule: [
      { time: "7:00 AM", activity: "Gentle Morning Yoga" },
      { time: "8:30 AM", activity: "Portuguese Breakfast" },
      { time: "10:00 AM", activity: "Cultural Excursion" },
      { time: "1:00 PM", activity: "Lunch at Local Restaurant" },
      { time: "3:00 PM", activity: "Free Time or Optional Tour" },
      { time: "5:00 PM", activity: "Meditation & Yoga Nidra" },
      { time: "6:30 PM", activity: "Wine Tasting (select days)" },
      { time: "8:00 PM", activity: "Gourmet Dinner" },
    ],
    inclusions: [
      "7 nights historic quinta accommodation",
      "All meals with Portuguese wine at dinner",
      "Daily yoga and meditation",
      "Guided visit to Pena Palace",
      "Cabo da Roca cliff walk",
      "Wine country tour and tasting",
      "Cooking class with local chef",
      "Lisbon airport transfers",
      "Traditional Fado evening",
    ],
    heroImage: heroRetreat,
    galleryImages: [galleryRoom, gallerySpa, galleryFood, galleryNature, galleryPool, galleryMeditation],
  },
];

export const getRetreatById = (id: string): Retreat | undefined => {
  return retreats.find((retreat) => retreat.id === id);
};
