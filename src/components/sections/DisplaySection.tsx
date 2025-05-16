import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { createT } from "@/i18n/createT";
import DisplaySectionClient from "../wrappers/DisplaySectionClient";

interface DisplaySectionProps {
  params: { lang: string };
}

export default async function DisplaySection({ params }: DisplaySectionProps) {
  const dict = await getDictionary(params.lang);
  const t = createT(dict);

  const title = (
    <>
      {t("display.title.part1")}{" "}
      <span className="text-[#00D95C]">{t("display.title.highlight")}</span>{" "}

    </>
  );
  const paragraph = t("display.description")
  const buttonText = t("cta.button");

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

  return (
    <DisplaySectionClient
      title={title}
      paragraph={paragraph}
      buttonText={buttonText}
      translated={translated} 
    />
  );
}