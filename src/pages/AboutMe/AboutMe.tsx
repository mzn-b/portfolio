import { Section } from "../../components/Section";
import { ParallaxProvider } from "react-scroll-parallax";

export const AboutMe = () => {
  return (
    <ParallaxProvider>
      <div className="App">
        <Section speed={10} backgroundColor="bg-red-500">
          Section 1
        </Section>
        <Section speed={20} backgroundColor="bg-blue-500">
          Section 2
        </Section>
        <Section speed={-110} backgroundColor="bg-green-500">
          Section 3
        </Section>
        {/* Add more sections as needed */}
      </div>
    </ParallaxProvider>
  );
};
