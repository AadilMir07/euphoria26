import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import fs from "fs";

const credentialsPath = process.env.FIREBASE_SERVICE_ACCOUNT;

console.log("Starting admin setup...");

if (!credentialsPath) {
  console.error(
    "❌ FIREBASE_SERVICE_ACCOUNT environment variable is missing."
  );
  process.exit(1);
}

if (!fs.existsSync(credentialsPath)) {
  console.error(
    `❌ Service account file not found:\n${credentialsPath}`
  );
  process.exit(1);
}

const serviceAccount = JSON.parse(
  fs.readFileSync(credentialsPath, "utf8")
);

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const auth = getAuth();

const email = "aadilmir1208@gmail.com";

try {
  const user = await auth.getUserByEmail(email);

  console.log(`Found Firebase user: ${user.email}`);
  console.log(`UID: ${user.uid}`);

  await auth.setCustomUserClaims(user.uid, {
    ...(user.customClaims || {}),
    admin: true,
  });

  console.log("");
  console.log("✅ ADMIN ACCESS GRANTED");
  console.log(`Email: ${user.email}`);
  console.log("");
  console.log(
    "Sign out and sign back in to refresh the admin token."
  );
} catch (error) {
  console.error("");
  console.error("❌ Failed to set admin claim.");
  console.error(error);
  process.exit(1);
}