// components/FeaturesSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { services } from '@/lib/data/services';

interface FeaturesSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const FeaturesSection = ({ getAnimationClass }: FeaturesSectionProps) => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(prev => (prev === index ? null : index));
  };

  return (
    <section id="features" className="py-16 sm:py-20 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16" data-animate id="features-header">
          <div className={`transition-all duration-1000 ${getAnimationClass('features-header', 'opacity-100 translate-y-0')}`}>
            <h2 className="relative inline-block text-center text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in group">
              <span className="bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                Care
              </span>
              <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Track
              </span>
              <span className="text-gray-900"> Features</span>
              <span className="absolute left-1/2 -bottom-1 h-[3px] w-0 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to streamline your medical assistance operations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const initialFeaturesToShow = 2;
            const totalFeatures = service.features.length;
            const hiddenFeaturesCount = totalFeatures - initialFeaturesToShow;

            return (
              <div
                key={index}
                data-animate
                id={`service-${index}`}
                className={`group bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-102 ${getAnimationClass(`service-${index}`, 'opacity-100 translate-y-0')}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-40 sm:h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="mr-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 lg:mb-6">
                    {service.features.slice(0, initialFeaturesToShow).map((feature, i) => (
                      <li key={i} className="flex items-start group/item">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-xs sm:text-sm text-gray-600 group-hover/item:text-gray-700 transition-colors duration-300">{feature}</span>
                      </li>
                    ))}

                    {expandedService === index && service.features.slice(initialFeaturesToShow).map((feature, i) => (
                      <li key={i + initialFeaturesToShow} className="flex items-start animate-slide-down opacity-0" style={{ animation: 'slideDown 0.3s ease-out forwards', animationDelay: `${i * 0.1}s` }}>
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}

                    {hiddenFeaturesCount > 0 && (
                      <button
                        onClick={() => toggleService(index)}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium mt-1 sm:mt-2 flex items-center group/button transition-colors duration-300"
                      >
                        {expandedService === index ? 'Show less' : `+${hiddenFeaturesCount} more`}
                        <ChevronDown className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${expandedService === index ? 'rotate-180' : 'group-hover/button:translate-y-1'}`} />
                      </button>
                    )}

                    {expandedService === index && service.additionalContent && (
                      <div className="mt-2 sm:mt-3 lg:mt-4 pt-2 sm:pt-3 lg:pt-4 border-t border-gray-100 animate-fade-in">
                        <p className="text-xs sm:text-sm text-gray-600">{service.additionalContent}</p>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;