import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Zap, ChevronDown, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen flex items-center">
      {/* Optimized background elements with will-change */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-float will-change-transform"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-30 animate-bounce-slow will-change-transform"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-25 animate-float-reverse will-change-transform"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:py-24 relative z-10">
        {/* Badge with smooth entrance */}
        <div className="flex justify-center mb-8">
          <div
            className={`inline-flex flex-wrap items-center justify-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-purple-200 mx-auto text-center mt-6 sm:mt-10 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping flex-shrink-0"></div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-700 leading-snug font-bold">
                Trusted by Medical Assistance Companies Worldwide
              </span>
              <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content with staggered animations */}
          <div className="space-y-8">
            <div className={`transition-all duration-700 delay-150 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="inline-block">
                  <span className="bg-gradient-to-r from-violet-600 to-blue-900 bg-clip-text text-transparent font-bold">
                    Care
                  </span>
                  <span className="bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent font-bold ml-1">
                    Track
                  </span>
                </span>
                <span className="block text-black text-4xl mt-2">
                  Streamlined Case Management
                </span>
                <span className="block text-4xl font-semibold text-gray-700 mt-2">
                  for Medical Assistance Companies
                </span>
              </h1>
            </div>

            <div className={`transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                🚀 Take Your <span className="text-violet-600 font-semibold">Assistance Operations</span> to the Next Level with
                <span className="text-pink-600 font-bold"> CareTrack</span>.
                An advanced <span className="text-indigo-600 font-semibold">CRM & MIS platform</span> designed to optimize
                <span className="text-green-600 font-semibold"> patient care</span>,
                <span className="text-blue-600 font-semibold"> operational efficiency</span>, and
                <span className="text-red-600 font-semibold"> cost containment</span> for global assistance providers.
                <span className="text-black font-bold"> One platform.</span>
                <span className="text-emerald-600 font-bold"> Zero hassle.</span>
                <span className="text-violet-700 font-bold"> 100% efficiency.</span>
              </p>
            </div>

            <div className={`bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-gray-700">
                Say goodbye to scattered spreadsheets, missed follow-ups, and delayed updates. CareTrack brings
                <span className="text-violet-600 font-semibold"> case management, communication, and reporting </span>
                together — so you can focus on what matters: delivering exceptional care to your clients.
                With Google Maps, WhatsApp, and Email integration, your team can
                <span className="text-violet-700 font-bold"> work smarter, faster, and better.</span>
              </p>
            </div>

            {/* CTAs with smooth transitions */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex items-center justify-center will-change-transform">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                  Request a Demo
                </span>
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300 ease-out" />
              </button>

              <button className="group flex items-center justify-center bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg border border-gray-300 hover:border-gray-400 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:bg-gray-50 will-change-transform">
                <Zap className="w-6 h-6 mr-3 text-blue-600 group-hover:text-purple-600 transition-colors duration-300 ease-out" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Start Free Trial
                </span>
              </button>

              <button className="flex items-center justify-center bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1 shadow-lg group will-change-transform">
                <div className="relative">
                  <Play className="w-5 h-5 mr-2 text-blue-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300 ease-out" />
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Image with smooth entrance */}
          <div className="relative -mt-10 sm:-mt-16 lg:-mt-20">
            <div
              className={`relative z-10 rounded-3xl shadow-2xl overflow-hidden w-[85%] sm:w-[70%] md:w-[60%] h-[550px] sm:h-[650px] mx-auto transition-all duration-700 delay-500 ease-out hover:scale-105 will-change-transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <img
                src="https://media.istockphoto.com/id/479378798/photo/portrait-of-female-doctor.jpg?s=612x612&w=0&k=20&c=P-W8KSJBYhYj2RSx1Zhff6FCGvtRDC3AAzox8deMmew="
                alt="Medical assistance professional using CareTrack"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110 will-change-transform"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white font-semibold text-lg sm:text-xl">
                  Trusted by Medical Assistance Professionals
                </h3>
                <p className="text-blue-200 mt-1">
                  Sarah Johnson, Operations Manager
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full opacity-20 animate-float will-change-transform"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10 animate-float-reverse will-change-transform"></div>
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