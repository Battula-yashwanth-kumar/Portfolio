import { FaReact, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
export const resumeLink =
  "https://drive.google.com/file/d/1FHYUzoaI1Optbm172LmWGCGXN7L9sQQQ/view?usp=sharing";
export const skills = [
  {
    id: 0,
    tech: "React JS",
    icon: <FaReact />,
  },
  {
    id: 1,
    tech: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    tech: "CSS",
    icon: <FaCss3 />,
  },
  {
    id: 3,
    tech: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 4,
    tech: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 5,
    tech: "Node JS",
    icon: <FaNode />,
  },
];

export const projects = [

  {
    id: 0,
    project_name: "Aiden AI Company Website",
    project_desc: "During my internship, I played a key role in building the company’s official website. The site was developed using React, TypeScript, and Tailwind CSS, with smooth animations powered by Framer Motion and responsive carousels implemented using React Slick. I contributed to developing reusable UI components, implementing animations, and ensuring the site was responsive and visually consistent across devices.Note: This project was developed during my internship. The source code is proprietary and cannot be shared.",
    features:
      "",
    tech_stack: ["React JS", "TypeScript", "Tailwind", "React-Slick", "Framer Motion"],
    project_img: Project3,
    project_url: "https://aidenai.com/",
    github_link: "",
    reverse: false,
  },
  {
    id: 1,
    project_name: "Agri: Web Application for Crop and Fertilizer Recommendation System",
    project_desc:
      "A responsive web application developed to assist farmers by providing personalized crop and fertilizer recommendations. The system analyzes soil health data to help improve agricultural productivity and support informed decision-making.",
    features:
      "Provided tailored crop and fertilizer suggestions to improve yield projections by approximately 15%.Achieved up to 92% accuracy using multiple machine learning algorithms for prediction.Analyzed data from over 7,000 soil samples, considering key factors like nitrogen, phosphorus, and soil pH.Designed to deliver accurate and actionable insights through an intuitive and responsive interface.",
    tech_stack: ["React Js", "TypeScript", "Formik-Yup", "Python", "Flask", "Machine Learning", "Tailwind CSS"],
    project_img: Project4,
    project_url: "https://www.figma.com/file/Fn9TnSirNhT2gbSdIdbPsZ/Agri?type=design&node-id=0%3A1&mode=design&t=E6QnzEQzWCNfniPc-1",
    github_link: "https://github.com/Battula-yashwanth-kumar/Agri",
    reverse: true,
  },

  {
    id: 2,
    project_name: "Codeify : Enterprise AI Defence Platform",
    project_desc: "Built UI screens for an Enterprise AI Defense Platform designed to monitor and manage user interactions with AI systems. The interface enables teams to filter, inspect, and regulate prompts sent to AI models, enhancing control, compliance, and data safety across the organization.",
    features:
      "Developed user interface screens that allow filtering and reviewing of AI-generated prompts submitted by users.Integrated Guardrails to enforce prompt quality, safety, and relevance based on enterprise policies.Incorporated PII detection to identify and flag sensitive information in real-time, supporting compliance with data privacy standards.Created a clean, intuitive layout that enables security teams to efficiently track and audit AI usage at scale.",
    tech_stack: ["Angular", "TypeScript", "Tailwind", "Node.js", "Express.js"],
    project_img: Project2,
    project_url: "",
    github_link: "https://github.com/Battula-yashwanth-kumar/codeaify-application",
    reverse: false,
  },

];

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: "Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: "Experience ",
    href: "Experience",
  },
  {
    id: 3,
    name: "Projects ",
    href: "Projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "Contact",
  },
];
