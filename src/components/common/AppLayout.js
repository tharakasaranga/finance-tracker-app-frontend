"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar, { menuItems } from "./Sidebar";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../../context/AuthContext";

export default function AppLayout({ children, title }) {
  const { currentUser, logoutUser } = useAuth();
  const pathname = usePathname();

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-gray-100">
        <Sidebar />

        <main className="flex-1 min-w-0">
          <header className="bg-white border-b px-4 md:px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  {title}
                </h2>
                <p className="text-xs md:text-sm text-gray-500 truncate">
                  {currentUser?.email}
                </p>
              </div>

              <button
                onClick={logoutUser}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </div>

            <nav className="md:hidden flex gap-2 overflow-x-auto mt-4 pb-1">
              {menuItems.map((item) => {
                const active = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium ${
                      active
                        ? "bg-slate-950 text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </header>

          <section className="p-4 md:p-6">{children}</section>
        </main>
      </div>
    </ProtectedRoute>
  );
}