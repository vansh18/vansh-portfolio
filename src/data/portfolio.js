export const profile = {
  name: "Vansh Gupta",
  role: "GenAI Engineer · Full-Stack Developer",
  tagline:
    "I build intelligent systems using LLMs, RAG, multi-agent workflows, and modern web technologies.",
  status: "Open to new opportunities",
  email: "vansh.gupta850@gmail.com",
  github: "https://github.com/vansh18",
  linkedin: "https://www.linkedin.com/in/vansh-gupta-1557ab1ba/",
  resumeUrl: "/Resume.pdf",
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Flagship GenAI projects — add each project's GitHub repo or live demo URL
// below; the "Go to project" link on its card only appears once `url` is set.
export const projects = [
  {
    id: "vrag",
    name: "V-RAG",
    subtitle: "Verified Retrieval-Augmented Generation",
    date: "August 2026",
    featured: true,
    url: "https://github.com/vansh18/V-RAG",
    stack: ["Python", "LangChain", "LangGraph", "LangSmith", "OpenAI", "Chroma", "Pydantic"],
    description:
      "A multi-agent RAG system for evidence-grounded question answering over a local legal document corpus.",
    points: [
      "Responder, Prosecutor, Investigation, and Judge agents that check claims against retrieved evidence",
      "Detects unsupported claims and iteratively revises responses before they reach the user",
      "Case-level metadata enrichment improves retrieval targeting",
      "Improved target-chunk retrieval rank from 45 to 1",
      "Streamlit interface for interactive querying",
      "LangSmith observability across the agent graph",
    ],
  },
  {
    id: "compliance-agent",
    name: "Compliance Agent",
    subtitle: "Intelligent Document Compliance & Automation Agent",
    date: "May 2025",
    url: "https://github.com/vansh18/intelligent-doc-compliance-agent",
    stack: ["Python", "LangChain", "Gemini API", "PostgreSQL", "OCR", "PDF Parsing"],
    description:
      "An AI-powered document intelligence system that reasons across structured and unstructured documents for regulatory compliance.",
    points: [
      "OCR-based document ingestion and PDF parsing",
      "Multi-step reasoning with rule-based filtering",
      "Entity extraction and multi-document correlation",
    ],
  },
];

// Additional (paid, client) work — lighter-weight cards with an image gallery.
// Screenshots live in public/work/<id>/1.png, 2.png, … — imageCount below
// must match how many files are actually in each folder.
export const additionalWork = [
  {
    id: "mmaboxing",
    name: "MMABOXING",
    tagline: "Sports Website",
    paid: true,
    description:
      "A combat-sports website designed to present MMA and boxing content with strong visuals, quick browsing, and a bold identity for fight fans.",
    tags: ["Sports Website", "Content UI", "Responsive Design"],
    imageCount: 8,
    imageExt: "png",
  },
  {
    id: "aseries-dms",
    name: "Aseries Document Management System",
    tagline: "Business System",
    paid: true,
    description:
      "A workflow-focused platform for organizing documents, tracking records, and helping teams find important information faster.",
    tags: ["Business System", "File Workflows", "Admin Interface"],
    imageCount: 15,
    imageExt: "jpeg",
  },
  {
    id: "flaseq",
    name: "Flaseq Clothing",
    tagline: "E-Commerce",
    paid: true,
    description:
      "A fashion e-commerce experience built around clean product presentation, smooth browsing, and a storefront that supports brand discovery.",
    tags: ["E-Commerce", "Fashion Brand", "Storefront UI"],
    imageCount: 9,
    imageExt: "png",
  },
];

export const skillGroups = [
  {
    label: "AI / GenAI",
    skills: [
      "Python",
      "PyTorch",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "LLMs",
      "RAG",
      "Deep Learning",
      "Scikit-learn",
      "Pandas",
    ],
  },
  {
    label: "Development",
    skills: ["JavaScript", "React.js", "Node.js", "REST APIs", "HTML5", "CSS"],
  },
  {
    label: "Data & Infrastructure",
    skills: ["SQL", "PostgreSQL", "MySQL", "Chroma", "Pydantic"],
  },
  {
    label: "AI Platforms & Tools",
    skills: ["OpenAI", "Gemini", "OCR", "PDF Processing", "Git", "GitHub", "Postman"],
  },
];

export const achievements = [
  {
    name: "NASA International Space Apps Challenge",
    result: "UAE Winner · Global Nominee",
  },
  {
    name: "Emirati Sign Language Project",
    result: "2nd Place · ₹2,000 Prize",
  },
  {
    name: "ACM-CIIED University Ideathon",
    result: "Winner · ₹500 Prize",
  },
  {
    name: "RIFT CTF",
    result: "3rd Place · Google Developer Groups 2025",
  },
  {
    name: "Exploit3rs CTF",
    result: "5th Rank · 120 Teams",
  },
  {
    name: "BITS Pilani Postman API Hackathon",
    result: "9th Rank · 2,300 Participants",
  },
];
