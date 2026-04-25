"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {
  const { registerUser } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      await registerUser(formData.name, formData.email, formData.password);
      toast.success("Account created successfully");
      router.push("/dashboard");
    } catch (err) {
      toast.error("Registration failed. Try another email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 text-sm mt-2">
            Start tracking your personal finances
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border"
        >
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 mt-1 mb-4 text-sm bg-white"
            required
          />

          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 mt-1 mb-4 text-sm bg-white"
            required
          />

          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Minimum 6 characters"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 mt-1 mb-5 text-sm bg-white"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-950 hover:bg-slate-800 text-white py-3 rounded-lg font-medium disabled:opacity-60"
          >
            {loading ? "Creating..." : "Register"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-slate-950 font-medium">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}