"use client";

export default function RecentTransactions({ transactions }) {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-sm">No recent transactions.</p>
      ) : (
        <div className="space-y-3">
          {transactions.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-3 last:border-b-0"
            >
              <div>
                <p className="font-medium text-gray-900">{item.title}</p>
                <p className="text-sm text-gray-500">
                  {item.category} • {new Date(item.date).toLocaleDateString()}
                </p>
              </div>

              <p
                className={`font-semibold ${
                  item.type === "income" ? "text-green-600" : "text-red-600"
                }`}
              >
                {item.type === "income" ? "+" : "-"} Rs.{" "}
                {Number(item.amount).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}