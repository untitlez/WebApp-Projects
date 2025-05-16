"use client";

import Link from "next/link";
import { useShop } from "@/app/lib/store/shop";

export default function SuccessPage() {
  const { resetShop } = useShop();

  const onReset = () => resetShop();

  return (
    <section className="h-full flex justify-center flex-col items-center gap-24">
      <figure className="flex justify-center items-end gap-4 sm:gap-12">
        <img src="/thankyou-m.svg" alt="Thankyou Image" />
        <img src="/thankyou-w.svg" alt="Thankyou Image" />
      </figure>
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="text-xl font-semibold">
          " Thank you for your time. Hopefully we can collaborate. "
        </p>
        <Link href="/shop" className="btn btn-primary" onClick={onReset}>
          Done
        </Link>
      </div>
    </section>
  );
}
