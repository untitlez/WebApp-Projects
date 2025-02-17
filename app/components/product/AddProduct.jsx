"use client";

export default function AddProduct({ name, price }) {

  const handleClick = async () => {
    await fetch("https://fake-coffee-api.vercel.app/api", {
      method: "POST",
      body: JSON.stringify({name, price}),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <button onClick={handleClick} className="btn btn-accent mt-16">
        {price} $
      </button>
    </>
  );
}
