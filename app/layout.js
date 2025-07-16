import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Web App | Home",
  description: "Practice Website",
  icons: {
    icon: "/favicon/project.png",
    apple: "/favicon/project.png",
    shortcut: "/favicon/project.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="sunset">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
