export default function ProductCatalog() {
  const productCategories = [
    {
      title: "Spice Powders",
      description: "Turmeric, chili, coriander and other essential ground spices",
      productCount: 12,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Whole Spices",
      description: "Cardamom, cinnamon, cloves and aromatic whole spices",
      productCount: 8,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Masala Blends",
      description: "Garam masala, curry powder and signature spice mixes",
      productCount: 15,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Specialty Items",
      description: "Saffron, curry leaves and rare specialty ingredients",
      productCount: 6,
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const featuredProducts = [
    {
      name: "Premium Garam Masala",
      description: "Authentic blend of 12 aromatic spices",
      price: "₹180",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      rating: 5
    },
    {
      name: "Red Chili Powder",
      description: "Pure, vibrant chili powder with perfect heat",
      price: "₹120",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      rating: 5
    },
    {
      name: "Organic Turmeric",
      description: "Premium organic turmeric with high curcumin",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      rating: 5
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rich-brown mb-4">Our Premium Spice Collection</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover our extensive range of authentic Indian spices and masala blends, each carefully crafted to bring traditional flavors to your kitchen</p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-rich-brown mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="text-spice-orange font-semibold">{category.productCount} Products</span>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h3 className="font-playfair text-3xl font-semibold text-center text-rich-brown mb-8">Best Selling Products</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-playfair text-xl font-semibold text-rich-brown">{product.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(product.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-spice-orange">{product.price}</span>
                    <button className="bg-spice-orange hover:bg-deep-amber text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <button className="bg-rich-brown hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            <i className="fas fa-th-large mr-2"></i>View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
