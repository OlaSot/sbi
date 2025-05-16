import React from "react";
import Link from "next/link";
import TopImage from "@/assets/about/top.webp";
import BottomImage from "@/assets/about/bottom.webp";
import NewBackground from "@/assets/background/infor_section.webp";
import HomeIcon from "@/assets/icons/home.svg";
import LightIcon from "@/assets/icons/light-icon.svg";
import PaymentIcon from "@/assets/icons/payment-icon.svg";
import EcologyIcon from "@/assets/icons/ecology-icon.svg";
import FastIcon from "@/assets/icons/fast-icon.svg";
import ExperienceIcon from "@/assets/icons/experience-icon.svg";
import FooterSection from "@/components/sections/FooterSection";
import CatalogSection from "@/components/sections/CatalogSection";
import { ImageTextSection } from "@/components/sections/ImageTextSection";
import FaqSection from "@/components/sections/FaqSection";

import { getDictionary } from "@/i18n/getDictionary";
import AboutUsClient from "@/components/wrappers/AboutUsClient";
import InformationSectionClient from "@/components/wrappers/InformationSectionClient";

export default async function AboutUsPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  const translatedData = {
    breadcrumb: {
      home: dict.catalogPage.breadcrumb.home,
      title: dict.about.title,
    },
    title: dict.about.title,
    subtitle: dict.about.subtitle,
    topSection: {
      title: {
        part1: dict.about.topSection.title.part1,
        highlight: dict.about.topSection.title.highlight,
      },
    },
    bottomSection: {
      title: {
        part1: dict.about.bottomSection.title.part1,
        highlight: dict.about.bottomSection.title.highlight,
        part2: dict.about.bottomSection.title.part2,
      },
    },
    paragraphs: {
      p1: dict.about.paragraphs.p1,
      p2: dict.about.paragraphs.p2,
      p3: dict.about.paragraphs.p3,
    },
    paragraphsBottom: {
      p1: dict.about.paragraphsBottom.p1,
      p2: dict.about.paragraphsBottom.p2,
      p3: dict.about.paragraphsBottom.p3,
    },
    contactUs: dict.navigation.contactUs,
    sectionImage: dict.common.sectionImage,
  };

  const topParagraphs = [
    translatedData.paragraphs.p1,
    translatedData.paragraphs.p2,
    translatedData.paragraphs.p3,
  ];
  const bottomParagraphs = [
    translatedData.paragraphsBottom.p1,
    translatedData.paragraphsBottom.p2,
    translatedData.paragraphsBottom.p3,
  ];
  const modalTranslations = {
    title: dict.cta.title,
    description: dict.cta.description,
    namePlaceholder: dict.cta.namePlaceholder,
    phonePlaceholder: dict.cta.phonePlaceholder,
    messagePlaceholder: dict.cta.messagePlaceholder,
    button: dict.cta.button,
    sending: dict.cta.sending,
    successMessage: dict.cta.successMessage,
  };


  const infoData = {
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
    <div className="min-h-screen text-black">
      {/* Breadcrumb */}
      <div className="px-4 lg:px-0 sm:container sm:max-w-[1400px] mx-auto pt-4 sm:pt-6 mt-[60px] sm:mt-[120px]">
        <div className="flex items-center gap-2 text-base sm:text-lg">
          <Link href="/" className="text-[#00D95C]">
            {translatedData.breadcrumb.home}
          </Link>
          <span>/</span>
          <span>{translatedData.breadcrumb.title}</span>
        </div>
      </div>

      {/* Desktop heading */}
      <div className="hidden lg:block sm:container sm:max-w-[1400px] mx-auto px-4 lg:px-0 py-6 sm:py-8">
        <h1 className=" font-semibold text-3xl sm:text-[52px] mb-3 sm:mb-4">
          {translatedData.title}
        </h1>
        <p className="text-base sm:text-lg text-[#4a4a4a]  mb-6 sm:mb-12">
          {translatedData.subtitle}
        </p>
      </div>

      {/* Desktop blocks */}
      <ImageTextSection
        image={TopImage}
        hideMobile={true}
        title=''
        paragraphs={topParagraphs}
      />

      <div className="hidden lg:block">
        <InformationSectionClient
          translatedData={infoData}
          backgroundImage={NewBackground}
        />
      </div>

      <ImageTextSection
        image={BottomImage}
        imagePosition="right"
        hideMobile={true}
        title={
          <>
            {translatedData.bottomSection.title.part1}{" "}
            <span className="text-[#00D95C]">
              {translatedData.bottomSection.title.highlight}
            </span>{" "}
            {translatedData.bottomSection.title.part2}
          </>
        }
        paragraphs={bottomParagraphs}
        buttonText={translatedData.contactUs}
        translated={modalTranslations}
      />

      {/* Mobile blocks */}
      <AboutUsClient
        translatedData={translatedData}
        topParagraphs={topParagraphs}
        bottomParagraphs={bottomParagraphs}
        TopImage={TopImage}
        BottomImage={BottomImage}
        translatedModal={modalTranslations}
        infoData={infoData}
        backgroundImage={NewBackground}
      />

      <CatalogSection params={params} />
      <FaqSection params={params} />

      <FooterSection/>
    </div>
  );
}
