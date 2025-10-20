'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

interface TestimonialsSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

const TestimonialsSection = ({ getAnimationClass }: TestimonialsSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Soft animated background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-tr from-blue-300/30 to-purple-300/30 rounded-full animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-pink-300/20 to-yellow-300/20 rounded-full animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-animate id="testimonials-header">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 inline-flex flex-wrap justify-center gap-2">
            {["What", "Our", "Clients", "Say"].map((word, index) => {
              const colors = ["text-blue-500", "text-green-500", "text-purple-500", "text-red-500"];
              return (
                <span
                  key={index}
                  className={`${colors[index % colors.length]} relative group`}
                >
                  {word}
                  <span className="absolute -bottom-1 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-green-500 to-red-500 transition-all duration-500 group-hover:w-full"></span>
                </span>
              );
            })}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Hear from our clients about how we helped them grow and succeed. Real feedback, real stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-animate
              id={`testimonial-${index}`}
              className={`bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group ${getAnimationClass(`testimonial-${index}`, 'opacity-100 translate-y-0')}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current transition-transform duration-300 group-hover:scale-125"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 italic mb-6 group-hover:text-gray-900 transition-colors duration-300">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-transparent group-hover:border-blue-400 transition-all duration-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
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
