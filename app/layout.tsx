import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Yasin Kaan Yiğit - Yazılım Geliştirici",
  description:
    "Flutter ve mobil uygulama geliştiricisi. Firebase, REST API, BLoC ve MVC mimarileri konusunda uzman.",
  keywords: [
    "Flutter",
    "Dart",
    "Firebase",
    "Mobil Uygulama",
    "Yazılım Geliştirici",
    "Portfolio",
  ],
  authors: [{ name: "Yasin Kaan Yiğit" }],
  creator: "Yasin Kaan Yiğit",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://kaanygit.vercel.app",
    title: "Yasin Kaan Yiğit - Yazılım Geliştirici",
    description:
      "Flutter ve mobil uygulama geliştiricisi. Firebase, REST API, BLoC ve MVC mimarileri konusunda uzman.",
    siteName: "Yasin Kaan Yiğit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasin Kaan Yiğit - Yazılım Geliştirici",
    description:
      "Flutter ve mobil uygulama geliştiricisi. Firebase, REST API, BLoC ve MVC mimarileri konusunda uzman.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-body`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
