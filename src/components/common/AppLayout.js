"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../../context/AuthContext";

export default function AppLayout({ children, title }) {
  const { currentUser, logoutUser } = useAuth();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-transparent">
        {sidebarOpen && (
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-sm md:hidden"
          />
        )}

        {sidebarOpen && (
          <Sidebar onClose={() => setSidebarOpen(false)} />
        )}

        <main className="flex-1 min-w-0 px-4 py-4 md:px-6 md:py-6">
          <div className="app-shell min-h-[calc(100vh-2rem)] rounded-4xl overflow-hidden">
            <header className="border-b border-slate-200/80 bg-white/75 px-4 md:px-6 py-4 backdrop-blur">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen((current) => !current)}
                    aria-label={sidebarOpen ? "Hide navigation" : "Show navigation"}
                    aria-expanded={sidebarOpen}
                    className="group inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 md:mt-1"
                  >
                    <span className="flex flex-col gap-1.5">
                      <span className={`h-0.5 w-5 rounded-full bg-current transition ${sidebarOpen ? "translate-y-2 rotate-45" : ""}`} />
                      <span className={`h-0.5 w-5 rounded-full bg-current transition ${sidebarOpen ? "opacity-0" : ""}`} />
                      <span className={`h-0.5 w-5 rounded-full bg-current transition ${sidebarOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                    </span>
                  </button>

                  <div>
                    <div className="section-kicker mb-3">Personal finance workspace</div>
                    <h2 className="page-title text-2xl md:text-3xl">
                      {title}
                    </h2>
                    <p className="page-copy mt-2 truncate text-sm">
                      {currentUser?.displayName || currentUser?.email || "Manage your financial activity"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden sm:block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500">
                    <p className="font-semibold text-slate-900">Signed in</p>
                    <p className="truncate max-w-56">{currentUser?.email}</p>
                  </div>

                  <button
                    onClick={logoutUser}
                    className="rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 hover:bg-slate-800"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </header>

            <section className="p-4 md:p-6">{children}</section>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}