"use client";

import Link from "next/link";

export const TableUsers = ({ data }) => {
  return (
    <table className="table table-xs lg:table-lg">
      {/* head */}
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th className="hidden xl:table-cell">Company</th>
          <th className="hidden sm:table-cell">Email</th>
          <th className="hidden sm:table-cell">Phone</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* row */}
        {data
          .slice()
          .reverse()
          .map((user, i) => (
            <tr key={user.id}>
              <td>{data.length - i}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-circle h-12 w-12">
                      <img src={user.image} alt={user.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.job}</div>
                  </div>
                </div>
              </td>
              <td className="hidden xl:table-cell">
                {user.company}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {user.location}
                </span>
              </td>
              <td className="hidden sm:table-cell">{user.email}</td>
              <td className="hidden sm:table-cell">{user.phone}</td>
              <td>
                <Link
                  href={`/admin/${user.id}`}
                  className="btn btn-sm lg:btn text-xs lg:text-base"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
