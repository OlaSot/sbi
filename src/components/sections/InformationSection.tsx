// components/sections/InformationSection.tsx
import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import InformationSectionClient from "../wrappers/InformationSectionClient";
import NewBackground from "@/assets/background/infor_section.webp";
import HomeIcon from "@/assets/icons/home.svg";
import LightIcon from "@/assets/icons/light-icon.svg";
import PaymentIcon from "@/assets/icons/payment-icon.svg";
import EcologyIcon from "@/assets/icons/ecology-icon.svg";
import FastIcon from "@/assets/icons/fast-icon.svg";
import ExperienceIcon from "@/assets/icons/experience-icon.svg";

export default async function InformationSection({ lang }: { lang: string }) {
  const dict = await getDictionary(lang); 

  const translatedData = {
    heading: {
      part1: dict.info.heading.part1,
      highlight: dict.info.heading.highlight,
      part2: dict.info.heading.part2,
    },
    button: dict.info.button,
    cards: [
      {
        title: dict.info.cards.homesSold.title,
        value: dict.info.cards.homesSold.value,
        description: dict.info.cards.homesSold.desc,
        icon: HomeIcon,
        iconAlt: "Home icon",
        isHighlighted: false,
      },
      {
        title: dict.info.cards.turnkey.title,
        value: dict.info.cards.turnkey.value,
        description: dict.info.cards.turnkey.desc,
        icon: LightIcon,
        iconAlt: "Light icon",
        isHighlighted: false,
      },
      {
        title: dict.info.cards.installments.title,
        value: dict.info.cards.installments.value,
        description: dict.info.cards.installments.desc,
        icon: PaymentIcon,
        iconAlt: "Payment icon",
        isHighlighted: false,
      },
      {
        title: dict.info.cards.experience.title,
        value: dict.info.cards.experience.value,
        description: dict.info.cards.experience.desc,
        icon: ExperienceIcon,
        iconAlt: "Experience icon",
        isHighlighted: false,
      },
      {
        title: dict.info.cards.moveIn.title,
        value: dict.info.cards.moveIn.value,
        description: dict.info.cards.moveIn.desc,
        icon: FastIcon,
        iconAlt: "Fast icon",
        isHighlighted: false,
      },
      {
        title: dict.info.cards.eco.title,
        value: dict.info.cards.eco.value,
        description: dict.info.cards.eco.desc,
        icon: EcologyIcon,
        iconAlt: "Ecology icon",
        isHighlighted: true,
      },
    ],
     modal: {
    title: dict.cta.title,
    description: dict.cta.description,
    namePlaceholder: dict.cta.namePlaceholder,
    phonePlaceholder: dict.cta.phonePlaceholder,
    messagePlaceholder: dict.cta.messagePlaceholder,
    button: dict.cta.button,
    sending: dict.cta.sending,
    successMessage: dict.cta.successMessage,
  },
  };

  return (
    <InformationSectionClient
      translatedData={translatedData}
      backgroundImage={NewBackground}
    />
  );
}