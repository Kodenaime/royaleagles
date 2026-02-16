import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://royaleagles.com.au"), 
  title: {
    default: "Royal Eagles | NDIS Registered Disability Support & Home Care WA",
    template: "%s | Royal Eagles", 
  },
  description:
    "Royal Eagles provides compassionate NDIS-registered disability support and home care in Western Australia. Dedicated to dignity, independence, and family-like care.",
  keywords: [
    "Healthcare", 
    "NDIS provider Western Australia", 
    "disability support services", 
    "home care WA", 
    "Royal Eagles care", 
    "personal care NDIS", 
    "community participation WA", 
  ],
  authors: [{ name: "Emmanuel Foundation" }],
  openGraph: {
    title: "Royal Eagles | NDIS Registered Disability Support & Home Care WA",
    description: "Royal Eagles provides compassionate NDIS-registered disability support and home care in Western Australia. Dedicated to dignity, independence, and family-like care.",
    url: "https://royaleagles.com.au",
    siteName: "Royal Eagles",
    locale: "en_US",
    type: "website",
    images: [ 
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a", 
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="min-h-screen bg-gray-50 font-sans antialiased"
      >
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}