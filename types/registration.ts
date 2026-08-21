export interface Registration {
  fullName: string;
  enrollmentId: string;
  phone: string;
  email: string;

  school: string;
  course: string;
  year: string;

  paymentScreenshot: string;

  paymentStatus: "Pending" | "Verified" | "Rejected";

  createdAt: Date;
}