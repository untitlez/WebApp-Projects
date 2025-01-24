import Navbar from "./components/navbar";
import "./globals.css";

export const metadata = {
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1",
  title: "Coffee Shop",
  description: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
