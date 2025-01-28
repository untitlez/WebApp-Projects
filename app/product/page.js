import Api from "../api/api";
import Card from "../components/card";

export default function page() {
  return (
    <>
      <div className="fill">
        <h2>Product</h2>
        <div className=" flex flex-wrap justify-evenly gap-10 my-8">
            {/* <Card/> */}
            <Api/>
        </div>
      </div>
    </>
  );
}

