import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  titleId?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("grid gap-8 md:grid-cols-12 md:gap-6", className)}>
      <div className="md:col-span-3">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-steel">
          {eyebrow}
        </p>
        <span
          className="mt-3 block h-px w-8 bg-signal/70"
          aria-hidden="true"
        />
      </div>
      <div className="md:col-span-9">
        <h2
          id={titleId}
          className="text-balance font-display display-wide text-section font-semibold"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
