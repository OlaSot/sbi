"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { X, Calendar } from "lucide-react";
import ModalForm from "./ModalForm";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  description: string;
  image: StaticImageData;
  additionalImages?: StaticImageData[];
  modalDescription: string;
  requestButtonText: string; 
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
  
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  date,
  description,
  image,
  additionalImages = [],
  modalDescription,
  requestButtonText,
  translated 
}) => {
  const [mainImage, setMainImage] = useState<StaticImageData>(image);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex justify-center px-2"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[420px] sm:max-w-[900px] bg-white rounded-[16px] relative shadow-lg overflow-y-auto max-h-[calc(100vh-160px)] mt-[80px] mb-[80px] p-4 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-[20px] sm:text-[26px] font-bold mt-[20px] sm:mt-0 text-[#131313] mb-1">
          {title}
        </h2>
        <p className="text-sm text-[#4a4a4a] leading-[22px] mb-3">
          {modalDescription}
        </p>

        <p className="text-sm text-[#757575] mb-4 flex items-center gap-1">
          <Calendar className="w-4 h-4 text-[#757575]" />
          {date}
        </p>

        <div className="w-full h-[200px] sm:h-[478px] rounded-[12px] sm:rounded-[16px] overflow-hidden mb-4 sm:mb-6 relative">
          <Image
            src={mainImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 420px) 100vw, 900px"
            
          />
        </div>

        {additionalImages.length > 0 && (
          <div className="grid grid-cols-2 gap-[10px] sm:flex sm:flex-wrap sm:gap-[15px] sm:justify-center mb-4 sm:mb-6">
            {additionalImages.slice(0, 4).map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setMainImage(img)}
                className="w-full sm:w-[188px] h-[114px] rounded-[12px] overflow-hidden focus:outline-none"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`Additional ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 420px) 50vw, 188px"
                  />
                </div>
              </button>
            ))}
          </div>
        )}

        <p className="text-[14px] leading-[22px] text-[#141514] whitespace-pre-line mb-6 sm:mb-8">
          {description}
        </p>

        <div className="flex justify-center">
          <button
            className="w-full sm:w-auto px-[36px] py-[10px] text-white text-sm font-normal bg-[#01DB60] hover:bg-[#01c856] rounded-full transition-all"
            onClick={() => setIsContactModalOpen(true)}
          >
            {requestButtonText}
          </button>
        </div>

        {/* Contact Modal */}
        <ModalForm
          isOpen={isContactModalOpen}
          translated={translated}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </div>
  );
};