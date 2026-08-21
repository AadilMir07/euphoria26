import "server-only";

import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebaseAdmin";

const SESSION_COOKIE = "euphoria_admin_session";

export async function getAdminSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;

  if (!session) {
    return null;
  }

  try {
    return await adminAuth.verifySessionCookie(session, true);
  } catch {
    return null;
  }
}

export async function requireAdminSession() {
  const decoded = await getAdminSession();

  if (!decoded || decoded.admin !== true) {
    return null;
  }

  return decoded;
}