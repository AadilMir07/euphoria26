export const dynamic = "force-dynamic";

import { adminDb } from "@/lib/firebaseAdmin";

import StudentDetails from "@/components/admin/StudentDetails";
import { StoredRegistration } from "@/services/registrationService";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function StudentPage({
  params,
}: Props) {
  const { id } = await params;

  const snapshot = await adminDb
    .collection("registrations")
    .doc(id)
    .get();

  if (!snapshot.exists) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Student not found.
      </div>
    );
  }

  const data = snapshot.data() as Omit<
    StoredRegistration,
    "id" | "createdAt"
  > & {
    createdAt?: {
      toMillis: () => number;
    };
  };

  const student: StoredRegistration = {
    ...data,
    id,
    createdAt: data.createdAt
      ? data.createdAt.toMillis()
      : null,
  };

  return (
    <StudentDetails
      id={id}
      student={student}
    />
  );
}