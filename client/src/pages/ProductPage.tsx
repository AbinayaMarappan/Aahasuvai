import { useEffect, useState } from "react";
import pro from "@/assets/powder.jpg";
import { useCart } from "@/context/CartContext";
import { useLocation } from "wouter";

const products = [
  { id: 1, name: "Turmeric Masala", price: 40, quantity: "50g", image: pro },
  { id: 2, name: "Chili Powder", price: 45, quantity: "50g", image: pro },
  { id: 3, name: "Coriander Masala", price: 50, quantity: "50g", image: pro },
  { id: 4, name: "Garam Masala", price: 55, quantity: "50g", image: pro },
  { id: 5, name: "Cumin Powder", price: 60, quantity: "50g", image: pro },
  { id: 6, name: "Sambar Powder", price: 65, quantity: "50g", image: pro },
  { id: 7, name: "Rasam Powder", price: 70, quantity: "50g", image: pro },
  { id: 8, name: "Pepper Powder", price: 75, quantity: "50g", image: pro },
  { id: 9, name: "Kitchen King", price: 80, quantity: "50g", image: pro },
  { id: 10, name: "Pav Bhaji Masala", price: 85, quantity: "50g", image: pro },
  { id: 11, name: "Chole Masala", price: 90, quantity: "50g", image: pro },
  { id: 12, name: "Biryani Masala", price: 95, quantity: "50g", image: pro },
  { id: 13, name: "Curry Powder", price: 100, quantity: "50g", image: pro },
  { id: 14, name: "Tandoori Masala", price: 105, quantity: "50g", image: pro },
  { id: 15, name: "Paneer Tikka Masala", price: 110, quantity: "50g", image: pro },
  { id: 16, name: "Korma Masala", price: 115, quantity: "50g", image: pro },
  { id: 17, name: "Fish Fry Masala", price: 120, quantity: "50g", image: pro },
  { id: 18, name: "Meat Masala", price: 125, quantity: "50g", image: pro },
  { id: 19, name: "Ginger Garlic Masala", price: 130, quantity: "50g", image: pro },
  { id: 20, name: "White Pepper Powder", price: 135, quantity: "50g", image: pro },
];

export default function ProductPage() {
  const { addToCart, cartItems } = useCart(); // include cartItems
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [location] = useLocation();

  useEffect(() => {
    const url = new URLSearchParams(location.split("?")[1]);
    const searchTerm = url.get("search")?.toLowerCase();

    if (searchTerm) {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [location]);

  const getProductCount = (id: number) => {
    const item = cartItems.find((i) => i.id === id);
    return item?.count || 0;
  };

  return (
    <section className="min-h-screen bg-[#fff6e7] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#004d3d] mb-12 text-center">
          Our Products
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600">No products found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-[#004d3d] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  ₹{product.price} — {product.quantity}
                </p>
                <div className="flex items-center space-x-2">
                <button
                  onClick={() => addToCart(product)}className="bg-[#004d3d] text-[#fff6e7] hover:bg-[#006d5d] px-6 py-2 rounded-full text-sm font-medium transition">
                  Add
                </button>
                {getProductCount(product.id) > 0 && (
                  <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {getProductCount(product.id)}
                  </span>
                )}
              </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
