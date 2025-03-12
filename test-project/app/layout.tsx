import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FChisinau');
  //const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FChisinau', { cache: "no-store" ); //bypass caching
  //const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FChisinau', { next: { revalidate: 5 } }); //revalidate cache every 5 seconds
  const time: { dateTime: string } = await response.json();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gray-800 text-white text-center p-3 fixed top-0 left-0 w-full">
          Navbar
        </div>

        <div className="pt-12 pb-12">
          <div className="pt-2 pb-2">
            Current time: {time.dateTime}
          </div>
          {children}
        </div>

        <footer className="bg-gray-800 text-white text-center p-3 fixed bottom-0 left-0 w-full">
          © 2025 My Website. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
