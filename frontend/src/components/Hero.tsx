import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans bg-[#010409] pt-20 pb-16 px-4">
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
        
        {/* Brand Display - Scalable across mobile, tablet, desktop */}
        <div className="flex flex-col items-center justify-center w-full max-w-full px-2">
          <h1 className="flex items-baseline justify-center flex-nowrap gap-1.5 xs:gap-2 sm:gap-4 md:gap-6 lg:gap-8 font-extrabold tracking-tight font-heading select-none">
            
            {/* SERUM */}
            <motion.div
              custom={0.2}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="inline-flex items-baseline"
            >
              <span className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                S
              </span>
              <span className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[6.2rem] font-bold tracking-tight leading-none text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] ml-0.5">
                ERUM
              </span>
            </motion.div>

            {/* AI */}
            <motion.div
              custom={0.35}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="inline-flex items-baseline mx-0.5 sm:mx-1 md:mx-2"
            >
              <span className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9.5rem] font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 drop-shadow-[0_0_35px_rgba(59,130,246,0.7)]">
                AI
              </span>
            </motion.div>

            {/* ROBOTICS */}
            <motion.div
              custom={0.5}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="inline-flex items-baseline"
            >
              <span className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                R
              </span>
              <span className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[6.2rem] font-bold tracking-tight leading-none text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] ml-0.5">
                OBOTICS
              </span>
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
            onClick={() => scrollToSection("portfolio")}
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
