"use client";
import { useState } from "react";
import UserEdit from "./UserEdit";
import Link from "next/link";

export default function UserInfo({ id, info }) {
  const [edit, setEdit] = useState(true);

  const handleClick = () => {
    setEdit((edit) => !edit);
  };

  return (
    <>
      {edit ? (
        <div className="max-w-2xl w-full">
          <div className="flex justify-end gap-4 mb-4">
            <Link href="/page/users">
              <button className="btn btn-ghost ">Back</button>
            </Link>
            <button onClick={handleClick} className="btn btn-warning px-6">
              EDIT
            </button>
          </div>

          <div className="flex justify-center gap-24 ">
            <div className="avatar">
              <div className="h-36 w-36 rounded-full">
                <img
                  src={info.image || "/profile icon.png"}
                  alt="profile images"
                />
              </div>
            </div>

            <form className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                placeholder={info.name}
                className="input input-bordered pointer-events-none opacity-80"
              />

              <label className="label mt-4">
                <span className="label-text">Email</span>
              </label>
              <input
                placeholder={info.email}
                className="input input-bordered pointer-events-none opacity-80"
              />

              <label className="label mt-4">
                <span className="label-text">Phone</span>
              </label>
              <input
                placeholder={info.phone}
                maxLength="12"
                className="input input-bordered pointer-events-none opacity-80"
              />

              <label className="label mt-4">
                <span className="label-text">Company, Location</span>
              </label>
              <input
                placeholder={info.company}
                className="input input-bordered mb-2 pointer-events-none opacity-80"
              />

              <input
                placeholder={info.location}
                className="input input-bordered mb-2 pointer-events-none opacity-80"
              />
            </form>
          </div>
        </div>
      ) : (
        <UserEdit id={id} info={info} edit={edit} handleClick={handleClick} />
      )}
    </>
  );
}
