import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: [
    {
      path: "./SpaceGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SpaceGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "John Rhule",
  description:
    "User Interactions and Interface designer with 3+ years experience and growing.",
  themeColor: "#fffdf4",
  applicationName: "John Rhule",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://johnrhule.com/",
    title: "John Rhule",
    description:
      "User Interactions and Interface designer with 3+ years experience and growing.",
    siteName: "John Rhule",
  },
  icons: {
    icon: "/favicon32.png",
    shortcut: "/favicon32.png",
    apple: "/favicon192.png",
  },
  twitter: {
    title: "John Rhule",
    description:
      "User Interactions and Interface designer with 3+ years experience and growing.",
    card: "summary_large_image",
    creator: "@rhule__",
  },
  keywords: [
    "John",
    "Rhule",
    "Interaction Designer",
    "Ghana UI Designer",
    "UX Designer",
    "John Kojo Rhule",
  ],
  authors: [
    {
      name: "Desmond Sofua",
      url: "https://sofua.co.uk",
    },
    {
      name: "John Rhule",
      url: "https://johnrhule.com",
    },
  ],
  creator: "John Rhule",
  publisher: "Desmond Sofua",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
