export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  huaweiUrl?: string;
  category: 'mobile' | 'web' | 'other';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools' | 'other';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Section {
  id: string;
  title: string;
  description?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  features: string[];
  technologies: string[];
}
