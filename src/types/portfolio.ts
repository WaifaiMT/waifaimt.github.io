// src/types/portfolio.ts
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  location: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    external?: string;
    github?: string;
  };
  featured?: boolean;
  year: string;
  madeAt?: string;
  image?: string;
}

export interface ArchiveProject extends Project {
  year: string;
  madeAt: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface MousePosition {
  x: number;
  y: number;
}

export interface ScrollSpyOptions {
  rootMargin?: string;
  threshold?: number;
}

// Component Props Types
export interface SectionProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
}

export interface ExperienceItemProps {
  experience: Experience;
  className?: string;
}

export interface TechTagProps {
  tech: string;
  variant?: 'default' | 'small';
  className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export interface SectionHeaderProps {
  title: string;
  className?: string;
  sticky?: boolean;
}

