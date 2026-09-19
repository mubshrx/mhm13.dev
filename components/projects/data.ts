export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    id: "paabo",
    title: "Paabo",
    url: "https://paabo.com",
    description:
      "An AI-powered working capital origination platform that helps brokers and lenders finance small businesses faster.",
    details: [
      "Building broker, lender, and admin portals for originating and reviewing financing cases",
      "Designing the case workflow from broker submit through ops review to lender execution",
      "Implementing organization onboarding, document checklists, and commission payouts",
    ],
  },
  {
    id: "chexpass",
    title: "Chexpass",
    url: "https://www.bib.com/chexpass",
    description:
      "An enterprise-grade visitor management system that enables secure check-ins, real-time tracking, instant sex offender and security watchlist checks, and multi-channel alerts.",
    details: [
      "Built global search functionality using Elasticsearch",
      "Developed a multi-channel notification system (in-app, SMS, email) with customizable templates",
      "Integrated subscription management using Chargebee and Stripe, including upgrades and downgrades, plan syncing, and webhooks",
    ],
  },
  {
    id: "chex365",
    title: "Chex365",
    url: "https://www.bib.com/chex365",
    description:
      "A continuous criminal monitoring platform that tracks post-hire offenses and delivers timely alerts for incidents such as arrests, charges, or convictions across various jurisdictions.",
    details: [
      "Designed and implemented the database schema (ERD)",
      "Integrated authentication with the Bchex Auth Server using OAuth 2.0",
      "Developed a flexible RBAC system supporting both predefined and custom roles and permissions",
      "Engineered billing infrastructure to support flat-rate and usage-based pricing models for enterprise customers",
      "Integrated internal Bchex APIs for continuous background monitoring workflows",
    ],
  },
  {
    id: "centher-io",
    title: "Centher.io",
    description:
      "A blockchain-based NFT marketplace, token launchpad, and social media platform.",
    details: [
      "Led the design and development of the social media module",
      "Implemented features such as user profiles, posts, threaded discussions, and rich-text post drafting",
      "Integrated smart contracts to enable decentralized content interactions",
    ],
  },
];
