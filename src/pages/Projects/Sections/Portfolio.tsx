import { useTranslate } from "../../../util/useTranslate";
import { Item } from "../../../components/Item";
import { Title } from "../../../components/Title";
import { InnerSection } from "../../../components/InnerSection";

const TRANSLATION_PREFIX = "projects.portfolio.";

export const Portfolio = () => {
  const handleTranslate = useTranslate(TRANSLATION_PREFIX);

  return (
    <InnerSection>
      <Title title={handleTranslate("title")} />
      <Item title={handleTranslate("subtitle")}>
        {handleTranslate("tech-stack")}
      </Item>
      <Item>{handleTranslate("paragraph1")}</Item>
      <Item>{handleTranslate("paragraph2")}</Item>
    </InnerSection>
  );
};
