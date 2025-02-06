import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Shopping",
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
