import { ParallaxProvider } from "react-scroll-parallax";
import { Section } from "../../components/Section";
import { GeneralInfo } from "./sections/GeneralInfo";
import { Education } from "./sections/Education";
import { Career } from "./sections/Career";

export const AboutMe = () => {
  return (
    <ParallaxProvider>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <Section>
          <img className="w-96" src="mazen.jpg" />
        </Section>
        <Section rightSide>
          <GeneralInfo />
        </Section>
        <Section>
          <Education />
        </Section>
        <Section rightSide>
          {/*TODO: make this change the image depending on where the user is in the scrolling*/}
          <img className="xl:h-96" src="technikum.jpg" />
        </Section>
        <Section>
          {/*TODO: make this change the image depending on where the user is in the scrolling*/}
          <img className="xl:h-96" src="cargo-partner.jpg" />
        </Section>
        <Section rightSide>
          <Career />
        </Section>
      </div>
    </ParallaxProvider>
  );
};
