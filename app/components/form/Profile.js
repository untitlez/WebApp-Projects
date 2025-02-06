export default async function Profile({ data,userId  }) {
    const i = data.find((user) => user.id === userId);
  
    return (
      <>
        <div className="card w-full max-w-lg shrink-0 shadow-2xl">
          
            <form className="card-body gap-4 ">
              <div className="flex items-center">
                <p className="font-semibold text-5xl">Profile</p>
  
                <img
                  src="./edit.png"
                  alt="icon edit"
                  className="size-10 p-2 rounded-md hover:bg-base-300"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="email"
                  placeholder={i.username}
                  className="input input-bordered pointer-events-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">E-mail</span>
                </label>
                <input
                  type="password"
                  placeholder={i.email}
                  className="input input-bordered pointer-events-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder={i.password}
                  className="input input-bordered pointer-events-none"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="password"
                  placeholder={i.phone}
                  className="input input-bordered pointer-events-none"
                />
              </div>
            </form>
        </div>
      </>
    );
  }
  