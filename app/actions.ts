"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import {
  contactSchema,
  type ContactField,
  type ContactState,
} from "@/lib/validations";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

// Best-effort limiter for a single server instance. Replace with a shared store
// (for example Vercel KV) if the site sees real traffic.
const recentSubmissions = new Map<string, { count: number; resetAt: number }>();

async function isRateLimited() {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");
  const key = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const record = recentSubmissions.get(key);

  if (!record || record.resetAt <= now) {
    if (recentSubmissions.size > 1_000) {
      recentSubmissions.clear();
    }

    recentSubmissions.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  record.count += 1;
  return record.count > RATE_LIMIT;
}

export async function sendContactMessage(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = formData.get("website");

  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return {
      status: "success",
      message: "Thanks — your message has been sent.",
    };
  }

  if (await isRateLimited()) {
    return {
      status: "error",
      message: "Too many messages in a short time. Please try again in a minute.",
    };
  }

  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    const errors: Partial<Record<ContactField, string[]>> = {
      name: fieldErrors.name,
      email: fieldErrors.email,
      message: fieldErrors.message,
    };

    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return {
      status: "error",
      message: "The form is not configured yet. Please email me directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `Portfolio message from ${parsed.data.name}`,
      text: `${parsed.data.message}\n\nReply to: ${parsed.data.name} <${parsed.data.email}>`,
    });

    if (error) {
      return {
        status: "error",
        message:
          "Your message could not be sent. Please try again or email me directly.",
      };
    }
  } catch {
    return {
      status: "error",
      message:
        "Your message could not be sent. Please try again or email me directly.",
    };
  }

  return {
    status: "success",
    message: "Thanks — your message has been sent. I will get back to you soon.",
  };
}
