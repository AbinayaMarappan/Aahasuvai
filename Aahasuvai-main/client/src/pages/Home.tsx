import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductCatalog from "@/components/ProductCatalog";
import TestimonialsSection from "@/components/TestimonialsSection";
// import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <HeroSection />
      <FeaturesSection />
      <ProductCatalog />
      <TestimonialsSection />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}
