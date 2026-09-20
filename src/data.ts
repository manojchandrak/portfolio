export const personal = {
  name: "Manoj Chandra Kompalli",
  title: "Senior Software Engineer / Full-Stack Developer",
  tagline:
    "12+ years building scalable web and enterprise applications across government and higher education.",
  email: "iammanojchandra@gmail.com",
  phone: "757-472-1198",
  linkedin: "https://linkedin.com/in/manojkompalli",
  github: "https://github.com/manojchandrak",
  resumeFile: "/portfolio/resume.pdf",
  summary:
    "Results-driven Senior Software Engineer with over 12 years of experience designing and " +
    "building scalable web and enterprise applications across government and higher education " +
    "sectors. Proven expertise in leading front-end and back-end development using JavaScript, " +
    "PHP, Vue, React, Laravel, and modern CMS platforms. Adept at software architecture, API " +
    "design, authentication (OAuth2, JWT, SSO), and database modeling. A strong advocate of " +
    "agile methodologies, accessibility standards (WCAG), and DevOps workflows.",
};

export const skillGroups = [
  { label: "Languages", items: ["JavaScript", "PHP", "Python", "Java", "C#", "C/C++", "Shell Scripting"] },
  {
    label: "Frameworks & Libraries",
    items: ["Vue.js (2/3)", "React", "AngularJS", "Node.js", "Laravel", "Zend", "Express"],
  },
  { label: "Testing & CI/CD", items: ["PHPUnit", "Vite", "Git", "TFS", "Jenkins"] },
  { label: "Databases", items: ["PostgreSQL", "Oracle", "MySQL", "Couchbase"] },
  { label: "CMS", items: ["Drupal 9", "Adobe Experience Manager (AEM)", "WordPress"] },
  { label: "DevOps & Cloud", items: ["Docker", "AWS EC2", "AWS RDS/Aurora", "AWS IAM", "AWS S3"] },
  { label: "Protocols & Auth", items: ["REST APIs", "OAuth2.0", "JWT", "SSO"] },
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
    company: "Qualtryx LLC — Federal Contractor supporting the U.S. Census Bureau",
    period: "Mar 2024 – Present",
    highlights: [
      "Lead modernization of legacy SAS applications into secure, scalable single-page applications using containerized Vue.js, Laravel, and PostgreSQL.",
      "Orchestrated end-to-end deployment pipelines with Node-RED, Jenkins, and Argo release monitoring.",
      "Designed RESTful APIs and reusable UI components aligned with federal security and accessibility mandates.",
      "Spearheaded migration of containerized on-premise applications to AWS (ECS, RDS, IAM).",
    ],
  },
  {
    role: "Programmer Analyst",
    company: "I3GlobalTech (Contract) — Federal Contractor supporting the U.S. Census Bureau",
    period: "Mar 2023 – Feb 2024",
    highlights: [
      "Migrated mission-critical internal trade applications from SAS to a PHP/Vue-based web stack.",
      "Designed scalable backend architecture using Laravel and Oracle for high-performance data mapping.",
      "Led frontend development for multiple internal modules using Vue.js.",
    ],
  },
  {
    role: "Web / Mobile Developer",
    company: "Old Dominion University",
    period: "Oct 2016 – Feb 2023",
    highlights: [
      "Architected RESTful services and web interfaces for university-wide platforms, including the ODU Mobile App and the Online Virginia Network.",
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
    name: "nuxt-backend",
    description: "A Laravel backend paired with a Vue.js/Nuxt frontend, exploring a decoupled SSR architecture.",
    tech: "PHP, Laravel, Vue.js, Nuxt",
    url: "https://github.com/manojchandrak/nuxt-backend",
  },
  {
    name: "ODU App Store",
    description:
      "A university app marketplace built during a graduate assistantship at Old Dominion University, with " +
      "user feedback and submission features.",
    tech: "PHP",
    url: "https://github.com/manojchandrak/OduAppStore",
  },
  {
    name: "PlaceDetectorREST",
    description: "A REST API service for place/location detection.",
    tech: "JavaScript",
    url: "https://github.com/manojchandrak/PlaceDetectorREST",
  },
  {
    name: "php-dock",
    description: "A Docker Compose environment bundling PHP, Apache, MySQL, and phpMyAdmin for local development.",
    tech: "Docker",
    url: "https://github.com/manojchandrak/php-dock",
  },
];
