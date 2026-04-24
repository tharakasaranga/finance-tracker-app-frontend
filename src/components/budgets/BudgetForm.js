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
      className="bg-white rounded-xl border shadow-sm p-5 mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">
        {editingId ? "Edit Budget" : "Create Monthly Budget"}
      </h3>

      {expenseCategories.length === 0 && (
        <p className="text-sm text-orange-600 mb-4">
          Please add expense categories before creating budgets.
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
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
          className="border rounded-lg px-4 py-3 text-sm bg-white"
          required
        />

        <select
          value={formData.month}
          onChange={(e) =>
            setFormData({ ...formData, month: Number(e.target.value) })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
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
          className="border rounded-lg px-4 py-3 text-sm bg-white"
          required
        />
      </div>

      <div className="mt-5 flex gap-2">
        <button
          type="submit"
          className="bg-slate-950 hover:bg-slate-800 text-white px-5 py-3 rounded-lg text-sm font-medium"
        >
          {editingId ? "Update Budget" : "Create Budget"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-3 rounded-lg text-sm"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}