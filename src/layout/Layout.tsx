import { FC } from "react";

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

const handleDownload = (pdfId: string) => {
  const pdfUrl = `https://drive.usercontent.google.com/u/0/uc?id=${pdfId}&export=download`;

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("download", "CV.pdf");

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

const Navbar: FC<NavbarProps> = ({ setActivePage }) => {
  return (
    <nav
      className={`py-4 bg-gradient-to-b from-emerald-950 to-transparent fixed top-0 left-0 w-full z-50`}
    >
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
              About Me
            </a>
            <a
              onClick={() => {
                setActivePage(3);
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              Portfolio
            </a>
            <a
              onClick={() => {
                handleDownload("1iU-vx97fDhSFozHNAg0WoYNb5QK4zNsN");
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
