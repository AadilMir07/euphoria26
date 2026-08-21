import { NextResponse } from "next/server";

import { transporter } from "@/lib/mailer";
import {
  approvalEmail,
  rejectionEmail,
} from "@/lib/emailTemplates";

// Verifies the Firebase ID token using Firebase's own free
// "accounts:lookup" REST endpoint — no paid service, no extra
// npm package required (avoids needing firebase-admin).
async function isAuthenticatedAdmin(req: Request) {
  const authHeader = req.headers.get("authorization") || "";
  const idToken = authHeader.replace("Bearer ", "").trim();

  if (!idToken) return false;

  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    }
  );

  if (!res.ok) return false;

  const data = await res.json();
  return Array.isArray(data.users) && data.users.length > 0;
}

export async function POST(req: Request) {
  try {
    if (!(await isAuthenticatedAdmin(req))) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { email, name, status } = await req.json();

    const html =
      status === "Approved"
        ? approvalEmail(name)
        : rejectionEmail(name);

    await transporter.sendMail({
      from: {
        name: "Team EUPHORIA '26",
        address: process.env.EMAIL_USER!,
      },

      replyTo: process.env.EMAIL_USER,

      to: email,

      subject:
        status === "Approved"
          ? "🎉 Your EUPHORIA '26 Registration Approved"
          : "EUPHORIA '26 Payment Verification",

      html,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error("EMAIL ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error: String(err),
      },
      {
        status: 500,
      }
    );
  }
}