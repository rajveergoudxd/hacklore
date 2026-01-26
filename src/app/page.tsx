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
import CartoonElements from "@/components/decorative/CartoonElements";


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

      {/* Cartoon Floating Elements */}
      <CartoonElements />

      {/* Main Content */}
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
  );
}
