import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { BentoGridItem } from "./ui/BentoGrid";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Summarizer Flow AI",
    desc: "Intelligent deep-learning text extraction and document intelligence platform.",
    image: "/textflow_ai_banner.png",
    link: "/finance-flow",
    tag: "AI Engine",
  },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="section-padding bg-[#010409]">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          badge="Featured Projects"
          title="Engineered for"
          gradientTitle="impact."
          description="Explore our cutting-edge AI and enterprise deployments delivering measurable performance."
        />

        <div className="flex justify-center mt-8">
          <div className="w-full max-w-3xl">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <BentoGridItem
                  className="cursor-pointer"
                  onClick={() => p.link && navigate(p.link)}
                  title={
                    <div className="flex items-center justify-between">
                      <span>{p.title}</span>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-950/80 text-blue-400 border border-blue-500/30">
                        {p.tag}
                      </span>
                    </div>
                  }
                  description={p.desc}
                  header={
                    <div
                      className="w-full h-full min-h-[12rem] sm:min-h-[15rem] md:min-h-[18rem] bg-cover bg-center bg-no-repeat relative group/image overflow-hidden"
                      style={{ backgroundImage: `url(${p.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-black/40 to-transparent group-hover/image:opacity-40 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-blue-600/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover/bento:opacity-100 transition-all duration-300 scale-75 group-hover/bento:scale-100 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                          <ExternalLink size={20} className="text-white" />
                        </div>
                      </div>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
