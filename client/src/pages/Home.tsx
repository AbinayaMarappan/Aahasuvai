import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductCatalog from "@/components/ProductCatalog";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AboveNav from "@/components/AboveNav"
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboveNav />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductCatalog />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
