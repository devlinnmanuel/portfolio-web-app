import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CoreDisciplines from '../components/CoreDisciplines';
import Projects from '../components/Projects';
import RecentActivities from '../components/RecentActivities';
import Contact from '../components/Contact';
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
    const lenis = new Lenis({ smooth: true }); // bikin ada smooth scroll

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf); // start engine
    lenis.on("scroll", ScrollTrigger.update);

    return () => lenis.destroy();
  }, []);
  
  return (
    <div className="min-h-screen bg-[#0d1f1f] text-white font-sans">
      <Navbar />
      <Hero />
      <CoreDisciplines />
      <Projects />
      <RecentActivities />
      <Contact />
      <Footer />
    </div>
  );
}