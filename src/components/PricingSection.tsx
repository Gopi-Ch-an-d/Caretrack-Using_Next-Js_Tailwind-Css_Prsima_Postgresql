// components/PricingSection.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ChevronDown, Sparkles, Shield, MessageSquare, Users, Cloud, Lock } from 'lucide-react';
import { pricingPlans } from '@/lib/data/pricing';

interface PricingSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const PricingSection = ({ getAnimationClass }: PricingSectionProps) => {
  const [expandedPlans, setExpandedPlans] = useState<Record<number, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const togglePlan = (index: number) => {
    setExpandedPlans(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24" data-animate id="pricing-header">
          <div className={`transition-all duration-1000 ${getAnimationClass('pricing-header', 'opacity-100 translate-y-0')}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Flexible Pricing</span>
            </div>

            <h2 className="relative inline-block text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 group">
              <span className="text-blue-500">Choose Your</span>
              <span className="text-white"> Plan</span>
              <span className="absolute left-1/2 -bottom-2 h-1 w-0 -translate-x-1/2 bg-blue-500 transition-all duration-500 group-hover:w-full"></span>
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Select the perfect plan for your medical assistance operations. Upgrade or downgrade anytime.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pricingPlans.map((plan, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                data-animate
                id={`pricing-${index}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-slate-900/90 backdrop-blur-xl border ${
                  plan.popular
                    ? 'border-blue-500/50 lg:scale-105'
                    : 'border-slate-700/50'
                } rounded-3xl p-6 sm:p-8 transition-all duration-500 group/card ${getAnimationClass(`pricing-${index}`, 'opacity-100 translate-y-0')}`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 20px 40px -15px rgba(0, 0, 0, 0.5)' : '0 10px 30px -15px rgba(0, 0, 0, 0.3)'
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-blue-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className={`text-center mb-6 sm:mb-8 relative z-10 ${plan.popular ? 'mt-4 sm:mt-0' : ''}`}>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover/card:text-blue-400 transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <div className="mb-3 sm:mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-slate-400 group-hover/card:text-slate-300 transition-colors duration-300">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 relative z-10">
                  {plan.features.slice(0, 5).map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3 group/item"
                    >
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/item:scale-110" />
                      <span className="text-sm sm:text-base text-slate-300 transition-colors duration-300 group-hover/item:text-white">
                        {feature}
                      </span>
                    </li>
                  ))}

                  {expandedPlans[index] &&
                    plan.features.slice(5).map((feature, featureIndex) => (
                      <li
                        key={featureIndex + 5}
                        className="flex items-start space-x-3 animate-slide-down opacity-0"
                        style={{ animation: 'slideDown 0.3s ease-out forwards', animationDelay: `${featureIndex * 0.05}s` }}
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}

                  {plan.features.length > 5 && (
                    <button
                      onClick={() => togglePlan(index)}
                      className="text-sm font-semibold text-blue-400 hover:text-blue-300 mt-2 flex items-center transition-colors duration-300"
                    >
                      {expandedPlans[index]
                        ? 'Show less'
                        : `+${plan.features.length - 5} more features`}
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transform transition-all duration-300 ${
                          expandedPlans[index] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </ul>

                <div className="mb-6 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-xl relative z-10">
                  <p className="text-xs sm:text-sm text-yellow-300 flex items-start">
                    <Shield className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{plan.requirements}</span>
                  </p>
                </div>

                <Link
                  href={'/signup'}
                  className={`block w-full py-3 sm:py-4 px-6 rounded-xl font-semibold transition-all duration-300 text-center relative z-10 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                      : 'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-600'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6" data-animate id="feature-highlights">
          <div className={`text-center p-6 sm:p-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl transition-all duration-1000 delay-300 hover:border-green-500/50 group ${getAnimationClass('feature-highlights', 'opacity-100 translate-y-0')}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
              <Shield className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-white">
              Azure Security
            </h4>
            <p className="text-sm text-slate-400">Enterprise-grade security with Microsoft Azure platform</p>
          </div>

          <div className={`text-center p-6 sm:p-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl transition-all duration-1000 delay-400 hover:border-blue-500/50 group ${getAnimationClass('feature-highlights', 'opacity-100 translate-y-0')}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
              <MessageSquare className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-white">
              Multi-Channel Support
            </h4>
            <p className="text-sm text-slate-400">Email, WhatsApp, and internal chat integration</p>
          </div>

          <div className={`text-center p-6 sm:p-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl transition-all duration-1000 delay-500 hover:border-purple-500/50 group ${getAnimationClass('feature-highlights', 'opacity-100 translate-y-0')}`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
              <Users className="w-8 h-8 text-purple-500" />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-white">
              Team Management
            </h4>
            <p className="text-sm text-slate-400">User licenses with supervisor and admin controls</p>
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16" data-animate id="pricing-footer">
          <div className={`transition-all duration-1000 delay-600 ${getAnimationClass('pricing-footer', 'opacity-100 translate-y-0')}`}>
            <p className="mb-4 text-blue-400 font-medium">
              All plans include company verification and dedicated IT support
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm">
              {[
                { label: "Azure Platform", icon: <Cloud className="w-5 h-5 mr-2" />, color: "text-blue-400" },
                { label: "Secure Integration", icon: <Lock className="w-5 h-5 mr-2" />, color: "text-green-400" },
                { label: "Expert Support", icon: <Users className="w-5 h-5 mr-2" />, color: "text-purple-400" },
              ].map((feature, index) => (
                <span
                  key={index}
                  className={`flex items-center ${feature.color}`}
                >
                  {feature.icon}
                  {feature.label}
                </span>
              ))}
            </div>
          </div>
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

export default PricingSection;