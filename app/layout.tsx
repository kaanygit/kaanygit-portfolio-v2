import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yasin Kaan Yiğit - Yazılım Geliştirici",
  description: "Flutter ve mobil uygulama geliştiricisi. Firebase, REST API, BLoC ve MVC mimarileri konusunda uzman.",
  keywords: ["Flutter", "Dart", "Firebase", "Mobil Uygulama", "Yazılım Geliştirici", "Portfolio"],
  authors: [{ name: "Yasin Kaan Yiğit" }],
  creator: "Yasin Kaan Yiğit",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://kaanygit.vercel.app",
    title: "Yasin Kaan Yiğit - Yazılım Geliştirici",
    description: "Flutter ve mobil uygulama geliştiricisi. Firebase, REST API, BLoC ve MVC mimarileri konusunda uzman.",
    siteName: "Yasin Kaan Yiğit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasin Kaan Yiğit - Yazılım Geliştirici",
    description: "Flutter ve mobil uygulama geliştiricisi. Firebase, REST API, BLoC ve MVC mimarileri konusunda uzman.",
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
    <html lang="tr" className="dark">
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
