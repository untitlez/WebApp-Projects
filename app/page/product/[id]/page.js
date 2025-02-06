
async function fetchParams(params) {
  const { id } = await params;
  const response = await fetch(`https://fake-coffee-api.vercel.app/api/${id}`)
  if (!response.ok) throw new Error("Failed to fetch data");
  return await response.json();
}

export default async function ProductIdPage({ params }) {
  const data = await fetchParams(params)
console.log(data);
  return (
    <>
    <div className="fill h-screen my-8">
    {data.map((item)=>(
        <div key={item.id} className="card bg-base-100 border border-base-content flex-row" >
          <figure>
            <img src={item.image_url} alt={item.name} width={750}/>
          </figure>
          <div className="flex flex-col justify-between p-16">
                <h2 className="card-title mb-8">{item.name}</h2>
                <p>{item.description}</p>
                <p>Favor : {item.flavor_profile}</p>
                <p>grind : {item.grind_option}</p>
                <p>region: {item.region}</p>
            <div className="card-actions justify-between items-baseline mt-8">
              <p>{item.weight} g.</p>
              <button className="btn btn-outline btn-accent">{item.price} $</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
