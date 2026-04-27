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
    (category) => category.type === formData.type,
  );

  return (
    <form
      onSubmit={onSubmit}
      className="app-section mb-6 rounded-[1.75rem] p-5 md:p-6"
    >
      <div className="panel-heading mb-5">
        <p className="section-kicker">Entry form</p>
        <h3 className="text-lg font-bold tracking-tight text-slate-950">
          {editingId ? "Edit Transaction" : "Add New Transaction"}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="control-field"
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="control-field"
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
          className="control-field control-field--select"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="control-field control-field--select"
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
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="control-field"
          required
        />

        <input
          type="text"
          placeholder="Optional note"
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          className="control-field"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="button-primary">
          {editingId ? "Update Transaction" : "Add Transaction"}
        </button>

        {editingId && (
          <button type="button" onClick={onCancel} className="button-secondary">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
