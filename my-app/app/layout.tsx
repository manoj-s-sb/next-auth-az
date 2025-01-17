import type { Metadata } from "next";
import {  Geist_Mono ,Montserrat} from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({
  subsets: ['latin'], // You can add subsets like 'latin-ext', 'cyrillic', etc.
  weight: ['400', '700'], // Specify the weights you need
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stancebeam Dashboard",
  description: "Secure dashboard application with Azure B2C authentication",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
