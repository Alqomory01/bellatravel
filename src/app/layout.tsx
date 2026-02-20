import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Montserrat, Lora } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});




// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const poppins = Poppins({
//   subsets: ['latin'], 
//   weight: ['400', '500', '600', '700'], 
//   display: 'swap',
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Bella Maria Travels & Tours",
  description: "Bella Maria travels by bella",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${lora.className}`}>
       <Providers>
        <Header/>
        {children}
        <WhatsAppFloat />
        <Footer/>
        </Providers> 
      </body>
    </html>
  );
}
