
// src/data/experience.ts
import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: "current-job",
    position: "Full Stack Engineer",
    company: "Velte Technology Solutions",
    companyUrl: "https://veltetech.com",
    period: "2021 — Present",
    description: "Build and maintain critical components used to construct the company's frontend and backend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS","CSS", "Node.js", "MongoDB", "PostgreSQL",  "Nginx", "Docker", "CI/CD", "Git", "Agile", "Scrum", "Testing", "Code Reviews",  "Responsive Design",  "SEO",  "Version Control",  "API Development", "Figma", "Design Systems"],
    current: true
  },
  {
    id: "previous-job",
    position: "Senior Engineer",
    company: "Previous Company",
    companyUrl: "https://previous.com",
    period: "2018 — 2021",
    description: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including major universities, non-profits, and technology companies. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    technologies: ["JavaScript", "TypeScript", "HTML & SCSS", "React", "Next.js", "React Native", "WordPress", "Node.js"],
    current: false
  },
  {
    id: "apple-coop",
    position: "UI Engineer Co-op",
    company: "Apple",
    companyUrl: "https://apple.com",
    period: "July — Dec 2017",
    description: "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
    technologies: ["Ember", "SCSS", "JavaScript", "MusicKit.js"],
    current: false
  }
];
