import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Selin Keskin | Software Engineer",
  description:
    "Portfolio of Selin Keskin, a Software Engineer working on software development, artificial intelligence and data-driven applications.",

  keywords: [
    "Selin Keskin",
    "Software Engineer",
    "Software Developer",
    "AI",
    "Artificial Intelligence",
    "Next.js",
    "Python",
    "C#",
    "Java",
  ],

  authors: [
    {
      name: "Selin Keskin",
    },
  ],

  openGraph: {
    title: "Selin Keskin | Software Engineer",
    description:
      "Software engineering, AI and technology projects by Selin Keskin.",
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
      <body>{children}</body>
    </html>
  );
}