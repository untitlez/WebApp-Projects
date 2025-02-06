import Navbar from "@/app/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Long Time Ago",
  description: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
