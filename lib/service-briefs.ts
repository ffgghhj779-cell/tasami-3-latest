/**
 * Service page briefs — operational (Tasami delivery), not invented legal fees.
 * Duration = our follow-up cadence, always qualified.
 */

type Lang = "ar" | "en" | "ur" | "hi";
type L = Record<Lang, string>;

type BriefDef = {
  platformKeys: string[];
  whatWeDo: L;
  clientNeeds: L[];
  durationNote: L;
};

export type ServiceBrief = {
  platformKeys: string[];
  whatWeDo: string;
  clientNeeds: string[];
  durationNote: string;
};

const DEFAULT_GOV: BriefDef = {
  platformKeys: ["absher", "qiwa"],
  whatWeDo: {
    ar: "نستلم طلبك، نراجع البيانات والمستندات، ونتابع الإنجاز عبر المنصات الرسمية مع تحديثك على واتساب.",
    en: "We receive your request, review the details and documents, and follow it through the official platforms, updating you on WhatsApp.",
    ur: "ہم آپ کی درخواست وصول کرتے ہیں، معلومات اور دستاویزات کا جائزہ لیتے ہیں، اور سرکاری پلیٹ فارمز کے ذریعے کام مکمل کرتے ہوئے آپ کو واٹس ایپ پر آگاہ رکھتے ہیں۔",
    hi: "हम आपका अनुरोध लेते हैं, जानकारी और दस्तावेज़ों की जाँच करते हैं, और आधिकारिक प्लेटफ़ॉर्म के ज़रिए काम पूरा करते हुए आपको व्हाट्सऐप पर अपडेट देते हैं।",
  },
  clientNeeds: [
    { ar: "بيانات المنشأة أو الفرد", en: "Establishment or individual details", ur: "ادارے یا فرد کی معلومات", hi: "प्रतिष्ठान या व्यक्ति की जानकारी" },
    { ar: "المستندات الظاهرة في نموذج الطلب", en: "The documents listed for the service", ur: "سروس کے لیے درج دستاویزات", hi: "सेवा के लिए बताए गए दस्तावेज़" },
    { ar: "صلاحيات الدخول للمنصة عند الحاجة", en: "Platform access permissions when needed", ur: "ضرورت پڑنے پر پلیٹ فارم تک رسائی کی اجازت", hi: "ज़रूरत होने पर प्लेटफ़ॉर्म एक्सेस की अनुमति" },
  ],
  durationNote: {
    ar: "نبدأ المتابعة عادةً خلال ساعات العمل بعد اكتمال البيانات — المدة النهائية حسب حالة المعاملة والمنصة.",
    en: "We usually start within working hours once the details are complete — the final duration depends on the case and the platform.",
    ur: "معلومات مکمل ہونے کے بعد ہم عموماً کام کے اوقات میں کام شروع کر دیتے ہیں — حتمی مدت معاملے اور پلیٹ فارم پر منحصر ہے۔",
    hi: "जानकारी पूरी होने के बाद हम आमतौर पर काम के समय में शुरू कर देते हैं — अंतिम अवधि मामले और प्लेटफ़ॉर्म पर निर्भर है।",
  },
};

const DEFAULT_TECH: BriefDef = {
  platformKeys: [],
  whatWeDo: {
    ar: "نحدد نطاق المشروع، نقدم مسار تنفيذ واضح، ونبدأ التطوير أو الأتمتة بعد الاتفاق على واتساب.",
    en: "We define the project scope, propose a clear delivery plan, and start building once we agree on WhatsApp.",
    ur: "ہم پروجیکٹ کا دائرہ طے کرتے ہیں، واضح منصوبہ پیش کرتے ہیں، اور واٹس ایپ پر اتفاق کے بعد کام شروع کرتے ہیں۔",
    hi: "हम प्रोजेक्ट का दायरा तय करते हैं, स्पष्ट योजना देते हैं, और व्हाट्सऐप पर सहमति के बाद काम शुरू करते हैं।",
  },
  clientNeeds: [
    { ar: "وصف سريع للاحتياج", en: "A short description of what you need", ur: "ضرورت کی مختصر تفصیل", hi: "ज़रूरत का छोटा विवरण" },
    { ar: "أمثلة أو روابط إن وُجدت", en: "Examples or links, if any", ur: "مثالیں یا لنکس، اگر ہوں", hi: "उदाहरण या लिंक, अगर हों" },
    { ar: "المدينة ونوع المنشأة إن لزم", en: "City and business type, if relevant", ur: "شہر اور کاروبار کی قسم، اگر ضروری ہو", hi: "शहर और व्यवसाय का प्रकार, अगर ज़रूरी हो" },
  ],
  durationNote: {
    ar: "نرجع لك بتصور أولي سريع بعد استلام الوصف — الجدول الزمني يُحدَّد حسب حجم المشروع.",
    en: "We reply with a quick initial proposal after receiving your brief — the timeline depends on the project size.",
    ur: "تفصیل ملنے کے بعد ہم جلد ابتدائی تجویز بھیجتے ہیں — وقت کا تعین پروجیکٹ کے حجم کے مطابق ہوتا ہے۔",
    hi: "विवरण मिलने के बाद हम जल्दी शुरुआती प्रस्ताव भेजते हैं — समय-सीमा प्रोजेक्ट के आकार पर निर्भर है।",
  },
};

