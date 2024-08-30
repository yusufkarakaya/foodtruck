import "./globals.css";
import Head from "next/head";

import { Amatic_SC } from "next/font/google";
const amatic = Amatic_SC({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Temecula Food Truck",
  description:
    "Food Truck is a food delivery service. We deliver food to your door. Order now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/icon.ico" sizes="any" />
      </Head>
      <body className={`background ${amatic.className}`}>{children}</body>
    </html>
  );
}
