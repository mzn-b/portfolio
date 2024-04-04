import React from "react";
import { Parallax } from "react-scroll-parallax";

interface SectionProps {
  rightSide?: boolean;
  speed?: number;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  rightSide,
  speed,
  children,
}) => {
  return (
    <Parallax speed={speed}>
      <div
        className={`h-screen flex justify-center items-center ${rightSide ? "md:pr-20" : "md:pl-20"}`}
      >
        <div className="bg-emerald-400 border-4 border-emerald-900 border-double rounded p-2 bg-opacity-50">
          {children}
        </div>
      </div>
    </Parallax>
  );
};
