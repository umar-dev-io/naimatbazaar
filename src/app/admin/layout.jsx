export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Admin Sidebar / Layout wrapper */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
        <h2 className="font-extrabold text-primary text-lg mb-6">Naimat Admin</h2>
        <nav className="space-y-2">
          <a href="/admin" className="block px-3 py-2 rounded bg-gray-100 font-bold text-sm text-gray-800">Dashboard</a>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}