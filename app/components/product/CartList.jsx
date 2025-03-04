"use client";

export default function CartList({ addToCart, handleRemove }) {
  return (
    <>
      {addToCart.length === 0 ? (
        <div className="flex flex-col items-center gap-4 my-16">
          <img
            src="/empty-cart.png"
            alt="out of stock"
            className="w-10 h-10 invert opacity-70"
          />
          <p className="font-semibold">Select Product</p>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
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
                        <img
                          src={item.img}
                          alt={item.name}
                          className="rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
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
    </>
  );
}
