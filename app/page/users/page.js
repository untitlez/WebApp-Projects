import Link from "next/link";

export default async function UsersPage() {
  const res = await fetch("https://679348b45eae7e5c4d8e2507.mockapi.io/user");
  const data = await res.json();
  
  return (
    <>
      <div className="overflow-x-auto my-8">
        <div className="flex justify-end mr-16 mb-4">
          <Link href='/page/users/new-user'>
            <button className="btn btn-warning px-6">Add</button>
          </Link>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-300 text-gray-400">
              <th>No.</th>
              <th>Name</th>
              <th>Company</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          {data.map((user,index) => (
            <tbody key={user.id}>
              <tr className="hover">
                <th>
                  <label>{index+1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="h-12 w-12 rounded-full">
                        <img src={user.image||'/profile icon.png'} alt="profile images" />
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
                        <button className="btn btn-outline btn-warning">EDIT</button>
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
