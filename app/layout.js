import { Geist, Geist_Mono } from "next/font/google";
import { Comfortaa, Poppins, Ubuntu } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-comfortaa" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-poppins" }); // Add weight
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-ubuntu" }); // Add weight

export const metadata = {
  title: "Naman Jain - Web Developer & Full Stack Developer",
  description: "Professional portfolio of Naman Jain, a skilled Web Developer, Full Stack Developer, and MERN Stack Developer. Specializing in Next.js, React, and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${comfortaa.variable} ${poppins.variable} ${ubuntu.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
