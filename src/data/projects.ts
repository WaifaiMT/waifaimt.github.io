
// src/data/projects.ts
import { Project, ArchiveProject } from '@/types';

// Client projects are private codebases — no GitHub links. Add live URLs
// (and screenshots via `image`) only where the client is happy to be shown.
export const featuredProjects: Project[] = [
  {
    id: "otti",
    title: "Otti",
    description: "Multi-tenant membership management SaaS that I grew from the MVP I built (Membrr). Each organization gets an isolated PostgreSQL schema, with subscription packages and invoicing at the platform level, plus member profiles, payments via Stripe, bulk email and SMS through Redis/BullMQ queues, role-based access, and reporting.",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Express", "PostgreSQL", "Redis", "BullMQ", "Stripe"],
    links: {
      external: "https://managewithotti.com"
    },
    featured: true,
    year: "2025",
    madeAt: "Client Project"
  },
  {
    id: "tsellr",
    title: "Tsellr",
    description: "My own product, currently in staging: a billing, invoicing, and accounting platform for Ghanaian businesses across web, desktop, and mobile — with GRA tax compliance, Mobile Money and Paystack payments, SMS OTP, and offline-first SQLite that syncs in real time over SignalR.",
    technologies: ["ASP.NET Core", "C#", "React 19", "PostgreSQL", "Redis", "SignalR", "Tauri", "React Native"],
    links: {},
    featured: true,
    year: "2026",
    madeAt: "Personal Project"
  },
  {
    id: "saas-starter",
    title: "SaaS Starter",
    description: "Open-source multi-tenant SaaS starter where every organisation gets its own PostgreSQL schema, the architecture I used for Otti. Roles and permissions, single-use invites, an audit log, and Stripe billing, with 32 integration tests against real PostgreSQL proving one organisation can never reach another's data.",
    technologies: ["Next.js 16", "TypeScript", "PostgreSQL", "Drizzle", "Stripe", "Vitest"],
    links: {
      github: "https://github.com/WaifaiMT/saas-starter"
    },
    featured: true,
    year: "2026",
    madeAt: "Personal Project"
  },
  {
    id: "doc-extract-ai",
    title: "Doc Extract AI",
    description: "Upload a contract and get its key clauses with risk ratings, then ask questions answered only from the document. Built on the Claude API with structured outputs validated by Zod; every quote the model returns is checked against the original text, so invented clauses are flagged, and answers come with citations to the exact passage.",
    technologies: ["TypeScript", "Claude API", "Zod", "Express", "React", "Vitest"],
    links: {
      github: "https://github.com/WaifaiMT/doc-extract-ai"
    },
    featured: true,
    year: "2026",
    madeAt: "Personal Project"
  },
  {
    id: "legal-mate",
    title: "Legal Mate — Mobile App",
    description: "Built the iOS/Android companion app for a multi-tenant law-firm SaaS: clients view cases, documents, appointments, and invoices, pay through Stripe, and message their firm in real time over server-sent events. Security-first by design — biometric unlock, encrypted token storage, inactivity timeout, screen-capture protection, and permission-aware UI with per-firm branding.",
    technologies: ["React Native", "Expo", "TypeScript", "NativeWind", "Stripe", "SSE", "Jest"],
    links: {},
    featured: true,
    year: "2026",
    madeAt: "Client Project"
  },
  {
    id: "velte-hub",
    title: "Velte Hub — Deployment",
    description: "Set up production and staging deployment for a multi-tenant project and customer management SaaS: GitHub Actions pipelines that build and ship over SSH to a Linux VPS, Nginx reverse proxy, PM2 process management, server provisioning scripts, and a separate Supabase staging environment.",
    technologies: ["GitHub Actions", "Nginx", "PM2", "Linux", "Supabase", "CI/CD"],
    links: {},
    featured: true,
    year: "2026",
    madeAt: "Client Project"
  },
  {
    id: "npp-canada-connect",
    title: "NPP Canada Connect — Deployment",
    description: "Deployed a membership platform for a diaspora organization across Canadian provinces, with separate staging and production GitHub Actions pipelines that build the React front-end, inject environment secrets, and release to the server over SSH with PM2 process management.",
    technologies: ["GitHub Actions", "CI/CD", "PM2", "Linux", "Node.js"],
    links: {},
    featured: true,
    year: "2026",
    madeAt: "Client Project"
  }
];

