import { FC, useState } from "react";
import { Homepage } from "./pages/Homepage/Homepage";
import { Layout } from "./layout/Layout";

export const App = () => {
  const [activePage, setActivePage] = useState<number>(1);

  return (
    <Layout setActivePage={setActivePage}>
      <InnerApp activePage={activePage} />
    </Layout>
  );
};

const InnerApp: FC<{ activePage: number }> = ({ activePage }) => {
  if (activePage === 1) {
    return <Homepage />;
  }
  return null;
};
