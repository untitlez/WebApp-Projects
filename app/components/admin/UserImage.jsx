"use client";

import { useAction } from "@/app/lib/store/admin";
import { imageItems } from "@/app/lib/constant/admin/form";

export const UserImage = ({ user }) => {
  const { edit, select, setSelect } = useAction();

  const onChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 my-8">
      {/* Avatar Image  */}
      <div className="avatar">
        <div className="h-36 w-36 sm:h-56 sm:w-56 rounded-full shadow-xl">
          <img
            alt="profile images"
            src={select || user?.image || "/profile-icon.png"}
          />
        </div>
      </div>

      {/* Avatar List  */}
      <div className="dropdown">
        {edit ? (
          <button
            tabIndex={0}
            type="button"
            role="button"
            className="btn btn-sm sm:btn-md"
          >
            Change Image
          </button>
        ) : (
          ""
        )}
        <ul
          tabIndex={0}
          className="z-[1] dropdown-content rounded-xl border border-base-content/75 bg-base-100
            flex flex-wrap justify-center gap-4 py-4 mt-2 -ml-24 w-80 sm:w-[600px]"
        >
          {imageItems.map((avatar, i) => (
            <li key={i}>
              <input
                name="image"
                type="radio"
                className="hidden peer"
                id={avatar.id}
                value={avatar.src}
                onChange={onChange}
              />
              <label
                className="block cursor-pointer border-4 border-transparent peer-checked:border-base-content rounded-full"
                htmlFor={avatar.id}
              >
                <img
                  className="w-20 h-20 rounded-full"
                  src={avatar.src}
                  alt={avatar.alt}
                />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
