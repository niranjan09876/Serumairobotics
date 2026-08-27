import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Send, Mail, Phone, MapPin, Sparkles, MessageSquare } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Message sent! Our engineering team will be in touch within 24 hours.");
    reset();
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-[#030712]/80 border border-blue-950/80 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-sm sm:text-base text-white placeholder:text-blue-200/40";

  return (
    <section id="contact" className="section-padding bg-[#010409]">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle
          badge="Initiate Dialogue"
          title="Let's build"
          gradientTitle="future dimensions."
          description="Have a high-scale project or AI initiative in mind? Connect directly with our engineering team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 max-w-5xl mx-auto">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <GlassCard hover={false} className="bg-[#020617]/95 border-blue-950/90 p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,10,30,0.6)]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="e.g. Alex Morgan"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="alex@company.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1.5">
                      Phone (Optional)
                    </label>
                    <input
                      {...register("phone")}
                      placeholder="+1 (555) 000-0000"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1.5">
                      Project Area
                    </label>
                    <select {...register("service")} className={inputClasses}>
                      <option value="" className="bg-slate-900 text-gray-300">Select Capability</option>
                      <option value="Web Development" className="bg-slate-900 text-white">Full-Stack Web Engineering</option>
                      <option value="Mobile Solutions" className="bg-slate-900 text-white">Mobile Architecture (iOS / Android)</option>
                      <option value="UI/UX Engineering" className="bg-slate-900 text-white">UI/UX Systems & Prototyping</option>
                      <option value="Cloud & DevOps" className="bg-slate-900 text-white">Cloud & DevOps Automation</option>
                      <option value="AI & Machine Learning" className="bg-slate-900 text-white">AI / LLM & OCR Solutions</option>
                      <option value="Product Strategy" className="bg-slate-900 text-white">Enterprise Product Strategy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-blue-300 mb-1.5">
                    Project Brief
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    rows={4}
                    placeholder="Tell us about your project goals, scope, and target timeline..."
                    className={inputClasses}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-500 hover:from-blue-500 hover:to-sky-400 text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300"
                >
                  <span>Transmit Message</span>
                  <Send size={16} />
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Quick Contact & Details */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4 flex flex-col justify-between"
          >
            {[
              { icon: Mail, label: "Direct Communications", value: "serumairobotics@gmail.com", action: "mailto:serumairobotics@gmail.com" },
              { icon: Phone, label: "Enterprise Support", value: "+1 (555) 123-4567", action: "tel:+15551234567" },
              { icon: MapPin, label: "Global Headquarters", value: "Hyderabad, India", action: "#" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <GlassCard key={c.label} className="flex items-center gap-4 bg-[#020617]/90 border-blue-950/80 hover:border-blue-500/50 p-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.35)]">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-blue-400/80">{c.label}</p>
                    <p className="font-semibold text-sm sm:text-base text-white mt-0.5">{c.value}</p>
                  </div>
                </GlassCard>
              );
            })}

            {/* Quick Advisory Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-950/60 to-sky-950/30 border border-blue-500/20 backdrop-blur-md">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs sm:text-sm mb-1.5">
                <Sparkles size={16} />
                <span>NDA & Confidentiality</span>
              </div>
              <p className="text-xs text-blue-100/70 leading-relaxed">
                All inquiries and project briefs are covered under standard mutual non-disclosure agreements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
