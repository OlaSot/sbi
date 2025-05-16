"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import CTA from "@/assets/background/CTA.webp";
import { Input } from "../ui/Input";
import Image from "next/image";

interface TranslatedData {
  title: string;
  description: string;
  phonePlaceholder: string;
  button: string;
  sending: string;
  successMessage: string;
  errorsPhoneRequired: string;
}

interface Props {
  translatedData: TranslatedData;
}

export const CallToActionSectionClient: React.FC<Props> = ({
  translatedData,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber.trim()) {
      setSubmitError(translatedData.errorsPhoneRequired);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phoneNumber,
          name: "",
          message: "Quick contact request from homepage",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitSuccess(true);
      setPhoneNumber("");
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative w-full h-[410px] flex items-center justify-center md:hidden mt-[50px]">
        <Image
          src={CTA}
          alt="Call to Action background"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
          <h2 className="text-white text-[30px] font-semibold leading-tight mb-2">
            {translatedData.title}
          </h2>

          <p className="text-white/90 text-[14px] leading-snug mb-6">
            {translatedData.description}
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              type="tel"
              placeholder={translatedData.phonePlaceholder}
              className="w-full h-[50px] px-[20px] text-[#141514] rounded-[90px] border-[3px] border-white/50 bg-[#FBFBF9] text-sm  placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            {submitError && (
              <p className="text-red-400 text-sm">{submitError}</p>
            )}

            {submitSuccess && (
              <div className="bg-[#01DB60]/20 border border-[#01DB60]/30 rounded-lg p-2 mt-2 mb-2 flex items-center justify-center">
                <span className="text-gray-800 text-sm">
                  {translatedData.successMessage}
                </span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#01DB60] text-white h-[50px] rounded-full text-base font-normal shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] hover:bg-[#01DB60]/90 disabled:opacity-70 transition"
            >
              {isSubmitting ? translatedData.sending : translatedData.button}
            </button>
          </form>
        </div>
      </section>

      {/* Desktop version */}
      <section className="relative w-full flex items-center justify-center mt-[50px] px-4 hidden md:block">
        <Image
          src={CTA}
          alt="Call to Action background"
          fill
          sizes="(max-width: 768px) 100vw, 1000px"
          className="object-cover z-0"
        />

        <div className="absolute inset-0 z-0" />

        <div className="relative z-10 flex flex-col max-w-[930px] gap-5 py-[120px] mx-auto items-center justify-center">
          <h2 className="text-white text-[52px] font-semibold text-center leading-normal ">
            {translatedData.title}
          </h2>

          <p className=" font-normal text-white text-2xl text-center leading-normal">
            {translatedData.description}
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-[556px]">
            <div className="w-full bg-[#FBFBF9] rounded-full border-[6px] border-solid border-[#ffffff80] overflow-hidden flex items-center p-1">
              <Input
                type="tel"
                placeholder={translatedData.phonePlaceholder}
                className="flex-1 h-14 px-6 rounded-full bg-transparent border-none text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-0 shadow-none"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 bg-[#01DB60] rounded-full text-white text-lg font-normal shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] hover:bg-[#01DB60]/90 disabled:opacity-70"
              >
                {isSubmitting ? translatedData.sending : translatedData.button}
              </Button>
            </div>

            {submitError && (
              <p className="text-red-400 text-sm mt-2 text-center">
                {submitError}
              </p>
            )}

            {submitSuccess && (
              <div className="bg-[#01DB60]/20 border border-[#01DB60]/30 rounded-lg p-3 mt-4 flex items-center justify-center">
                <span className="text-white text-base">
                  {translatedData.successMessage}
                </span>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};
