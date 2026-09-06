import type { ServiceSeoPack } from "./types";

/**
 * On-page SEO packs for high-value services.
 * FAQs are operational (how Tasami helps) — not invented legal fees/rules.
 */
export const SERVICE_SEO_PACKS: Record<string, ServiceSeoPack> = {
  transferSponsorship: {
    id: "transferSponsorship",
    primaryKeyword: "نقل كفالة",
    secondaryKeywords: [
      "نقل خدمات عامل",
      "نقل كفالة عامل",
      "معقب نقل كفالة",
      "نقل خدمات قوى",
    ],
    semanticKeywords: [
      "sponsorship transfer",
      "kafala transfer",
      "worker transfer Saudi",
      "نقل كفاله",
    ],
    faqs: [
      {
        q: "ما الفرق بين نقل كفالة ونقل خدمات؟",
        a: "في الاستخدام الشائع يشيران لنفس الاحتياج: نقل العامل إلى منشأة أو كفيل جديد عبر المنصات الرسمية. فريق تسامي يوجّهك للمسار الصحيح حسب حالتك.",
      },
      {
        q: "هل تنجز تسامي نقل الكفالة نيابةً عني؟",
        a: "نعم — نستلم طلبك، نراجع المستندات، ونتابع الإجراء عبر القنوات الرسمية حتى اكتمال النقل، مع تحديثك عبر واتساب.",
      },
      {
        q: "ماذا أحتاج لبدء طلب نقل خدمات؟",
        a: "عادةً بيانات المنشأة والعامل وصلاحيات المنصات ذات العلاقة. عند إرسال الطلب نحدد لك المستندات المطلوبة لحالتك بدقة.",
      },
    ],
  },
  workerIqamaRenew: {
    id: "workerIqamaRenew",
    primaryKeyword: "تجديد إقامة عامل",
    secondaryKeywords: ["تجديد إقامة", "تجديد اقامة وافد", "معقب تجديد إقامة"],
    semanticKeywords: ["iqama renewal", "renew worker iqama"],
    faqs: [
      {
        q: "متى أبدأ تجديد إقامة العامل؟",
        a: "يُفضّل البدء قبل انتهاء الصلاحية بوقت كافٍ لتفادي التعطيل. أرسل تاريخ انتهاء الإقامة ونتابع التجديد معك.",
      },
      {
        q: "هل يمكن التجديد عبر تسامي؟",
        a: "نعم. نجهّز الطلب عبر المنصات المعتمدة ونتابع حتى إصدار التجديد، مع إشعار عبر واتساب.",
      },
    ],
  },
  exitReentryIssue: {
    id: "exitReentryIssue",
    primaryKeyword: "خروج وعودة",
    secondaryKeywords: ["إصدار خروج وعودة", "تأشيرة خروج وعودة"],
    semanticKeywords: ["exit reentry visa", "exit and return"],
    faqs: [
      {
        q: "كيف أطلب خروج وعودة؟",
        a: "أرسل بيانات المكفول ومدة السفر عبر نموذج الطلب أو واتساب، وننجز الإصدار عبر القنوات الرسمية.",
      },
      {
        q: "ما الفرق بين خروج وعودة وخروج نهائي؟",
        a: "خروج وعودة للسفر والعودة بنفس الإقامة، والخروج النهائي لإنهاء الإقامة. إن لم تكن متأكدًا نوضّح الأنسب لحالتك.",
      },
    ],
  },
  openCr: {
    id: "openCr",
    primaryKeyword: "فتح سجل تجاري",
    secondaryKeywords: ["استخراج سجل تجاري", "تأسيس سجل", "سجل تجاري جديد"],
    semanticKeywords: ["commercial registration", "open CR Saudi"],
    faqs: [
      {
        q: "هل تساعدون في فتح سجل تجاري من الصفر؟",
        a: "نعم — من حجز الاسم حتى إصدار السجل، مع توجيهك للتراخيص المرتبطة بنشاطك عند الحاجة.",
      },
    ],
  },
  renewCr: {
    id: "renewCr",
    primaryKeyword: "تجديد سجل تجاري",
    secondaryKeywords: ["تجديد السجل", "تجديد CR"],
    semanticKeywords: ["renew commercial registration"],
    faqs: [
      {
        q: "كيف أجدد السجل التجاري عبر تسامي؟",
        a: "أرسل رقم السجل وتاريخ الانتهاء، ونكمل التجديد عبر وزارة التجارة مع متابعة حتى الاعتماد.",
      },
    ],
  },
  municipalLicense: {
    id: "municipalLicense",
    primaryKeyword: "رخصة بلدية",
    secondaryKeywords: ["رخصة بلدي", "ترخيص بلدي"],
    semanticKeywords: ["balady license", "municipal license"],
    faqs: [
      {
        q: "هل ترتبط الرخصة البلدية بالسجل التجاري؟",
        a: "غالبًا نعم حسب النشاط والموقع. نراجع متطلبات نشاطك ونرتّب الطلب عبر بلدي.",
      },
    ],
  },
  changeProfession: {
    id: "changeProfession",
    primaryKeyword: "تعديل مهنة",
    secondaryKeywords: ["تغيير مهنة عامل", "تعديل المسمى الوظيفي"],
    semanticKeywords: ["change profession qiwa"],
    faqs: [
      {
        q: "هل تعديل المهنة يحتاج موافقات؟",
        a: "حسب المهنة والمنشأة قد تُطلب مستندات أو موافقات عبر المنصات الرسمية. نحدد المطلوب بعد استلام بيانات العامل.",
      },
    ],
  },
  workVisaPermanent: {
    id: "workVisaPermanent",
    primaryKeyword: "تأشيرة عمل",
    secondaryKeywords: ["استقدام عامل", "تأشيرة عمل دائم"],
    semanticKeywords: ["work visa Saudi", "qiwa visa"],
    faqs: [
      {
        q: "هل تنجزون استقدام عبر قوى؟",
        a: "نعم ضمن مسار تأشيرات العمل، مع تجهيز الطلب ومتابعته حتى الإصدار حسب بيانات المنشأة.",
      },
    ],
  },
  finalExit: {
    id: "finalExit",
    primaryKeyword: "خروج نهائي",
    secondaryKeywords: ["تأشيرة خروج نهائي"],
    semanticKeywords: ["final exit visa"],
    faqs: [
      {
        q: "متى يُطلب الخروج النهائي؟",
        a: "عند إنهاء إقامة المكفول ومغادرته بشكل نظامي. نساعدك في استكمال الإجراء عبر المنصات المعتمدة.",
      },
    ],
  },
  familyVisitVisa: {
    id: "familyVisitVisa",
    primaryKeyword: "تأشيرة زيارة عائلية",
    secondaryKeywords: ["زيارة عائلية", "استقدام أهل"],
    semanticKeywords: ["family visit visa Saudi"],
    faqs: [
      {
        q: "كم يستغرق إصدار زيارة عائلية؟",
        a: "المدة تختلف حسب الحالة والمنصة. بعد استلام البيانات نبدأ فورًا ونحدّثك بكل مرحلة.",
      },
    ],
  },
  vatFiling: {
    id: "vatFiling",
    primaryKeyword: "ضريبة القيمة المضافة",
    secondaryKeywords: ["رفع إقرار ضريبي", "زكاة وضريبة"],
    semanticKeywords: ["VAT filing Saudi", "ZATCA"],
    faqs: [
      {
        q: "هل تساعدون في رفع إقرار الضريبة؟",
        a: "نعم — نساعدك في تجهيز ورفع الإقرار عبر القنوات الرسمية بعد تزويدنا بالبيانات المالية المطلوبة.",
      },
    ],
  },
  transferCrOwnership: {
    id: "transferCrOwnership",
    primaryKeyword: "نقل ملكية سجل تجاري",
    secondaryKeywords: ["نقل سجل تجاري", "بيع سجل"],
    semanticKeywords: ["transfer CR ownership"],
    faqs: [
      {
        q: "هل نقل ملكية السجل مختلف عن نقل الكفالة؟",
        a: "نعم. نقل ملكية السجل للمنشأة التجارية، بينما نقل الكفالة يخص العمالة. إن كنت غير متأكد نوجّهك للخدمة الصحيحة.",
      },
    ],
  },
};

export function getSeoPack(offeringKey: string): ServiceSeoPack | null {
  return SERVICE_SEO_PACKS[offeringKey] || null;
}

export function keywordsForOffering(offeringKey: string, title: string): string[] {
  const pack = getSeoPack(offeringKey);
  const base = [
    title,
    "تسامي",
    "Tasami",
    "خدمات حكومية",
    "تعقيب",
    "السعودية",
  ];
  if (!pack) return base;
  return [
    ...base,
    pack.primaryKeyword,
    ...pack.secondaryKeywords,
    ...pack.semanticKeywords,
  ];
}
