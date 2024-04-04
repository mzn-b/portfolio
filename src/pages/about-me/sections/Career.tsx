import { useTranslation } from "react-i18next";
import { translate } from "../../../util/translate";
import { Item } from "../../../components/Item";

const TRANSLATION_PREFIX = "about-me.career.";

export const Career = () => {
  const { t } = useTranslation();

  const handleTranslate = (toTranslate: string) => {
    return translate(t, TRANSLATION_PREFIX, toTranslate);
  };

  return (
    <div className="pr-2 space-y-2">
      <h1 className="text-2xl text-white pointer-events-none font-bold">
        {handleTranslate("title")}
      </h1>
      <Item title={handleTranslate("cargo-partner")}>2019 - 2024</Item>
      <Item>{handleTranslate("cargo-partner-paragraph1")}</Item>
      <Item>{handleTranslate("cargo-partner-paragraph2")}</Item>
      <Item title={handleTranslate("next-company")} />
    </div>
  );
};
