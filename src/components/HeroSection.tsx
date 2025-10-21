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
    <section id="home" className="relative overflow-x-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1681966826227-d008a1cfe9c7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
          alt="Healthcare background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/80 to-pink-900/75"></div>
        {/* Additional Light Gradient for Depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/10 via-transparent to-purple-50/10"></div>
      </div>

      {/* Animated Background Elements - Hidden on mobile for better performance */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse z-[1] hidden sm:block"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-float z-[1] hidden sm:block"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-30 animate-bounce-slow z-[1] hidden sm:block"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-25 animate-float-reverse z-[1] hidden sm:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-20 lg:py-24 relative z-10 w-full">
        {/* Badge - Improved mobile spacing */}
        <div
          className="flex justify-center mb-4 sm:mb-8 px-2 sm:px-4 relative z-20 mt-16 sm:mt-0"
          data-animate
          id="hero-badge"
        >
          <div
            className={`inline-flex flex-wrap items-center justify-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-purple-200 shadow-sm transition-all duration-1000 w-fit max-w-[90%] sm:max-w-full ${getAnimationClass(
              'hero-badge',
              'animate-slide-down opacity-100 translate-y-0'
            )}`}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping flex-shrink-0"></div>
            <span className="text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-800 text-center">
              Trusted by Medical Assistance Companies Worldwide
            </span>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex-shrink-0"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            </motion.div>
          </div>
        </div>



        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content Section - Improved mobile typography and spacing */}
          <div className="space-y-6 sm:space-y-8" data-animate id="hero-content">
            <div className={`transition-all duration-1000 delay-300 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0')}`}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold leading-snug sm:leading-tight">
                <span className="inline-block animate-fade-in">
                  <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-bold font-serif">
                    Care
                  </span>
                  <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent font-bold ml-1 font-serif">
                    Track
                  </span>
                </span>
                <span className="block text-black text-2xl sm:text-3xl lg:text-4xl mt-2 sm:mt-0 font-bold">
                  Streamlined Case Management
                </span>
                <span className="block text-xl sm:text-2xl lg:text-4xl  text-red-500 mt-2 sm:mt-3 animate-fade-in-up font-extrabold">
                  for Medical Assistance Companies
                </span>
              </h1>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0')}`}>
              <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed sm:leading-relaxed">
                🚀 Take Your <span className="text-cyan-300 font-semibold">Assistance Operations</span> to the Next Level with
                <span className="text-pink-300 font-bold"> CareTrack</span>.
                An advanced <span className="text-blue-300 font-semibold">CRM &amp; MIS platform</span> designed to optimize
                <span className="text-green-300 font-semibold"> patient care</span>,
                <span className="text-blue-200 font-semibold"> operational efficiency</span>, and
                <span className="text-rose-300 font-semibold"> cost containment</span> for global assistance providers.
                <span className="text-white font-bold"> One platform.</span>
                <span className="text-emerald-300 font-bold"> Zero hassle.</span>
                <span className="text-purple-300 font-bold"> 100% efficiency.</span>
              </p>
            </div>

            <div className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 transition-all duration-1000 delay-700 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0 animate-glow')}`}>
              <p className="text-gray-100 text-sm sm:text-base">
                Say goodbye to scattered spreadsheets, missed follow-ups, and delayed updates. CareTrack brings
                <span className="text-cyan-300 font-semibold"> case management, communication, and reporting </span>
                together &mdash; so you can focus on what matters: delivering exceptional care to your clients.
                With Google Maps, WhatsApp, and Email integration, your team can
                <span className="text-purple-300 font-bold"> work smarter, faster, and better.</span>
              </p>
            </div>

            {/* Buttons - Stacked on mobile with better spacing */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-1000 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0')}`}>
              <Link
                href="/demo"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-pulse-button flex items-center justify-center text-center"
              >
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                  Request a Demo
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300" />
              </Link>

              <Link
                href="/signup"
                className="group flex items-center justify-center bg-white/90 backdrop-blur-sm text-gray-900 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border border-white/30 hover:border-white/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-white"
              >
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Start Free Trial
                </span>
              </Link>

              <Link
                href="/videos/First_Starting_Caretrack_Powered_by_Sthiram__1..mp4"
                className="flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-900 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/95 transition-all duration-300 transform hover:scale-105 shadow-lg group"
              >
                <div className="relative">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
                  <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </Link>
            </div>
          </div>

          {/* Image Section - Hidden on mobile, shown on desktop */}
          <div className="relative hidden lg:block -mt-10 sm:-mt-16 lg:-mt-20" data-animate id="hero-image">

            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10 animate-float-reverse"></div>
            <div className="absolute top-1/3 -right-4 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-60"></div>
            <div className="absolute bottom-1/3 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10 hidden sm:block">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-white/60" />
      </div>
    </section>
  );
};

export default HeroSection;