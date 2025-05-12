"use client";

import { useAction } from "@/app/lib/store/admin";
import { useForm } from "react-hook-form";

import { UserImage } from "./UserImage";
import { useEffect } from "react";
import { kMaxLength } from "buffer";

const inputItems = [
  {
    name: "name",
    type: "text",
    label: "Name:",
    placeholder: "e.g. John Doe",
    required: "Name: is required",
  },
  {
    name: "job",
    type: "text",
    label: "Job:",
    placeholder: "e.g. Frontend Developer",
    required: "Job: is required",
  },
  {
    name: "company",
    type: "text",
    label: "Company:",
    placeholder: "e.g. ABC Corp",
    required: "Company: is required",
  },
  {
    name: "location",
    type: "text",
    label: "Location:",
    placeholder: "e.g. New York City",
  },
  {
    name: "email",
    type: "text",
    label: "Email:",
    placeholder: "e.g. user@email.com",
    required: "Email: is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address.",
    },
  },
  {
    name: "phone",
    type: "text",
    label: "Phone:",
    placeholder: "e.g. 099-012-3456",
    required: "Phone: is required",
    pattern: {
      value: /^\d{10}$/,
      message: "Please enter a valid Phone Number.",
    },
    max: {
      value: 12,
    },
  },
  {
    name: "salary",
    type: "number",
    label: "Salary:",
    placeholder: "e.g. 50000",
    min: { value: 0, message: "Salary cannot be less than zero." },
  },
  {
    name: "image",
    type: "text",
    label: "Image:",
    placeholder: "Paste image URL",
    className: "hidden",
  },
];

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
      className="flex flex-col lg:flex-row justify-center lg:items-center h-3/4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="basis-1/2">
        <UserImage user={user} />
      </div>

      <div className="basis-1/2 flex flex-col">
        {inputItems.map((item, i) => (
          <div key={item.name} className="my-2">
            <label
              className={`input input-bordered flex items-center gap-4 sm:gap-8 text-sm sm:text-base ${item.className}`}
            >
              <p>{item.label}</p>
              {edit ? (
                <>
                  <input
                    className="grow"
                    autoFocus={i === 0}
                    type={item.type}
                    placeholder={item.placeholder}
                    maxLength={item.max?.value}
                    {...register(item.name, {
                      required: item.required,
                      pattern: item.pattern,
                      max: item.max,
                      min: item.min,
                    })}
                  />
                  {errors[item.name] && (
                    <p className="text-red-500 text-sm">
                      {errors[item.name].message}
                    </p>
                  )}
                </>
              ) : (
                <p className="text-primary">{user?.[item.name]}</p>
              )}
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};
