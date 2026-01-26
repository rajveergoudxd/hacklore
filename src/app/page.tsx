import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import TracksSection from "@/components/sections/TracksSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen relative noise-overlay">
      {/* Fluid Background Layer */}
      <div
        className="fixed inset-0 z-0 pointer-events-none fluid-bg opacity-80"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-molten-chrome"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />

        <main className="flex-grow">
          <Hero />
          <AboutSection />
          <TracksSection />
          <ScheduleSection />
          <SponsorsSection />
          <FAQSection />
          <CTASection />
        </main>

        <Footer />
      </div>

      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  );
}
