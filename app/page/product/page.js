import { API_URL } from "@/app/api/apiConfig";
import axios from "axios";
import ProductCard from "@/app/components/product/ProductCard";

export default async function ProductPage() {
  const response = await fetch(`${API_URL}`);
  const result = await response.json();

  return (
    <>
      <ProductCard result={result} />
    </>
  );
}
