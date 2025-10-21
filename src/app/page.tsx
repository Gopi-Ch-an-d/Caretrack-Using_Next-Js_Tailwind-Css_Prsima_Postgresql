'use client';
import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CTASection from '@/components/CtaSection';
import PricingSection from '@/components/PricingSection';
import SolutionsSection from '@/components/SolutionSection';
import Navigation from '@/components/navigation';
import TeamComponent from '@/components/TeamSection';
import WhatsAppButton from '@/components/Whatsap';

export default function CareTrackApp() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'features', 'solutions', 'about', 'pricing', 'contact'];
      let currentSection = 'home';

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = sections[i];
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getAnimationClass = (elementId: string, animationType: string) => {
    if (visibleElements.has(elementId)) {
      return animationType;
    }
    return 'opacity-0 translate-y-8';
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            top: '10%',
            left: '80%'
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            bottom: '20%',
            left: '10%'
          }}
        />
      </div>

      <Navigation 
        activeSection={activeSection} 
        scrolled={scrolled} 
        smoothScroll={smoothScroll} 
      />

      <HeroSection getAnimationClass={getAnimationClass} />
      <FeaturesSection getAnimationClass={getAnimationClass} />
      <WhatsAppButton/>
      <SolutionsSection getAnimationClass={getAnimationClass} />
      <PricingSection getAnimationClass={getAnimationClass} />
      <TeamComponent/>
      <TestimonialsSection getAnimationClass={getAnimationClass} />
      <CTASection getAnimationClass={getAnimationClass} />
     
      <AdvantagesSection getAnimationClass={getAnimationClass} />
      <ContactSection getAnimationClass={getAnimationClass} />
      <Footer />
    </div>
  );
}