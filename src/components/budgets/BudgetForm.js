"use client";

const months = [
  { value: 1, name: "January" },
  { value: 2, name: "February" },
  { value: 3, name: "March" },
  { value: 4, name: "April" },
  { value: 5, name: "May" },
  { value: 6, name: "June" },
  { value: 7, name: "July" },
  { value: 8, name: "August" },
  { value: 9, name: "September" },
  { value: 10, name: "October" },
  { value: 11, name: "November" },
  { value: 12, name: "December" },
];

export default function BudgetForm({
  formData,
  setFormData,
  categories,
  onSubmit,
  editingId,
  onCancel,
}) {
  const expenseCategories = categories.filter(
    (category) => category.type === "expense"
  );

  return (
    <form
      onSubmit={onSubmit}
      className="app-section rounded-[1.75rem] p-5 mb-6 md:p-6"
    >
      <div className="mb-5">
        <p className="section-kicker">Budget planning</p>
        <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950">
        {editingId ? "Edit Budget" : "Create Monthly Budget"}
        </h3>
      </div>

      {expenseCategories.length === 0 && (
        <p className="mb-4 text-sm font-medium text-amber-600">
          Please add expense categories before creating budgets.
        </p>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          required
        >
          <option value="">Select Expense Category</option>
          {expenseCategories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Budget amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: e.target.value })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          required
        />

        <select
          value={formData.month}
          onChange={(e) =>
            setFormData({ ...formData, month: Number(e.target.value) })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          required
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Year"
          value={formData.year}
          onChange={(e) =>
            setFormData({ ...formData, year: Number(e.target.value) })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          required
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 hover:bg-slate-800"
        >
          {editingId ? "Update Budget" : "Create Budget"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}