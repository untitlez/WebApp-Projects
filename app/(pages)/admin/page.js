import Link from "next/link";
import { API_URL } from "@/app/lib/constant/admin/api";

import { StatUsers } from "@/app/components/admin/StatUsers";
import { TableUsers } from "@/app/components/admin/TableUsers";
import { ToggleTheme } from "@/app/components/ToggleTheme";

export default async function AdminPage() {
  const res = await fetch(API_URL, { cache: "no-store" });
  const data = await res.json();

  return (
    <div className="w-full space-y-4">
      <section className="flex justify-between items-center">
        <h1 className="font-semibold lg:text-2xl">Admin System</h1>
        <div className="flex items-center gap-2">
          <ToggleTheme id="admin" main="luxury" sub="winter" />
          <Link
            href="/admin/add-user"
            className="btn btn-sm lg:btn text-xs lg:text-base"
          >
            Add User
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-col lg:flex-row gap-4">
        <StatUsers data={data} />
      </section>
      <section>
        <TableUsers data={data} />
      </section>
    </div>
  );
}
