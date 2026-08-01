import type { CustomerStatus, TaskStatus, Sender } from "@prisma/client";

/** Brand-safe status tones (no default Tailwind blue/gray scales). */
export function customerStatusClass(status: CustomerStatus): string {
  switch (status) {
    case "ACTIVE":
      return "bg-tasami-gold/25 text-tasami-purple";
    case "VIP":
      return "bg-tasami-pink/20 text-tasami-purple";
    case "LEAD":
      return "bg-tasami-gold/15 text-tasami-gray";
    case "SLEEPING":
      return "bg-tasami-purple/8 text-tasami-gray";
    case "ANGRY":
    case "INACTIVE":
      return "bg-tasami-pink/25 text-tasami-purple";
    case "ARCHIVED":
      return "bg-tasami-purple/10 text-tasami-gray";
    default:
      return "bg-tasami-offwhite text-tasami-gray";
  }
}

export function taskStatusClass(status: TaskStatus): string {
  switch (status) {
    case "COMPLETED":
    case "DONE":
      return "bg-tasami-gold/25 text-tasami-purple";
    case "IN_PROGRESS":
      return "bg-tasami-pink/20 text-tasami-purple";
    case "WAITING":
      return "bg-tasami-gold/15 text-tasami-gray";
    case "CANCELLED":
      return "bg-tasami-pink/25 text-tasami-purple";
    case "PENDING":
    default:
      return "bg-tasami-purple/8 text-tasami-gray";
  }
}

export function StatusBadge({
  label,
  tone,
}: {
  label: string;
  tone: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide ${tone}`}
    >
      {label}
    </span>
  );
}

export function senderBubbleClass(sender: Sender): string {
  return sender === "CUSTOMER"
    ? "bg-tasami-pink/90 text-tasami-dark ms-auto"
    : sender === "BOT"
      ? "bg-white text-tasami-dark shadow-soft me-auto"
      : "bg-tasami-purple/10 text-tasami-purple me-auto";
}

export function formatDate(
  value: Date | string | null | undefined,
  locale: string
) {
  if (!value) return "—";
  const d = typeof value === "string" ? new Date(value) : value;
  return d.toLocaleString(locale === "ar" ? "ar-SA" : locale, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}
