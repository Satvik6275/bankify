import type { Metadata } from "next";
import { Inter , IBM_Plex_Serif} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] , variable: "--font-inter"});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets:['latin'],
  variable: '--font-ibm-plex-serif',
  weight:['400','700']
})

export const metadata: Metadata = {
  title: "Bankify",
  description: "Bankify is a mordern banking platform.",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ibmPlexSerif.className}`}>{children}</body>
    </html>
  );
}
