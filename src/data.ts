export const personal = {
  name: "Manoj Chandra Kompalli",
  title: "Senior Frontend / Full-Stack Engineer",
  tagline:
    "12+ years building scalable web and enterprise applications across government and higher education.",
  email: "iammanojchandra@gmail.com",
  phone: "757-472-1198",
  linkedin: "https://linkedin.com/in/manojkompalli",
  github: "https://github.com/manojchandrak",
  resumeFile: "/portfolio/resume.pdf",
  summary:
    "Results-driven Senior Frontend / Full Stack Engineer with over 12 years of experience building " +
    "scalable, accessible web applications across government and higher education. Strong expertise in " +
    "React (Hooks, Context API, Redux), TypeScript and JavaScript, including Next.js and GraphQL, with a " +
    "focus on reusable component libraries, responsive design, WCAG accessibility and front-end " +
    "performance. Experienced integrating REST APIs and OAuth2/SSO authentication, testing with Jest, " +
    "and shipping Dockerized applications to Kubernetes and AWS through CI/CD pipelines (CircleCI, " +
    "Jenkins, GitHub Actions, Helm, ArgoCD). Comfortable mentoring peers, working with backend " +
    "engineers on API contracts, and modernizing legacy front ends.",
};

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React (Hooks, Context, Redux, React Router, Material UI)", "TypeScript", "Next.js (SSR, micro-frontends)",
      "JavaScript (ES6+)", "Vue.js (2/3)", "AngularJS", "HTML5 / CSS3", "styled-components", "Storybook",
      "AG Grid", "Responsive design", "WCAG accessibility",
    ],
  },
  {
    label: "Performance & Analytics",
    items: ["Core Web Vitals", "SEO-friendly rendering", "A/B testing", "Analytics tracking", "New Relic", "Code splitting & lazy loading"],
  },
  {
    label: "Backend & APIs",
    items: ["Node.js", "Express", "Laravel", "FastAPI", "PHP", "Python", "Java", "C#", "GraphQL", "REST APIs", "OAuth2.0", "JWT", "SSO"],
  },
  {
    label: "Testing & Build Tools",
    items: ["Jest", "React Testing Library", "Playwright", "Vitest", "PHPUnit", "Vite", "Webpack", "Babel", "Git"],
  },
  {
    label: "CI/CD & DevOps",
    items: ["Docker", "Kubernetes (AWS EKS)", "Helm", "ArgoCD", "CircleCI", "Jenkins", "GitHub Actions", "TFS", "Node-RED"],
  },
  { label: "Cloud", items: ["AWS ECS/Fargate", "AWS EC2", "AWS RDS/Aurora", "AWS S3 & CloudFront", "AWS CloudFormation", "AWS CloudWatch", "AWS IAM"] },
  { label: "Databases", items: ["PostgreSQL", "Oracle", "MySQL", "Couchbase"] },
  { label: "CMS", items: ["Drupal 9", "Adobe Experience Manager (AEM)", "WordPress"] },
  { label: "Other Languages", items: ["Shell Scripting", "C/C++"] },
];

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Developer",
    company: "Contractor — U.S. Census Bureau",
    period: "Mar 2024 – Present",
    highlights: [
      "Build fast, responsive, accessible React and TypeScript experiences as Next.js micro-frontends, using server-side rendering and static generation for SEO-friendly pages with quick first paint.",
      "Own Core Web Vitals and WCAG 2.1 AA compliance: audit pages with Lighthouse and screen readers, fix keyboard navigation, focus management, color contrast and semantic markup.",
      "Converted front-end templates from Vue.js to React with reusable Hooks-based components, managing shared state with Context API and Redux, and optimizing rendering with memoization, lazy loading and code splitting.",
      "Built reusable React and Vue components, including AG Grid data grids, and contribute to a shared design system documented in Storybook and styled with styled-components.",
      "Consume GraphQL and REST APIs from the front end, handling loading, empty and error states, and work with backend engineers on API contracts.",
      "Implement A/B tests and analytics tracking, and track real-user performance and errors in New Relic.",
      "Maintain Jest and React Testing Library tests, Playwright end-to-end tests, linting and code reviews; mentor peers.",
      "Own CI/CD pipelines in CircleCI and Jenkins that build Docker images and deploy to Kubernetes (AWS EKS) with Helm and ArgoCD; read pod logs, tune Helm values, check ArgoCD sync and roll back bad releases.",
      "Lead modernization of legacy SAS applications into secure, scalable single-page applications using containerized Vue.js, Laravel, and PostgreSQL.",
      "Orchestrated end-to-end deployment pipelines with Node-RED, Jenkins, and Argo release monitoring.",
      "Designed RESTful APIs and reusable UI components aligned with federal security and accessibility mandates.",
      "Spearheaded migration of containerized on-premise applications to AWS (ECS, Fargate, RDS, S3, CloudFront, IAM, CloudFormation) with CloudWatch monitoring.",
    ],
  },
  {
    role: "Programmer Analyst",
    company: "Contractor — U.S. Census Bureau",
    period: "Mar 2023 – Feb 2024",
    highlights: [
      "Migrated mission-critical internal trade applications from SAS to a PHP/Vue-based web stack.",
      "Designed scalable backend architecture using Laravel and Oracle for high-performance data mapping.",
      "Led frontend development for multiple internal modules using Vue.js, and built React components with Hooks and Context, React Router and REST APIs.",
    ],
  },
  {
    role: "Web / Mobile Developer",
    company: "Old Dominion University",
    period: "Oct 2016 – Feb 2023",
    highlights: [
      "Architected RESTful services and web interfaces for university-wide platforms, including the ODU Mobile App and the Online Virginia Network.",
      "Built a student portal in React with Material UI, Hooks and reusable form, table and navigation components, covered by Jest unit tests.",
      "Developed personalized student dashboard modules with secure OAuth2-based service integrations.",
      "Spearheaded CMS development using Drupal 9 and AEM to enhance accessibility and streamline publishing workflows.",
    ],
  },
  {
    role: "Graduate Assistant — Student Web Developer",
    company: "Old Dominion University",
    period: "Jan 2015 – Sep 2016",
    highlights: [
      "Developed key modules for MRA including login, survey enrollment, push notifications, and secure API endpoints.",
      "Built AngularJS frontends and PHP/Zend backends for the University App Store with user feedback features.",
    ],
  },
  {
    role: "Software Developer",
    company: "Cognizant Technology Solutions",
    period: "Oct 2013 – Dec 2014",
    highlights: [
      "Delivered .NET-based internal enterprise tools including employee registration, room booking, and job portals.",
      "Wrote optimized stored procedures and contributed to data migration initiatives.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Old Dominion University, Norfolk, VA",
    period: "Aug 2016",
    detail: "GPA: 3.6 / 4.0",
  },
  {
    degree: "Bachelor of Technology in Electronics and Computers",
    school: "Sreenidhi Institute of Science & Technology, JNTU, India",
    period: "May 2013",
    detail: "GPA: 3.5 / 4.0",
  },
];

