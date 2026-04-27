"use client";

export default function TransactionFilters({
  filters,
  setFilters,
  categories,
  onClear,
}) {
  return (
    <div className="app-section mb-6 rounded-[1.75rem] p-5 md:p-6">
      <div className="panel-heading mb-5">
        <p className="section-kicker">Refine</p>
        <h3 className="text-lg font-bold tracking-tight text-slate-950">
          Filter transactions
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="control-field control-field--select"
        >
          <option value="">All Types</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="control-field control-field--select"
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
          className="control-field"
        />

        <input
          type="date"
          value={filters.endDate}
          onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          className="control-field"
        />

        <button onClick={onClear} className="button-secondary">
          Clear
        </button>
      </div>
    </div>
  );
}
