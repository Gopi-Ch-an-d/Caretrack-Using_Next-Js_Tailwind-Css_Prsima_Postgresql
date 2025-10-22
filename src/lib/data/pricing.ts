import { PricingPlan } from '@/types';

export const pricingPlans: PricingPlan[] = [
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