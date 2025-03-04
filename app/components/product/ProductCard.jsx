"use client";

import { useState } from "react";
import Cart from "./Cart";
import CartList from "./CartList";
import PaymentBtn from "./PaymentBtn";
import CartIcon from "./CartIcon";

export default function ProductCard({ data }) {
  const [addToCart, setAddToCart] = useState([]);
  const [toggle, setToggle] = useState(true);

  const totalPrice = addToCart
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2);

  const handleClick = () => setToggle((toggle) => !toggle);

  const handleRemove = (id) => {
    setAddToCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {toggle ? (
        <div className="main items-center my-8 gap-12">
          <div className="w-full flex justify-between items-center">
            <p className="text-5xl font-bold text-base-content px-2">Product</p>
            <CartIcon addToCart={addToCart} handleClick={handleClick} />
          </div>

          <div className="content lg:flex-row-reverse gap-6">
            {/* Cart List  */}
            <div className="hidden lg:block h-full w-1/3 bg-base-200 rounded-xl border border-base-content/50 p-4 shadow-xl">
              <p className="text-center text-xl font-bold  border-b-2 border-base-content/50 py-3">
                Order Detail
              </p>
              <CartList addToCart={addToCart} handleRemove={handleRemove} />
              <PaymentBtn totalPrice={totalPrice} />
            </div>

            {/* Product List  */}
            <div className="w-full flex flex-wrap justify-evenly gap-4 lg:w-2/3">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-stretch rounded-xl bg-base-200 border border-base-content/50 p-2 w-60 shadow-xl"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-scale-down bg-[#EDEBE9] rounded-xl shadow-md"
                  />

                  <div className="flex justify-between items-center gap-2 mt-2 mx-2">
                    <ul>
                      <li>{item.title}</li>
                      <li className="text-accent font-medium ">
                        $ {item.price}
                      </li>
                    </ul>
                    <button
                      onClick={() =>
                        setAddToCart((addToCart) => [...addToCart, item])
                      }
                      className="btn btn-accent text-2xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Cart
          totalPrice={totalPrice}
          addToCart={addToCart}
          toggle={toggle}
          handleClick={handleClick}
          handleRemove={handleRemove}
        />
      )}
    </>
  );
}
