"use client";

import { useEffect, useState } from "react";

export default function Profile({ data }) {
  const [edit, setEdit] = useState(true);
  const [onChange, setOnChange] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setEdit((edit) => !edit);
  };

  return (
    <>
      <div className="card w-full max-w-lg shrink-0 shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit} className="card-body gap-4 ">
          <div className="flex items-center">
            <p className="font-semibold text-5xl">Profile</p>
            <img
              onClick={handleClick}
              src="/edit.png"
              alt="icon edit"
              className="size-10 p-2 rounded-md hover:bg-base-300 cursor-pointer active:bg-base-200"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="email"
              disabled={edit}
              placeholder={data.username}
              value={onChange}
              onChange={(e) => setOnChange(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">E-mail</span>
            </label>
            <input
              type="email"
              disabled={edit}
              placeholder={data.email}
              value={onChange}
              onChange={(e) => setOnChange(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              disabled={edit}
              placeholder={data.password}
              value={onChange}
              onChange={(e) => setOnChange(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              disabled={edit}
              placeholder={data.phone}
              value={onChange}
              onChange={(e) => setOnChange(e.target.value)}
              className="input input-bordered"
            />
          </div>
          <div className="flex justify-between items-baseline gap-2 my-4">
            <button 
              disabled={edit}
              className="btn btn-primary">Save</button>
            <button 
              disabled={edit}
              className="btn">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}
