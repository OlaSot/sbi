import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@/app/globals.css";
import  Header  from "@/components/ui/Header";
import { getDictionary } from "@/i18n/getDictionary";

const urbanistFont = Urbanist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export async function generateMetadata({ params: { lang } }: { params: { lang: string } }): Promise<Metadata> {
  const dict = await getDictionary(lang);
  
  return {
    title:  "SBI Robotix ",
    description: dict.metadata?.description || "Modular homes for comfortable living",
    icons: {
      icon: [
        { url: '/favicon.png', type: 'image/png' },
        { url: '/favicon.ico', type: 'image/x-icon' },
      ],
      apple: '/favicon.png',
    },
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {

  return (
    <html lang={lang}>
      <body className={`${urbanistFont.variable} font-sans bg-grey`}>

          <Header />
          {children}

      </body>
    </html>
  );
}
