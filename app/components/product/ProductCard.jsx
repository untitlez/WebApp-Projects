"use client";

import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";

export default function ProductCard({ result }) {
  const [data, setData] = useState(result);
  const [addToCart, setAddToCart] = useState([]);
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle((toggle) => !toggle);
  };

  const handleRemove = (id, index) => {
    const remove = addToCart.some((item, i) => item.id === id && i === index);
    if (remove) {
      setAddToCart(
        addToCart.filter((item, i) => !(item.id === id && i === index))
      );
    }
  };

  return (
    <>
      {toggle ? (
        <div className="fill">
          <div className="flex justify-between items-baseline">
            <p className="text-5xl font-semibold mt-8">Product</p>

            {/* Cart Icon  */}
            <div onClick={handleClick} className="btn btn-ghost">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm badge-accent indicator-item w-full">
                  {addToCart.length || "0"}
                </span>
              </div>
            </div>
          </div>

          {/* Product List  */}
          <div className="flex flex-wrap justify-evenly gap-8 my-8">
            {data.map((item) => (
              <div
                key={item.id}
                className="card bg-base-100 border border-base-content w-56 justify-between hover:scale-110"
              >
                <Link href={"/page/product/" + item.id}>
                  <figure>
                    <img src={item.image_url} alt={item.name} />
                  </figure>

                  <ul className="card-body p-4">
                    <li className="card-title">{item.name}</li>
                    <li className="text-base-content truncate">
                      {item.flavor_profile}
                    </li>
                    <li className="text-accent font-medium text-lg truncate">
                      $ {item.price}
                    </li>
                  </ul>
                </Link>

                <button
                  onClick={() =>
                    setAddToCart((addToCart) => [...addToCart, item])
                  }
                  className="btn btn-accent w-auto m-2"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Cart
          addToCart={addToCart}
          toggle={toggle}
          handleClick={handleClick}
          handleRemove={handleRemove}
        />
      )}
    </>
  );
}
