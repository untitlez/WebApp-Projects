"use client";

import { useRouter } from "next/navigation";
import { useShop } from "@/app/lib/store/shop";

export const Card = ({ data }) => {
  const router = useRouter();
  const { setCart } = useShop();

  const seeMore = (id) => router.push(`/shop/${id}`);
  const handleAdd = (item) => setCart(item);

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex sm:flex-col gap-2 sm:gap-4 rounded-xl bg-base-100 border border-base-content/75 p-2 w-full sm:w-60
          text-sm lg:text-base sm:hover:-translate-y-3 duration-300"
        >
          <figure className="sm:aspect-square grid place-content-center bg-[#EDEBE9] shadow rounded-lg p-2 ">
            <img
              src={item.image}
              alt={item.name}
              onClick={() => seeMore(item.id)}
            />
          </figure>
          <div className="flex flex-col justify-between h-full w-full">
            <p className="font-medium">{item.name}</p>
            <p className="text-base-content/60">{item.description}</p>
            <button
              className="btn btn-sm sm:btn-md btn-primary w-full mt-2 sm:mt-4 sm:text-base group"
              onClick={() => handleAdd(item)}
            >
              <p className="group-hover:hidden">$ {item.price}</p>
              <p className="hidden group-hover:block">Add to Cart</p>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
