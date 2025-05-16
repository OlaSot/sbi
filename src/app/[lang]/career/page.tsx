// app/[lang]/career/page.tsx
import React from "react";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import CareerClient from "@/components/wrappers/CareerClient";
import FooterSection from "@/components/sections/FooterSection";


export default async function CareerPage({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  const translatedData = {
    breadcrumb: {
      home: dict.career.breadcrumb.home,
      current: dict.career.breadcrumb.current,
    },
    title: dict.career.title,
    description: dict.career.description,
    form: {
      name: dict.career.form.name,
      surname: dict.career.form.surname,
      email: dict.career.form.email,
      phone: dict.career.form.phone,
      country: dict.career.form.country,
      city: dict.career.form.city,
      position: dict.career.form.position,
      experience: dict.career.form.experience,
      coverLetter: dict.career.form.coverLetter,
      resume: dict.career.form.resume,
      uploadFile: dict.career.form.uploadFile,
      sendApplication: dict.career.form.sendApplication,
      sending: dict.career.form.sending,
      successMessage: dict.career.form.successMessage,
      placeholders: {
        name: dict.career.form.placeholders.name,
        surname: dict.career.form.placeholders.surname,
        email: dict.career.form.placeholders.email,
        phone: dict.career.form.placeholders.phone,
        country: dict.career.form.placeholders.country,
        city: dict.career.form.placeholders.city,
        position: dict.career.form.placeholders.position,
        experience: dict.career.form.placeholders.experience,
        coverLetter: dict.career.form.placeholders.coverLetter,
        noFile: dict.career.form.placeholders.noFile,
      },
    },
    errors: {
      fileTypeInvalid: dict.errors.fileTypeInvalid,
      fileSizeExceeded: dict.errors.fileSizeExceeded,
    },
  };

  return (
    <div className="min-h-screen mx-auto text-black">
      <div className="px-4 lg:px-0 sm:container sm:max-w-[1400px] mx-auto pt-4 sm:pt-6 mt-[60px] sm:mt-[120px]">
        <div className="flex items-center gap-2 text-lg">
          <Link href={`/${params.lang}`} className="text-[#00D95C]">
            {translatedData.breadcrumb.home}
          </Link>
          <span>/</span>
          <span>{translatedData.breadcrumb.current}</span>
        </div>
      </div>

      <CareerClient translatedData={translatedData} />

      <FooterSection />
    </div>
  );
}