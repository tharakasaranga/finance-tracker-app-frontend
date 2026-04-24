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

export default function BudgetProgress({ data }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4">Budget vs Actual Spending</h3>

      {data.length === 0 ? (
        <p className="text-gray-500 text-sm">No budget data available.</p>
      ) : (
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="budget" fill="#3b82f6" />
              <Bar dataKey="spent" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}