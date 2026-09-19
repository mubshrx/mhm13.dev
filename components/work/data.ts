export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  companyUrl?: string;
}

export const workExperiences: WorkExperience[] = [
  {
    id: "product-engineer-crediblex",
    title: "Product Engineer",
    company: "CredibleX",
    companyUrl: "https://crediblex.io",
    location: "Remote, Dubai",
    duration: "November 2025 — Present",
    description: [
      "Building Paabo, CredibleX's AI-powered working capital origination platform that helps lenders finance small businesses faster",
      "Developing and maintaining internal dashboards and data-driven tools that support finance and operations teams to reduce the time of loan disbursement to SMEs",
      "Building integration between Loan Origination System and Loan Management System to record loan disbursals and repayments",
    ],
  },
  {
    id: "tech-lead-kwanso",
    title: "Tech Lead",
    company: "Kwanso",
    companyUrl: "https://kwanso.com",
    location: "Lahore, Pakistan",
    duration: "May 2025 — November 2025",
    description: [
      "Led technical architecture decisions and development teams of 5+ engineers",
      "Designed scalable backend systems and database optimization strategies",
      "Mentored junior and mid-level developers and conducted code reviews",
      "Drove delivery of robust full-stack applications with focus on server-side performance",
      "Collaborated with product managers and stakeholders to architect efficient backend solutions",
    ],
  },
  {
    id: "senior-dev-kwanso",
    title: "Senior Software Developer",
    company: "Kwanso",
    companyUrl: "https://kwanso.com",
    location: "Lahore, Pakistan",
    duration: "April 2024 — May 2025",
    description: [
      "Developed and maintained scalable backend systems serving thousands of users",
      "Built robust RESTful and GraphQL APIs with complex business logic",
      "Optimized database queries for improved performance",
      "Integrated subscription and payment processing systems using Chargebee and Stripe",
      "Handled recurring billing, plan upgrades, and payment workflows",
      "Ensured data security and integrity across all systems",
    ],
  },
  {
    id: "web-team-lead-algo-alliance",
    title: "Web Team Lead",
    company: "Algo Alliance",
    location: "Remote, Dubai",
    duration: "September 2022 — March 2024",
    description: [
      "Led small team of frontend and backend developers",
      "Architected and developed various microservices for social media module",
      "Integrated smart contracts using Web3.js and Ethers.js in React.js",
      "Reviewed pull requests, maintained codebase quality and delivered the blockchain‑enabled platform Centher.io",
    ],
  },
  {
    id: "freelance-dev-germany",
    title: "Freelance Web Developer",
    company: "Crime Cases",
    location: "Remote, Germany",
    duration: "April 2022 — September 2022",
    description: [
      "Built applications using Firebase Firestore, Authentication and Hosting",
      "Implemented real-time data sync and secure auth using Firebase Cloud Functions",
      "Developed the Crime Cases Police Server and Crime Cases Tonstudio applications",
    ],
  },
  {
    id: "mern-dev-algo-alliance",
    title: "MERN Stack Developer",
    company: "Algo Alliance",
    location: "Remote, Dubai",
    duration: "December 2021 — March 2022",
    description: [
      "Built REST APIs for social media platform components",
      "Integrated Web3.js APIs with client-side React applications",
      "Developed real-time features using Socket.io and JWT authentication",
      "Worked with MongoDB, Express.js, and modern JavaScript frameworks",
      "Contributed to early development of Centher.io platform",
    ],
  },
  {
    id: "freelance-dev-early",
    title: "Freelance Web Developer",
    company: "Various Clients",
    location: "Remote",
    duration: "March 2019 — December 2021",
    description: [
      "Delivered 10+ web applications for international clients, achieving 100% project completion rate",
      "Created REST APIs using Node.js and Express.js frameworks",
      "Developed responsive UIs with React.js, Next.js and TailwindCSS",
      "Built single page applications and modern landing pages",
      "Migrated legacy Angular application to modern Next.js stack",
    ],
  },
];
