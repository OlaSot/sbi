"use client";

import { useRef } from "react";

export default function ApplicationGallery() {
  // Рефы на видео
const videoRefs = [
  useRef<HTMLVideoElement>(null),
  useRef<HTMLVideoElement>(null),
  useRef<HTMLVideoElement>(null),
  useRef<HTMLVideoElement>(null),
];


  // Функции для запуска и паузы
  const handlePlay = (index: number) => {
    videoRefs[index].current?.play();
  };

  const handlePause = (index: number) => {
    videoRefs[index].current?.pause();
  };

  return (
    <section className="w-full bg-grey  py-20 px-4">
      <div className="max-w-[1280px] mx-auto text-center mb-12">
        <h2 className=" text-4xl md:text-5xl font-bold  text-black">
          Application Gallery
        </h2>
        <p className="text-gray-600 mt-6">
          Explore our diverse robotics applications in action.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-6 h-[700px]">
        {/* Левая колонка */}
        <div className="flex flex-col flex-1 gap-6">
          <div
            className="h-2/3 overflow-hidden rounded-xl group"
            onMouseEnter={() => handlePlay(0)}
            onMouseLeave={() => handlePause(0)}
          >
            <video
              ref={videoRefs[0]}
              src="/robots/video1.mp4"
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div
            className="h-1/3 overflow-hidden rounded-xl group"
            onMouseEnter={() => handlePlay(1)}
            onMouseLeave={() => handlePause(1)}
          >
            <video
              ref={videoRefs[1]}
              src="/robots/video2.mp4"
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Правая колонка */}
        <div className="flex flex-col flex-1 gap-6">
          <div
            className="h-1/3 overflow-hidden rounded-xl group"
            onMouseEnter={() => handlePlay(2)}
            onMouseLeave={() => handlePause(2)}
          >
            <video
              ref={videoRefs[2]}
              src="/robots/video3.mp4"
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          <div
            className="h-2/3 overflow-hidden rounded-xl group"
            onMouseEnter={() => handlePlay(3)}
            onMouseLeave={() => handlePause(3)}
          >
            <video
              ref={videoRefs[3]}
              src="/robots/mainVideo.mp4"
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
