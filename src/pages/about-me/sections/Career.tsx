import { Item } from "../../../components/Item";
import { Title } from "../../../components/Title";
import { InnerSection } from "../../../components/InnerSection";
import { useTranslate } from "../../../util/useTranslate";

const TRANSLATION_PREFIX = "about-me.career.";

export const Career = () => {
  const handleTranslate = useTranslate(TRANSLATION_PREFIX);

  return (
    <InnerSection>
      <Title title={handleTranslate("title")} />
      <Item title={handleTranslate("cargo-partner")}>
        2019 - {handleTranslate("today")}
      </Item>
      <Item>{handleTranslate("cargo-partner-paragraph1")}</Item>
      <Item>{handleTranslate("cargo-partner-paragraph2")}</Item>
      <Item title={handleTranslate("next-company")} />
    </InnerSection>
  );
};
