import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prizma Graphics",
  description:
    "Transform your ideas into stunning print realities. PrintCraft Studio offers premium digital printing services — business cards, banners, packaging, and more. Fast turnaround, unmatched quality.",
  keywords: "digital printing, business cards, banners, packaging, custom print, premium printing",
  openGraph: {
    title: "PrintCraft Studio | Premium Digital Printing",
    description: "Transform your ideas into stunning print realities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
