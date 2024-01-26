import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// This is the entry point to the app and can be used for creating global state with react context/reducer or redux

/*TODO: layout.tsx at that is shared across the whole app. https://www.freecodecamp.org/news/routing-in-nextjs/
  Thinking the top logo bar and burger.
*/


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}