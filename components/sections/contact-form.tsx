"use client";

import { useActionState, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { sendContactMessage } from "@/app/actions";
import {
  contactSchema,
  initialContactState,
  type ContactField,
} from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputBase =
  "mt-2 w-full rounded-xs border border-line bg-panel/40 px-4 py-3 text-sm text-bone transition-colors placeholder:text-steel/50 focus:border-signal/60";

function FieldError({ id, messages }: { id: string; messages?: string[] }) {
  if (!messages?.length) {
    return null;
  }

  return (
    <p id={id} className="mt-2 text-xs text-red-400">
      {messages[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactState,
  );
  const [clientErrors, setClientErrors] = useState<
    Partial<Record<ContactField, string[]>>
  >({});

  const errors: Partial<Record<ContactField, string[]>> = {
    ...state.errors,
    ...clientErrors,
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    if (!parsed.success) {
      event.preventDefault();
      setClientErrors(parsed.error.flatten().fieldErrors);
      return;
    }

    setClientErrors({});
  }

  return (
    <form
      action={formAction}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-steel"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={cn(inputBase, errors.name && "border-red-400/60")}
          />
          <FieldError id="contact-name-error" messages={errors.name} />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-steel"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={200}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={cn(inputBase, errors.email && "border-red-400/60")}
          />
          <FieldError id="contact-email-error" messages={errors.email} />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-steel"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          maxLength={2000}
          placeholder="What are you building?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(
            inputBase,
            "resize-y",
            errors.message && "border-red-400/60",
          )}
        />
        <FieldError id="contact-message-error" messages={errors.message} />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-line/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Send message
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </>
          )}
        </Button>

        <p
          role="status"
          className={cn(
            "text-sm",
            state.status === "success" && "text-emerald-300",
            state.status === "error" && "text-red-400",
            state.status === "idle" && "text-steel",
          )}
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}
