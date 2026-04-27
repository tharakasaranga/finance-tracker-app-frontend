"use client";

export default function CategoryList({ categories, onEdit, onDelete }) {
  if (categories.length === 0) {
    return (
      <div className="empty-state app-section rounded-[1.75rem]">
        <strong>No categories added yet.</strong>
        <p>Create income and expense categories before adding transactions.</p>
      </div>
    );
  }

  return (
    <div className="table-shell">
      <div className="table-scroll">
        <table className="table-view text-sm">
          <thead className="table-head">
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">Type</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr key={category._id} className="table-row">
                <td className="font-semibold text-slate-950">
                  {category.name}
                </td>

                <td>
                  <span
                    className={`status-chip ${
                      category.type === "income"
                        ? "status-chip--income"
                        : "status-chip--expense"
                    }`}
                  >
                    {category.type}
                  </span>
                </td>

                <td className="text-right">
                  <button
                    onClick={() => onEdit(category)}
                    className="mr-3 font-semibold text-sky-600 transition hover:text-sky-700"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(category._id)}
                    className="font-semibold text-rose-600 transition hover:text-rose-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
