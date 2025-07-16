"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useAction } from "@/app/lib/store/admin";
import { inputItems } from "@/app/lib/constant/admin/form";

import { UserImage } from "./UserImage";

export const UserForm = ({ user, onSubmit }) => {
  const { edit, select } = useAction();
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      job: user?.job || "",
      company: user?.company || "",
      location: user?.location || "",
      email: user?.email || "",
      phone: user?.phone || "",
      salary: user?.salary || "",
      image: user?.image || "/profile-icon.png",
    },
  });

  useEffect(() => {
    if (!user) return;
    reset(user);
  }, [edit]);

  useEffect(() => {
    if (select) {
      setValue("image", select);
    }
  }, [select]);

  return (
    <form
      id="user-form"
      className="grid sm:grid-cols-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <UserImage user={user} />
      </div>

      <div className="flex flex-col gap-4 w-full">
        {inputItems.map((item, i) => (
          <label
            key={item.name}
            className={`input input-bordered flex items-center gap-4 sm:gap-8 text-sm sm:text-base shadow-md ${item.className}`}
          >
            <p>{item.label}</p>
            {edit ? (
              <div>
                <input
                  className="w-full"
                  autoFocus={i === 0}
                  type={item.type}
                  placeholder={item.placeholder}
                  maxLength={item.maxLength}
                  {...register(item.name, {
                    required: item.required,
                    pattern: item.pattern,
                    min: item.min,
                    max: item.max,
                  })}
                />
                {errors[item.name] && (
                  <p className="text-red-500 text-sm">
                    {errors[item.name].message}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-primary">{user?.[item.name]}</p>
            )}
          </label>
        ))}
      </div>
    </form>
  );
};
