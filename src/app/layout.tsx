import type { Metadata } from "next";
import { Inter, Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "Data Visualization in Marketing",
  description: "Data Visualization in Marketing Presentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${sourceSans3.variable}`}>
        <main className="bg-slate-50 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
