export const personal = {
  name: 'Sakshi Dangi',
  title: 'AI/ML Engineer | Python Developer | Backend Developer',
  tagline:
    'Building intelligent software using Python, Flask, Machine Learning, LLM APIs, and scalable backend systems.',

  about:
    'I am a B.Tech Computer Science student specializing in Artificial Intelligence & Machine Learning. I enjoy building real-world AI applications, backend systems, and intelligent software that solve practical problems. My interests include Machine Learning, Deep Learning, Generative AI, LLMs, Backend Development, and Data Structures & Algorithms.',

  email: 'sakshidangi2006@gmail.com',

  github: 'https://github.com/sakshidangi2006',

  linkedin: 'https://www.linkedin.com/in/YOUR-LINKEDIN-URL/',

  githubUser: 'sakshidangi2006',

  resumeUrl: '/Sakshi_Dangi_Resume.pdf',

  image: '/sakshi-dangi.png',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C++', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Backend Development',
    items: ['Flask', 'SQLAlchemy'],
  },
  {
    category: 'Machine Learning',
    items: [
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Data Preprocessing',
    ],
  },
  {
    category: 'AI & LLMs',
    items: [
      'Google Gemini API',
      'Anthropic Claude API',
      'Prompt Engineering',
      'Generative AI',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Jupyter Notebook',
    ],
  },
]

export type Project = {
  title: string
  description: string
  tech: string[]
  github: string
  demo: string
  image: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Mood Mirror',
    description:
      'Mood Mirror is an AI-powered emotion analysis web application that understands user feelings from journal entries using Large Language Models. It provides emotion detection, personalized insights, mood tracking, and a clean responsive interface for improving emotional well-being.',

    tech: [
      'Python',
      'Flask',
      'Claude API',
      'HTML',
      'CSS',
      'JavaScript',
    ],

    github: 'https://github.com/sakshidangi2006/Mood_Mirror',

    demo: 'https://mood-mirror-1-7g35.onrender.com/',

    image: '/projects/mood-mirror.png',

    featured: true,
  },

  {
    title: 'AI Resume Analyzer',

    description:
      'An intelligent resume analysis system that compares resumes with job descriptions using Generative AI. It identifies missing keywords, calculates resume-job matching scores, and provides personalized suggestions to improve ATS compatibility.',

    tech: [
      'Python',
      'Flask',
      'Gemini API',
      'SQLAlchemy',
      'Machine Learning',
    ],

    github: 'https://github.com/sakshidangi2006',

    demo: 'https://ai-resume-analyzer-6uk0.onrender.com',

    image: '/projects/resume-analyzer.png',

    featured: true,
  },
  {
    title: 'DSA Repository',

    description:
      'A curated, well-documented collection of 110+ data structures and algorithms problems with clean solutions, complexity notes and reusable patterns.',

    tech: ['C++', 'Python', 'Algorithms'],

    github: 'https://github.com/sakshidangi2006',

    demo: '#',

    image: '/projects/dsa-repo.png',
  },
  {
    title: 'Python CLI Projects Collection',

    description:
      'A set of polished command-line tools showcasing clean architecture, argument parsing and real-world automation utilities built in pure Python.',

    tech: ['Python', 'CLI', 'Automation'],

    github: 'https://github.com/sakshidangi2006',

    demo: '#',

    image: '/projects/python-cli.png',
  },
]

export const achievements = [
  {
    title: 'Production-ready AI apps',
    description:
      'Built and shipped full-stack AI web applications, not just notebooks.',
  },
  {
    title: '110+ DSA problems solved',
    description:
      'Strong problem-solving foundation across core data structures and algorithms.',
  },
  {
    title: 'LLM API integration',
    description:
      'Integrated Gemini and Claude APIs into real, user-facing applications.',
  },
  {
    title: 'AI & ML specialization',
    description:
      'B.Tech CSE student specializing in Artificial Intelligence & Machine Learning.',
  },
]

export const stats = [
  { value: '110+', label: 'DSA Problems' },
  { value: '2+', label: 'AI Projects' },
  { value: '2', label: 'LLM APIs' },
  { value: '5+', label: 'Technologies' },
]
