import Navbar from "@/components/Navbar/Navbar";


export default async function AttractionIdPage({ params }) {
 const response = await fetch(`https://www.melivecode.com/api/attractions/${params.id}`);
  if (!response.ok) throw new Error("Fail to GET data");
  const data = await response.json();

  return (
    <>
    <Navbar/>
      <div className="fill h-screen my-8">
        <div className="card glass w-full max-w-3xl">
          <figure>
            <img src={data.coverimage} alt={data.name} />
          </figure>
          <div className="card-body">
            <p className="card-title">{data.name}</p>
            <p>{data.detail}</p>
          </div>
        </div>
      </div>
    </>
  );
}
