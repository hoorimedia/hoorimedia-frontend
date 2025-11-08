import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hoorimedia.com"),
  title: "Hoori Media | Creative Digital Agency",
  description:
    "Hoori Media empowers brands with modern digital storytelling — web design, development, and branding that stand out.",
  openGraph: {
    title: "Hoori Media — Creative Digital Agency",
    description:
      "We build beautiful, high-performance websites and digital experiences.",
    url: "https://hoorimedia.com",
    siteName: "Hoori Media",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hoori Media Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoori Media — Creative Digital Agency",
    description:
      "Empowering brands with modern digital storytelling and web excellence.",
    images: ["/og-image.jpg"],
    creator: "@hoorimedia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
