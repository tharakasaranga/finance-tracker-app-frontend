"use client";

export default function RecentTransactions({ transactions }) {
  return (
    <div className="app-section rounded-[1.5rem] p-5 md:p-6">
      <div className="mb-4">
        <p className="section-kicker">Activity</p>
        <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950">Recent transactions</h3>
      </div>

      {transactions.length === 0 ? (
        <p className="text-sm text-slate-500">No recent transactions.</p>
      ) : (
        <div className="space-y-3">
          {transactions.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm last:border-b"
            >
              <div>
                <p className="font-semibold text-slate-950">{item.title}</p>
                <p className="text-sm text-slate-500">
                  {item.category} • {new Date(item.date).toLocaleDateString()}
                </p>
              </div>

              <p
                className={`font-semibold ${
                  item.type === "income" ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                {item.type === "income" ? "+" : "-"} Rs.{" "}
                {Number(item.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}