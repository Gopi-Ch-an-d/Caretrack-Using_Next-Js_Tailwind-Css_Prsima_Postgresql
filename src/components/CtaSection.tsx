// components/CTASection.tsx
'use client';

import Link from 'next/link';

interface CTASectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const CTASection = ({ getAnimationClass }: CTASectionProps) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-2 animate-slide-diagonal"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          data-animate
          id="cta-content"
          className={`transition-all duration-1000 ${getAnimationClass('cta-content', 'opacity-100 translate-y-0')}`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Discover how CareTrack can streamline your operations
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            💡 Stop managing cases the hard way. Let us show you how CareTrack can change your daily operations in just one call.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in-up delay-500">
            <Link
              href="/demo"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group relative overflow-hidden"
            >
              <span className="relative z-10">Request a Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            <Link
              href="/signup"
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
            >
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full opacity-80 animate-bounce"></div>
    </section>
  );
};

export default CTASection;