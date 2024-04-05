import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTranslate } from "../util/useTranslate";

const PDF_ID = "1K26Un-RgEZEc5Wi_P7RpmU9Pl1l7UTn5";
const TRANSLATION_PREFIX = "navbar.";

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

const handleDownload = () => {
  const pdfUrl = `https://drive.usercontent.google.com/u/0/uc?id=${PDF_ID}&export=download`;

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("download", "CV.pdf");

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

const Navbar: FC<NavbarProps> = ({ setActivePage }) => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>(
    i18n.language === "en" ? "de" : "en",
  );
  const handleTranslate = useTranslate(TRANSLATION_PREFIX);

  const handleLanguageChange = () => {
    if (lang === "en") {
      i18n.changeLanguage("en").then(() => {
        setLang("de");

        console.log(i18n.language);
      });
    } else {
      i18n.changeLanguage("de").then(() => {
        setLang("en");

        console.log(i18n.language);
      });
    }
  };

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
              {handleTranslate("home")}
            </a>
            <a
              onClick={() => {
                window.scrollTo(0, 0);
                setActivePage(2);
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              {handleTranslate("about-me")}
            </a>
            <a
              onClick={() => {
                window.scrollTo(0, 0);
                setActivePage(3);
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              {handleTranslate("projects")}
            </a>
            <a
              onClick={() => {
                handleDownload();
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              {handleTranslate("cv")}
            </a>

            <a
              onClick={() => {
                handleLanguageChange();
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              {lang.toUpperCase()}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
