"use client";

import { useEffect, useState } from "react";
import AppLayout from "../../components/common/AppLayout";
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

  return (
    <AppLayout title="Dashboard">
      <div className="page-heading mb-6">
        <span className="section-kicker">Overview</span>
        <h3 className="page-title text-2xl md:text-3xl">Financial overview</h3>
        <p className="page-copy">
          View your income, expenses, budget usage, and recent activity in a cleaner, more focused layout.
        </p>
      </div>

      <SummaryCards summary={dashboardData.summary} />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-6">
        <ExpensePieChart data={dashboardData.expenseChart} />
        <MonthlyBarChart data={dashboardData.monthlyChart} />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <BudgetProgress data={dashboardData.budgetChart} />
        <RecentTransactions transactions={dashboardData.recentTransactions} />
      </div>
    </AppLayout>
  );
}
