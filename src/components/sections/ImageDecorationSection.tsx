import { getDictionary } from "@/i18n/getDictionary";
import { createT } from "@/i18n/createT";
import ImageDecorationSectionClient from "../wrappers/ImageDecorationSectionClient";

export default async function ImageDecorationSection({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);
  const t = createT(dict);

  const title = {
    part1: t('imageSection.title.part1'),
    highlight: t('imageSection.title.highlight')
  };

  const paragraphs = t('imageSection.description').split('. ');
  const firstSentence = paragraphs[0] + '.';
  const remainingText = paragraphs.slice(1).join('. ');

  const translated = {
    title: t('cta.title'),
    description: t('cta.description'),
    namePlaceholder: t('cta.namePlaceholder'),
    phonePlaceholder: t('cta.phonePlaceholder'),
    messagePlaceholder: t('cta.messagePlaceholder'),
    button: t('cta.button'),
    sending: t('cta.sending'),
    successMessage: t('cta.successMessage'),
  };

  return (
    <ImageDecorationSectionClient
      title={title}
      paragraphs={[firstSentence, remainingText]}
      buttonText={t('imageSection.button')}
      translated={translated} 
    />
  );
}