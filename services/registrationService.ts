import {
  collection,
  getDocs,
  query,
  where,
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
 * Save a completed registration through the server API.
 *
 * The Firestore write is performed by Firebase Admin on the
 * server instead of directly from the browser.
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
  };

  console.log("🔥 REGISTRATION API: sending registration...");

  try {
    const response = await fetch("/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registration),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result?.error || "Failed to save registration."
      );
    }

    console.log(
      "🔥 REGISTRATION API: SUCCESS",
      result.id
    );

    return result;
  } catch (error) {
    console.error(
      "🔥 REGISTRATION API: FAILED",
      error
    );

    throw error;
  }
}

/**
 * Check whether an Enrollment ID already exists.
 *
 * This remains a browser-side Firestore read for now.
 */
export async function enrollmentExists(
  enrollmentId: string
) {
  const normalizedEnrollmentId =
    enrollmentId.trim();

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