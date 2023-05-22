import { Noto_Sans_JP, Noto_Sans, Jost } from 'next/font/google'
// Noto_Sans_JP

export const notojp = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-notojp",
  display: "swap",
});

export const noto = Noto_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const jost = Jost({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

