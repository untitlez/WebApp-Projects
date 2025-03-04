"use client";

import ProductCard from "./ProductCard";
import CartList from "./CartList";
import PaymentBtn from "./PaymentBtn";

export default function Cart({
  addToCart,
  toggle,
  handleClick,
  handleRemove,
  totalPrice,
}) {
  return (
    <>
      {toggle ? (
        <ProductCard />
      ) : (
        <div className="main items-center my-8 gap-12">
          <div className="w-full flex justify-between items-baseline gap-4">
            {/* Back  */}
            <button
              onClick={handleClick}
              className="btn btn-outline btn-accent"
            >
              Back
            </button>

            {/* Payment  */}
            <div className="btn-wide">
              <PaymentBtn totalPrice={totalPrice} />
            </div>
          </div>

          {/* Cart List  */}
          <div className="overflow-y-visible w-full">
            <CartList addToCart={addToCart} handleRemove={handleRemove} />
          </div>
        </div>
      )}
    </>
  );
}
