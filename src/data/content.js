export const personalInfo = {
  name: "Mohammad Mujtaba Badar",
  title: "Senior Full-Stack / Product Engineer",
  location: "Dallas, TX",
  email: "mujbadar@gmail.com",
  phone: "469-422-8932",
  github: "https://github.com/mujbadar",
  linkedin: "https://www.linkedin.com/in/mohammad-badar/",
  tagline: "Product-focused full-stack engineer with 5+ years of experience building revenue-generating SaaS platforms across healthcare and media.",
};

export const projects = [
  {
    id: 1,
    title: "Dallas Morning News Platform",
    description: "Architected internal React + API platforms supporting $800k+ in annual digital revenue. Built moderation & publishing workflows enabling organizations to submit sponsored content.",
    tech: ["React", "FastAPI", "Node.js", "PostgreSQL", "CI/CD"],
    highlights: [
      "Designed services handling thousands of daily transactions with audit logging",
      "Refactored legacy PHP/Python services into modular, testable APIs",
      "Implemented CI/CD pipelines reducing deployment failures by 40%"
    ],
    type: "Professional",
  },
  {
    id: 2,
    title: "Frontera Health Scheduling Platform",
    description: "Led requirements gathering, solution design, and delivery of a custom clinic scheduling platform now live in production. Sourced and closed client through outbound sales and discovery.",
    tech: ["React", "NestJS", "PostgreSQL", "RBAC"],
    highlights: [
      "Developed React frontend and NestJS backend powering appointment workflows",
      "Designed Postgres schema, RBAC, audit logs, and concurrency-safe scheduling logic"
    ],
    type: "Consulting",
  },
  {
    id: 3,
    title: "Unbound Clinicians Telephony",
    description: "Built React Native mobile app with custom Swift VOIP / Apple CallKit integrations for healthcare communication.",
    tech: ["React Native", "Swift", "Telnyx APIs", "Webhooks"],
    highlights: [
      "Implemented call-routing backend using Telnyx APIs",
      "Built loop-prevention logic and webhook orchestration"
    ],
    type: "Independent",
  },
  {
    id: 4,
    title: "Neighborhood Patrol Platform",
    description: "Grassroots founder of a neighborhood patrol / association program to address local safety concerns. Designed and deployed live platform for patrol coordination and incident reporting.",
    tech: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    highlights: [
      "Built React + API platform for patrol coordination",
      "Incident reporting system used by local residents"
    ],
    type: "Independent",
  },
];

export const skills = {
  frontend: ["React", "TypeScript", "JavaScript", "React Native"],
  backend: ["Python (FastAPI)", "Node.js", "NestJS", "PostgreSQL", "MongoDB"],
  infrastructure: ["AWS", "Docker", "CI/CD", "CircleCI", "GitHub Actions", "Vercel", "Railway"],
  concepts: ["REST APIs", "OAuth", "Webhooks", "Telephony APIs", "Distributed Systems", "Caching", "Indexing"],
};

export const experience = [
  {
    id: 1,
    company: "The Dallas Morning News",
    title: "Full-Stack Engineer",
    period: "Sep 2021 – Present",
    description: "Architected internal React + API platforms supporting $800k+ in annual digital revenue. Built moderation & publishing workflows, FastAPI/Node services, and CI/CD pipelines.",
    tech: ["React", "FastAPI", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    company: "Frontera Health",
    title: "Consulting Full-Stack Engineer",
    period: "Apr 2023 – Jun 2024",
    description: "Sourced client through outbound sales. Led requirements gathering, solution design, and delivery of a custom clinic scheduling platform now live in production.",
    tech: ["React", "NestJS", "PostgreSQL"],
  },
  {
    id: 3,
    company: "LocuMatch",
    title: "Founder / Lead Full-Stack Engineer",
    period: "Mar 2018 – Aug 2021",
    description: "Founded and scaled healthcare SaaS platform to $135k ARR across 13 paying clinics. Owned frontend UX, backend services, infrastructure, sales, and customer workflows.",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
];

export const education = [
  {
    school: "General Assembly",
    degree: "Full-Stack Engineering Certification",
  },
  {
    school: "University of Texas at Dallas",
    degree: "B.S. Biology",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
