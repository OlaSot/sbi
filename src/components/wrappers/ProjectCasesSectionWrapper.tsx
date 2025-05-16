"use client";

import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/Card";
import Image from "next/image";
import { ProjectModal } from "../ui/ProjectModal";
import Arrow from "@/assets/icons/arrow.svg";
import image1 from "@/assets/vagon.webp";
import image2 from "@/assets/modular2.webp";
import image3 from "@/assets/modular3.webp";
import additionalImage1 from "@/assets/vagon.webp";
import additionalImage2 from "@/assets/vagon.webp";
import additionalImage3 from "@/assets/vagon.webp";

interface Project {
  id: number;
  date: string;
  title: string;
  description: string;
}

interface Props {
  title: string;
  readMore: string;
  projectCases: Project[];
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

export default function ProjectCasesSectionClient({
  title,
  readMore,
  projectCases,
  modalDescription,
  requestButtonText,
  translated,
}: Props) {
  const images = [image1, image2, image3];
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);

  return (
    <section className="w-full py-[35px] sm:py-12 lg:py-[120px] px-4 md:px-4 2xl:px-0">
      <div className="max-w-[1410px] mx-auto">
        <h2 className="text-center md:text-left text-[30px] sm:text-3xl md:text-4xl lg:text-[52px] font-semibold text-[#131513] leading-normal tracking-[0px]  mb-6 sm:mb-8 lg:mb-10">
          {title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[30px]">
          {projectCases.map((project, index) => (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="w-full bg-white overflow-hidden rounded-xl sm:rounded-2xl transition-transform hover:scale-[1.02] cursor-pointer h-[582px] flex flex-col"
            >
              <div className="relative w-full h-[300px] sm:h-[320px] lg:h-[350px]">
                <Image
                  src={images[index % images.length]}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <CardContent className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <CalendarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                  <span className="text-sm sm:text-base text-[#757575] ">
                    {project.date}
                  </span>
                </div>

                <h3 className="text-base sm:text-xl lg:text-[24px] font-semibold mb-3  text-[#131513]">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 ">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    variant="outline"
                    className="w-full flex justify-center gap-2 rounded-[90px] border border-solid border-[#131513] font-normal text-[#141514] text-[16px] md:text-[16px] px-4 py-[12px] md:py-[14px]"
                  >
                    {readMore}
                    <Image src={Arrow} alt="arrow" width={10} height={10} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          date={selectedProject.date}
          description={selectedProject.description}
          image={image1}
          additionalImages={[additionalImage1, additionalImage2, additionalImage3]}
          modalDescription={modalDescription}
          requestButtonText={requestButtonText}
          translated={translated}
        />
      )}
    </section>
  );
}