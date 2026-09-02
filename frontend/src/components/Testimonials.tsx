import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import GlassCard from "./ui/GlassCard";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechVenture Global",
    text: "SERUM AI ROBOTICS transformed our digital presence entirely. Their architectural depth, attention to detail, and execution speed exceeded all our benchmarks.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Chief Technology Officer",
    company: "FinanceFlow Inc.",
    text: "Working with SERUM AI ROBOTICS was a game-changer. They delivered a complex real-time OCR and financial platform ahead of schedule with flawless stability.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Head of Digital Product",
    company: "HealthHub Telemetry",
    text: "The team's expertise in security and high-availability systems is unmatched. They built us a clinical interface that our medical specialists genuinely love.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Co-Founder & CEO",
    company: "EduSpark AI",
    text: "From concept to full global scale, SERUM AI ROBOTICS operated as a true technical co-founder. Their engineering strategy accelerated our product-market fit by months.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section id="testimonials" className="section-padding bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle
          badge="Endorsements"
          title="What executive leaders"
          gradientTitle="say."
          description="Direct feedback from founders, VP engineers, and product executives who trust our technology."
        />

        <div className="max-w-3xl mx-auto relative px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <GlassCard
                hover={false}
                className="relative text-center py-8 sm:py-12 px-6 sm:px-12 bg-[#020617]/95 border-blue-950/90 shadow-[0_8px_32px_rgba(0,10,30,0.6)]"
              >
                <div className="absolute top-6 left-6 text-blue-500/20 pointer-events-none">
                  <Quote size={48} />
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-sky-400 text-sky-400 drop-shadow-[0_0_8px_#38bdf8]"
                    />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-base sm:text-lg md:text-xl text-blue-50 leading-relaxed mb-8 italic relative z-10 font-sans">
                  "{t.text}"
                </p>

                {/* Client Profile */}
                <div className="flex flex-col items-center">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-blue-600 via-sky-500 to-blue-400 p-0.5 mb-3 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center text-blue-300 font-bold text-lg">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>
                  <p className="font-heading font-bold text-base sm:text-lg text-white">{t.name}</p>
                  <p className="text-xs sm:text-sm text-blue-400 font-medium">{t.role} • {t.company}</p>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-900/40 hover:border-blue-400 transition-colors shadow-lg"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "w-8 bg-blue-500 shadow-[0_0_8px_#3b82f6]" : "w-2 bg-blue-950 hover:bg-blue-800"
                    }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 rounded-xl bg-blue-950/60 border border-blue-500/30 text-blue-300 hover:text-white hover:bg-blue-900/40 hover:border-blue-400 transition-colors shadow-lg"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
