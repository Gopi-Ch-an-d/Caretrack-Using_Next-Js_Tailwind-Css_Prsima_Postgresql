'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialsSectionProps {
  getAnimationClass: (elementId: string, animationType: string) => string;
}

// Extended testimonials array with 9 testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Working with this team transformed our digital presence. Their expertise in modern web technologies helped us scale rapidly.",
    image: "https://icccad.net/wp-content/uploads/2018/06/Sarah-Johnson-min.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Founder, GreenEco Solutions",
    content: "The attention to detail and commitment to excellence is unmatched. They delivered beyond our expectations every single time.",
    image: "https://harvardtechnologyreview.com/wp-content/uploads/2023/10/image.jpeg",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, BrightPath",
    content: "Our conversion rates doubled after the redesign. The team's strategic approach made all the difference for our business.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTErRhSVbYT1ypy8ytqDNUQIHMrMoW4ACL_fA&s",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "CTO, DataFlow Systems",
    content: "Exceptional technical skills combined with great communication. They understood our complex requirements perfectly.",
    image: "https://m.media-amazon.com/images/M/MV5BMDhhYjYxYjYtMjY2Zi00MmNiLWE4MjctMTFlNGQ3NjdjMGJjXkEyXkFqcGc@._V1_CR2103,329,1653,2479_.jpg",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Owner, Artisan Bakery Co",
    content: "From concept to launch, the process was seamless. Our online orders increased by 300% in just two months!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFv8JikMwtRPwMKOzG_CMPC_4q_txreBDZA&s",
    rating: 5
  },
  {
    name: "James Anderson",
    role: "VP Product, CloudSync",
    content: "The innovative solutions they provided gave us a competitive edge. Highly recommend for any serious project.",
    image: "https://images.news18.com/ibnlive/uploads/2022/06/james-anderson-16556329533x2.jpg",
    rating: 5
  },
  {
    name: "Sophie Martin",
    role: "Founder, WellnessHub",
    content: "They took our vision and created something even better. The user experience is phenomenal and our clients love it.",
    image: "https://res.cloudinary.com/swr-cms/image/upload/w_2000,q_auto,f_auto,h_1333,c_lfill,g_auto/swr-cms/d/assets/ratsmitglieder/swr_20240506_1730-sm-1716796098.jpg",
    rating: 5
  },
  {
    name: "Robert Kim",
    role: "Director, FinTech Solutions",
    content: "Professional, reliable, and incredibly talented. They delivered a robust platform that handles millions of transactions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBR3ur892EhhglYQoQkUc6axWEuTO4JOd-A&s",
    rating: 5
  },
  {
    name: "Amanda Foster",
    role: "CEO, Creative Studios",
    content: "The perfect blend of creativity and technical expertise. Our brand has never looked better or performed stronger.",
    image: "https://static.clubs.nfl.com/image/upload/t_person_squared_mobile/f_auto/colts/k6pge9u4erbyp6zbd56y.jpg",
    rating: 5
  }
];

const TestimonialsSection = ({ getAnimationClass }: TestimonialsSectionProps) => {
  const [currentSet, setCurrentSet] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSets = 3; // 9 testimonials / 3 per set = 3 sets

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % totalSets);
        setIsAnimating(false);
      }, 500); // Animation duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Get the current 3 testimonials to display
  const startIndex = currentSet * 3;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + 3);

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

        {/* Testimonials Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={`${currentSet}-${index}`}
                className={`bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group ${
                  isAnimating 
                    ? 'opacity-0 translate-x-full' 
                    : 'opacity-100 translate-x-0 animate-slideInRight'
                }`}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'both'
                }}
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

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalSets)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentSet(index);
                  setIsAnimating(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSet === index 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;