import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApexDevs | A New Class of Engineering",
  description: "Global senior teams delivering end-to-end product success — AI-native development, 99.99% reliability, enterprise-grade security, and 40–65% cost reduction. Distributed excellence across continents.",
  keywords: ["engineering", "AI development", "DevOps", "SecOps", "cloud infrastructure", "software development"],
  authors: [{ name: "ApexDevs" }],
  openGraph: {
    title: "ApexDevs | A New Class of Engineering",
    description: "Global senior teams delivering end-to-end product success — AI-native development, 99.99% reliability, enterprise-grade security, and 40–65% cost reduction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
