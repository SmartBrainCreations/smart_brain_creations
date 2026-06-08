import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE || "http://localhost:3000"),
  title: {
    default: "Smart Brain Creations",
    template: "%s | Smart Brain Creations"
  },
  description:
    "Future-ready creative labs for schools with hands-on programs in design, animation, AI, and game development.",
  keywords: [
    "creative labs",
    "game development for schools",
    "animation classes",
    "design education",
    "AI for kids",
    "Smart Brain Creations"
  ],
  authors: [
    { name: "Smart Brain Creations", url: "https://smartbraincreations.com" }
  ],
  openGraph: {
    title: "Smart Brain Creations",
    description:
      "Future-ready creative labs for schools with hands-on programs in design, animation, AI, and game development.",
    siteName: "Smart Brain Creations",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Smart Brain Creations"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Brain Creations",
    description:
      "Future-ready creative labs for schools with hands-on programs in design, animation, AI, and game development.",
    images: ["/image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: ["/favicon.ico", "/logo.png"],
    shortcut: "/favicon.ico",
    apple: "/logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
