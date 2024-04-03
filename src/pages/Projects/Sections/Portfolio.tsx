import { useTranslation } from "react-i18next";
import { translate } from "../../../util/translate";

const TRANSLATION_PREFIX = "projects.portfolio.";

export const Portfolio = () => {
    const { t } = useTranslation();

    const handleTranslate = (toTranslate: string) => {
      return translate(t, TRANSLATION_PREFIX, toTranslate);
    };
    
    return (
      <div>
        <h1>{handleTranslate("title")}</h1>
      </div>
    );
  };
  