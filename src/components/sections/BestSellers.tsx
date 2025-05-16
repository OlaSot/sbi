import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { createT } from "@/i18n/createT"; 
import { BestSellersClient } from "../wrappers/BestSellersWrapper";
import { catalogData } from "@/data/catalogData";

interface Props {
  category: keyof typeof catalogData;
  title?: string;
  params: { lang: string };
}

export const BestSellers: React.FC<Props> = async ({ category, title, params }) => {
  const dict = await getDictionary(params.lang);
  const t = createT(dict); 
  const translatedData = {
    title: title || t(`catalog.categories.${category}`) || "",
    learnMore: t("catalog.learnMore"),
    modal: {
      title: t("cta.title"),
      description: t("cta.description"),
      namePlaceholder: t("cta.namePlaceholder"),
      phonePlaceholder: t("cta.phonePlaceholder"),
      messagePlaceholder: t("cta.messagePlaceholder"),
      button: t("cta.button"),
      sending: t("cta.sending"),
      successMessage: t("cta.successMessage"),
    },
  };

  const items = catalogData[category].items;

  return <BestSellersClient translatedData={translatedData} items={items} />;
};