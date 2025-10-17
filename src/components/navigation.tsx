// components/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  activeSection: string;
  scrolled: boolean;
  smoothScroll: (targetId: string) => void;
}

const Navigation = ({ activeSection, scrolled, smoothScroll }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'About' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm border-b z-50 transition-all duration-500 ${
        scrolled ? 'shadow-lg bg-white/95' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => smoothScroll('home')}
            >
              <div className="flex items-center space-x-3 group">
                <img
                  src="/caretrack_logo.png"
                  alt="CareTrack Logo"
                  className="h-16 w-auto transform group-hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => smoothScroll(item.id)}
                className={`relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 transform hover:scale-105 group ${
                  activeSection === item.id ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
                <span
                  className={`absolute -top-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute inset-x-0 top-0 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                  }`}
                ></span>
                <span
                  className={`absolute inset-x-0 top-2.5 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`absolute inset-x-0 top-5 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
          }`}
        >
          <div className="border-t bg-white/95 backdrop-blur-md rounded-b-xl">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    smoothScroll(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`relative text-left text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-all duration-300 transform hover:translate-x-2 hover:bg-blue-50 rounded-lg mx-2 ${
                    activeSection === item.id ? 'text-blue-600 bg-blue-50' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none',
                  }}
                >
                  {item.label}
                  <span
                    className={`absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                      activeSection === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></span>
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${
                      activeSection === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></span>
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                <Link
                  href="/login"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium text-center transition-all duration-300 transform hover:scale-105"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;