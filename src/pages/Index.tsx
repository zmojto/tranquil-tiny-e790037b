import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ProgramSection from "@/components/ProgramSection";
import GallerySection from "@/components/GallerySection";
import TestimonialSection from "@/components/TestimonialSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen" id="top">
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ProgramSection />
      <GallerySection />
      <TestimonialSection />
      <BlogPreviewSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
};

export default Index;
