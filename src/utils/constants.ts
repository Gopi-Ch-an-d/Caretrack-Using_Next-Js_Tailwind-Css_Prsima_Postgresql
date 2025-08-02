export const PLANS = {
  BASIC: {
    name: 'Basic',
    price: 'Free',
    period: 'Forever',
    features: [
      'Basic health record tracking',
      'Up to 10 health records',
      'Email support',
      'Mobile app access',
      'Basic analytics'
    ],
    maxRecords: 10,
    support: 'email'
  },
  STANDARD: {
    name: 'Standard',
    price: '₹499',
    period: '/month',
    features: [
      'Unlimited health records',
      'Advanced health analytics',
      'Priority email support',
      'Export data features',
      'Health trend analysis',
      'Appointment scheduling',
      'Medication reminders'
    ],
    maxRecords: -1, // unlimited
    support: 'priority-email'
  },
  PREMIUM: {
    name: 'Premium',
    price: '₹999',
    period: '/month',
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
    maxRecords: -1, // unlimited
    support: 'phone'
  }
} as const

export const HEALTH_CATEGORIES = [
  'General',
  'Cardiology',
  'Dermatology',
  'Endocrinology',
  'Gastroenterology',
  'Neurology',
  'Orthopedics',
  'Pediatrics',
  'Psychiatry',
  'Radiology',
  'Surgery',
  'Urology'
] as const

export const APPOINTMENT_TYPES = [
  'Consultation',
  'Follow-up',
  'Screening',
  'Vaccination',
  'Surgery',
  'Therapy',
  'Lab Test',
  'Other'
] as const