"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import Arrow from "@/assets/icons/arrow-green.svg";
import Modular1 from "@/assets/choice/Img.webp";
import Modular2 from "@/assets/choice/Img (1).webp";
import Modular3 from "@/assets/choice/Img (2).webp";
import Modular4 from "@/assets/choice/Img (3).webp";
import ModalForm from "../ui/ModalForm";

type Props = {
  translatedStrings: {
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    description: string;
    featuredTitle: string;
    featuredDimensions: string;
    featuredArea: string;
    featuredBeds: string;
    featuredBath: string;
    labelsLxwxh: string;
    labelsArea: string;
    labelsBeds: string;
    labelsBath: string;
    button: string;
  };
  translated: {
    title: string;
    description: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    button: string;
    sending: string;
    successMessage: string;
  };
};

export const ChoiceSectionClient: React.FC<Props> = ({
  translatedStrings,
  translated,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredProject = {
    title: translatedStrings.featuredTitle,
    dimensions: translatedStrings.featuredDimensions,
    area: translatedStrings.featuredArea,
    beds: translatedStrings.featuredBeds,
    bath: translatedStrings.featuredBath,
  };

  const modularHomes = [
    { image: Modular1 },
    { image: Modular2 },
    { image: Modular3 },
    { image: Modular4 },
  ];

  return (
    <>
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translated={translated}
      />

      <section className="md:hidden flex flex-col w-full px-4 py-[35px]">
        <div className="flex flex-col gap-4 mb-6">
          <h2 className="text-[30px] text-center font-semibold leading-tight ">
            <span className="text-[#131513]">
              {translatedStrings.titlePart1}
            </span>
            <span className="text-[#01db60]">
              {translatedStrings.titleHighlight}
            </span>
            <span className="text-[#131513]">
              {translatedStrings.titlePart2}
            </span>
          </h2>
          <p className="text-sm text-gray-600">
            {translatedStrings.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Card
            onClick={() => setIsModalOpen(true)}
            className="relative w-full h-[358px] rounded-xl overflow-hidden border-0"
          >
            <CardContent className="p-0 w-full h-full relative">
              <Image
                src={modularHomes[0].image}
                alt={featuredProject.title}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute bottom-4 left-4 bg-[#141514] text-white rounded-xl px-4 py-3 w-[260px]">
                <div className=" font-semibold text-sm mb-1">
                  {featuredProject.title}
                </div>
                <div className="text-xs font-semibold mb-1">
                  {translatedStrings.labelsLxwxh}
                  <span className="font-light ml-1">
                    {featuredProject.dimensions}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs  mt-2">
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">
                      {translatedStrings.labelsArea}
                    </span>
                    <span className="font-light">{featuredProject.area}</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">
                      {translatedStrings.labelsBeds}
                    </span>
                    <span className="font-light">{featuredProject.beds}</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">
                      {translatedStrings.labelsBath}
                    </span>
                    <span className="font-light">{featuredProject.bath}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            onClick={() => setIsModalOpen(true)}
            className="w-full h-[170px] rounded-xl overflow-hidden border-0"
          >
            <CardContent className="p-0 w-full h-full relative">
              <Image
                src={modularHomes[1].image}
                alt="Vertical modular"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </CardContent>
          </Card>

          <div className="flex flex-row gap-4">
            {modularHomes.slice(2, 4).map((home, index) => (
              <Card
                onClick={() => setIsModalOpen(true)}
                key={index}
                className="w-1/2 h-[172px] rounded-xl overflow-hidden border-0"
              >
                <CardContent className="p-0 w-full h-full relative">
                  <Image
                    src={home.image}
                    alt={`Modular home ${index + 3}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Button
          className="mt-6 w-full sm:w-fit bg-[#01db60] hover:bg-[#01db60]/90 shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px]"
          onClick={() => setIsModalOpen(true)}
        >
          {translatedStrings.button}
        </Button>
      </section>

      <div className="hidden md:flex my-[120px] flex-col w-full max-w-[1400px] gap-[50px] mx-auto px-4 sm:px-6 md:px-4 2xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-[168px]">
          <h2 className="w-full md:w-[542px] text-[52px] font-semibold  leading-normal">
            <span className="text-[#131513]">
              {translatedStrings.titlePart1}
            </span>
            <span className="text-[#01db60]">
              {translatedStrings.titleHighlight}
            </span>
            <span className="text-[#131513]">
              {translatedStrings.titlePart2}
            </span>
          </h2>
          <p className="w-full md:w-[690px]  text-[#141514] text-lg">
            {translatedStrings.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-[30px] w-full">
          <Card
            onClick={() => setIsModalOpen(true)}
            className="relative w-full md:w-[690px] h-[690px] rounded-xl overflow-hidden border-0 cursor-pointer group transition-transform duration-300 hover:scale-[1.02]"
          >
            <CardContent className="p-0 w-full h-full relative">
              <Image
                src={Modular1}
                alt="Modular house 1"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                
              />
              <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10">
                <Image src={Arrow} alt="Arrow" width={16} height={16} />
              </div>
              <div className="absolute w-[calc(100%-34px)] max-w-[656px] h-[170px] bottom-5 left-1/2 -translate-x-1/2 bg-[#141514] rounded-xl overflow-hidden">
                <div className="absolute w-[410px] top-[19px] left-[19px] text-white font-semibold text-[26px]">
                  {featuredProject.title}
                </div>
                <div className="flex absolute top-[92px] left-[19px] items-center">
                  <div className="text-white w-20 font-semibold text-xl">
                    {translatedStrings.labelsLxwxh}
                  </div>
                  <div className="w-[190px] text-white font-light text-xl text-right">
                    {featuredProject.dimensions}
                  </div>
                </div>
                <div className="flex items-center gap-[9px] absolute top-[92px] left-[315px]">
                  {[
                    {
                      label: translatedStrings.labelsArea,
                      value: featuredProject.area,
                    },
                    {
                      label: translatedStrings.labelsBeds,
                      value: featuredProject.beds,
                    },
                    {
                      label: translatedStrings.labelsBath,
                      value: featuredProject.bath,
                    },
                  ].map((item, i) => (
                    <React.Fragment key={i}>
                      <div className="flex flex-col min-w-[76px] items-start justify-center gap-1.5">
                        <div className="text-white text-center  font-semibold text-xl">
                          {item.label}
                        </div>
                        <div className="text-white text-center  font-light text-xl">
                          {item.value}
                        </div>
                      </div>
                      {i < 2 && (
                        <div className="h-[50px] w-[2px] bg-[#01db60] rounded-[90px]" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col w-full md:w-[690px] gap-[30px]">
            <Card
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer group transition-transform duration-300 hover:scale-[1.02] relative w-full h-[330px] rounded-xl overflow-hidden border-0"
            >
              <CardContent className="p-0 w-full h-full relative">
                <Image
                  src={Modular2}
                  alt="Modular house 2"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />

                <div className="absolute w-10 h-10 top-6 right-6 bg-white rounded-[90px] flex items-center justify-center">
                  <Image
                    src={Arrow}
                    alt="Arrow"
                    width={40}
                    height={40}
                    className="w-5 h-4"
                  />
                </div>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row gap-[30px] w-full">
              {[Modular3, Modular4].map((image, i) => (
                <Card
                  onClick={() => setIsModalOpen(true)}
                  key={i}
                  className="cursor-pointer group transition-transform duration-300 hover:scale-[1.02] relative w-full sm:w-[330px] h-[330px] rounded-xl overflow-hidden border-0"
                >
                  <CardContent className="p-0 w-full h-full relative">
                    <Image
                      src={image}
                      alt={`Modular house ${i + 3}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute w-10 h-10 top-6 right-6 bg-white rounded-[90px] flex items-center justify-center">
                      <Image
                        src={Arrow}
                        alt="Arrow"
                        width={40}
                        height={40}
                        className="w-5 h-4"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="px-[50px] py-[15px] bg-[#01db60] rounded-[90px]  text-white text-lg shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] hover:bg-[#01db60]/90"
          >
            {translatedStrings.button}
          </Button>
        </div>
      </div>
    </>
  );
};
