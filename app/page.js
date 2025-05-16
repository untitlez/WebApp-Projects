import Link from "next/link";
import Orb from "./components/OrbBG";

export default function HomePage() {
  return (
    <main className="min-h-screen relative text-center text-primary">
      <div className="h-screen grid place-content-center pb-24 gap-6">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="max-w-lg">
          This website is part of my personal development journey. I'm
          constantly working to improve, enhance, and refine it. Thank you so
          much for visiting. I truly appreciate your support!
        </p>
      </div>

      <div className="absolute top-1/2 translate-y-20 sm:left-1/2 sm:-translate-x-1/2 flex justify-center gap-4 sm:gap-6 w-full sm:w-auto  z-10">
        <Link href="/admin" className="btn btn-secondary">
          Dash Baord
        </Link>
        <Link href="/shop" className="btn btn-secondary">
          Coffee Shop
        </Link>
      </div>

      <div className="hidden sm:block absolute inset-0 z-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </main>
  );
}
