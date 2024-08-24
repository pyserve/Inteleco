import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import dotenv from 'dotenv';

dotenv.config();

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inteleco",
  description: "AI based Business Company",
  icons: {
    icon: "favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
