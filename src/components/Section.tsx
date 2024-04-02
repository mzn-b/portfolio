import React from "react";
import { Parallax } from "react-scroll-parallax";

interface SectionProps {
  backgroundColor: string;
  speed: number;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor,
  speed,
}) => {
  return (
    <Parallax speed={speed}>
      <div
        className={`h-screen flex justify-center items-center ${backgroundColor}`}
      >
        <h1 className="text-white text-4xl">{children}</h1>
      </div>
    </Parallax>
  );
};
