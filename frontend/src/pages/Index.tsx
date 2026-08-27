import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Careers from "@/components/Careers";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-[#010409] text-white min-h-screen selection:bg-blue-600/40 selection:text-white overflow-x-hidden">
    <ScrollProgress />
    <Navbar />
    <Hero />
    <TrustedCompanies />
    <Portfolio />
    <About />
    <Services />
    <Industries />
    <Process />
    <Testimonials />
    <Careers />
    <Locations />
    <Contact />
    <Footer />
  </div>
);

export default Index;
