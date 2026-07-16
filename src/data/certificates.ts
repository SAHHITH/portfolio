export interface Certificate {
  id: string;
  slug: string;
  title: string;
  issuer: string;
  issueDate: string;
  skills: string;
  credentialId: string;
  credentialUrl: string;
  image: string;
  description: string;
}

export const certificates: Certificate[] = [
  {
    id: "quantium-data-analytics",
    slug: "quantium-data-analytics",
    title: "Quantium - Data Analytics Job Simulation",
    issuer: "Forage",
    issueDate: "July 2026",
    skills: "Analytical Skills",
    credentialId: "32A6DqtsbF7LbKdcq",
    credentialUrl: "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_6a44b85cf3ebbedb9598bca0_1783093286974_completion_certificate.pdf",
    image: "/images/forage.png",
    description: "In this comprehensive job simulation, I covered data analytics, business insights, customer behaviour analysis, and strategic decision making. The program involved hands-on practice with Excel, Python, SQL, and data visualization tools to translate complex datasets into actionable business strategies."
  },
  {
    id: "datacom-cloud",
    slug: "datacom-cloud",
    title: "Datacom - Introduction to Cloud Job Simulation",
    issuer: "Forage",
    issueDate: "July 2026",
    skills: "Cloud Computing",
    credentialId: "gCW7Xki5Y3vNpBmnn",
    credentialUrl: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/qsuRRyXDZ7Dj2QFx4_gCW7Xki5Y3vNpBmnn_6a44b85cf3ebbedb9598bca0_1782984339563_completion_certificate.pdf",
    image: "/images/forage.png",
    description: "This simulation provided hands-on experience in cloud computing principles, virtual machines, networking fundamentals, and deployment strategies. I gained practical knowledge of cloud infrastructure and how to design scalable architectures for modern applications."
  },
  {
    id: "tata-genai",
    slug: "tata-genai",
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    issueDate: "July 2026",
    skills: "Data Analysis",
    credentialId: "ifobHAoMjQs9s6bKS",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_6a44b85cf3ebbedb9598bca0_1782897138351_completion_certificate.pdf",
    image: "/images/forage.png",
    description: "I explored the intersection of generative AI and data analytics, learning how to leverage LLMs and prompt engineering to streamline AI workflows. The program focused on identifying and implementing high-impact business use cases for generative artificial intelligence."
  },
  {
    id: "tata-cybersecurity",
    slug: "tata-cybersecurity",
    title: "Tata - Cybersecurity Analyst Job Simulation",
    issuer: "Forage",
    issueDate: "July 2026",
    skills: "Critical Thinking",
    credentialId: "ifobHAoMjQs9s6bKS",
    credentialUrl: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_6a44b85cf3ebbedb9598bca0_1783328294324_completion_certificate.pdf",
    image: "/images/forage.png",
    description: "Through this simulation, I developed skills in identifying cyber threats, conducting rigorous risk assessment, and performing detailed security analysis. I also learned the foundational operations of a SOC (Security Operations Center) and critical incident response protocols."
  },
  {
    id: "deloitte-data-analytics",
    slug: "deloitte-data-analytics",
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    issueDate: "July 2026",
    skills: "Data Analytics",
    credentialId: "9PBTqmSxAf6zZTseP",
    credentialUrl: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_6a44b85cf3ebbedb9598bca0_1783326925291_completion_certificate.pdf",
    image: "/images/forage.png",
    description: "This program focused on advanced data analytics methodologies, professional dashboard creation, and impactful data visualization. I learned how to translate raw data into compelling business reporting that drives strategic decision-making at an enterprise level."
  },
  {
    id: "nvidia-jetson-nano",
    slug: "nvidia-jetson-nano",
    title: "Getting Started with AI on Jetson Nano",
    issuer: "NVIDIA",
    issueDate: "July 2026",
    skills: "Artificial Intelligence",
    credentialId: "ptXB9_FfTwSk7-5rhmksHA",
    credentialUrl: "https://learn.nvidia.com/certificates?id=ptXB9_FfTwSk7-5rhmksHA",
    image: "/images/nvidia.svg",
    description: "A foundational course in edge AI and computer vision. I learned the core concepts of embedded AI and gained hands-on experience with deep learning deployment directly onto edge devices using the NVIDIA Jetson Nano platform."
  },
  {
    id: "ai-devops-analyst",
    slug: "ai-devops-analyst",
    title: "AI DEVOPS ANALYST",
    issuer: "NASSCOM",
    issueDate: "July 2026",
    skills: "DevOps Foundations",
    credentialId: "2026070858910887",
    credentialUrl: "https://api-fe.skillindiadigital.gov.in/api/registry-course/getCertificatePresignedUrl/2026070858910887-6d136b29-9b3a-4b26-9d76-b05369cb648c",
    image: "/images/nasscom.svg",
    description: "This certification covered essential modern infrastructure practices including CI/CD pipelines, Docker containerization, Kubernetes orchestration, and core DevOps principles. It also provided a robust introduction to MLOps and scalable cloud deployment strategies for AI models."
  },
  {
    id: "linkedin-machine-learning",
    slug: "linkedin-machine-learning",
    title: "Artificial Intelligence Foundations: Machine Learning",
    issuer: "LinkedIn Learning",
    issueDate: "July 2026",
    skills: "Machine Learning",
    credentialId: "916040126f3d6dd8d130cf6b6ac45b97156291f2c72ffb4749f753e90dd8005c",
    credentialUrl: "https://www.linkedin.com/learning/certificates/916040126f3d6dd8d130cf6b6ac45b97156291f2c72ffb4749f753e90dd8005c?trk=share_certificate",
    image: "/images/linkedin.svg",
    description: "A comprehensive foundation in machine learning principles, algorithms, and applications. I explored supervised and unsupervised learning techniques, predictive modeling, and the core statistical concepts necessary for developing intelligent AI systems."
  }
];
