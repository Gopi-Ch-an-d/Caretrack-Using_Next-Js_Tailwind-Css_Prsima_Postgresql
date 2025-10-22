'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface ContactSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const ContactSection = ({ getAnimationClass }: ContactSectionProps) => {
  const [message, setMessage] = useState('');

  return (
    <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-30 animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div
            data-animate
            id="contact-info"
            className={`transition-all duration-1000 ${getAnimationClass('contact-info', 'opacity-100 translate-y-0')}`}
          >
            <h2 className="relative inline-block text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in group">
              {["Get", "In", "Touch"].map((word, index) => {
                const colors = ["text-blue-500", "text-green-500", "text-purple-500"];
                return (
                  <span key={index} className={`${colors[index % colors.length]} mr-2`}>
                    {word}
                  </span>
                );
              })}
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 animate-fade-in-up delay-300">
              Have questions or need assistance? Our team is here to help you with any inquiries about CareTrack.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
                  title: "Call",
                  content: "+91-7207349050"
                },
                {
                  icon: <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
                  title: "Email",
                  content: "ganesh@sthiramservices.com"
                },
                {
                  icon: <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
                  title: "Address",
                  content: "Sthiram Services LLP"
                }
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4 group hover:bg-white/50 p-3 rounded-lg transition-all duration-300 animate-slide-right"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {contact.title}
                    </h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {contact.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-3 sm:space-x-4 mt-6 sm:mt-8">
              {[
                { icon: <Facebook className="w-4 sm:w-5 h-4 sm:h-5 text-white" />, href: "#", bgColor: "bg-blue-600", hoverBg: "hover:bg-blue-800" },
                { icon: <Twitter className="w-4 sm:w-5 h-4 sm:h-5 text-white" />, href: "#", bgColor: "bg-sky-400", hoverBg: "hover:bg-sky-600" },
                { icon: <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-white" />, href: "#", bgColor: "bg-pink-500", hoverBg: "hover:bg-pink-700" },
                { icon: <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-white" />, href: "#", bgColor: "bg-blue-700", hoverBg: "hover:bg-blue-900" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-8 sm:w-10 h-8 sm:h-10 ${social.bgColor} ${social.hoverBg} rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 animate-bounce`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div
            data-animate
            id="contact-form"
            className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${getAnimationClass('contact-form', 'opacity-100 translate-y-0')}`}
          >
            <h3 className="relative inline-block text-xl sm:text-2xl font-semibold mb-6 group text-center">
              {["Send", "us", "a", "message"].map((word, index) => {
                const colors = ["text-blue-500", "text-green-500", "text-purple-500", "text-red-500"];
                return (
                  <span key={index} className={`${colors[index % colors.length]} mr-2`}>
                    {word}
                  </span>
                );
              })}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-50 to-red-500 transition-all duration-500 group-hover:w-full"></span>
            </h3>

            <form className="space-y-4 sm:space-y-6">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "company", label: "Company", type: "text", placeholder: "Your company name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" }
              ].map((field, index) => (
                <div
                  key={field.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                >
                  <option value="">Select a topic</option>
                  <option value="demo">Request a Demo</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                </select>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 resize-none"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group animate-fade-in"
                style={{ animationDelay: '0.5s' }}
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;