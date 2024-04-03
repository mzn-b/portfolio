import { ParallaxProvider } from "react-scroll-parallax";
import { Section } from "../../components/Section";
import { GeneralInfo } from "./Sections/GeneralInfo";
import { Education } from "./Sections/Education";
import { Career } from "./Sections/Career";

export const AboutMe = () => {
  return (
    <ParallaxProvider>
      <div className="grid grid-cols-2">
        <Section>
          <img src="terminal-icon.png" />
        </Section>
        <Section>
          <GeneralInfo />
        </Section>
        <Section>
          <Education />
        </Section>
        <Section>
          <img src="terminal-icon.png" />
        </Section>
        <Section>
          <img src="terminal-icon.png" />
        </Section>
        <Section>
          <Career />
        </Section>
      </div>
    </ParallaxProvider>
  );
};
