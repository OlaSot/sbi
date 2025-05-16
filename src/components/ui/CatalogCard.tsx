"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import Arrow from "@/assets/icons/arrow.svg";
import { Card, CardContent } from "../ui/Card";
import type { StaticImageData } from "next/image";


interface CatalogCardProps {
  image: string | StaticImageData;
  title: string;
  dimensions: string;
  area: string;
  beds: string;
  bath: string;
  onButtonClick?: () => void;
  buttonText: string;
}
export const CatalogCard: React.FC<CatalogCardProps> = ({
  image,
  title,
  dimensions,
  area,
  beds,
  bath,
  onButtonClick,
  buttonText,
}) => {
  return (
    <Card className="w-full sm:w-[48%] md:w-[32%] xl:w-[31.5%] rounded-2xl overflow-hidden border-none shadow-none flex flex-col">
  <div className="w-full h-[250px] md:h-[330px] relative">
    <Image
      src={image}
      alt={`${title} preview`}
      fill
      className="object-cover rounded-t-2xl"
    />
  </div>

  <CardContent className="p-5 flex flex-col flex-grow">
    <h3 className="w-full font-semibold text-[#141514] text-[26px] mb-5">
      {title}
    </h3>

    <div className="flex flex-col w-full items-start gap-2 flex-grow">
      {[
        { label: "LxWxH:", value: dimensions },
        { label: "Area:", value: area },
        { label: "Beds:", value: beds },
        { label: "Bath:", value: bath },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-between w-full">
          <span className="w-20 font-semibold text-[#141514] text-xl">
            {item.label}
          </span>
          <span className="font-light text-[#141514] text-xl text-right">
            {item.value}
          </span>
        </div>
      ))}
    </div>

    <Button
      onClick={onButtonClick}
      variant="outline"
      className="w-full flex mt-[40px] justify-center gap-2 rounded-[90px] border border-solid border-[#131513] font-normal text-[#141514] text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px]"
    >
      {buttonText}
      <Image src={Arrow} alt="arrow" width={10} height={10} />
    </Button>
  </CardContent>
</Card>
  );
}