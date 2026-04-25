"use client";

export default function TransactionList({ transactions, onEdit, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-xl border shadow-sm p-6 text-center">
        <p className="text-gray-500">No transactions found.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left px-5 py-3">Title</th>
            <th className="text-left px-5 py-3">Category</th>
            <th className="text-left px-5 py-3">Type</th>
            <th className="text-left px-5 py-3">Date</th>
            <th className="text-right px-5 py-3">Amount</th>
            <th className="text-right px-5 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item._id} className="border-b last:border-b-0">
              <td className="px-5 py-4">
                <p className="font-medium">{item.title}</p>
                {item.note && (
                  <p className="text-xs text-gray-500 mt-1">{item.note}</p>
                )}
              </td>

              <td className="px-5 py-4">{item.category}</td>

              <td className="px-5 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === "income"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.type}
                </span>
              </td>

              <td className="px-5 py-4">
                {new Date(item.date).toLocaleDateString()}
              </td>

              <td
                className={`px-5 py-4 text-right font-semibold ${
                  item.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                Rs. {Number(item.amount).toLocaleString()}
              </td>

              <td className="px-5 py-4 text-right">
                <button
                  onClick={() => onEdit(item)}
                  className="text-blue-600 hover:underline mr-4"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(item._id)}
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