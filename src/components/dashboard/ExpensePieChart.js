"use client";

import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const colors = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#3b82f6",
  "#8b5cf6",
];

export default function ExpensePieChart({ data }) {
  return (
    <div className="chart-panel app-section rounded-[1.75rem] p-5 md:p-6">
      <div className="relative z-10 mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="section-kicker">Insights</p>
          <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950">
            Expense distribution
          </h3>
        </div>
      </div>

      {data.length === 0 ? (
        <p className="relative z-10 text-sm text-slate-500">
          No expense data available.
        </p>
      ) : (
        <div className="chart-canvas h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={96}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: 16,
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  background: "rgba(255, 255, 255, 0.96)",
                  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
