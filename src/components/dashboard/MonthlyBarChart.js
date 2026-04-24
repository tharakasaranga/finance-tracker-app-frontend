"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function MonthlyBarChart({ data }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4">Monthly Income vs Expenses</h3>

      {data.length === 0 ? (
        <p className="text-gray-500 text-sm">No monthly data available.</p>
      ) : (
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#22c55e" />
              <Bar dataKey="expense" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}