export const personalInfo = {
  name: "Aswathi A",
  role: "React JS Developer",
  experienceYears: "4+",
  tagline: "Building responsive, scalable and user-focused web experiences.",
  email: "aswathialambadan@gmail.com",
  phone: "8848054639",
  location: "Malappuram, Kerala, India",
  linkedin: "https://linkedin.com/in/aswathi-a",
  linkedinDisplay: "linkedin.com/in/aswathi-a",
  githubPlaceholder: "https://github.com/aswathialambadan",
  summary:
    "An enthusiastic and detail-oriented React.js Developer with four years of experience specializing in dynamic and responsive web applications using React. Experienced with HTML, CSS, JavaScript, Material UI, state management, complex API integrations, scalable frontend solutions, performance optimization, and AI-assisted development.",
  shortBio:
    "I specialize in architecting high-performance React.js applications, complex REST API integrations, state management systems, e-commerce platforms, responsive dashboards, and modern frontend solutions.",
  goalStatement:
    "She doesn't just write React code — she builds complete, scalable frontend experiences.",
  specialties: [
    "React.js Development",
    "Responsive Web Applications",
    "REST API Integration",
    "State Management (Redux & Context)",
    "E-Commerce Systems",
    "Dashboard Architecture",
    "JWT Authentication",
    "Payment Gateway Integrations",
    "Performance Optimization",
    "AI-Assisted Development"
  ]
};

export const heroFloatingBadges = [
  { name: "React", icon: "⚛️", color: "#61dafb" },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e" },
  { name: "REST API", icon: "🔌", color: "#10b981" },
  { name: "Redux", icon: "🔮", color: "#764abc" },
  { name: "Material UI", icon: "🎨", color: "#007fff" },
  { name: "Git", icon: "🌿", color: "#f05032" }
];

export const experienceData = [
  {
    id: "bpract",
    company: "Bpract Software Solutions LLP",
    role: "React JS Developer",
    period: "05/2022 – Present",
    location: "Kozhikode, Kerala, India",
    description:
      "Leading frontend development initiatives, constructing complex web applications with React.js, implementing scalable state management architectures, integrating RESTful APIs, and optimizing application performance across web platforms.",
    highlights: [
      "Engineered scalable React.js architectures for enterprise clients",
      "Designed and integrated complex RESTful API workflows and payment gateways",
      "Implemented state management solutions using Redux and Context API",
      "Optimized web application performance, accessibility, and cross-browser responsiveness",
      "Leveraged AI-assisted development tools to streamline code generation and debugging"
    ]
  }
];

