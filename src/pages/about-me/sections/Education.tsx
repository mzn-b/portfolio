import { Item } from "../../../components/Item";
import { Title } from "../../../components/Title";
import { InnerSection } from "../../../components/InnerSection";
import { useTranslate } from "../../../util/useTranslate";

const TRANSLATION_PREFIX = "about-me.education.";

export const Education = () => {
  const handleTranslate = useTranslate(TRANSLATION_PREFIX);
  
  return (
    <InnerSection>
      <Title title={handleTranslate("title")} />
      <Item title={handleTranslate("uni")}>2020 - 2023</Item>
      <Item>{handleTranslate("uni-paragraph1")}</Item>
      <Item>{handleTranslate("uni-paragraph2")}</Item>
      <Item title={handleTranslate("highschool")}>2010 - 2019</Item>
      <Item>{handleTranslate("highschool-paragraph1")}</Item>
      <Item>{handleTranslate("highschool-paragraph2")}</Item>
    </InnerSection>
  );
};
