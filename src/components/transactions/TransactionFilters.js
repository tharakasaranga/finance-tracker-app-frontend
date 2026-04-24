"use client";

export default function TransactionFilters({
  filters,
  setFilters,
  categories,
  onClear,
}) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 mb-6">
      <h3 className="text-lg font-semibold mb-4">Filter Transactions</h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <select
          value={filters.type}
          onChange={(e) =>
            setFilters({ ...filters, type: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
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
          className="border rounded-lg px-4 py-3 text-sm bg-white"
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
          className="border rounded-lg px-4 py-3 text-sm bg-white"
        />

        <input
          type="date"
          value={filters.endDate}
          onChange={(e) =>
            setFilters({ ...filters, endDate: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
        />

        <button
          onClick={onClear}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-3 rounded-lg text-sm"
        >
          Clear
        </button>
      </div>
    </div>
  );
}