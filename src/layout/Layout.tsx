import { FC} from "react";

interface LayoutProps {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ setActivePage, children }) => {
  return (
    <>
      <Navbar setActivePage={setActivePage} />
      <div className="pt-16">{children}</div>
    </>
  );
};

interface NavbarProps {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: FC<NavbarProps> = ({ setActivePage }) => {
  return (
    <nav className={`py-4 bg-navbar-gradient fixed top-0 left-0 w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex space-x-4">
            <a
              onClick={() => {
                setActivePage(1);
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              Home
            </a>
            <a
              onClick={() => {
                setActivePage(2);
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              About
            </a>
            <a
              onClick={() => {
                setActivePage(3);
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              Services
            </a>
            <a
              onClick={() => {
                setActivePage(4);
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
