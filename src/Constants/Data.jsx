export const education = [
  {
    title: "Bachelor Degree",
    institude: "University of Sri Jayewardenepura",
    field: "Engineering",
    year: "2024",
  },
  {
    title: "Advance Level",
    institude: "JAFFNA HINDU COLLEGE",
    field: "Physical Science",
    year: "2022",
  },
  {
    title: "Secondary Level",
    institude: "JAFFNA HINDU COLLEGE",
    year: "2014",
  },
];

export const achievments = [
  {
    id: 1,
    title: "A MEMBER AT CAREER GUIDANCE CELL",
    description:
      "FACULTY OF ENGINEERING, University of Sri Jayewardenepura AT 2023",
  },
  {
    id: 2,
    title: "ORGANIZING COMMITTEE MEMBER",
    description:
      "CODEQUEST: A CODING CHALLENGE ORGANIZED BY THE CAREER GUIDANCE SOCIETY IN COLLABORATION WITH CENSOC",
  },
];

import Certificate1 from "../Assets/CMSD.jpg";
import Certificate2 from "../Assets/CMST-Hacking.jpg";
import Certificate3 from "../Assets/Screenshot 2025-03-22 142520.png";


export const certificationData = [
  {
    image: Certificate1,
    title: "Diploma in Information Technology",
    subheading: "Ethical Hacking & Cyber Security",
    description:
      "Diploma in Information Technology with a specialization in Ethical Hacking and Cyber Security, conducted by CMST - Jaffna. Achieved a Distinction Pass in recognition of outstanding performance during the program.",
  },
  {
    image: Certificate2,
    title: "Diploma in Software Engineering",
    subheading: "Awarded By CMST-Jaffna",
    description:
      "Achieved a Distinction Pass in recognition of outstanding performance during the program.",
  },
  {
    image: Certificate3,
    title: "Web Designing Workshop ",
    subheading: "Conducted by Orinsto Institute at Orinsto Pvt Ltd, Sungavil, Polonnaruwa",
    description:
      "Participated in a Web Designing Workshop conducted by Orinsto Institute at Orinsto Pvt Ltd, Sungavil, Polonnaruwa, on June 13, 2024. Gained valuable insights into web design principles and best practices.",
  },
  // {
  //   image: Certificate2,
  //   title: "Jet Pay4",
  //   subheading: "WEB DESIGN",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nunc at velit dictum luctus in at risus.",
  // },
];

export const projectData = [
  {
    image: Certificate2,
    category: "Web Development",
    title: "E-Commerce Website",
    description:
      "A fully functional e-commerce platform with payment integration.",
    author: "John Doe",
    date: "2024-03-05",
    url: "https://example.com/ecommerce",
  },
  {
    image: Certificate2,
    category: "Machine Learning",
    title: "AI Chatbot",
    description: "An AI chatbot that can answer queries using NLP techniques.",
    author: "Jane Doe",
    date: "2024-02-28",
    url: "https://example.com/chatbot",
  },
  {
    image: Certificate2,
    category: "Mobile App",
    title: "Expense Tracker App",
    description:
      "A mobile application to track daily expenses and set budgets.",
    author: "Alice Smith",
    date: "2024-02-15",
    url: "https://example.com/expensetracker",
  },
  {
    image: Certificate2,
    category: "IoT",
    title: "Smart Home Automation",
    description:
      "A project integrating IoT to control home appliances remotely.",
    author: "Bob Brown",
    date: "2024-02-10",
    url: "https://example.com/smarthome",
  },
  {
    image: Certificate2,
    category: "Game Development",
    title: "2D Platformer Game",
    description: "A side-scrolling 2D game developed with Unity.",
    author: "Charlie Green",
    date: "2024-01-25",
    url: "https://example.com/platformergame",
  },
  {
    image: Certificate2,
    category: "Blockchain",
    title: "Crypto Wallet",
    description:
      "A secure crypto wallet for storing and transacting digital assets.",
    author: "David White",
    date: "2024-01-10",
    url: "https://example.com/cryptowallet",
  },
];

export const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Creativity",
  "Leadership",
  "Work Ethic"
];

import { Figma, Framer, Image as ImageIcon, Globe, Code, Database, Phone as PythonIcon, Palette, GitBranch, Pencil, MonitorSmartphone } from 'lucide-react';

export const techSkills = [
  { name: "Canva", icon: <Palette size={32} />},
  { name: "JavaScript", icon: <Code size={32} />},
  { name: "React", icon: <Code size={32} />},
  { name: "Node.js", icon: <Code size={32} />},
  { name: "MongoDB", icon: <Database size={32} />},
  { name: "Python", icon: <PythonIcon size={32} />},
  { name: "Django", icon: <Globe size={32} />},
  { name: "PostgreSQL", icon: <Database size={32} />},
  { name: "Wireframing", icon: <Pencil size={32} />},
  { name: "UI/UX Design", icon: <MonitorSmartphone size={32} />},
  { name: "Git", icon: <GitBranch size={32} />}
];