export interface Project {
  name: string;
  description: string;
  tech: string;
  url: string;
}

export const projects: Project[] = [
  {
    name: "job-agent",
    description:
      "A CLI that fetches job listings across RemoteOK, WeWorkRemotely, The Muse, Adzuna, Greenhouse, and Lever, " +
      "filters them against a personal profile, tracks application status, and autofills Greenhouse/Lever " +
      "application forms — plus cross-checks companies against H-1B sponsorship history.",
    tech: "TypeScript, Node.js, Playwright",
    url: "https://github.com/manojchandrak/job-agent",
  },
  {
    name: "Chess Game Analyzer",
    description:
      "Upload a PGN and get a Stockfish-powered breakdown of opening/middlegame/endgame accuracy and an " +
      "estimated performance rating for both players — runs entirely client-side via WebAssembly.",
    tech: "React, TypeScript, Stockfish (WASM)",
    url: "https://github.com/manojchandrak/chess-analyzer",
  },
  {
    name: "PlaceDetectorREST",
    description: "A REST API service for place/location detection.",
    tech: "JavaScript",
    url: "https://github.com/manojchandrak/PlaceDetectorREST",
  },
  {
    name: "PCCP",
    description:
      "An ASP.NET Web Forms application with user registration, login, and content upload/management features.",
    tech: "ASP.NET, C#",
    url: "https://github.com/manojchandrak/PCCP",
  },
];
