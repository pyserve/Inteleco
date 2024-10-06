import { Inter } from "next/font/google";
import "./globals.css";
import dotenv from 'dotenv';

dotenv.config();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next AI",
  description: "AI based Business Company",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.icons.icon} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
