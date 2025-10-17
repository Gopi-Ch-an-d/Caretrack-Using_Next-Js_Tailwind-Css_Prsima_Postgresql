// components/TestimonialsSection.tsx
'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

interface TestimonialsSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const TestimonialsSection = ({ getAnimationClass }: TestimonialsSectionProps) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16" data-animate id="testimonials-header">
          <div className="flex justify-center">
            <h2 className="relative inline-block text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 group">
              {["What", "Our", "Clients", "Say"].map((word, index) => {
                const colors = ["text-blue-500", "text-green-500", "text-purple-500", "text-red-500"];
                return (
                  <span key={index} className={`${colors[index % colors.length]} mr-2`}>
                    {word}
                  </span>
                );
              })}
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 transition-all duration-500 group-hover:w-full"></span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-animate
              id={`testimonial-${index}`}
              className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group hover:bg-white ${getAnimationClass(`testimonial-${index}`, 'opacity-100 translate-y-0')}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4 sm:mb-6 group-hover:text-gray-800 transition-colors duration-300">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;