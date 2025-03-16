import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  writer,
  cryptotracker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Writer",
    icon: writer,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Computer Science Teacher",
    company_name: "School",
    iconBg: "#E6DEDD",
    date: "jun2023 - may 2024",
    points: [
      "Taught Core Java, Python, OOP concepts, and SQL to students.",
      "Designed structured lesson plans covering Basic of Python, algorithms, and development.",
      "Conducted live coding sessions and hands-on programming exercises.",
      "Assisted students in debugging and improving coding logic and problem-solving skills.",
    ],
  },
];

const projects = [
  {
    name: "Crypto tracker",
    description:
      "Crypto Tracker is a web application that provides real-time cryptocurrency prices, interactive charts, and market analytics to help users make informed trading decisions. It features live updates, trend analysis, and a watchlist for tracking favorite coins.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cryptotracker,
    source_code_link: "https://github.com/Rohanrawat9/Crypto_Tracker?tab=readme-ov-file",
  },
];

export { services, technologies, experiences, projects };
