import UserInfo from "@/app/components/user/UserInfo";
import axios from "axios";

export default async function UserPageId({params}) {
  const response = await axios.get(`https://679348b45eae7e5c4d8e2507.mockapi.io/user/${params.id}`)
  const info = response.data

return (
    <>
      <div className="fill flex justify-center py-8">
          <UserInfo id={params.id} info={info}/>
      </div>
    </>
  )
}