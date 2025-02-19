import { API_URL } from "@/app/api/apiConfig";
import axios from "axios";
import ProductCard from "@/app/components/product/ProductCard";

export default async function ProductPage() {
  const response = await axios.get(`${API_URL}`);
  const result = response.data;

  return (
    <>
      <ProductCard result={result} />
    </>
  );
}
