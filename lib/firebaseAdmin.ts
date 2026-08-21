import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getAuth } from "firebase-admin/auth";

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;

if (!projectId) {
  throw new Error("Missing FIREBASE_PROJECT_ID");
}

if (!clientEmail) {
  throw new Error("Missing FIREBASE_CLIENT_EMAIL");
}

if (!privateKeyRaw) {
  throw new Error("Missing FIREBASE_PRIVATE_KEY");
}

// Normalize the private key.
// Handles both literal \\n characters and actual newlines.
const privateKey = privateKeyRaw
  .replace(/^"|"$/g, "")
  .replace(/\\n/g, "\n")
  .trim();

if (
  !privateKey.includes("-----BEGIN PRIVATE KEY-----") ||
  !privateKey.includes("-----END PRIVATE KEY-----")
) {
  throw new Error(
    "FIREBASE_PRIVATE_KEY does not contain a valid PEM private key."
  );
}

const adminApp =
  getApps().length > 0
    ? getApps()[0]
    : initializeApp({
        credential: cert({
          projectId,
          clientEmail,
          privateKey,
        }),
      });

export const adminDb = getFirestore(adminApp);

export const adminAuth = getAuth(adminApp);