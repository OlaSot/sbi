"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ModalForm from "../ui/ModalForm";

export default function HeaderClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/en" },
    { label: "About Us", href: "/en/about-uss" },
    { label: "Contacts", href: "/en/contactss" },
    { label: "Solutions", href: "/en/solutionss" },

  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0202]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link href="/en">
            <Image alt="logo" src="/logo.png" width={100} height={50} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10 bg-black rounded-[10px] px-8 py-3 outline outline-[3px] outline-[#FFCE2B]">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-white hover:text-[#FFCE2B] text-base lg:text-lg font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop button */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button
              className="bg-[#FFCE2B] text-black hover:bg-[#FFCE2B]/90 rounded-[10px] shadow-[inset_0px_-2px_6.7px_#014c3540,1px_3px_5px_#665313] text-[18px] px-10 py-[15px]"
              onClick={() => setIsModalOpen(true)}
            >
              Contact Us
            </button>
          </div>

          <ModalForm
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            translated={{
              title: "Contact Form",
              description: "Leave your message and we'll get back to you.",
              namePlaceholder: "Your name",
              phonePlaceholder: "Phone number",
              messagePlaceholder: "Message",
              button: "Send",
              sending: "Sending...",
              successMessage: "Message sent successfully!",
            }}
          />

          {/* Spacer for layout */}
          <div className="w-6 md:hidden" />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex items-center justify-between px-4 py-5 border-b border-gray-200">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-black"
              >
                <X size={24} />
              </button>
              <div className="text-2xl font-semibold text-black">STATOM GmbH</div>
              <div className="w-6" />
            </div>

            <div className="flex-1 flex flex-col gap-[40px] px-6 py-8">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-black text-[18px] font-normal"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
