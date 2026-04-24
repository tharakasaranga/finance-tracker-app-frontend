"use client";

const monthNames = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function BudgetList({ budgets, onEdit, onDelete }) {
  if (budgets.length === 0) {
    return (
      <div className="bg-white rounded-xl border shadow-sm p-6 text-center">
        <p className="text-gray-500">No budgets created yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {budgets.map((budget) => {
        const progressWidth = Math.min(budget.percentage, 100);

        return (
          <div
            key={budget._id}
            className="bg-white rounded-xl border shadow-sm p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold">{budget.category}</h3>
                <p className="text-sm text-gray-500">
                  {monthNames[budget.month]} {budget.year}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  budget.isExceeded
                    ? "bg-red-100 text-red-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {budget.isExceeded ? "Exceeded" : "On Track"}
              </span>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Spent</span>
                <span className="font-medium">
                  Rs. {Number(budget.spent).toLocaleString()} / Rs.{" "}
                  {Number(budget.amount).toLocaleString()}
                </span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    budget.isExceeded ? "bg-red-500" : "bg-green-500"
                  }`}
                  style={{ width: `${progressWidth}%` }}
                ></div>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                {budget.percentage}% used
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">Budget</p>
                <p className="font-semibold">
                  Rs. {Number(budget.amount).toLocaleString()}
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500">Remaining</p>
                <p
                  className={`font-semibold ${
                    budget.remaining < 0 ? "text-red-600" : "text-green-600"
                  }`}
                >
                  Rs. {Number(budget.remaining).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => onEdit(budget)}
                className="text-blue-600 hover:underline text-sm"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(budget._id)}
                className="text-red-600 hover:underline text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}