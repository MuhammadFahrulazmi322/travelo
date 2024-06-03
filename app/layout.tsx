import type { Metadata } from "next";
import { montserrat, roboto } from "./fonts";
import "./globals.css";
import Nav from "../components/Navbar";
import Footer from "@/components/Footer";
import NextAuthProvider from "@/context/NextAuthProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body>
        <NextAuthProvider>
          <Nav />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
