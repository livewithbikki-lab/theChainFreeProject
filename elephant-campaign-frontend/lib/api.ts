const FALLBACK = "http://localhost:8000/api";

/** Base API URL (no trailing slash). */
export function getApiUrl(): string {
  const base = process.env.NEXT_PUBLIC_API_URL;
  if (!base || base === "undefined" || base.trim() === "") {
    return FALLBACK;
  }
  return base.replace(/\/$/, "");
}
