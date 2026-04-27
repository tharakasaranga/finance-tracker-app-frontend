"use client";

import { useEffect, useState } from "react";
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
        toast.success("Category updated successfully");
      } else {
        await api.post("/categories", formData);
        toast.success("Category created successfully");
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
      toast.success("Category deleted successfully");
      getCategories();
    } catch (error) {
      console.log("Category delete failed", error);
      toast.error("Category delete failed. Please try again.");
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
    <>
      <div className="page-heading mb-6">
        <span className="section-kicker">Organization</span>
        <h3 className="page-title text-2xl md:text-3xl">Manage categories</h3>
        <p className="page-copy">
          Create income and expense categories for your transactions with a cleaner presentation.
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
    </>
  );
}
