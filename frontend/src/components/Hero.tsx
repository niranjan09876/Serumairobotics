import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

const Hero = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 25 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: customDelay,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const scrollToSection = (id: string) => {
    const cleanId = id.trim().toLowerCase();
    const el = document.getElementById(cleanId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      smoothScrollTo(Math.max(0, offsetPosition), 480);
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans bg-transparent pt-20 pb-16 px-4">
      {/* Background ambient electric blue glowing spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-700/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Cyber Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white w-full max-w-7xl mx-auto text-center">

        {/* Brand Display - 2-line layout matching official reference */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-2 select-none">
          <h1 className="flex flex-col items-center justify-center gap-2 sm:gap-4 md:gap-6 w-full font-heading">

            {/* Line 1: SERUM AI */}
            <motion.div
              custom={0.2}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="flex items-baseline justify-center gap-2.5 sm:gap-4 md:gap-6 lg:gap-8"
            >
              <span className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[10rem] font-extrabold tracking-tight leading-none text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.2)]">
                SERUM
              </span>
              <span className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[10rem] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 drop-shadow-[0_0_40px_rgba(59,130,246,0.85)]">
                AI
              </span>
            </motion.div>

            {/* Line 2: ─── ROBOTICS ─── */}
            <motion.div
              custom={0.4}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-2.5 sm:gap-5 md:gap-8 w-full max-w-3xl"
            >
              <span className="h-[1.5px] sm:h-[2px] md:h-[2.5px] flex-1 max-w-[30px] xs:max-w-[50px] sm:max-w-[90px] md:max-w-[140px] lg:max-w-[180px] bg-gradient-to-r from-transparent via-blue-500/50 to-sky-400 rounded-full" />
              <span className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-extrabold tracking-[0.3em] xs:tracking-[0.35em] sm:tracking-[0.45em] md:tracking-[0.55em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)] uppercase pl-[0.3em] xs:pl-[0.35em] sm:pl-[0.45em] md:pl-[0.55em]">
                ROBOTICS
              </span>
              <span className="h-[1.5px] sm:h-[2px] md:h-[2.5px] flex-1 max-w-[30px] xs:max-w-[50px] sm:max-w-[90px] md:max-w-[140px] lg:max-w-[180px] bg-gradient-to-l from-transparent via-blue-500/50 to-sky-400 rounded-full" />
            </motion.div>

          </h1>
        </div>

        {/* Subtitle & Tagline */}
        <motion.p
          custom={0.7}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="mt-6 sm:mt-8 md:mt-10 tracking-[0.25em] sm:tracking-[0.4em] text-blue-200/80 text-xs sm:text-sm md:text-base uppercase font-medium max-w-2xl px-4"
        >
          Engineering Intelligent Future Dimensions
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={0.9}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full sm:w-auto px-4"
        >
          <button
            onClick={() => scrollToSection("products")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(14,165,233,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Explore Work</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold bg-blue-950/40 hover:bg-blue-900/40 border border-blue-500/30 hover:border-blue-400/60 text-blue-100 text-sm backdrop-blur-md transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
