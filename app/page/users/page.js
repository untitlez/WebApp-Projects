import Link from "next/link";

export default async function UsersPage() {
  const response = await fetch(
    "https://679348b45eae7e5c4d8e2507.mockapi.io/user",
    { next: { revalidate: 3 } }
  );
  const data = await response.json();

  return (
    <>
        <div className="main my-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-300 text-base-content">
              <th>No.</th>
              <th>Name</th>
              <th>Company</th>
              <th>Phone</th>
              <th>
              <Link href="/page/users/new-user">
            <button className="btn btn-warning px-5">Add</button>
          </Link>

              </th>
            </tr>
          </thead>
          {data.map((user, index) => (
            <tbody key={user.id}>
              <tr className="hover">
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="h-12 w-12 rounded-full">
                        <img
                          src={user.image || "/profile icon.png"}
                          alt="profile images"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {user.location}
                  </span>
                </td>
                <td>{user.phone}</td>
                <th>
                  <Link href={`/page/users/${user.id}`}>
                    <button className="btn btn-outline btn-warning">
                      EDIT
                    </button>
                  </Link>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
        </div>
    </>
  );
}
