export const personalInfo = {
  name: 'Kamakhya Anupam Sharma',
  location: 'Bengaluru, India',
  phone: '+91 9380650261',
  email: 'kanupsharmaprofessional@gmail.com',
  linkedin: 'kamakhya-anupam-sharma',
  github: 'uchiha-sasuke-03',
  roles: ['AI & ML Engineer', 'Full Stack Developer', 'Cybersecurity Enthusiast', 'IoT Innovator'],
  summary:
    'Ambitious Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning with a proven track record in AI-First development and Cybersecurity. Demonstrated expertise through high-impact projects like VidhiAI: a RAG-based legal assistant and aidAR: an AR + AI Enabled Medical Intelligence System. Industry-certified in Oracle Cloud Infrastructure (AI), Ethical Hacking (NPTEL Elite) and AI Accelerated Coding, with a deep technical focus on agentic workflows and digital asset protection. A competitive high-performer (JEE/COMEDK qualifier) passionate about building secure, scalable and innovative IoT and AI solutions and an AR/VR Hackathon winner.',
}

export interface Education {
  year: string
  title: string
  institution: string
  details: string
}

export const education: Education[] = [
  {
    year: '2024 – 2028',
    title: 'B.E in CSE-AIML',
    institution: 'AMC Engineering College',
    details: 'Specialization in Artificial Intelligence and Machine Learning, CGPA: 8.05',
  },
  {
    year: '2022',
    title: '12th Grade – PCMC Stream',
    institution: 'Dayananda Sagar PU College',
    details: 'Percentage: 80%',
  },
  {
    year: '2020',
    title: '10th Grade – ICSE',
    institution: "Baldwin Boys' High School",
    details: 'Percentage: 91%',
  },
]

export const awards = [
  'Qualified COMEDK with a rank of 19,000 amongst 1 lakh candidates',
  'Qualified JEE Mains with a rank of 52,000 amongst 10 lakh candidates',
  'Qualified for IIST Thiruvananthapuram counselling via JEE Mains',
  'Awarded 4th Place at the National Level Innovation Project science exhibition organized by Dayananda Sagar PU College',
  'Awarded 1st Place at Virtuovation AR/VR Hackathon organized by BNM Institute of Technology, Bangalore',
]

export interface SkillCategory {
  category: string
  skills: string[]
}

export const technicalSkills: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'C++', 'SQL', 'JavaScript'],
  },
  {
    category: 'Hardware Knowledge',
    skills: ['Arduino Uno', 'IoT Development', 'Sensor Integration'],
  },
  {
    category: 'Software Knowledge',
    skills: ['Windows', 'Ubuntu Linux', 'Unity', 'Blender'],
  },
  {
    category: 'AI / ML',
    skills: ['RAG', 'Large Language Models (LLMs)', 'Vector Embeddings', 'Prompt Engineering', 'Ollama', 'Llama3'],
  },
  {
    category: 'Frameworks & Tools',
    skills: ['LangChain', 'ChromaDB', 'Flask', 'Git'],
  },
  {
    category: 'Web Technologies',
    skills: ['HTML', 'CSS', 'Tailwind CSS'],
  },
]

export interface Project {
  title: string
  subtitle: string
  points: string[]
}

