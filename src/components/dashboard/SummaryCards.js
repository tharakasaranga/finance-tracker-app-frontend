"use client";

export default function SummaryCards({ summary }) {
  const cards = [
    {
      title: "Total Income",
      value: summary?.totalIncome || 0,
      textColor: "text-emerald-600",
      accent: "from-emerald-500/10 to-emerald-500/0",
      badge: "Income",
    },
    {
      title: "Total Expenses",
      value: summary?.totalExpenses || 0,
      textColor: "text-rose-600",
      accent: "from-rose-500/10 to-rose-500/0",
      badge: "Expenses",
    },
    {
      title: "Current Balance",
      value: summary?.balance || 0,
      textColor: "text-sky-600",
      accent: "from-sky-500/10 to-sky-500/0",
      badge: "Balance",
    },
    {
      title: "Budgets",
      value: summary?.budgetCount || 0,
      textColor: "text-violet-600",
      accent: "from-violet-500/10 to-violet-500/0",
      badge: "Plans",
      isMoney: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="reveal-card group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/92 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(15,23,42,0.09)]"
        >
          <div
            className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${card.accent}`}
          />
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-slate-900/5 blur-2xl transition group-hover:bg-slate-900/10" />
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <p className="surface-pill w-fit bg-slate-50 px-3 py-1 text-[10px] text-slate-500">
                {card.badge}
              </p>
              <p className="mt-2 text-sm text-slate-500">{card.title}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Overview
            </span>
          </div>

          <h3
            className={`mt-5 text-3xl font-black tracking-tight ${card.textColor}`}
          >
            {card.isMoney === false
              ? card.value
              : `Rs. ${Number(card.value).toLocaleString()}`}
          </h3>

          <p className="mt-3 text-sm text-slate-500">
            {card.title === "Current Balance"
              ? "Your live financial position"
              : "Updated from your latest entries"}
          </p>
        </div>
      ))}
    </div>
  );
}
