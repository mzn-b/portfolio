import { Item } from "../../../components/Item";
import { Title } from "../../../components/Title";
import { InnerSection } from "../../../components/InnerSection";
import { useTranslate } from "../../../util/useTranslate";

const TRANSLATION_PREFIX = "projects.exsilio.";

export const Exsilio = () => {
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