export const projects: Project[] = [
  {
    title: 'Smart Home Light Dimmer',
    subtitle: 'IoT Project',
    points: [
      'Developed an IoT-based lighting control system using Arduino Uno',
      'Implemented remote operation capability through mobile application',
      'Designed system to control LED brightness levels wirelessly',
      'Integrated hardware programming with mobile app interface',
    ],
  },
  {
    title: 'Smart Irrigation System',
    subtitle: 'IoT Project',
    points: [
      'Created automated plant watering system using Arduino Uno',
      'Implemented soil moisture sensing technology for automated irrigation',
      'Developed intelligent watering mechanism based on real-time soil moisture levels',
      'Combined environmental sensing with automated response systems',
    ],
  },
  {
    title: 'VidhiAI',
    subtitle: 'AI Assistant for Indian Constitution',
    points: [
      'An intelligent legal assistant designed to simplify complex Indian constitutional law by providing accurate, context-aware answers with direct citations to legal articles',
      'Developed a RAG-based chatbot using LangChain and ChromaDB to provide citation-backed legal explanations',
      'Deployed Llama 3 locally via Ollama to ensure data privacy and constitutional accuracy',
      'Built a full-stack application using a Flask backend and a responsive Tailwind CSS frontend',
      'Implemented vector embeddings and prompt engineering to optimize retrieval and response relevance',
    ],
  },
  {
    title: 'BloodBuddy',
    subtitle: 'Smart Blood Donation Management System',
    points: [
      'A streamlined healthcare platform designed to bridge the gap between blood donors and recipients',
      'Engineered a responsive web application to facilitate seamless communication between blood banks, donors, and hospitals',
      'Implemented a real-time notification system to alert eligible donors during urgent blood shortages',
      'Developed a secure user authentication and profile management system',
      'Designed a lightweight, intuitive UI/UX focusing on accessibility and rapid navigation',
    ],
  },
  {
    title: 'AnomalAI',
    subtitle: 'AI-Based Anomaly Detection in Server Logs',
    points: [
      'Built an AI-driven anomaly detection system to analyze server logs and flag suspicious activities in real time',
      'Implemented feature extraction and Isolation Forest to detect brute-force login attempts and abnormal access patterns',
      'Deployed Llama 3 locally via Ollama to ensure data privacy by processing sensitive logs entirely offline',
      'Designed a simple rule-based alert system to highlight critical security threats',
    ],
  },
  {
    title: 'Codinger',
    subtitle: 'AI-Powered Coding Mentor',
    points: [
      'A browser-based coding platform powered by Hindsight where you write and run real code in 10 programming languages',
      'Includes a collaborative Friend Mode, a progress dashboard tracking your weak spots, and a Scratch Pad for free-form practice',
      'Instant execution, live Complexity analysis and an AI mentor that remembers your past mistakes to give personalized feedback',
    ],
  },
  {
    title: 'Vibefinder',
    subtitle: 'Discover places that match your vibe — filtered by mood, budget and your exact location',
    points: [
      'A map-driven place discovery web app built for Bangalore',
      'Surfaces real, named places from OpenStreetMap within a 10 km radius on an interactive map',
      'Live turn-by-turn driving directions, distance, and estimated travel time powered by open-source geospatial APIs',
    ],
  },
  {
    title: 'Imposter',
    subtitle: 'Cross-Platform Social Deduction Game',
    points: [
      'A fully accessible, free-to-use alternative to the popular "Imposter: Who is the Spy" application',
      'Powered by a custom-built database to manage game content and roles',
      'Developed and hosted using the Expo Go framework, ensuring smooth multiplayer across Android and iOS',
    ],
  },
  {
    title: 'Kaarigar',
    subtitle: 'Blue-Collar Employment Network',
    points: [
      'An entrepreneurial startup project aimed at bridging the employment gap in South India',
      'A dedicated marketplace to connect skilled blue-collar workers with relevant, local job opportunities',
      'Focuses on empowering the local workforce, improving hiring efficiency for employers',
    ],
  },
  {
    title: 'aidAR',
    subtitle: 'AR + AI Enabled Multi-agent Medical System',
    points: [
      'A next-generation medical education platform designed to gamify and simulate first-aid training',
      'Features a conversational AI diagnostic engine that interprets natural language symptoms to prioritize critical emergencies',
      'Paired with a working Augmented Reality (AR) module and interactive 3D anatomical models',
    ],
  },
]

export interface Certification {
  date: string
  title: string
  issuer: string
}

export const certifications: Certification[] = [
  { date: 'October 2024', title: 'Cybersecurity Certification', issuer: 'Great Learning' },
  { date: 'January 2025', title: 'C Programming', issuer: 'Simplilearn' },
  { date: 'July 2025', title: 'Autonomous Systems Certification', issuer: 'RoboLearnIndia' },
  { date: 'August 2025', title: 'Digital Marketing Fundamentals', issuer: 'IIDE - Digital Business School' },
  { date: 'September 2025', title: 'Full Stack Web Development', issuer: 'NoviTech R&D Pvt. Ltd.' },
  { date: 'October 2025', title: 'Oracle CI 2025 Certified AI Foundations Associate', issuer: 'Oracle Learning' },
  { date: 'October 2025', title: 'Elite Certification in Ethical Hacking', issuer: 'NPTEL (IIT Kharagpur)' },
  { date: 'December 2025', title: 'Cisco Certified Operating Systems Support', issuer: 'Cisco Networking Academy' },
]

export interface Language {
  name: string
  proficiency: string
}

export const languages: Language[] = [
  { name: 'English', proficiency: 'Full professional proficiency' },
  { name: 'Hindi', proficiency: 'Full professional proficiency' },
  { name: 'Kannada', proficiency: 'Elementary proficiency' },
]

export const competencies = [
  'Teamwork and collaboration',
  'Critical thinking and analysis',
  'Advanced problem-solving',
  'Open to constructive criticism and continuous learning',
]

export const hobbies = [
  'Football and strategic brain-games',
  'Watching movies and TV series',
  'Attending tech-related events',
  'Historical research, particularly World War events',
  'Aircraft and automobile technology enthusiast',
  'Cybersecurity trends and digital threat analysis',
]
