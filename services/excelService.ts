"use client";

import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { StoredRegistration } from "@/services/registrationService";

export async function exportRegistrations(
  registrations: StoredRegistration[]
) {
  const workbook = new ExcelJS.Workbook();

  const sheet = workbook.addWorksheet("Registrations");

  sheet.columns = [
    { header: "Full Name", key: "fullName", width: 28 },
    { header: "Enrollment ID", key: "enrollmentId", width: 18 },
    { header: "School", key: "school", width: 22 },
    { header: "Programme", key: "programme", width: 20 },
    { header: "Year", key: "year", width: 15 },
    { header: "Phone", key: "phone", width: 18 },
    { header: "Email", key: "email", width: 35 },
    { header: "Status", key: "paymentStatus", width: 16 },
  ];

  sheet.getRow(1).font = {
    bold: true,
    color: { argb: "FFFFFFFF" },
  };

  sheet.getRow(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF6D28D9" },
  };

  registrations.forEach((student) => {
    sheet.addRow({
      fullName: student.fullName,
      enrollmentId: student.enrollmentId,
      school: student.school,
      programme: student.programme,
      year: student.year,
      phone: student.phone,
      email: student.email,
      paymentStatus: student.paymentStatus,
    });
  });

  sheet.autoFilter = {
    from: "A1",
    to: "H1",
  };

  const buffer = await workbook.xlsx.writeBuffer();

  saveAs(
    new Blob([buffer]),
    "EUPHORIA_Registrations.xlsx"
  );
}