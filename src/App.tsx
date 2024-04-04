import { FC, useEffect, useState } from "react";
import { Layout } from "./layout/Layout";
import { Background } from "./Background";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Spinner } from "./components/Spinner";
import { AboutMe } from "./pages/about-me/AboutMe";
import { Homepage } from "./pages/homepage/Homepage";
import { Projects } from "./pages/projects/Projects";

export const App = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <>
        <Background init={init} />
        <Layout setActivePage={setActivePage}>
          <InnerApp activePage={activePage} />
        </Layout>
      </>
    );
  }

  return <Spinner />;
};

const InnerApp: FC<{ activePage: number }> = ({ activePage }) => {
  if (activePage === 1) {
    return <Homepage />;
  }
  if (activePage === 2) {
    return <AboutMe />;
  }
  if (activePage === 3) {
    return <Projects />;
  }
  return null;
};
