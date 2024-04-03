import { ParallaxProvider } from "react-scroll-parallax";
import { Section } from "../../components/Section";
import { Portfolio } from "./Sections/Portfolio";
import { DungeonDemo } from "./Sections/DungeonDemo";
import { Excelsio } from "./Sections/Excelsio";
import { Chess } from "./Sections/Chess";

export const Projects = () => {
  return (
    <ParallaxProvider>
      <div className="grid grid-cols-2">
        <Section>
          <img src="terminal-icon.png" />
        </Section>
        <Section>
          <Portfolio />
        </Section>
        <Section>
          <Chess />
        </Section>
        <Section>
          <img src="terminal-icon.png" />
        </Section>
        <Section>
          <img src="terminal-icon.png" />
        </Section>
        <Section>
          <DungeonDemo />
        </Section>
        <Section>
          <Excelsio />
        </Section>
        <Section>
          <img src="terminal-icon.png" />
        </Section>
      </div>
    </ParallaxProvider>
  );
};
