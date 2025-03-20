import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Utils/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title:
    "Halal Soundtracks - Uplift Your Content with Vocal-Only Soundtracks",
  description:
    "Halal Soundtracks provides high-quality, 100% vocal-only tracks for content creators, businesses, filmmakers, and brands. Whether you need soundtracks for YouTube videos, commercials, or social media, our royalty-free library ensures your content stays engaging and aligned with your values. License, and create without compromise.",
  openGraph: {
    title:
      "Halal Soundtracks - Uplift Your Content with Vocal-Only Soundtracks",
    description:
      "Halal Soundtracks provides high-quality, 100% vocal-only tracks for content creators, businesses, filmmakers, and brands. Whether you need soundtracks for YouTube videos, commercials, or social media, our royalty-free library ensures your content stays engaging and aligned with your values. License, and create without compromise.",
    images: [
      {
        url: `https://halal-beats.s3.amazonaws.com/images/halal-logo.png`,
        width: 200,
        height: 200,
        alt: "Halal Soundtracks",
      },
    ],
    siteName: "Halal Soundtracks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-[40px]`}
      >
        <Analytics />
        <SpeedInsights />
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
