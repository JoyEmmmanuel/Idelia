import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Import the luxury duo
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
// Configure Inter (Your Sans-Serif for body text)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // This connects to your Tailwind config
});

// Configure Playfair Display (Your Serif for Luxury Headings)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif", // This connects to your Tailwind config
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: "IDELIA | PREMIUM WIGS",
  description: "Breathtaking premium wigs for the modern woman.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We apply the font variables to the body tag */}
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}