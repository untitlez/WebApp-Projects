import { useShop } from "@/app/lib/store/shop";
import { BsCartX } from "react-icons/bs";

export const CartList = () => {
  const { cart, setRemoveCart } = useShop();
  const handleRemove = (index) => setRemoveCart(index);

  return (
    <>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-4 my-16">
          <BsCartX size="48" />
          <p className="font-semibold">Select Product</p>
        </div>
      ) : (
        <table className="table mb-16">
          <tbody>
            {cart.map((item, i) => (
              <tr key={i} className="hover">
                <td>{i + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover h-20 w-20 rounded-md hidden sm:block shadow"
                  />
                </td>
                <td>{item.name}</td>
                <td className="truncate">$ {item.price}</td>
                <td>
                  <button
                    onClick={() => handleRemove(i)}
                    className="btn btn-circle btn-outline btn-error btn-xs sm:btn-sm "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 sm:h-5 sm:w-5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
