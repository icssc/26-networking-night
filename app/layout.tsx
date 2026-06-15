import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { GalaxyBackground } from "@/components/GalaxyBackground";
import { MuiProvider } from "@/components/MuiProvider";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Networking Night",
  description: "2026 ICSSC Networking Night",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} h-full antialiased`}
    >
      <body className={`${nunito.className} relative min-h-full flex flex-col font-sans`}>
        <MuiProvider fontFamily={nunito.style.fontFamily}>
          <GalaxyBackground />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            {children}
          </div>
        </MuiProvider>
      </body>
    </html>
  );
}
