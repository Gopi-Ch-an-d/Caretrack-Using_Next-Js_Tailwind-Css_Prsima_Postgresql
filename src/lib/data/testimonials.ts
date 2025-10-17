// lib/data/testimonials.ts
import { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
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