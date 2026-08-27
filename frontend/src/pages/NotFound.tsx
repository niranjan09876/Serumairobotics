import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#010409] text-white px-4">
      <div className="text-center max-w-md p-8 rounded-2xl bg-[#020617] border border-blue-950/80 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
        <div className="w-16 h-16 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center mx-auto mb-6 text-sky-400">
          <AlertCircle size={32} />
        </div>
        <h1 className="text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-400 to-blue-200 mb-2">
          404
        </h1>
        <h2 className="text-xl font-semibold text-white mb-2">Dimension Not Found</h2>
        <p className="text-sm text-blue-100/70 mb-6 leading-relaxed">
          The requested route <span className="font-mono text-blue-400 bg-blue-950/50 px-2 py-0.5 rounded">{location.pathname}</span> does not exist in our ecosystem.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white text-sm shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all"
        >
          <ArrowLeft size={16} />
          Return to Main Ecosystem
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
