import { NextResponse } from "next/server";

import { adminDb } from "@/lib/firebaseAdmin";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      fullName,
      enrollmentId,
      phone,
      email,
      school,
      programme,
      year,
      paymentScreenshot,
      paymentStatus,
    } = data;

    if (
      typeof fullName !== "string" ||
      typeof enrollmentId !== "string" ||
      typeof phone !== "string" ||
      typeof email !== "string" ||
      typeof school !== "string" ||
      typeof programme !== "string" ||
      typeof year !== "string" ||
      typeof paymentScreenshot !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid registration data." },
        { status: 400 }
      );
    }

    if (paymentStatus !== "Pending") {
      return NextResponse.json(
        { error: "Invalid payment status." },
        { status: 400 }
      );
    }

    const normalizedEnrollmentId = enrollmentId.trim();

    if (!normalizedEnrollmentId) {
      return NextResponse.json(
        { error: "Enrollment ID is required." },
        { status: 400 }
      );
    }

    // Prevent duplicate registrations.
    const existingSnapshot = await adminDb
      .collection("registrations")
      .where("enrollmentId", "==", normalizedEnrollmentId)
      .limit(1)
      .get();

    if (!existingSnapshot.empty) {
      return NextResponse.json(
        {
          error:
            "This Enrollment ID is already registered.",
        },
        { status: 409 }
      );
    }

    const registrationRef = await adminDb
      .collection("registrations")
      .add({
        fullName: fullName.trim(),
        enrollmentId: normalizedEnrollmentId,
        phone: phone.trim(),
        email: email.trim(),
        school: school.trim(),
        programme: programme.trim(),
        year: year.trim(),
        paymentScreenshot: paymentScreenshot.trim(),
        paymentStatus: "Pending",
        createdAt: new Date(),
      });

    console.log(
      "Registration saved successfully:",
      registrationRef.id
    );

    return NextResponse.json(
      {
        success: true,
        id: registrationRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Registration API failed:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to save registration.",
      },
      { status: 500 }
    );
  }
}