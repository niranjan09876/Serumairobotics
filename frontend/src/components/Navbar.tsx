import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ui/ThemeToggle";
import logo from "../assets/logo.png";

const links = ["About", "Services", "Portfolio", "Process", "Careers", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-[#010409]/85 backdrop-blur-xl border-b border-blue-950/60 shadow-[0_4px_30px_rgba(0,10,30,0.5)]"
            : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 font-heading font-bold text-lg sm:text-xl text-white group"
          >
            <div className="relative flex items-center justify-center">
              <img
                src={logo}
                alt="SERUM AI ROBOTICS Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(14,165,233,0.9)] transition-all duration-300"
              />
            </div>
            <span className="tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 group-hover:text-blue-400 transition-colors">
              SERUM AI ROBOTICS
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="text-sm font-medium text-blue-100/70 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-200 relative group py-1"
              >
                {l}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-sky-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </div>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => scrollTo("contact")}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(14,165,233,0.55)] transition-all duration-300"
            >
              <span>Start Project</span>
              <ArrowUpRight size={15} />
            </button>
            <button
              className="md:hidden p-2 rounded-lg bg-blue-950/50 border border-blue-500/20 text-white hover:bg-blue-900/40 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X size={20} className="text-blue-400" /> : <Menu size={20} className="text-blue-400" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
            />
            {/* Menu Slide-in */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] z-50 bg-[#020617] border-l border-blue-900/40 p-6 pt-24 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-widest font-semibold text-blue-400/80 mb-2">Navigation</p>
                {links.map((l, i) => (
                  <motion.button
                    key={l}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    onClick={() => scrollTo(l)}
                    className="text-xl font-heading font-semibold text-left text-blue-100 hover:text-blue-400 py-2 border-b border-blue-950/60 transition-colors flex items-center justify-between"
                  >
                    <span>{l}</span>
                    <ArrowUpRight size={16} className="text-blue-500/60" />
                  </motion.button>
                ))}
              </div>

              <div className="pt-6 border-t border-blue-950/80">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 text-sm"
                >
                  <span>Start Project</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
