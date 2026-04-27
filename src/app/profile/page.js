"use client";

import { useAuth } from "../../context/AuthContext";

export default function page() {
  const { currentUser } = useAuth();

  const joinedOn = currentUser?.metadata?.creationTime
    ? new Date(currentUser.metadata.creationTime).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Recently";

  return (
    <>
      <div className="page-heading mb-6">
        <span className="section-kicker">Account overview</span>
        <h3 className="page-title text-2xl md:text-3xl">Profile and account details</h3>
        <p className="page-copy">
          Keep an eye on your identity details and sign-in status from one polished screen.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="app-section rounded-[1.75rem] p-6 md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-950 text-2xl font-black text-white shadow-lg shadow-slate-950/20">
              {(currentUser?.displayName || currentUser?.email || "P").slice(0, 1).toUpperCase()}
            </div>

            <div>
              <span className="profile-badge border border-emerald-200 bg-emerald-50 text-emerald-700">
                Active account
              </span>
              <h4 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                {currentUser?.displayName || "Profile user"}
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                {currentUser?.email || "No email available"}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email verification</p>
              <p className="mt-2 text-lg font-bold text-slate-950">
                {currentUser?.emailVerified ? "Verified" : "Not verified"}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Member since</p>
              <p className="mt-2 text-lg font-bold text-slate-950">{joinedOn}</p>
            </div>
          </div>
        </section>

        <section className="app-section rounded-[1.75rem] p-6 md:p-8">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h4 className="text-xl font-bold tracking-tight text-slate-950">
                Account status
              </h4>
              <p className="mt-1 text-sm text-slate-500">
                A quick summary of the current session and account activity.
              </p>
            </div>

            <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Live
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-950 p-4 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">Signed in</p>
              <p className="mt-2 text-xl font-black">Yes</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Username</p>
              <p className="mt-2 text-lg font-bold text-slate-950">{currentUser?.displayName || "—"}</p>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Session</p>
              <p className="mt-2 text-lg font-bold text-slate-950">Secure</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
