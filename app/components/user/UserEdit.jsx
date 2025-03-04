"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import { useRouter } from "next/navigation";
import UserImages from "./UserImages";

export default function UserEdit({ id, info, edit, handleEdit }) {
  const [select, setSelect] = useState("");
  const [formData, setFormData] = useState({
    name: info.name || "",
    email: info.email || "",
    phone: info.phone || "",
    company: info.company || "",
    location: info.location || "",
    image: info.image || "",
  });

  const router = useRouter();

  const handleSelect = (avatar) => {
    setSelect(avatar.target.value);
  };

  useEffect(() => {
    if (select) {
      setFormData((prev) => ({ ...prev, image: select }));
    }
  }, [select]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://679348b45eae7e5c4d8e2507.mockapi.io/user/${id}`,
        formData
      );
      if (response.status === 200 || response.status === 204) {
        alert("Update Success!");
        router.push("/page/users");
      }
    } catch (error) {
      console.error("Update Failed:", error);
      alert("Failed to update. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `https://679348b45eae7e5c4d8e2507.mockapi.io/user/${id}`,
        { data: id }
      );
      if (response.status === 200) {
        alert("Deleted!");
        router.push("/page/users");
      }
    } catch (error) {
      console.error("Cannot Delete:", error);
    }
  };

  return (
    <>
      {edit ? (
        <UserInfo />
      ) : (
        <div className="max-w-2xl w-full">
           <div className="max-w-2xl w-full flex flex-col gap-12 lg:flex-row lg:items-start">
            <UserImages
              formData={formData}
              select={select}
              handleSelect={handleSelect}
            />

            {/* Form  */}
            <form onSubmit={handleSubmit} className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder={info.name}
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered"
                autoComplete="on"
                autoFocus
              />

              <label className="label mt-4">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder={info.email}
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered"
                autoComplete="on"
              />

              <label className="label mt-4">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                maxLength="12"
                placeholder={info.phone}
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered"
                autoComplete="on"
              />

              <label className="label mt-4">
                <span className="label-text">Company, Location</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder={info.company}
                value={formData.company}
                onChange={handleChange}
                className="input input-bordered mb-2"
                autoComplete="on"
              />

              <input
                type="text"
                name="location"
                placeholder={info.location}
                value={formData.location}
                onChange={handleChange}
                className="input input-bordered mb-2"
                autoComplete="on"
              />

              <label className="label mt-4">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Image Address"
                value={formData.image || select}
                onChange={handleChange}
                className="input input-bordered mb-2"
                autoComplete="on"
              />

              {/* Button  */}
              <div className="flex justify-between pt-12">
                <button
                  onClick={handleDelete}
                  type="button"
                  className="btn btn-outline btn-error ml-1"
                >
                  DELETE
                </button>

                <div className="flex gap-4">
                  <button
                    onClick={handleEdit}
                    type="button"
                    className="btn btn-ghost btn-warning"
                  >
                    CANCEL
                  </button>
                  <button type="submit" className="btn btn-warning">
                    SAVE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
