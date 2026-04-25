"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Transactions", path: "/transactions" },
  { name: "Budgets", path: "/budgets" },
  { name: "Categories", path: "/categories" },
];

export default function Sidebar({ open = false, onClose }) {
  const pathname = usePathname();

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  const sidebarContent = (
    <>
      <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950 font-black shadow-lg shadow-black/20">
            F
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Finance App</h1>
            <p className="text-xs text-slate-400">Budget Tracking System</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-white/8 border border-white/10 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">Smart dashboard</p>
          <p className="mt-1 text-sm text-slate-200">Track income, spending, and budgets with one clear view.</p>
        </div>
      </div>

      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const active = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={handleLinkClick}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition ${
                active
                  ? "bg-white text-slate-950 shadow-lg shadow-black/10"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{item.name}</span>
              <span className={`h-2 w-2 rounded-full ${active ? "bg-emerald-500" : "bg-slate-600"}`} />
            </Link>
          );
        })}
      </nav>
    </>
  );

  return (
    <>
      <aside className="hidden md:flex md:w-72 min-h-screen flex-col border-r border-slate-200/80 bg-slate-950/95 text-white px-5 py-6 sticky top-0 shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
        {sidebarContent}
      </aside>

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[19rem] max-w-[86vw] flex-col border-r border-slate-200/80 bg-slate-950/97 text-white px-5 py-6 shadow-[0_24px_60px_rgba(15,23,42,0.28)] transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Navigation</p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/15"
          >
            Close
          </button>
        </div>

        {sidebarContent}
      </aside>
    </>
  );
}

export { menuItems };