// components/AdvantagesSection.tsx
'use client';

import { advantages } from "@/lib/data/advantages";


// import { advantages } from "@/lib/data/advantages";

interface AdvantagesSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const AdvantagesSection = ({ getAnimationClass }: AdvantagesSectionProps) => {
  return (
    <div className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16" data-animate id="advantages-header">
          <div className={`transition-all duration-1000 ${getAnimationClass('advantages-header', 'opacity-100 translate-y-0')}`}>
            <h3 className="relative inline-block text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 group">
              {["CareTrack", "Advantages"].map((word, index) => {
                const colors = ["text-blue-500", "text-green-500"];
                return (
                  <span key={index} className={`${colors[index % colors.length]} mr-2`}>
                    {word}
                  </span>
                );
              })}
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Smart Tools for Smart Assistance - Everything you need to excel in medical assistance operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              data-animate
              id={`advantage-${index}`}
              className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group hover:border-blue-300 ${getAnimationClass(`advantage-${index}`, 'opacity-100 translate-y-0')}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {advantage.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">
                  {advantage.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;