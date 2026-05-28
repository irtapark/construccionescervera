import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Construcciones Cervera | Viviendas de Obra Nueva en Benicarló",
  description: "Promoción de viviendas de 2 y 3 dormitorios desde 143.000 € a solo 50 metros del mar en Benicarló. Construcciones Cervera, calidad y ubicación privilegiada.",
  keywords: "construcciones cervera, benicarló, viviendas obra nueva, pisos benicarló, comprar piso benicarló, promoción inmobiliaria, reformas",
  openGraph: {
    title: "Construcciones Cervera | Viviendas de Obra Nueva en Benicarló",
    description: "Promoción de viviendas de 2 y 3 dormitorios desde 143.000 € a solo 50 metros del mar en Benicarló.",
    url: "https://www.construccionescervera.es",
    siteName: "Construcciones Cervera",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.construccionescervera.es"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col relative">
        {children}
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
