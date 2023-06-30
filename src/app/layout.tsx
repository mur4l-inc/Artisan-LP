import "./globals.css";
import Analytics from "./Analytics";
import { Inter } from "next/font/google";
import { jost, noto, notojp } from "./fonts";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
const title = "Instagram Effect ARならArtisan";
const description =
  "Instagramのエフェクトを気軽に制作するなら、Artisan。Instagramで使えるARやエフェクトを代行制作するソリューションです。クオリティの高いエフェクトで製品や宣伝を盛り上げます。";
const url = "https://artisanlp.netlify.app/";
export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/artisan_ogp.png",
        width: 1200,
        height: 630,
        alt: title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description,
  },
  metadataBase: new URL(process.env.URL ?? url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <meta
        name="google-site-verification"
        content="JU44e3ofDPS9m52UT64VQYIh9QBRnaNOXZNCAGXvGWU"
      />
      <body className={`${jost.variable} ${notojp.variable} ${noto.variable}`}>
        <Suspense>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
