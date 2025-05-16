"use client";

import React from "react";
import Image from "next/image";

interface TranslatedData {
  title: string;
  description: string;
  breadcrumb: {
    home: string;
    title: string;
  };
  contactInfo: {
    address: string;
    businessHours: string;
    phone: string;
    email: string;
  };
}

interface ContactInfo {
  label: string;
  value: string;
  icon: any;
}

interface Props {
  translatedData: TranslatedData;
  contactInfo: ContactInfo[];
  aboutParagraphs: string[];
  backgroundImage: any;
}

const ContactsClient: React.FC<Props> = ({
  translatedData,
  contactInfo,
  aboutParagraphs,
  backgroundImage,
}) => {
  return (
    <main className="px-4 lg:px-0 sm:max-w-[1400px] mx-auto py-[30px] sm:py-8 md:py-[50px]">
      <h1 className=" font-semibold text-3xl md:text-[40px] lg:text-[52px] text-brand-color mb-3 sm:mb-4">
        {translatedData.title}
      </h1>
      <p className=" text-base sm:text-lg text-brand-color mb-6 sm:mb-[30px]">
        {translatedData.description}
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-[30px]">
        {/* Image */}
        <div className="w-full sm:w-[690px] h-[200px] sm:h-[287px] rounded-[16px] overflow-hidden relative">
          <Image
            src={backgroundImage}
            alt="Modern modular home interior"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 690px"
  
             priority={true} placeholder="blur"
          />
        </div>

        {/* Contact Information */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6 sm:justify-center">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center  text-base sm:text-lg text-brand-color gap-1 sm:gap-0"
            >
              <div className="flex items-center gap-2 font-semibold sm:min-w-[200px] sm:mr-12">
                <Image
                  src={item.icon}
                  alt={item.label || "icon"}
                  width={24}
                  height={24}
                />

                <span>{item.label}</span>
              </div>
              <div className="pl-7 sm:pl-0">{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Description */}
      <div className="mt-8 sm:mt-[20px] space-y-4 sm:space-y-6">
        {aboutParagraphs.map((text, idx) => (
          <p key={idx} className=" text-base sm:text-lg text-brand-color">
            {text}
          </p>
        ))}
      </div>
    </main>
  );
};

export default ContactsClient;
