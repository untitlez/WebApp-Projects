import UserInfo from "@/app/components/user/UserInfo";
import axios from "axios";

export default async function UserPageId({params}) {
  const response = await fetch(`https://679348b45eae7e5c4d8e2507.mockapi.io/user/${params.id}` ,
    { next: { revalidate: 60 } });
  const info = response.json();

return (
    <>
      <div className="fill flex justify-center py-8">
          <UserInfo id={params.id} info={info}/>
      </div>
    </>
  )
}