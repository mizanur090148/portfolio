export interface Project {
  id: string;
  title: string;
  category: 'eCommerce' | 'Healthcare' | 'Enterprise ERP' | 'Education';
  company: string;
  role: string;
  period: string;
  summary: string;
  fullDescription: string[];
  techStack: string[];
  metrics: string[];
  architectureHighlights: string[];
  featured: boolean;
  externalUrl?: string;
  colorScheme: {
    accent: string;
    badgeBg: string;
    badgeBorder: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Leadership';
  techStack: string[];
  highlights: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    highlight?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: 'Md. Mizanur Rahman',
  nickname: 'Mizan',
  role: 'Senior Full Stack Software Engineer',
  secondaryRole: 'Senior Software Engineer | Optionally Tech Lead',
  targetRoles: [
    'Senior Full Stack Software Engineer',
    'Senior Software Engineer',
    'Software Engineer',
    'Technical Lead',
  ],
  location: 'Dhaka, Bangladesh',
  timezone: 'GMT+6 (BST)',
  email: 'mizanur09014@gmail.com',
  phone: '+880 1733714009',
  whatsapp: 'https://wa.me/8801733714009',
  linkedin: 'https://linkedin.com/in/mizanur-rahman-289987b8',
  github: 'https://github.com/mizanur090148',
  experienceYears: '12+',
  avatarUrl: '/images/mizanur_rahman.jpg',
  cvUrl: '/documents/Md_Mizanur_Rahman_CV.pdf',
  summary:
    'Senior Full Stack Software Engineer & Senior Software Engineer with 12+ years of production experience building enterprise web applications, high-throughput systems, REST APIs, and modern frontends. Strong expertise in PHP, Laravel, Node.js, NestJS, React.js, Next.js, MySQL, MongoDB, Redis, AWS, Docker, CI/CD, and technical team leadership. Open to Senior Full Stack, Senior Software Engineer, Software Engineer, and Tech Lead opportunities.',
  keyStats: [
    { label: 'Years Experience', value: '12+', description: 'Continuous production engineering' },
    { label: 'Enterprise Systems', value: '6+', description: 'Across high-impact industries' },
    { label: 'Engineers Mentored', value: '10+', description: 'Agile team leadership' },
    { label: 'Uptime Reliability', value: '99.9%', description: 'High-availability AWS & Docker' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'ethos-merch',
    title: 'Ethos Merch B2B & B2C Platform',
    category: 'eCommerce',
    company: 'Clicko Digital',
    role: 'Technical Lead / Senior Full Stack Developer',
    period: 'Nov 2025 - Present',
    summary:
      'US-focused custom merchandise eCommerce platform with real-time supplier API integrations, automated order syncing, multi-gateway payments, and Dockerized AWS deployment.',
    fullDescription: [
      'Architected the entire eCommerce infrastructure powering custom merchandise workflows for US clients, bridging multi-vendor suppliers with storefront checkout.',
      'Engineered bi-directional catalog and real-time inventory synchronization with top tier supplier APIs including AS Colour, SanMar, Stanley/Stella, and S&S Activewear.',
      'Implemented automated webhook pipelines linking customer purchases to Shopify and ShipStation for zero-latency fulfillment dispatch.',
      'Integrated Stripe and PayPal with robust idempotent webhook listeners, fraud mitigation, and unified payment ledger handling.',
      'Spearheaded Docker-based containerized deployments on AWS EC2, configured DeployHQ CI/CD pipelines, and organized S3 media asset storage.',
      'Mentored a 4-engineer development team, holding weekly architecture reviews, database schema audits, and clean-code sprints.',
    ],
    techStack: [
      'PHP 8.2',
      'Laravel',
      'NestJS',
      'Node.js',
      'React.js',
      'MySQL',
      'Redis',
      'Docker',
      'AWS EC2',
      'AWS S3',
      'DeployHQ',
      'GitHub Actions',
      'Stripe',
      'PayPal',
      'Shopify API',
      'ShipStation API',
    ],
    metrics: [
      'Sub-second supplier inventory sync',
      '100% automated ShipStation order routing',
      'Zero downtime CI/CD deployment cycle',
      'Led 4-member cross-functional engineering squad',
    ],
    architectureHighlights: [
      'Webhook-driven asynchronous order event bus',
      'Redis caching layer for supplier catalog aggregation',
      'Isolated Docker containers orchestrated on AWS EC2',
      'Secure tokenized Stripe & PayPal checkout pipelines',
    ],
    featured: true,
    colorScheme: {
      accent: '#06b6d4',
      badgeBg: 'rgba(6, 182, 212, 0.1)',
      badgeBorder: 'rgba(6, 182, 212, 0.25)',
    },
  },
  {
    id: 'doctor-eprescription',
    title: 'Doctor Appointment & ePrescription Platform',
    category: 'Healthcare',
    company: 'iHealthScreen Bangladesh Ltd.',
    role: 'Senior Software Engineer',
    period: 'Mar 2022 - Oct 2025',
    summary:
      'End-to-end clinical workflow suite enabling specialist search, slot booking, multi-step diagnosis recording, and instant prescription generation with historical records lookup.',
    fullDescription: [
      'Led the engineering of a doctor appointment and e-prescription clinical platform handling doctor search, booking schedules, medical history, and dosage calculations.',
      'Built a full electronic prescription engine covering chief complaints, clinical examination parameters, ICD diagnoses, investigations, drug dosage timelines, and follow-up advice.',
      'Engineered an ultra-fast patient history retrieval index querying by Patient ID or mobile number to support cumulative clinical records during recurring consultations.',
      'Designed and documented REST APIs consumed by dedicated iOS and Android mobile engineering squads.',
      'Implemented a dual-database architecture: MongoDB for flexible unstructured clinical examination data and MySQL for relational billing and scheduling.',
      'Deployed on AWS EC2 instances with S3 media buckets and strict data retention controls.',
    ],
    techStack: [
      'NestJS',
      'React.js',
      'Node.js',
      'Laravel',
      'PHP',
      'MongoDB',
      'MySQL',
      'Docker',
      'AWS EC2',
      'AWS S3',
      'REST APIs',
    ],
    metrics: [
      'Fast clinical history retrieval across thousands of patient files',
      'Comprehensive doctor-patient workflow from consultation to digital Rx PDF',
      'High-throughput REST API serving web and native mobile apps',
    ],
    architectureHighlights: [
      'Hybrid persistence: MongoDB for flexible medical records + MySQL for transactional scheduling',
      'Stateless JWT authentication and role-based access control (Doctor, Patient, Clinic Admin)',
      'Automated PDF prescription generation service with digital signatures',
    ],
    featured: true,
    colorScheme: {
      accent: '#10b981',
      badgeBg: 'rgba(16, 185, 129, 0.1)',
      badgeBorder: 'rgba(16, 185, 129, 0.25)',
    },
  },
  {
    id: 'apple-store-mgmt',
    title: 'Apple Store Management System',
    category: 'Enterprise ERP',
    company: 'Apple (Contractor via Softzino Technologies)',
    role: 'Independent Contractor / Full Stack Engineer',
    period: 'Jan 2021 - Feb 2022',
    summary:
      'Internal Apple Store management system supporting employee supply requests, inventory allocation, product item availability, and internal fulfillment workflows.',
    fullDescription: [
      'Contracted on an internal Apple Store management system through Softzino Technologies.',
      'Contributed to the development and maintenance of internal store management workflows supporting employee supply requests and fulfillment operations.',
      'Developed business workflows for managing product/item requests, stock availability, fulfillment routing, and internal inventory-related operations.',
      'Designed and enhanced backend functionality, internal APIs, and application features based on internal enterprise specifications.',
      'Strictly adhered to enterprise clean coding practices, modular architecture, and high standards of code maintainability and data safety.',
    ],
    techStack: [
      'PHP',
      'Laravel',
      'Vue.js',
      'MongoDB',
      'MySQL',
      'Docker',
      'AWS',
      'Enterprise APIs',
    ],
    metrics: [
      'Streamlined internal store requisition turnaround',
      'Enterprise-grade security and reliability compliance',
      'Maintained modular, scalable codebase in a global organization',
    ],
    architectureHighlights: [
      'Clean domain-driven modular structure',
      'High-reliability inventory allocation and requisition locking',
      'RESTful internal service communication',
    ],
    featured: true,
    colorScheme: {
      accent: '#f59e0b',
      badgeBg: 'rgba(245, 158, 11, 0.1)',
      badgeBorder: 'rgba(245, 158, 11, 0.25)',
    },
  },
  {
    id: 'garments-erp',
    title: 'High-Volume Garments Manufacturing ERP',
    category: 'Enterprise ERP',
    company: 'Skylarksoft Ltd.',
    role: 'Technical Team Lead / Senior Software Engineer',
    period: 'Feb 2018 - Dec 2020',
    summary:
      'Large-scale enterprise ERP managing the entire apparel manufacturing lifecycle with 12+ modules, database partitioning, and background queue workers.',
    fullDescription: [
      'Led a 5-member engineering team building a mission-critical Garments ERP platform used by high-output apparel manufacturing factories.',
      'Designed and built 12+ complete lifecycle modules: Merchandising, Costing, Inventory, Textile, Washing, Sampling, Cutting, Printing, Embroidery, Sewing Input/Output, Finishing, Poly & Packing, and Shipment.',
      'Tackled severe performance bottlenecks caused by massive historical production datasets by implementing table partitioning, composite indexing, and denormalized summary views.',
      'Migrated long-running report calculations and export generation to asynchronous Redis queue workers, bringing HTTP request times down by over 70%.',
      'Configured and maintained production VPS environments ensuring continuous uptime during factory operational shifts.',
    ],
    techStack: [
      'PHP',
      'Laravel',
      'Vue.js',
      'React.js',
      'MySQL',
      'MongoDB',
      'Redis Queues',
      'Table Partitioning',
      'Linode VPS',
    ],
    metrics: [
      'Led 5-member technical team across full SDLC',
      '12+ production modules deployed in active apparel plants',
      '70%+ reduction in report generation latency via queue workers',
      'Seamlessly handled high-volume daily factory throughput',
    ],
    architectureHighlights: [
      'Database table partitioning on production event ledgers',
      'Redis queue architecture for async reporting and PDF exports',
      'Module-based monolithic architecture with strict service boundaries',
    ],
    featured: true,
    colorScheme: {
      accent: '#8b5cf6',
      badgeBg: 'rgba(139, 92, 246, 0.1)',
      badgeBorder: 'rgba(139, 92, 246, 0.25)',
    },
  },
  {
    id: 'higher-education-system',
    title: 'Online Higher Education Management System',
    category: 'Education',
    company: 'BlueScheme Ltd.',
    role: 'Software Engineer',
    period: 'Nov 2015 - Jan 2018',
    summary:
      'Comprehensive university administration system covering student admissions, course enrollment, virtual lectures, online examinations, assignments, and automated grading.',
    fullDescription: [
      'Contributed to the architecture and feature development of an Online Higher Education platform for colleges and universities.',
      'Implemented academic student lifecycle workflows: admissions, course registrations, semester timetables, attendance tracking, and faculty evaluations.',
      'Built automated result processing engines calculating CGPA and grade distributions based on diverse institutional criteria.',
    ],
    techStack: ['PHP', 'Laravel', 'Vue.js', 'MongoDB', 'MySQL', 'JavaScript'],
    metrics: [
      'Streamlined university admissions & course enrollment',
      'Automated grading calculations across thousands of students',
    ],
    architectureHighlights: [
      'Role-based portal access (Students, Faculty, Registrar, Admin)',
      'Automated GPA/CGPA computational engine with audit logs',
    ],
    featured: false,
    colorScheme: {
      accent: '#3b82f6',
      badgeBg: 'rgba(59, 130, 246, 0.1)',
      badgeBorder: 'rgba(59, 130, 246, 0.25)',
    },
  },
  {
    id: 'student-billing-system',
    title: 'Commercial eCommerce & Student Billing Systems',
    category: 'eCommerce',
    company: 'ABH World',
    role: 'Software Engineer',
    period: 'Mar 2014 - Oct 2015',
    summary:
      'Engineered student tuition fee billing management systems and bespoke commercial web applications using CodeIgniter, jQuery, and MySQL.',
    fullDescription: [
      'Worked on commercial eCommerce and institution billing systems, supporting automated invoice generation and payment tracking.',
      'Developed and maintained modular application features supporting complex business and student financial workflows.',
    ],
    techStack: ['PHP', 'CodeIgniter', 'JavaScript', 'jQuery', 'MySQL'],
    metrics: [
      'Early-career foundation building transactional financial systems',
      'Delivered reliable accounting and invoicing modules',
    ],
    architectureHighlights: [
      'MVC architecture with CodeIgniter',
      'Optimized SQL queries for transactional ledgers',
    ],
    featured: false,
    colorScheme: {
      accent: '#ec4899',
      badgeBg: 'rgba(236, 72, 153, 0.1)',
      badgeBorder: 'rgba(236, 72, 153, 0.25)',
    },
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'clicko',
    role: 'Senior Full Stack Developer & Technical Lead',
    company: 'Clicko Digital',
    period: 'Nov 2025 - Present',
    location: 'Dhaka, Bangladesh',
    type: 'Leadership',
    isCurrent: true,
    techStack: ['PHP', 'Laravel', 'NestJS', 'Node.js', 'React.js', 'MySQL', 'Redis', 'Docker', 'AWS EC2', 'AWS S3', 'DeployHQ', 'GitHub Actions'],
    highlights: [
      'Technical Lead for Ethos Merch, a high-volume US custom merchandise eCommerce platform.',
      'Integrated four premier supplier APIs: AS Colour, SanMar, Stanley/Stella, and S&S Activewear.',
      'Built automated webhook-driven order synchronization pipelines with Shopify and ShipStation.',
      'Integrated Stripe and PayPal payment gateways with comprehensive webhook ledger security.',
      'Implemented Docker-based continuous deployment on AWS EC2 with DeployHQ CI/CD and AWS S3 storage.',
      'Mentored and guided a 4-member engineering team with daily technical direction and code reviews.',
    ],
  },
  {
    id: 'ihealthscreen',
    role: 'Senior Software Engineer',
    company: 'iHealthScreen Bangladesh Ltd.',
    period: 'Mar 2022 - Oct 2025',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    techStack: ['NestJS', 'Node.js', 'React.js', 'Laravel', 'PHP', 'MongoDB', 'MySQL', 'Docker', 'AWS EC2', 'AWS S3', 'REST APIs'],
    highlights: [
      'Led the end-to-end development of an enterprise Doctor Appointment & ePrescription platform.',
      'Engineered prescription creation with diagnosis, examination notes, medication schedules, and clinical advice.',
      'Built lightning-fast historical prescription indexing using patient phone number and unique identifier.',
      'Architected REST APIs consumed by native iOS and Android mobile client teams.',
      'Devised dual-engine storage: MongoDB for clinical documents and MySQL for scheduling and transactions.',
      'Containerized with Docker and deployed on AWS EC2 with AWS S3 asset management.',
    ],
  },
  {
    id: 'apple-contractor',
    role: 'Independent Contractor',
    company: 'Apple (via Softzino Technologies)',
    period: 'Jan 2021 - Feb 2022',
    location: 'Dhaka, Bangladesh / Global',
    type: 'Contract',
    techStack: ['PHP', 'Laravel', 'Vue.js', 'MongoDB', 'MySQL', 'Docker', 'AWS'],
    highlights: [
      'Worked as an Independent Contractor on an internal Apple Store Management system.',
      'Contributed to internal store management workflows supporting employee supply requests and fulfillment operations.',
      'Engineered business logic for product request verification, inventory availability, and internal fulfillment processes.',
      'Upheld enterprise-grade coding standards, automated tests, and strict reliability compliance.',
    ],
  },
  {
    id: 'skylarksoft',
    role: 'Technical Team Lead / Senior Software Engineer',
    company: 'Skylarksoft Ltd.',
    period: 'Feb 2018 - Dec 2020',
    location: 'Dhaka, Bangladesh',
    type: 'Leadership',
    techStack: ['PHP', 'Laravel', 'Vue.js', 'React.js', 'MongoDB', 'MySQL', 'Redis', 'Table Partitioning', 'Linode'],
    highlights: [
      'Led a 5-member engineering team delivering a comprehensive industrial Garments ERP platform.',
      'Engineered 12+ manufacturing modules: Merchandising, Costing, Inventory, Textile, Cutting, Printing, Sewing, and Shipment.',
      'Supercharged heavy reporting queries using table partitioning, composite indexing, and denormalized summary views.',
      'Offloaded compute-heavy operations to Redis queue background workers, eliminating server timeouts.',
      'Managed Linode production servers ensuring zero disruption during factory operation shifts.',
    ],
  },
  {
    id: 'bluescheme',
    role: 'Software Engineer',
    company: 'BlueScheme Ltd.',
    period: 'Nov 2015 - Jan 2018',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    techStack: ['PHP', 'Laravel', 'Vue.js', 'MongoDB', 'MySQL', 'JavaScript'],
    highlights: [
      'Developed an Online Higher Education Management System powering admissions, course registrations, and online exams.',
      'Engineered automated academic results processing, GPA/CGPA calculations, and student attendance tracking.',
      'Collaborated on core business logic workflows and institutional reporting.',
    ],
  },
  {
    id: 'abhworld',
    role: 'Software Engineer',
    company: 'ABH World',
    period: 'Mar 2014 - Oct 2015',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    techStack: ['PHP', 'CodeIgniter', 'JavaScript', 'jQuery', 'MySQL'],
    highlights: [
      'Built and maintained features for commercial eCommerce platforms and student billing systems.',
      'Wrote transactional SQL queries and automated invoicing ledgers.',
      'Developed frontend interactive widgets with jQuery and JavaScript.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Backend & APIs',
    description: 'Enterprise PHP, Node.js, and high-performance microservices',
    icon: 'Server',
    skills: [
      { name: 'Laravel (PHP 8.x)', level: 95, highlight: '10+ years production' },
      { name: 'NestJS & Node.js', level: 90, highlight: 'Enterprise APIs & microservices' },
      { name: 'RESTful API Architecture', level: 96, highlight: 'Clean, documented, versioned' },
      { name: 'Webhooks & Event Sync', level: 92, highlight: 'Shopify, ShipStation, Stripe' },
      { name: 'Microservices & SOA', level: 88, highlight: 'Decoupled domain architectures' },
      { name: 'OOP, SOLID & Design Patterns', level: 95, highlight: 'Enterprise maintainability' },
    ],
  },
  {
    title: 'Frontend & UI Architecture',
    description: 'Reactive, accessible, and fast component-driven interfaces',
    icon: 'Layout',
    skills: [
      { name: 'React.js', level: 92, highlight: 'Hooks, Context, State Management' },
      { name: 'Next.js', level: 86, highlight: 'SSR, SSG, App Router' },
      { name: 'TypeScript & ES6+', level: 90, highlight: 'Strict typing, robust code' },
      { name: 'Vue.js', level: 85, highlight: 'Vue 2/3, Options & Composition API' },
      { name: 'Modern CSS & Design Systems', level: 90, highlight: 'Responsive, Glassmorphism' },
      { name: 'jQuery & Vanilla JS', level: 94, highlight: 'Deep DOM fundamentals' },
    ],
  },
  {
    title: 'Databases, Caching & Queues',
    description: 'Relational, NoSQL, and high-volume data performance engineering',
    icon: 'Database',
    skills: [
      { name: 'MySQL Optimization', level: 96, highlight: 'Indexing, Partitioning, Query tuning' },
      { name: 'MongoDB', level: 88, highlight: 'Document aggregation & schemas' },
      { name: 'PostgreSQL', level: 85, highlight: 'ACID, complex queries, JSONB' },
      { name: 'Redis (Caching & Queues)', level: 92, highlight: 'High-speed caching & background jobs' },
      { name: 'RabbitMQ & Kafka', level: 82, highlight: 'Distributed messaging queues' },
      { name: 'Table Partitioning & Views', level: 94, highlight: 'Millions of records handled' },
    ],
  },
  {
    title: 'Cloud, DevOps & Infrastructure',
    description: 'Containerization, continuous delivery, and AWS architectures',
    icon: 'Cloud',
    skills: [
      { name: 'AWS (EC2, S3, RDS, ALB)', level: 90, highlight: 'High-availability infrastructure' },
      { name: 'Docker & Docker Compose', level: 92, highlight: 'Consistent multi-env containerization' },
      { name: 'CI/CD (GitHub Actions, DeployHQ)', level: 88, highlight: 'Automated test & deploy pipelines' },
      { name: 'Dokploy & VPS Hosting', level: 86, highlight: 'Self-hosted PaaS & Linode' },
      { name: 'Linux / Bash Scripting', level: 88, highlight: 'Ubuntu server hardening & ops' },
      { name: 'Security & Webhook Integrity', level: 90, highlight: 'Signature checks, HMAC, JWT' },
    ],
  },
  {
    title: 'Engineering Leadership',
    description: 'Guiding squads, architectural decisions, and shipping on schedule',
    icon: 'Users',
    skills: [
      { name: 'Technical Team Leadership', level: 95, highlight: 'Led 4-5 member squads' },
      { name: 'System Design & Architecture', level: 94, highlight: 'End-to-end design & blueprints' },
      { name: 'Rigorous Code Review', level: 96, highlight: 'Standards, security & performance' },
      { name: 'Agile / Scrum Delivery', level: 92, highlight: 'Sprint planning & estimation' },
      { name: 'Engineer Mentorship', level: 94, highlight: 'Leveling up junior & mid developers' },
    ],
  },
  {
    title: 'AI-Assisted Development',
    description: 'Augmenting engineering velocity with modern AI tooling',
    icon: 'Cpu',
    skills: [
      { name: 'Claude & Gemini Advanced', level: 94, highlight: 'Architectural reasoning & refactoring' },
      { name: 'ChatGPT & OpenAI APIs', level: 94, highlight: 'Workflow automation & prototyping' },
      { name: 'GitHub Copilot', level: 92, highlight: 'Accelerated coding & unit testing' },
      { name: 'AI-Powered Code Analysis', level: 90, highlight: 'Static auditing & edge-case discovery' },
    ],
  },
];

export const EDUCATION = {
  degree: 'B.Sc. in Computer Science & Engineering',
  institution: 'Pabna University of Science and Technology',
  year: '2014',
  location: 'Pabna, Bangladesh',
  details: 'Comprehensive foundations in Algorithms, Data Structures, Database Systems, Software Engineering, and Operating Systems.',
};

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  • about         - View executive professional summary
  • skills        - View categorized core technical competencies
  • projects      - List major production enterprise systems
  • experience    - Show career timeline and leadership roles
  • contact       - Get direct phone, email, and social coordinates
  • stats         - Display key engineering numbers
  • clear         - Clear the terminal screen`,

  about: `Md. Mizanur Rahman
Senior Full Stack Software Engineer | Technical Lead
Location: Dhaka, Bangladesh
Experience: 12+ years in production enterprise systems
Specialization: High-throughput backend architectures, eCommerce APIs, Healthcare ERPs, and full-stack React applications.`,

  skills: `Core Competencies:
- Backend: Laravel, NestJS, Node.js, PHP 8, REST APIs, Microservices, Webhooks
- Frontend: React.js, Next.js, Vue.js, TypeScript, Modern CSS
- Databases & Caching: MySQL (Partitioning/Indexing), MongoDB, PostgreSQL, Redis
- Cloud & DevOps: AWS (EC2, S3, RDS), Docker, GitHub Actions, DeployHQ, Dokploy
- Engineering: System Design, SOLID, Team Leadership, Code Reviews`,

  projects: `Selected Enterprise Platforms:
1. Ethos Merch (Clicko Digital) - US B2B/B2C Custom Merch [Laravel, NestJS, React, AWS, Docker]
2. Doctor Appointment & ePrescription (iHealthScreen) [NestJS, React, MongoDB, MySQL, AWS]
3. Apple Store Management System (Contractor via Softzino) [Laravel, Vue, Docker, AWS]
4. Garments ERP Platform (Skylarksoft Ltd) [Laravel, Vue, React, MySQL Partitioning, Redis]
5. Higher Education Management System (BlueScheme Ltd) [Laravel, Vue, MySQL]`,

  experience: `Career Progression (12+ Years):
• Clicko Digital - Senior Full Stack Developer & Tech Lead (2025 - Present)
• iHealthScreen Bangladesh Ltd. - Senior Software Engineer (2022 - 2025)
• Apple (Contractor) - Full Stack Engineer (2021 - 2022)
• Skylarksoft Ltd. - Technical Team Lead / Senior Software Engineer (2018 - 2020)
• BlueScheme Ltd. - Software Engineer (2015 - 2018)
• ABH World - Software Engineer (2014 - 2015)`,

  contact: `Direct Coordinates:
• Email:    mizanur09014@gmail.com
• Phone:    +880 1733714009
• WhatsApp: https://wa.me/8801733714009
• LinkedIn: https://linkedin.com/in/mizanur-rahman-289987b8
• GitHub:   https://github.com/mizanur090148
• Location: Dhaka, Bangladesh (UTC+6)`,

  stats: `Production Engineering Metrics:
• 12+ Years Production Experience
• 6+ Major Enterprise Applications
• 10+ Engineers Led & Mentored
• 99.9% Production High Availability
• Millions of database records indexed & partitioned`,
};
