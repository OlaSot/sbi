import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { BestSellers } from "@/components/sections/BestSellers";
import { catalogData } from "@/data/catalogData";
import Link from "next/link";
import FaqSection from "@/components/sections/FaqSection";
import FooterSection from "@/components/sections/FooterSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";


type CategoryKey = keyof typeof catalogData;

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; category: string }>;
}) {
  const resolvedParams = await params;

  const { category, lang } = resolvedParams;

  if (!(category in catalogData)) {
    return notFound();
  }

  const dict = await getDictionary(lang);

  const translatedData = {
    breadcrumb: {
      home: dict.footer.links.home,
      catalog: dict.catalogPage.breadcrumb.current,
      category: category.charAt(0).toUpperCase() + category.slice(1),
    },
  };

  return (
    <div className="min-h-screen text-black">
      <div className="px-4 md:px-0 sm:container sm:max-w-[1400px] mx-auto pt-4 sm:pt-6 mt-[60px] sm:mt-[120px]">
        <div className="flex items-center gap-2  text-lg">
          <Link href={`/${lang}`} className="text-[#01DB60]">
            {translatedData.breadcrumb.home}
          </Link>
          <span>/</span>
          <Link href={`/${lang}/catalog`} className="text-[#01DB60]">
            {translatedData.breadcrumb.catalog}
          </Link>
          <span>/</span>
          <span>{translatedData.breadcrumb.category}</span>
        </div>
      </div>

      <BestSellers params={resolvedParams} category={category as CategoryKey} />
      <FaqSection params={resolvedParams} />
      <CallToActionSection/>
      <FooterSection  />
    </div>
  );
}