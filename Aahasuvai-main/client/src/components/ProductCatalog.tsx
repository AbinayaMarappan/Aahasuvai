import powder from "@/assets/powder.jpg";
import whole from "@/assets/whole.jpg";
import blend from "@/assets/blend.jpg";
import special from "@/assets/special.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCatalog() {
  const productCategories = [
    {
      title: "Spice Powders",
      description: "Turmeric, chili, coriander and other essential ground spices",
      productCount: 12,
      image: whole,
    },
    {
      title: "Whole Spices",
      description: "Cardamom, cinnamon, cloves and aromatic whole spices",
      productCount: 8,
      image: powder,
    },
    {
      title: "Masala Blends",
      description: "Garam masala, curry powder and signature spice mixes",
      productCount: 15,
      image: blend,
    },
    {
      title: "Specialty Items",
      description: "Saffron, curry leaves and rare specialty ingredients",
      productCount: 6,
      image: special,
    },
  ];

  return (
    <section className="py-16 bg-[#fff6e7]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#004d3d] mb-12">
          Explore Our Spice Categories
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index < 2 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-[#004d3d] mb-2">
                {category.title}
              </h3>
              <p className="text-gray-700 text-sm">{category.description}</p>
              <p className="text-sm mt-1 text-spice-orange font-semibold">
                {category.productCount} Products
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mb-16">
          <Link to="/products">
            <button className="inline-flex items-center justify-center gap-2 bg-[#004d3d] hover:bg-[#006d5d] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <i className="fas fa-th-large mr-2"></i>View All Products
            </button>
          </Link>
        </div>

        {/* 🔥 Offers Banner Section - NO IMAGE */}
        <div className="text-center mt-8">
          <div className="bg-[#004d3d] py-12 px-6 rounded-2xl shadow-lg">
            <h3 className="text-white text-3xl md:text-4xl font-bold mb-6">
              🔥 Big Savings Await!
            </h3>

            <Link to="/offers">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition-transform hover:scale-105">
                View Offers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
