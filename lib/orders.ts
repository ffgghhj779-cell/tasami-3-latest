import type { TaskStatus } from "@prisma/client";
import { GOV_SLUGS, TECH_SLUGS, type GovKey, type TechKey } from "@/lib/content-keys";
import { GOV_OFFERINGS } from "@/lib/gov-offerings";

/** Public order number — the tail of the cuid, safe to share with the customer. */
export const ORDER_NO_LENGTH = 8;

export function orderNoFromId(id: string): string {
  return id.slice(-ORDER_NO_LENGTH).toUpperCase();
}

export function normalizeOrderNo(raw: string): string {
  return raw.replace(/[^a-z0-9]/gi, "").toLowerCase();
}

/** Customer-facing tracking steps (spec 3): استلمنا ← جاري التنفيذ ← بانتظار مستند منك ← تم */
export const TRACK_STEPS = ["received", "inProgress", "waitingDoc", "done"] as const;
export type TrackStep = (typeof TRACK_STEPS)[number] | "cancelled";

export function trackStepFor(status: TaskStatus): TrackStep {
  switch (status) {
    case "IN_PROGRESS":
      return "inProgress";
    case "WAITING":
      return "waitingDoc";
    case "COMPLETED":
    case "DONE":
      return "done";
    case "CANCELLED":
      return "cancelled";
    default:
      return "received";
  }
}

export type RequestLine = "gov" | "tech";

export type RequestOption = {
  id: string;
  line: RequestLine;
  /** Message path used for the label, e.g. gov.offerings.renewCr.title */
  labelKey: string;
  href: string;
  /** Same slug the service page sends, so admin groups requests together. */
  serviceSlug: string;
};

function offering(key: string): RequestOption {
  const def = GOV_OFFERINGS.find((o) => o.key === key);
  if (!def) throw new Error(`Unknown offering ${key}`);
  return {
    id: key,
    line: "gov",
    labelKey: `gov.offerings.${key}.title`,
    href: `/services/government/${GOV_SLUGS[def.category]}/${def.slug}`,
    serviceSlug: `gov-${GOV_SLUGS[def.category]}-${def.slug}`,
  };
}

function govCategory(key: GovKey): RequestOption {
  return {
    id: key,
    line: "gov",
    labelKey: `gov.items.${key}.title`,
    href: `/services/government/${GOV_SLUGS[key]}`,
    serviceSlug: `gov-${GOV_SLUGS[key]}`,
  };
}

function tech(key: TechKey): RequestOption {
  return {
    id: key,
    line: "tech",
    labelKey: `tech.items.${key}.title`,
    href: `/services/tech/${TECH_SLUGS[key]}`,
    serviceSlug: `tech-${TECH_SLUGS[key]}`,
  };
}

export const GOV_REQUEST_OPTIONS: RequestOption[] = [
  offering("workerIqamaRenew"),
  offering("transferSponsorship"),
  offering("changeProfession"),
  offering("renewCr"),
  offering("openCr"),
  offering("municipalLicense"),
  offering("vatFiling"),
  govCategory("gosi"),
  offering("domesticVisa"),
  offering("mudadWagesFile"),
];

export const TECH_REQUEST_OPTIONS: RequestOption[] = [
  tech("websites"),
  tech("mobile"),
  tech("automation"),
  tech("ai"),
  tech("marketing"),
];

export const HOME_POPULAR: RequestOption[] = [
  offering("workerIqamaRenew"),
  offering("transferSponsorship"),
  offering("renewCr"),
  offering("vatFiling"),
  tech("websites"),
  tech("automation"),
];

/** Three services shown on each department card on the home page. */
export const HOME_DEPARTMENT_SERVICES: Record<RequestLine, RequestOption[]> = {
  gov: [offering("workerIqamaRenew"), offering("renewCr"), offering("vatFiling")],
  tech: [tech("websites"), tech("mobile"), tech("automation")],
};
