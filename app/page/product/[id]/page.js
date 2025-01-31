async function fetchParams(params) {
  const res = await fetch(`https://fake-coffee-api.vercel.app/api/${params.id}`)
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}

export default async function page({ params }) {
  const data = await fetchParams(params)

  return (
    <>
      {data.map((item)=>(
        <div key={item.id} className="card glass flex-row fill" >
          <figure>
            <img src={item.image_url} alt={item.name} width={750}/>
          </figure>
          <div className="card-body gap-4">
                <h2 className="card-title ">{item.name}</h2>
                <p>{item.description}</p>
                <p>Favor : {item.flavor_profile}</p>
                <p>grind : {item.grind_option}</p>
                <p>region: {item.region}</p>
            <div className="card-actions justify-between items-baseline">
              <p>{item.weight} g.</p>
              <button className="btn btn-primary">{item.price} $</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
