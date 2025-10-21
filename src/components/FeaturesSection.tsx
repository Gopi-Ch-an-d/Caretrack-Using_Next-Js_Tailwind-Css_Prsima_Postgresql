'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CheckCircle, ChevronDown, Sparkles } from 'lucide-react';
import { services } from '@/lib/data/services';

interface FeaturesSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const FeaturesSection = ({ getAnimationClass }: FeaturesSectionProps) => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(prev => (prev === index ? null : index));
  };

  return (
    <section id="features" className="py-20 sm:py-32 bg-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24" data-animate id="features-header">
          <div className={`transition-all duration-1000 ${getAnimationClass('features-header', 'opacity-100 translate-y-0')}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Powerful Features</span>
            </div>
            
            <h2 className="relative inline-block text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in group">
              <span className="text-blue-500">
                CareTrack
              </span>
              <span className="text-red-500"> Ecosystem</span>
              <span className="absolute left-1/2 -bottom-2 h-1 w-0 -translate-x-1/2 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Next-generation medical assistance platform with cutting-edge features designed for modern healthcare.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const initialFeaturesToShow = 2;
            const totalFeatures = service.features.length;
            const hiddenFeaturesCount = totalFeatures - initialFeaturesToShow;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                data-animate
                id={`service-${index}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden transition-all duration-500 ${getAnimationClass(`service-${index}`, 'opacity-100 translate-y-0')}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 20px 40px -15px rgba(0, 0, 0, 0.5)' : '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
                }}
              >
                
                {/* Glass morphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    style={{ filter: isHovered ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.9)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-4 sm:mb-5">
                    <div className="mr-3 p-2 rounded-xl bg-blue-500/20 backdrop-blur-sm transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-5 sm:mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-5 sm:mb-6">
                    {service.features.slice(0, initialFeaturesToShow).map((feature, i) => (
                      <li key={i} className="flex items-start group/item">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 group-hover/item:scale-110 transition-transform duration-300" />
                        <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
                      </li>
                    ))}

                    {expandedService === index && service.features.slice(initialFeaturesToShow).map((feature, i) => (
                      <li key={i + initialFeaturesToShow} className="flex items-start animate-slide-down opacity-0" style={{ animation: 'slideDown 0.3s ease-out forwards', animationDelay: `${i * 0.05}s` }}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </li>
                    ))}

                    {hiddenFeaturesCount > 0 && (
                      <button
                        onClick={() => toggleService(index)}
                        className="text-sm font-semibold text-blue-400 hover:text-blue-300 mt-2 flex items-center group/button transition-all duration-300"
                      >
                        {expandedService === index ? 'Show less' : `+${hiddenFeaturesCount} more features`}
                        <ChevronDown className={`w-4 h-4 ml-1 text-blue-400 transform transition-transform duration-300 ${expandedService === index ? 'rotate-180' : 'group-hover/button:translate-y-1'}`} />
                      </button>
                    )}

                    {expandedService === index && service.additionalContent && (
                      <div className="mt-4 pt-4 border-t border-slate-700/50 animate-fade-in">
                        <p className="text-sm text-slate-400 leading-relaxed">{service.additionalContent}</p>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
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

export default FeaturesSection;