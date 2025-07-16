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
    <main
      id="admin"
      className="flex justify-center min-h-screen p-6"
      data-theme="luxury"
    >
      <div className="w-full max-w-screen-xl flex flex-col items-center p-8 rounded-xl bg-base-300 border border-base-content/75">
        {children}
      </div>
    </main>
  );
}
