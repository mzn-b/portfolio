import React, { useState, useEffect, useRef } from "react";
import { useTranslate } from "../util/useTranslate";
import { NAVBAR_TRANSLATION_PREFIX } from "./Layout";

const PDF_ID_DE = "1t58yIOq_N10zjb8ZK_WzK9HLJX5US_rl";
const PDF_ID_EN = "16GULRR01oOdCHhcQScGag1EkQt7fLJze";

const handleDownload = (english: boolean) => {
  const pdfUrl = `https://drive.usercontent.google.com/u/0/uc?id=${english ? PDF_ID_EN : PDF_ID_DE}&export=download`;

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("download", "CV.pdf");

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

const Dropdown: React.FC<{
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsOpen }) => {
  const handleTranslate = useTranslate(NAVBAR_TRANSLATION_PREFIX);
  return (
    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 w-22 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div
        className="py-1 text-center"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="cv-menu"
      >
        <a
          onClick={() => {
            handleDownload(true);
            setIsOpen(false);
          }}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          {handleTranslate("en")}
        </a>
        <a
          onClick={() => {
            handleDownload(false);
            setIsOpen(false);
          }}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
        >
          {handleTranslate("de")}
        </a>
      </div>
    </div>
  );
};

export const DropdownCV: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleTranslate = useTranslate(NAVBAR_TRANSLATION_PREFIX);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggleDropdown}
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-m font-medium"
      >
        {handleTranslate("cv")}
      </button>
      {isOpen && <Dropdown setIsOpen={setIsOpen} />}
    </div>
  );
};
