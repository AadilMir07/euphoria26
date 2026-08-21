import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebaseAdmin";

const COOKIE_NAME = "euphoria_admin_session";
const EXPIRES_IN = 1000 * 60 * 60 * 24 * 5;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const idToken =
      typeof body?.idToken === "string"
        ? body.idToken
        : "";

    if (!idToken) {
      return NextResponse.json(
        { error: "Missing Firebase ID token." },
        { status: 400 }
      );
    }

    const decoded = await adminAuth.verifyIdToken(idToken);

    if (decoded.admin !== true) {
      return NextResponse.json(
        { error: "Admin access required." },
        { status: 403 }
      );
    }

    const sessionCookie =
      await adminAuth.createSessionCookie(
        idToken,
        {
          expiresIn: EXPIRES_IN,
        }
      );

    const response = NextResponse.json({
      ok: true,
    });

    response.cookies.set(
      COOKIE_NAME,
      sessionCookie,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: EXPIRES_IN / 1000,
      }
    );

    return response;
  } catch (error) {
    console.error(
      "Admin session creation failed:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Unable to create admin session.",
      },
      { status: 401 }
    );
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    ok: true,
  });

  response.cookies.set(
    COOKIE_NAME,
    "",
    {
      httpOnly: true,
      secure:
        process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    }
  );

  return response;
}