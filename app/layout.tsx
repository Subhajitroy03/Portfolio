import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, Manrope } from "next/font/google";
import Nav from "@/components/Nav";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-d", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-b", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Subhajit Roy — Full Stack Backend Developer", template: "%s — Subhajit Roy" },
  description: "Backend-focused engineer and final-year CSE student building APIs, data layers and AI-powered products.",
};
export const viewport: Viewport = { viewportFit: "cover", themeColor: "#FFFEF6" };
import Loader from "@/components/Loader";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${manrope.variable}`}>
      <body>
        <NextTopLoader 
          color="#FFD60A" 
          initialPosition={0.08} 
          crawlSpeed={200} 
          height={5} 
          crawl={true} 
          showSpinner={true} 
          easing="ease" 
          speed={200} 
          shadow="0 0 20px #FFD60A,0 0 10px #FFD60A" 
          zIndex={1600} 
        />
        <Loader />
        <SmoothScroll />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
