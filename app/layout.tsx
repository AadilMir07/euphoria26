import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EVENT } from "@/constants/event";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${EVENT.name} — ${EVENT.tagline}`,
  description: `${EVENT.name} is on ${EVENT.day}, ${EVENT.date} at ${EVENT.venue}. ${EVENT.tagline} Passes starting at ₹${EVENT.price}.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // Some mobile browsers / on-device AI features inject their
      // own attributes onto <html> before React hydrates (e.g. a
      // remote-frame token), which will never match the server
      // HTML. This is expected and outside our control, so we
      // tell React not to treat it as an error.
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
