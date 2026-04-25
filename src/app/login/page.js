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
    <main className="auth-shell">
      <div className="auth-card grid overflow-hidden rounded-[2rem] lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="auth-panel flex flex-col justify-between p-8 md:p-10">
          <div>
            <span className="profile-badge border border-white/10 bg-white/10 text-white/80">
              Secure access
            </span>

            <h1 className="mt-6 max-w-md text-4xl font-black tracking-tight md:text-5xl">
              Welcome back to your financial command center.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
              Sign in to review budgets, transactions, and analytics in a calm, modern workspace built for quick decisions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3">
            <div className="metric-pill">
              <p className="text-2xl font-black text-white">24/7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">Access</p>
            </div>
            <div className="metric-pill">
              <p className="text-2xl font-black text-white">Live</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/55">Tracking</p>
            </div>
          </div>
        </aside>

        <section className="bg-white p-6 md:p-10">
          <div className="mx-auto flex min-h-full max-w-md flex-col justify-center">
            <div className="mb-8 text-center">
              <span className="section-kicker mx-auto">Sign in</span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                Login to continue
              </h2>
              <p className="page-copy mx-auto mt-3 text-sm md:text-base">
                Access your personalized finance tracking dashboard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.75rem] border border-slate-200/80 bg-slate-50/90 p-6 shadow-lg shadow-slate-950/5 md:p-8">
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
                  placeholder="Enter your password"
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
                {loading ? "Logging in..." : "Login"}
              </button>

              <p className="text-center text-sm text-slate-500">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="font-semibold text-slate-950 hover:text-slate-700">
                  Create account
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}