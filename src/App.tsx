import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Sparkles, Shield, Star, Users } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTooth } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-lg shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTooth} className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-900">DentalCare</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-900 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-blue-900 hover:text-blue-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-blue-900 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-blue-900 hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <svg className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white">
          <div className="pt-20 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-blue-900 hover:bg-blue-50">Home</a>
            <a href="#services" className="block px-3 py-2 text-base font-medium text-blue-900 hover:bg-blue-50">Services</a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-blue-900 hover:bg-blue-50">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-base font-medium text-blue-900 hover:bg-blue-50">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Your Smile, Our Passion
              </h1>
              <p className="text-lg text-blue-700 mb-8">
                Experience world-class dental care with our team of expert professionals. 
                We're committed to giving you the confident smile you deserve.
              </p>
              <a href="#contact" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Book Appointment
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80"
                alt="Modern Dental Office"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: 'Teeth Whitening', description: 'Professional whitening for a brighter smile' },
              { icon: Shield, title: 'Preventive Care', description: 'Regular checkups and cleaning services' },
              { icon: Star, title: 'Cosmetic Dentistry', description: 'Transform your smile with our expert treatments' },
            ].map((service, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-blue-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Patient Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', text: "The best dental experience I've ever had. Professional, caring, and amazing results!" },
              { name: 'Michael Chen', text: 'Transformed my smile completely. The team is exceptional and very attentive.' },
              { name: 'Emma Davis', text: 'Finally found a dental office that makes me feel comfortable. Highly recommended!' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="font-semibold text-blue-900">{testimonial.name}</span>
                </div>
                <p className="text-blue-700">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Contact Us</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-blue-900">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-blue-900">contact@dentalcare.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                <span className="text-blue-900">123 Dental Street, Healthcare City</span>
              </div>
            </div>
            {/* <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faTooth} className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">DentalCare</span>
              </div>
              <p className="text-blue-200">
                Providing quality dental care with a gentle touch.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a></li>
                <li><a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-blue-200">Teeth Whitening</li>
                <li className="text-blue-200">Preventive Care</li>
                <li className="text-blue-200">Cosmetic Dentistry</li>
                <li className="text-blue-200">Emergency Care</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 DentalCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
