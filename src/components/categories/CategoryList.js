"use client";

export default function CategoryList({ categories, onEdit, onDelete }) {
  if (categories.length === 0) {
    return (
      <div className="bg-white rounded-xl border shadow-sm p-6 text-center">
        <p className="text-gray-500">No categories added yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left px-5 py-3">Name</th>
            <th className="text-left px-5 py-3">Type</th>
            <th className="text-right px-5 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <tr key={category._id} className="border-b last:border-b-0">
              <td className="px-5 py-4 font-medium">{category.name}</td>

              <td className="px-5 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    category.type === "income"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {category.type}
                </span>
              </td>

              <td className="px-5 py-4 text-right">
                <button
                  onClick={() => onEdit(category)}
                  className="text-blue-600 hover:underline mr-4"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(category._id)}
                  className="text-red-600 hover:underline"
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