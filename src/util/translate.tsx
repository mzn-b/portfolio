import { TFunction } from "i18next";

export const translate = (
  t: TFunction,
  TRANSLATION_PREFIX: string,
  toTranslate: string,
) => {
  return t(`${TRANSLATION_PREFIX}${toTranslate}`);
};
