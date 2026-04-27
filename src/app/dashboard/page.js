"use client";

import { useEffect, useState } from "react";
import SummaryCards from "../../components/dashboard/SummaryCards";
import ExpensePieChart from "../../components/dashboard/ExpensePieChart";
import MonthlyBarChart from "../../components/dashboard/MonthlyBarChart";
import BudgetProgress from "../../components/dashboard/BudgetProgress";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import { useAuth } from "../../context/AuthContext";
import api from "../../lib/api";

export default function DashboardPage() {
  const { currentUser, loading } = useAuth();
  const [dashboardData, setDashboardData] = useState({
    summary: {
      totalIncome: 0,
      totalExpenses: 0,
      balance: 0,
      budgetCount: 0,
    },
    expenseChart: [],
    monthlyChart: [],
    budgetChart: [],
    recentTransactions: [],
  });

  const getDashboardData = async () => {
    try {
      const res = await api.get("/dashboard");
      setDashboardData(res.data);
    } catch (error) {
      console.log("Dashboard data loading failed", error);
    }
  };

  useEffect(() => {
    if (loading || !currentUser) {
      return;
    }

    getDashboardData();
  }, [currentUser, loading]);

  const summary = dashboardData.summary || {};
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <section className="page-intro relative overflow-hidden rounded-4xl p-5 md:p-6">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-linear-to-l from-sky-100/70 to-transparent lg:block" />
        <div className="pointer-events-none absolute -left-10 top-6 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl" />

        <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
          <div className="page-heading">
            <div className="flex flex-wrap items-center gap-3">
              <span className="section-kicker">Overview</span>
              <span className="surface-pill">Updated {lastUpdated}</span>
            </div>

            <h3 className="page-title text-3xl md:text-4xl lg:text-5xl">
              Financial overview
            </h3>

            <p className="page-copy max-w-2xl text-sm md:text-base lg:text-lg">
              Track your income, spending, budget usage, and recent activity in
              a polished command center designed for quick financial decisions.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="surface-pill">Live summary</span>
              <span className="surface-pill">Budget health</span>
              <span className="surface-pill">Recent activity</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
            <div className="rounded-3xl border border-slate-200/80 bg-white/94 p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Income
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight text-emerald-600">
                Rs. {Number(summary.totalIncome || 0).toLocaleString()}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Total incoming cash flow
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white/94 p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Expenses
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight text-rose-600">
                Rs. {Number(summary.totalExpenses || 0).toLocaleString()}
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Total outgoing spend
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-slate-950 p-4 text-white shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-white/55">
                Balance
              </p>
              <p className="mt-2 text-2xl font-black tracking-tight text-white">
                Rs. {Number(summary.balance || 0).toLocaleString()}
              </p>
              <p className="mt-2 text-xs text-white/60">
                Current position after all activity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="page-stack">
        <div className="panel-heading">
          <div className="page-heading">
            <span className="section-kicker">Key numbers</span>
            <h4 className="page-title text-2xl md:text-3xl">
              Snapshot metrics
            </h4>
            <p className="page-copy text-sm">
              A concise view of core financial indicators and budget planning
              status.
            </p>
          </div>
        </div>

        <SummaryCards summary={summary} />
      </section>

      <section className="page-stack">
        <div className="panel-heading">
          <div className="page-heading">
            <span className="section-kicker">Insights</span>
            <h4 className="page-title text-2xl md:text-3xl">
              Trends and allocation
            </h4>
            <p className="page-copy text-sm">
              Compare spending patterns and distribution across categories.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <ExpensePieChart data={dashboardData.expenseChart} />
          <MonthlyBarChart data={dashboardData.monthlyChart} />
        </div>
      </section>

      <section className="page-stack">
        <div className="panel-heading">
          <div className="page-heading">
            <span className="section-kicker">Control</span>
            <h4 className="page-title text-2xl md:text-3xl">
              Budget and activity
            </h4>
            <p className="page-copy text-sm">
              Monitor monthly budgets alongside the most recent account
              movements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <BudgetProgress data={dashboardData.budgetChart} />
          <RecentTransactions transactions={dashboardData.recentTransactions} />
        </div>
      </section>
    </>
  );
}
