import { Search, PenTool, Code2, Rocket } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { FeaturePanel } from "./ui/FeaturePanel";

const steps = [
  {
    icon: Search,
    title: "01. Discovery & Deep Architecture",
    desc: "We analyze your business objectives, target demographics, and technological constraints to engineer a comprehensive roadmap, technical specs, and milestone timeline.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    action: "Phase 1: Discovery",
  },
  {
    icon: PenTool,
    title: "02. High-Fidelity UX & Interaction",
    desc: "Our designers craft frictionless user flows, wireframes, and high-fidelity prototypes. Every interface is tuned for conversion, accessibility, and high visual impact.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    action: "Phase 2: Prototyping",
  },
  {
    icon: Code2,
    title: "03. Full-Stack Engineering & AI",
    desc: "Clean, test-driven, modular codebase engineered with high-throughput architectures. We build resilient backend APIs, fast frontend UIs, and robust machine learning pipelines.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    action: "Phase 3: Development",
  },
  {
    icon: Rocket,
    title: "04. Quality Assurance & Global Launch",
    desc: "Automated regression testing, load benchmarking, security audits, and continuous CI/CD deployment to ensure 99.99% uptime and immediate market readiness.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    action: "Phase 4: Deployment",
  },
];

const Process = () => (
  <section id="process" className="section-padding bg-[#010409]">
    <div className="container mx-auto max-w-6xl">
      <SectionTitle
        badge="Methodology"
        title="How we"
        gradientTitle="engineer."
        description="A battle-tested 4-phase agile methodology turning complex digital visions into scalable production systems."
      />

      <div className="mt-10 sm:mt-14">
        {steps.map((s, i) => {
          const isReversed = i % 2 !== 0;
          const Icon = s.icon;
          return (
            <FeaturePanel
              key={s.title}
              title={s.title}
              description={s.desc}
              reversed={isReversed}
              actionText={s.action}
              illustration={
                <div className="relative w-full h-full flex items-center justify-center group overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />

                  <div className="relative z-10 w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-[#020617]/90 backdrop-blur-md flex items-center justify-center border border-blue-500/40 shadow-[0_0_25px_rgba(59,130,246,0.35)] scale-90 group-hover:scale-100 transition-all duration-500">
                    <Icon size={32} className="text-blue-400 drop-shadow-md" />
                  </div>
                </div>
              }
            />
          );
        })}
      </div>
    </div>
  </section>
);

export default Process;
