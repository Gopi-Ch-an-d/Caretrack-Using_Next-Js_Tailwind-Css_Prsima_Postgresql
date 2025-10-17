// components/SolutionsSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart, DollarSign, Shield, Check, ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const SolutionsSection = ({ getAnimationClass }: SolutionsSectionProps) => {
  const [showMissionInfo, setShowMissionInfo] = useState(false);

  const solutions = [
    {
      icon: <Heart className="w-6 h-6 text-blue-600" />,
      title: "Medical Assistance Companies",
      description: "End-to-end case tracking and coordination for comprehensive medical assistance operations.",
      features: [
        "Complete case lifecycle management",
        "Multi-country operations support",
        "Provider network management"
      ],
      gradient: "from-blue-100 to-blue-200",
      hoverColor: "hover:bg-blue-50"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-600" />,
      title: "Cost Containment Providers",
      description: "Transparent tracking of negotiations and settlements with comprehensive cost analysis.",
      features: [
        "Negotiation tracking",
        "Settlement management",
        "Cost analysis reports"
      ],
      gradient: "from-purple-100 to-purple-200",
      hoverColor: "hover:bg-purple-50"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Insurance Partners",
      description: "Compliance-friendly reporting and claim tracking for insurance collaboration.",
      features: [
        "Compliance reporting",
        "Claim tracking integration",
        "Audit trail maintenance"
      ],
      gradient: "from-green-100 to-green-200",
      hoverColor: "hover:bg-green-50"
    }
  ];

  return (
    <section id="solutions" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-30 animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16" data-animate id="solutions-header">
          <div className={`transition-all duration-1000 ${getAnimationClass('solutions-header', 'opacity-100 translate-y-0')}`}>
            <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 group inline-block">
              <span className="bg-gradient-to-r from-violet-500 to-violet-700 bg-clip-text text-transparent">
                Care
              </span>
              <span className="bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                Track
              </span>
              <span className="text-gray-900"> Solutions</span>
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-500 group-hover:w-full"></span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Built to serve different types of medical assistance organizations with tailored solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              data-animate
              id={`solution-${index}`}
              className={`bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group ${solution.hoverColor} ${getAnimationClass(`solution-${index}`, 'opacity-100 translate-y-0')}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                {solution.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {solution.description}
              </p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600 group/item"
                    style={{ animationDelay: `${featureIndex * 0.1}s` }}
                  >
                    <Check className="w-4 h-4 text-green-500 mr-2 group-hover/item:scale-110 transition-transform duration-300" />
                    <span className="group-hover/item:text-gray-700 transition-colors duration-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div
          id="about"
          className="mt-16 sm:mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-white/50"
          data-animate
        >
          <div className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center transition-all duration-1000 ${getAnimationClass('about', 'opacity-100 translate-y-0')}`}>
            <div>
              <h3 className="relative text-3xl sm:text-4xl font-bold mb-4 animate-fade-in group inline-block">
                <span className="bg-gradient-to-r from-violet-500 to-pink-600 bg-clip-text text-transparent">
                  Our
                </span>
                <span className="ml-2 bg-gradient-to-r from-pink-500 to-pink-700 bg-clip-text text-transparent">
                  Mission
                </span>
                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-violet-500 to-pink-700 transition-all duration-500 group-hover:w-full"></span>
              </h3>

              <p className="text-lg text-gray-600 mb-6 animate-fade-in-up delay-200">
                To empower medical assistance companies worldwide with technology that simplifies operations, improves patient care, and reduces operational costs.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Modern Technology",
                    description: "Built on modern, secure frameworks offering scalability and reliability."
                  },
                  {
                    title: "Better Tools",
                    description: "Medical assistance companies deserve better tools for success."
                  },
                  {
                    title: "Results-Driven",
                    description: "More control, less stress, and faster results without tech headaches."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 group/mission animate-slide-right"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Check className="w-5 h-5 text-green-500 mt-1 group-hover/mission:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover/mission:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 group-hover/mission:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowMissionInfo(!showMissionInfo)}
                className="inline-flex items-center text-blue-600 font-medium group mt-4 hover:text-blue-700 transition-colors duration-300"
              >
                {showMissionInfo ? 'Hide details' : 'Learn more about our technology'}
                <ArrowRight className={`w-5 h-5 ml-2 transform transition-all duration-300 ${showMissionInfo ? 'rotate-90' : 'group-hover:translate-x-2'}`} />
              </button>

              {showMissionInfo && (
                <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 animate-slide-down">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Our Technology</h4>
                  <p className="text-gray-700 mb-4">
                    CareTrack is built on modern, secure frameworks that offer scalability, reliability, and integration capabilities to match evolving business needs.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Cloud-native architecture",
                      "Enterprise-grade security",
                      "API-first design",
                      "Real-time data processing"
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-80 group transform hover:scale-105 transition-all duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=400&fit=crop"
                  alt="Medical assistance technology"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;