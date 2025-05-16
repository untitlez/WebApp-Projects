export const metadata = {
  title: "Coffee Shop",
  description: "Practice Website",
  icons: {
    icon: "/favicon/coffee-cup.png",
    apple: "/favicon/coffee-cup.png",
    shortcut: "/favicon/coffee-cup.png",
  },
};

export default function CoffeeShopPageLayout({ children }) {
  return (
    <main id="shop" className="grid min-h-screen p-6" data-theme="coffee">
      <div className="flex flex-col items-center p-8 rounded-xl bg-base-300 border border-base-content/75">
        {children}
      </div>
    </main>
  );
}
