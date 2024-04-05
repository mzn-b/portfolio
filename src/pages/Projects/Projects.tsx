import { ParallaxProvider } from "react-scroll-parallax";
import { Section } from "../../components/Section";
import { Portfolio } from "./sections/Portfolio";
import { DungeonDemo } from "./sections/DungeonDemo";
import { Chess } from "./sections/Chess";
import { Exsilio } from "./sections/Exsilio";

export const Projects = () => {
  return (
    <ParallaxProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Section>
          <img className="xl:h-96" src="portfolio.png" />
        </Section>
        <Section rightSide>
          <Portfolio />
        </Section>
        <Section>
          <Chess />
        </Section>
        <Section rightSide>
          <img className="xl:h-96" src="chess.png" />
        </Section>
        <Section>
          <img className="xl:h-96" src="dungeon.png" />
        </Section>
        <Section rightSide>
          <DungeonDemo />
        </Section>
        <Section>
          <Exsilio />
        </Section>
        <Section rightSide>
          <img className="xl:h-96" src="exsilio.png" />
        </Section>
      </div>
    </ParallaxProvider>
  );
};
