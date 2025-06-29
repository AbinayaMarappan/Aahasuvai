import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success",
      description: "Thank you for your message! We will get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
   <section id="contact" className="py-20 bg-[#004d3d]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#fff6e7] mb-4">Get In Touch</h2>
      <p className="text-xl text-[#fff6e7] opacity-90 max-w-3xl mx-auto">
        Have questions about our products or want to place a bulk order? We'd love to hear from you!
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h3 className="font-playfair text-2xl font-semibold text-[#fff6e7] mb-8">Contact Information</h3>

        <div className="space-y-6 text-[#fff6e7]">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#fff6e7] rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-map-marker-alt text-[#004d3d]"></i>
            </div>
            <div>
              <h4 className="font-semibold text-[#fff6e7] mb-1">Address</h4>
              <p className="opacity-90">123 Spice Market Street<br />Tamil Nadu 600001<br />India</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#fff6e7] rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-phone text-[#004d3d]"></i>
            </div>
            <div>
              <h4 className="font-semibold text-[#fff6e7] mb-1">Phone</h4>
              <p className="opacity-90">+91 44 2345 6789<br />+91 98765 43210</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#fff6e7] rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-envelope text-[#004d3d]"></i>
            </div>
            <div>
              <h4 className="font-semibold text-[#fff6e7] mb-1">Email</h4>
              <p className="opacity-90">aahasuvai.com<br />orders@aahasuvai.com</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#fff6e7] rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-clock text-[#004d3d]"></i>
            </div>
            <div>
              <h4 className="font-semibold text-[#fff6e7] mb-1">Business Hours</h4>
              <p className="opacity-90">Mon - Sat: 9:00 AM - 7:00 PM<br />Sun: 10:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8">
          <h4 className="font-semibold text-[#fff6e7] mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-[#fff6e7] rounded-full flex items-center justify-center text-[#004d3d] hover:bg-[#e6dccf] transition-colors">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-[#fff6e7] rounded-full flex items-center justify-center text-[#004d3d] hover:bg-[#e6dccf] transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-[#fff6e7] rounded-full flex items-center justify-center text-[#004d3d] hover:bg-[#e6dccf] transition-colors">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="w-10 h-10 bg-[#fff6e7] rounded-full flex items-center justify-center text-[#004d3d] hover:bg-[#e6dccf] transition-colors">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
          {/* Contact Form */}
         <div className="bg-[#fff6e7] rounded-2xl shadow-lg p-8">
        <h3 className="font-playfair text-2xl font-semibold text-[#004d3d] mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Your full name"
                  required
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+91 xxxxx xxxxx"
                  className="w-full"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <Select onValueChange={(value: string) => handleInputChange("subject", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                    <SelectItem value="bulk-order">Bulk Order</SelectItem>
                    <SelectItem value="quality-concern">Quality Concern</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us how we can help you..."
                  rows={5}
                  required
                  className="w-full resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-[#004d3d] hover:bg-[#006d5d] text-[#fff6e7] py-3 px-6 rounded-lg font-semibold">
                <i className="fas fa-paper-plane mr-2"></i>Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}