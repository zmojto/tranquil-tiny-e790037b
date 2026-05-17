import { useEffect } from "react";
import NavigationHeader from "@/components/NavigationHeader";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HostsSection from "@/components/HostsSection";
import DailyProgramSection from "@/components/DailyProgramSection";
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
      <HostsSection />
      <DailyProgramSection />
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
