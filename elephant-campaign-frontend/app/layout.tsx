import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/content";
import JsonLd from "@/components/JsonLd";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "The Chain Free Project | Ethical Elephant Conservation",
    template: "%s | The Chain Free Project",
  },
  description:
    "Join The Chain Free Project in Sauraha, Chitwan — rescuing working elephants, ending chains and saddles, and building a kinder future with local mahouts.",
  keywords: [
    "elephant sanctuary",
    "nepal",
    "ethical tourism",
    "chain free",
    "wildlife conservation",
    "volunteer",
    "sauraha",
    "chitwan",
    "ride free elephant",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: SITE.url,
    siteName: SITE.name,
    title: "The Chain Free Project",
    description:
      "Elephants belong free of chains. Help build a ride-free sanctuary in Sauraha, Chitwan, Nepal.",
    images: [
      {
        url: "/elephant-1.jpg",
        width: 1200,
        height: 630,
        alt: "Elephant in natural habitat — The Chain Free Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chain Free Project",
    description:
      "Help free working elephants from chains and saddles in Sauraha, Chitwan.",
    images: ["/elephant-1.jpg"],
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
