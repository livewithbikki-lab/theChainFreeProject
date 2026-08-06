import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "The Chain Free Project | Ethical Elephant Conservation",
    template: "%s | The Chain Free Project",
  },
  description:
    "Join The Chain Free Project in Sauraha, Chitwan — rescuing working elephants, ending chains and saddles, and building a kinder future with local mahouts.",
  keywords:
    "elephant sanctuary, nepal, ethical tourism, chain free, wildlife conservation, volunteer, sauraha, chitwan",
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
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
