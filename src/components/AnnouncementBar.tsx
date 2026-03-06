export function AnnouncementBar() {
  return (
    <div className="bg-slate-900 px-4 py-3 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center sm:flex-row sm:text-left">
        <p className="text-sm font-medium">
          <span className="hidden sm:inline">Built for modern Discount Medical Plan Organizations | </span>
          <span className="sm:hidden font-semibold">Built for modern DMPOs: </span>
          <span className="text-slate-300 sm:ml-1">Centralize enrollments, member management, billing, and operations in one platform.</span>
        </p>
      </div>
    </div>
  );
}
