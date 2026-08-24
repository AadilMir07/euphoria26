import type { NextConfig } from "next";
import os from "os";

// Auto-detect this computer's LAN IP address(es) so the dev
// server's JS bundle isn't blocked when opened from a phone on
// the same Wi-Fi (Next.js 16 blocks cross-origin dev asset
// requests by default). This removes the need to manually type
// in an IP, which is the #1 place this goes wrong.
function getLocalNetworkIPs(): string[] {
  const interfaces = os.networkInterfaces();
  const ips: string[] = [];

  for (const ifaceList of Object.values(interfaces)) {
    for (const iface of ifaceList ?? []) {
      if (iface.family === "IPv4" && !iface.internal) {
        ips.push(iface.address);
      }
    }
  }

  return ips;
}

const nextConfig: NextConfig = {
  allowedDevOrigins: getLocalNetworkIPs(),

  serverExternalPackages: ["firebase-admin"],
};

export default nextConfig;
