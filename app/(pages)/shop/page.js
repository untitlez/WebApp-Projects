import { headers } from "next/headers";

import { Card } from "@/app/components/shop/Card";
import { Cart } from "@/app/components/shop/Cart";
import { ToggleTheme } from "@/app/components/ToggleTheme";

export default async function CoffeeShopPage() {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/shop`);
  const data = await res.json();

  return (
    <>
      <section className="flex flex-col gap-8 max-w-screen-2xl">
        <div className="flex items-center">
        <div className="flex items-center w-72 lg:w-64">
            <p className="w-full font-semibold text-primary text-lg sm:text-2xl">
            Coffee Shop
          </p>
            <ToggleTheme id="shop" main="coffee" sub="autumn"/>
        </div>
            <Cart />
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <Card data={data} />
        </div>
      </section>
    </>
  );
}