export const archiveProjects: ArchiveProject[] = [
  {
    id: "pesewa",
    title: "pesewa",
    description: "Open-source TypeScript SDK for taking payments in Ghana: Paystack, Moolre, and MTN MoMo behind one interface. Webhooks are authenticated and every payment is re-confirmed with the provider before it counts. Amounts in pesewas, zero dependencies, tested on Node 18 to 24.",
    technologies: ["TypeScript", "Paystack", "MTN MoMo", "Moolre", "Vitest"],
    links: {
      github: "https://github.com/WaifaiMT/pesewa"
    },
    year: "2026",
    madeAt: "Personal Project"
  },
  {
    id: "vps-deploy-playbook",
    title: "VPS Deploy Playbook",
    description: "Open-source kit for deploying Node.js, Next.js, and static sites to a Linux VPS: atomic releases with automatic rollback, Nginx and PM2 templates, and GitHub Actions workflows",
    technologies: ["Bash", "Nginx", "PM2", "GitHub Actions", "Linux"],
    links: {
      github: "https://github.com/WaifaiMT/vps-deploy-playbook"
    },
    year: "2026",
    madeAt: "Personal Project"
  },
  {
    id: "tsellr-landing",
    title: "Tsellr Landing Site",
    description: "Marketing site for the Tsellr platform",
    technologies: ["Astro", "React 19", "Tailwind CSS"],
    links: {},
    year: "2026",
    madeAt: "Personal Project"
  },
  {
    id: "velte-mailer",
    title: "Velte Mailer",
    description: "Multi-tenant transactional email API with per-tenant keys, rate limiting, and bot protection — built in both Node.js and .NET",
    technologies: ["Node.js", "ASP.NET Core", "Nodemailer", "MailKit"],
    links: {},
    year: "2026",
    madeAt: "Client Project"
  },
  {
    id: "rebootghana",
    title: "Reboot Ghana",
    description: "E-commerce store, POS, and inventory system for a refurbished-electronics business",
    technologies: ["Next.js", "ASP.NET Core", "Entity Framework Core", "Paystack"],
    links: {},
    year: "2025",
    madeAt: "Personal Project"
  },
  {
    id: "starone-studios",
    title: "StarOne Studios",
    description: "Website and content management for my creative studio",
    technologies: ["React", "Node.js"],
    links: {
      external: "https://staronestudios.com"
    },
    year: "2025",
    madeAt: "StarOne Studios"
  },
  {
    id: "muvule",
    title: "Muvule",
    description: "Full-stack app with auth, payments, and a Jest test suite",
    technologies: ["Next.js 15", "Prisma", "PostgreSQL", "NextAuth", "Stripe"],
    links: {},
    year: "2025",
    madeAt: "Client Project"
  },
  {
    id: "membrr",
    title: "Membrr",
    description: "The membership-management MVP I built, with payments and bulk email/SMS queues — later became Otti",
    technologies: ["Next.js", "Express", "PostgreSQL", "BullMQ"],
    links: {},
    year: "2025",
    madeAt: "Client Project"
  },
  {
    id: "circle-check",
    title: "Circle Check Driving School",
    description: "Website and lesson booking for a driving school in Barrie, Ontario",
    technologies: ["React", "Node.js"],
    links: {
      external: "https://thecirclecheck.com"
    },
    year: "2025",
    madeAt: "Client Project"
  },
  {
    id: "bodomasi-dashboard",
    title: "Bodomasi Dashboard",
    description: "Membrr adapted for a single organization: payments, reports, and audit trails",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Docker"],
    links: {},
    year: "2025",
    madeAt: "Client Project"
  },
  {
    id: "leaving-a-legacy",
    title: "Leaving A Legacy",
    description: "Website for a nonprofit I first supported as a volunteer",
    technologies: ["React", "Node.js", "Express"],
    links: {},
    year: "2025",
    madeAt: "Freelance"
  },
  {
    id: "mesh-of-mothers",
    title: "Mesh of Mothers",
    description: "Community organization site with events, programs, volunteer sign-up, and Stripe donations",
    technologies: ["React", "Node.js", "Express", "Stripe"],
    links: {
      external: "https://meshofmothers.ca"
    },
    year: "2025",
    madeAt: "Client Project"
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    description: "The site you're on",
    technologies: ["Next.js 15", "React 19", "Tailwind CSS v4"],
    links: {
      github: "https://github.com/WaifaiMT/waifaimt.github.io"
    },
    year: "2025",
    madeAt: "Personal Project"
  },
  {
    id: "moms-meet",
    title: "MoMs Meet",
    description: "Social networking platform with communities, posts, real-time messaging, notifications, and admin moderation tools",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.IO"],
    links: {},
    year: "2024",
    madeAt: "Client Project"
  },
  {
    id: "game-store-api",
    title: "GameStore API",
    description: "ASP.NET Core minimal API with EF Core, migrations, and validation (learning project)",
    technologies: ["C#", "ASP.NET Core", "EF Core", "SQLite"],
    links: {
      github: "https://github.com/WaifaiMT/game-store-api"
    },
    year: "2024",
    madeAt: "Learning Project"
  },
  {
    id: "rescue-women",
    title: "Rescue Women International",
    description: "Website for an international women's charity, with events, volunteer sign-up, and donations",
    technologies: ["React", "SEO"],
    links: {
      external: "https://rescuewomeninternational.org"
    },
    year: "2024",
    madeAt: "Client Project"
  },
  {
    id: "fortress-city-chapel",
    title: "Fortress City Chapel",
    description: "Church website",
    technologies: ["React"],
    links: {},
    year: "2024",
    madeAt: "Client Project"
  },
  {
    id: "hestias",
    title: "Hestias Foundation",
    description: "Website for a children's education charity, with events, programs, and Stripe donations",
    technologies: ["React", "Stripe", "Formik", "Framer Motion"],
    links: {
      external: "https://hestiasfoundation.org"
    },
    year: "2024",
    madeAt: "Freelance"
  },
  {
    id: "rosy-recreational",
    title: "Rosy Recreational",
    description: "Website for an award-winning pool and backyard design company: services, products, portfolio, and contact",
    technologies: ["React", "Node.js"],
    links: {
      external: "https://www.rosyrec.com"
    },
    year: "2023",
    madeAt: "Client Project"
  }
];
