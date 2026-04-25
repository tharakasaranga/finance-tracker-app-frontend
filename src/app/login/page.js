"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const { loginUser } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
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

    try {
      setLoading(true);
      await loginUser(formData.email, formData.password);
      toast.success("Logged in successfully");
      router.push("/dashboard");
    } catch (err) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 text-sm mt-2">
            Login to continue your finance tracking
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border"
        >
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
            placeholder="Enter your password"
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
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center text-sm text-gray-500 mt-5">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-slate-950 font-medium">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
}