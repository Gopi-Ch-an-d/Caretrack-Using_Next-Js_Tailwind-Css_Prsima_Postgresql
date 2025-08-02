'use client';

import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Shield, 
  Users, 
  Menu, 
  X, 
  Star, 
  Check, 
  ArrowRight, 
  Play, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Sparkles, 
  HeartPulse, 
  BellRing,
  Calendar,
  Pill,
  CheckCircle
} from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
  color: string;
  gradient: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  features: string[];
  additionalContent: string;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const CareTrackApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [message, setMessage] = useState('');
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [expandedPlans, setExpandedPlans] = useState<Record<number, boolean>>({});
  const [showMissionInfo, setShowMissionInfo] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'pricing', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const togglePlan = (index: number) => {
    setExpandedPlans(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  // About section image carousel
  const aboutImages = [
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
    'https://images.unsplash.com/photo-1581056771107-24ca5f033842',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe'
  ];

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for individuals starting their health journey',
      features: [
        'Basic health record tracking',
        'Up to 10 health records',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ],
      buttonText: 'Get Started Free',
      popular: false,
      color: 'from-blue-50 to-indigo-50',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'Standard',
      price: '₹499',
      period: '/month',
      description: 'Advanced features for serious health tracking',
      features: [
        'Unlimited health records',
        'Advanced health analytics',
        'Priority email support',
        'Export data features',
        'Health trend analysis',
        'Appointment scheduling',
        'Medication reminders'
      ],
      buttonText: 'Start Standard Plan',
      popular: true,
      color: 'from-purple-50 to-pink-50',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Premium',
      price: '₹999',
      period: '/month',
      description: 'Complete healthcare management solution',
      features: [
        'Everything in Standard',
        'AI-powered health insights',
        'Custom health reports',
        '24/7 phone support',
        'API access',
        'White-label options',
        'Personal health coach',
        'Family account management'
      ],
      buttonText: 'Go Premium',
      popular: false,
      color: 'from-emerald-50 to-teal-50',
      gradient: 'from-emerald-600 to-teal-600'
    }
  ];

  const services: Service[] = [
    {
      title: "Personal Health Records",
      description: "Securely store and access all your medical history in one place, available anytime, anywhere.",
      image: "https://media.istockphoto.com/id/1398557794/photo/picture-looking-through-the-shoulder-of-female-doctor-working-on-electronic-health-record.jpg?s=612x612&w=0&k=20&c=aniNRjOLQpcSdwFaMjMHNnsU13tch_1O0DYMaDyRvEo=",
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      features: [
        "Centralized medical history",
        "Lab results tracking",
        "Vaccination records",
        "Secure cloud storage"
      ],
      additionalContent: "Easily share your health records with doctors and caregivers for faster and accurate diagnosis."
    },
    {
      title: "Appointment Management",
      description: "Book, reschedule or cancel appointments with healthcare providers with just a few clicks.",
      image: "https://f.hubspotusercontent40.net/hubfs/5012494/traditional-appointment-booking-methods.jpg",
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      features: [
        "Real-time availability",
        "Automated reminders",
        "Video consultation",
        "Multi-provider booking"
      ],
      additionalContent: "Keep your healthcare organized with a unified view of all upcoming and past appointments."
    },
    {
      title: "Medication Tracker",
      description: "Never miss a dose with our smart medication reminders and tracking system.",
      image: "https://thumbs.dreamstime.com/b/medical-record-electronic-form-digital-emr-patient-health-care-information-doctor-using-tablet-hospital-clinic-personal-174056692.jpg",
      icon: <Pill className="w-6 h-6 text-green-600" />,
      features: [
        "Custom dosage reminders",
        "Refill alerts",
        "Interaction checker",
        "Progress reports"
      ],
      additionalContent: "Stay consistent with your prescriptions and reduce risks with timely alerts and insights."
    },
    {
      title: "Emergency Assistance",
      description: "Quick access to emergency contacts, nearby hospitals, and digital ID sharing in emergencies.",
      image: "https://img.freepik.com/premium-vector/24-hour-emergency-service-label-design_731136-257.jpg",
      icon: <Shield className="w-6 h-6 text-red-600" />,
      features: [
        "One-tap SOS",
        "Emergency contact sync",
        "Location sharing",
        "Digital medical ID"
      ],
      additionalContent: "In critical moments, every second counts. CareTrack provides instant access to life-saving info."
    },
    {
      title: "Wellness & Activity Monitor",
      description: "Track your vitals, steps, sleep patterns, and fitness levels with seamless device integration.",
      image: "https://www.tdk.com/en/tech-mag/sites/default/files/2024-12/Healthcare_AI.jpg",
      icon: <HeartPulse className="w-6 h-6 text-pink-600" />,
      features: [
        "Steps & activity logs",
        "Heart rate tracking",
        "Sleep analysis",
        "Wearable integration"
      ],
      additionalContent: "Stay on top of your health goals and get personalized recommendations from your wellness data."
    },
    {
      title: "Smart Notifications & Reports",
      description: "Get real-time notifications for appointments, reports, and health warnings with detailed analytics.",
      image: "https://cdn.prod.website-files.com/6488b4ca58959e0237079720/664f9ca44d4ebfd7a0a8bf49_not.png",
      icon: <BellRing className="w-6 h-6 text-yellow-600" />,
      features: [
        "Health alerts",
        "Lab report updates",
        "AI-driven insights",
        "Custom notification settings"
      ],
      additionalContent: "Never miss an important update again — CareTrack keeps you informed and in control 24/7."
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      content: "CareTrack has revolutionized how my patients manage their health records. The insights are invaluable.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "Finally, a platform that makes health tracking simple and accessible. Highly recommended!",
      rating: 5
    },
    {
      name: "Maya Patel",
      role: "Healthcare Administrator",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      content: "The family management features are outstanding. Perfect for managing multiple patient records.",
      rating: 5
    }
  ];

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`bg-white shadow-sm border-b sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => smoothScroll('home')}>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">CareTrack</div>
                  <div className="text-xs text-gray-500">Powered by Sthiram</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'services', label: 'Services' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScroll(item.id)}
                  className={`relative text-gray-700 hover:text-blue-600 font-medium transition-colors group ${activeSection === item.id ? 'text-blue-600' : ''}`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full ${activeSection === item.id ? 'w-full' : ''}`}></span>
                </button>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg transition-colors">
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
            <div className="border-t bg-white">
              <div className="flex flex-col space-y-2 pt-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'services', label: 'Services' },
                  { id: 'pricing', label: 'Pricing' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      smoothScroll(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-colors ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                  <Link href="/login" className="w-full text-left text-gray-700 hover:text-blue-600 font-medium py-2">
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium text-center transition-all transform hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-30 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-25 animate-pulse delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:py-24">
          {/* Trusted by badge at the very top */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-200 animate-slide-in-left">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ users</span>
              <Sparkles className="w-4 h-4 text-purple-500" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your Health,
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                  Simplified
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed animate-slide-in-right">
                CareTrack powered by Sthiram revolutionizes healthcare management.
                Track, analyze, and improve your health journey with our comprehensive platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/videos/First_Starting_Caretrack_Powered_by_Sthiram__1..mp4"
                  className="flex items-center justify-center bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg border border-gray-300 hover:border-gray-400 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Play className="w-5 h-5 mr-2 text-blue-600" />
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Doctor Image Section - Fixed */}
            <div className="relative animate-fade-in-up delay-500 mt-10 lg:mt-0">
              <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden w-full h-[400px] sm:h-[500px] transform hover:scale-105 transition-all duration-500">
                <Image
                  src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg"
                  alt="Doctor using CareTrack"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white font-semibold text-lg sm:text-xl">Trusted by healthcare professionals worldwide</h3>
                  <p className="text-blue-200 mt-1">Dr. Sarah Johnson, Cardiologist</p>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              {/* Image Carousel */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl h-64 sm:h-80 md:h-96">
                <div className="relative w-full h-full">
                  {aboutImages.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Healthcare image ${index + 1}`}
                      width={800}
                      height={600}
                      className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        animation: `fadeInOut 21s infinite`,
                        animationDelay: `${index * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                About CareTrack
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                CareTrack is a revolutionary healthcare management platform designed to empower patients and healthcare providers with seamless health tracking and data management.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Patient-Centric Design</h3>
                    <p className="text-gray-600">Built with patients in mind for intuitive health management</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Military-Grade Security</h3>
                    <p className="text-gray-600">Your health data is protected with bank-level encryption</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Collaborative Care</h3>
                    <p className="text-gray-600">Connect with your healthcare providers seamlessly</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowMissionInfo(!showMissionInfo)}
                className="inline-flex items-center text-blue-600 font-medium group"
              >
                {showMissionInfo ? 'Hide mission details' : 'Learn more about our mission'}
                <ArrowRight className={`w-5 h-5 ml-2 transition-transform ${showMissionInfo ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>

              {showMissionInfo && (
                <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-blue-50 rounded-xl border border-blue-100 animate-fade-in">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-700 mb-3">
                    At CareTrack, we&apos;re on a mission to revolutionize healthcare management by providing a comprehensive, user-friendly platform that puts patients in control of their health data.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Empower patients with easy access to their health information</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Bridge the communication gap between patients and healthcare providers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Improve healthcare outcomes through data-driven insights</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>Make healthcare management accessible to everyone, regardless of technical expertise</span>
                    </li>
                  </ul>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-blue-100">
                    <p className="text-gray-700">
                      Founded in 2023, CareTrack has already helped over 10,000 users take control of their healthcare journey.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose CareTrack?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive healthcare platform provides everything you need to manage your health effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const initialFeaturesToShow = 2;
              const totalFeatures = service.features.length;
              const hiddenFeaturesCount = totalFeatures - initialFeaturesToShow;

              return (
                <div key={index} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {service.features.slice(0, initialFeaturesToShow).map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}

                      {expandedService === index && service.features.slice(initialFeaturesToShow).map((feature, i) => (
                        <li key={i + initialFeaturesToShow} className="flex items-center animate-fade-in">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}

                      {hiddenFeaturesCount > 0 && (
                        <button
                          onClick={() => toggleService(index)}
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-2 flex items-center"
                        >
                          {expandedService === index ? 'Show less' : `+${hiddenFeaturesCount} more`}
                        </button>
                      )}

                      {expandedService === index && service.additionalContent && (
                        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 animate-fade-in">
                          <p className="text-gray-600">{service.additionalContent}</p>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect plan for your healthcare needs. Upgrade or downgrade anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br ${plan.color} border-2 ${plan.popular ? 'border-purple-500 lg:scale-105 shadow-xl' : 'border-gray-200'} rounded-3xl p-4 sm:p-6 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold animate-pulse">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform">
                    {plan.name}
                  </h3>
                  <div className="mb-2 sm:mb-3">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {plan.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3 group/item">
                      <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}

                  {expandedPlans[index] && plan.features.slice(4).map((feature, featureIndex) => (
                    <li key={featureIndex + 4} className="flex items-center space-x-2 sm:space-x-3 group/item">
                      <Check className="w-4 sm:w-5 h-4 sm:h-5 text-green-500 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm sm:text-base text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                    </li>
                  ))}

                  {plan.features.length > 4 && (
                    <button
                      onClick={() => togglePlan(index)}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-1 sm:mt-2 flex items-center"
                    >
                      {expandedPlans[index] ? 'Show less' : `+${plan.features.length - 4} more`}
                    </button>
                  )}
                </ul>

                <Link
                  href="/signup"
                  className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${plan.popular
                    ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg`
                    : 'bg-white text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md'
                    }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-8">
            <p className="text-gray-600 mb-2 sm:mb-3">
              All plans include 30-day money-back guarantee
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center">
                <Check className="w-3 sm:w-4 h-3 sm:h-4 mr-1 text-green-500" />
                No setup fees
              </span>
              <span className="flex items-center">
                <Check className="w-3 sm:w-4 h-3 sm:h-4 mr-1 text-green-500" />
                Cancel anytime
              </span>
              <span className="flex items-center">
                <Check className="w-3 sm:w-4 h-3 sm:h-4 mr-1 text-green-500" />
                24/7 support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied users who trust CareTrack for their healthcare management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 sm:mb-6">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 to-purple-600 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
            Join thousands of users who have already taken control of their health journey with CareTrack.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/signup"
              className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </Link>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* Compact Contact Sales Modal */}
        {isContactModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full max-h-[80vh] overflow-y-auto p-4 sm:p-6 animate-fade-in">
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">Healthcare Solutions</h3>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form className="space-y-3">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Hospital/Clinic"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>

                <div>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm">
                    <option value="">Interested in...</option>
                    <option>EHR Systems</option>
                    <option>Patient Portal</option>
                    <option>Telemedicine</option>
                    <option>Medical Analytics</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium mt-2"
                >
                  Contact Healthcare Team
                </button>
              </form>

              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 text-xs text-gray-600">
                <p>Prefer to call? <a href="tel:+18005551234" className="text-blue-600">+1 (800) 555-1234</a></p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Get In Touch
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Have questions or need assistance? Our team is here to help you with any inquiries.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">support@caretrack.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="mt-1">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">123 Health Street, Bangalore, India 560001</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 sm:space-x-4 mt-6 sm:mt-8">
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                  <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                  <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                  <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                <a href="#" className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors">
                  <Linkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Send us a message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navigation</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#home" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#pricing" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Healthcare Services</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Medical Records</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Appointment Booking</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Medication Tracker</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Telehealth Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Health Resources</h3>
              <ul className="space-y-1 sm:space-y-2">
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Patient Education</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Wellness Tips</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Chronic Condition Guides</a></li>
                <li><a href="#" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Preventive Care</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Stay Connected</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">Get health tips and updates</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 sm:px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-sm sm:text-base"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-3 sm:px-4 py-2 rounded-r-lg transition-colors text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </form>
              <div className="flex space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-bold">CareTrack</div>
                <div className="text-xs text-gray-500">Your Health, Simplified</div>
              </div>
            </div>
            <div className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} CareTrack Health Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareTrackApp;