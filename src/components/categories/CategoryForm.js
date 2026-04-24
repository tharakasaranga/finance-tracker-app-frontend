"use client";

export default function CategoryForm({
  formData,
  setFormData,
  onSubmit,
  editingId,
  onCancel,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-xl border shadow-sm p-5 mb-6"
    >
      <h3 className="text-lg font-semibold mb-4">
        {editingId ? "Edit Category" : "Add New Category"}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Category name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm"
          required
        />

        <select
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value })
          }
          className="border rounded-lg px-4 py-3 text-sm bg-white"
          required
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-slate-950 hover:bg-slate-800 text-white px-5 py-3 rounded-lg text-sm font-medium"
          >
            {editingId ? "Update" : "Add"}
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
      </div>
    </form>
  );
}