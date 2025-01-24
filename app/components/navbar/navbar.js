import Link from "next/link";
import Cart from "./cart";
import Menu from "./menu";
import Theme from "./theme";

export default function Navbar() {
  return (
    <>
      {/* Desktop  */}
      <div className="navbar max-w-screen-xl bg-base-100">
        <div className="navbar-start">
          <div className="lg:hidden"><Menu/></div>
          <ul
            tabIndex={0}
            className="menu bg-base-100 rounded-box p-2 shadow hidden md:flex flex-row ">
            <li><Link href={'/'}>Homepage</Link></li>
            <li><Link href={'/'}>Portfolio</Link></li>
            <li><Link href={'/'}>About</Link></li>
          </ul>

        </div>
        
        <div className="navbar-center">daisyUI</div>
        
        <div className="navbar-end">
          <Cart/>
          <Theme/>
        </div>

      </div>
    </>
  );
}
