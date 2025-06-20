import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-spice-orange to-deep-amber rounded-full flex items-center justify-center">
              <i className="fas fa-seedling text-white text-xl"></i>
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-bold text-rich-brown">Aahasuvai</h1>
              <p className="font-dancing text-sm text-spice-orange">Authentic Indian Spices</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-spice-orange transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <div className="relative group">
              <button 
                onClick={() => scrollToSection('products')} 
                className="text-gray-700 hover:text-spice-orange transition-colors duration-300 font-medium flex items-center"
              >
                Products <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-cream hover:text-spice-orange transition-colors">Spice Powders</button>
                <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-cream hover:text-spice-orange transition-colors">Whole Spices</button>
                <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-cream hover:text-spice-orange transition-colors">Masala Blends</button>
                <button className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-cream hover:text-spice-orange transition-colors">Specialty Items</button>
              </div>
            </div>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-spice-orange transition-colors duration-300 font-medium"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-700 hover:text-spice-orange transition-colors duration-300 font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-spice-orange transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-spice-orange"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-2 border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream hover:text-spice-orange transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')} 
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream hover:text-spice-orange transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream hover:text-spice-orange transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream hover:text-spice-orange transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-cream hover:text-spice-orange transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}