"use client";

export default function TransactionForm({
  formData,
  setFormData,
  categories,
  onSubmit,
  editingId,
  onCancel,
}) {
  const filteredCategories = categories.filter(
    (category) => category.type === formData.type
  );

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-xl border shadow-sm p-5 mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">
        {editingId ? "Edit Transaction" : "Add New Transaction"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) =>
            setFormData({ ...formData, title: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
          required
        />

        <select
          value={formData.type}
          onChange={(e) =>
            setFormData({
              ...formData,
              type: e.target.value,
              category: "",
            })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
          required
        >
          <option value="">Select Category</option>
          {filteredCategories.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={formData.date}
          onChange={(e) =>
            setFormData({ ...formData, date: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
          required
        />

        <input
          type="text"
          placeholder="Optional note"
          value={formData.note}
          onChange={(e) =>
            setFormData({ ...formData, note: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
        />
      </div>

      <div className="mt-5 flex gap-2">
        <button
          type="submit"
          className="bg-slate-950 hover:bg-slate-800 text-white px-5 py-3 rounded-lg text-sm font-medium"
        >
          {editingId ? "Update Transaction" : "Add Transaction"}
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