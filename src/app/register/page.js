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
    <main className="auth-shell">
      <div className="auth-card grid overflow-hidden rounded-[2rem] lg:grid-cols-[1.05fr_0.95fr]">
        <section className="bg-white p-6 md:p-10">
          <div className="mx-auto flex min-h-full max-w-md flex-col justify-center">
            <div className="mb-8 text-center">
              <span className="section-kicker mx-auto">Create account</span>
              <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                Start tracking smarter
              </h1>
              <p className="page-copy mx-auto mt-3 text-sm md:text-base">
                Set up your workspace in seconds and get a cleaner view of your money.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] border border-slate-200/80 bg-slate-50/90 p-6 shadow-lg shadow-slate-950/5 md:p-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Minimum 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-slate-950 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Creating..." : "Register"}
              </button>

              <p className="text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-slate-950 hover:text-slate-700">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </section>

        <aside className="auth-panel flex flex-col justify-between p-8 md:p-10">
          <div>
            <span className="profile-badge border border-white/10 bg-white/10 text-white/80">
              Fast setup
            </span>

            <h2 className="mt-6 max-w-md text-4xl font-black tracking-tight md:text-5xl">
              Build a better habit around your finances.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              Track every expense, set practical budgets, and see your progress in a clear, calm interface from day one.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="metric-pill">
              <p className="text-2xl font-black text-white">01</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">Create</p>
            </div>
            <div className="metric-pill">
              <p className="text-2xl font-black text-white">02</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">Track</p>
            </div>
            <div className="metric-pill">
              <p className="text-2xl font-black text-white">03</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">Improve</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}