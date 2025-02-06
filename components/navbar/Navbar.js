import Link from "next/link";
import MenuNav from "./MenuBar";
import Avatar from "./Avatar";

export default function Navbar() {
  return (
    <>
      {/* Desktop  */}
      <div className="bg-base-200 w-full justify-items-center">
        <nav className="navbar max-w-screen-xl pr-4">
          <div className="navbar-start">
            <div className="lg:hidden">
              <MenuNav />
            </div>
            <ul
              tabIndex={0}
              className="menu rounded-box p-2 shadow hidden md:flex flex-row "
            >
              <li>
                <Link href={"/"}>Attraction</Link>
              </li>
              <li>
                <Link href={"/page/product"}>Product</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <Link href={"/"}><Avatar /></Link>
          </div>
        </nav>
      </div>
    </>
  );
}
