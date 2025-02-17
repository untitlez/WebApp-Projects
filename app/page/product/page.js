import { API_URL } from "@/app/api/apiConfig";
import CardProduct from "@/app/components/product/CardProduct";

export default async function ProductPage() {
  const res = await fetch(API_URL);
  if(!res.ok) throw new Error("Fail to fetch data");
  const data = await res.json();

return (
    <>
      <div className="fill">
        <p className="text-5xl font-semibold pl-4 mt-8">Product</p>
        <div className="flex flex-wrap justify-evenly gap-8 my-8">
          <CardProduct data={data}/>
        </div>
      </div>
    </>
  );
} 