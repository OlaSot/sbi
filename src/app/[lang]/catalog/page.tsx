import React from "react";
import { getDictionary } from "@/i18n/getDictionary";
import CatalogClient from "@/components/wrappers/CatalogClient";
import { BestSellers } from "@/components/sections/BestSellers";
import FooterSection from "@/components/sections/FooterSection";

export default async function Catalog({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  const translatedData = {
    breadcrumb: {
      home: dict.catalogPage.breadcrumb.home,
      current: dict.catalogPage.breadcrumb.current,
    },
    title: dict.catalogPage.title,
    description: dict.catalogPage.description,
    categories: {
      capsule: dict.catalogPage.categories.capsule,
      apple: dict.catalogPage.categories.apple,
      natural: dict.catalogPage.categories.natural,
      dome: dict.catalogPage.categories.dome,
      double: dict.catalogPage.categories.double,
      eco: dict.catalogPage.categories.eco,
    },
    bestSellers: {
      title: dict.catalogPage.bestSellers.title,
    },
  };

  return (
    <div>
      <CatalogClient translatedData={translatedData} />
      <BestSellers
        category="capsule"
        title={translatedData.bestSellers.title}
        params={params}
      />


      <FooterSection/>
    </div>
  );
}