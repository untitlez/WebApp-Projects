import Link from "next/link";

export default function CardProduct({ data }) {
 
   
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="card bg-base-100 border border-base-content w-96">
          <figure>
            <img src={item.image_url} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <p>Favor : {item.flavor_profile}</p>
            <div className="card-actions justify-between items-baseline">
              <Link href={"/page/product/" + item.id} className="underline">See More</Link>
              <button 
              className="btn btn-accent">
                {item.price} $
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
