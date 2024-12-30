import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/frame/footer/Footer";
import Header from "@/components/frame/header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = localFont({
  src: "./fonts/ArbutusSlab-Regular.ttf",
  variable: "--font-geist-sans",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  title: "RP-clothing",
  description: "Generated by create next app",
  // FIXME: アイコンが入ります
  // icons: {
  //   icon: "/images/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable}`}>
          <Header />
          <ToastContainer />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}
