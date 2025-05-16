// app/[lang]/contacts/page.tsx
import React from "react";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import Background from "@/assets/contacts-image.webp";
import Pin from "@/assets/contacts/Pin icon.svg";
import Hour from "@/assets/contacts/Hour icon.svg";
import Phone from "@/assets/contacts/Call icon.svg";
import Email from "@/assets/contacts/Email icon.svg";
import ContactsClient from "@/components/sections/ContactsClient";

import FooterSection from "@/components/sections/FooterSection";

export default async function ContactsPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  const translatedData = {
    breadcrumb: {
      home: dict.footer.links.home,
      title: dict.contacts.title,
    },
    title: dict.contacts.title,
    description: dict.contacts.description,
    contactInfo: {
      address: dict.contacts.address,
      businessHours: dict.contacts.businessHours,
      phone: dict.contacts.phone,
      email: dict.contacts.email,
      produktionsLager: dict.contacts.produktionsLager,
    },
    about: {
      p1: dict.contacts.about1,
      p2: dict.contacts.about2,
    },
  } as {
    breadcrumb: { home: string; title: string };
    title: string;
    description: string;
    contactInfo: {
      address: string;
      businessHours: string;
      phone: string;
      email: string;
      produktionsLager: string;
    };
    about: { p1: string; p2: string };
  };

  const contactInfo = [
    {
      label: translatedData.contactInfo.address,
      value: "Ahrensburgerstr 3, 22041 Hamburg",
      icon: Pin,
    },
    {
      label: translatedData.contactInfo.produktionsLager,
      value: "Ohlweg str.6, 22885 Barsbüttel",
      icon: Pin,
    },
    {
      label: translatedData.contactInfo.businessHours,
      value: "Mon-Fri: 09:00 – 18:00",
      icon: Hour,
    },
    {
      label: translatedData.contactInfo.phone,
      value: "+49 160 6161652",
      icon: Phone,
    },
    {
      label: translatedData.contactInfo.email,
      value: "info@statom.de",
      icon: Email,
    },
  ];

  const aboutParagraphs = [translatedData.about.p1, translatedData.about.p2];

  return (
    <div className="bg-cream min-h-screen text-black">
      {/* Breadcrumb */}
      <div className="px-4 lg:px-0 sm:container sm:max-w-[1400px] mx-auto pt-4 sm:pt-6 mt-[60px] sm:mt-[120px]">
        <div className="flex items-center gap-2  text-base sm:text-lg">
          <Link href="/" className="text-[#00D95C]">
            {translatedData.breadcrumb.home}
          </Link>
          <span className="text-brand-color">/</span>
          <span className="text-brand-color">{translatedData.breadcrumb.title}</span>
        </div>
      </div>


      <ContactsClient
        translatedData={translatedData}
        contactInfo={contactInfo}
        aboutParagraphs={aboutParagraphs}
        backgroundImage={Background}
      />

      <FooterSection  />
    </div>
  );
}
