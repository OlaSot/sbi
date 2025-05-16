// components/sections/ProjectCasesSection.tsx
import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { createT } from "@/i18n/createT";
import ProjectCasesSectionClient from "../wrappers/ProjectSectionClient";


interface ProjectCasesSectionProps {
  params: { lang: string };
}

export default async function ProjectCasesSection({ params }: ProjectCasesSectionProps) {
  const dict = await getDictionary(params.lang);
  const t = createT(dict);

  const translatedStrings = {
    title: t("projectCases.title"),
    readMore: t("projectCases.readMore"),
    item1Title: t("projectCases.item1.title"),
    item1Description: t("projectCases.item1.description"),
    item2Title: t("projectCases.item2.title"),
    item2Description: t("projectCases.item2.description"),
    item3Title: t("projectCases.item3.title"),
    item3Description: t("projectCases.item3.description"),
    modalDescription: t("projectCases.modalDescription"),
    requestButtonText: t("projectCases.requestButton"), 
    translated: {
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
  const projectCases = [
    {
      id: 1,
      date: "12 May 2025",
      title: translatedStrings.item1Title,
      description: translatedStrings.item1Description,
    },
    {
      id: 2,
      date: "24 June 2025",
      title: translatedStrings.item2Title,
      description: translatedStrings.item2Description,
    },
    {
      id: 3,
      date: "7 July 2025",
      title: translatedStrings.item3Title,
      description: translatedStrings.item3Description,
    },
  ];

  return (
    <ProjectCasesSectionClient
      title={translatedStrings.title}
      readMore={translatedStrings.readMore}
      projectCases={projectCases}
      modalDescription={translatedStrings.modalDescription}
      requestButtonText={translatedStrings.requestButtonText}
      translated={translatedStrings.translated}
    />
  );
}