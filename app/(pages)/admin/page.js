import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/app/lib/api";

import { StatUsers } from "@/app/components/admin/StatUsers";
import { TableUsers } from "@/app/components/admin/TableUsers";
import { ToggleTheme } from "@/app/components/admin/ToggleTheme";

export default async function AdminPage() {
  const { data } = await axios.get(API_URL);
  return (
    <>
      <section className="flex justify-between items-center">
        <h1 className="font-semibold lg:text-2xl">Dash Board</h1>
        <div className="flex items-center gap-2">
          <ToggleTheme />
          <Link
            href="/admin/add-user"
            className="btn btn-sm lg:btn text-xs lg:text-base"
          >
            Add User
          </Link>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row gap-4">
        <StatUsers data={data} />
      </section>
      <section>
        <TableUsers data={data} />
      </section>
    </>
  );
}
