import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabith | Portfolio",
  description: "I'm a professional full stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className=" scrollbar-hidden ">{children}</body>
    </html>
  );
}
