import { FC, useState } from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { Layout } from "./layout/Layout";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Background } from "./Background";

export const App = () => {
  const [activePage, setActivePage] = useState<number>(1);

  return (
    <>
      <Background />
      <Layout setActivePage={setActivePage}>
        <InnerApp activePage={activePage} />
      </Layout>
    </>
  );
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
