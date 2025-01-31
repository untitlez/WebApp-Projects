import { fetchData } from "@/app/api/route";
import Card from "../../../components/card";

export default async function page() {
  const data = await fetchData();

  return (
    <>
      <div className="fill">
        <h2>Product</h2>
        <div className=" flex flex-wrap justify-evenly gap-10 my-8">
          <Card data={data} />
        </div>
      </div>
    </>
  );
}
