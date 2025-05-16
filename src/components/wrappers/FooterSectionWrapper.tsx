'use client';

import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Quick Links",
    links: ["Home Page", "About Us", "Our Services", "Contact Us", "Privacy Policy"],
  },
  {
    title: "Company Info",
    links: ["Careers", "Support Center", "FAQs", "Blog Posts", "Testimonials"],
  },
  {
    title: "Follow Us",
    links: [
      "LinkedIn Page",
      "Twitter Feed",
      "Facebook Group",
      "Instagram Profile",
      "YouTube Channel",
    ],
  },
  {
    title: "Resources",
    links: ["Webinars", "Case Studies", "White Papers", "Newsroom", "Company Updates"],
  },
  {
    title: "Get in Touch",
    links: ["Contact Sales Team", "Customer Support", "Request a Demo", "Schedule a Call", "Join Our Team"],
  },
  {
    title: "Stay Connected",
    links: ["Join Our Newsletter", "Latest Updates", "Industry Insights", "Tech Innovations", "Legal Info"],
  },
];

export function FooterSectionClient() {
  return (
    <footer className="w-full bg-black px-4 py-16 border-t border-gray-700">
      <div className="max-w-[1400px] mx-auto">
        {/* Верх: сетка из колонок */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerColumns.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {col.links.map((link, index) => (
                  <li key={index}>
                    <Link href="#" className="hover:underline hover:text-white transition">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Низ: логотип + копирайт */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="text-2xl font-script text-white">
            <Image
            width={100}
            height={100}
            alt="Logo" 
            src="/logo.png"/>
          </div>
          <p className="text-sm text-gray-400 mt-4 md:mt-0">
            © 2025 SBI Robotix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
