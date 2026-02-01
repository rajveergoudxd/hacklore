import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ImmersiveTracks from "@/components/sections/ImmersiveTracks";
import HorizontalJourney from "@/components/sections/HorizontalJourney";
import SponsorsSection from "@/components/sections/SponsorsSection";
import BecomeSponsor from "@/components/sections/BecomeSponsor";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import InteractiveBackground from "@/components/decorative/InteractiveBackground";
import { MouseProvider } from "@/components/animations/MouseSensitive";


export default function Home() {
  return (
    <MouseProvider>
      <div className="min-h-screen relative">
        {/* Interactive Dot Grid - z-0, visible everywhere */}
        <InteractiveBackground />

        {/* Main Content - z-10 with opaque backgrounds to hide dots */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />

          <main className="flex-grow">
            <Hero />
            <AboutSection />
            <ImmersiveTracks />
            <HorizontalJourney />
            <SponsorsSection />
            <BecomeSponsor />
            <FAQSection />
            <CTASection />
          </main>

          <Footer />
        </div>

        {/* Floating CTA */}
        <FloatingCTA />
      </div>
    </MouseProvider>
  );
}
