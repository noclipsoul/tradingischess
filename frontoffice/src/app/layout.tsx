import type { Metadata, Viewport } from "next";



import "./globals.css";

import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";

import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/footer";

export const dynamic = 'force-dynamic'; 

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData();
 
  return (
    <html lang="en">
      <body
       
      >
        <Header data={globalData.data.header} />
        {children}
        <Footer data={globalData.data.footer} />
      </body>
    </html>
  );
}