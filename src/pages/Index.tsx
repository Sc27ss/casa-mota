import Hero from "@/components/landing/Hero";
import EmotionalSection from "@/components/landing/EmotionalSection";
import PropertyStats from "@/components/landing/PropertyStats";
import Features from "@/components/landing/Features";
import PremiumFinishes from "@/components/landing/PremiumFinishes";
import Gallery from "@/components/landing/Gallery";
import Benefits from "@/components/landing/Benefits";
import LocationMap from "@/components/landing/LocationMap";
import ContactForm from "@/components/landing/ContactForm";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <EmotionalSection />
      <PropertyStats />
      <Features />
      <PremiumFinishes />
      <Gallery />
      <Benefits />
      <LocationMap />
      <ContactForm />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
