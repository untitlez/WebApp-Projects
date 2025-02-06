import Navbar from "@/components/Navbar/Navbar";
import AttractionPage from "./page/attraction/page";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="fill p-4">
        <AttractionPage />
      </div>
    </>
  );
}
