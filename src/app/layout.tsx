import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PathnameProvider from "../components/PathnameProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Playful Pixels",
  description: "An interactive animation showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.56/build/spline-viewer.js"
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <PathnameProvider>
          <main className="flex-grow">{children}</main>
        </PathnameProvider>
      </body>
    </html>
  );
}
