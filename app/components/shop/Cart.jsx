"use client";

import { useEffect } from "react";
import { useAction, useShop } from "@/app/lib/store/shop";
import { CartList } from "./CartList";
import { useRouter } from "next/navigation";

import { BsCart3 } from "react-icons/bs";

export const Cart = () => {
  const router = useRouter();
  const { cart, totalPrice, setTotalPrice } = useShop();
  const { loading, setLoading } = useAction();

  useEffect(() => {
    setTotalPrice();
  }, [cart]);

  const onPayment = () => {
    if (cart.length > 0 && totalPrice !== 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push("/shop/payment");
      }, 2000);
    }
  };

  return (
    <div className="drawer drawer-end justify-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-primary scale-90"
        >
          <BsCart3 size="24" />
          <span className="badge">{cart.length}</span>
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full min-w-96 sm:max-w-[75%] p-4 gap-4">
          {/* Sidebar content here */}
          <p className=" grid place-content-center py-3 border border-base-content/75 rounded-lg text-base font-medium">
            Shopping Cart
          </p>
          <CartList />
          <div className="fixed bottom-4 flex gap-2 w-[80%] sm:w-[92%]">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="btn btn-outline sm:hidden text-3xl"
            >
              &#129168;
            </label>
            <button
              className="btn btn-primary btn-block flex justify-evenly group"
              onClick={onPayment}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>
                  <div className="flex gap-2">
                    <p>Total :</p>
                    <p>$ {totalPrice}</p>
                  </div>
                  <p className="hidden group-hover:block">Pay Now</p>
                </>
              )}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};
