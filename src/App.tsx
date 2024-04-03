import { FC, useEffect, useState } from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { Layout } from "./layout/Layout";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Background } from "./Background";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Spinner } from "./components/Spinner";

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
    return <Portfolio />;
  }
  return null;
};
