import { motion } from "framer-motion";

interface SectionTitleProps {
  badge?: string;
  title: string;
  gradientTitle?: string;
  description?: string;
}

const SectionTitle = ({ badge, title, gradientTitle, description }: SectionTitleProps) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="text-center mb-10 sm:mb-14 md:mb-16 max-w-3xl mx-auto px-4"
  >
    {badge && (
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-950/80 border border-blue-500/30 text-blue-400 mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
        <span>{badge}</span>
      </div>
    )}
    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 text-white">
      {title}{" "}
      {gradientTitle && (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-blue-300 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
          {gradientTitle}
        </span>
      )}
    </h2>
    {description && (
      <p className="text-blue-100/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionTitle;
