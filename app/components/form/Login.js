'use client'

import { redirect } from "next/navigation";
import {  useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email : "",
    password : ""
  }) 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.type]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Login Success")
    redirect('/page/profile')
  }


  return (
    <>
      <div className="card bg-base-100 max-w-lg w-full shadow-2xl ">
        <form onSubmit={handleSubmit} className="card-body" >
          <p className="font-semibold text-5xl text-center">Login</p>


          <div className="form-control">
            <label className="label label-text">Email</label>
            <input type="text" placeholder="email" onChange={handleChange}
            className="input input-bordered" required/>
          </div>


          <div className="form-control">
            <label className="label label-text">Password</label>
            <input type="password" placeholder="password" onChange={handleChange}
            className="input input-bordered" required/>
          
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
