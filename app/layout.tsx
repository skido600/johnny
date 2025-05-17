import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
export const metadata: Metadata = {
  metadataBase: new URL("https://johnny-tech-academy.vercel.app/"),
  title: "Johnny Tech Academy |Video|Graphic Design|AI",
  description:
    "Johnny Tech offers  Academy  hands-on creative courses in video editing, graphic design, and AI tools. Learn storytelling, design principles, and cutting-edge AI workflows using tools like Premiere Pro, Photoshop, MidJourney, and ChatGPT.",

  keywords: [
    "Johnny Tech",
    "creative",
    "video editing",
    "graphic design",
    "storytellin",
    "design principles",
    "Nigeria",
    "Portfolio",
    "Photoshop",
    "ChatGPT",
    "MidJourney",
    "Academy",
    "Anambra",
    "Onitsha",
  ].join(", "),
  robots: "index, follow",
  icons: [
    { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
    { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    { url: "/apple-touch-icon.png", type: "image/png" },
    { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    { url: "/favicon.ico", type: "image/x-icon" },
  ],
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],

    title: "Johnny Tech Academy  | Video | Graphic |AI  ",
    description:
      "Creative Video Editing Graphic Design  AI for Creatives for brands across Africa and beyond.",
    type: "website",
    locale: "en_US",
    url: "https://johnny-tech-academy.vercel.app/",
    siteName: "Johnny Tech Academy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ylme1U00H2Xv3y8l8ntAU_4eP6RWmtNPztYXMeMfXjs"
        />
      </head>
      <body>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
