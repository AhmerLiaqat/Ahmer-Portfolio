// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Ahmer Liaqat',
  location: 'Islamabad, Pakistan',
  status: 'Open to opportunities',
  email: 'ahmirliaqat986@gmail.com',
  phone: '+92 310 5318980',
  github: 'https://github.com/AhmerLiaqat',
  githubLabel: 'github.com/AhmerLiaqat',
  linkedin: 'https://www.linkedin.com/in/ahmer-liaqat-02b280274/',
  linkedinLabel: 'in/ahmer-liaqat',
}

export const stackCards = [
  {
    tag: '.NET 8',
    title: 'ASP.NET Core Web API',
    text: 'New REST APIs with JWT and permission-based auth, FluentValidation, EF Core and clean, hexagonal architecture.',
  },
  {
    tag: 'Web applications',
    title: 'ASP.NET MVC',
    text: 'Controllers, views and business features such as feedback and call recordings in production web applications.',
  },
  {
    tag: '.NET Framework 4.6.1',
    title: 'ASP.NET Web API',
    text: 'Maintaining legacy services with EF6 EDMX models, Hangfire jobs, SMS integrations and IIS deployments.',
  },
]

export const facts = [
  { n: '2+', l: 'years professional .NET' },
  { n: '6', l: 'backend projects shipped' },
  { n: 'AZ‑900', l: 'Microsoft certified' },
]

export const experience = [
  {
    when: 'Jan 2025 – Present',
    current: true,
    title: 'ASP.NET Core API Developer',
    org: 'TEO International',
    points: [
      'Develop and maintain REST APIs using ASP.NET Core and .NET 8.',
      'Maintain legacy ASP.NET MVC and Web API applications targeting .NET Framework 4.6.1.',
      'Apply Hexagonal Architecture and the Repository Pattern for maintainable, testable code.',
      'Work with Entity Framework, EDMX models and SQL Server; optimize database queries for performance.',
      'Implement background processing with Hangfire and integrate external APIs and SMS services.',
      'Build business features including feedback, call recordings and module-level API endpoints.',
      'Implement request logging with browser and client metadata capture.',
      'Implement validation, authentication, authorization and unit tests.',
      'Troubleshoot IIS deployments, CORS issues, authentication errors and production assembly-version mismatches.',
    ],
  },
  {
    when: 'May 2024 – Dec 2024',
    title: '.NET Developer',
    org: 'Now Software',
    points: [
      'Developed RESTful APIs using ASP.NET Core.',
      'Implemented backend business logic and data access using Entity Framework and Dapper with SQL Server.',
    ],
  },
]

