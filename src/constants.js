// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import shadcnuiLogo from "./assets/tech_logo/shadcnui.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";

import vercelLogo from "./assets/tech_logo/vercel.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Shadcnui", logo: shadcnuiLogo },

      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Technische Universität Chemnitz",
    date: "Oct 2024 - Present",
    desc: "I am currently pursuing my Master's degree (M.Sc.) in Web Engineering at Technische Universität Chemnitz, Germany. The program focuses on advanced topics in web technologies, software architecture, and engineering principles. Through this course, I am gaining in-depth knowledge of full-stack development, modern web frameworks, and software design methodologies. I am also exploring areas such as cloud computing, data management, and user interface design, which are helping me build a strong technical foundation for developing scalable and efficient web applications.",
    degree: "Master of Science (M.Sc.) - Web Engineering",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "SIES Graduate School of Technology, Navi Mumbai",
    date: "Aug 2020 - July 2024",
    grade: "8.76 CGPA",
    desc: "I have completed my Bachelor's degree in Computer Engineering. During my studies, I developed a strong foundation in software development, programming, and computer science fundamentals. I gained hands-on experience in areas such as Data Structures, Algorithms, Database Management Systems, and Web Development. My coursework and projects helped me apply theoretical concepts to practical challenges, strengthening my problem-solving and engineering skills.",
    degree: "Bachelor of Engineering (B.E.) - Computer Engineering",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Amrita Vidyalayam, Navi Mumbai",
    date: "Apr 2019 - March 2020",
    grade: "78%",
    desc: "I completed my class 12 education from Amrita Vidyalayam, Navi Mumbai, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "Amrita Vidyalayam, Navi Mumbai",
    date: "Apr 2017 - March 2018",
    grade: "87.5%",
    desc: "I completed my class 10 education from VAmrita Vidyalayam, Navi Mumbai, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Creator Platform",
    description:
      "A full-stack content platform built with Next.js that lets creators write, generate, and publish AI-assisted blog posts. Features include user authentication, rich post editing, image upload, public feeds and profile pages, and an admin/dashboard experience. The app integrates generative AI (Google Gemini) for auto-generating post content, ImageKit for image hosting, Convex for backend data, and Clerk for authentication — all wrapped with Tailwind and shadcn/ui for a clean, responsive UI.",
    image: movierecLogo,
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Clerk",
      "Convex",
      "ImageKit",
    ],
    github: "https://github.com/DineshPrabhakaran22/AI_Creator_Platform",
    webapp: "https://ai-creator-platform-five.vercel.app/",
  },
  {
    id: 1,
    title: "Zerodha Stock Trading Platform",
    description:
      "A comprehensive and intuitive MERN-based stock trading simulation platform that empowers users to seamlessly manage their portfolios. Users can view real-time holdings, track positions, place simulated buy/sell orders, and monitor portfolio performance through an interactive dashboard. With secure JWT-based authentication and clean UI workflows, the platform delivers a smooth and realistic trading experience, making it ideal for learners exploring equity markets and developers building fintech solutions.",
    image: githubdetLogo,
    tags: ["React JS", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/DineshPrabhakaran22/Zerodha1",
    webapp: "https://zerodha1frontend.vercel.app/",
  },
  {
    id: 2,
    title: "QUICKGPT – AI Chat Assistant",
    description:
      "A lightweight and responsive AI-powered chat application built using React and Node.js, designed to provide intelligent real-time conversations through LLM integration. Users can enter prompts and receive dynamic AI-generated responses via a clean and minimal chat interface. The backend securely handles request routing and model communication, ensuring smooth interactions while keeping the architecture modular for easy expansion with different AI providers. Ideal for experimenting with conversational AI or building personalized AI assistants.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "Express.js", "OpenAI API", "REST API"],
    github: "https://github.com/DineshPrabhakaran22/QUICKGPT",
    webapp: "https://quick-gpt-wheat-gamma.vercel.app/",
  },
];
