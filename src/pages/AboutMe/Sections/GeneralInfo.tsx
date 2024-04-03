import { useTranslation } from "react-i18next";
import { Item } from "../../../components/Item";
import { translate } from "../../../util/translate";

const TRANSLATION_PREFIX = "about-me.general-info.";

const calculateAgeInYears = (): number => {
  const currentDate = new Date();
  const birthDate = new Date("2001-04-20");
  const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    return yearsDiff - 1;
  }

  return yearsDiff;
};

export const GeneralInfo = () => {
  const { t } = useTranslation();
  const age = calculateAgeInYears();

  const handleTranslate = (toTranslate: string) => {
    return translate(t, TRANSLATION_PREFIX, toTranslate);
  };

  return (
    <div>
      <h1>{handleTranslate("title")}</h1>
      <Item title={handleTranslate("name")}>BSc Mazen El-shaarawi</Item>
      <Item title={handleTranslate("age")}>{age}</Item>
    </div>
  );
};
