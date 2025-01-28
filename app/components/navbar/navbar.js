import Link from "next/link";
import Menu from "./menu";
import Theme from "./theme";
import Cart_icon from "./cart_icon";

export default function Navbar() {
  return (
    <>
      {/* Desktop  */}
      <div className="navbar max-w-screen-xl bg-base-100 mb-8">
        <div className="navbar-start">
          <div className="lg:hidden"><Menu/></div>
          <ul
            tabIndex={0}
            className="menu bg-base-100 rounded-box p-2 shadow hidden md:flex flex-row ">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/product'}>Product</Link></li>
          </ul>

        </div>
        
        <div className="navbar-center">Coffee Shop</div>
        
        <div className="navbar-end">
          <Cart_icon/>
          <Theme/>
        </div>

      </div>
    </>
  );
}
