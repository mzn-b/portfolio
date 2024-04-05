import { useTranslation } from "react-i18next";

export const useTranslate = (TRANSLATION_PREFIX: string) => {
  const { t } = useTranslation();

  const handleTranslate = (toTranslate: string, interpolate?: {}) => {
    if (interpolate) {
      return t(`${TRANSLATION_PREFIX}${toTranslate}`, interpolate);
    }
    return t(`${TRANSLATION_PREFIX}${toTranslate}`);
  };

  return handleTranslate;
};
