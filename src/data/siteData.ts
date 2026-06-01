export const company = {
  name: "Blue Haven Dreams Ltd.",
  shortDesc:
    "Residential Construction Management & Home Renovation Services in Calgary.",
  email: "Info@bluehavendreamsltd.com",
  website: "www.bluehavendreamsltd.com",
  address: "4026 8th ST SE, Calgary, AB T2G 3A7",
  serviceAreas: [
    "Calgary",
    "Airdrie",
    "Chestermere",
    "Cochrane",
    "Okotoks",
    "Surrounding Alberta Communities",
  ],
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Our Services",
    path: "/services",
    dropdown: [
      "Home Renovations",
      "Kitchen Renovations",
      "Bathroom Renovations",
      "Basement Development",
      "Secondary Suites",
      "Construction Management",
      "Custom Home Planning",
      "Infill Project Support",
      "Exterior Improvements",
    ],
  },
  {
    label: "Who We Serve",
    path: "/who-we-serve",
    dropdown: [
      "Homeowners",
      "Landlords",
      "Property Investors",
      "Families",
      "Small Residential Developers",
      "Calgary Communities",
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

export const services = [
  {
    slug: "home-renovations",
    title: "Home Renovations",
    desc: "Complete residential renovation services focused on improving home functionality, comfort, appearance and property value with organized planning, scheduling and subcontractor management across Calgary.",
    features: [
      "Interior Renovations",
      "Space Improvements",
      "Residential Upgrades",
      "Project Coordination",
      "Quality-Focused Execution",
    ],
  },
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    desc: "Modernize layouts, improve storage functionality and enhance everyday living spaces through organized construction management and quality workmanship coordination.",
    features: [
      "Kitchen Remodeling",
      "Cabinet & Layout Upgrades",
      "Modern Design Improvements",
      "Fixture Coordination",
      "Functional Space Planning",
    ],
  },
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    desc: "Bathroom renovation coordination designed to improve comfort, efficiency and visual appeal while maintaining organized construction planning and professional project management.",
    features: [
      "Bathroom Remodeling",
      "Fixture Installation Coordination",
      "Tile & Finish Improvements",
      "Space Optimization",
      "Residential Upgrade Solutions",
    ],
  },
  {
    slug: "basement-development",
    title: "Basement Development",
    desc: "Basement development and finishing services for homeowners seeking additional living space, family areas, rental potential or organized residential expansion projects.",
    features: [
      "Basement Finishing",
      "Additional Living Space",
      "Family Entertainment Areas",
      "Storage Optimization",
      "Residential Expansion Planning",
    ],
  },
  {
    slug: "secondary-suites",
    title: "Secondary Suites",
    desc: "Code-conscious secondary-suite projects designed to help homeowners and landlords create functional and compliant residential living spaces in Calgary.",
    features: [
      "Secondary-Suite Coordination",
      "Permit Support",
      "Residential Compliance Awareness",
      "Layout Planning",
      "Construction Coordination",
    ],
  },
  {
    slug: "construction-management",
    title: "Construction Management",
    desc: "Residential construction-management services focused on subcontractor coordination, scheduling, communication and organized project oversight.",
    features: [
      "Trade Coordination",
      "Scheduling Management",
      "Site Supervision",
      "Budget Awareness",
      "Organized Project Execution",
    ],
  },
  {
    slug: "custom-home-planning",
    title: "Custom Home Planning",
    desc: "Support for selected small custom-home projects with organized planning, residential coordination and customer-focused project management services.",
    features: [
      "Residential Planning Support",
      "Custom Layout Coordination",
      "Construction Scheduling",
      "Trade Coordination",
      "Project Communication",
    ],
  },
  {
    slug: "infill-project-support",
    title: "Infill Project Support",
    desc: "Organized support services for residential infill projects, helping property owners and small developers manage coordination, planning and construction execution.",
    features: [
      "Residential Infill Coordination",
      "Project Planning Support",
      "Site Coordination",
      "Residential Development Assistance",
      "Construction Oversight",
    ],
  },
  {
    slug: "exterior-improvements",
    title: "Exterior Improvements",
    desc: "Window, door, glazing and building-envelope coordination designed to improve residential appearance, energy efficiency and property durability.",
    features: [
      "Window Improvements",
      "Door Installation Coordination",
      "Exterior Finishing",
      "Building Envelope Support",
      "Residential Energy Efficiency",
    ],
  },
];

