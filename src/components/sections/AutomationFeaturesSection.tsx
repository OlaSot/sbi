'use client';

import { FaClock, FaChartLine, FaCubes } from "react-icons/fa";

export default function AutomationFeaturesSection() {
  const features = [
    {
      icon: <FaClock className="text-[#FFCE2B] w-16 h-16 mb-6 mx-auto" />,
      title: "Automation That Works Around the Clock, Effortlessly.",
      description: "Our systems are designed to be modular and easily scalable.",
      linkText: "Learn More",
    },
    {
      icon: <FaChartLine className="text-[#FFCE2B] w-16 h-16 mb-6 mx-auto" />,
      title: "Achieve ROI in Just 90 Days with Our Solutions.",
      description: "Our robots operate 24/7, delivering consistent performance without complaints.",
      linkText: "Sign Up",
    },
    {
      icon: <FaCubes className="text-[#FFCE2B] w-16 h-16 mb-6 mx-auto" />,
      title: "Affordable Automation That Grows with Your Business Needs.",
      description: "Our solutions are tailored to be cost-effective and scalable for all.",
      linkText: "Get Started",
    },
  ];

  return (
    <section className="w-full bg-grey py-20 px-4">
      <div className="max-w-[1280px] mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Experience Rapid ROI with Our Cutting-Edge Automation Solutions.
        </h2>
      </div>

      <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1280px] mx-auto text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-base text-gray-700 mb-6">{feature.description}</p>
            <a
              href="#"
              className="text-base text-black font-medium inline-flex items-center hover:underline"
            >
              {feature.linkText} <span className="ml-1">›</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
