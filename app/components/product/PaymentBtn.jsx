"use client";

import Link from "next/link";

export default function PaymentBtn({ totalPrice }) {
  return (
    <>
      <button
        onClick={() => document.getElementById("my_modal_2").showModal()}
        className="btn btn-accent text-center w-full group"
      >
        <p className="group-hover:hidden fd">Total: $ {totalPrice}</p>
        <p className="hidden group-hover:grid fu">Pay Now</p>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello !</h3>
          <p className="py-4">
            Thank you for your time. Hopefully we can collaborate.
          </p>
          <div className="modal-action">
            <Link href="/">
              <button className="btn">Done</button>
            </Link>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
