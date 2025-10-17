// lib/data/services.tsx
import {
  Activity,
  Navigation,
  Users,
  MessageSquare,
  PhoneCall,
  BarChart3
} from 'lucide-react';

import { Service } from '@/types';

export const services: Service[] = [
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