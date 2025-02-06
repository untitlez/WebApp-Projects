import Navbar from "@/components/Navbar/Navbar";
import CardProduct from "../../../components/Card/CardProduct";

async function getData() {
  const res = await fetch("https://fake-coffee-api.vercel.app/api");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function ProductPage() {
  const data = await getData();
  return (
    <>
    <Navbar/>
      <div className="fill">
        <p className="text-5xl font-semibold pl-4 mt-8">Product</p>
        <div className="flex flex-wrap justify-evenly gap-10 my-8">
          <CardProduct data={data} />
        </div>
      </div>
    </>
  );
}
