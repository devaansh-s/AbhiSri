import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-gray-50">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Us</h2>
        <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6"></div>
        <p className="text-lg text-gray-700">
          Have questions? Get in touch with us for personalized assistance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Message Form */}
        <div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form action="https://formspree.io/f/xpwdgdyq" method="POST">
              <input 
                type="hidden" 
                name="_subject" 
                value="New Contact Form Submission from Website" 
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    name="name"
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  name="phone"
                  type="tel" 
                  id="phone" 
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                    placeholder="+91 12345 67890"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                <select 
                  name="service"
                  id="service" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="investment-planning">Investment Planning</option>
                  <option value="wealth-management">Wealth Management</option>
                  <option value="portfolio-optimization">Portfolio Optimization</option>
                  <option value="retirement-planning">Retirement Planning</option>
                  <option value="tax-planning">Tax Planning</option>
                  <option value="risk-management">Risk Management</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  name="message"
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        {/* Contact Details & Map */}
        <div>
          <div className="bg-white rounded-xl shadow-md p-8 h-full flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office Location</h4>
                  <p className="text-gray-700 mt-1">
                    H-1 843 World Bank Barra, Kanpur, India 208027
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone Number</h4>
                  <p className="text-gray-700 mt-1">
                    <a href="tel:+911234567890" className="hover:text-primary">
                      +91 95319 53774
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Address</h4>
                  <p className="text-gray-700 mt-1">
                    <a href="mailto:abhisriinvestmentservices@gmail.com" className="hover:text-primary">
                      abhisriinvestmentservices@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  <div className="text-gray-700 mt-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex-grow">
              <h4 className="font-semibold text-gray-900 mb-3">Find Us on Map</h4>
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1748173632206!6m8!1m7!1sNaJty4JWhpeziQ4Rh-OqVA!2m2!1d26.42545685326954!2d80.2941444888084!3f197.68324620392016!4f9.179691015824986!5f0.4000000000000002"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AbhiSri Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
