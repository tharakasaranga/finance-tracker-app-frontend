"use client";

export default function SummaryCards({ summary }) {
  const cards = [
    {
      title: "Total Income",
      value: summary?.totalIncome || 0,
      textColor: "text-green-600",
    },
    {
      title: "Total Expenses",
      value: summary?.totalExpenses || 0,
      textColor: "text-red-600",
    },
    {
      title: "Current Balance",
      value: summary?.balance || 0,
      textColor: "text-blue-600",
    },
    {
      title: "Budgets",
      value: summary?.budgetCount || 0,
      textColor: "text-purple-600",
      isMoney: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl border shadow-sm p-5"
        >
          <p className="text-sm text-gray-500">{card.title}</p>

          <h3 className={`text-2xl font-bold mt-2 ${card.textColor}`}>
            {card.isMoney === false
              ? card.value
              : `Rs. ${Number(card.value).toLocaleString()}`}
          </h3>
        </div>
      ))}
    </div>
  );
}