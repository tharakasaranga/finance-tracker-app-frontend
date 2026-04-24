"use client";

import AppLayout from "../../components/common/AppLayout";

export default function DashboardPage() {
  return (
    <AppLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border">
          <p className="text-sm text-gray-500">Total Income</p>
          <h3 className="text-2xl font-bold text-green-600 mt-2">Rs. 0</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border">
          <p className="text-sm text-gray-500">Total Expenses</p>
          <h3 className="text-2xl font-bold text-red-600 mt-2">Rs. 0</h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border">
          <p className="text-sm text-gray-500">Current Balance</p>
          <h3 className="text-2xl font-bold text-blue-600 mt-2">Rs. 0</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-2">Welcome</h3>
        <p className="text-gray-600">
          Dashboard data will appear here after adding transactions and budgets.
        </p>
      </div>
    </AppLayout>
  );
}