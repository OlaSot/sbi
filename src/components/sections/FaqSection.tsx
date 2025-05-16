import { getDictionary } from "@/i18n/getDictionary";
import { FaqSectionClient } from "../wrappers/FaqSectionClient";

export default async function FaqSection({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang); 
  const translatedData = {
    title: dict.faq.title,
    items: dict.faq.items as { q: string; a: string }[], 
  };

  return <FaqSectionClient translatedData={translatedData} />;
}