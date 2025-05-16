"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import ModalForm from "../ui/ModalForm";
import image2 from "@/assets/people/2.webp";
import image3 from "@/assets/people/3.webp";
import image4 from "@/assets/people/4.webp";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

type Props = {
  title: {
    part1: string;
    highlight: string;
    part2: string;
  };
  buttonText: string;
  imageAlt: string;
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

const ShowcaseSectionClient: React.FC<Props> = ({
  title,
  buttonText,
  imageAlt,
  translated,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const showcaseImages = [
    { src: image2.src, hasObjectCover: true },
    { src: image3.src, hasObjectCover: false },
    { src: image4.src, hasObjectCover: true },
    { src: image2.src, hasObjectCover: false },
    { src: image4.src, hasObjectCover: true },
    { src: image3.src, hasObjectCover: false },
  ];

  return (
    <section className="w-full flex flex-col py-[35px] px-[10px] md:py-0">
      <ModalForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        translated={translated}
      />

      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-2xl md:text-[52px] font-semibold leading-tight text-center">
          <span className="text-[#131513]">{title.part1}</span>
          <span className="text-[#01db60]"> {title.highlight} </span>
          <span className="text-[#131513]">{title.part2}</span>
        </h2>
      </div>


      <div className="mb-6 w-full flex justify-center">
  <div className="w-full 3xl:max-w-[1400px] overflow-x-auto px-[10px] md:px-[20px]">
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={16}
      slidesPerView={"auto"}
      className="min-w-full cursor-pointer"
      onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
    >
      {showcaseImages.map((img, index) => (
        <SwiperSlide
          key={index}
          style={{ width: "358px", flexShrink: 0 }}
          className="!h-[260px] relative rounded-[12px] overflow-hidden"
        >
          <Image
            src={img.src}
            alt={`${imageAlt} ${index + 1}`}
            fill
            className={
              img.hasObjectCover ? "object-cover" : "object-contain"
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>


      <div className="w-full flex justify-center">
        <Button
          className="w-full sm:w-fit bg-[#01db60] hover:bg-[#01db60]/90 shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px]"
          onClick={() => setIsModalOpen(true)}
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default ShowcaseSectionClient;
