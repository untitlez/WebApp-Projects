async function getDataa() {
  const res = await fetch("https://www.melivecode.com/api/attractions");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
export default async function HomePage() {
  const result = await getDataa();
  return (
    <>
      <div className="fill">
        <h2>Attraction</h2>
        <div className=" flex flex-wrap justify-evenly gap-10 my-8">
          {result.map((item) => (
            <div key={item.id} className="card glass w-96">
              <figure>
                <img src={item.coverimage} alt={item.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
