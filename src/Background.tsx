import { useMemo } from "react";
import Particles from "@tsparticles/react";
import { ISourceOptions } from "@tsparticles/engine";

export const Background: React.FC<{
  init: boolean;
}> = ({ init }) => {
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        gradient: {
          start: "#022c22",
          stop: "#134e4a",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return null;
};
