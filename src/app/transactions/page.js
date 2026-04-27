"use client";

import { useEffect, useState } from "react";
import TransactionForm from "../../components/transactions/TransactionForm";
import TransactionFilters from "../../components/transactions/TransactionFilters";
import TransactionList from "../../components/transactions/TransactionList";
import { useAuth } from "../../context/AuthContext";
import api from "../../lib/api";
import toast from "react-hot-toast";

const emptyForm = {
  title: "",
  amount: "",
  category: "",
  type: "expense",
  date: new Date().toISOString().split("T")[0],
  note: "",
};

const emptyFilters = {
  type: "",
  category: "",
  startDate: "",
  endDate: "",
};

export default function TransactionsPage() {
  const { currentUser, loading } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState(emptyForm);
  const [filters, setFilters] = useState(emptyFilters);

  const getCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data.categories);
    } catch (error) {
      console.log("Failed to load categories", error);
    }
  };

  const getTransactions = async () => {
    try {
      const params = {};

      if (filters.type) params.type = filters.type;
      if (filters.category) params.category = filters.category;
      if (filters.startDate) params.startDate = filters.startDate;
      if (filters.endDate) params.endDate = filters.endDate;

      const res = await api.get("/transactions", { params });
      setTransactions(res.data.transactions);
    } catch (error) {
      console.log("Failed to load transactions", error);
    }
  };

  useEffect(() => {
    if (loading || !currentUser) {
      return;
    }

    getCategories();
  }, [currentUser, loading]);

  useEffect(() => {
    if (loading || !currentUser) {
      return;
    }

    getTransactions();
  }, [currentUser, loading, filters]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        amount: Number(formData.amount),
      };

      if (editingId) {
        await api.put(`/transactions/${editingId}`, payload);
        toast.success("Transaction updated successfully");
      } else {
        await api.post("/transactions", payload);
        toast.success("Transaction created successfully");
      }

      setFormData(emptyForm);
      setEditingId(null);
      getTransactions();
    } catch (error) {
      console.log("Transaction save failed", error);
    }
  };

  const handleEdit = (transaction) => {
    setEditingId(transaction._id);

    setFormData({
      title: transaction.title,
      amount: transaction.amount,
      category: transaction.category,
      type: transaction.type,
      date: transaction.date.split("T")[0],
      note: transaction.note || "",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this transaction?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/transactions/${id}`);
      toast.success("Transaction deleted successfully");
      getTransactions();
    } catch (error) {
      console.log("Transaction delete failed", error);
      toast.error("Transaction delete failed");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData(emptyForm);
  };

  const handleClearFilters = () => {
    setFilters(emptyFilters);
  };

  return (
    <>
      <div className="page-heading mb-6">
        <span className="section-kicker">Records</span>
        <h3 className="page-title text-2xl md:text-3xl">Income and expense records</h3>
        <p className="page-copy">
          Add, edit, delete, and filter transactions with a more polished workspace.
        </p>
      </div>

      <TransactionForm
        formData={formData}
        setFormData={setFormData}
        categories={categories}
        onSubmit={handleSubmit}
        editingId={editingId}
        onCancel={handleCancel}
      />

      <TransactionFilters
        filters={filters}
        setFilters={setFilters}
        categories={categories}
        onClear={handleClearFilters}
      />

      <TransactionList
        transactions={transactions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
}
