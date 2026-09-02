import { motion } from "framer-motion";
import {
  Plane,
  Building2,
  Hospital,
  TrainFront,
  TrainFrontTunnel,
  Bus,
  Building,
  ShieldCheck,
  HeartHandshake,
  Baby,
  GraduationCap,
  ShoppingBag,
  Compass,
  Landmark,
  Library,
  Presentation,
  Camera,
  Info,
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const industries = [
  {
    name: "Airports",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Banks",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hospitals",
    icon: Hospital,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Railway Stations",
    icon: TrainFront,
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Metro Stations",
    icon: TrainFrontTunnel,
    image: "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Bus Terminals",
    icon: Bus,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Government Offices",
    icon: Building,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Smart Police Station",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Elderly Care & Companion",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Neonatal Care",
    icon: Baby,
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Universities",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Shopping Malls",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pilgrimages",
    icon: Compass,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Museums",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Libraries",
    icon: Library,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Convention Centers",
    icon: Presentation,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tourist Attractions",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Smart City Information Kiosks",
    icon: Info,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
];

const Industries = () => (
  <section id="industries" className="section-padding bg-transparent">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        badge="Industries"
        title="Domains we"
        gradientTitle="accelerate."
        description="Autonomous robotic assistants engineered to enhance productivity, safety, and operational excellence across critical sectors."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
        {industries.map((ind, i) => {
          const Icon = ind.icon;
          return (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.05, duration: 0.35 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group glass-card bg-[#020617]/90 border border-blue-950/80 hover:border-blue-500/60 rounded-2xl flex flex-col items-center justify-center text-center p-5 sm:p-6 min-h-[140px] sm:min-h-[160px] relative overflow-hidden shadow-[0_4px_20px_rgba(0,10,30,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <div
                className="absolute inset-0 z-0 opacity-10 group-hover:opacity-25 transition-opacity duration-500 bg-cover bg-center"
                style={{ backgroundImage: `url(${ind.image})` }}
              />
              <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />

              <div className="relative z-10 w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center mb-3.5 shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_22px_rgba(56,189,248,0.6)] group-hover:scale-105 transition-all duration-300">
                <Icon size={24} className="text-white" />
              </div>
              <span className="relative z-10 font-heading font-bold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors leading-snug tracking-tight text-center">
                {ind.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Industries;
