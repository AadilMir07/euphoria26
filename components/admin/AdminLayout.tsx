import { ReactNode } from "react";

import PageBackground from "@/components/ui/PageBackground";

import AdminNavbar from "./AdminNavbar";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({
  children,
}: Props) {
  return (
    <PageBackground>
      <main className="min-h-screen">

        <div className="mx-auto max-w-7xl px-6 py-8">

          <AdminNavbar />

          {children}

        </div>

      </main>
    </PageBackground>
  );
}