import { useState } from "react";
import { Button } from "@/components/ui/button"; // Update path as needed

const offers = [
  { id: 1, image: "/Slider1.jpg", code: "AAHA100" },
  { id: 2, image: "/Slider1.jpg", code: "SPICY20" },
  { id: 3, image: "/Slider1.jpg", code: "MASALA50" },
  { id: 4, image: "/Slider1.jpg", code: "FRESH15" },
  { id: 5, image: "/Slider1.jpg", code: "HOTDEAL" },
  { id: 6, image: "/Slider1.jpg", code: "NEWUSER5" },
];

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000); // Reset after 2s
  };

  return (
    // <div className="p-6 max-w-7xl mx-auto">
    <div className="p-6 max-w-7xl mx-auto bg-beige min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#004d3d]">🔥 Exclusive Offers Just for You!</h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={offer.image} alt={`Offer ${offer.id}`} className="w-full h-56 object-cover" />

            <div className="p-4 flex flex-col items-center">
              <p className="text-lg font-semibold text-[#004d3d] mb-2">Coupon Code: <span className="text-orange-600">{offer.code}</span></p>
              <Button
                onClick={() => handleCopy(offer.code)}
                className="bg-[#004d3d] text-white hover:bg-[#006d5d] transition"
              >
                {copiedCode === offer.code ? "Copied!" : "Copy Code"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
