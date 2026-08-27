import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";

interface FeaturePanelProps {
  title: string;
  description: string;
  illustration?: ReactNode;
  reversed?: boolean;
  actionText?: string;
  className?: string;
}

export const FeaturePanel = ({
  title,
  description,
  illustration,
  reversed = false,
  actionText = "Learn More",
  className,
}: FeaturePanelProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      className={cn("mb-12 sm:mb-16 md:mb-20 last:mb-0", className)}
    >
      <GlassCard
        hover={false}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12 overflow-hidden relative bg-[#030712]/90 border-blue-900/40 shadow-[0_8px_32px_rgba(0,10,30,0.5)]",
        )}
      >
        {/* Subtle background ambient blue glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-sky-500/10 blur-3xl pointer-events-none" />

        <motion.div
          className={cn("flex flex-col z-10", reversed && "lg:order-2")}
          variants={{
            hidden: { opacity: 0, x: reversed ? 30 : -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
              {actionText}
            </span>
          </div>

          <motion.h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4 tracking-tight leading-tight text-white">
            {title}
          </motion.h3>
          <motion.p className="text-sm sm:text-base md:text-lg text-blue-100/70 mb-6 sm:mb-8 leading-relaxed max-w-xl">
            {description}
          </motion.p>

          <motion.div className="flex items-center gap-4">
            <span className="text-xs text-blue-400 font-medium flex items-center gap-1.5 group cursor-pointer hover:text-blue-300">
              <span>Explore Phase Details</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className={cn(
            "relative w-full aspect-video sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden glass-card flex items-center justify-center bg-black/60 border-blue-900/50 p-0 shadow-inner",
            reversed && "lg:order-1"
          )}
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 20 },
            visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          {illustration || (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-sky-900/30 flex items-center justify-center">
              <span className="text-blue-400/50 text-xs font-mono uppercase tracking-widest">Workflow Visualization</span>
            </div>
          )}
        </motion.div>
      </GlassCard>
    </motion.div>
  );
};
