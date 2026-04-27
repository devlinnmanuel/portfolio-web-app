import { useState } from 'react';
import { CPlainIcon, CplusplusPlainIcon } from "@devicon/react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaVuejs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaNodeJs,
  FaPython,
  FaNetworkWired,
  FaAws,
  FaGit,
  FaGithub,
  FaFigma,
  FaMicrosoft,
} from "react-icons/fa";

import {
  RiTailwindCssFill,
  RiSupabaseFill,
  RiFirebaseFill,
  RiVercelFill,
} from "react-icons/ri"

import {
  GrMysql,
} from "react-icons/gr"

import {
  SiExpress,
  SiPostgresql,
  SiRender,
  SiNodered,
  SiVitess,
  SiPostman,
} from "react-icons/si"

import {
  BiLogoFlask,
} from "react-icons/bi"

const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'Others'];

const techStack = {
  Frontend: [
    { name: 'HTML', desc: 'Standard Markup Language', icon: <FaHtml5/> },
    { name: 'CSS', desc: 'Style Sheet Language', icon: <FaCss3Alt/> },
    { name: 'Javascript', desc: 'Web Scripting Language', icon: <FaJs/> },
    { name: 'Vue.js', desc: 'Progressive JS Framework', icon: <FaVuejs/> },
    { name: 'React', desc: 'Frontend UI Library', icon: <FaReact/> },
    { name: 'Tailwind CSS', desc: 'Utility-First CSS', icon: <RiTailwindCssFill/> },
    { name: 'Bootstrap', desc: 'CSS Framework', icon: <FaBootstrap/> },
  ],
  Backend: [
    { name: 'C', desc: 'Low-Level Programming', icon: <CPlainIcon color='#004346'/> },
    { name: 'C++', desc: 'High-Performance Language', icon: <CplusplusPlainIcon color='#004346'/> },
    { name: 'PHP', desc: 'Server-Side Scripting', icon: <FaPhp/> },
    { name: 'Node.js', desc: 'JS Runtime Environment', icon: <FaNodeJs/> },
    { name: 'Express.js', desc: 'Web Framework', icon: <SiExpress/> },
    { name: 'Python', desc: 'General Purpose Language', icon: <FaPython/> },
    { name: 'Flask', desc: 'Python Web Framework', icon: <BiLogoFlask/> },
    { name: 'REST API', desc: 'API Architecture', icon: <FaNetworkWired/> },
  ],
  Database: [
    { name: 'MySQL', desc: 'Relational Database', icon: <GrMysql/> },
    { name: 'PostgreSQL', desc: 'NoSQL Database', icon: <SiPostgresql/> },
    { name: 'Supabase', desc: 'Open Source Firebase', icon: <RiSupabaseFill/> },
  ],
  Cloud: [
    { name: 'AWS Cloud Architecture', desc: 'Cloud Infrastructure Platform', icon: <FaAws/> },
    { name: 'Firebase', desc: 'Backend-as-a-Service', icon: <RiFirebaseFill/> },
    { name: 'Vercel', desc: 'Deployment Platform', icon: <RiVercelFill/> },
    { name: 'Render', desc: 'Backend Deployment', icon: <SiRender/> },
  ],
  Others: [
    { name: 'Git', desc: 'Version Control System', icon: <FaGit/> },
    { name: 'Github', desc: 'Version Control Platform', icon: <FaGithub/> },
    { name: 'Figma', desc: 'UI/UX Design Tool', icon: <FaFigma/> },
    { name: 'Power BI', desc: 'Data Visualization Tool', icon: <FaMicrosoft/> },
    { name: 'Node-RED', desc: 'Flow-Based Development Tool', icon: <SiNodered/> },
    { name: 'Vite', desc: 'Next Generation Bundler', icon: <SiVitess/> },
    { name: 'Postman', desc: 'API Testing', icon: <SiPostman/> },
  ],
};

export default function TechStack() {
  const [active, setActive] = useState('Frontend');

  return (
    <section id="techstack" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-(--mint-leaf) mb-10">Tools & Tech Stack</h2>

        {/* Category */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-(--mint-leaf) text-white'
                  : 'border border-(--pearl-aqua)/40 text-white hover:bg-(--dark-teal)'
              }`}>{cat}</button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {(techStack[active] || []).map((tech) => (
            <div
              key={tech.name}
              className="bg-(--pacific-cyan) rounded-xl px-4 py-3 hover:bg-(--pacific-cyan)/70 hover:shadow-sm transition-all duration-200"
            >
              {/* <div className="w-7 h-7 rounded bg-(--pearl-aqua) mb-2" /> */}
              <div className="flex items-center gap-4">
                <span className="text-2xl text-(--dark-teal)">{tech.icon}</span>
                <div>
                  <p className="text-white font-semibold text-sm">{tech.name}</p>
                  <p className="text-(--pearl-aqua) text-xs mt-0.5">{tech.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing learning */}
        <p className="mt-6 text-sm text-white italic">
          <span className="font-semibold not-italic text-(--mint-leaf)">Currently Learning:</span>{' '}Docker, Laravel</p>
      </div>
    </section>
  );
}