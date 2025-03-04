import { productsData } from "@/app/api/products/route";
import ProductCard from "@/app/components/product/ProductCard";

export default function ProductPage() {
  return (
    <>
      <ProductCard data={productsData} />
    </>
  );
}
