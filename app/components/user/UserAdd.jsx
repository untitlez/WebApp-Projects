"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";


export default function UserAdd() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    image: ""
  });

  const router = useRouter()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://679348b45eae7e5c4d8e2507.mockapi.io/user' , formData )
      if (response.status === 201) {
        alert("Success!");
        router.push('/page/users');
      }
    } catch (error) {
      console.error("Failed:", error);
    };
  }

return (
    <>
      <div className="max-w-2xl w-full">
        <div className="flex justify-center gap-24">
            
          <div className="avatar">
            <div className="h-36 w-36 rounded-full box">
              <img src={formData.image || "/profile icon.png"} alt="profile images"/>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered"
              autoComplete="on"
              autoFocus
              required
            />

            <label className="label mt-4">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered"
              autoComplete="on"
              required
            />

            <label className="label mt-4">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              maxLength="12"
              placeholder="x0x-xxx-x00x"
              value={formData.phone}
              onChange={handleChange}
              className="input input-bordered"
              autoComplete="on"
              required
            />

            <label className="label mt-4">
              <span className="label-text">Company</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="input input-bordered mb-2"
              autoComplete="on"
              required
            />

            <input
              type="text"
              name="location"
              placeholder="Location, Country"
              value={formData.location}
              onChange={handleChange}
              className="input input-bordered mb-2"
              autoComplete="on"
              required
            />

            <label className="label mt-4">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image Address"
              value={formData.image}
              onChange={handleChange}
              className="input input-bordered mb-2"
              autoComplete="on"
              required
            />

          <div className="flex justify-between w-full pt-12">
            <Link href='/page/users'>
                <button className="btn btn-ghost btn-warning">CANCEL</button></Link>
                <button type="submit" className="btn btn-warning">SUBMIT</button>
          </div>
          
        </form>
        </div>

      </div>
    </>
  );
}
