"use client";

import { useEffect, useState } from "react";
import AppLayout from "../../components/common/AppLayout";
import CategoryForm from "../../components/categories/CategoryForm";
import CategoryList from "../../components/categories/CategoryList";
import { useAuth } from "../../context/AuthContext";
import api from "../../lib/api";

import toast from "react-hot-toast";

export default function CategoriesPage() {
  const { currentUser, loading } = useAuth();
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "expense",
  });

  const getCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data.categories);
    } catch (error) {
      console.log("Failed to load categories", error);
    }
  };

  useEffect(() => {
    if (loading || !currentUser) {
      return;
    }

    getCategories();
  }, [currentUser, loading]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await api.put(`/categories/${editingId}`, formData);
        toast.success(editingId ? "Category updated" : "Category added");
      } else {
        await api.post("/categories", formData);
      }

      setFormData({
        name: "",
        type: "expense",
      });

      setEditingId(null);
      getCategories();
    } catch (error) {
      console.log("Category save failed", error);
      toast.error("Category save failed");
    }
  };

  const handleEdit = (category) => {
    setEditingId(category._id);

    setFormData({
      name: category.name,
      type: category.type,
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this category?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/categories/${id}`);
      toast.success("Category deleted");
      getCategories();
    } catch (error) {
      console.log("Category delete failed", error);
      toast.error("Category delete failed");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      name: "",
      type: "expense",
    });
  };

  return (
    <AppLayout title="Categories">
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-gray-900">
          Manage Categories
        </h3>
        <p className="text-sm text-gray-500">
          Create income and expense categories for your transactions.
        </p>
      </div>

      <CategoryForm
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
        editingId={editingId}
        onCancel={handleCancel}
      />

      <CategoryList
        categories={categories}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </AppLayout>
  );
}
