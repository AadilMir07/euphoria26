import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "./firestore";

export function login(
  email: string,
  password: string
) {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
}

export async function logout() {
  try {
    await fetch("/api/admin/session", {
      method: "DELETE",
    });
  } finally {
    await signOut(auth);
  }
}