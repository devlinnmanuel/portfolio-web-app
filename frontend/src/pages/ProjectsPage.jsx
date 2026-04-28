import Navbar from '../components/Navbar';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectList from '../components/projects/ProjectList';
import ProjectsCTA from '../components/projects/ProjectsCTA';
import Footer from '../components/Footer';


import { useEffect, useRef } from "react";
import Lenis from "lenis";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


export default function ProjectsPage() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true }); // smooth scroll
    const autoLenis = new Lenis({ 
      duration: 1.2,
      smooth: true 
    });

    window.autoLenis = autoLenis;

    function raf(time) {
      lenis.raf(time);
      autoLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); // start engine
    lenis.on("scroll", ScrollTrigger.update);
    autoLenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
      autoLenis.destroy();
      window.autoLenis = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-(--deepspace-blue) text-white font-sans overflow-hidden"> 
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px, 60px 60px, 60px 60px"
        }}
      />

      <div className="relative z-10">
        <div className="absolute top-0 right-0 w-200 h-200 translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-(--dark-teal) to-(--mint-leaf) opacity-30 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-400 h-400 translate-x-1/2 translate-y-1/2 rounded-full bg-linear-to-r from-(--dark-teal) to-(--mint-leaf) opacity-30 blur-2xl"></div>
        <div className="absolute bottom-70 left-0 w-150 h-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-(--dark-teal) to-(--mint-leaf) opacity-20 blur-2xl"></div>
        <Navbar page="Projects"/>
        <main className="max-w-6xl mx-auto px-6 pt-28">
          <ProjectsHero />
          <ProjectList />
        </main>
        <ProjectsCTA />
        <Footer />
      </div>
    </div>
  );
}