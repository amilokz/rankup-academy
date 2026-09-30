import type { Metadata } from "next";
import { Archivo, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RankUp Academy — Tuition & Coaching Center in Rawalpindi | Matric, FSc, CSS",
  description:
    "RankUp Academy is Rawalpindi's results-obsessed tuition & coaching center. Matric, FSc, MDCAT, CSS/PMS and Spoken English with board-examiner faculty. Admissions open — apply on WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
