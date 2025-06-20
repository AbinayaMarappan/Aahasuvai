export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with colorful spices in wooden bowls */}
      <div 
        className="absolute inset-0 parallax-bg" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')" 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Authentic Indian <span className="text-yellow-400">Spices</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Experience the rich heritage of traditional Indian flavors with our premium quality masala blends and aromatic spices
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button className="bg-spice-orange hover:bg-deep-amber text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            <i className="fas fa-shopping-cart mr-2"></i>Shop Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-spice-orange px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            <i className="fas fa-play mr-2"></i>Our Story
          </button>
        </div>
      </div>

      {/* Floating Spice Elements */}
      <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: '0s' }}>
        <div className="w-16 h-16 bg-yellow-400 rounded-full opacity-20"></div>
      </div>
      <div className="absolute top-32 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-red-500 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 bg-orange-500 rounded-full opacity-20"></div>
      </div>
    </section>
  );
}