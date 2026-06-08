"use client";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function LaunchBanner() {
  const [launchCode, setLaunchCode] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const code = process.env.NEXT_PUBLIC_LAUNCH_CODE;
    if (code) {
      setLaunchCode(code);
    }
    setReady(true);
  }, []);

  if (!ready) return null;

  const formatted = format(new Date(), "dd MMM yyyy");

  return (
    <div style={{
      background: "#0d2e1a",
      border: "1px solid #14532d",
      borderRadius: "8px",
      padding: "1rem 1.5rem",
      marginTop: "1.5rem",
    }}>
      <p style={{ fontSize: "12px", color: "#4ade80", marginBottom: "4px", fontFamily: "monospace" }}>
        LAUNCH CODE VERIFIED ✓
      </p>
      <p style={{ fontSize: "20px", color: "#fff", fontWeight: "700", fontFamily: "monospace" }}>
        {launchCode}
      </p>
      <p style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px", fontFamily: "monospace" }}>
        Deployment date: {formatted}
      </p>
    </div>
  );
}
