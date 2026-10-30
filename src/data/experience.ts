// src/data/experience.ts
import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: "velte",
    position: "Web Developer",
    company: "Velte Technology Solutions",
    companyUrl: "https://veltetech.com",
    period: "2021 — Present",
    description: "Built Otti, a multi-tenant membership SaaS, from MVP to production; built the iOS/Android app for Legal Mate, a law-firm SaaS; set up CI/CD deployment for two production platforms; and delivered APIs and websites for clients in Canada and Ghana as part of a remote team.",
    technologies: ["TypeScript", "React", "Next.js", "React Native", "Node.js", "Express", ".NET", "PostgreSQL", "Redis", "Stripe", "Docker", "Nginx", "GitHub Actions"],
    current: true
  },
  {
    id: "leaving-a-legacy",
    position: "IT Support & Creative Specialist (Volunteer)",
    company: "Leaving A Legacy LLC",
    period: "2018 — 2020",
    description: "Provided IT and audio-visual support for organizational events, coordinated meetings and technical initiatives, and produced photography, video, and promotional design that strengthened the organization's digital presence.",
    technologies: ["IT Support", "Photoshop", "Illustrator", "Premiere Pro", "Photography", "Videography"],
    current: false
  },
  {
    id: "starone",
    position: "Founder & Creative Director",
    company: "StarOne Studios",
    companyUrl: "https://staronestudios.com",
    period: "2014 — Present",
    description: "Founded and run a creative studio delivering photography, videography, branding, and graphic design for events, product launches, and marketing campaigns. A decade of working directly with clients shapes how I approach product and UI work today.",
    technologies: ["Adobe Creative Suite", "After Effects", "Brand Identity", "UI/UX", "Photography", "Videography"],
    current: true
  }
];
