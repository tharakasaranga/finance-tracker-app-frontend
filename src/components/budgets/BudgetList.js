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
      <div className="app-section rounded-[1.75rem] p-6 text-center">
        <p className="text-slate-500">No budgets created yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      {budgets.map((budget) => {
        const progressWidth = Math.min(budget.percentage, 100);

        return (
          <div
            key={budget._id}
            className="app-section rounded-[1.75rem] p-5 md:p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-slate-950">{budget.category}</h3>
                <p className="text-sm text-slate-500">
                  {monthNames[budget.month]} {budget.year}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  budget.isExceeded
                    ? "bg-rose-50 text-rose-700"
                    : "bg-emerald-50 text-emerald-700"
                }`}
              >
                {budget.isExceeded ? "Exceeded" : "On Track"}
              </span>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500">Spent</span>
                <span className="font-medium">
                  Rs. {Number(budget.spent).toLocaleString()} / Rs.{" "}
                  {Number(budget.amount).toLocaleString()}
                </span>
              </div>

              <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    budget.isExceeded ? "bg-rose-500" : "bg-emerald-500"
                  }`}
                  style={{ width: `${progressWidth}%` }}
                ></div>
              </div>

              <p className="text-sm text-slate-500 mt-2">
                {budget.percentage}% used
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs text-slate-500">Budget</p>
                <p className="font-semibold">
                  Rs. {Number(budget.amount).toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-xs text-slate-500">Remaining</p>
                <p
                  className={`font-semibold ${
                    budget.remaining < 0 ? "text-rose-600" : "text-emerald-600"
                  }`}
                >
                  Rs. {Number(budget.remaining).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => onEdit(budget)}
                className="text-sm font-semibold text-sky-600 hover:text-sky-700"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(budget._id)}
                className="text-sm font-semibold text-rose-600 hover:text-rose-700"
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