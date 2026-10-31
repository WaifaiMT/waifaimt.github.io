// src/data/experience.ts
import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: "velte-devops",
    position: "DevOps Engineer",
    company: "Velte Technology Solutions",
    companyUrl: "https://veltetech.com",
    period: "Feb 2026 — Present",
    description: "Set up CI/CD for two production SaaS platforms: GitHub Actions staging and production pipelines, SSH releases to Linux servers, Nginx, PM2, and server provisioning. Also built the iOS/Android app for Legal Mate, a law-firm SaaS, and Velte Mailer, a multi-tenant email API.",
    technologies: ["GitHub Actions", "Linux", "Nginx", "PM2", "Docker", "React Native", "Expo", ".NET"],
    current: true
  },
  {
    id: "velte-branch-manager",
    position: "Ghana Branch Manager",
    company: "Velte Technology Solutions",
    companyUrl: "https://veltetech.com",
    period: "2024 — 2026",
    description: "Managed the 9-person Ghana office: oversaw the team's work and productivity, planned process improvements and which products to build, and trained National Service personnel. Stayed hands-on, building Otti, a multi-tenant membership SaaS, from first MVP to production.",
    technologies: ["Team Leadership", "Mentoring", "Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe"],
    current: false
  },
  {
    id: "velte-software-engineer",
    position: "Software Engineer",
    company: "Velte Technology Solutions",
    companyUrl: "https://veltetech.com",
    period: "2021 — 2024",
    description: "Built web applications, APIs, and websites for clients in Canada and Ghana as part of a remote team, including MoMs Meet, a social platform with real-time messaging, and sites for nonprofits and local businesses.",
    technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    current: false
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
