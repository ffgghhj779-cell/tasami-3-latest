/**
 * Service page briefs — operational (Tasami delivery), not invented legal fees.
 * Duration = our follow-up cadence, always qualified.
 */

export type ServiceBrief = {
  platformKeys: string[];
  whatWeDo: string;
  clientNeeds: string[];
  durationNote: string;
};

const DEFAULT_GOV: ServiceBrief = {
  platformKeys: ["absher", "qiwa"],
  whatWeDo:
    "نستلم طلبك، نراجع البيانات والمستندات، ونتابع الإنجاز عبر المنصات الرسمية مع تحديثك على واتساب.",
  clientNeeds: [
    "بيانات المنشأة أو الفرد",
    "المستندات الظاهرة في نموذج الطلب",
    "صلاحيات الدخول للمنصة عند الحاجة",
  ],
  durationNote:
    "نبدأ المتابعة عادةً خلال ساعات العمل بعد اكتمال البيانات — المدة النهائية حسب حالة المعاملة والمنصة.",
};

const DEFAULT_TECH: ServiceBrief = {
  platformKeys: [],
  whatWeDo:
    "نحدد نطاق المشروع، نقدم مسار تنفيذ واضح، ونبدأ التطوير أو الأتمتة بعد الاتفاق على واتساب.",
  clientNeeds: [
    "وصف سريع للاحتياج",
    "أمثلة أو روابط إن وُجدت",
    "المدينة ونوع المنشأة إن لزم",
  ],
  durationNote:
    "نرجع لك بتصور أولي سريع بعد استلام الوصف — الجدول الزمني يُحدَّد حسب حجم المشروع.",
};

/** Per-offering / tech-key overrides */
export const SERVICE_BRIEFS: Record<string, ServiceBrief> = {
  transferSponsorship: {
    platformKeys: ["qiwa", "absher"],
    whatWeDo:
      "نجهّز طلب نقل خدمات العامل ونتابع الإجراء عبر قوى والقنوات الرسمية حتى اكتمال النقل.",
    clientNeeds: [
      "بيانات المنشأتين والعامل",
      "صلاحيات قوى / أبشر أعمال عند الحاجة",
      "المدينة",
    ],
    durationNote:
      "نبدأ فور اكتمال البيانات — زمن الاعتماد يعتمد على موافقات الأطراف والمنصة.",
  },
  workerIqamaRenew: {
    platformKeys: ["absher", "muqeem"],
    whatWeDo: "نراجع صلاحية الإقامة ونتابع تجديدها عبر المنصات المعتمدة مع إشعارك بكل مرحلة.",
    clientNeeds: ["رقم الإقامة / الهوية", "تاريخ الانتهاء", "بيانات الكفيل أو المنشأة"],
    durationNote: "يُفضّل البدء قبل الانتهاء بوقت كافٍ؛ نتابع فور استلام البيانات.",
  },
  exitReentryIssue: {
    platformKeys: ["absher"],
    whatWeDo: "نصدر طلب خروج وعودة عبر المسار الرسمي ونؤكد لك حالة الإصدار.",
    clientNeeds: ["بيانات المكفول", "مدة السفر المتوقعة", "تأكيد الكفيل"],
    durationNote: "غالبًا تُنجز المتابعة سريعًا بعد اكتمال البيانات — حسب المنصة.",
  },
  openCr: {
    platformKeys: ["commerce", "businessCenter"],
    whatWeDo: "نرافقك من حجز الاسم حتى إصدار السجل عبر القنوات الرسمية.",
    clientNeeds: ["النشاط والمدينة", "بيانات المالك", "عقد الإيجار إن لزم"],
    durationNote: "نبدأ التأسيس بعد اكتمال المتطلبات؛ المدة حسب اكتمال المستندات.",
  },
  renewCr: {
    platformKeys: ["commerce"],
    whatWeDo: "نجهّز تجديد السجل التجاري ونتابع الاعتماد عبر وزارة التجارة.",
    clientNeeds: ["رقم السجل", "تاريخ الانتهاء", "بيانات المنشأة"],
    durationNote: "المتابعة تبدأ بعد استلام رقم السجل والبيانات الناقصة إن وُجدت.",
  },
  municipalLicense: {
    platformKeys: ["balady"],
    whatWeDo: "نرتّب طلب الرخصة البلدية عبر بلدي وفق نشاط وموقع منشأتك.",
    clientNeeds: ["نوع النشاط", "عنوان المحل", "السجل التجاري إن وُجد"],
    durationNote: "المدة تعتمد على اشتراطات البلدية واكتمال المرفقات.",
  },
  changeProfession: {
    platformKeys: ["qiwa", "absher"],
    whatWeDo: "نتابع تعديل مهنة العامل عبر المنصات الرسمية بعد مراجعة المتطلبات.",
    clientNeeds: ["المهنة الحالية والجديدة", "بيانات العامل", "صلاحيات المنشأة"],
    durationNote: "تختلف حسب المهنة والموافقات المطلوبة — نوضح ذلك بعد المراجعة.",
  },
  workVisaPermanent: {
    platformKeys: ["qiwa"],
    whatWeDo: "نجهّز مسار تأشيرة العمل عبر قوى ونتابع حتى الإصدار حسب بيانات المنشأة.",
    clientNeeds: ["السجل والصلاحيات", "الجنسية والمهنة", "عدد العمالة"],
    durationNote: "نبدأ بعد اكتمال ملف المنشأة؛ الإصدار النهائي حسب المنصة.",
  },
  vatFiling: {
    platformKeys: ["zakat"],
    whatWeDo: "نساعدك في تجهيز ورفع الإقرار عبر القنوات الرسمية بعد استلام البيانات.",
    clientNeeds: ["الرقم الضريبي", "بيانات الفترة", "الملفات المالية المطلوبة"],
    durationNote: "نرتّب الرفع بعد اكتمال الأرقام — قبل موعد الإقرار إن أمكن.",
  },
  websites: {
    ...DEFAULT_TECH,
    whatWeDo: "نصمّم ونبني موقعًا يعكس علامتك ويجلب طلبات واضحة — من الصفحة الأولى حتى الإطلاق.",
  },
  mobile: {
    ...DEFAULT_TECH,
    whatWeDo: "نبني تطبيق جوال بمسار استخدام واضح لمنشأتك وعملائك.",
  },
  automation: {
    ...DEFAULT_TECH,
    whatWeDo: "نربط أنظمتك وأتمتة المهام المتكررة (واتساب، طلبات، تنبيهات) لتقليل الشغل اليدوي.",
  },
  ai: {
    ...DEFAULT_TECH,
    whatWeDo: "نضيف مساعدًا أو أتمتة ذكية تناسب عمليات منشأتك بدون تعقيد زائد.",
  },
};

export function getServiceBrief(
  key: string,
  kind: "government" | "tech" | "sector" = "government"
): ServiceBrief {
  if (SERVICE_BRIEFS[key]) return SERVICE_BRIEFS[key];
  return kind === "tech" ? DEFAULT_TECH : DEFAULT_GOV;
}
