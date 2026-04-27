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

  const sidebarContent = (
    <>
      <div className="mb-10 rounded-[1.75rem] border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-white to-slate-200 font-black text-slate-950 shadow-lg shadow-black/20">
            F
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Finance App
            </h1>
            <p className="text-xs text-slate-400">Budget Tracking System</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
            Smart dashboard
          </p>
          <p className="mt-1 text-sm text-slate-200">
            Track income, spending, and budgets with one clear view.
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const active = pathname === item.path;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                active
                  ? "border-white/20 bg-white text-slate-950 shadow-lg shadow-black/10"
                  : "border-white/8 bg-white/0 text-slate-300 hover:border-white/15 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span>{item.name}</span>
              <span
                className={`h-2 w-2 rounded-full ${active ? "bg-emerald-500" : "bg-slate-600"}`}
              />
            </Link>
          );
        })}
      </nav>
    </>
  );

  return (
    <>
      <aside
        className="fixed inset-y-0 left-0 z-50 flex w-76 max-w-[86vw] flex-col border-r border-slate-200/80 bg-linear-to-b from-slate-950 via-slate-950 to-slate-900 px-5 py-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.28)] md:sticky md:top-0 md:z-auto md:min-h-screen md:w-72 md:max-w-none"
        aria-hidden={!open}
      >
        <div className="mb-6 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
            Navigation
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/15"
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
