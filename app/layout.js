import Navbar from "./components/navbar/navbar";
import "./globals.css";

export const metadata = {
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
