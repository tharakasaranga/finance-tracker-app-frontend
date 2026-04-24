"use client";

import { useEffect, useState } from "react";
import AppLayout from "../../components/common/AppLayout";
import SummaryCards from "../../components/dashboard/SummaryCards";
import ExpensePieChart from "../../components/dashboard/ExpensePieChart";
import MonthlyBarChart from "../../components/dashboard/MonthlyBarChart";
import BudgetProgress from "../../components/dashboard/BudgetProgress";
import RecentTransactions from "../../components/dashboard/RecentTransactions";
import api from "../../lib/api";

export default function DashboardPage() {
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
    getDashboardData();
  }, []);

  return (
    <AppLayout title="Dashboard">
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-gray-900">
          Financial Overview
        </h3>
        <p className="text-sm text-gray-500">
          View your income, expenses, budget usage and recent activity.
        </p>
      </div>

      <SummaryCards summary={dashboardData.summary} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        <ExpensePieChart data={dashboardData.expenseChart} />
        <MonthlyBarChart data={dashboardData.monthlyChart} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <BudgetProgress data={dashboardData.budgetChart} />
        <RecentTransactions transactions={dashboardData.recentTransactions} />
      </div>
    </AppLayout>
  );
}