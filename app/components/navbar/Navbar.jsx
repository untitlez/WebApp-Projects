import Link from "next/link";
import MenuBar from "./MenuBar";

export default function Navbar() {
  return (
    <>
      {/* Desktop  */}
      <div className="bg-base-200 w-full justify-items-center">
        <nav className="navbar max-w-screen-xl">
          <div className="navbar-start">
            <div className="lg:hidden">
              <MenuBar/>
            </div>
            <ul
              tabIndex={0}
              className="menu rounded-box p-2 shadow hidden md:flex flex-row gap-1"
            >
              <li>
                <Link href={"/page/users"}>Users</Link>
              </li>
              <li>
                <Link href={"/page/product"}>Product</Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-4">
            <Link href={"/page/profile"}>
              <div className="avatar">
                <div className="ring-info ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                  <img src="/shiba.jpg" />
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