/** Per-offering / tech-key overrides */
const SERVICE_BRIEFS: Record<string, BriefDef> = {
  lostIqama: { ...DEFAULT_GOV, platformKeys: ["absher", "muqeem"] },
  muqeem: { ...DEFAULT_GOV, platformKeys: ["muqeem"] },
  qiwaContracts: { ...DEFAULT_GOV, platformKeys: ["qiwa"] },
  workPermit: { ...DEFAULT_GOV, platformKeys: ["qiwa"] },
  companySetup: { ...DEFAULT_GOV, platformKeys: ["businessCenter", "commerce"] },
  openRestaurant: { ...DEFAULT_GOV, platformKeys: ["balady", "commerce"] },
  openShop: { ...DEFAULT_GOV, platformKeys: ["balady", "commerce"] },
  najizPoa: { ...DEFAULT_GOV, platformKeys: ["najiz"] },
  zakatFiling: { ...DEFAULT_GOV, platformKeys: ["zakat"] },
  eInvoicing: { ...DEFAULT_GOV, platformKeys: ["zakat"] },
  transferSponsorship: {
    platformKeys: ["qiwa", "absher"],
    whatWeDo: {
      ar: "نجهّز طلب نقل خدمات العامل ونتابع الإجراء عبر قوى والقنوات الرسمية حتى اكتمال النقل.",
      en: "We prepare the worker transfer request and follow it through Qiwa and the official channels until it is complete.",
      ur: "ہم کارکن کی منتقلی کی درخواست تیار کرتے ہیں اور قوٰی اور سرکاری ذرائع سے منتقلی مکمل ہونے تک پیروی کرتے ہیں۔",
      hi: "हम कर्मचारी ट्रांसफ़र का अनुरोध तैयार करते हैं और क़िवा व आधिकारिक माध्यमों से ट्रांसफ़र पूरा होने तक फ़ॉलो करते हैं।",
    },
    clientNeeds: [
      { ar: "بيانات المنشأتين والعامل", en: "Details of both establishments and the worker", ur: "دونوں اداروں اور کارکن کی معلومات", hi: "दोनों प्रतिष्ठानों और कर्मचारी की जानकारी" },
      { ar: "صلاحيات قوى / أبشر أعمال عند الحاجة", en: "Qiwa / Absher Business access when needed", ur: "ضرورت پر قوٰی / ابشر بزنس تک رسائی", hi: "ज़रूरत पर क़िवा / अबशर बिज़नेस एक्सेस" },
      { ar: "المدينة", en: "City", ur: "شہر", hi: "शहर" },
    ],
    durationNote: {
      ar: "نبدأ فور اكتمال البيانات — زمن الاعتماد يعتمد على موافقات الأطراف والمنصة.",
      en: "We start as soon as the details are complete — approval time depends on both parties and the platform.",
      ur: "معلومات مکمل ہوتے ہی ہم شروع کر دیتے ہیں — منظوری کا وقت فریقین اور پلیٹ فارم پر منحصر ہے۔",
      hi: "जानकारी पूरी होते ही हम शुरू करते हैं — मंज़ूरी का समय दोनों पक्षों और प्लेटफ़ॉर्म पर निर्भर है।",
    },
  },
  workerIqamaRenew: {
    platformKeys: ["absher", "muqeem"],
    whatWeDo: {
      ar: "نراجع صلاحية الإقامة ونتابع تجديدها عبر المنصات المعتمدة مع إشعارك بكل مرحلة.",
      en: "We check the iqama validity and follow its renewal through the approved platforms, updating you at every step.",
      ur: "ہم اقامہ کی میعاد چیک کرتے ہیں اور منظور شدہ پلیٹ فارمز کے ذریعے تجدید کی پیروی کرتے ہیں، ہر مرحلے پر آپ کو آگاہ رکھتے ہیں۔",
      hi: "हम इक़ामा की वैधता जाँचते हैं और मान्य प्लेटफ़ॉर्म से नवीनीकरण फ़ॉलो करते हैं, हर चरण पर आपको बताते हैं।",
    },
    clientNeeds: [
      { ar: "رقم الإقامة / الهوية", en: "Iqama / ID number", ur: "اقامہ / شناختی نمبر", hi: "इक़ामा / आईडी नंबर" },
      { ar: "تاريخ الانتهاء", en: "Expiry date", ur: "میعاد ختم ہونے کی تاریخ", hi: "समाप्ति तिथि" },
      { ar: "بيانات الكفيل أو المنشأة", en: "Sponsor or establishment details", ur: "کفیل یا ادارے کی معلومات", hi: "कफ़ील या प्रतिष्ठान की जानकारी" },
    ],
    durationNote: {
      ar: "يُفضّل البدء قبل الانتهاء بوقت كافٍ؛ نتابع فور استلام البيانات.",
      en: "It is best to start well before expiry; we follow up as soon as we receive the details.",
      ur: "بہتر ہے میعاد ختم ہونے سے کافی پہلے شروع کریں؛ معلومات ملتے ہی ہم پیروی شروع کر دیتے ہیں۔",
      hi: "बेहतर है कि समाप्ति से काफ़ी पहले शुरू करें; जानकारी मिलते ही हम फ़ॉलो-अप शुरू कर देते हैं।",
    },
  },
  exitReentryIssue: {
    platformKeys: ["absher"],
    whatWeDo: {
      ar: "نصدر طلب خروج وعودة عبر المسار الرسمي ونؤكد لك حالة الإصدار.",
      en: "We issue the exit and re-entry request through the official channel and confirm the status with you.",
      ur: "ہم سرکاری طریقے سے خروج و عودہ کی درخواست جاری کرتے ہیں اور آپ کو اجرا کی صورتحال سے آگاہ کرتے ہیں۔",
      hi: "हम आधिकारिक माध्यम से एग्ज़िट-री-एंट्री अनुरोध जारी करते हैं और आपको स्थिति की पुष्टि करते हैं।",
    },
    clientNeeds: [
      { ar: "بيانات المكفول", en: "Sponsored person's details", ur: "مکفول کی معلومات", hi: "प्रायोजित व्यक्ति की जानकारी" },
      { ar: "مدة السفر المتوقعة", en: "Expected travel duration", ur: "سفر کی متوقع مدت", hi: "यात्रा की अनुमानित अवधि" },
      { ar: "تأكيد الكفيل", en: "Sponsor's confirmation", ur: "کفیل کی تصدیق", hi: "कफ़ील की पुष्टि" },
    ],
    durationNote: {
      ar: "غالبًا تُنجز المتابعة سريعًا بعد اكتمال البيانات — حسب المنصة.",
      en: "Usually completed quickly once the details are complete — depending on the platform.",
      ur: "معلومات مکمل ہونے کے بعد عموماً جلد مکمل ہو جاتا ہے — پلیٹ فارم پر منحصر۔",
      hi: "जानकारी पूरी होने के बाद आमतौर पर जल्दी पूरा हो जाता है — प्लेटफ़ॉर्म पर निर्भर।",
    },
  },
  openCr: {
    platformKeys: ["commerce", "businessCenter"],
    whatWeDo: {
      ar: "نرافقك من حجز الاسم حتى إصدار السجل عبر القنوات الرسمية.",
      en: "We guide you from reserving the trade name to issuing the CR through the official channels.",
      ur: "ہم تجارتی نام کی بکنگ سے لے کر سی آر کے اجرا تک سرکاری ذرائع سے آپ کے ساتھ رہتے ہیں۔",
      hi: "हम व्यापारिक नाम आरक्षित करने से लेकर सीआर जारी होने तक आधिकारिक माध्यमों से आपका साथ देते हैं।",
    },
    clientNeeds: [
      { ar: "النشاط والمدينة", en: "Business activity and city", ur: "کاروباری سرگرمی اور شہر", hi: "व्यावसायिक गतिविधि और शहर" },
      { ar: "بيانات المالك", en: "Owner's details", ur: "مالک کی معلومات", hi: "मालिक की जानकारी" },
      { ar: "عقد الإيجار إن لزم", en: "Lease contract, if required", ur: "کرایہ نامہ، اگر ضروری ہو", hi: "किराया अनुबंध, अगर ज़रूरी हो" },
    ],
    durationNote: {
      ar: "نبدأ التأسيس بعد اكتمال المتطلبات؛ المدة حسب اكتمال المستندات.",
      en: "We start once the requirements are complete; the duration depends on the documents.",
      ur: "تقاضے پورے ہونے کے بعد ہم شروع کرتے ہیں؛ مدت دستاویزات کی تکمیل پر منحصر ہے۔",
      hi: "ज़रूरतें पूरी होने के बाद हम शुरू करते हैं; अवधि दस्तावेज़ों पर निर्भर है।",
    },
  },
  renewCr: {
    platformKeys: ["commerce"],
    whatWeDo: {
      ar: "نجهّز تجديد السجل التجاري ونتابع الاعتماد عبر وزارة التجارة.",
      en: "We prepare the CR renewal and follow the approval with the Ministry of Commerce.",
      ur: "ہم سی آر کی تجدید تیار کرتے ہیں اور وزارتِ تجارت سے منظوری کی پیروی کرتے ہیں۔",
      hi: "हम सीआर नवीनीकरण तैयार करते हैं और वाणिज्य मंत्रालय से मंज़ूरी फ़ॉलो करते हैं।",
    },
    clientNeeds: [
      { ar: "رقم السجل", en: "CR number", ur: "سی آر نمبر", hi: "सीआर नंबर" },
      { ar: "تاريخ الانتهاء", en: "Expiry date", ur: "میعاد ختم ہونے کی تاریخ", hi: "समाप्ति तिथि" },
      { ar: "بيانات المنشأة", en: "Establishment details", ur: "ادارے کی معلومات", hi: "प्रतिष्ठान की जानकारी" },
    ],
    durationNote: {
      ar: "المتابعة تبدأ بعد استلام رقم السجل والبيانات الناقصة إن وُجدت.",
      en: "Follow-up starts once we receive the CR number and any missing details.",
      ur: "سی آر نمبر اور باقی معلومات ملنے کے بعد پیروی شروع ہوتی ہے۔",
      hi: "सीआर नंबर और बाकी जानकारी मिलने के बाद फ़ॉलो-अप शुरू होता है।",
    },
  },
  municipalLicense: {
    platformKeys: ["balady"],
    whatWeDo: {
      ar: "نرتّب طلب الرخصة البلدية عبر بلدي وفق نشاط وموقع منشأتك.",
      en: "We arrange the municipal license request on Balady based on your activity and location.",
      ur: "ہم آپ کی سرگرمی اور مقام کے مطابق بلدی پر میونسپل لائسنس کی درخواست تیار کرتے ہیں۔",
      hi: "हम आपकी गतिविधि और स्थान के अनुसार बलदी पर नगरपालिका लाइसेंस का अनुरोध तैयार करते हैं।",
    },
    clientNeeds: [
      { ar: "نوع النشاط", en: "Type of activity", ur: "سرگرمی کی قسم", hi: "गतिविधि का प्रकार" },
      { ar: "عنوان المحل", en: "Shop address", ur: "دکان کا پتہ", hi: "दुकान का पता" },
      { ar: "السجل التجاري إن وُجد", en: "Commercial registration, if available", ur: "کمرشل رجسٹریشن، اگر ہو", hi: "वाणिज्यिक पंजीकरण, अगर हो" },
    ],
    durationNote: {
      ar: "المدة تعتمد على اشتراطات البلدية واكتمال المرفقات.",
      en: "The duration depends on municipal requirements and complete attachments.",
      ur: "مدت بلدیہ کی شرائط اور منسلکات کی تکمیل پر منحصر ہے۔",
      hi: "अवधि नगरपालिका की शर्तों और पूरे दस्तावेज़ों पर निर्भर है।",
    },
  },
  changeProfession: {
    platformKeys: ["qiwa", "absher"],
    whatWeDo: {
      ar: "نتابع تعديل مهنة العامل عبر المنصات الرسمية بعد مراجعة المتطلبات.",
      en: "We follow the worker's profession change through the official platforms after reviewing the requirements.",
      ur: "تقاضوں کا جائزہ لینے کے بعد ہم سرکاری پلیٹ فارمز کے ذریعے کارکن کا پیشہ تبدیل کرواتے ہیں۔",
      hi: "ज़रूरतों की जाँच के बाद हम आधिकारिक प्लेटफ़ॉर्म से कर्मचारी का पेशा बदलवाते हैं।",
    },
    clientNeeds: [
      { ar: "المهنة الحالية والجديدة", en: "Current and new profession", ur: "موجودہ اور نیا پیشہ", hi: "मौजूदा और नया पेशा" },
      { ar: "بيانات العامل", en: "Worker's details", ur: "کارکن کی معلومات", hi: "कर्मचारी की जानकारी" },
      { ar: "صلاحيات المنشأة", en: "Establishment permissions", ur: "ادارے کی اجازتیں", hi: "प्रतिष्ठान की अनुमतियाँ" },
    ],
    durationNote: {
      ar: "تختلف حسب المهنة والموافقات المطلوبة — نوضح ذلك بعد المراجعة.",
      en: "Varies by profession and required approvals — we clarify after the review.",
      ur: "پیشے اور مطلوبہ منظوریوں کے مطابق مختلف ہے — جائزے کے بعد ہم واضح کر دیتے ہیں۔",
      hi: "पेशे और ज़रूरी मंज़ूरियों के अनुसार अलग है — जाँच के बाद हम बता देते हैं।",
    },
  },
  workVisaPermanent: {
    platformKeys: ["qiwa"],
    whatWeDo: {
      ar: "نجهّز مسار تأشيرة العمل عبر قوى ونتابع حتى الإصدار حسب بيانات المنشأة.",
      en: "We prepare the work visa process on Qiwa and follow it until issuance based on your establishment's details.",
      ur: "ہم قوٰی پر ورک ویزا کا عمل تیار کرتے ہیں اور ادارے کی معلومات کے مطابق اجرا تک پیروی کرتے ہیں۔",
      hi: "हम क़िवा पर वर्क वीज़ा की प्रक्रिया तैयार करते हैं और प्रतिष्ठान की जानकारी के अनुसार जारी होने तक फ़ॉलो करते हैं।",
    },
    clientNeeds: [
      { ar: "السجل والصلاحيات", en: "CR and permissions", ur: "سی آر اور اجازتیں", hi: "सीआर और अनुमतियाँ" },
      { ar: "الجنسية والمهنة", en: "Nationality and profession", ur: "قومیت اور پیشہ", hi: "राष्ट्रीयता और पेशा" },
      { ar: "عدد العمالة", en: "Number of workers", ur: "کارکنوں کی تعداد", hi: "कर्मचारियों की संख्या" },
    ],
    durationNote: {
      ar: "نبدأ بعد اكتمال ملف المنشأة؛ الإصدار النهائي حسب المنصة.",
      en: "We start once the establishment file is complete; final issuance depends on the platform.",
      ur: "ادارے کی فائل مکمل ہونے کے بعد ہم شروع کرتے ہیں؛ حتمی اجرا پلیٹ فارم پر منحصر ہے۔",
      hi: "प्रतिष्ठान की फ़ाइल पूरी होने के बाद हम शुरू करते हैं; अंतिम जारी होना प्लेटफ़ॉर्म पर निर्भर है।",
    },
  },
  vatFiling: {
    platformKeys: ["zakat"],
    whatWeDo: {
      ar: "نساعدك في تجهيز ورفع الإقرار عبر القنوات الرسمية بعد استلام البيانات.",
      en: "We help you prepare and submit the return through the official channels once we receive the data.",
      ur: "معلومات ملنے کے بعد ہم سرکاری ذرائع سے ریٹرن تیار کرنے اور جمع کرانے میں مدد کرتے ہیں۔",
      hi: "जानकारी मिलने के बाद हम आधिकारिक माध्यमों से रिटर्न तैयार करने और जमा करने में मदद करते हैं।",
    },
    clientNeeds: [
      { ar: "الرقم الضريبي", en: "VAT number", ur: "ویٹ نمبر", hi: "वैट नंबर" },
      { ar: "بيانات الفترة", en: "Period details", ur: "مدت کی معلومات", hi: "अवधि की जानकारी" },
      { ar: "الملفات المالية المطلوبة", en: "Required financial files", ur: "مطلوبہ مالی فائلیں", hi: "ज़रूरी वित्तीय फ़ाइलें" },
    ],
    durationNote: {
      ar: "نرتّب الرفع بعد اكتمال الأرقام — قبل موعد الإقرار إن أمكن.",
      en: "We arrange the submission once the figures are complete — before the deadline where possible.",
      ur: "اعداد مکمل ہونے کے بعد ہم جمع کراتے ہیں — ممکن ہو تو آخری تاریخ سے پہلے۔",
      hi: "आँकड़े पूरे होने के बाद हम जमा करते हैं — संभव हो तो अंतिम तिथि से पहले।",
    },
  },
  websites: {
    ...DEFAULT_TECH,
    whatWeDo: {
      ar: "نصمّم ونبني موقعًا يعكس علامتك ويجلب طلبات واضحة — من الصفحة الأولى حتى الإطلاق.",
      en: "We design and build a website that reflects your brand and brings clear enquiries — from the first page to launch.",
      ur: "ہم ایسی ویب سائٹ ڈیزائن اور تیار کرتے ہیں جو آپ کے برانڈ کی عکاسی کرے اور واضح آرڈرز لائے — پہلے صفحے سے لانچ تک۔",
      hi: "हम ऐसी वेबसाइट डिज़ाइन और तैयार करते हैं जो आपके ब्रांड को दर्शाए और साफ़ पूछताछ लाए — पहले पेज से लॉन्च तक।",
    },
  },
  mobile: {
    ...DEFAULT_TECH,
    whatWeDo: {
      ar: "نبني تطبيق جوال بمسار استخدام واضح لمنشأتك وعملائك.",
      en: "We build a mobile app with a clear user journey for your business and customers.",
      ur: "ہم آپ کے کاروبار اور صارفین کے لیے آسان استعمال والی موبائل ایپ بناتے ہیں۔",
      hi: "हम आपके व्यवसाय और ग्राहकों के लिए आसान इस्तेमाल वाला मोबाइल ऐप बनाते हैं।",
    },
  },
  automation: {
    ...DEFAULT_TECH,
    whatWeDo: {
      ar: "نربط أنظمتك وأتمتة المهام المتكررة (واتساب، طلبات، تنبيهات) لتقليل الشغل اليدوي.",
      en: "We connect your systems and automate repetitive tasks (WhatsApp, orders, alerts) to cut manual work.",
      ur: "ہم آپ کے سسٹمز جوڑتے ہیں اور بار بار کے کام (واٹس ایپ، آرڈرز، الرٹس) خودکار بناتے ہیں تاکہ دستی کام کم ہو۔",
      hi: "हम आपके सिस्टम जोड़ते हैं और बार-बार के काम (व्हाट्सऐप, ऑर्डर, अलर्ट) ऑटोमेट करते हैं ताकि मैनुअल काम कम हो।",
    },
  },
  ai: {
    ...DEFAULT_TECH,
    whatWeDo: {
      ar: "نضيف مساعدًا أو أتمتة ذكية تناسب عمليات منشأتك بدون تعقيد زائد.",
      en: "We add a smart assistant or AI automation that fits your operations without extra complexity.",
      ur: "ہم ایسا اسمارٹ اسسٹنٹ یا اے آئی آٹومیشن شامل کرتے ہیں جو بغیر پیچیدگی کے آپ کے کام کے مطابق ہو۔",
      hi: "हम ऐसा स्मार्ट असिस्टेंट या एआई ऑटोमेशन जोड़ते हैं जो बिना जटिलता के आपके काम के अनुकूल हो।",
    },
  },
};

function pick(text: L, locale: string): string {
  return text[(locale as Lang) in text ? (locale as Lang) : "ar"];
}

export function getServiceBrief(
  key: string,
  kind: "government" | "tech" | "sector" = "government",
  locale = "ar"
): ServiceBrief {
  const def = SERVICE_BRIEFS[key] ?? (kind === "tech" ? DEFAULT_TECH : DEFAULT_GOV);
  return {
    platformKeys: def.platformKeys,
    whatWeDo: pick(def.whatWeDo, locale),
    clientNeeds: def.clientNeeds.map((n) => pick(n, locale)),
    durationNote: pick(def.durationNote, locale),
  };
}
