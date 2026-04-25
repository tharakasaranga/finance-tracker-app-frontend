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
    <div className="app-section rounded-[1.5rem] p-5 md:p-6">
      <div className="mb-4">
        <p className="section-kicker">Trend</p>
        <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950">Monthly income vs expenses</h3>
      </div>

      {data.length === 0 ? (
        <p className="text-sm text-slate-500">No monthly data available.</p>
      ) : (
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  borderRadius: 14,
                  border: "1px solid rgba(148, 163, 184, 0.2)",
                  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
                }}
              />
              <Legend />
              <Bar dataKey="income" fill="#10b981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expense" fill="#f43f5e" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}