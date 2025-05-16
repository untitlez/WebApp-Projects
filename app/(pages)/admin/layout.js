export const metadata = {
  title: "Admin System",
  description: "Practice Website",
  icons: {
    icon: "/favicon/admin.png",
    apple: "/favicon/admin.png",
    shortcut: "/favicon/admin.png",
  },
};

export default function AdminPageLayout({ children }) {
  return (
    <main id="admin" className="grid min-h-screen p-6" data-theme="luxury">
      <div className="flex flex-col gap-4 p-8 rounded-xl bg-base-300 border border-base-content/75">
        {children}
      </div>
    </main>
  );
}
