"use client";

import { usePathname } from "next/navigation";
import AppLayout from "./AppLayout";

const protectedTitles = {
  "/dashboard": "Dashboard",
  "/transactions": "Transactions",
  "/budgets": "Budgets",
  "/categories": "Categories",
  "/profile": "Profile",
};

export default function RouteShell({ children }) {
  const pathname = usePathname();
  const title = protectedTitles[pathname];

  if (!title) {
    return children;
  }

  return <AppLayout title={title}>{children}</AppLayout>;
}