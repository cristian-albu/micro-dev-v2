import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import GdprContextProvider from "@/components/gdpr/GdprContext";

const poppins = Poppins({
  weight: ["100", "300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GdprContextProvider>
        <body className={poppins.className}>{children}</body>
      </GdprContextProvider>
    </html>
  );
}
