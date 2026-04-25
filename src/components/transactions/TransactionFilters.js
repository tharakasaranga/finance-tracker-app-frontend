"use client";

export default function TransactionFilters({
  filters,
  setFilters,
  categories,
  onClear,
}) {
  return (
    <div className="app-section rounded-[1.75rem] p-5 mb-6 md:p-6">
      <div className="mb-5">
        <p className="section-kicker">Refine</p>
        <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950">Filter transactions</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <select
          value={filters.type}
          onChange={(e) =>
            setFilters({ ...filters, type: e.target.value })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
        >
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({ ...filters, category: e.target.value })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={filters.startDate}
          onChange={(e) =>
            setFilters({ ...filters, startDate: e.target.value })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
        />

        <input
          type="date"
          value={filters.endDate}
          onChange={(e) =>
            setFilters({ ...filters, endDate: e.target.value })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
        />

        <button
          onClick={onClear}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        >
          Clear
        </button>
      </div>
    </div>
  );
}