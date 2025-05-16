import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { createT } from "@/i18n/createT";
import { catalogData } from "@/data/catalogData";
import CatalogSectionClient from "../wrappers/CatalogSectionWrapper";
import { categoryKeys } from "@/data/catalog.config";

interface CatalogSectionProps {
  params: { lang: string };
}

export default async function CatalogSection({ params }: CatalogSectionProps) {
  const dict = await getDictionary(params.lang);
  const t = createT(dict);

  const categories = categoryKeys.map((key) => ({
    key,
    label: t(`catalog.categories.${key}`),
  }));

  const translatedStrings = {
    headingPart1: t("catalog.heading.part1"),
    headingHighlight: t("catalog.heading.highlight"),
    headingPart2: t("catalog.heading.part2"),
    noItems: t("catalog.noItems"),
    catalogBtn: t("catalog.catalogBtn"),
    choiceButton: t("choice.button"),
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

  return (
    <CatalogSectionClient
      categories={categories}
      catalogData={catalogData}
      translatedStrings={translatedStrings}
    />
  );
}