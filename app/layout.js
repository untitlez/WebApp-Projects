import "./globals.css";
import MainBar from "@/components/Navbar/MainBar";

export const metadata = {
  title: "Coffee Shop",
  description: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainBar/>
        {children}
      </body>
    </html>
  );
}
