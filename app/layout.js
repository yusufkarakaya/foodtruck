import "./globals.css";

// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import { Amatic_SC } from "next/font/google";
const amatic = Amatic_SC({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Food Truck",
  description:
    "Food Truck is a food delivery service. We deliver food to your door. Order now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`background ${amatic.className}`}>{children}</body>
    </html>
  );
}
