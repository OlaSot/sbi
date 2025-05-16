"use client";

import React from "react";
import Link from "next/link";

export default function HeroHeaderSection() {
  return (
    <section className="w-full bg-grey mt-[150px] py-16 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* ТЕКСТ */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            Affordable <br />
            Automation. Lightning <br />
            Fast ROI.
          </h1>
          <p className="text-gray-800 mb-4">
            SBI Robotix is the automation hammer for blue-collar America.
          </p>
          <p className="text-gray-800 mb-4">
            We don’t just sell robots—we remove staffing headaches, labor gaps,
            and lost margin.
          </p>
          <p className="text-gray-800 mb-4">
            Our systems automate the dirty, repetitive, high-risk factory tasks
            nobody wants—packing, welding, loading, and moving. We install fast,
            prove ROI in under 90 days, and beat legacy integrators on cost,
            warranty, and speed. It’s not about replacing people—it’s about
            giving owners their time and margin back.
          </p>
          <p className="text-gray-800 mb-6">
            We’re building factories that run 24/7 without excuses, and we’re
            reshoring America one robot at a time.
          </p>
          <Link href="#contact">
            <button className="bg-[#FFCE2B] hover:bg-[#FFCE2B]/90 rounded-[10px] shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#665313] text-black text-[18px] px-10 py-[15px]">
              Talk to Our Robot 24/7
            </button>
          </Link>
        </div>
        {/* ВИДЕО */}
        <div className="w-full md:w-1/2 border-4 border-black p-4 rounded-lg shadow-lg">
          <div className="w-full aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
            <video
              src="/mainVideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
