"use client";

import { useEffect, useState } from "react";
import { redirect, useParams, useRouter } from "next/navigation";

import axios from "axios";
import { API_URL } from "@/app/lib/api";
import { useAction } from "@/app/lib/store/admin";

import { Alert } from "@/app/components/admin/Alert";
import { UserForm } from "@/app/components/admin/UserForm";
import { ButtonAction } from "@/app/components/admin/ButtonAction";

export default function UserIdPage() {
  const { edit, setEdit, alert, setAlert, setSelect, setLoading } = useAction();
  const [user, setUser] = useState([]);
  const params = useParams();
  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    if (!id) return;
    setAlert("");
    setEdit(false);
    async function fetchData() {
      try {
        const { data } = await axios.get(`${API_URL}/${id}`);
        setUser(data);
      } catch (error) {
        setAlert({
          type: "alert-error",
          text: `Error fetching user:, ${error.message}`,
        });
        setTimeout(() => {
          setAlert("");
        }, 4000);
      }
    }
    fetchData();
  }, [id]);

  const onEdit = () => setEdit(true);
  const onBack = () => router.push("/admin");
  const onCancel = () => {
    setEdit(false);
    setSelect("");
  };
  const onSubmit = async (submit) => {
    setLoading(true);
    try {
      await axios.put(`${API_URL}/${id}`, submit);
      setAlert({
        type: "alert-success",
        text: "Successfully updated",
      });
      setTimeout(() => {
        setEdit(false);
        redirect("/admin");
      }, 2000);
    } catch (error) {
      console.error("Submit error:", error.message);
      setAlert({
        type: "alert-error",
        text: "Some required information is missing. Please complete the form before continuing.",
      });
    } finally {
      setTimeout(() => {
        setAlert("");
        setLoading(false);
      }, 4000);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      setAlert({
        type: "alert-success",
        text: "Successfully deleted",
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
    <>
      {alert && <Alert type={alert.type} text={alert.text} />}

      <UserForm user={user} onSubmit={onSubmit} />
      <div className="flex justify-end my-12">
        <div className="flex justify-between w-full lg:w-1/2">
          {edit ? (
            <>
              <ButtonAction
                type="button"
                className="btn btn-ghost text-error"
                label="Delete"
                head="Confirm Delete"
                text="Are you sure you want to delete this account?"
                action={handleDelete}
              />
              <div className="flex gap-4">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={onCancel}
                >
                  Cancel
                </button>
                <ButtonAction
                  form="user-form"
                  type="button"
                  className="btn btn-outline btn-success"
                  label="Submit"
                  head="Confirm Submit"
                  text="Are you sure you want to confirm and submit the changes?"
                />
              </div>
            </>
          ) : (
            <>
              <ButtonAction
                type="button"
                className="btn"
                label="Back"
                head="Leaving now will discard your progress"
                text="Do you want to continue?"
                action={onBack}
              />
              <button
                type="button"
                className="btn btn-outline px-8"
                onClick={onEdit}
              >
                Edit
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
