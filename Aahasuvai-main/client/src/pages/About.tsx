import { motion } from "framer-motion";
import about1 from "@/assets/about1.jpg";
import about2 from "@/assets/about2.jpg";
import about3 from "@/assets/about4.jpg";

export default function About() {
  const sections = [
    {
      title: "who are We",
      content: "/'a:ho: 'su:uar/ (Ah-ha Soo-vai).Derived from Tamil, meaning Wow,What a Taste!, encapsulating the joy of authentic flavors.Introducing AAHA SUVAI a taste of pure spice crafted from our grandmother's treasured recipes. Each blend is made with love, care, and the finest ingredients to bring authentic flavors to your kitchen. Rooted in tradition and crafted with unmatched quality, aaha suvai ensures every dish tells a story of heritage and true taste. Rediscover the joy of cooking with spices that are pure, premium,and timeless.",
      image: about1,
      reverse: false,
    },
    {
      title: "What We Stand For",
      content: "At Aaha Suvai, we believe that every meal tells a story-a story of heritage, love, and care.We prioritize purity, quality, and ethical sourcing. Our spices are 100% natural, handpicked, and ground using traditional methods.",
      image: about2,
      reverse: true,
    },
    {
      title: "Looking Ahead",
      content: "With innovation and authenticity, we aim to bring the finest Indian spices to kitchens across the globe. Delivered with the utmost dedication to excellence.We are committed to transforming your cooking experience by bringing unmatched taste to your table. Its not just our product; its our promise.",
      image: about3,
      reverse: false,
    },
  ];

  return (
<section className="py-16 bg-[#004d3d]" style={{ color: "#fff6e7" }}>
  <div className="max-w-6xl mx-auto px-6 space-y-24">
    {sections.map((sec, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: sec.reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col md:flex-row ${sec.reverse ? "md:flex-row-reverse" : ""} items-center gap-10`}
      >
        <img
          src={sec.image}
          alt={sec.title}
          className="w-full md:w-1/2 rounded-2xl shadow-md object-cover h-64 md:h-96"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{sec.title}</h2>
          <p className="text-lg leading-relaxed">{sec.content}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>
  );
}
