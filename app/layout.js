import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "ลำบากวันนี้ พรุ่งนี้ก็ลำบาก",
  description: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="fill">
          {children}
        </div>
      </body>
    </html>
  );
}
