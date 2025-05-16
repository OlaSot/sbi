'use client';

import { Button } from "../ui/Button";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollButton({ children, className }: Props) {
  const scrollToInfoSection = () => {
    const elementById = document.getElementById('info-section');
    const elementByData = document.querySelector('[data-section="info"]');
    const element = elementById || elementByData;

    if (element) {
      const headerOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <Button className={className} onClick={scrollToInfoSection}>
      {children}
    </Button>
  );
}
