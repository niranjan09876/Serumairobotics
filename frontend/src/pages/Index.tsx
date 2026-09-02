import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Products from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Careers from "@/components/Careers";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/utils";

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "").toLowerCase();
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const navOffset = 80;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          smoothScrollTo(Math.max(0, offsetPosition), 450);
        }, 150);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen text-white selection:bg-blue-600/40 selection:text-white overflow-x-hidden bg-[#010409]">
      {/* Global Fixed Robot Background Layer */}
      <div className="global-robot-bg" aria-hidden="true" />

      {/* Main Website Content Layer */}
      <div className="relative z-10">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <About />
      <Products />
      <Services />
      <Industries />
      <Process />
      <Testimonials />
      <Careers />
      <Locations />
      <Contact />
      <Footer />
    </div>
  </div>
  );
};

export default Index;
