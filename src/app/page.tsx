'use client';

import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';
import {
  Heart,
  Shield,
  Users,
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
  CheckCircle,
  Navigation,
  MessageSquare,
  BarChart3,
  FileText,
  PhoneCall,
  DollarSign,
  Activity,
  ChevronDown,
  Zap,
  Cloud, Lock,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import React from 'react';

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

  const [animatedElements, setAnimatedElements] = useState(new Set());

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      period: "",
      description: "Perfect for Startup Assistance companies",
      color: "from-green-50 to-emerald-50",
      gradient: "from-green-500 to-emerald-600",
      popular: false,
      buttonText: "Get Started Free",
      features: [
        "1 license user account with limited cases",
        "Email Integration",
        "Google Map Integration",
        "Limited Reports",
        "Microsoft Azure platform",
        "Secured platform",
        "IT support without timelines"
      ],
      requirements: "Need to submit company establishment documents as proof of Assistance company."
    },
    {
      name: "Standard",
      price: "$499",
      period: "/month",
      description: "Enhanced features for growing assistance companies",
      color: "from-purple-50 to-pink-50",
      gradient: "from-purple-600 to-pink-600",
      popular: true,
      buttonText: "Start Standard Plan",
      features: [
        "5 User License account with Limited data",
        "1 Supervisor account (dual purpose: monitoring + user license)",
        "Email Integration with Alert enabled",
        "Google Map Integration with regular google search",
        "WhatsApp Integration",
        "Internal chat, case group chat",
        "Microsoft Azure platform",
        "Secured platform",
        "Unlimited reports",
        "IT support with timelines"
      ],
      requirements: "Company establishment documents as a proof of Assistance company.. Advance payment (1 month) to start the services. Lock-in period of at least : 1 year and to be renewed with 5% increase in monthly payment."
    },
    {
      name: "Premium",
      price: "$999",
      period: "/month",
      description: "Complete solution for established assistance companies",
      color: "from-blue-50 to-cyan-50",
      gradient: "from-blue-600 to-cyan-600",
      popular: false,
      buttonText: "Go Premium",
      features: [
        "10 User License account with Limited data",
        "1 Supervisor account (dual purpose: monitoring + user license)",
        "1 Admin account to monitor your Licenses",
        "Email Integration with Alert enabled",
        "Google Map Integration with regular google search",
        "WhatsApp Integration",
        "Internal chat, case group chat",
        "Microsoft Azure platform",
        "Secured platform",
        "Unlimited reports",
        "IT support with timelines"
      ],
      requirements: "Company establishment documents as a proof of Assistance company. Advance payment (1 month) to start  to start the services. Lock-in period of at least: 1 yearand to be renewed with 5% increase in monthly payment."
    }
  ];

  const togglePlan = (index: number) => {
    setExpandedPlans(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };



  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAnimatedElements(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  {/*-------------------------------------------------SERVICE--------------------------------------- */ }

  const services: Service[] = [
    {
      title: "Case Coordination Tracking",
      description: "Monitor each case in real-time from intake to closure with comprehensive tracking capabilities.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      icon: <Activity className="w-6 h-6 text-blue-600" />,
      features: [
        "Real-time case status updates",
        "Automated workflow management",
        "Case history tracking",
        "Status notifications"
      ],
      additionalContent: "Streamline your case management process with end-to-end tracking from initial contact to case closure."
    },
    {
      title: "Integrated Google Maps",
      description: "Connect patients and providers with built-in Google Maps for efficient routing and location tracking.",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop",
      icon: <Navigation className="w-6 h-6 text-purple-600" />,
      features: [
        "Provider location mapping",
        "Patient location tracking",
        "Optimized routing",
        "Distance calculations"
      ],
      additionalContent: "Enhance operational efficiency with precise location awareness and optimal routing for all stakeholders."
    },
    {
      title: "Team Activity Management",
      description: "Gain visibility into staff performance and operational workflows with comprehensive team tracking.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      icon: <Users className="w-6 h-6 text-green-600" />,
      features: [
        "Staff performance monitoring",
        "Task assignment tracking",
        "Productivity analytics",
        "Team collaboration tools"
      ],
      additionalContent: "Monitor team efficiency and ensure optimal resource allocation across all operations."
    },
    {
      title: "Seamless Communication",
      description: "Email and WhatsApp integration for secure and traceable correspondence with all parties.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      icon: <MessageSquare className="w-6 h-6 text-red-600" />,
      features: [
        "Integrated email system",
        "WhatsApp messaging",
        "Communication history",
        "Secure messaging"
      ],
      additionalContent: "Maintain clear communication channels with patients, providers, and principals through integrated platforms."
    },
    {
      title: "VoIP Calling Integration",
      description: "Make and record calls to patients or providers without leaving the platform.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      icon: <PhoneCall className="w-6 h-6 text-pink-600" />,
      features: [
        "Built-in calling system",
        "Call recording",
        "Call history tracking",
        "Multi-party conferencing"
      ],
      additionalContent: "Streamline communication with integrated VoIP calling that keeps all interactions within your workflow."
    },
    {
      title: "Data-Driven Insights & Reporting",
      description: "Generate MIS reports and access live dashboard insights to enhance decision-making and compliance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      icon: <BarChart3 className="w-6 h-6 text-yellow-600" />,
      features: [
        "Live dashboard insights",
        "Comprehensive MIS reports",
        "Performance analytics",
        "Compliance reporting"
      ],
      additionalContent: "Make informed decisions with real-time data and comprehensive reporting across all business operations."
    }
  ];

  {/*----------------------------------------------TESTIMONIAL--------------------------------------- */ }

  const testimonials: Testimonial[] = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Medical Director, GlobalCare Solutions",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
      content: "CareTrack has revolutionized our case management process. The real-time tracking and integrated communication have improved our efficiency by 40%.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager, MedAssist International",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
      content: "The Google Maps integration and team management features are game-changers. We can now coordinate cases across multiple countries seamlessly.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "CEO, HealthBridge Services",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "CareTrack's MIS reporting has given us insights we never had before. The cost containment features have significantly improved our bottom line.",
      rating: 5
    }
  ];

  {/*----------------------------------------------ADVANTAGES--------------------------------------- */ }

  const advantages = [
    {
      title: "Centralized Case Coordination",
      description: "Easily track and manage every case from start to finish in one unified system.",
      icon: <Activity className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Google Maps Integration",
      description: "Patients and providers are mapped for better location awareness and routing.",
      icon: <Navigation className="w-8 h-8 text-green-600" />
    },
    {
      title: "Team Activity Tracker",
      description: "Monitor your team's progress and task completion in real time.",
      icon: <Users className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Seamless Email Integration",
      description: "Send and receive emails to/from patients, providers, and principals directly from within the platform.",
      icon: <Mail className="w-8 h-8 text-red-600" />
    },
    {
      title: "WhatsApp Integration",
      description: "Connect instantly with patients through built-in WhatsApp messaging.",
      icon: <MessageSquare className="w-8 h-8 text-green-500" />
    },
    {
      title: "Fully Customizable",
      description: "Tailor the platform to match your specific workflow and operational needs.",
      icon: <Shield className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Built-In Invoicing",
      description: "Generate and manage invoices directly within CareTrack — no external tools needed.",
      icon: <DollarSign className="w-8 h-8 text-emerald-600" />
    },
    {
      title: "Integrated VoIP Calling",
      description: "Make and record calls to patients or providers without leaving the platform.",
      icon: <PhoneCall className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Comprehensive Reporting",
      description: "Access reports on case metrics, team performance, client engagement, and overall business KPIs.",
      icon: <FileText className="w-8 h-8 text-orange-600" />
    },
    {
      title: "Live Dashboard Insights",
      description: "Track all your key numbers and activities at a glance — real-time, actionable data.",
      icon: <BarChart3 className="w-8 h-8 text-pink-600" />
    }
  ];

  const smoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation classes
  const getAnimationClass = (elementId: string, animationType: string) => {
    if (visibleElements.has(elementId)) {
      return animationType;
    }
    return 'opacity-0 translate-y-8';
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm border-b z-50 transition-all duration-500 ${scrolled ? 'shadow-lg bg-white/95' : ''
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center space-x-2">
              <div
                className="flex items-center space-x-2 cursor-pointer group"
                onClick={() => smoothScroll('home')}
              >
                <div className="flex items-center space-x-3 group">
                  <img
                    src="/caretrack_logo.png"
                    alt="CareTrack Logo"
                    className="h-16 w-auto transform group-hover:scale-110 transition-all duration-300"
                  />
                </div>

              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'features', label: 'Features' },
                { id: 'solutions', label: 'Solutions' },
                { id: 'about', label: 'About' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => smoothScroll(item.id)}
                  className={`relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 transform hover:scale-105 group ${activeSection === item.id ? 'text-blue-600' : ''
                    }`}
                >
                  {item.label}
                  
                  <span
                    className={`absolute -top-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  ></span>
                  
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  ></span>
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Login
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute inset-x-0 top-0 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                      }`}
                  ></span>
                  <span
                    className={`absolute inset-x-0 top-2.5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                      }`}
                  ></span>
                  <span
                    className={`absolute inset-x-0 top-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                      }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
              }`}
          >
            <div className="border-t bg-white/95 backdrop-blur-md rounded-b-xl">
              <div className="flex flex-col space-y-2 pt-4">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'features', label: 'Features' },
                  { id: 'solutions', label: 'Solutions' },
                  { id: 'about', label: 'About' },
                  { id: 'pricing', label: 'Pricing' },
                  { id: 'contact', label: 'Contact' },
                ].map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      smoothScroll(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`relative text-left text-gray-700 hover:text-blue-600 font-medium px-4 py-2 transition-all duration-300 transform hover:translate-x-2 hover:bg-blue-50 rounded-lg mx-2 ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : ''
                      }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none',
                    }}
                  >
                    {item.label}
                  
                    <span
                      className={`absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${activeSection === item.id ? 'opacity-100' : 'opacity-0'
                        }`}
                    ></span>
                    
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${activeSection === item.id ? 'opacity-100' : 'opacity-0'
                        }`}
                    ></span>
                  </button>
                ))}
                <div className="flex flex-col space-y-2 px-4 pt-4 border-t">
                  <Link
                    href="/login"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/*-----------------------------------------------HERO--------------------------------------- */}

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-pulse"></div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-30 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-25 animate-float-reverse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:py-24 relative z-10">
        
          <div
            className="flex justify-center mb-8"
            data-animate
            id="hero-badge"
          >
            <div
              className={`inline-flex flex-wrap items-center justify-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-purple-200 transition-all duration-1000 mx-auto text-center mt-6 sm:mt-10 ${getAnimationClass(
                'hero-badge',
                'animate-slide-down opacity-100 translate-y-0'
              )}`}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping flex-shrink-0"></div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-700 leading-snug font-bold">
                  Trusted by Medical Assistance Companies Worldwide
                </span>

                {/* Dynamic Sparkles */}
                <div className="relative flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.2, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute"
                    >
                      <Sparkles className="w-4 h-4 text-purple-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="space-y-8"
              data-animate
              id="hero-content"
            >
              <div className={`transition-all duration-1000 delay-300 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0')}`}>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  <span className="inline-block animate-fade-in">
                    <span className="bg-gradient-to-r from-violet-600 to-blue-900 bg-clip-text text-transparent font-bold">
                      Care
                    </span>
                    <span className="bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent font-bold ml-1">
                      Track
                    </span>
                  </span>

                  <span className="block text-black text-4xl">
                    Streamlined Case Management
                  </span>


                  <span className="block text-4xl font-semibold text-gray-700 mt-2 animate-fade-in-up">
                    for Medical Assistance Companies
                  </span>

                </h1>
              </div>

              <div
                className={`transition-all duration-1000 delay-500 ${getAnimationClass(
                  'hero-content',
                  'opacity-100 translate-y-0'
                )}`}
              >
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  🚀 Take Your <span className="text-violet-600 font-semibold">Assistance Operations</span> to the Next Level with
                  <span className="text-pink-600 font-bold"> CareTrack</span>.
                  An advanced <span className="text-indigo-600 font-semibold">CRM &amp; MIS platform</span> designed to optimize
                  <span className="text-green-600 font-semibold"> patient care</span>,
                  <span className="text-blue-600 font-semibold"> operational efficiency</span>, and
                  <span className="text-red-600 font-semibold"> cost containment</span> for global assistance providers.
                  <span className="text-black font-bold"> One platform.</span>
                  <span className="text-emerald-600 font-bold"> Zero hassle.</span>
                  <span className="text-violet-700 font-bold"> 100% efficiency.</span>
                </p>
              </div>


              <div
                className={`bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 transition-all duration-1000 delay-700 ${getAnimationClass(
                  'hero-content',
                  'opacity-100 translate-y-0 animate-glow'
                )}`}
              >
                <p className="text-gray-700">
                  Say goodbye to scattered spreadsheets, missed follow-ups, and delayed updates. CareTrack brings
                  <span className="text-violet-600 font-semibold"> case management, communication, and reporting </span>
                  together &mdash; so you can focus on what matters: delivering exceptional care to your clients.
                  With Google Maps, WhatsApp, and Email integration, your team can
                  <span className="text-violet-700 font-bold"> work smarter, faster, and better.</span>
                </p>
              </div>

              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${getAnimationClass('hero-content', 'opacity-100 translate-y-0')}`}>
                <Link
                  href="/demo"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl animate-pulse-button flex items-center justify-center"
                >
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                    Request a Demo
                  </span>
                  <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-2 transition-transform duration-300" />
                </Link>


                <Link
                  href="/signup"
                  className="group flex items-center justify-center bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg border border-gray-300 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:bg-gray-50"
                >
                  <Zap className="w-6 h-6 mr-3 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Start Free Trial
                  </span>
                </Link>

                <Link
                  href="/videos/First_Starting_Caretrack_Powered_by_Sthiram__1..mp4"
                  className="flex items-center justify-center bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg group"
                >
                  <div className="relative">
                    <Play className="w-5 h-5 mr-2 text-blue-600 group-hover:text-purple-600 group-hover:scale-110 transition-all duration-300" />
                    <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Watch Demo
                  </span>
                </Link>

              </div>
            </div>

            {/* Hero Image with enhanced animations */}
            <div
              className="relative"
              data-animate
              id="hero-image"
            >
              <div className={`relative z-10 rounded-3xl shadow-2xl overflow-hidden w-full h-[400px] sm:h-[500px] transition-all duration-1000 delay-500 ${getAnimationClass('hero-image', 'opacity-100 translate-y-0 hover:scale-105')}`}>
                <Image
                  src="https://img.freepik.com/free-photo/doctors-day-cute-young-brunette-guy-lab-coat-wearing-glasses-happy-holding-book_140725-162852.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Medical assistance professional using CareTrack"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-semibold text-lg sm:text-xl animate-fade-in-up">
                    Trusted by Medical Assistance Professionals
                  </h3>
                  <p className="text-blue-200 mt-1 animate-fade-in-up delay-200">Sarah Johnson, Operations Manager</p>
                </div>
              </div>

              {/* Enhanced floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-10 animate-float-reverse"></div>

              {/* Glowing orbs */}
              <div className="absolute top-1/3 -right-4 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-60"></div>
              <div className="absolute bottom-1/3 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/*----------------------------------------------FEATURES--------------------------------------- */}

      <section id="features" className="py-16 sm:py-20 bg-white relative">
   
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="text-center mb-10 sm:mb-16"
            data-animate
            id="features-header"
          >
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

              function toggleService(index: number): void {
                setExpandedService(prev => (prev === index ? null : index));
              }

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

      {/*----------------------------------------------SOLUTIONS--------------------------------------- */}

      <section id="solutions" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-30 animate-float-reverse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="text-center mb-10 sm:mb-16"
            data-animate
            id="solutions-header"
          >
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
            {[
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
            ].map((solution, index) => (
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

          {/*-----------------------------------------------ABOUT---------------------------------------------- */}
          <div
            id='about'
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
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ height: 'auto' }}
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

      {/*-----------------------------------------------PRICING--------------------------------------- */}

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

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                data-animate
                id={`pricing-${index}`}
                className={`relative bg-gradient-to-br ${plan.color} border-2 ${plan.popular
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
                        className={`w-4 h-4 ml-1 transform transition-all duration-300 ${expandedPlans[index] ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                  )}
                </ul>

                {/* Requirements */}
                <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    <Shield className="w-4 h-4 inline mr-1" />
                    {plan.requirements}
                  </p>
                </div>

            
                <Link href={'/signup'}
                  className={`block w-full py-2 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base relative overflow-hidden group/button text-center no-underline ${plan.popular
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

          {/* Feature Highlights */}
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

          {/* Footer */}
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

      {/*-----------------------------------------------TESTIMONIALS--------------------------------------- */}

      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="text-center mb-12 sm:mb-16"
            data-animate
            id="testimonials-header"
          >
            <div className="flex justify-center">
              <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 flex flex-wrap justify-center text-center group">
                {["What", "Our", "Clients", "Say"].map((word, index) => {
                  const colors = ["text-blue-500", "text-green-500", "text-purple-500", "text-red-500"];
                  return (
                    <span key={index} className={`${colors[index % colors.length]} mr-2`}>
                      {word}
                    </span>
                  );
                })}

                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-blue-5 to-red-500 transition-all duration-500 group-hover:w-full"></span>
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

      {/*-----------------------------------------------CTA-SECTION--------------------------------------- */}

      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-2 animate-slide-diagonal"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            data-animate
            id="cta-content"
            className={`transition-all duration-1000 ${getAnimationClass('cta-content', 'opacity-100 translate-y-0')}`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
              Discover how CareTrack can streamline your operations
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              💡 Stop managing cases the hard way. Let us show you how CareTrack can change your daily operations in just one call.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in-up delay-500">
              <Link
                href="/demo"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group relative overflow-hidden"
              >
                <span className="relative z-10">Request a Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link
                href="/signup"
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group relative overflow-hidden"
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-white rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full opacity-80 animate-bounce"></div>
      </section>

      {/*-----------------------------------------------ADVANTAGES--------------------------------------- */}

      <div className="py-16 sm:py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-10 sm:mb-16"
            data-animate
            id="advantages-header"
          >
            <div className={`transition-all duration-1000 ${getAnimationClass('advantages-header', 'opacity-100 translate-y-0')}`}>
              <h3 className="relative inline-block text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 group">
                {["CareTrack", "Advantages"].map((word, index) => {
                  const colors = ["text-blue-500", "text-green-500"]; // Different colors per word
                  return (
                    <span key={index} className={`${colors[index % colors.length]} mr-2`}>
                      {word}
                    </span>
                  );
                })}
                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 group-hover:w-full"></span>
              </h3>

              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                Smart Tools for Smart Assistance - Everything you need to excel in medical assistance operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                data-animate
                id={`advantage-${index}`}
                className={`bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group hover:border-blue-300 ${getAnimationClass(`advantage-${index}`, 'opacity-100 translate-y-0')}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {advantage.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300">
                    {advantage.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*-----------------------------------------------CONTACT--------------------------------------- */}

      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-30 animate-float-reverse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              data-animate
              id="contact-info"
              className={`transition-all duration-1000 ${getAnimationClass('contact-info', 'opacity-100 translate-y-0')}`}
            >
              <h2 className="relative inline-block text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in group">
                {["Get", "In", "Touch"].map((word, index) => {
                  const colors = ["text-blue-500", "text-green-500", "text-purple-500"]; // Different colors
                  return (
                    <span key={index} className={`${colors[index % colors.length]} mr-2`}>
                      {word}
                    </span>
                  );
                })}
                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transition-all duration-500 group-hover:w-full"></span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 animate-fade-in-up delay-300">
                Have questions or need assistance? Our team is here to help you with any inquiries about CareTrack.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
                    title: "Call",
                    content: "+91-7207349050"
                  },
                  {
                    icon: <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
                    title: "Email",
                    content: "ganesh@sthiramservices.com"
                  },
                  {
                    icon: <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
                    title: "Address",
                    content: "Sthiram Services LLP"
                  }
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 group hover:bg-white/50 p-3 rounded-lg transition-all duration-300 animate-slide-right"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="mt-1 group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {contact.title}
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        {contact.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-3 sm:space-x-4 mt-6 sm:mt-8">
                {[
                  { icon: <Facebook className="w-4 sm:w-5 h-4 sm:h-5 text-white" />, href: "#", bgColor: "bg-blue-600", hoverBg: "hover:bg-blue-800" },
                  { icon: <Twitter className="w-4 sm:w-5 h-4 sm:h-5 text-white" />, href: "#", bgColor: "bg-sky-400", hoverBg: "hover:bg-sky-600" },
                  { icon: <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-white" />, href: "#", bgColor: "bg-pink-500", hoverBg: "hover:bg-pink-700" },
                  { icon: <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-white" />, href: "#", bgColor: "bg-blue-700", hoverBg: "hover:bg-blue-900" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-8 sm:w-10 h-8 sm:h-10 ${social.bgColor} ${social.hoverBg} rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 animate-bounce`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div
              data-animate
              id="contact-form"
              className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ${getAnimationClass('contact-form', 'opacity-100 translate-y-0')}`}
            >
              <h3 className="relative inline-block text-xl sm:text-2xl font-semibold mb-6 group text-center">
                {["Send", "us", "a", "message"].map((word, index) => {
                  const colors = ["text-blue-500", "text-green-500", "text-purple-500", "text-red-500"];
                  return (
                    <span key={index} className={`${colors[index % colors.length]} mr-2`}>
                      {word}
                    </span>
                  );
                })}

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-50 to-red-500 transition-all duration-500 group-hover:w-full"></span>
              </h3>

              <form className="space-y-4 sm:space-y-6">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "company", label: "Company", type: "text", placeholder: "Your company name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" }
                ].map((field, index) => (
                  <div
                    key={field.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    id="subject"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
                  >
                    <option value="">Select a topic</option>
                    <option value="demo">Request a Demo</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Inquiry</option>
                  </select>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400 resize-none"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group animate-fade-in"
                  style={{ animationDelay: '0.5s' }}
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*-----------------------------------------------FOOTER--------------------------------------- */}

      <footer className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-green-400/30 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Main footer content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl transform group-hover:scale-105 transition-all duration-500 border border-gray-200/20">
                  <img
                    src="/caretrack_logo.png"
                    alt="CareTrack Logo"
                    className="h-16 w-auto object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
              
                  <div className="hidden w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl items-center justify-center">
                    <Heart className="w-8 h-8 text-white" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Empowering healthcare providers with intelligent case management,
              cost optimization, and seamless care coordination.
            </p>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Users, label: "Active Users", value: "50K+" },
              { icon: Shield, label: "Cases Managed", value: "1M+" },
              { icon: TrendingUp, label: "Cost Savings", value: "$100M+" },
              { icon: Heart, label: "Lives Improved", value: "2M+" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-blue-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Platform",
                links: [
                  { name: "Dashboard", href: "#home" },
                  { name: "Features", href: "#features" },
                  { name: "Solutions", href: "#solutions" },
                  { name: "Integrations", href: "#integrations" },
                  { name: "Pricing", href: "#pricing" }
                ]
              },
              {
                title: "Services",
                links: [
                  { name: "Case Management", href: "#case-management" },
                  { name: "Cost Containment", href: "#cost-containment" },
                  { name: "Provider Network", href: "#provider-network" },
                  { name: "Analytics & Reporting", href: "#analytics" },
                  { name: "Compliance Tools", href: "#compliance" }
                ]
              },
              {
                title: "Resources",
                links: [
                  { name: "Documentation", href: "#docs" },
                  { name: "API Reference", href: "#api" },
                  { name: "Case Studies", href: "#case-studies" },
                  { name: "Webinars", href: "#webinars" },
                  { name: "Support Center", href: "#support" }
                ]
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", href: "#about" },
                  { name: "Features", href: "#features" },
                  { name: "Solutions", href: "#solutions" },
                  { name: "About", href: "#about" },
                  { name: "Contact", href: "#contact" }
                ]
              }
            ].map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  {column.title}
                  <div className="ml-2 w-8 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 text-sm"
                      >
                        <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/*-----------------------------------------------CONTACT-SECTION-------------------------------------- */}

          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-6 sm:p-8 mb-12 backdrop-blur-sm border border-gray-700/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Email Us</div>
                  <div className="text-gray-400 text-sm">ganesh@sthiramservices.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Call Us</div>
                  <div className="text-gray-400 text-sm">+91-7207349050</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-medium">Visit Us</div>
                  <div className="text-gray-400 text-sm">Sthiram Services LLP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800/60 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Sthiram Services LLP. All rights reserved.
                </p>
                <div className="hidden sm:flex items-center space-x-4 text-sm">
                  <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
                  <span className="text-gray-600">•</span>
                  <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
                  <span className="text-gray-600">•</span>
                  <a href="#security" className="text-gray-400 hover:text-white transition-colors duration-300">Security</a>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <span className="text-gray-400 text-sm mr-3">Follow us:</span>
                {[
                  { Icon: Facebook, color: "hover:text-blue-400" },
                  { Icon: Twitter, color: "hover:text-sky-400" },
                  { Icon: Instagram, color: "hover:text-pink-400" },
                  { Icon: Linkedin, color: "hover:text-blue-500" }
                ].map(({ Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-gray-700/50 hover:border-gray-600/50`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
      </footer>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative transform animate-scale-in">
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:scale-110 transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
            <p className="text-gray-600 mb-6">Fill out the form below and we&apos;ll get back to you soon.</p>
            <form className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="modal-name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="modal-email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="modal-message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>



  );
};

export default CareTrackApp;