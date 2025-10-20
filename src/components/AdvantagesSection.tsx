'use client';

import { advantages } from '@/lib/data/advantages';

interface AdvantagesSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const AdvantagesSection = ({ getAnimationClass }: AdvantagesSectionProps) => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-white via-sky-50 to-indigo-50 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.15),transparent_60%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.15),transparent_60%)] animate-pulse delay-200"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16" data-animate id="advantages-header">
          <div
            className={`transition-all duration-1000 ${getAnimationClass(
              'advantages-header',
              'opacity-100 translate-y-0'
            )}`}
          >
            <h2 className="inline-block text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight group relative mb-4">
              {['CareTrack', 'Advantages'].map((word, i) => {
                const colors = ['text-sky-500', 'text-emerald-500'];
                return (
                  <span key={i} className={`${colors[i % colors.length]} mr-2`}>
                    {word}
                  </span>
                );
              })}
              <span className="absolute left-0 bottom-0 h-[3px] bg-gradient-to-r from-sky-500 to-emerald-500 w-0 group-hover:w-full transition-all duration-700"></span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-gray-600">
              Smart Tools for Smart Assistance — your all-in-one system for streamlined medical operations.
            </p>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              id={`advantage-${index}`}
              data-animate
              className={`relative bg-white/60 backdrop-blur-md border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.04] hover:bg-white ${getAnimationClass(
                `advantage-${index}`,
                'opacity-100 translate-y-0'
              )}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 rounded-full bg-gradient-to-br from-sky-100 to-emerald-100 group-hover:from-sky-200 group-hover:to-emerald-200 transform transition-all duration-300 group-hover:rotate-6">
                  {advantage.icon}
                </div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg group-hover:text-sky-600 transition-colors duration-300">
                  {advantage.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {advantage.description}
                </p>
              </div>
              {/* Animated gradient border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
