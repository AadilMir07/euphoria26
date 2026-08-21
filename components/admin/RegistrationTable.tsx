import Link from "next/link";
import {
  ChevronRight,
  School,
  GraduationCap,
  Hash,
  SearchX,
} from "lucide-react";
import { StoredRegistration } from "@/services/registrationService";

type Props = {
  registrations: StoredRegistration[];
};

export default function RegistrationTable({
  registrations,
}: Props) {
  return (
    <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 px-8 py-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Student Registrations
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            {registrations.length} registration
            {registrations.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Empty */}
      {registrations.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">

          <div className="mb-5 rounded-full bg-violet-500/10 p-5">
            <SearchX
              size={42}
              className="text-violet-400"
            />
          </div>

          <h3 className="text-xl font-semibold text-white">
            No registrations found
          </h3>

          <p className="mt-2 max-w-sm text-zinc-500">
            Try changing the search keyword or
            selecting another filter.
          </p>

        </div>
      )}

      <div>

        {registrations.map((student) => {
          const statusStyle =
            student.paymentStatus === "Approved"
              ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
              : student.paymentStatus === "Rejected"
              ? "bg-red-500/10 border border-red-500/20 text-red-300"
              : "bg-yellow-500/10 border border-yellow-500/20 text-yellow-300";

          return (
            <Link
              key={student.id}
              href={`/admin/${student.id}`}
              className="group block border-b border-white/5 transition-all duration-300 hover:bg-white/[0.035]"
            >
              <div className="grid grid-cols-[70px_1.6fr_1fr_1.4fr_1fr_auto] items-center gap-6 px-8 py-6">

                {/* Avatar */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-xl font-bold text-violet-300 transition duration-300 group-hover:scale-105">
                  {student.fullName?.charAt(0)}
                </div>

                {/* Name */}
                <div>
                  <h3 className="font-semibold text-white transition group-hover:text-violet-300">
                    {student.fullName}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {student.email}
                  </p>
                </div>

                {/* Enrollment */}
                <div className="hidden lg:block">
                  <p className="mb-1 text-xs uppercase tracking-wider text-zinc-600">
                    Enrollment
                  </p>

                  <div className="flex items-center gap-2 text-zinc-300">
                    <Hash size={14} />
                    {student.enrollmentId}
                  </div>
                </div>

                {/* School */}
                <div className="hidden xl:block">
                  <p className="mb-1 text-xs uppercase tracking-wider text-zinc-600">
                    School
                  </p>

                  <div className="flex items-center gap-2 text-zinc-300">
                    <School size={15} />
                    {student.school}
                  </div>
                </div>

                {/* Programme */}
                <div className="hidden 2xl:block">
                  <p className="mb-1 text-xs uppercase tracking-wider text-zinc-600">
                    Programme
                  </p>

                  <div className="flex items-center gap-2 text-zinc-300">
                    <GraduationCap size={15} />
                    {student.programme}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center gap-5">

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 group-hover:scale-105 ${statusStyle}`}
                  >
                    {student.paymentStatus}
                  </span>

                  <ChevronRight
                    size={18}
                    className="text-zinc-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-400"
                  />

                </div>

              </div>
            </Link>
          );
        })}

      </div>

    </section>
  );
}