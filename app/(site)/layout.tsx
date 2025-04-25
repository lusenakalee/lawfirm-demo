import { DisableDraftMode } from "@/components/DisableDraftMode";
import Footer from "@/components/Footer";
import NavbarMain from "@/components/NavbarMain";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { Geist, Geist_Mono } from "next/font/google";
import { draftMode } from "next/headers";
import "../globals.css";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coghlan, Welsh & Guest",
  description: "Expert Knowledge & Commercially awareness in law",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative w-full">
          <NavbarMain />
          <div className="container mx-auto  pt-24">{children}</div>
          {(await draftMode()).isEnabled && (
            <>
              <VisualEditing />
              <DisableDraftMode />
            </>
          )}
        </div>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
