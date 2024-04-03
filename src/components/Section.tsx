import React from "react";
import { Parallax } from "react-scroll-parallax";

interface SectionProps {
  speed?: number;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ speed, children }) => {
  return (
    <Parallax speed={speed}>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-emerald-400 rounded p-2 bg-opacity-50">
          {children}
        </div>
      </div>
    </Parallax>
  );
};
