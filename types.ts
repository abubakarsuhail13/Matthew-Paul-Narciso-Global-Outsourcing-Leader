// Added React import to provide access to the React namespace for types like ReactNode
import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  caseStudy: string;
}

export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface RegionInfo {
  id: string;
  name: string;
  stats: string;
}