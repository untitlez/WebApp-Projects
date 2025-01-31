import { fetchData } from "@/app/api/route";
import List from "@/components/list"

export default async function page() {
  const data = await fetchData();

  return (
    <>
      <div className="fill">
        <h2>🛒 Cart</h2>
        <div className=" flex flex-wrap justify-evenly gap-10 my-8">
          <List data={data}/>
        </div>
      </div>
    </>
  )
}