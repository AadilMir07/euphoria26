// Single source of truth for Firebase initialization lives in
// ./firestore.ts — re-exported here so existing imports of
// "@/lib/firebase" keep working without duplicating the config.
import { app } from "./firestore";

export { app };