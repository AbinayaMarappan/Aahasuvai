export default function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-leaf",
      title: "100% Natural",
      description: "No artificial colors, preservatives, or additives. Pure, authentic spices sourced directly from farmers.",
      gradient: "from-spice-orange to-deep-amber"
    },
    {
      icon: "fas fa-award",
      title: "Premium Quality",
      description: "Hand-selected spices ground using traditional methods to preserve authentic flavors and nutrients.",
      gradient: "from-spice-red to-spice-orange"
    },
    {
      icon: "fas fa-heart",
      title: "Family Legacy",
      description: "Three generations of spice masters perfecting recipes passed down through traditional Indian culinary heritage.",
      gradient: "from-fresh-green to-spice-orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rich-brown mb-4">Why Choose Aahasuvai?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Three generations of expertise in creating the finest spice blends using traditional methods and premium ingredients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}>
                <i className={`${feature.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-rich-brown mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}