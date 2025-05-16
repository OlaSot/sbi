import { getDictionary } from "@/i18n/getDictionary";
import { createT } from "@/i18n/createT";
import ShowcaseSectionClient from "../wrappers/ShowCaseSectionWrapper";

export default async function ShowcaseSection({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);
  const t = createT(dict);

  const title = {
    part1: t("showcase.title.part1"),
    highlight: t("showcase.title.highlight"),
    part2: t("showcase.title.part2"),
  };

  const buttonText = t("showcase.button");
  const imageAlt = t("showcase.alt");

  const translated = {
    title: `${t("showcase.title.part1")} ${t("showcase.title.highlight")} ${t("showcase.title.part2")}`,
    description: "Join our community to share your experience with our modular homes.",
    namePlaceholder: t("cta.namePlaceholder"),
    phonePlaceholder: t("cta.phonePlaceholder"),
    messagePlaceholder: t("cta.messagePlaceholder"),
    button: t("showcase.button"), 
    sending: t("cta.sending"),
    successMessage: t("cta.successMessage"),
  };

  return (
    <ShowcaseSectionClient
      title={title}
      buttonText={buttonText}
      imageAlt={imageAlt}
      translated={translated}
    />
  );
}