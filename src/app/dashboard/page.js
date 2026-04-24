"use client";

import ProtectedRoute from "../../components/common/ProtectedRoute";
import { useAuth } from "../../context/AuthContext";

export default function DashboardPage() {
  const { currentUser, logoutUser } = useAuth();

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-gray-600">
                Welcome, {currentUser?.displayName || currentUser?.email}
              </p>
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>

          <p className="text-gray-700">
            Authentication setup is working. Next we will add categories, transactions,
            budgets and dashboard data.
          </p>
        </div>
      </main>
    </ProtectedRoute>
  );
}