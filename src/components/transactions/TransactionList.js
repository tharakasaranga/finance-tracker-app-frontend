"use client";

export default function TransactionList({ transactions, onEdit, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div className="empty-state app-section rounded-[1.75rem]">
        <strong>No transactions found.</strong>
        <p>Try widening the filters or create a new entry to fill the table.</p>
      </div>
    );
  }

  return (
    <div className="table-shell">
      <div className="table-scroll">
        <table className="table-view text-sm">
          <thead className="table-head">
            <tr>
              <th className="text-left">Title</th>
              <th className="text-left">Category</th>
              <th className="text-left">Type</th>
              <th className="text-left">Date</th>
              <th className="text-right">Amount</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((item) => (
              <tr key={item._id} className="table-row">
                <td>
                  <p className="font-semibold text-slate-950">{item.title}</p>
                  {item.note && (
                    <p className="mt-1 text-xs text-slate-500">{item.note}</p>
                  )}
                </td>

                <td className="text-slate-600">{item.category}</td>

                <td>
                  <span
                    className={`status-chip ${
                      item.type === "income"
                        ? "status-chip--income"
                        : "status-chip--expense"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>

                <td className="text-slate-600">
                  {new Date(item.date).toLocaleDateString()}
                </td>

                <td
                  className={`text-right font-semibold ${
                    item.type === "income"
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  Rs. {Number(item.amount).toLocaleString()}
                </td>

                <td className="text-right">
                  <button
                    onClick={() => onEdit(item)}
                    className="mr-3 font-semibold text-sky-600 transition hover:text-sky-700"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(item._id)}
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
