export default function AppNavBar() {
  return (
    <>
      {/* App Header */}
      <header className="flex items-center justify-between bg-white px-6 py-4  border-b border-gray-200">
        <div className="text-xl font-bold text-blue-600">MyApp</div>

        <div className="flex items-center space-x-4">
          {/* Search input (optional) */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden sm:block px-3 py-1.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {/* Profile avatar (placeholder) */}
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </header>
    </>
  );
}
