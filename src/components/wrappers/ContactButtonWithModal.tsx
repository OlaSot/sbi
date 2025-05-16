"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import ModalForm from "../ui/ModalForm";

interface ModalTranslations {
  title: string;
  description: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  messagePlaceholder: string;
  button: string;
  sending: string;
  successMessage: string;
}

interface ContactButtonWithModalProps {
  buttonText: string;
  className?: string;
  translated: ModalTranslations; 
}

export default function ContactButtonWithModal({
  buttonText,
  className,
  translated,
}: ContactButtonWithModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className={className} onClick={() => setIsOpen(true)}>
        {buttonText}
      </Button>
      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        translated={translated}
      />
    </>
  );
}