import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import GlassCard from "./GlassCard";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface InteractiveServiceCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  image?: string;
  details?: string[];
  className?: string;
}

export const InteractiveServiceCard = ({
  icon: Icon,
  title,
  desc,
  image,
  details = ["Strategy", "Design", "Development", "Launch"],
  className,
}: InteractiveServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  // Subtle 3D tilt effects
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isHovered) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    if (!width || !height) return;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsHovered(!isHovered)}
      className={cn("relative group perspective-[1000px] h-full", className)}
    >
      {/* Electric Blue Outer Glow on Hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 opacity-0 group-hover:opacity-100 rounded-2xl blur-lg transition duration-500 z-0" />

      <GlassCard
        hover={false}
        className="relative z-10 h-full flex flex-col justify-between overflow-hidden transition-all duration-300 bg-[#030712]/90 border-blue-900/40 group-hover:border-blue-500/60 p-6 sm:p-7"
      >
        {image && (
          <div
            className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        )}

        <div style={{ transform: "translateZ(20px)" }} className="flex flex-col h-full relative z-10">
          <div className="flex items-center justify-between mb-5">
            <motion.div
              animate={{ scale: isHovered ? 1.08 : 1 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              <Icon size={22} className="text-white" />
            </motion.div>
            <span className="text-xs font-mono text-blue-400/80 bg-blue-950/60 border border-blue-500/20 px-2.5 py-1 rounded-full">
              Enterprise
            </span>
          </div>

          <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2.5 text-white group-hover:text-blue-300 transition-colors">
            {title}
          </h3>

          <p className="text-blue-100/70 text-sm leading-relaxed mb-4 flex-grow">
            {desc}
          </p>

          <motion.div
            initial={false}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
              marginTop: isHovered ? 12 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {details && details.length > 0 && (
              <div className="pt-3 border-t border-blue-900/50">
                <p className="text-xs font-semibold text-blue-400 mb-2 uppercase tracking-wider">Capabilities & Offerings:</p>
                <ul className="space-y-1.5">
                  {details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-blue-200/90 flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          <div className="mt-4 pt-3 border-t border-blue-950/40 flex items-center justify-between text-xs font-medium text-blue-400 group-hover:text-blue-300">
            <span>Learn More</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
