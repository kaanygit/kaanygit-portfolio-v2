export type ProjectKey =
  | 'lawantra'
  | 'dreeys'
  | 'coachun'
  | 'ppazar'
  | 'spory'
  | 'harmopy'
  | 'accessible';

export type ExperienceKey = 'lawantra' | 'appgamedo' | 'freelance' | 'yandex';

export type EducationKey = 'ege' | 'istanbul';

export type LanguageKey = 'tr' | 'en';

export type ServiceKey = 'starter' | 'pro' | 'enterprise';

export type SkillCategory =
  | 'mobile'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'ai'
  | 'tools';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Project {
  key: ProjectKey;
  technologies: string[];
  category: 'mobile' | 'web' | 'other';
  imageUrl?: string;
  imageInvertOnDark?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  huaweiUrl?: string;
  featured?: boolean;
}

export interface Experience {
  key: ExperienceKey;
  technologies: string[];
  link?: string;
  logoUrl?: string;
  logoInvertOnDark?: boolean;
}

export interface Education {
  key: EducationKey;
}

export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
  category: SkillCategory;
}

export interface Service {
  key: ServiceKey;
  level: 'beginner' | 'intermediate' | 'advanced';
  price: string;
  duration: string;
  technologies: string[];
  featured?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface HeroStat {
  key: 'apps' | 'years' | 'coaches' | 'users' | 'ai';
  value: string;
}
