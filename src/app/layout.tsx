

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google"; // Import Inter here too
import "./globals.css";
import Navbar from "./Navbar";
import "@radix-ui/themes/styles.css"; 
import { Theme, ThemePanel } from "@radix-ui/themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
//  check how to set Inter Font form radix-ui Topography
const inter = Inter({ subsets: ["latin"],
  variable: '--font-inter',
 });  // <-- Initialize inter here!

export const metadata: Metadata = {
  title: "Issue-Tracker Next.js project",
  description: "Created By Aarya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Theme accentColor="purple"> 
          {/*  i copoed this from theme panel  */}
       
        <Navbar />
        <main className="p-5">{children}</main>
        {/*  this themepanel will change the theme size color of the the compoennts you will get that panel aside  */}
        <ThemePanel/>
        </Theme>
      </body>
    </html>
  );
}
