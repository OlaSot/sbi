import Image from 'next/image'
import React from 'react'
import harmonyImage from '@/assets/background/harmony.webp'



export default function HeroImage({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0 w-full h-[495px] md:h-full">
    <Image
      src={harmonyImage}
      alt={alt}
      fill
      priority
      sizes="100vw"
      className="object-cover md:opacity-80"
    />
  </div>
  )
}