export const clients = [
  {
    slug: "homeowners",
    title: "Homeowners",
    desc: "Calgary homeowners seeking organized renovation, construction-management and home-improvement services to improve comfort, functionality and long-term property value.",
    services: [
      "Home Renovations",
      "Kitchen Renovations",
      "Bathroom Improvements",
      "Basement Development",
      "Exterior Improvements",
    ],
  },
  {
    slug: "landlords",
    title: "Landlords",
    desc: "Support for landlords requiring organized property improvement and secondary-suite coordination services for residential rental properties across Calgary.",
    services: [
      "Secondary Suites",
      "Basement Development",
      "Property Upgrades",
      "Residential Renovations",
      "Exterior Improvements",
    ],
  },
  {
    slug: "property-investors",
    title: "Property Investors",
    desc: "Organized construction-management support for renovation, improvement and housing upgrade projects, helping investors manage timelines and subcontractors efficiently.",
    services: [
      "Residential Renovations",
      "Infill Support",
      "Basement Development",
      "Construction Management",
      "Exterior Improvements",
    ],
  },
  {
    slug: "families",
    title: "Families",
    desc: "Helping Calgary families coordinate basement developments, renovations and organized home-improvement projects with clear communication and reliable planning.",
    services: [
      "Basement Development",
      "Home Renovations",
      "Kitchen Improvements",
      "Bathroom Renovations",
      "Residential Expansion Projects",
    ],
  },
  {
    slug: "small-residential-developers",
    title: "Small Residential Developers",
    desc: "Construction-management assistance for infill-related and small-scale housing projects, with organized coordination, scheduling support and oversight.",
    services: [
      "Infill Project Support",
      "Construction Management",
      "Residential Coordination",
      "Trade Scheduling",
      "Project Oversight",
    ],
  },
  {
    slug: "calgary-communities",
    title: "Calgary Communities",
    desc: "Committed to supporting Calgary residential communities through organized construction management, renovation services and responsible housing improvement projects.",
    services: [
      "Residential Renovations",
      "Housing Improvements",
      "Basement Development",
      "Exterior Upgrades",
      "Community Housing Support",
    ],
  },
];

export const process = [
  {
    step: 1,
    title: "Consultation & Project Discussion",
    desc: "Understanding your project goals, requirements and budget expectations.",
  },
  {
    step: 2,
    title: "Planning & Estimating",
    desc: "Project planning, trade coordination, scope development and budgeting.",
  },
  {
    step: 3,
    title: "Permits & Scheduling",
    desc: "Permit coordination, scheduling and organized project preparation.",
  },
  {
    step: 4,
    title: "Construction Execution",
    desc: "Professional subcontractor coordination, site supervision and quality control.",
  },
  {
    step: 5,
    title: "Final Inspection & Handover",
    desc: "Project review, deficiency management and final client walkthrough.",
  },
];

export const whyChooseUs = [
  {
    title: "Organized Project Planning",
    desc: "Structured project coordination focused on timelines, budgeting and clear communication.",
  },
  {
    title: "Safety-Focused Operations",
    desc: "Commitment to job-site safety, qualified subcontractors and responsible construction practices.",
  },
  {
    title: "Transparent Communication",
    desc: "Written scopes, updates and customer communication throughout every stage of the project.",
  },
  {
    title: "Quality Control",
    desc: "Inspection-focused project management with attention to workmanship and finishing standards.",
  },
  {
    title: "Local Calgary Focus",
    desc: "Supporting Calgary homeowners, suppliers, trades and residential communities.",
  },
  {
    title: "Customer-Oriented Service",
    desc: "Professional and practical construction solutions tailored to each client's needs and budget.",
  },
];
