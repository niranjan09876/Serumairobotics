import { motion } from "framer-motion";

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

  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans bg-[#010409] pt-24 sm:pt-28 pb-16 px-4">
      {/* Hero Background Image Layer - Preserving Original Framing & High Visibility */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center select-none" aria-hidden="true">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-[45%_center] md:object-center opacity-90 filter contrast-[1.06] brightness-[1.02]"
        />
        {/* Soft edge blend overlays to seamlessly integrate into #010409 while keeping the image clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#010409] via-transparent to-[#010409]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(1,4,9,0.08)_0%,rgba(1,4,9,0.32)_70%,#010409_100%)]" />
      </div>

      {/* Background ambient electric blue glowing spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[500px] md:h-[700px] bg-gradient-to-tr from-blue-600/20 via-sky-500/15 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-700/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Cyber Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main Content - Centered Horizontally over Background Image */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white w-full max-w-6xl mx-auto text-center px-2">
        {/* Brand Display */}
        <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto select-none">
          <h1 className="flex flex-col items-center justify-center w-full font-heading">
            {/* 1. SERUM AI */}
            <motion.div
              custom={0.2}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="flex items-baseline justify-center gap-2.5 sm:gap-4 md:gap-6 lg:gap-8 select-none"
            >
              <span className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[9.5rem] font-extrabold tracking-tight leading-none text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]">
                SERUM
              </span>
              <span className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl 2xl:text-[9.5rem] font-extrabold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 drop-shadow-[0_0_40px_rgba(59,130,246,0.85)]">
                AI
              </span>
            </motion.div>

            {/* 2. ROBOTICS */}
            <motion.div
              custom={0.35}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-6 w-full max-w-2xl sm:max-w-3xl mt-2 sm:mt-3 select-none"
            >
              <span className="h-[1.5px] sm:h-[2px] flex-1 max-w-[25px] xs:max-w-[45px] sm:max-w-[80px] md:max-w-[130px] lg:max-w-[160px] bg-gradient-to-r from-transparent via-blue-500/60 to-sky-400 rounded-full" />
              <span className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold tracking-[0.35em] xs:tracking-[0.45em] sm:tracking-[0.55em] md:tracking-[0.65em] leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)] uppercase pl-[0.35em] xs:pl-[0.45em] sm:pl-[0.55em] md:pl-[0.65em]">
                ROBOTICS
              </span>
              <span className="h-[1.5px] sm:h-[2px] flex-1 max-w-[25px] xs:max-w-[45px] sm:max-w-[80px] md:max-w-[130px] lg:max-w-[160px] bg-gradient-to-l from-transparent via-blue-500/60 to-sky-400 rounded-full" />
            </motion.div>
          </h1>
        </div>

        {/* 3. ENGINEERING INTELLIGENT FUTURE DIMENSIONS */}
        <motion.p
          custom={0.5}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="mt-3 sm:mt-4 md:mt-5 text-[10px] xs:text-xs sm:text-sm md:text-base uppercase tracking-[0.18em] xs:tracking-[0.24em] sm:tracking-[0.32em] md:tracking-[0.38em] text-blue-200/90 font-medium max-w-2xl px-2"
        >
          ENGINEERING INTELLIGENT FUTURE DIMENSIONS
        </motion.p>

        {/* 4. Futuristic AI */}
        <motion.h2
          custom={0.65}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="mt-6 sm:mt-8 md:mt-10 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.85)] leading-tight"
        >
          Futuristic AI
        </motion.h2>

        {/* 5. Robotics Technology */}
        <motion.h2
          custom={0.8}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="mt-1 sm:mt-2 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.85)] leading-tight"
        >
          Robotics Technology
        </motion.h2>

        {/* 6. TRANSFORMING PUBLIC SERVICES & HUMAN EXPERIENCE */}
        <motion.p
          custom={0.95}
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="mt-4 sm:mt-6 md:mt-7 text-xs xs:text-sm sm:text-base md:text-lg uppercase tracking-[0.12em] xs:tracking-[0.18em] sm:tracking-[0.24em] text-white/95 sm:text-white font-semibold max-w-4xl px-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          TRANSFORMING PUBLIC SERVICES & HUMAN EXPERIENCE
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
