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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-200/50'
            : 'bg-white/60 backdrop-blur-md border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Glow Effect */}
            <div className="flex items-center space-x-2">
              <div
                className="flex items-center space-x-2 cursor-pointer group"
                onClick={() => smoothScroll('home')}
              >
                <div className="relative flex items-center space-x-3">
                  {/* Glow effect behind logo */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src="/caretrack_logo.png"
                    alt="CareTrack Logo"
                    className="h-14 w-auto transform group-hover:scale-110 transition-all duration-500 relative z-10 drop-shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Navigation - Pill Style */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-gradient-to-r from-gray-50/80 to-gray-100/80 backdrop-blur-lg rounded-full px-2 py-2 shadow-lg border border-gray-200/50">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => smoothScroll(item.id)}
                    className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ease-out ${activeSection === item.id
                        ? 'text-white shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-white/50'
                      }`}
                  >
                    {/* Active background with gradient */}
                    {activeSection === item.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse" />
                    )}
                    <span className="relative z-10">{item.label}</span>

                    {/* Hover glow effect */}
                    {activeSection !== item.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 hover:from-blue-500/10 hover:to-purple-500/10 rounded-full transition-all duration-300" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Login Button - Modern Elevated Style */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="relative group px-8 py-3 rounded-full font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1"
              >
                {/* Animated gradient background */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-gradient" />

                {/* Shine effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </span>

                <span className="relative z-10 text-white flex items-center gap-2">
                  Login
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button - Modern Floating Style */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                      }`}
                  />
                  <span
                    className={`absolute inset-x-0 top-2.5 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-500 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                      }`}
                  />
                  <span
                    className={`absolute inset-x-0 top-5 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Card Style */}
          <div
            className={`md:hidden transition-all duration-500 ease-out overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="mt-4 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
              <div className="flex flex-col p-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      smoothScroll(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`relative text-left font-medium px-6 py-4 rounded-2xl transition-all duration-300 mb-1 ${activeSection === item.id
                        ? 'text-white shadow-lg transform scale-[1.02]'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-white/60 hover:translate-x-2'
                      }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                      transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    }}
                  >
                    {activeSection === item.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl" />
                    )}
                    <span className="relative z-10 flex items-center justify-between">
                      {item.label}
                      {activeSection === item.id && (
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </span>
                  </button>
                ))}

                <div className="mt-3 pt-3 border-t border-gray-200/50">
                  <Link
                    href="/login"
                    className="relative group flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl font-semibold text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-gradient" />
                    <span className="relative z-10 flex items-center gap-2">
                      Login
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navigation;