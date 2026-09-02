import { motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";
import { ShieldCheck, Target, Zap, Award, CheckCircle2 } from "lucide-react";

const stats = [
  { value: 100, suffix: "+", label: "Clients Worldwide", icon: ShieldCheck },
  { value: 80, suffix: "+", label: "Projects Delivered", icon: Zap },
  { value: 15, suffix: "", label: "Countries Served", icon: Target },
  { value: 10, suffix: "+", label: "Years Experience", icon: Award },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const mv = { val: 0 };
          const ctrl = animate(mv, { val: value }, {
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: () => setDisplay(Math.round(mv.val)),
          });
          observer.disconnect();
          return () => ctrl.stop();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-200 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
    >
      {display}{suffix}
    </div>
  );
};

const About = () => (
  <section id="about" className="section-padding bg-transparent scroll-mt-20">
    <div className="container mx-auto max-w-6xl">
      <SectionTitle
        badge="About Us"
        title="About"
        gradientTitle="Us."
        description="We are an innovative technology company specializing in the design, development, and deployment of AI-powered robotic assistants that enhance productivity, safety, and customer experiences across diverse industries."
      />

      {/* About Us Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-12"
      >
        <GlassCard className="bg-[#020617]/90 border-blue-950/80 hover:border-blue-500/50 p-6 sm:p-8">
          <p className="text-blue-100/80 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Serum AI Robotics Pvt Ltd is an innovative technology company specializing in the design, development, and deployment of AI-powered robotic assistants that enhance productivity, safety, and customer experiences across diverse industries.
          </p>
          <p className="text-blue-100/80 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            By integrating <span className="text-blue-300 font-semibold">Artificial Intelligence (AI)</span>, <span className="text-blue-300 font-semibold">Machine Learning (ML)</span>, <span className="text-blue-300 font-semibold">Computer Vision</span>, <span className="text-blue-300 font-semibold">Natural Language Processing (NLP)</span>, <span className="text-blue-300 font-semibold">Robotics</span>, and <span className="text-blue-300 font-semibold">IoT technologies</span>, we build intelligent robotic solutions capable of assisting people in healthcare, hospitality, education, manufacturing, retail, public services, and smart cities.
          </p>
          <p className="text-blue-100/70 text-sm sm:text-base leading-relaxed">
            Our mission is to bridge the gap between humans and intelligent automation by delivering reliable, scalable, and user-friendly robotic systems that improve operational efficiency while creating meaningful human-machine interactions.
          </p>
        </GlassCard>
      </motion.div>

      {/* Stats Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6 mb-12 sm:mb-16">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <GlassCard className="text-center py-5 sm:py-7 px-3 sm:px-4 bg-[#020617]/90 border-blue-950/80 hover:border-blue-500/50 flex flex-col items-center justify-center">
                <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-500/30 flex items-center justify-center mb-3 text-blue-400">
                  <Icon size={18} />
                </div>
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="text-xs sm:text-sm text-blue-100/70 mt-1.5 font-medium">{s.label}</p>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="h-full bg-[#020617]/90 border-blue-950/80 hover:border-blue-500/50 p-6 sm:p-8 flex flex-col">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-blue-950/80 text-blue-400 border border-blue-500/30 mb-3 w-fit">
              Our Mission
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 text-white">
              Our Mission
            </h3>
            <ul className="space-y-3">
              {[
                "Develop advanced AI-powered robotic assistants for real-world applications.",
                "Deliver innovative automation solutions that improve productivity and operational efficiency.",
                "Enable organizations to embrace Industry 4.0 through smart robotics and AI integration.",
                "Build AI systems that are secure, privacy-focused, and tailored to local needs.",
                "Promote sustainable, accessible, and intelligent technologies for the future.",
              ].map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-blue-100/80 flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-sky-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="h-full bg-[#020617]/90 border-blue-950/80 hover:border-blue-500/50 p-6 sm:p-8 flex flex-col">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-sky-950/80 text-sky-400 border border-sky-500/30 mb-3 w-fit">
              Our Vision
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 text-white">
              Our Vision
            </h3>
            <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed mb-6">
              To become a global leader in AI-driven robotic solutions that empower businesses, institutions, and communities through intelligent automation and localized AI innovation.
            </p>
            <div className="mt-auto p-4 rounded-xl bg-blue-950/40 border border-blue-900/40">
              <p className="text-xs sm:text-sm text-blue-300/90 font-medium leading-relaxed">
                Empowering businesses, institutions, and communities through intelligent automation and localized AI innovation.
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
