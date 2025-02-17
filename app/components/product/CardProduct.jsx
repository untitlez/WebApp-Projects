import Link from "next/link";

export default function CardProduct({ data }) {

  return (
    <>
      {data.map((item) => (
        <Link key={item.id} href={"/page/product/" + item.id}>
          <div className="card bg-base-100 border border-base-content w-56 h-full hover:scale-110">
            <figure>
              <img src={item.image_url} alt={item.name} />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-base-content truncate">
                {item.flavor_profile}
              </p>
              <button className="btn btn-accent btn-sm w-full mt-4">
                {item.price} $
              </button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
