import { Zap, Github, Linkedin, Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";
import logo from "../assets/logo.png";

const XIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-blue-950/80 bg-[#010409] py-12 sm:py-16 text-white relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-12">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 font-heading font-bold text-xl">
              <img
                src={logo}
                alt="SERUM AI ROBOTICS Logo"
                className="w-8 h-8 object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
              />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                SERUM AI ROBOTICS
              </span>
            </div>
            <p className="text-sm text-blue-100/70 leading-relaxed max-w-sm">
              Architecting intelligent digital ecosystems, enterprise cloud architectures, and transformative AI systems for visionary global brands.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-2 flex-wrap">
              {[
                { Icon: XIcon, href: "https://x.com", label: "X" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/niranjan09876/aixdimension", label: "GitHub" },
                { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Youtube, href: "https://youtube.com", label: "YouTube" }
              ].map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-[#020617] border border-blue-950/80 hover:border-blue-500/60 hover:text-sky-400 flex items-center justify-center text-blue-300 transition-all duration-200 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            {
              title: "Solutions",
              items: ["Web Architecture", "Mobile Engineering", "UI/UX Systems", "Cloud & DevOps", "AI & Deep Learning"]
            },
            {
              title: "Company",
              items: ["About AI X", "Methodology", "Featured Work", "Open Careers", "Contact Direct"]
            },
            {
              title: "Security & Legal",
              items: ["Privacy Policy", "Terms of Service", "Cookie Protocol", "Security Whitepaper", "Enterprise SLA"]
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-white mb-4 text-sm sm:text-base tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-xs sm:text-sm text-blue-100/60 hover:text-blue-300 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-950/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-blue-100/50">
            © {new Date().getFullYear()} SERUM AI ROBOTICS Inc. All rights reserved. Built for future dimensions.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-sky-300 transition-colors px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-900/40 hover:border-blue-500/40"
          >
            <span>Back to Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
