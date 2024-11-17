import type { Metadata } from "next";
import { Roboto, Barlow, Inter, Rubik } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import HeaderMobile from "./components/HeaderMobile";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import Favicon from "/public/favicon.png";
import HeaderMenu from "./components/HeaderMenu";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rubik",
});

// export const metadata: Metadata = {
//   icons: [{ rel: "icon", url: Favicon.src }],
// };

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // Assuming params.locale is provided
}) {
  // Fetch messages for the locale
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${roboto.variable} ${barlow.variable} ${inter.variable} ${rubik.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <HeaderMenu />
          <HeaderMobile />
          <AntdRegistry>{children}</AntdRegistry>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
