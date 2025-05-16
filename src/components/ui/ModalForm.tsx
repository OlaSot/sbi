"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CrossIcon from "@/assets/icons/cross.svg";
import { Button } from "./Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
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

export default function ModalForm({ isOpen, onClose, translated }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const resetForm = () => {
    setFormData({ name: "", phone: "", message: "" });
    setSubmitError("");
    setSubmitSuccess(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      resetForm();
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send message");

      setSubmitSuccess(true);
      setTimeout(() => {
        resetForm();
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-[520px] rounded-xl px-[10px] py-[30px] md:py-[25px] md:px-[30px] relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 hover:bg-gray-200 flex items-center justify-center transition z-[60]"
        >
          <Image src={CrossIcon} alt="Close" width={16} height={16} />
        </button>

        <h2 className="text-center md:text-left text-[26px] md:text-[32px] font-semibold text-gray-900 leading-snug">
          {translated.title}
        </h2>
        <p className="text-base text-center md:text-left md:text-[18px] text-black mt-[10px]">
          {translated.description}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-[12px] md:mt-[24px] flex flex-col gap-[12px] md:gap-[30px] items-center text-black"
        >
          <input
            type="text"
            placeholder={translated.namePlaceholder}
            className="placeholder:text-[18px] w-full md:max-w-[460px] h-[50px] md:h-[68px] px-[20px] rounded-[90px] border-[3px] md:border-[6px] border-[#F5F5F5] bg-[#FBFBF9] text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder={translated.phonePlaceholder}
            className="placeholder:text-[18px] w-full md:max-w-[460px] h-[50px] md:h-[68px] px-[20px] rounded-[90px] border-[3px] md:border-[6px] border-[#F5F5F5] bg-[#FBFBF9] text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <textarea
            placeholder={translated.messagePlaceholder}
            className="placeholder:text-[18px] w-full md:max-w-[460px] h-[150px] md:h-[200px] px-[20px] py-[16px] rounded-[12px] md:rounded-xl border-[3px] md:border-[6px] border-[#F5F5F5] bg-[#FBFBF9] resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />

          {submitError && (
            <p className="text-red-500 text-sm w-full text-center">{submitError}</p>
          )}

          <Button
            className="w-full px-[50px] md:w-fit py-3.5 bg-[#01db60] rounded-[90px] shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759]  font-normal text-white text-lg hover:bg-[#01db60]/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? translated.sending : translated.button}
          </Button>

          {submitSuccess && (
            <div className="bg-[#01DB60]/20 border border-[#01DB60]/30 rounded-lg p-3 mt-4 w-full flex items-center justify-center">
              <span className="text-gray-800 text-base font-medium">
                {translated.successMessage}
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
