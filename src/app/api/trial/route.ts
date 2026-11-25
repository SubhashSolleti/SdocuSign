import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";

// Receives the trial form as a plain HTML POST, so it works without JavaScript.
// Stores each request as one JSON line in web/data/ (git-ignored) and redirects
// to a confirmation page. Production should forward to the sales inbox instead.

const DATA_DIR = path.join(process.cwd(), "data");
const FILE = path.join(DATA_DIR, "trial-requests.jsonl");
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Small in-memory rate limit per address (resets on restart).
const hits = new Map<string, { n: number; t: number }>();
function limited(ip: string) {
  const now = Date.now();
  const h = hits.get(ip);
  if (!h || now - h.t > 10 * 60_000) {
    hits.set(ip, { n: 1, t: now });
    return false;
  }
  h.n += 1;
  return h.n > 5;
}

const field = (f: FormData, k: string, max: number) => String(f.get(k) ?? "").trim().slice(0, max);

export async function POST(request: Request) {
  const form = await request.formData();
  const lang = field(form, "lang", 2) === "ar" ? "ar" : "en";
  const to = (p: string) => new Response(null, { status: 303, headers: { Location: `/${lang}/${p}` } });

  // Honeypot: bots fill the hidden field; answer as if it worked.
  if (field(form, "website", 200)) return to("thanks");

  const ip = (request.headers.get("x-forwarded-for") ?? "local").split(",")[0].trim();
  if (limited(ip)) return to("not-sent");

  const entry = {
    receivedAt: new Date().toISOString(),
    lang,
    organisation: field(form, "organisation", 200),
    name: field(form, "name", 200),
    email: field(form, "email", 254),
    role: field(form, "role", 100),
    message: field(form, "message", 4000),
    // A fingerprint of the address, not the address itself (matches the privacy notice).
    sourceHash: createHash("sha256").update(ip).digest("hex").slice(0, 16),
  };

  if (!entry.organisation || !entry.name || !EMAIL.test(entry.email)) return to("not-sent");

  await mkdir(DATA_DIR, { recursive: true });
  await appendFile(FILE, JSON.stringify(entry) + "\n", "utf8");
  return to("thanks");
}
