import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avalon",
  description: "A avalon helper",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <head className="h-250 bg-cyan-300 flex items-center justify-evenly">
          <p>Start Game</p>
          <p>Tutorial</p>
        </head>  
        {children}
        </body>
    </html>
  );
}
