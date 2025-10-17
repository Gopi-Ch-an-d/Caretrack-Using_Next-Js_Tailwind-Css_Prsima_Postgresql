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

  const togglePlan = (index: number) => {
    setExpandedPlans(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl animate-bounce"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-40 blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-10" data-animate id="pricing-header">
          <div className={`transition-all duration-1000 ${getAnimationClass('pricing-header', 'opacity-100 translate-y-0')}`}>
            <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 group inline-block">
              <span className="bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                Choose
              </span>
              <span className="ml-2 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Your
              </span>
              <span className="ml-2 text-gray-900">
                Plan
              </span>
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-pink-700 transition-all duration-500 group-hover:w-full"></span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan for your medical assistance operations. Upgrade or downgrade anytime.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              data-animate
              id={`pricing-${index}`}
              className={`relative bg-gradient-to-br ${plan.color} border-2 ${
                plan.popular
                  ? 'border-purple-500 lg:scale-105 shadow-2xl'
                  : 'border-gray-200'
              } rounded-3xl p-4 sm:p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-102 group/card ${getAnimationClass(`pricing-${index}`, 'opacity-100 translate-y-0')}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold animate-pulse">
                    <Sparkles className="w-4 h-4 inline-block mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover/card:scale-110 transition-transform duration-300">
                  {plan.name}
                </h3>
                <div className="mb-2 sm:mb-3">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900 group-hover/card:text-blue-600 transition-colors duration-300">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 group-hover/card:text-gray-700 transition-colors duration-300">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {plan.features.slice(0, 5).map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-12" />
                    <span className="text-sm sm:text-base text-gray-700 transition-colors duration-300 group-hover/card:text-gray-900">
                      {feature}
                    </span>
                  </li>
                ))}

                {expandedPlans[index] &&
                  plan.features.slice(5).map((feature, featureIndex) => (
                    <li
                      key={featureIndex + 5}
                      className="flex items-start space-x-2 sm:space-x-3 animate-pulse"
                    >
                      <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-12" />
                      <span className="text-sm sm:text-base text-gray-700 transition-colors duration-300 group-hover/card:text-gray-900">
                        {feature}
                      </span>
                    </li>
                  ))}

                {plan.features.length > 5 && (
                  <button
                    onClick={() => togglePlan(index)}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-1 sm:mt-2 flex items-center transition-colors duration-300"
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

              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-800">
                  <Shield className="w-4 h-4 inline mr-1" />
                  {plan.requirements}
                </p>
              </div>

              <Link
                href={'/signup'}
                className={`block w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base relative overflow-hidden group/button text-center no-underline ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg`
                    : 'bg-white text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md'
                }`}
              >
                <span className="relative z-10">{plan.buttonText}</span>
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>
                )}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" data-animate id="feature-highlights">
          <div className={`text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl transition-all duration-1000 delay-300 ${getAnimationClass('feature-highlights', 'opacity-100 translate-y-0')}`}>
            <Shield className="w-8 h-8 mx-auto mb-3 text-green-600" />
            <h4 className="font-semibold mb-2">
              <span className="bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                Azure
              </span>
              <span className="ml-2 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Security
              </span>
            </h4>
            <p className="text-sm text-gray-600">Enterprise-grade security with Microsoft Azure platform</p>
          </div>
          <div className={`text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl transition-all duration-1000 delay-400 ${getAnimationClass('feature-highlights', 'opacity-100 translate-y-0')}`}>
            <MessageSquare className="w-8 h-8 mx-auto mb-3 text-blue-600" />
            <h4 className="font-semibold mb-2">
              <span className="bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                Multi-Channel
              </span>
              <span className="ml-2 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Support
              </span>
            </h4>
            <p className="text-sm text-gray-600">Email, WhatsApp, and internal chat integration</p>
          </div>
          <div className={`text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl transition-all duration-1000 delay-500 ${getAnimationClass('feature-highlights', 'opacity-100 translate-y-0')}`}>
            <Users className="w-8 h-8 mx-auto mb-3 text-purple-600" />
            <h4 className="font-semibold mb-2">
              <span className="bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                Team
              </span>
              <span className="ml-2 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Management
              </span>
            </h4>
            <p className="text-sm text-gray-600">User licenses with supervisor and admin controls</p>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8" data-animate id="pricing-footer">
          <div className={`transition-all duration-1000 delay-600 ${getAnimationClass('pricing-footer', 'opacity-100 translate-y-0')}`}>
            <p className="mb-2 sm:mb-3">
              <span className="bg-gradient-to-r from-violet-500 to-pink-600 bg-clip-text text-transparent">
                All plans include company verification and dedicated IT support
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm">
              {[
                { label: "Azure Platform", icon: <Cloud className="w-5 h-5 mr-1" />, color: "text-blue-500" },
                { label: "Secure Integration", icon: <Lock className="w-5 h-5 mr-1" />, color: "text-green-500" },
                { label: "Expert Support", icon: <Users className="w-5 h-5 mr-1" />, color: "text-red-500" },
              ].map((feature, index) => (
                <span
                  key={index}
                  className={`flex items-center animate-pulse ${feature.color}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {feature.icon}
                  {feature.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;