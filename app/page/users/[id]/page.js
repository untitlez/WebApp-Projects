import UserInfo from "@/app/components/user/UserInfo";

export default async function UserPageId({ params }) {
  const response = await fetch(
    `https://679348b45eae7e5c4d8e2507.mockapi.io/user/${params.id}`,
    { cache: "no-store" }
  );
  const info = await response.json();

  return (
    <>
      <div className="main h-screen items-center mt-24">
        <UserInfo id={params.id} info={info} />
      </div>
    </>
  );
}
