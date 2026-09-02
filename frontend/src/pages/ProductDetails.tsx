import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Activity,
  Hospital,
  Sliders,
  Camera,
  RotateCw,
  Volume2,
  BatteryCharging,
  Zap,
} from "lucide-react";
import { getProductBySlug } from "@/data/products";
import robotHead from "@/assets/robot-head.png";

const getHighlightIcon = (highlight: string) => {
  const h = highlight.toLowerCase();
  if (h.includes("camera") || h.includes("mic")) return <Camera size={18} className="text-sky-400" />;
  if (h.includes("360") || h.includes("movement")) return <RotateCw size={18} className="text-sky-400" />;
  if (h.includes("speaker") || h.includes("sound")) return <Volume2 size={18} className="text-sky-400" />;
  if (h.includes("battery")) return <BatteryCharging size={18} className="text-sky-400" />;
  if (h.includes("touch") || h.includes("sensor")) return <Sparkles size={18} className="text-sky-400" />;
  if (h.includes("dock") || h.includes("charge")) return <Zap size={18} className="text-sky-400" />;
  return <CheckCircle2 size={18} className="text-sky-400" />;
};

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const product = getProductBySlug(slug || "priya-ai-robot-receptionist");

  if (!product) {
    return (
      <div className="min-h-screen bg-[#010409] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Product Not Found</h1>
        <p className="text-blue-200/70 mb-8 max-w-md">
          The requested robotics system could not be located in our production registry.
        </p>
        <button
          onClick={() => navigate("/#products")}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)]"
        >
          <ArrowLeft size={18} />
          <span>Back to Products</span>
        </button>
      </div>
    );
  }

  const handleBackToProducts = () => {
    navigate("/#products");
  };

  const handleContact = () => {
    navigate("/#contact");
  };

  const isReferencePanelLayout = product.layout === "reference-panel";
  const isTwoColumnLayout = product.layout === "two-column";

  return (
    <div className="relative min-h-screen bg-[#010409] text-white selection:bg-blue-600/40 selection:text-white overflow-x-hidden">
      {/* Global Background Layer */}
      <div className="global-robot-bg" aria-hidden="true" />

      {/* Sticky Top Header with Back to Products */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#010409]/90 backdrop-blur-xl border-b border-blue-950/70">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <button
            onClick={handleBackToProducts}
            className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-blue-300 hover:text-white transition-colors group py-1.5 px-3 rounded-lg hover:bg-blue-950/40 border border-transparent hover:border-blue-500/30"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform text-blue-400" />
            <span>Back to Products</span>
          </button>

          <Link
            to="/"
            className="flex items-center gap-2 font-heading font-bold select-none group"
            aria-label="SERUM AI ROBOTICS Home"
          >
            <span className="flex items-baseline gap-1 text-sm sm:text-base">
              <span className="font-extrabold tracking-tight text-white group-hover:text-blue-100 transition-colors">
                SERUM
              </span>
              <span className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                AI
              </span>
              <span className="font-bold tracking-tight text-white/90">
                ROBOTICS
              </span>
            </span>
            <img
              src={robotHead}
              alt="Robot Icon"
              className="h-5 sm:h-6 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-12 sm:space-y-16 lg:space-y-20">

        {isReferencePanelLayout ? (
          /* ========================================================================= */
          /* REFERENCE PANEL LAYOUT (Products 5, 6, 7, 8)                              */
          /* Matches exact reference slide composition:                                */
          /* - Title at top-left, SERUM AI ROBOTICS logo at top-right                 */
          /* - Main content inside dark navy panel with thin cyan border               */
          /* - Text box inside dark navy panel with thin cyan border                   */
          /* - Large robot image on left/right matching reference composition          */
          /* ========================================================================= */
          <div className="space-y-6">
            {/* Header: Title at top-left, SERUM AI ROBOTICS branding at top-right */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-2 font-heading font-bold select-none shrink-0">
                <span className="flex items-baseline gap-1 text-base sm:text-lg">
                  <span className="font-extrabold tracking-tight text-white">SERUM</span>
                  <span className="font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500">
                    AI
                  </span>
                  <span className="font-bold tracking-tight text-white/90">ROBOTICS</span>
                </span>
                <img src={robotHead} alt="Robot Icon" className="h-6 w-auto object-contain" />
              </div>
            </div>

            {/* Main Content inside a dark navy panel with a thin cyan border */}
            <div className="rounded-2xl border border-cyan-500/40 bg-[#020b18]/85 backdrop-blur-md p-5 sm:p-8 lg:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* When imageSide is "left" (Products 6 & 8: Banks & Metro Station) */}
                {product.imageSide === "left" && (
                  <div className="lg:col-span-6">
                    <div className="rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_35px_rgba(6,182,212,0.2)] bg-[#020617] group">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto object-cover max-h-[540px] rounded-xl transition-transform duration-700 group-hover:scale-102"
                      />
                    </div>
                  </div>
                )}

                {/* Content Box (Dark navy with thin cyan border) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="rounded-xl border border-cyan-500/60 bg-[#051329]/95 p-6 sm:p-8 shadow-[0_0_30px_rgba(6,182,212,0.15)] space-y-6">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-white leading-relaxed font-sans">
                      {product.intro}
                    </p>

                    {product.sectionTitle && (
                      <div className="space-y-4 pt-2">
                        <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                          <span>{product.sectionTitle}</span>
                        </h2>

                        {product.sectionItems && (
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-blue-100/90 font-sans">
                            {product.sectionItems.map((item) => (
                              <div key={item} className="flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {product.additionalSections &&
                      product.additionalSections.map((sec) => (
                        <div key={sec.title} className="space-y-4 pt-3">
                          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                            <span>{sec.title}</span>
                          </h2>

                          {sec.items && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-blue-100/90 font-sans">
                              {sec.items.map((item) => (
                                <div key={item} className="flex items-start gap-2.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={handleContact}
                        className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all flex items-center gap-2 group"
                      >
                        <span>Request Deployment Demo</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={handleBackToProducts}
                        className="px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-blue-300 hover:text-white bg-blue-950/40 hover:bg-blue-900/40 border border-cyan-500/30 transition-colors"
                      >
                        Explore All Products
                      </button>
                    </div>
                  </div>
                </div>

                {/* When imageSide is "right" (Products 5 & 7: Airport & Hospitals) */}
                {product.imageSide === "right" && (
                  <div className="lg:col-span-6">
                    <div className="rounded-xl overflow-hidden border border-cyan-500/40 shadow-[0_0_35px_rgba(6,182,212,0.2)] bg-[#020617] group">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-auto object-cover max-h-[540px] rounded-xl transition-transform duration-700 group-hover:scale-102"
                      />
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        ) : isTwoColumnLayout ? (
          /* ========================================================================= */
          /* TWO-COLUMN HERO LAYOUT (Product 3: AI Assistant & Product 4: AI Buddy)    */
          /* Left: Label, Heading, Description, Specs Table, Key Tech/Features, Grid   */
          /* Right: Large prominent robot image with cyber backdrop                   */
          /* ========================================================================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Small label: OUR PRODUCT */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-mono tracking-wide">
                <Sparkles size={14} className="text-sky-400" />
                <span>{product.detailLabel || product.badge}</span>
              </div>

              {/* Large heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
                {product.title}
              </h1>

              {/* Mobile/Tablet stacked robot image */}
              <div className="lg:hidden my-6">
                <div className={`relative mx-auto max-w-sm rounded-3xl overflow-hidden border border-blue-500/40 bg-[#020617]/90 shadow-[0_0_40px_rgba(59,130,246,0.35)] flex flex-col items-center ${
                  product.imageFit === "contain" ? "p-4" : "p-2"
                }`}>
                  {product.imageFit === "contain" && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.25)_0%,transparent_70%)] pointer-events-none" />
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className={
                      product.imageFit === "contain"
                        ? "w-auto h-auto max-h-[460px] object-contain mx-auto py-2 drop-shadow-[0_15px_35px_rgba(59,130,246,0.45)]"
                        : "w-full h-auto max-h-[420px] object-cover rounded-2xl mx-auto shadow-md"
                    }
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent p-3 text-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                      {product.id === "ai-buddy-robot" ? "AI Companion Robot" : "Moving AI Assistant"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Short professional description */}
              <p className="text-base sm:text-lg md:text-xl text-blue-100/85 leading-relaxed font-sans font-normal border-l-2 border-blue-500/60 pl-4 sm:pl-5">
                {product.intro}
              </p>

              {/* Robot Specifications Table */}
              {product.specifications && (
                <section className="space-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Sliders size={18} />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        Robot Specifications
                      </h2>
                      <p className="text-xs text-blue-200/60 font-mono">
                        Physical, mechanical, and operational parameters
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-blue-950/80 bg-[#020617]/85 backdrop-blur-md shadow-[0_4px_24px_rgba(0,10,30,0.5)]">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-blue-900/60 bg-blue-950/40">
                            <th className="py-3.5 px-5 font-heading font-semibold text-xs sm:text-sm text-blue-300 w-1/3">
                              Parameter
                            </th>
                            <th className="py-3.5 px-5 font-heading font-semibold text-xs sm:text-sm text-blue-300 w-2/3">
                              Specification
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-950/60 font-sans text-xs sm:text-sm">
                          {product.specifications.map((spec, i) => (
                            <tr
                              key={spec.parameter}
                              className={i % 2 === 0 ? "bg-transparent" : "bg-blue-950/20 hover:bg-blue-950/30 transition-colors"}
                            >
                              <td className="py-3 px-5 font-medium text-white/95 whitespace-nowrap sm:whitespace-normal">
                                {spec.parameter}
                              </td>
                              <td className="py-3 px-5 text-blue-100/80">
                                {spec.specification}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              )}

              {/* Key Features / Key Technologies */}
              {product.technologies && (
                <section className="space-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        {product.featuresTitle || "Key Technologies"}
                      </h2>
                      <p className="text-xs text-blue-200/60 font-mono">
                        {product.featuresSubtitle || "State-of-the-art AI stack and embedded systems"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {product.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="p-3.5 rounded-xl bg-[#020617]/80 border border-blue-950/70 hover:border-blue-500/40 transition-all flex items-start gap-3 group shadow-sm"
                      >
                        <div className="w-5 h-5 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                          <CheckCircle2 size={12} className="text-sky-400 group-hover:text-white" />
                        </div>
                        <span className="text-xs sm:text-sm text-blue-100/90 font-normal leading-relaxed">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Functional Highlights (for Product 4: AI Buddy Robot) */}
              {product.functionalHighlights && product.functionalHighlights.length > 0 && (
                <section className="space-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        Functional Highlights
                      </h2>
                      <p className="text-xs text-blue-200/60 font-mono">
                        Hardware capabilities, audio-visual array, and mobility
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {product.functionalHighlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="p-4 rounded-xl bg-[#020617]/85 border border-blue-950/80 hover:border-blue-500/50 transition-all flex items-center gap-3.5 group shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                      >
                        <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-500/30 group-hover:border-blue-400/50 transition-colors">
                          {getHighlightIcon(highlight)}
                        </div>
                        <span className="text-xs sm:text-sm text-blue-100 font-medium leading-tight">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Use Cases (if defined, e.g. for Product 3) */}
              {product.useCases && product.useCases.length > 0 && (
                <section className="space-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Hospital size={18} />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
                        {product.useCasesTitle || "Healthcare Use Cases"}
                      </h2>
                      <p className="text-xs text-blue-200/60 font-mono">
                        {product.useCasesSubtitle || "Operational hospital and clinic deployments"}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.useCases.map((useCase) => (
                      <div
                        key={useCase}
                        className="p-3.5 rounded-xl bg-[#020617]/80 border border-blue-950/70 hover:border-blue-500/40 transition-all flex items-center gap-3 group shadow-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-sky-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(14,165,233,0.8)] transition-all shrink-0" />
                        <span className="text-xs sm:text-sm text-blue-100/90 font-medium">
                          {useCase}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={handleContact}
                  className="px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:shadow-[0_0_35px_rgba(14,165,233,0.65)] transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Request Deployment Demo</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleBackToProducts}
                  className="px-5 py-3.5 rounded-xl font-medium text-sm text-blue-300 hover:text-white bg-blue-950/40 hover:bg-blue-900/40 border border-blue-500/30 transition-all duration-200"
                >
                  Explore All Products
                </button>
              </div>
            </div>

            {/* Right Column: Display the provided robot image prominently */}
            <div className="hidden lg:flex lg:col-span-5 justify-center lg:sticky lg:top-28 self-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className={`relative w-full max-w-md rounded-3xl overflow-hidden border border-blue-500/40 bg-[#020617]/90 shadow-[0_0_50px_rgba(59,130,246,0.35)] group flex flex-col items-center justify-center ${
                  product.imageFit === "contain" ? "p-6 min-h-[620px]" : "p-3 min-h-[580px]"
                }`}
              >
                {/* Outer decorative neon glows */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-transparent opacity-30 blur-xl group-hover:opacity-50 transition duration-700 pointer-events-none" />

                {/* Cyber radial gradient glow behind robot */}
                {product.imageFit === "contain" ? (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.28)_0%,rgba(14,165,233,0.08)_50%,transparent_75%)] pointer-events-none" />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.18)_0%,transparent_70%)] pointer-events-none" />
                )}

                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className={
                      product.imageFit === "contain"
                        ? "w-auto h-auto max-h-[640px] xl:max-h-[700px] object-contain mx-auto py-2 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_20px_45px_rgba(59,130,246,0.5)]"
                        : "w-full h-auto max-h-[580px] object-cover rounded-2xl shadow-[0_10px_30px_rgba(0,10,30,0.8)] transition-transform duration-700 group-hover:scale-102"
                    }
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent p-4 text-center">
                    <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                      {product.id === "ai-buddy-robot" ? "AI Companion Robot" : "Autonomous Moving Assistant"}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          /* ========================================================================= */
          /* STANDARD LAYOUT (Products 1 & 2: Priya and Police AI Robot) - UNCHANGED   */
          /* ========================================================================= */
          <>
            {/* Hero Section: Text Info on Left, Large Robot Image on Right (desktop); Stacked on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Badge, Introduction & CTA */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-mono tracking-wide">
                  <Sparkles size={14} className="text-sky-400" />
                  <span>{product.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight">
                  {product.title}
                </h1>

                {/* Mobile Image Insertion */}
                <div className="lg:hidden my-6">
                  <div className={`relative mx-auto max-w-md rounded-2xl overflow-hidden border border-blue-900/60 bg-[#020617]/90 shadow-[0_0_40px_rgba(59,130,246,0.3)] ${
                    product.imageFit === "contain" ? "p-4" : ""
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-sky-400/10 pointer-events-none" />
                    {product.imageFit === "contain" && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.2)_0%,transparent_70%)] pointer-events-none" />
                    )}
                    <img
                      src={product.image}
                      alt={product.title}
                      className={
                        product.imageFit === "contain"
                          ? "w-auto h-auto max-h-[440px] object-contain mx-auto py-2 drop-shadow-[0_10px_25px_rgba(59,130,246,0.4)]"
                          : "w-full h-auto object-cover max-h-[460px] mx-auto"
                      }
                    />
                  </div>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-blue-100/85 leading-relaxed font-sans font-normal border-l-2 border-blue-500/60 pl-4 sm:pl-5">
                  {product.intro}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                  <button
                    onClick={handleContact}
                    className="px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:shadow-[0_0_35px_rgba(14,165,233,0.65)] transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>Request Deployment Demo</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={handleBackToProducts}
                    className="px-5 py-3.5 rounded-xl font-medium text-sm text-blue-300 hover:text-white bg-blue-950/40 hover:bg-blue-900/40 border border-blue-500/30 transition-all duration-200"
                  >
                    Explore All Products
                  </button>
                </div>
              </div>

              {/* Right Column (Desktop): Prominent Glowing Robot Image */}
              <div className="hidden lg:flex lg:col-span-5 justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-full max-w-md rounded-3xl overflow-hidden border border-blue-500/40 bg-[#020617]/90 shadow-[0_0_50px_rgba(59,130,246,0.35)] group flex flex-col items-center justify-center ${
                    product.imageFit === "contain" ? "p-4 min-h-[540px]" : ""
                  }`}
                >
                  {/* Outer decorative neon glows */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-sky-400 to-transparent opacity-30 blur-xl group-hover:opacity-50 transition duration-700 pointer-events-none" />
                  
                  {product.imageFit === "contain" && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(59,130,246,0.22)_0%,rgba(14,165,233,0.06)_50%,transparent_75%)] pointer-events-none" />
                  )}

                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className={
                        product.imageFit === "contain"
                          ? "w-auto h-auto max-h-[560px] object-contain py-2 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_15px_35px_rgba(59,130,246,0.5)]"
                          : "w-full h-auto object-cover max-h-[580px] transition-transform duration-700 group-hover:scale-102"
                      }
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent p-5 text-center">
                      <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                        Autonomous Receptionist System
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Robot Specifications Table */}
            {product.specifications && (
              <section className="space-y-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Sliders size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                      Robot Specifications
                    </h2>
                    <p className="text-xs sm:text-sm text-blue-200/60 font-mono">
                      Physical, mechanical, and operational parameters
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-blue-950/80 bg-[#020617]/85 backdrop-blur-md shadow-[0_4px_24px_rgba(0,10,30,0.5)]">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-blue-900/60 bg-blue-950/40">
                          <th className="py-4 px-5 sm:px-7 font-heading font-semibold text-sm sm:text-base text-blue-300 w-1/3">
                            Parameter
                          </th>
                          <th className="py-4 px-5 sm:px-7 font-heading font-semibold text-sm sm:text-base text-blue-300 w-2/3">
                            Specification
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-blue-950/60 font-sans text-sm sm:text-base">
                        {product.specifications.map((spec, i) => (
                          <tr
                            key={spec.parameter}
                            className={i % 2 === 0 ? "bg-transparent" : "bg-blue-950/20 hover:bg-blue-950/30 transition-colors"}
                          >
                            <td className="py-4 px-5 sm:px-7 font-medium text-white/95 whitespace-nowrap sm:whitespace-normal">
                              {spec.parameter}
                            </td>
                            <td className="py-4 px-5 sm:px-7 text-blue-100/80">
                              {spec.specification}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {/* Key Technologies & Use Cases Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

              {/* Key Technologies */}
              {product.technologies && (
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Cpu size={20} />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                        Key Technologies
                      </h2>
                      <p className="text-xs sm:text-sm text-blue-200/60 font-mono">
                        State-of-the-art AI stack and embedded systems
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {product.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="p-4 rounded-xl bg-[#020617]/80 border border-blue-950/70 hover:border-blue-500/40 transition-all flex items-start gap-3.5 group shadow-sm"
                      >
                        <div className="w-6 h-6 rounded-md bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                          <CheckCircle2 size={14} className="text-sky-400 group-hover:text-white" />
                        </div>
                        <span className="text-sm sm:text-base text-blue-100/90 font-normal leading-relaxed">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Use Cases */}
              {product.useCases && (
                <section className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      {product.id === "priya-ai-robot" ? (
                        <Hospital size={20} />
                      ) : (
                        <ShieldCheck size={20} />
                      )}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                        {product.useCasesTitle || "Use Cases"}
                      </h2>
                      <p className="text-xs sm:text-sm text-blue-200/60 font-mono">
                        {product.useCasesSubtitle || "Operational deployments and applications"}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {product.useCases.map((useCase) => (
                      <div
                        key={useCase}
                        className="p-4 rounded-xl bg-[#020617]/80 border border-blue-950/70 hover:border-blue-500/40 transition-all flex items-center gap-3 group shadow-sm"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-sky-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(14,165,233,0.8)] transition-all shrink-0" />
                        <span className="text-sm sm:text-base text-blue-100/90 font-medium">
                          {useCase}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </>
        )}

        {/* Key Benefits (Shared across standard and two-column products when defined) */}
        {product.benefits && product.benefits.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Key Benefits
                </h2>
                <p className="text-xs sm:text-sm text-blue-200/60 font-mono">
                  Measurable operational and service value
                </p>
              </div>
            </div>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                product.benefits.length === 5
                  ? "lg:grid-cols-5 md:grid-cols-3"
                  : "lg:grid-cols-4"
              } gap-5 sm:gap-6`}
            >
              {product.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-2xl bg-[#020617]/90 border border-blue-950/80 hover:border-blue-500/50 shadow-[0_4px_20px_rgba(0,10,30,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center text-white mb-4 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                      <Activity size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-100/75 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA Banner (Shared across all products) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/70 via-[#020617]/90 to-blue-950/70 border border-blue-800/40 text-center space-y-6 shadow-[0_0_40px_rgba(59,130,246,0.25)]">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
              {product.ctaHeading || `Ready to deploy ${product.title}?`}
            </h2>
            <p className="text-sm sm:text-base text-blue-200/80">
              {product.ctaDescription ||
                "Schedule a technical consultation with our AI robotics engineering team for on-site trial and integration."}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleContact}
              className="px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2"
            >
              <span>Contact Engineering Team</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={handleBackToProducts}
              className="px-6 py-3.5 rounded-xl font-medium text-sm text-blue-300 hover:text-white bg-blue-950/50 hover:bg-blue-900/50 border border-blue-500/30 transition-colors"
            >
              ← Back to Products
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default ProductDetails;
