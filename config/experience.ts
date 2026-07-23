import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "Autos2",
    position: "Software Engineer",
    company: "Auto and General",
    location: "Brisbane, Australia",
    startDate: new Date("2024-06-01"),
    endDate: "Present",
    description: [
      "Work as part of a cross-functional team building and maintaining production web applications, shipping new features and resolving bugs in a reliable, professional way.",
      "Collaborate closely with stakeholders to translate requirements into well-tested solutions that meet business needs and quality standards.",
      "Contribute across the full development lifecycle, including implementation, testing, and continuous improvement of production-facing web experiences.",
    ],
    achievements: [
      "Deliver multiple business-facing applications as part of a cross-functional development team, contributing to both customer-facing and internal platforms.",
      "Build and launch external websites with complex requirements, ensuring polished and reliable experiences for end users.",
      "Develop internal websites for staff to streamline navigation across company systems and improve day-to-day operations.",
      "Earn certifications in Data Streaming Engineer Foundations from Confluent and Java OOP: Object-Oriented Programming from ITER Academy.",
    ],
    skills: ["Angular", "NgRx", "Typescript", "Java", "Python"],
    logo: "/experience/coding_logo3.png",
  },
  {
    id: "forward-hydro",
    position: "Software Engineer",
    company: "Forward Hydro",
    location: "Australia",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2024-05-01"),
    description: [
      "Led the development of Breacher, a probabilistic dam-break analysis software package used in Asia and Europe.",
      "Designed and built the engineering data analysis tool in Python and implemented encryption to protect intellectual property.",
      "Developed a post-processing GUI that enabled users to customise outputs and improve usability.",
    ],
    achievements: [
      "Delivered Breacher as a production software package with impact across multiple international markets.",
      "Contributed to the advancement of the industry through several peer-reviewed engineering papers published on Breacher and its benefits.",
    ],
    skills: ["Python", "Django","Pandas", "Tkinter", "Anaconda"],
    logo: "/experience/coding_logo3.png",
  },
  {
    id: "auto-general-legacy",
    position: "Software Developer",
    company: "Auto & General",
    location: "Brisbane, Australia",
    startDate: new Date("2018-11-01"),
    endDate: new Date("2023-05-01"),
    description: [
      "Worked as part of a cross-functional team delivering production web applications, contributing to new feature development, bug fixes, and continuous improvements.",
      "Collaborated with stakeholders and internal teams to turn business requirements into reliable, well-tested solutions.",
      "Supported the full software delivery lifecycle, from implementation and testing through to deployment and ongoing maintenance.",
    ],
    achievements: [
      "Delivered business-facing applications and internal tools that supported both customer and operational needs.",
      "Contributed to the development of complex web solutions with a strong focus on quality, maintainability, and professional standards.",
      "Helped improve product reliability and user experience through consistent development, testing, and problem-solving.",
    ],
    skills: ["Angular", "NgRx", "Typescript", "Java"],
    logo: "/experience/coding_logo3.png",
  },
  {
    id: "ies",
    position: "Software Developer",
    company: "International Education Services (IES)",
    location: "Brisbane, Australia",
    startDate: new Date("2018-02-01"),
    endDate: new Date("2018-11-01"),
    description: [
      "Developed and maintained student-facing portals and study and learning websites, helping deliver a better digital experience for users.",
      "Contributed to the creation and improvement of web applications with a focus on usability, accessibility, and reliability.",
      "Worked on a React Native app for the school focused on Aboriginal language Luritja, supporting culturally relevant digital learning initiatives.",
    ],
    achievements: [
      "Gained hands-on experience building mobile applications with React Native and expanding cross-platform development skills.",
      "Continued developing backend solutions with Ruby on Rails, strengthening full-stack capabilities.",
      "Contributed to projects that supported education and community-focused digital experiences.",
    ],
    skills: ["React", "React Native", "Ruby on Rails", "Javascript", "HTML 5", "Sass", "Redux", "Material UI"],
    logo: "/experience/coding_logo3.png",
  },
  {
    id: "localsearch",
    position: "Junior Software Developer",
    company: "Localsearch (formerly Local Directories Pty Ltd)",
    location: "Gold Coast, Australia",
    startDate: new Date("2017-03-01"),
    endDate: new Date("2018-01-01"),
    description: [
      "Started as a junior developer at LocalSearch and contributed to the company’s public-facing listing website during a period of growth and learning.",
      "Worked primarily on UI component design and implementation, helping shape the user experience while developing core front-end skills.",
      "Supported the transition from an Angular-based application to a React-based implementation, contributing to the website rewrite and modernisation efforts.",
    ],
    achievements: [
      "Grew quickly as a junior developer by learning from a professional team environment and building strong foundations in modern web development.",
      "Contributed to a major website transition and helped support the delivery of improved front-end experiences.",
      "Developed both technical and collaborative skills in a corporate setting, laying the groundwork for continued growth as a developer and team member.",
    ],
    skills: ["React" , "Angular", "Redux", "Javascript","HTML 5", "Ruby on Rails", "Sass"],
    logo: "/experience/coding_logo3.png",
  }
];
