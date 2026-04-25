"use client";

export default function TransactionList({ transactions, onEdit, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div className="app-section rounded-[1.75rem] p-6 text-center">
        <p className="text-slate-500">No transactions found.</p>
      </div>
    );
  }

  return (
    <div className="app-section overflow-hidden rounded-[1.75rem]">
      <table className="w-full text-sm">
        <thead className="bg-slate-50/90 border-b border-slate-200">
          <tr>
            <th className="text-left px-5 py-4 font-semibold text-slate-600">Title</th>
            <th className="text-left px-5 py-4 font-semibold text-slate-600">Category</th>
            <th className="text-left px-5 py-4 font-semibold text-slate-600">Type</th>
            <th className="text-left px-5 py-4 font-semibold text-slate-600">Date</th>
            <th className="text-right px-5 py-4 font-semibold text-slate-600">Amount</th>
            <th className="text-right px-5 py-4 font-semibold text-slate-600">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {transactions.map((item) => (
            <tr key={item._id} className="transition hover:bg-slate-50/70">
              <td className="px-5 py-4">
                <p className="font-semibold text-slate-950">{item.title}</p>
                {item.note && <p className="mt-1 text-xs text-slate-500">{item.note}</p>}
              </td>

              <td className="px-5 py-4 text-slate-600">{item.category}</td>

              <td className="px-5 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === "income"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-rose-50 text-rose-700"
                  }`}
                >
                  {item.type}
                </span>
              </td>

              <td className="px-5 py-4 text-slate-600">
                {new Date(item.date).toLocaleDateString()}
              </td>

              <td
                className={`px-5 py-4 text-right font-semibold ${
                  item.type === "income" ? "text-emerald-600" : "text-rose-600"
                }`}
              >
                Rs. {Number(item.amount).toLocaleString()}
              </td>

              <td className="px-5 py-4 text-right">
                <button
                  onClick={() => onEdit(item)}
                  className="mr-4 font-semibold text-sky-600 hover:text-sky-700"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(item._id)}
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