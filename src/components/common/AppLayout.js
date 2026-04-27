"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../../context/AuthContext";

export default function AppLayout({ children, title }) {
  const { currentUser, logoutUser } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const savedSidebarState = window.sessionStorage.getItem("sidebarOpen");

    if (savedSidebarState !== null) {
      setSidebarOpen(savedSidebarState === "true");
    }
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("sidebarOpen", String(sidebarOpen));
  }, [sidebarOpen]);

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
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}

        <main className="relative flex-1 min-w-0 px-4 py-4 md:px-6 md:py-6">
          <div className="app-shell min-h-[calc(100vh-2rem)] overflow-hidden rounded-[2.25rem]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-sky-500 via-blue-500 to-emerald-500" />

            <header className="relative overflow-hidden border-b border-slate-200/80 bg-white/80 px-4 py-4 backdrop-blur md:px-6">
              <div className="absolute inset-y-0 right-0 w-56 bg-linear-to-l from-sky-100/60 to-transparent" />

              <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen((current) => !current)}
                    aria-label={
                      sidebarOpen ? "Hide navigation" : "Show navigation"
                    }
                    aria-expanded={sidebarOpen}
                    className="group inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 md:mt-1"
                  >
                    <span className="flex flex-col gap-1.5">
                      <span
                        className={`h-0.5 w-5 rounded-full bg-current transition ${sidebarOpen ? "translate-y-2 rotate-45" : ""}`}
                      />
                      <span
                        className={`h-0.5 w-5 rounded-full bg-current transition ${sidebarOpen ? "opacity-0" : ""}`}
                      />
                      <span
                        className={`h-0.5 w-5 rounded-full bg-current transition ${sidebarOpen ? "-translate-y-2 -rotate-45" : ""}`}
                      />
                    </span>
                  </button>

                  <div className="space-y-2">
                    <div className="surface-pill">
                      Personal finance workspace
                    </div>
                    <h2 className="page-title text-2xl md:text-3xl">{title}</h2>
                    <p className="page-copy max-w-2xl truncate text-sm">
                      {currentUser?.displayName ||
                        currentUser?.email ||
                        "Manage your financial activity"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden rounded-2xl border border-slate-200 bg-white/90 px-4 py-2 text-xs text-slate-500 shadow-sm sm:block">
                    <p className="font-semibold text-slate-900">Signed in</p>
                    <p className="truncate max-w-56">{currentUser?.email}</p>
                  </div>

                  <button
                    onClick={logoutUser}
                    className="button-primary rounded-2xl px-4 py-2.5 text-sm"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </header>

            <section className="page-stack p-4 md:p-6">{children}</section>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
