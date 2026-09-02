import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight, Sparkles } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const jobs = [
  { title: "Senior Full-Stack AI Engineer", location: "Remote / Hyderabad", type: "Full-time", dept: "Engineering" },
  { title: "Lead UI/UX Product Designer", location: "Bangalore / Remote", type: "Full-time", dept: "Design" },
  { title: "Principal Cloud & DevOps Architect", location: "London / Remote", type: "Full-time", dept: "Infrastructure" },
  { title: "Machine Learning Research Scientist", location: "New York / Remote", type: "Contract", dept: "AI Labs" },
];

const Careers = () => (
  <section id="careers" className="section-padding bg-transparent scroll-mt-20">
    <div className="container mx-auto max-w-5xl">
      <SectionTitle
        badge="Careers"
        title="Join our high-impact"
        gradientTitle="team."
        description="We are building the future of digital architecture. Work on extraordinary problems with a world-class engineering team."
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
        {jobs.map((j, i) => (
          <motion.div
            key={j.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <GlassCard className="group bg-[#020617]/90 border-blue-950/80 hover:border-blue-500/50 p-6 flex flex-col justify-between h-full shadow-[0_4px_24px_rgba(0,10,30,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-blue-400 bg-blue-950/70 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                    {j.dept}
                  </span>
                  <span className="text-xs text-blue-300/60 font-medium">Immediate</span>
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {j.title}
                </h3>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-blue-100/70 mb-5">
                  <span className="flex items-center gap-1.5 bg-blue-950/30 px-2.5 py-1 rounded-lg border border-blue-900/30">
                    <MapPin size={13} className="text-sky-400" /> {j.location}
                  </span>
                  <span className="flex items-center gap-1.5 bg-blue-950/30 px-2.5 py-1 rounded-lg border border-blue-900/30">
                    <Briefcase size={13} className="text-sky-400" /> {j.type}
                  </span>
                </div>
              </div>

              <button className="inline-flex items-center justify-between w-full pt-3 border-t border-blue-950/60 text-xs sm:text-sm font-semibold text-blue-400 group-hover:text-sky-300 transition-colors">
                <span>View Job Spec & Apply</span>
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Careers;
