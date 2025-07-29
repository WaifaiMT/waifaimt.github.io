
// src/data/projects.ts
import { Project, ArchiveProject } from '@/types';

export const featuredProjects: Project[] = [
  {
    id: "web-course",
    title: "Build a Modern Web App",
    description: "Video course that teaches how to build a web app with modern frameworks and APIs. Topics covered include the principles of REST APIs, user auth flows, React, Node.js, Express, styled components, and more.",
    technologies: ["React", "Express", "Node.js", "JavaScript"],
    links: {
      external: "https://example.com/course",
      github: "https://github.com/yourusername/course"
    },
    featured: true,
    year: "2024",
    madeAt: "Personal Project"
  },
  {
    id: "profile-dashboard",
    title: "Personal Profile Dashboard",
    description: "Web app for visualizing personalized data and analytics. View your top metrics, recent activity, detailed information about each interaction. Create and save new custom dashboards based on your preferences and more.",
    technologies: ["React", "Express", "JavaScript", "Node.js"],
    links: {
      external: "https://dashboard.example.com",
      github: "https://github.com/yourusername/dashboard"
    },
    featured: true,
    year: "2023",
    madeAt: "Personal Project"
  },
  {
    id: "design-system",
    title: "Design System Theme",
    description: "Minimal dark theme for VS Code, Sublime Text, Atom, iTerm, and more. Available as an extension with 100k+ installations across various editors and platforms.",
    technologies: ["VS Code", "Sublime Text", "iTerm2", "Hyper"],
    links: {
      external: "https://marketplace.visualstudio.com/items?itemName=theme",
      github: "https://github.com/yourusername/theme"
    },
    featured: true,
    year: "2023",
    madeAt: "Open Source"
  }
];

export const archiveProjects: ArchiveProject[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
    links: {
      external: "https://ecommerce.example.com",
      github: "https://github.com/yourusername/ecommerce"
    },
    year: "2024",
    madeAt: "Freelance"
  },
  {
    id: "corporate-website",
    title: "Corporate Website Redesign",
    description: "Modern responsive website for enterprise client",
    technologies: ["Next.js", "Tailwind CSS", "Contentful"],
    links: {
      external: "https://corporate.example.com"
    },
    year: "2024",
    madeAt: "Your Agency"
  },
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    description: "React Native banking application with biometric authentication",
    technologies: ["React Native", "TypeScript", "Firebase"],
    links: {
      external: "https://banking.example.com",
      github: "https://github.com/yourusername/banking"
    },
    year: "2023",
    madeAt: "Tech Startup Inc."
  },
  {
    id: "component-library",
    title: "Design System Library",
    description: "Reusable component library with Storybook documentation",
    technologies: ["React", "Storybook", "Styled Components"],
    links: {
      github: "https://github.com/yourusername/components"
    },
    year: "2023",
    madeAt: "Tech Startup Inc."
  },
  {
    id: "photography-portfolio",
    title: "Portfolio Photography Site",
    description: "Elegant portfolio website for professional photographer",
    technologies: ["Gatsby", "GraphQL", "Netlify CMS"],
    links: {
      external: "https://photography.example.com"
    },
    year: "2023",
    madeAt: "Freelance"
  },
  {
    id: "task-dashboard",
    title: "Task Management Dashboard",
    description: "Team collaboration tool with real-time updates",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
    links: {
      external: "https://tasks.example.com",
      github: "https://github.com/yourusername/tasks"
    },
    year: "2022",
    madeAt: "Creative Agency LLC"
  },
  {
    id: "brand-identity",
    title: "Brand Identity System",
    description: "Complete brand identity package for startup client",
    technologies: ["Figma", "Adobe Creative Suite"],
    links: {
      external: "https://brand.example.com"
    },
    year: "2022",
    madeAt: "Creative Agency LLC"
  },
  {
    id: "real-estate",
    title: "Real Estate Platform",
    description: "Property listing and management system",
    technologies: ["React", "Django", "PostgreSQL"],
    links: {
      external: "https://realestate.example.com"
    },
    year: "2022",
    madeAt: "Creative Agency LLC"
  }
];

