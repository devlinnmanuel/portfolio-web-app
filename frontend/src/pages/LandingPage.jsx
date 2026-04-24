import Navbar from '../components/Navbar';
import Hero from '../components/landing/Hero';
import CoreDisciplines from '../components/landing/CoreDisciplines';
import Projects from '../components/landing/Projects';
import RecentActivities from '../components/landing/RecentActivities';
import Contact from '../components/landing/Contact';
import Footer from '../components/Footer';
 

import { useEffect, useRef } from "react";
import Lenis from "lenis";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function LandingPage() {
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
    <div className="min-h-screen bg-[#0d1f1f] text-white font-sans">
      <Navbar page="Home"/>
      <Hero />
      <CoreDisciplines />
      <Projects />
      <RecentActivities />
      <Contact />
      <Footer />
    </div>
  );
}