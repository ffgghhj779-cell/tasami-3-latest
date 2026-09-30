/**
 * Real completed transactions for «نماذج من أعمالنا».
 * Before adding one: customer consent, and remove ID/iqama numbers, names,
 * phones, order numbers, QR/barcodes and image metadata. Never publish a
 * screenshot that shows a logged-in platform session.
 */
export type WorkSample = {
  id: string;
  line: "gov" | "tech";
  service: string;
  /** e.g. «٣ أيام عمل» */
  duration: string;
  result: string;
  /** Anonymised screenshot under /public/work/ */
  image?: string;
  date: string;
};

export const WORK_SAMPLES: WorkSample[] = [];
