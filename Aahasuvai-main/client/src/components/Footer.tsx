export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#033e2d] text-[#fff6e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#c19a6b] to-[#cfa36c] rounded-full flex items-center justify-center">
                <i className="fas fa-seedling text-[#033e2d] text-xl"></i>
              </div>
              <div>
                <h1 className="font-playfair text-2xl font-bold">Aahasuvai</h1>
                <p className="font-dancing text-sm text-[#c19a6b]">Authentic Indian Spices</p>
              </div>
            </div>
            <p className="text-[#fff6e7] mb-6 leading-relaxed">
              For over 65 years, Aahasuvai has been India's trusted source for premium quality spices and traditional masala blends. We bring authentic flavors from our family kitchen to yours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#004d3d] rounded-full flex items-center justify-center text-white hover:bg-[#006d5d] transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#004d3d] rounded-full flex items-center justify-center text-white hover:bg-[#006d5d] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#004d3d] rounded-full flex items-center justify-center text-white hover:bg-[#006d5d] transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[#004d3d] rounded-full flex items-center justify-center text-white hover:bg-[#006d5d] transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-[#fff6e7] hover:text-[#c19a6b] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="text-[#fff6e7] hover:text-[#c19a6b] transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-[#fff6e7] hover:text-[#c19a6b] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="text-[#fff6e7] hover:text-[#c19a6b] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-[#fff6e7] hover:text-[#c19a6b] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-[#fff6e7]">
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-[#c19a6b]"></i>
                <span className="text-sm">123 Spice Market Street, Tamil Nadu</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone mr-3 text-[#c19a6b]"></i>
                <span className="text-sm">+91 44 2345 6789</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-[#c19a6b]"></i>
                <span className="text-sm">Aahasuvai.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#c19a6b] mt-8 pt-6 text-center text-[#fff6e7]">
          <p>&copy; 2023 Aahasuvai. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
