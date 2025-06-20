export default function AboutSection() {
  const timelineEvents = [
    {
      year: "1958",
      title: "The Beginning",
      description: "Shri Ramaswamy establishes Amutham Masala with traditional family recipes",
      position: "left"
    },
    {
      year: "1985",
      title: "Expansion",
      description: "Second generation takes over, expanding to modern packaging and distribution",
      position: "right"
    },
    {
      year: "2010",
      title: "Innovation",
      description: "Introduction of organic certified products and international standards",
      position: "left"
    },
    {
      year: "2023",
      title: "Digital Era",
      description: "Third generation leads with e-commerce and sustainable farming partnerships",
      position: "right"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-rich-brown mb-6">Our Heritage Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Founded in 1958,Aahasuvai began as a small family business in the heart of Tamil Nadu, with a simple mission: to share the authentic flavors of traditional Indian cuisine with the world.
              </p>
              <p>
                Our founder, <span className="font-semibold text-rich-brown">Shri Ramaswamy</span>, was a master spice blender who learned the ancient art of spice cultivation and processing from his grandfather. This knowledge, passed down through generations, forms the foundation of our quality standards today.
              </p>
              <p>
                Today, under the third generation of family leadership, we continue to honor these traditional methods while embracing modern quality standards. Every product is still hand-selected and ground using time-tested techniques that preserve the natural oils and authentic flavors of our spices.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-cream rounded-lg">
                <div className="text-3xl font-bold text-spice-orange mb-1">65+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
              <div className="text-center p-4 bg-cream rounded-lg">
                <div className="text-3xl font-bold text-spice-orange mb-1">50+</div>
                <div className="text-sm text-gray-600">Spice Varieties</div>
              </div>
              <div className="text-center p-4 bg-cream rounded-lg">
                <div className="text-3xl font-bold text-spice-orange mb-1">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-first lg:order-last">
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
              alt="Traditional spice merchant in Indian market setting" 
              className="rounded-2xl shadow-2xl w-full" 
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="font-playfair text-3xl font-semibold text-center text-rich-brown mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-spice-orange hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between md:justify-center">
                  {event.position === "left" ? (
                    <>
                      <div className="md:w-5/12 md:text-right md:pr-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                          <h4 className="font-playfair text-xl font-semibold text-rich-brown mb-2">{event.year} - {event.title}</h4>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:block w-6 h-6 bg-spice-orange rounded-full border-4 border-white relative z-10"></div>
                      <div className="md:w-5/12"></div>
                    </>
                  ) : (
                    <>
                      <div className="md:w-5/12"></div>
                      <div className="hidden md:block w-6 h-6 bg-spice-orange rounded-full border-4 border-white relative z-10"></div>
                      <div className="md:w-5/12 md:pl-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                          <h4 className="font-playfair text-xl font-semibold text-rich-brown mb-2">{event.year} - {event.title}</h4>
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}