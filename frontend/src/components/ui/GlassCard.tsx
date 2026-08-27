import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className, hover = true }: GlassCardProps) => (
  <motion.div
    whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
    transition={{ type: "spring", stiffness: 350, damping: 25 }}
    className={cn(
      "glass-card p-5 sm:p-6 md:p-8 bg-[#020617]/80 border-blue-950/70 hover:border-blue-500/40 transition-colors duration-300",
      className
    )}
  >
    {children}
  </motion.div>
);

export default GlassCard;
