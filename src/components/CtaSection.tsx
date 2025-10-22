'use client';

import { useState, useEffect } from 'react';

interface CTASectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const CTASection = ({ getAnimationClass }: CTASectionProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number; duration: number }>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <section 
      className="relative py-16 sm:py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[slide_8s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-[slide-vertical_6s_ease-in-out_infinite]" />
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`
          }}
        />
      ))}

      {/* Geometric shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
      <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-white/20 rotate-45 animate-[spin_15s_linear_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-white/10 rounded-lg animate-[pulse_4s_ease-in-out_infinite]" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          data-animate
          id="cta-content"
          className={`transition-all duration-1000 ${getAnimationClass('cta-content', 'opacity-100 translate-y-0')}`}
        >
          {/* Glowing badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-[fade-in_1s_ease-out]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-sm text-white font-medium">Join 500+ healthcare teams</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-[fade-in-up_1s_ease-out_0.2s_both]">
            Discover how{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
                CareTrack
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-400/30 via-pink-400/30 to-purple-400/30 blur-sm" />
            </span>
            <br className="hidden sm:block" />
            can streamline your operations
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed animate-[fade-in-up_1s_ease-out_0.4s_both]">
            <span className="inline-block animate-[bounce_2s_ease-in-out_infinite]">💡</span>{' '}
            Stop managing cases the hard way. Let us show you how CareTrack can{' '}
            <span className="font-semibold text-white">transform your daily operations</span> in just one call.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-[fade-in-up_1s_ease-out_0.6s_both]">
            <button className="group relative bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Request a Demo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            <button className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Trial
                <span className="inline-flex items-center justify-center w-6 h-6 bg-white/20 rounded-full text-xs group-hover:bg-white/30 transition-colors duration-300">
                  ✨
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/80 text-sm animate-[fade-in_1s_ease-out_0.8s_both]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>HIPAA compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Bank-level security</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes slide {
          0%, 100% {
            transform: translateX(-50%);
          }
          50% {
            transform: translateX(50%);
          }
        }

        @keyframes slide-vertical {
          0%, 100% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(50%);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;