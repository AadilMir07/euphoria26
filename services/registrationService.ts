import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
  type Timestamp,
} from "firebase/firestore";

import { db } from "@/lib/firestore";
import type { RegistrationData } from "@/store/registrationStore";

interface SavedRegistration extends RegistrationData {
  paymentScreenshot: string;
  paymentStatus: "Pending" | "Approved" | "Rejected";
}

export interface StoredRegistration extends SavedRegistration {
  id: string;
  createdAt?: number | null;
}

/**
 * Save a completed registration to Firestore.
 *
 * The registration document is only created after the payment
 * screenshot has successfully been uploaded.
 */
export async function saveRegistration(
  data: SavedRegistration
) {
  const registration = {
    ...data,
    fullName: data.fullName.trim(),
    enrollmentId: data.enrollmentId.trim(),
    phone: data.phone.trim(),
    email: data.email.trim(),
    school: data.school.trim(),
    programme: data.programme.trim(),
    year: data.year.trim(),
    paymentScreenshot: data.paymentScreenshot.trim(),
    paymentStatus: data.paymentStatus,
    createdAt: serverTimestamp(),
  };

  console.log("🔥 FIRESTORE: attempting addDoc");

try {
  const result = await addDoc(
    collection(db, "registrations"),
    registration
  );

  console.log("🔥 FIRESTORE: SUCCESS", result.id);

  return result;
} catch (error) {
  console.error("🔥 FIRESTORE: FAILED", error);
  throw error;
}
}

/**
 * Check whether an Enrollment ID already exists.
 *
 * Trimming here keeps this check consistent with the value
 * stored by saveRegistration().
 */
export async function enrollmentExists(
  enrollmentId: string
) {
  const normalizedEnrollmentId = enrollmentId.trim();

  if (!normalizedEnrollmentId) {
    return false;
  }

  const registrationsRef = collection(
    db,
    "registrations"
  );

  const q = query(
    registrationsRef,
    where(
      "enrollmentId",
      "==",
      normalizedEnrollmentId
    )
  );

  const snapshot = await getDocs(q);

  return !snapshot.empty;
}
