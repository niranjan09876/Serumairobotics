import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const offices = [
  { city: "Hyderabad", country: "India", status: "Engineering Hub", timezone: "IST (UTC+5:30)" },
];

const Locations = () => (
  <section id="locations" className="section-padding bg-transparent">
    <div className="container mx-auto max-w-6xl">
      <SectionTitle
        badge="Global Footprint"
        title="Our distributed"
        gradientTitle="presence."
        description="Operating seamlessly across timezones to provide round-the-clock engineering velocity."
      />
      <div className="flex justify-center">
        {offices.map((o, i) => (
          <motion.div
            key={o.city}
            className="w-full max-w-xs sm:max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <GlassCard className="text-center bg-[#020617]/90 border-blue-950/80 hover:border-blue-500/50 p-6 flex flex-col items-center justify-between h-full shadow-[0_4px_24px_rgba(0,10,30,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <MapPin size={22} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white">{o.city}</h3>
              <p className="text-xs sm:text-sm text-blue-100/70 mb-1">{o.country}</p>
              <p className="text-[11px] font-mono text-blue-400/70 mb-3">{o.timezone}</p>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/80 text-sky-400 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.15)]">
                {o.status}
              </span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Locations;
