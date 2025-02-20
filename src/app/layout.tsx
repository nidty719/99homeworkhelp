import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "99 Homework Help - Expert Tutoring for Middle & High School Students",
  description: "Get unlimited access to expert tutors for middle and high school subjects. Join our community of learners for just $29/month.",
  icons: {
    icon: [
      {
        url: '/images/99homeworklogo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/99homeworklogo.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
