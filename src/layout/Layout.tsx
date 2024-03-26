import { FC, useEffect, useState } from "react";

interface LayoutProps {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ setActivePage, children }) => {
  return (
    <>
      <Navbar setActivePage={setActivePage} />
      {children}
    </>
  );
};

interface NavbarProps {
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: FC<NavbarProps> = ({ setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`py-4 ${isScrolled ? 'bg-navbar-gradient' : 'bg-transparent'} fixed top-0 left-0 w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {/* Navigation links */}
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
                  setActivePage(2);
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
              >
                Services
              </a>
              <a
                onClick={() => {
                  setActivePage(2);
                }}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
