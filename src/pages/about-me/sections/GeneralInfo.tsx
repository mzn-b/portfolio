import { Item } from "../../../components/Item";
import { Link } from "../../../components/Link";
import { Title } from "../../../components/Title";
import { InnerSection } from "../../../components/InnerSection";
import { useTranslate } from "../../../util/useTranslate";

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
  const age = calculateAgeInYears();
  const handleTranslate = useTranslate(TRANSLATION_PREFIX);

  return (
    <InnerSection>
      <Title title={handleTranslate("title")} />
      <Item>{handleTranslate("paragraph1", { age: age })}</Item>
      <Item>{handleTranslate("paragraph2")}</Item>
      <Item>{handleTranslate("paragraph3")}</Item>
      <Link
        url={"https://www.linkedin.com/in/mazen-el-shaarawi"}
        displayText={"LinkedIn"}
      />
      <Link url={"https://github.com/mzn-b"} displayText={"GitHub"} />
    </InnerSection>
  );
};
