import Link from "next/link";

const features = [
  {
    title: "Track Transactions",
    description: "Record income and expenses with categories, dates and notes.",
  },
  {
    title: "Manage Budgets",
    description: "Set monthly budgets and monitor your spending progress.",
  },
  {
    title: "Visual Dashboard",
    description: "Understand your financial activity using charts and summaries.",
  },
];

const stats = [
  { label: "Income Tracking", value: "100%" },
  { label: "Budget Control", value: "Smart" },
  { label: "Dashboard", value: "Live" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <section className="relative px-5 py-6">
        <div className="absolute top-0 right-0 h-72 w-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-72 w-72 bg-purple-500/20 rounded-full blur-3xl"></div>

        <nav className="relative max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">FinanceTrack</h1>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-slate-300 hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="bg-white text-slate-950 px-4 py-2 rounded-lg text-sm font-medium"
            >
              Get Started
            </Link>
          </div>
        </nav>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20 pb-16">
          <div>
            <p className="inline-block bg-white/10 border border-white/10 text-slate-300 px-4 py-2 rounded-full text-sm mb-6">
              Personal Finance & Budget Tracking Application
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Take control of your money with clear financial insights
            </h2>

            <p className="text-slate-300 text-lg max-w-xl mb-8">
              Track your income, expenses, categories and monthly budgets using
              a simple dashboard designed for better personal finance decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/register"
                className="bg-white text-slate-950 px-6 py-3 rounded-lg font-medium text-center"
              >
                Create Free Account
              </Link>

              <Link
                href="/login"
                className="border border-slate-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-white/10"
              >
                Login to Dashboard
              </Link>
            </div>
          </div>

          <div className="bg-white/10 border border-white/10 rounded-3xl p-5 shadow-2xl">
            <div className="bg-slate-900 rounded-2xl p-5">
              <div className="grid grid-cols-3 gap-3 mb-5">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/10 rounded-xl p-4"
                  >
                    <p className="text-2xl font-bold">{item.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-5 text-slate-950 mb-4">
                <p className="text-sm text-gray-500">Current Balance</p>
                <h3 className="text-3xl font-bold mt-1">Rs. 85,500</h3>

                <div className="grid grid-cols-2 gap-3 mt-5">
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Income</p>
                    <p className="text-xl font-bold text-green-600">
                      Rs. 130,000
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">Expenses</p>
                    <p className="text-xl font-bold text-red-600">
                      Rs. 44,500
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <div className="flex justify-between text-sm mb-2">
                  <span>Food Budget</span>
                  <span>75%</span>
                </div>

                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-400 rounded-full"></div>
                </div>

                <p className="text-xs text-slate-400 mt-3">
                  Rs. 7,500 spent from Rs. 10,000 budget
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-slate-950 px-5 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3">
              Everything needed to manage personal finance
            </h3>
            <p className="text-gray-500">
              Built with Next.js, Node.js, MongoDB and Firebase Authentication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border rounded-2xl p-6 shadow-sm bg-gray-50"
              >
                <div className="h-12 w-12 bg-slate-950 text-white rounded-xl flex items-center justify-center mb-5">
                  ✓
                </div>

                <h4 className="text-xl font-semibold mb-2">
                  {feature.title}
                </h4>

                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}