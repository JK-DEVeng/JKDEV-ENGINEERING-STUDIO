import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar"; // Ensure this path is correct based on where you put the file

export const metadata: Metadata = {
  title: "JKDEV ENGINEERING STUDIO",
  description: "Creative Web Developer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        {/* Your existing design effects */}
        <div className="grid-overlay" />
        <div className="noise" />
        
        {/* The new global Navbar */}
        <Navbar />

        {/* Your page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
