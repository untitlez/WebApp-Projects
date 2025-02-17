import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="fill h-[768] grid place-content-center py-8">
        <div className="flex gap-24">
        <Link href="/page/users">
            <button className="btn btn-outline btn-info btn-wide btn-lg hover:scale-125">Users</button>
          </Link>
          <Link href="/page/product">
            <button className="btn btn-outline btn-accent btn-wide btn-lg hover:scale-125">Product</button>
          </Link>
        </div>
      </div>
    </>
  );
}
