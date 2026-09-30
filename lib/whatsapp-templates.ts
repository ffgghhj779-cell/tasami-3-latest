/**
 * Prefill WhatsApp messages — قسم التعقيب / القسم التقني.
 * Line layout is fixed by the client spec (4-ب); blanks are left for the
 * customer to fill when the message is opened without the request form.
 */

export type WaServiceKind = "government" | "tech" | "sector";
export type WaLine = "taqeeb" | "tech";

export type WaFields = {
  orderNo?: string;
  clientType?: string;
  service?: string;
  city?: string;
};

type Labels = {
  greet: string;
  wantTaqeeb: string;
  wantTech: string;
  orderNo: string;
  clientType: string;
  service: string;
  city: string;
  notes: string;
  need: string;
  home: string;
  inquiryFrom: (page: string) => string;
};

const LABELS: Record<string, Labels> = {
  ar: {
    greet: "السلام عليكم",
    wantTaqeeb: "أريد تعقيب معاملة حكومية",
    wantTech: "أريد خدمة تقنية",
    orderNo: "رقم الطلب",
    clientType: "نوع العميل",
    service: "الخدمة",
    city: "المدينة",
    notes: "ملاحظات",
    need: "وصف مختصر للاحتياج",
    home: "الرئيسية",
    inquiryFrom: (page) => `استفسار من صفحة ${page}`,
  },
  en: {
    greet: "Hello",
    wantTaqeeb: "I need help with a government transaction",
    wantTech: "I need a tech service",
    orderNo: "Order number",
    clientType: "Client type",
    service: "Service",
    city: "City",
    notes: "Notes",
    need: "Short description of the need",
    home: "Home",
    inquiryFrom: (page) => `Inquiry from page: ${page}`,
  },
  ur: {
    greet: "السلام علیکم",
    wantTaqeeb: "مجھے سرکاری معاملے کی تعقیب چاہیے",
    wantTech: "مجھے تکنیکی سروس چاہیے",
    orderNo: "آرڈر نمبر",
    clientType: "کلائنٹ کی قسم",
    service: "سروس",
    city: "شہر",
    notes: "نوٹس",
    need: "ضرورت کی مختصر تفصیل",
    home: "ہوم",
    inquiryFrom: (page) => `صفحہ ${page} سے استفسار`,
  },
  hi: {
    greet: "नमस्ते",
    wantTaqeeb: "मुझे सरकारी काम की फॉलो-अप सेवा चाहिए",
    wantTech: "मुझे तकनीकी सेवा चाहिए",
    orderNo: "ऑर्डर नंबर",
    clientType: "ग्राहक का प्रकार",
    service: "सेवा",
    city: "शहर",
    notes: "नोट्स",
    need: "ज़रूरत का संक्षिप्त विवरण",
    home: "होम",
    inquiryFrom: (page) => `पेज ${page} से पूछताछ`,
  },
};

function labelsFor(locale?: string): Labels {
  return LABELS[locale || "ar"] ?? LABELS.ar;
}

function line(label: string, value?: string): string {
  return value?.trim() ? `${label}: ${value.trim()}` : `${label}:`;
}

export function buildWhatsAppMessage(
  kind: WaLine,
  locale: string | undefined,
  fields: WaFields = {}
): string {
  const l = labelsFor(locale);
  return [
    l.greet,
    kind === "tech" ? l.wantTech : l.wantTaqeeb,
    line(l.orderNo, fields.orderNo),
    line(l.clientType, fields.clientType),
    line(l.service, fields.service),
    line(l.city, fields.city),
    kind === "tech" ? `${l.need}:` : `${l.notes}:`,
  ].join("\n");
}

export function homePageName(locale: string | undefined): string {
  return labelsFor(locale).home;
}

/** Buttons without the form: only «الخدمة» is filled with the current page. */
export function pageInquiry(locale: string | undefined, page: string): string {
  return labelsFor(locale).inquiryFrom(page);
}

export function taqeebWhatsAppMessage(
  serviceName: string,
  locale?: string
): string {
  return buildWhatsAppMessage("taqeeb", locale, { service: serviceName });
}

export function techWhatsAppMessage(
  serviceName: string,
  locale?: string
): string {
  return buildWhatsAppMessage("tech", locale, { service: serviceName });
}

export function whatsappPrefillFor(
  kind: WaServiceKind,
  serviceName: string,
  locale?: string
): string {
  if (kind === "tech") return techWhatsAppMessage(serviceName, locale);
  return taqeebWhatsAppMessage(serviceName, locale);
}
