import type { Metadata } from "next";
import { Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";


const merriweather = Merriweather({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Agri Corp Pvt Ltd - Premium Indian Rice Exporter",
  description: "Leading exporter of premium Indian non-basmati rice. State-of-the-art facilities ensuring highest quality grains. Trusted by leading brands worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${geistMono.variable} antialiased font-sans`}
      >
        
      {children}
     
      </body>
    </html>
  );
}
