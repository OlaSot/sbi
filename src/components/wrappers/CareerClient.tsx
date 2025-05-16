"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface TranslatedData {
  breadcrumb: {
    home: string;
    current: string;
  };
  title: string;
  description: string;
  form: {
    name: string;
    surname: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    position: string;
    experience: string;
    coverLetter: string;
    resume: string;
    uploadFile: string;
    sendApplication: string;
    sending: string;
    successMessage: string;
    placeholders: {
      name: string;
      surname: string;
      email: string;
      phone: string;
      country: string;
      city: string;
      position: string;
      experience: string;
      coverLetter: string;
      noFile: string;
    };
  };
  errors: {
    fileTypeInvalid: string;
    fileSizeExceeded: string;
  };
}

type FormDataType = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  position: string;
  experience: string;
  coverLetter: string;
  file: File | null;
};

interface Props {
  translatedData: TranslatedData;
}

const CareerClient: React.FC<Props> = ({ translatedData }) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    position: "",
    experience: "",
    coverLetter: "",
    file: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fileError, setFileError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/msword",
      ];
      const fileExtension = file.name.split(".").pop()?.toLowerCase();

      if (
        !allowedTypes.includes(file.type) ||
        !["pdf", "docx", "doc"].includes(fileExtension || "")
      ) {
        setFileError(
          translatedData.errors.fileTypeInvalid ||
            "Only PDF, DOCX, or DOC files are allowed."
        );
        e.target.value = "";
        return;
      }

      if (file.size > 10 * 1024 * 1024) {
        // 10MB limit
        setFileError(
          translatedData.errors.fileSizeExceeded || "File size exceeds the limit (10MB)."
        );
        e.target.value = "";
        return;
      }

      setFormData((prev) => ({ ...prev, file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (fileError) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      const submitFormData = new FormData();

      // Append all text fields
      submitFormData.append("name", formData.name);
      submitFormData.append("surname", formData.surname);
      submitFormData.append("email", formData.email);
      submitFormData.append("phone", formData.phone);
      submitFormData.append("country", formData.country);
      submitFormData.append("city", formData.city);
      submitFormData.append("position", formData.position);

      // Optional fields
      if (formData.experience) {
        submitFormData.append("experience", formData.experience);
      }

      if (formData.coverLetter) {
        submitFormData.append("coverLetter", formData.coverLetter);
      }

      // Append file if exists
      if (formData.file) {
        console.log(
          "Attaching file:",
          formData.file.name,
          "Size:",
          formData.file.size,
          "Type:",
          formData.file.type
        );
        submitFormData.append("resumeFile", formData.file);
      } else {
        console.log("No file attached to the form");
      }

      const response = await fetch("/api/career", {
        method: "POST",
        body: submitFormData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit application");
      }

      // Reset form on success
      setFormData({
        name: "",
        surname: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        position: "",
        experience: "",
        coverLetter: "",
        file: null,
      });
      setSubmitSuccess(true);

      // Scroll to top of form
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
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
    <main className="max-w-[1400px] mx-auto px-4 lg:px-0 py-[30px] md:pt-[50px] md:pb-0">
      <h1 className="font-semibold text-3xl sm:text-[52px] mb-2">
        {translatedData.title}
      </h1>
      <p className=" text-lg mb-[50px] max-w-[800px]">
        {translatedData.description}
      </p>

      {submitSuccess && (
        <div className="bg-[#01DB60]/20 border border-[#01DB60]/30 rounded-lg p-4 mb-6 flex items-center justify-center">
          <span className="text-gray-800">
            {translatedData.form.successMessage ||
              "Your application has been submitted successfully!"}
          </span>
        </div>
      )}

      {submitError && (
        <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-6 flex items-center justify-center">
          <span className="text-red-700">{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="grid md:grid-cols-2 gap-y-10 gap-x-8 max-w-[900px]">
          {[
            {
              label: translatedData.form.name,
              name: "name",
              placeholder: translatedData.form.placeholders.name,
              required: true,
            },
            {
              label: translatedData.form.surname,
              name: "surname",
              placeholder: translatedData.form.placeholders.surname,
              required: true,
            },
            {
              label: translatedData.form.email,
              name: "email",
              placeholder: translatedData.form.placeholders.email,
              required: true,
            },
            {
              label: translatedData.form.phone,
              name: "phone",
              placeholder: translatedData.form.placeholders.phone,
              required: true,
            },
            {
              label: translatedData.form.country,
              name: "country",
              placeholder: translatedData.form.placeholders.country,
              required: true,
            },
            {
              label: translatedData.form.city,
              name: "city",
              placeholder: translatedData.form.placeholders.city,
              required: true,
            },
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label className="font-semibold text-[#141514] text-[18px]">
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                name={field.name}
                value={formData[field.name as keyof typeof formData] as string}
                onChange={handleChange}
                type="text"
                placeholder={field.placeholder}
                required={field.required}
                className="w-full max-w-[480px] h-14 px-6 rounded-[90px] bg-[#FBFBF9] border-[3px] border-[#f5f5f5] text-[#141514] placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-semibold text-[#141514] text-[18px] pt-[40px]">
            {translatedData.form.resume}
            <span className="font-normal text-base ml-2 text-gray-600">
              (PDF, DOCX, DOC)
            </span>
          </label>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <label className="bg-[#01db60] text-white py-3 px-6 rounded-full text-sm cursor-pointer shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] hover:bg-green-600 transition font-normal">
              {translatedData.form.uploadFile}
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.docx,.doc,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
                className="hidden"
              />
            </label>
            <span className="text-sm text-gray-400">
              {formData.file
                ? formData.file.name
                : translatedData.form.placeholders.noFile}
            </span>
          </div>
          {fileError && <p className="text-red-500 text-sm mt-1">{fileError}</p>}
        </div>

        {/* Desired Position and Experience */}
        <div className="grid md:grid-cols-2 gap-y-6 gap-x-8 max-w-[900px] pt-[40px]">
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#141514] text-[18px]">
              {translatedData.form.position}
              <span className="text-red-500">*</span>
            </label>
            <input
              name="position"
              value={formData.position}
              onChange={handleChange}
              type="text"
              placeholder={translatedData.form.placeholders.position}
              required
              className="w-full max-w-[480px] h-14 px-6 rounded-[90px] bg-[#FBFBF9] border-[3px] border-[#f5f5f5] text-[#141514] placeholder:text-gray-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold text-[#141514] text-[18px]">
              {translatedData.form.experience}
            </label>
            <input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              type="text"
              placeholder={translatedData.form.placeholders.experience}
              className="w-full max-w-[480px] h-14 px-6 rounded-[90px] bg-[#FBFBF9] border-[3px] border-[#f5f5f5] text-[#141514] placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-[40px] max-w-[900px]">
          <label className="font-semibold text-[#141514] text-[18px]">
            {translatedData.form.coverLetter}
          </label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder={translatedData.form.placeholders.coverLetter}
            className="w-full max-w-[900px] min-h-[150px] px-6 py-4 rounded-[16px] bg-[#FBFBF9] border-[3px] border-[#f5f5f5] text-[#141514] placeholder:text-gray-400 resize-none focus:outline-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !!fileError}
          className="mt-[18px] mb-[40px] md:mb-[100px] w-full sm:w-fit bg-[#01db60] hover:bg-[#01db60]/90 shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#0ef4b759] text-white text-[16px] md:text-[18px] px-4 py-[14px] md:py-[15px] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting
            ? translatedData.form.sending || "Sending..."
            : translatedData.form.sendApplication}
        </Button>
      </form>
    </main>
  );
};

export default CareerClient;