"use client";

export default function CategoryList({ categories, onEdit, onDelete }) {
  if (categories.length === 0) {
    return (
      <div className="app-section rounded-[1.75rem] p-6 text-center">
        <p className="text-slate-500">No categories added yet.</p>
      </div>
    );
  }

  return (
    <div className="app-section overflow-hidden rounded-[1.75rem]">
      <table className="w-full text-sm">
        <thead className="bg-slate-50/90 border-b border-slate-200">
          <tr>
            <th className="text-left px-5 py-4 font-semibold text-slate-600">Name</th>
            <th className="text-left px-5 py-4 font-semibold text-slate-600">Type</th>
            <th className="text-right px-5 py-4 font-semibold text-slate-600">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {categories.map((category) => (
            <tr key={category._id} className="transition hover:bg-slate-50/70">
              <td className="px-5 py-4 font-semibold text-slate-950">{category.name}</td>

              <td className="px-5 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    category.type === "income"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  {category.type}
                </span>
              </td>

              <td className="px-5 py-4 text-right">
                <button
                  onClick={() => onEdit(category)}
                  className="mr-4 font-semibold text-sky-600 hover:text-sky-700"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(category._id)}
                  className="font-semibold text-rose-600 hover:text-rose-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}