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
      className="app-section rounded-[1.75rem] p-5 mb-6 md:p-6"
    >
      <div className="mb-5">
        <p className="section-kicker">Setup</p>
        <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-950">
        {editingId ? "Edit Category" : "Add New Category"}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.3fr_0.8fr_auto]">
        <input
          type="text"
          placeholder="Category name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          required
        />

        <select
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value })
          }
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm shadow-sm transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
          required
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 hover:bg-slate-800"
          >
            {editingId ? "Update" : "Add"}
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
      </div>
    </form>
  );
}