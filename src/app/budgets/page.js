"use client";

import { useEffect, useState } from "react";
import AppLayout from "../../components/common/AppLayout";
import BudgetForm from "../../components/budgets/BudgetForm";
import BudgetList from "../../components/budgets/BudgetList";
import { useAuth } from "../../context/AuthContext";
import api from "../../lib/api";
import toast from "react-hot-toast";

const today = new Date();

const emptyForm = {
  category: "",
  amount: "",
  month: today.getMonth() + 1,
  year: today.getFullYear(),
};

export default function BudgetsPage() {
  const { currentUser, loading } = useAuth();
  const [budgets, setBudgets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);

  const getCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data.categories);
    } catch (error) {
      console.log("Failed to load categories", error);
    }
  };

  const getBudgets = async () => {
    try {
      const res = await api.get("/budgets");
      setBudgets(res.data.budgets);
    } catch (error) {
      console.log("Failed to load budgets", error);
    }
  };

  useEffect(() => {
    if (loading || !currentUser) {
      return;
    }

    getCategories();
    getBudgets();
  }, [currentUser, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        amount: Number(formData.amount),
        month: Number(formData.month),
        year: Number(formData.year),
      };

      if (editingId) {
        await api.put(`/budgets/${editingId}`, payload);
        toast.success("Budget updated successfully");
      } else {
        await api.post("/budgets", payload);
        toast.success("Budget created successfully");
      }

      setFormData(emptyForm);
      setEditingId(null);
      getBudgets();
    } catch (error) {
      console.log("Budget save failed", error);
      toast.error("Budget save failed");
    }
  };

  const handleEdit = (budget) => {
    setEditingId(budget._id);

    setFormData({
      category: budget.category,
      amount: budget.amount,
      month: budget.month,
      year: budget.year,
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this budget?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/budgets/${id}`);
      toast.success("Budget deleted successfully");
      getBudgets();
    } catch (error) {
      console.log("Budget delete failed", error);
      toast.error("Budget delete failed. Please try again.");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData(emptyForm);
  };

  return (
    <AppLayout title="Budgets">
      <div className="page-heading mb-6">
        <span className="section-kicker">Planning</span>
        <h3 className="page-title text-2xl md:text-3xl">Monthly budget management</h3>
        <p className="page-copy">
          Set budgets for expense categories and track your spending progress with a more refined interface.
        </p>
      </div>

      <BudgetForm
        formData={formData}
        setFormData={setFormData}
        categories={categories}
        onSubmit={handleSubmit}
        editingId={editingId}
        onCancel={handleCancel}
      />

      <BudgetList
        budgets={budgets}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </AppLayout>
  );
}
