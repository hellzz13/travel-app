import { InfoContextProvider } from "@/context/InfoContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel App",
  description: "Enjoy your trip",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <InfoContextProvider>
        <body className={inter.className}>{children}</body>
      </InfoContextProvider>
    </html>
  );
}
