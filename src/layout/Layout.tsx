import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTranslate } from "../util/useTranslate";
import { DropdownCV } from "./DropdownCV";

export const NAVBAR_TRANSLATION_PREFIX = "navbar.";

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
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>(
    i18n.language === "en" ? "de" : "en",
  );
  const handleTranslate = useTranslate(NAVBAR_TRANSLATION_PREFIX);

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
            <DropdownCV />

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
