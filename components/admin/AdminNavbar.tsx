"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, ShieldCheck, ChevronDown } from "lucide-react";

import { logout } from "@/lib/auth";

export default function AdminNavbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    try {
      setLoading(true);

      await logout();

      router.replace("/admin/login");
    } catch (err) {
      console.error(err);
      alert("Failed to logout.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <header className="mb-8 rounded-[28px] border border-white/10 bg-[#111111]/90 px-10 py-5 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-black tracking-tight">
            <span className="text-white">
              EUPHORIA
            </span>{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              ADMIN
            </span>
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Registration Management Dashboard
          </p>
        </div>

        <div className="relative">

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300 transition hover:bg-violet-500/20"
          >
            <ShieldCheck size={18} />
            Admin
            <ChevronDown
              size={16}
              className={`transition ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-2xl border border-white/10 bg-[#171717] shadow-2xl">

              <div className="border-b border-white/10 px-5 py-4">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Logged in as
                </p>

                <p className="mt-1 font-semibold text-white">
                  Administrator
                </p>
              </div>

              <button
                onClick={handleLogout}
                disabled={loading}
                className="flex w-full items-center gap-3 px-5 py-4 text-left text-red-400 transition hover:bg-red-500/10"
              >
                <LogOut size={18} />

                {loading ? "Logging out..." : "Logout"}
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}