export const projectsData = [
  {
    id: "mlm-software",
    title: "MLM Software Platform",
    category: "Enterprise Web Application",
    shortDescription:
      "A comprehensive multi-level marketing platform featuring multi-tier commission structures, affiliate referral tracking, real-time user earnings dashboards, JWT authentication, and MetaMask Web3 cryptocurrency payouts.",
    technologies: [
      "React.js",
      "React Router DOM",
      "REST APIs",
      "React Hooks",
      "Context API",
      "Redux",
      "JWT",
      "Material UI",
      "React Hook Form",
      "Yup",
      "MetaMask"
    ],
    features: [
      "Responsive React components & seamless application routing",
      "REST API integration for dynamic MLM plan and product listings",
      "Robust state management with Redux & Context API",
      "Affiliate marketing functionality & multi-tier referral tracking",
      "Calculates multi-tier commissions & user earnings dynamically",
      "JWT-based user authentication & authorization",
      "MetaMask integration for cryptocurrency payouts & wallet management",
      "Comprehensive affiliate dashboards & commission history logs",
      "Multi-gateway payment integrations & performance optimization"
    ],
    caseStudyCards: [
      {
        title: "Affiliate Management",
        icon: "👥",
        desc: "Hierarchical user tree visualization, referral link generators, and multi-level team structure management."
      },
      {
        title: "Wallet & Payments",
        icon: "💳",
        desc: "Dual fiat payment gateway and MetaMask crypto payout engine supporting automated earnings withdrawals."
      },
      {
        title: "Referral Tracking",
        icon: "🔗",
        desc: "Real-time click-through attribution, conversion metrics, and direct sponsor commission tracking."
      },
      {
        title: "Performance Dashboard",
        icon: "📊",
        desc: "Interactive analytics displaying rank achievements, team volume, daily earnings, and payout logs."
      },
      {
        title: "Authentication",
        icon: "🔐",
        desc: "Secure JWT token authentication with automated refresh cycles and protected route guards."
      }
    ],
    mockType: "mlm"
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Full-Featured Web Storefront",
    shortDescription:
      "A scalable e-commerce application equipped with dynamic product listing, advanced filtering/sorting, real-time shopping cart calculation, multi-currency payment checkout, and an admin suite for coupon and metadata management.",
    technologies: [
      "React.js",
      "Redux",
      "Context API",
      "Axios",
      "Postman",
      "Stripe",
      "PayPal"
    ],
    features: [
      "Dynamic product catalog with multi-category filtering and sorting",
      "Real-time reactive shopping cart with instant total calculations",
      "Stripe and PayPal payment gateway integrations",
      "Internal wallet balance purchases and checkout options",
      "Admin catalog management for adding, editing, and managing products",
      "Flexible coupon & promotional discount configuration",
      "SEO metadata management for enhanced search visibility",
      "Postman API contract testing and robust Axios HTTP handling"
    ],
    caseStudyCards: [
      {
        title: "Product Listing & Filtering",
        icon: "🛍️",
        desc: "Instant client-side filter by category, price range, and multi-criteria sorting."
      },
      {
        title: "Real-Time Cart Engine",
        icon: "🛒",
        desc: "Redux-backed cart state recalculating subtotal, taxes, shipping, and coupon discounts instantly."
      },
      {
        title: "Checkout & Payments",
        icon: "💳",
        desc: "Integrated Stripe & PayPal payment flows alongside internal wallet balance transactions."
      },
      {
        title: "Admin Suite",
        icon: "⚙️",
        desc: "Admin portal for managing product catalog, configuring discount coupons, and setting SEO tags."
      }
    ],
    mockType: "ecommerce"
  },
  {
    id: "crm-system",
    title: "Enterprise CRM System",
    category: "Business Automation & Analytics",
    shortDescription:
      "An end-to-end customer relationship management platform featuring responsive metric dashboards, automated ticket routing, role-based sub-admin access control, customer activity logs, and an integrated internal messaging system.",
    technologies: [
      "React.js",
      "Redux",
      "RESTful APIs",
      "Material UI",
      "Axios",
      "Postman",
      "JWT"
    ],
    features: [
      "Customer relationship management interfaces & customer profiles",
      "Responsive analytics dashboards for real-time sales and activity metrics",
      "Comprehensive customer data tracking and interaction history logs",
      "Sales pipeline tracking & workflow automation triggers",
      "Built-in internal mail & communication dispatch system",
      "Integrated ticketing system for customer support issue management",
      "Granular role management (Admin / Sub-admin / Standard User access controls)",
      "High-density data tables with sorting, searching, and export capabilities"
    ],
    caseStudyCards: [
      {
        title: "Customer Profiles",
        icon: "👤",
        desc: "360-degree view of customer details, deal status, interaction history, and contact logs."
      },
      {
        title: "Sales Metrics",
        icon: "📈",
        desc: "Visual charts and revenue projections tracking conversion rates and pipeline velocity."
      },
      {
        title: "Support Ticketing",
        icon: "🎫",
        desc: "Issue tracking module with status tags, priority assignment, and resolution SLA timers."
      },
      {
        title: "Workflow Automation",
        icon: "⚡",
        desc: "Trigger-based lead assignment, email notifications, and task status updates."
      },
      {
        title: "User Access Roles",
        icon: "🛡️",
        desc: "Hierarchical permissions matrix enforcing Admin, Sub-admin, and Staff data boundaries."
      }
    ],
    mockType: "crm"
  },
  {
    id: "home-management",
    title: "HomeManager Platform",
    category: "SaaS & AI Home Assistant",
    liveUrl: "https://home-mangement-theta.vercel.app/",
    shortDescription:
      "A modern home management system featuring personal digital AI assistant, household expense tracking, scheduled maintenance manager, appliance warranty tracking, and secure document vault.",
    technologies: [
      "React.js",
      "JavaScript ES6+",
      "RESTful APIs",
      "Context API",
      "Generative AI",
      "Modern CSS",
      "Axios",
      "Vercel Deployment"
    ],
    features: [
      "Personal digital home AI assistant integration for instant household query resolution",
      "Household expense tracking & budget analytics visualizations",
      "Scheduled home maintenance task manager & automated service reminders",
      "Appliance warranty tracker & expiration date logging system",
      "Secure digital document vault for property deeds, warranties, and utility contracts",
      "Deployed and accessible live web application hosted on Vercel"
    ],
    caseStudyCards: [
      {
        title: "Home AI Assistant",
        icon: "🤖",
        desc: "Generative AI powered home assistant helping with maintenance tips, household budgeting & task automation."
      },
      {
        title: "Expense & Budget Tracker",
        icon: "💰",
        desc: "Real-time household expenditure logs, category breakdowns, and monthly financial summaries."
      },
      {
        title: "Maintenance & Warranties",
        icon: "🛠️",
        desc: "Automated appliance warranty tracking, service reminder alerts, and scheduled maintenance checklists."
      },
      {
        title: "Document Vault",
        icon: "📁",
        desc: "Centralized digital storage for property deeds, appliance manuals, utility contracts, and receipts."
      }
    ],
    mockType: "homemanager"
  }
];

