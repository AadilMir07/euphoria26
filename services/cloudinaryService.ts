export async function uploadPaymentScreenshot(file: File) {
  const formData = new FormData();

  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
  );

  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to upload image.");
  }

  return await response.json();
}