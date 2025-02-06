import Link from "next/link";

export default function CardAttraction({ data }) {
 
  return (
    <>
      {data.map((i) => (
          <div key={i.id} className="card glass w-96">
            <figure>
              <img src={i.coverimage} alt={i.name} />
            </figure>
            <div className="card-body">
              <p className="card-title">{i.name}</p>
              <p>{i.detail}</p>
              <Link
                href={"/page/attraction/" + i.id}
                className="btn btn-primary mt-6"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
    </>
  );
}
