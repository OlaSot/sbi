"use client";

import React from "react";
import Link from "next/link";
import House1 from "@/assets/catalog/house1.webp";
import House2 from "@/assets/catalog/house2.webp";
import House3 from "@/assets/catalog/house3.webp";
import House4 from "@/assets/catalog/house4.webp";
import House5 from "@/assets/catalog/house5.webp";
import House6 from "@/assets/catalog/house6.webp";
import Image from "next/image";

interface Category {
  key: string;
  title: string;
  image: any;
}

interface TranslatedData {
  breadcrumb: {
    home: string;
    current: string;
  };
  title: string;
  description: string;
  categories: {
    capsule: string;
    apple: string;
    natural: string;
    dome: string;
    double: string;
    eco: string;
  };
}

interface Props {
  translatedData: TranslatedData;
}

const CatalogClient: React.FC<Props> = ({ translatedData }) => {
  const categories: Category[] = [
    { key: "capsule", title: translatedData.categories.capsule, image: House1 },
    { key: "apple", title: translatedData.categories.apple, image: House2 },
    { key: "natural", title: translatedData.categories.natural, image: House3 },
    { key: "dome", title: translatedData.categories.dome, image: House4 },
    { key: "double", title: translatedData.categories.double, image: House5 },
    { key: "eco", title: translatedData.categories.eco, image: House6 },
  ];

  return (
    <div className="bg-[#FBFBF9]  mx-auto relative">
      <div className="px-4 md:px-0 sm:container sm:max-w-[1400px] mx-auto pt-4 sm:pt-6 mt-[60px] sm:mt-[120px]">
        <div className="flex items-center gap-2 text-base sm:text-lg">
          <Link href="/" className="text-[#00D95C]">
            {translatedData.breadcrumb.home}
          </Link>
          <span className="text-[#141514]">/</span>
          <span className="text-[#141514]">{translatedData.breadcrumb.current}</span>
        </div>
      </div>

      <main className="max-w-[1400px] w-full px-4 md:px-6 lg:px-0 mx-auto py-[30px] sm:py-8 md:py-[50px]">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-[52px] text-[#141514] mb-3 sm:mb-4">
          {translatedData.title}
        </h1>
        <p className="text-base sm:text-lg text-[#141514] mb-6 sm:mb-8 lg:mb-12">
          {translatedData.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/catalog/${category.key}`}
              className="relative w-full h-[200px] sm:h-[220px] lg:h-[250px] rounded-xl sm:rounded-2xl overflow-hidden group"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20">
                <div className="w-[60px] sm:w-[80px] lg:w-[100px] h-[3px] sm:h-[4px] bg-[#00D95C] rounded-full mb-2" />
                <h3 className="font-semibold text-white text-xl sm:text-2xl lg:text-[32px]">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CatalogClient;