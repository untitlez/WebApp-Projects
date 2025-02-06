"use client";

export default function Login() {

  return (
    <>
      <div className="card bg-base-100 max-w-lg shadow-2xl ">
        <form className="card-body" >
          <p className="font-semibold text-5xl text-center">Login</p>
          <div className="form-control">
            <label className="label label-text">Email</label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label label-text">Password</label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label label-text">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password ?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </>
  );
}
