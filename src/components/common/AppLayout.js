"use client";

import Sidebar from "./Sidebar";
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../../context/AuthContext";

export default function AppLayout({ children, title }) {
  const { currentUser, logoutUser } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-gray-100">
        <Sidebar />

        <main className="flex-1">
          <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              <p className="text-sm text-gray-500">
                {currentUser?.email}
              </p>
            </div>

            <button
              onClick={logoutUser}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Logout
            </button>
          </header>

          <section className="p-6">{children}</section>
        </main>
      </div>
    </ProtectedRoute>
  );
}