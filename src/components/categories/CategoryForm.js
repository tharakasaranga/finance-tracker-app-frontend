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
      className="app-section mb-6 rounded-[1.75rem] p-5 md:p-6"
    >
      <div className="panel-heading mb-5">
        <p className="section-kicker">Setup</p>
        <h3 className="text-lg font-bold tracking-tight text-slate-950">
          {editingId ? "Edit Category" : "Add New Category"}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.3fr_0.8fr_auto]">
        <input
          type="text"
          placeholder="Category name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="control-field"
          required
        />

        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="control-field control-field--select"
          required
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="flex gap-2">
          <button type="submit" className="button-primary">
            {editingId ? "Update" : "Add"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={onCancel}
              className="button-secondary"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
