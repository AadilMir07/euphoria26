"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/lib/firestore";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Login page should never be protected
    if (pathname === "/admin/login") {
      setLoading(false);
      setAuthorized(true);
      return;
    }

    // Safety net: some mobile browsers (Safari private mode,
    // in-app browsers from Instagram/WhatsApp, etc.) can block or
    // stall IndexedDB, which onAuthStateChanged relies on — leaving
    // this spinner running forever with no fallback. If Firebase
    // hasn't responded within a few seconds, bail to the login
    // page instead of spinning indefinitely.
    const timeout = setTimeout(() => {
      router.replace("/admin/login");
    }, 6000);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      clearTimeout(timeout);

      if (user) {
        setAuthorized(true);
        setLoading(false);
      } else {
        // Do NOT flip authorized to true, and don't stop
        // loading until we've actually navigated away —
        // otherwise protected content flashes for a frame
        // before the redirect takes effect.
        router.replace("/admin/login");
      }
    });

    return () => {
      clearTimeout(timeout);
      unsubscribe();
    };
  }, [pathname, router]);

  if (loading || !authorized) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />
      </div>
    );
  }

  return <>{children}</>;
}