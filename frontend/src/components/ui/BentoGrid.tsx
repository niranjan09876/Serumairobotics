import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  onClick,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "row-span-1 rounded-2xl group/bento transition-all duration-300 p-5 sm:p-6 justify-between flex flex-col space-y-4 bg-[#020617]/90 border border-blue-950/80 hover:border-blue-500/50 shadow-[0_4px_24px_rgba(0,10,30,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]",
        className
      )}
    >
      {header && (
        <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl overflow-hidden bg-black/60 border border-blue-950/60">
          {header}
        </div>
      )}

      <div className="group-hover/bento:translate-x-1.5 transition duration-300">
        {icon}
        <div className="font-heading font-bold text-lg sm:text-xl text-white group-hover/bento:text-blue-400 transition-colors mb-1.5 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-blue-100/70 text-xs sm:text-sm">
          {description}
        </div>
      </div>
    </div>
  );
};
