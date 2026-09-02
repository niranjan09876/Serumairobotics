import { motion } from "framer-motion";

const companies = ["Google", "Microsoft", "Amazon", "Stripe", "Netflix", "Spotify", "Airbnb", "Uber", "Oracle", "Nvidia"];

const TrustedCompanies = () => (
  <section className="py-12 sm:py-16 overflow-hidden border-y border-blue-950/50 bg-transparent">
    <div className="container mx-auto px-4 mb-6 sm:mb-8 text-center">
      <p className="text-xs sm:text-sm font-mono text-blue-400/80 uppercase tracking-widest">
        Trusted by world-class engineering teams & enterprises
      </p>
    </div>
    <div className="relative w-full overflow-hidden mask-fade-edges">
      {/* Left/Right Fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#010409] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#010409] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee gap-12 sm:gap-20 items-center whitespace-nowrap">
        {[...companies, ...companies].map((c, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.08 }}
            className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-blue-100/30 hover:text-sky-400 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all cursor-default select-none tracking-wider"
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedCompanies;
