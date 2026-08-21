export const dynamic = "force-dynamic";

import { adminDb } from "@/lib/firebaseAdmin";

import AdminNavbar from "@/components/admin/AdminNavbar";
import DashboardClient from "./DashboardClient";

export default async function AdminDashboard() {
  const snapshot = await adminDb
    .collection("registrations")
    .get();

  const registrations = snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      fullName: data.fullName ?? "",
      email: data.email ?? "",
      phone: data.phone ?? "",
      school: data.school ?? "",
      programme: data.programme ?? "",
      year: data.year ?? "",
      enrollmentId: data.enrollmentId ?? "",
      paymentStatus: data.paymentStatus ?? "Pending",
      paymentScreenshot: data.paymentScreenshot ?? "",
    };
  });

  const total = registrations.length;

  const pending = registrations.filter(
    (student) => student.paymentStatus === "Pending"
  ).length;

  const approved = registrations.filter(
    (student) => student.paymentStatus === "Approved"
  ).length;

  const rejected = registrations.filter(
    (student) => student.paymentStatus === "Rejected"
  ).length;

  return (
    <main className="min-h-screen bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <AdminNavbar />

        <DashboardClient
          registrations={registrations}
          total={total}
          pending={pending}
          approved={approved}
          rejected={rejected}
        />
      </div>
    </main>
  );
}