export const skillsCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "⚛️",
    skills: [
      "React.js",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Responsive Web Design"
    ]
  },
  {
    id: "ui-styling",
    title: "UI & Styling",
    icon: "🎨",
    skills: [
      "Material UI (MUI)",
      "Modern CSS",
      "Component-Based UI Development"
    ]
  },
  {
    id: "state-mgmt",
    title: "State Management",
    icon: "🔮",
    skills: [
      "Redux",
      "Context API"
    ]
  },
  {
    id: "backend-api",
    title: "Backend & APIs",
    icon: "🔌",
    skills: [
      "Laravel",
      "RESTful APIs",
      "API Integration",
      "API Testing",
      "Postman",
      "API Debugging"
    ]
  },
  {
    id: "version-control",
    title: "Version Control",
    icon: "🌿",
    skills: [
      "Git",
      "GitHub"
    ]
  },
  {
    id: "ai-dev",
    title: "AI-Assisted Development",
    icon: "🤖",
    skills: [
      "ChatGPT",
      "Claude",
      "OpenAI Codex",
      "Google Antigravity",
      "Prompt Engineering",
      "AI-Assisted Code Generation",
      "Debugging",
      "Generative AI Tools",
      "AI Coding Assistants"
    ]
  },
  {
    id: "practices",
    title: "Development Practices",
    icon: "✨",
    skills: [
      "Reusable Components",
      "Clean Code",
      "Performance Optimization",
      "Cross-Browser Compatibility"
    ]
  }
];

export const howIBuildSteps = [
  {
    step: "01",
    title: "Understand",
    description: "Analyze project requirements, target user workflows, and technical constraints to establish a clear architectural roadmap."
  },
  {
    step: "02",
    title: "Design",
    description: "Construct responsive layout structures, component hierarchies, and intuitive UI interactions focused on user experience."
  },
  {
    step: "03",
    title: "Develop",
    description: "Build clean, reusable React components, custom hooks, and robust client side application logic following best practices."
  },
  {
    step: "04",
    title: "Integrate",
    description: "Connect REST APIs, JWT authentication, payment gateways, and external Web3/Crypto services with reliable state synchronization."
  },
  {
    step: "05",
    title: "Test",
    description: "Validate API payloads, edge cases, and UI behavior using Postman, browser dev tools, and systematic debugging workflows."
  },
  {
    step: "06",
    title: "Optimize",
    description: "Refine performance metrics, minimize re-renders, optimize CSS styling, and verify seamless cross-browser responsiveness."
  }
];

export const aiDevelopmentInfo = {
  title: "Modern Development with AI",
  description:
    "Aswathi integrates cutting-edge AI-assisted development tools into her daily workflow to boost productivity, accelerate component prototyping, automate debugging, and enhance prompt engineering accuracy.",
  highlights: [
    {
      title: "Code Generation",
      desc: "Accelerates repetitive boilerplate creation, complex math logic, and component layouts."
    },
    {
      title: "Intelligent Debugging",
      desc: "Rapidly diagnoses stack trace errors, async edge-cases, and state sync bottlenecks."
    },
    {
      title: "Development Assistance",
      desc: "Refines code refactoring, document structuring, and type safety constraints."
    },
    {
      title: "Prompt Engineering",
      desc: "Crafts precise contextual prompts for optimal AI model suggestions and clean code output."
    },
    {
      title: "Generative AI Workflows",
      desc: "Seamlessly blends AI tools into modern IDEs to maintain high software delivery velocity."
    }
  ],
  tools: [
    { name: "ChatGPT", role: "Logic & Code Architecture", icon: "💬" },
    { name: "Claude", role: "Refactoring & Complex Reasoning", icon: "🧠" },
    { name: "OpenAI Codex", role: "Code Autocomplete & Snippets", icon: "⚡" },
    { name: "Google Antigravity", role: "Autonomous Agentic IDE & Pair Programmer", icon: "🚀" }
  ]
};

export const educationData = [
  {
    degree: "MSc Computer Science",
    institution: "CCST Malappuram (Calicut University)",
    period: "2019 – 2021",
    location: "Malappuram, Kerala, India"
  },
  {
    degree: "BSc Computer Science",
    institution: "IHRD Malappuram",
    period: "2016 – 2019",
    location: "Malappuram, Kerala, India"
  }
];

export const professionalSkills = [
  { name: "Problem Solving", icon: "🧩", desc: "Deconstructing complex frontend issues into modular solutions." },
  { name: "Analytical Thinking", icon: "💡", desc: "Evaluating trade-offs in state management, data structures & performance." },
  { name: "Attention to Detail", icon: "👁️", desc: "Ensuring pixel-perfect UI implementation and edge-case handling." },
  { name: "Team Collaboration", icon: "🤝", desc: "Partnering effectively with backend engineers, designers, and stakeholders." },
  { name: "Effective Communication", icon: "💬", desc: "Articulating technical concepts and architectural decisions clearly." },
  { name: "Adaptability", icon: "🔄", desc: "Continuously mastering emerging web standards and AI tools." }
];
