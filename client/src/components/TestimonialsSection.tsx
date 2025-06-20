export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Home Chef, Mumbai",
      testimonial: "The quality of spices from Amutham Masala is exceptional. The aroma and flavor of their garam masala reminds me of my grandmother's cooking. Absolutely authentic!",
      initial: "P",
      gradient: "from-spice-orange to-deep-amber"
    },
    {
      name: "Chef Rajesh Kumar",
      location: "Executive Chef, Bangalore",
      testimonial: "As a professional chef, I demand the best ingredients. Amutham Masala consistently delivers premium quality spices that elevate every dish I create.",
      initial: "R",
      gradient: "from-spice-red to-spice-orange"
    },
    {
      name: "Mrs. Meera Patel",
      location: "Loyal Customer, Chennai",
      testimonial: "Three generations of our family have used Amutham Masala. The consistency in quality and authentic taste keeps us coming back. Truly a heritage brand!",
      initial: "M",
      gradient: "from-fresh-green to-spice-orange"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rich-brown mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from families who have made Aahasuvai a part of their culinary journey</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-lg">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-semibold">{testimonial.initial}</span>
                </div>
                <div>
                  <div className="font-semibold text-rich-brown">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}