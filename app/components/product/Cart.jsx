import Link from "next/link";
import ProductCard from "./ProductCard";

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
        <div className="fill">
          <div className="flex justify-between items-baseline">
            {/* Button Left  */}
            <button
              onClick={handleClick}
              className="btn btn-outline btn-accent mt-8"
            >
              Back
            </button>

            {/* Button Right  */}
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="btn btn-accent text-center  mt-8 group btn-wide"
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
          </div>

          {/* Cart List  */}
          <div className="overflow-x-auto my-8">
            {addToCart.length === 0 ? (
              <div className="flex flex-col items-center gap-8 my-16">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/9018/9018889.png"
                  alt="out of stock"
                  width={200}
                />
                <p className="text-base-content text-lg font-semibold">
                  OUT OF STOCK
                </p>
              </div>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Product Name</th>
                    <th>Favor</th>
                    <th>Weight</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {addToCart.map((item, i) => (
                    <tr key={i} className="hover">
                      <th>{i + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="h-20 w-20">
                              <img src={item.image_url} alt={item.name} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.name}</div>
                          </div>
                        </div>
                      </td>
                      <td>{item.flavor_profile}</td>
                      <td>{item.weight} g.</td>
                      <th>$ {item.price}</th>
                      <th>
                        <button
                          onClick={() => handleRemove(item.id, i)}
                          className="btn btn-circle btn-outline btn-sm btn-error"
                        >
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </>
  );
}
