import { NextResponse } from "next/server";

import { adminDb } from "@/lib/firebaseAdmin";
import { requireAdminSession } from "@/lib/adminSession";

const VALID_STATUSES = ["Approved", "Rejected"] as const;

type PaymentStatus = (typeof VALID_STATUSES)[number];

export async function PATCH(request: Request) {
  const admin = await requireAdminSession();

  if (!admin) {
    return NextResponse.json(
      { error: "Admin authentication required." },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();

    const id =
      typeof body?.id === "string" ? body.id.trim() : "";

    const status =
      typeof body?.status === "string"
        ? body.status
        : "";

    if (!id) {
      return NextResponse.json(
        { error: "Registration ID is required." },
        { status: 400 }
      );
    }

    if (
      !VALID_STATUSES.includes(
        status as PaymentStatus
      )
    ) {
      return NextResponse.json(
        { error: "Invalid payment status." },
        { status: 400 }
      );
    }

    const registrationRef = adminDb
      .collection("registrations")
      .doc(id);

    const snapshot = await registrationRef.get();

    if (!snapshot.exists) {
      return NextResponse.json(
        { error: "Registration not found." },
        { status: 404 }
      );
    }

    await registrationRef.update({
      paymentStatus: status,
    });

    return NextResponse.json({
      success: true,
      status,
    });
  } catch (error) {
    console.error(
      "Admin registration update failed:",
      error
    );

    return NextResponse.json(
      { error: "Unable to update registration." },
      { status: 500 }
    );
  }
}
