import { motion } from "framer-motion";
import { HeartPulse, Landmark, ShoppingBag, GraduationCap, Truck } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const industries = [
  { icon: HeartPulse, name: "Healthcare", desc: "HIPAA-ready clinical systems & telemetry", image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5fe3?auto=format&fit=crop&w=800&q=80" },
  { icon: Landmark, name: "FinTech", desc: "High-security banking & payment APIs", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80" },
  { icon: ShoppingBag, name: "E-Commerce", desc: "Omnichannel retail & checkout scaling", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
  { icon: GraduationCap, name: "EdTech", desc: "Interactive LMS & personalized AI tutoring", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" },
  { icon: Truck, name: "Logistics", desc: "Fleet telemetry & AI route optimization", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
];

const Industries = () => (
  <section id="industries" className="section-padding bg-[#010409]">
    <div className="container mx-auto max-w-6xl">
      <SectionTitle
        badge="Industries"
        title="Domains we"
        gradientTitle="accelerate."
        description="Deep vertical expertise across high-growth industries driving modern global commerce."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group glass-card bg-[#020617]/90 border-blue-950/80 hover:border-blue-500/60 flex flex-col items-center text-center p-5 sm:p-6 relative overflow-hidden shadow-[0_4px_20px_rgba(0,10,30,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <div
                className="absolute inset-0 z-0 opacity-10 group-hover:opacity-25 transition-opacity duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${ind.image})` }}
              />

              <div className="relative z-10 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <Icon size={24} className="text-white" />
              </div>
              <span className="relative z-10 font-heading font-bold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors">
                {ind.name}
              </span>
              <p className="relative z-10 text-[11px] text-blue-100/60 mt-1.5 line-clamp-2">
                {ind.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Industries;
