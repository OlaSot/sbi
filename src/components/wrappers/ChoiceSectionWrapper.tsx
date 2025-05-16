import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { createT } from "@/i18n/createT";
import { ChoiceSectionClient } from "../sections/ChoiceSection";

export default async function ChoiceSectionWrapper({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);
  const t = createT(dict);

  const translatedStrings = {
    titlePart1: t("choice.title.part1"),
    titleHighlight: t("choice.title.highlight"),
    titlePart2: t("choice.title.part2"),
    description: t("choice.description"),
    featuredTitle: t("choice.featured.title"),
    featuredDimensions: t("choice.featured.dimensions"),
    featuredArea: t("choice.featured.area"),
    featuredBeds: t("choice.featured.beds"),
    featuredBath: t("choice.featured.bath"),
    labelsLxwxh: t("choice.labels.lxwxh"),
    labelsArea: t("choice.labels.area"),
    labelsBeds: t("choice.labels.beds"),
    labelsBath: t("choice.labels.bath"),
    button: t("choice.button"),
  };

  const translated = {
    title: t("cta.title"),
    description: t("cta.description"),
    namePlaceholder: t("cta.namePlaceholder"),
    phonePlaceholder: t("cta.phonePlaceholder"),
    messagePlaceholder: t("cta.messagePlaceholder"),
    button: t("cta.button"),
    sending: t("cta.sending"),
    successMessage: t("cta.successMessage"),
  };

  return <ChoiceSectionClient translatedStrings={translatedStrings} translated={translated} />;
}