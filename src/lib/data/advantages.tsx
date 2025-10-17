// lib/data/advantages.tsx
import {
  Activity,
  Navigation,
  Users,
  Mail,
  MessageSquare,
  Shield,
  DollarSign,
  PhoneCall,
  FileText,
  BarChart3
} from 'lucide-react';
import { Advantage } from '@/types';

export const advantages: Advantage[] = [
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