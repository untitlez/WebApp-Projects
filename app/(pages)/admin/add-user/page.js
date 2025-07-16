"use client";

import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

import axios from "axios";
import { API_URL } from "@/app/lib/constant/admin/api";
import { useAction } from "@/app/lib/store/admin";

import { Alert } from "@/app/components/admin/Alert";
import { UserForm } from "@/app/components/admin/UserForm";
import { ButtonAction } from "@/app/components/admin/ButtonAction";

export default function AddUserPage() {
  const { setEdit, alert, setAlert, setSelect, setLoading } = useAction();
  const router = useRouter();

  useEffect(() => {
    setSelect("");
    setEdit(true);
  }, []);

  const onCancel = () => {
    router.push("/admin");
    setSelect("");
  };
  const onSubmit = async (submit) => {
    setLoading(true);
    try {
      await axios.post(API_URL, submit);
      setAlert({
        type: "alert-success",
        text: "Successfully Create New User",
      });
      setTimeout(() => {
        setEdit(false);
        redirect("/admin");
      }, 2000);
    } catch (error) {
      setAlert({
        type: "alert-error",
        text: `Something went wrong: ${error.message}`,
      });
    } finally {
      setTimeout(() => {
        setAlert("");
        setLoading(false);
      }, 4000);
    }
  };

  return (
    <div className="max-w-screen-md w-full h-full sm:content-center">
      {alert && <Alert type={alert.type} text={alert.text} />}
      <UserForm onSubmit={onSubmit} />
      <div className="flex justify-between w-full my-8">
        <ButtonAction
          className="btn btn-outline"
          label="Cancel"
          head="Leaving now will discard your progress"
          text="Do you want to continue?"
          action={onCancel}
        />
        <ButtonAction
          type="submit"
          form="user-form"
          className="btn btn-outline btn-success"
          label="Submit"
          head="Confirm Submit"
          text="Are you sure you want to confirm and submit the changes?"
        />
      </div>
    </div>
  );
}
