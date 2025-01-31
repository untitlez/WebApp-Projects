import Link from "next/link";
import Menu from "./menu";
import Avatar from "./avatar";

export default function Navbar() {

  return (
    <>
      {/* Desktop  */}
      <nav className="navbar max-w-screen-xl bg-base-100 my-8 pr-4 rounded">
        <div className="navbar-start">
          <div className="lg:hidden">
            <Menu />
          </div>
          <ul tabIndex={0}
            className="menu bg-base-100 rounded-box p-2 shadow hidden md:flex flex-row ">
            <li>
              <Link href={"/"}>Attraction</Link>
            </li>
            <li>
              <Link href={"/page/product"}>Product</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-center"><Avatar/></div>

        <div className="navbar-end">
          <Link href="/page/cart">
            <div tabIndex={0}
              className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {/* <span className="badge badge-xs badge-primary indicator-item z-0"></span> */}
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
