/**
 * Prefill WhatsApp messages — Ibrahim (gov) / Mustafa (tech).
 * First auto-reply after send is handled on the WhatsApp account, not here.
 */

export type WaServiceKind = "government" | "tech" | "sector";

/** Ibrahim — government / taqeeb */
export function taqeebWhatsAppMessage(serviceName: string): string {
  return [
    "السلام عليكم",
    "أريد تعقيب معاملة حكومية",
    `الخدمة: ${serviceName}`,
    "المنشأة / الفرد:",
    "المدينة:",
  ].join("\n");
}

/** Mustafa — tech solutions */
export function techWhatsAppMessage(serviceName: string): string {
  return [
    "السلام عليكم",
    "أريد خدمة تقنية",
    `الخدمة: ${serviceName}`,
    "وصف سريع للاحتياج:",
  ].join("\n");
}

export function whatsappPrefillFor(
  kind: WaServiceKind,
  serviceName: string
): string {
  if (kind === "tech") return techWhatsAppMessage(serviceName);
  return taqeebWhatsAppMessage(serviceName);
}
