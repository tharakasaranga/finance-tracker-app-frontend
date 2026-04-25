import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    default: "FinanceTrack",
    template: "%s | FinanceTrack",
  },
  description: "A polished personal finance and budget tracking experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased text-slate-900">
        <AuthProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: "14px",
                border: "1px solid rgba(148, 163, 184, 0.2)",
                background: "rgba(255, 255, 255, 0.96)",
                color: "#0f172a",
                boxShadow: "0 16px 40px rgba(15, 23, 42, 0.12)",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}