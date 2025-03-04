import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div data-theme="dark" className="main h-screen justify-center items-center">
        <div className="flex flex-col gap-12 sm:flex-row md:gap-20">
          <Link href="/page/users">
            <button className="btn btn-outline btn-info btn-wide btn-lg hover:scale-125">
              Users
            </button>
          </Link>
          <Link href="/page/product">
            <button className="btn btn-outline btn-accent btn-wide btn-lg hover:scale-125">
              Product
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
