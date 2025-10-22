'use client';

import { Heart, Users, Shield, TrendingUp, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-400/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 mb-6 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl transform group-hover:scale-105 transition-all duration-500 border border-gray-200/20">
                <img
                  src="/caretrack_logo.png"
                  alt="CareTrack Logo"
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display = 'flex';
                    }
                  }}
                />
                <div className="hidden w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl items-center justify-center">
                  <Heart className="w-8 h-8 text-white" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering healthcare providers with intelligent case management,
            cost optimization, and seamless care coordination.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, label: "Active Users", value: "50K+" },
            { icon: Shield, label: "Cases Managed", value: "1M+" },
            { icon: TrendingUp, label: "Cost Savings", value: "$100M+" },
            { icon: Heart, label: "Lives Improved", value: "2M+" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-7 h-7 text-blue-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              title: "Platform",
              links: [
                { name: "Dashboard", href: "#home" },
                { name: "Features", href: "#features" },
                { name: "Solutions", href: "#solutions" },
                { name: "Integrations", href: "#integrations" },
                { name: "Pricing", href: "#pricing" }
              ]
            },
            {
              title: "Services",
              links: [
                { name: "Case Management", href: "#case-management" },
                { name: "Cost Containment", href: "#cost-containment" },
                { name: "Provider Network", href: "#provider-network" },
                { name: "Analytics & Reporting", href: "#analytics" },
                { name: "Compliance Tools", href: "#compliance" }
              ]
            },
            {
              title: "Resources",
              links: [
                { name: "Documentation", href: "#docs" },
                { name: "API Reference", href: "#api" },
                { name: "Case Studies", href: "#case-studies" },
                { name: "Webinars", href: "#webinars" },
                { name: "Support Center", href: "#support" }
              ]
            },
            {
              title: "Company",
              links: [
                { name: "About Us", href: "#about" },
                { name: "Features", href: "#features" },
                { name: "Solutions", href: "#solutions" },
                { name: "Pricing", href: "#pricing" },
                { name: "Contact", href: "#contact" }
              ]
            }
          ].map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                {column.title}
                <div className="ml-2 w-8 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm"
                    >
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-6 sm:p-8 mb-12 backdrop-blur-sm border border-gray-700/50">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-medium">Email Us</div>
                <div className="text-gray-400 text-sm">ganesh@sthiramservices.com</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-white font-medium">Call Us</div>
                <div className="text-gray-400 text-sm">+91-7207349050</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-white font-medium">Visit Us</div>
                <div className="text-gray-400 text-sm">Sthiram Services LLP</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/60 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Sthiram Services LLP. All rights reserved.
              </p>
              <div className="hidden sm:flex items-center space-x-4 text-sm">
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
                <span className="text-gray-600">•</span>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
                <span className="text-gray-600">•</span>
                <a href="#security" className="text-gray-400 hover:text-white transition-colors duration-300">Security</a>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <span className="text-gray-400 text-sm mr-3">Follow us:</span>
              {[
                { Icon: Facebook, color: "hover:text-blue-400" },
                { Icon: Twitter, color: "hover:text-sky-400" },
                { Icon: Instagram, color: "hover:text-pink-400" },
                { Icon: Linkedin, color: "hover:text-blue-500" }
              ].map(({ Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-gray-700/50 hover:border-gray-600/50`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
    </footer>
  );
};

export default Footer;