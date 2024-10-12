import { cn } from "@/lib/utils-common";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("container custom-section-padding", className)}
    >
      {children}
    </section>
  );
}

export function UniqueSection({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("custom-section-padding bg-muted/70", className)}
    >
      {children}
    </section>
  );
}

export function TopSection({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "bg-gradient-primary-light dark:bg-gradient-primary-dark custom-top-section-padding",
        className
      )}
    >
      {children}
    </section>
  );
}
