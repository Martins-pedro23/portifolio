import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portifólio",
  description: "Meu portifólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <SpeedInsights />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute z-20  animate-breath-light-to-dark  bottom-[-500px] right-20 w-72 h-72 bg-gradient-to-br from-[#ffffffa1] to-transparent opacity-50 rounded-lg"></div>
        <div className="absolute z-20  animate-breath-light-to-dark-2 bottom-[-750px] sm:bottom-[-600px] right-20 w-48 h-48 bg-gradient-to-br from-[#ffffffa1] to-transparent opacity-50 rounded-lg"></div>
        <div className="absolute z-20  animate-breath-light-to-dark bottom-[-1200px]  left-0 w-72 h-72  sm:w-96 sm:h-96 bg-gradient-to-tr from-[#ffffff63] to-transparent opacity-50 rounded-lg"></div>
        <div className="absolute z-20  animate-breath-light-to-dark-2 bottom-[-2000px]  sm:bottom-[-600px] left-20 w-20 h-20 bg-gradient-to-br from-[#ffffffa1] to-transparent opacity-50 rounded-lg"></div>
        <div className="absolute z-20  animate-breath-light-to-dark bottom-[-1800px] right-20 w-36 h-36 bg-gradient-to-br from-[#ffffffa1] to-transparent opacity-50 rounded-lg"></div>
        {children}
      </body>
    </html>
  );
}