export const projects = [
  {
    verb: 'GET',
    route: '/projects/tolkdanmark',
    title: 'TolkDanmark Platform',
    wide: true,
    url: 'https://www.tolkdanmark.dk/',
    linkLabel: 'Visit tolkdanmark.dk',
    summary: 'Interpreter-booking and business management platform running in production on IIS.',
    points: [
      'Implemented Hangfire background jobs and LinkMobility SMS integration.',
      'Built feedback and recording features (MVC and Web API) and new .NET 8 API endpoints for a business module.',
      'Added request logging with browser and client metadata.',
      'Resolved IIS deployment issues involving CORS, authentication and assembly-version mismatches.',
    ],
    tags: ['C#', 'ASP.NET MVC', 'Web API', '.NET 8', '.NET Framework 4.6.1', 'Entity Framework', 'Hangfire'],
  },
  {
    verb: 'POST',
    route: '/projects/appraisal-system',
    title: 'Appraisal System API',
    summary: 'Employee appraisal Web API with secure, validated and tested services.',
    points: [
      'Permission-based authentication and authorization.',
      'FluentValidation and per-request logging.',
      'Excel export built with NPOI.',
      'Unit-tested services and optimized EF Core queries.',
    ],
    tags: ['ASP.NET Core Web API', 'EF Core', 'SQL Server', 'FluentValidation', 'NPOI'],
  },
  {
    verb: 'PUT',
    route: '/projects/stonebpo-crm',
    title: 'StoneBPO CRM',
    url: 'https://crm.stonebpo.com/login',
    linkLabel: 'Visit StoneBPO CRM',
    summary: 'CRM for BPO operations. I owned requirements, backend implementation, integration and deployment.',
    points: [
      'Role-based workflows for Fronter, Verifier, Manager and Admin users.',
      'Lead management, search and team assignments.',
      'Refresh-token authentication and role-specific data access.',
      'Frontend, API and database deployed as separate tiers with independent environment configuration.',
    ],
    tags: ['.NET Core API', 'SQL Server', 'Refresh tokens'],
  },
  {
    verb: 'POST',
    route: '/projects/ccm-patient-connect',
    title: 'CCM Patient Connect',
    url: 'https://www.ccmpatientconnect.com/auth',
    linkLabel: 'Visit CCM Patient Connect',
    summary: 'Live patient-communication platform.',
    points: [
      'Integrated Stripe payments and Twilio messaging.',
      'Data access via the Repository Pattern with LINQ and EF Core on SQL Server.',
    ],
    tags: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Stripe', 'Twilio', 'LINQ'],
  },
  {
    verb: 'GET',
    route: '/projects/talk-home',
    title: 'Talk Home Mobile APIs',
    url: 'https://mobile.talk-home.com/',
    linkLabel: 'Visit Talk Home',
    summary: 'Backend APIs serving the live Talk Home mobile application.',
    points: ['Developed .NET Core REST API endpoints consumed by the production mobile app.'],
    tags: ['.NET Core', 'REST APIs'],
  },
  {
    verb: 'GET',
    route: '/projects/zarwo-ecommerce',
    title: 'Zarwo E-commerce API',
    wide: true,
    summary: 'REST API for an e-commerce application, covering product, order and user endpoints.',
    points: [],
    tags: ['C#', '.NET', 'REST APIs'],
  },
]

export const skills = [
  { group: 'Languages', items: ['C#', 'SQL', 'LINQ'] },
  { group: 'Frameworks', items: ['ASP.NET Core Web API', '.NET 8', 'ASP.NET MVC', 'ASP.NET Web API', '.NET Framework 4.6.1'] },
  { group: 'Data access', items: ['Entity Framework Core', 'EF 6 (EDMX)', 'Dapper', 'EF Migrations'] },
  { group: 'Architecture', items: ['Hexagonal Architecture', 'Clean Architecture', 'Repository Pattern', 'RESTful API Design'] },
  { group: 'Security', items: ['JWT Authentication', 'Role-Based Authorization', 'Permission-Based Authorization', 'Refresh Tokens'] },
  { group: 'Backend libraries', items: ['Hangfire', 'FluentValidation', 'NPOI', 'Unit Testing'] },
  { group: 'Databases', items: ['SQL Server', 'Relational Design', 'Query Optimization', 'SQL Troubleshooting'] },
  { group: 'Integrations', items: ['Stripe', 'Twilio', 'LinkMobility SMS', 'Third-Party REST APIs'] },
  { group: 'Deployment & DevOps', items: ['IIS', 'Environment Config', 'CORS', 'Git / GitHub', 'Azure DevOps', 'NuGet'] },
  { group: 'Cloud & AI', items: ['Microsoft Azure', 'Azure OpenAI', 'Azure Speech', 'GitHub Copilot'] },
  { group: 'Tools', items: ['Visual Studio', 'VS Code', 'Postman'] },
]

export const certifications = [
  { badge: 'AZ-900', title: 'Azure Fundamentals', issuer: 'Microsoft Certified', year: 'Oct 2026' },
  { title: 'GitHub Copilot Fundamentals, Parts 1 & 2', issuer: 'Microsoft Learn' },
  { title: 'Accelerate App Development with GitHub Copilot', issuer: 'Microsoft Learn' },
]

export const education = [
  { title: 'BS Information Technology', place: 'Arid Agriculture University, Rawalpindi', year: '2019 – 2023' },
  { title: 'Intermediate (F.Sc)', place: 'Islamabad Model Postgraduate College, H-8/2', year: '2016 – 2018' },
]
