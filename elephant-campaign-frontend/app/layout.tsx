import type { Metadata } from "next";
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
    "A volunteer-driven campaign for chain-free, ride-free elephant welfare in Sauraha, Chitwan, Nepal.",
  keywords:
    "elephant sanctuary, nepal, ethical tourism, chain free, wildlife conservation, volunteer, sauraha, chitwan",
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
