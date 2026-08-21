"use client";

import { useMemo, useState } from "react";

import StatsCards from "@/components/admin/StatsCards";
import Toolbar from "@/components/admin/Toolbar";
import RegistrationTable from "@/components/admin/RegistrationTable";
import ExportExcelButton from "../../../components/admin/ExportExcelButton";
import { StoredRegistration } from "@/services/registrationService";

type Props = {
  registrations: StoredRegistration[];
  total: number;
  pending: number;
  approved: number;
  rejected: number;
};

type Filter =
  | "All"
  | "Pending"
  | "Approved"
  | "Rejected";

export default function DashboardClient({
  registrations,
  total,
  pending,
  approved,
  rejected,
}: Props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] =
    useState<Filter>("All");

  const filteredRegistrations = useMemo(() => {
    return registrations.filter((student) => {
      const matchesSearch =
        student.fullName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        student.email
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        student.enrollmentId
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        filter === "All"
          ? true
          : student.paymentStatus === filter;

      return matchesSearch && matchesStatus;
    });
  }, [registrations, search, filter]);

  return (
    <>
      <StatsCards
        total={total}
        pending={pending}
        approved={approved}
        rejected={rejected}
      />

      <div className="mb-6 flex justify-end">
        <ExportExcelButton registrations={registrations} />
      </div>

      <Toolbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      <RegistrationTable
        registrations={filteredRegistrations}
      />
    </>
  );
}