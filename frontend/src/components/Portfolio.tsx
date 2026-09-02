import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { useNavigate } from "react-router-dom";
import { products } from "@/data/products";

const Products = () => {
  const navigate = useNavigate();

  const handleProductClick = (slug: string, customRoute?: string) => {
    if (customRoute) {
      navigate(customRoute);
    } else {
      navigate(`/products/${slug}`);
    }
  };

  return (
    <section id="products" className="section-padding bg-transparent scroll-mt-20">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          badge="Featured Products"
          title="Engineered for"
          gradientTitle="impact."
          description="Explore our cutting-edge autonomous AI robotics and enterprise deployments delivering measurable performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-10 mx-auto">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => handleProductClick(p.slug, p.customRoute)}
              className="group cursor-pointer rounded-2xl bg-[#020617]/90 border border-blue-950/80 hover:border-blue-500/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_4px_24px_rgba(0,10,30,0.5)] hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]"
            >
              {/* Product Image Header */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-black/60 flex items-center justify-center">
                {p.imageFit === "contain" && (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,transparent_70%)] pointer-events-none" />
                )}
                <img
                  src={p.image}
                  alt={p.title}
                  className={`w-full h-full ${
                    p.imageFit === "contain"
                      ? "object-contain p-3 object-center drop-shadow-[0_8px_20px_rgba(59,130,246,0.35)]"
                      : "object-cover object-center"
                  } transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90 pointer-events-none" />
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-950/90 text-sky-400 border border-blue-500/40 backdrop-blur-md shadow-sm">
                    {p.badge}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 font-sans text-blue-100/70 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {p.shortDescription}
                  </p>
                </div>

                {/* View Details Button */}
                <div className="pt-3 border-t border-blue-950/60 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 group-hover:text-white transition-colors">
                    <span>View Details</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform text-sky-400" />
                  </span>

                  <span className="text-xs font-mono text-blue-400/60 uppercase tracking-widest">
                    Enterprise
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
