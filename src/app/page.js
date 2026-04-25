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

const highlights = [
  "Responsive layout",
  "Clear finance insights",
  "Modern card-based UI",
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden text-slate-900">
      <section className="relative px-5 py-6 md:px-8 md:py-8">
        <div className="hero-glow hero-glow-blue -right-16 top-0 h-72 w-72" />
        <div className="hero-glow hero-glow-emerald left-0 top-24 h-72 w-72" />
        <div className="hero-glow hero-glow-amber -bottom-12 right-1/4 h-80 w-80" />

        <nav className="relative mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/75 px-4 py-3 shadow-lg shadow-slate-900/5 backdrop-blur md:px-5">
          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-slate-950 md:text-xl">
              FinanceTrack
            </h1>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              personal finance clarity
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-950">
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 hover:bg-slate-800"
            >
              Get Started
            </Link>
          </div>
        </nav>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 pt-16 pb-14 lg:grid-cols-[1.08fr_0.92fr] lg:pt-24 lg:pb-20">
          <div className="space-y-8">
            <div className="space-y-5">
              <span className="section-kicker">Personal finance & budget tracking</span>

              <h2 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 md:text-6xl xl:text-7xl">
                A refined dashboard for confident money decisions.
              </h2>

              <p className="page-copy text-base md:text-lg">
                Track income, expenses, categories, and monthly budgets in a focused workspace designed to feel premium, calm, and effortless on every screen.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span key={item} className="profile-badge border border-slate-200 bg-white/80 text-slate-700">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/20 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Create Free Account
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-white hover:text-slate-950"
              >
                Login to Dashboard
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-slate-950/5 blur-2xl" />
            <div className="floating-card relative overflow-hidden rounded-[2rem] p-4 md:p-5">
              <div className="balance-card rounded-[1.75rem] p-5 md:p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/65">Current balance</p>
                    <h3 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">Rs. 85,500</h3>
                    <p className="mt-2 max-w-sm text-sm text-white/70">
                      One glance view of your financial health with clean, premium surfaces.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="glass-card rounded-2xl px-4 py-3">
                      <p className="text-xs text-white/65">Income</p>
                      <p className="mt-1 text-lg font-bold">Rs. 130,000</p>
                    </div>

                    <div className="glass-card rounded-2xl px-4 py-3">
                      <p className="text-xs text-white/65">Expenses</p>
                      <p className="mt-1 text-lg font-bold">Rs. 44,500</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
                  {stats.map((item) => (
                    <div key={item.label} className="metric-pill">
                      <p className="text-2xl font-black leading-none">{item.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">{item.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-white p-5 text-slate-950 shadow-lg shadow-slate-950/10">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm text-slate-500">Food Budget</p>
                      <p className="mt-1 text-2xl font-extrabold">75% used</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Healthy pace
                    </span>
                  </div>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500" />
                  </div>

                  <p className="mt-3 text-sm text-slate-500">
                    Rs. 7,500 spent from Rs. 10,000 budget
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/70 bg-white/80 px-5 py-14 shadow-[0_22px_60px_rgba(15,23,42,0.06)] backdrop-blur md:px-8 md:py-16">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="section-kicker mx-auto">Built for clarity</span>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Everything needed to manage personal finance
            </h3>
            <p className="page-copy mx-auto mt-3 text-base">
              Built with Next.js, Node.js, MongoDB and Firebase Authentication.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="app-section rounded-[1.75rem] p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-base font-bold text-white shadow-lg shadow-slate-950/20">
                  {String(feature.title).slice(0, 1)}
                </div>

                <h4 className="mt-5 text-xl font-bold tracking-tight text-slate-950">
                  {feature.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
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