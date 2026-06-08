import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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

const SITE_URL = "https://samavesa.sk";
const TITLE = "Samaveša – Jógové a wellness pobyty v lone prírody";
const DESCRIPTION = "Transformačné 3 až 7-dňové jógové pobyty na inšpiratívnych miestach sveta. Maximálne 12 hostí, jóga, meditácia a vegetariánska kuchyňa.";

const Index = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen" id="top">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
      </Helmet>
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
