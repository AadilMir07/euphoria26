import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firestore";

export async function updatePaymentStatus(
  id: string,
  status: "Approved" | "Rejected"
) {
  await updateDoc(
    doc(db, "registrations", id),
    {
      paymentStatus: status,
    }
  );
}