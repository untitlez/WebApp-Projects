import CardAttraction from "@/components/Card/CardAttraction";
import Navbar from "@/components/Navbar/Navbar";

async function getData() {
  const response = await fetch("https://www.melivecode.com/api/attractions");
  if (!response.ok) throw new Error("Fail to GET data");
  return await response.json();
}

export default async function AttractionPage() {
  const data = await getData();

  return (
    <>
    <Navbar/>
      <div className="fill">
        <p className="text-5xl font-semibold pl-4 mt-8">Attraction</p>
        <div className="flex flex-wrap justify-evenly gap-10 my-8">
          <CardAttraction data={data} />
        </div>
      </div>
    </>
  );
}
