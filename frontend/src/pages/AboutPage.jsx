import AboutHero from '../components/about/AboutHero';
import Bio from '../components/about/Bio';
import Experiences from '../components/about/Experiences';
import TechStack from '../components/about/TechStack';
import Skills from '../components/about/Skills';
import AboutCTA from '../components/about/AboutCTA';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Spline from '@splinetool/react-spline';

import { useEffect, useRef } from "react";
import Lenis from "lenis";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


export default function AboutPage() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true }); // smooth scroll
    const path = document.querySelector("#timelinePath");
    const length = path.getTotalLength();

    // set awal (garis disembunyikan)
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // animasi saat scroll
    const anim = gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
      visibility: "visible"
    });

    ScrollTrigger.refresh();
    
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf); // start engine
    lenis.on("scroll", ScrollTrigger.update);
    
    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
      lenis.destroy();
      window.autoLenis = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-(--deepspace-blue) text-white font-sans">
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

      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1000 4000"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            id="timelinePath"
            d="
              M500 0
              C0 300, 1000 600, 500 900
              C0 1200, 1000 1500, 500 1800
              C0 2100, 1000 2400, 500 2700
              C0 3000, 1000 3300, 500 3600
            "
            stroke="#09bc8a"
            strokeOpacity="0.2"
            strokeWidth="50"
            fill="none"
            style={{ visibility: "hidden" }}
          />
        </svg>
      </div>

      <div className="relative z-10">
        <Navbar page="About"/>
        <AboutHero />
        {/* <Bio /> */}
        <Experiences />
        <TechStack />
        <Skills />
        <AboutCTA />
        <Footer />
      </div>
    </div>
  );
}