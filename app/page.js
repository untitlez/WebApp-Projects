import Navbar from "@/app/components/Navbar/Navbar";
import AttractionPage from "./page/attraction/page";

export default function HomePage() {
  return (
    <>
      <div className="fill h-screen p-4">
        <AttractionPage/>
      </div>
    </>
  );
}
