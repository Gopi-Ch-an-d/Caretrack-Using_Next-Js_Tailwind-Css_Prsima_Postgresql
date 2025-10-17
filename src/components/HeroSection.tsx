// components/HeroSection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, ChevronDown, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const HeroSection = ({ getAnimationClass }: HeroSectionProps) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-25 animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:py-24 relative z-10">
        <div className="flex justify-center mb-8" data-animate id="hero-badge">
          <div
            className={`inline-flex flex-wrap items-center justify-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-purple-200 transition-all duration-1000 mx-auto text-center mt-6 sm:mt-10 ${getAnimationClass(
              'hero-badge',
              'animate-slide-down opacity-100 translate-y-0'
            )}`}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping flex-shrink-0"></div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-700 leading-snug font-bold">
                Trusted by Medical Assistance Companies Worldwide
              </span>
              <div className="relative flex items-center">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute"
                  >
                    <Sparkles className="w-4 h-4 text-purple-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-animate id="hero-content">
            <div className={`transition-all duration-1000 delay-300 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0')}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="inline-block animate-fade-in">
                  <span className="bg-gradient-to-r from-violet-600 to-blue-900 bg-clip-text text-transparent font-bold">
                    Care
                  </span>
                  <span className="bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent font-bold ml-1">
                    Track
                  </span>
                </span>
                <span className="block text-black text-4xl">
                  Streamlined Case Management
                </span>
                <span className="block text-4xl font-semibold text-gray-700 mt-2 animate-fade-in-up">
                  for Medical Assistance Companies
                </span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0')}`}>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                🚀 Take Your <span className="text-violet-600 font-semibold">Assistance Operations</span> to the Next Level with
                <span className="text-pink-600 font-bold"> CareTrack</span>.
                An advanced <span className="text-indigo-600 font-semibold">CRM &amp; MIS platform</span> designed to optimize
                <span className="text-green-600 font-semibold"> patient care</span>,
                <span className="text-blue-600 font-semibold"> operational efficiency</span>, and
                <span className="text-red-600 font-semibold"> cost containment</span> for global assistance providers.
                <span className="text-black font-bold"> One platform.</span>
                <span className="text-emerald-600 font-bold"> Zero hassle.</span>
                <span className="text-violet-700 font-bold"> 100% efficiency.</span>
              </p>
            </div>

            <div className={`bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 transition-all duration-1000 delay-700 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0 animate-glow')}`}>
              <p className="text-gray-700">
                Say goodbye to scattered spreadsheets, missed follow-ups, and delayed updates. CareTrack brings
                <span className="text-violet-600 font-semibold"> case management, communication, and reporting </span>
                together &mdash; so you can focus on what matters: delivering exceptional care to your clients.
                With Google Maps, WhatsApp, and Email integration, your team can
                <span className="text-violet-700 font-bold"> work smarter, faster, and better.</span>
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0')}`}>
              <Link
                href="/demo"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-pulse-button flex items-center justify-center"
              >
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                  Request a Demo
                </span>
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <Link
                href="/signup"
                className="group flex items-center justify-center bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg border border-gray-300 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-gray-50"
              >
                <Zap className="w-6 h-6 mr-3 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Start Free Trial
                </span>
              </Link>

              <Link
                href="/videos/First_Starting_Caretrack_Powered_by_Sthiram__1..mp4"
                className="flex items-center justify-center bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="relative">
                  <Play className="w-5 h-5 mr-2 text-blue-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </Link>
            </div>
          </div>

          <div className="relative" data-animate id="hero-image">
            <div className={`relative z-10 rounded-3xl shadow-2xl overflow-hidden w-full h-[400px] sm:h-[500px] transition-all duration-1000 delay-500 ${getAnimationClass('hero-image', 'opacity-100 translate-y-0 hover:scale-105')}`}>
              <Image
                src="https://img.freepik.com/free-photo/doctors-day-cute-young-brunette-guy-lab-coat-wearing-glasses-happy-holding-book_140725-162852.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Medical assistance professional using CareTrack"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-semibold text-lg sm:text-xl animate-fade-in-up">
                  Trusted by Medical Assistance Professionals
                </h3>
                <p className="text-blue-200 mt-1 animate-fade-in-up delay-200">Sarah Johnson, Operations Manager</p>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10 animate-float-reverse"></div>
            <div className="absolute top-1/3 -right-4 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute bottom-1/3 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;