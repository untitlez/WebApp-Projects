export default function AdminPageLayout({ children }) {
  return (
    <main className="grid min-h-screen p-6">
      <div className="flex flex-col gap-4 p-4 rounded-xl bg-base-300 border border-base-content/75">
        {children}
      </div>
    </main>
  );
}
