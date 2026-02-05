
import React from 'react';
import { 
  Stethoscope, 
  Dna, 
  Cpu, 
  ShoppingCart, 
  Globe2, 
  ShieldCheck 
} from 'lucide-react';
import { ServiceCard, TimelineItem, Stat, RegionInfo } from './types';

export const SERVICES: ServiceCard[] = [
  {
    title: "Healthcare Workforce Solutions",
    description: "End-to-end clinical and administrative staffing for global healthcare providers.",
    icon: <Stethoscope className="w-8 h-8" />,
    caseStudy: "Scaled a 500+ member medical billing team for a US healthcare giant."
  },
  {
    title: "Biopharma & Insurance Staffing",
    description: "Specialized recruitment and workforce management for life sciences and insurance.",
    icon: <Dna className="w-8 h-8" />,
    caseStudy: "Reduced recruitment cycles by 40% for top-tier biopharma clients."
  },
  {
    title: "Tech & AI Teams",
    description: "Building resilient AI-driven operational teams and tech support ecosystems.",
    icon: <Cpu className="w-8 h-8" />,
    caseStudy: "Managed the deployment of AI-augmented customer success workflows."
  },
  {
    title: "Ecommerce & Logistics",
    description: "Streamlined operational support for global supply chains and digital retail.",
    icon: <ShoppingCart className="w-8 h-8" />,
    caseStudy: "Optimized last-mile logistics support across three continents."
  },
  {
    title: "BPO & KPO Global Expansion",
    description: "Strategic guidance for firms looking to establish a global delivery footprint.",
    icon: <Globe2 className="w-8 h-8" />,
    caseStudy: "Successfully launched 5 offshore delivery centers in 2 years."
  },
  {
    title: "Global Compliance & Security",
    description: "Ensuring workforce operations meet stringent international security standards.",
    icon: <ShieldCheck className="w-8 h-8" />,
    caseStudy: "Achieved 100% compliance ratings for highly regulated financial projects."
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    company: "SuperStaff",
    role: "Global Leader",
    period: "2018 - Present",
    achievements: [
      "Leading global operations and strategic growth.",
      "Expanding footprint across Asia and Latin America.",
      "Pioneering AI-integrated workforce solutions."
    ]
  },
  {
    company: "Robert Walters",
    role: "Recruitment Specialist",
    period: "2016 - 2018",
    achievements: [
      "Specialized in high-level executive search.",
      "Built robust pipelines for tech and finance sectors."
    ]
  },
  {
    company: "Open Access BPO",
    role: "Operations Manager",
    period: "2014 - 2016",
    achievements: [
      "Managed large-scale BPO campaigns.",
      "Improved operational efficiency by 25%."
    ]
  },
  {
    company: "Black Tie Transportation",
    role: "Strategic Logistics",
    period: "2012 - 2014",
    achievements: [
      "Optimized fleet management and corporate accounts."
    ]
  },
  {
    company: "LocaliQ",
    role: "Market Analyst",
    period: "2010 - 2012",
    achievements: [
      "Conducted market research for digital growth."
    ]
  }
];

export const STATS: Stat[] = [
  { label: "Global Experience", value: 15, suffix: "+" },
  { label: "Markets Served", value: 8, suffix: "" },
  { label: "Campaigns Managed", value: 200, suffix: "+" },
  { label: "Workforce Size", value: 5000, suffix: "+" }
];

export const REGIONS: RegionInfo[] = [
  { id: 'US', name: 'United States', stats: 'North American HQ & Client Relations' },
  { id: 'PH', name: 'Philippines', stats: 'Major Delivery Hub - 2000+ Personnel' },
  { id: 'CO', name: 'Colombia', stats: 'LATAM Operational Excellence' },
  { id: 'CN', name: 'China', stats: 'Supply Chain & Manufacturing Support' },
  { id: 'TW', name: 'Taiwan', stats: 'Tech & Semiconductor Workforce' },
  { id: 'UK', name: 'United Kingdom', stats: 'European Strategic Sales' },
  { id: 'AU', name: 'Australia', stats: 'APAC Market Expansion' },
  { id: 'SG', name: 'Singapore', stats: 'Financial & Tech Hub operations' }
];
