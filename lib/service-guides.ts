/**
 * Long-form service guides for the highest-demand government pages (SEO spec §6/§12).
 * Each locale carries its own primary keyword, secondary keywords and meta description,
 * so this file doubles as the keyword map for these pages.
 *
 * Content describes how Tasami handles the request and general procedure only —
 * no government fees, fixed durations or legal promises.
 */

type Lang = "ar" | "en" | "ur" | "hi";

export type ServiceGuide = {
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaDescription: string;
  intro: string;
  who: string[];
  steps: string[];
  tips: string[];
  local: string;
  faqs: { q: string; a: string }[];
};

type GuideDef = Record<Lang, ServiceGuide>;

const GUIDES: Record<string, GuideDef> = {
  workerIqamaRenew: {
    ar: {
      primaryKeyword: "تجديد إقامة",
      secondaryKeywords: ["تجديد إقامة عامل", "تجديد إقامة العمالة للمنشآت", "معقب تجديد إقامة", "iqama renewal"],
      metaDescription:
        "تجديد إقامة عامل في السعودية عبر تسامي: نراجع التأمين الطبي ورخصة العمل والمخالفات، ونتابع التجديد عبر مقيم وأبشر أعمال مع تحديثك على واتساب.",
      intro:
        "تجديد إقامة العامل يتم إلكترونياً عبر منصة مقيم أو أبشر أعمال بعد سداد الرسوم الحكومية، ويشترط عادةً وجود تأمين طبي ساري ورخصة عمل مجددة. في تسامي نراجع جاهزية ملف العامل قبل التقديم، ثم ننجز التجديد ونبلغك بكل مرحلة حتى صدور الإقامة الجديدة.",
      who: [
        "المنشآت التي لديها عمالة وافدة وتريد تجديد إقاماتهم دون تعطيل العمل.",
        "أصحاب المؤسسات الصغيرة الذين لا يتوفر لديهم موظف متخصص للمعاملات الحكومية.",
        "الأفراد الكفلاء لسائق خاص أو عمالة منزلية (عبر صفحة تجديد إقامة سائق).",
      ],
      steps: [
        "ترسل لنا رقم الإقامة وتاريخ انتهائها وبيانات المنشأة عبر واتساب أو نموذج الطلب.",
        "نراجع سريان التأمين الطبي ورخصة العمل في قوى، ونتحقق من وجود مخالفات قد تعطل التجديد.",
        "نوضح لك الرسوم الحكومية المستحقة لتسددها عبر سداد، ثم نقدّم طلب التجديد عبر المنصة الرسمية.",
        "نتابع حتى صدور الإقامة المجددة ونرسل لك التأكيد، مع تذكيرك بالموعد القادم.",
      ],
      tips: [
        "ابدأ التجديد قبل تاريخ الانتهاء بوقت كافٍ؛ التأخير قد يترتب عليه غرامات وتعطيل خدمات العامل.",
        "جدّد التأمين الطبي أولاً، فالتجديد لا يكتمل غالباً دون تأمين ساري مرتبط بالإقامة.",
        "تأكد من تجديد رخصة العمل في قوى بالتوازي مع الإقامة.",
        "المخالفات المرورية أو الرسوم غير المسددة قد تمنع إتمام التجديد، فراجعها مبكراً.",
      ],
      local:
        "مقرنا في العوالي بمكة المكرمة، ونخدم المنشآت في الرياض وجدة والدمام والمدينة المنورة والطائف وكل مدن المملكة أونلاين، لأن التجديد يتم عبر المنصات الإلكترونية دون حاجة لزيارتك.",
      faqs: [
        { q: "متى أبدأ تجديد إقامة العامل؟", a: "يُفضّل البدء قبل انتهاء الصلاحية بوقت كافٍ لتفادي الغرامات وتعطيل الخدمات. أرسل تاريخ الانتهاء ونرتب التجديد معك." },
        { q: "هل يلزم تأمين طبي لتجديد الإقامة؟", a: "نعم في أغلب الحالات يشترط وجود تأمين طبي ساري مرتبط بالعامل. نراجع ذلك قبل التقديم ونوجهك إن احتاج التأمين تجديداً." },
        { q: "هل يمكن التجديد عبر تسامي دون حضوري؟", a: "نعم. نجهّز الطلب ونتابعه عبر المنصات الرسمية، وتصلك التحديثات والتأكيد على واتساب." },
      ],
    },
    en: {
      primaryKeyword: "iqama renewal",
      secondaryKeywords: ["iqama renewal Saudi Arabia", "worker iqama renewal", "renew iqama online", "PRO services iqama"],
      metaDescription:
        "Worker iqama renewal in Saudi Arabia with Tasami: we check medical insurance, work permit and violations, then renew via Muqeem / Absher Business and update you on WhatsApp.",
      intro:
        "A worker's iqama is renewed online through Muqeem or Absher Business once the government fees are paid, and it usually requires valid medical insurance and a renewed work permit. Tasami checks that the worker's file is ready before applying, completes the renewal, and keeps you updated until the new iqama is issued.",
      who: [
        "Establishments with expatriate staff who need iqamas renewed without disrupting work.",
        "Small business owners without an in-house government relations (PRO) employee.",
        "Individual sponsors of a private driver or domestic worker (see the driver iqama page).",
      ],
      steps: [
        "Send us the iqama number, expiry date and establishment details on WhatsApp or the request form.",
        "We check the medical insurance and the Qiwa work permit, and look for violations that could block renewal.",
        "We tell you which government fees are due so you can pay via SADAD, then submit the renewal on the official platform.",
        "We follow up until the renewed iqama is issued, send you confirmation and remind you of the next due date.",
      ],
      tips: [
        "Start well before the expiry date; late renewal can lead to fines and blocked services for the worker.",
        "Renew the medical insurance first — renewal usually cannot complete without valid insurance.",
        "Renew the work permit on Qiwa in parallel with the iqama.",
        "Unpaid traffic violations or fees can stop the renewal, so check them early.",
      ],
      local:
        "Our office is in Al Awali, Makkah, and we serve businesses in Riyadh, Jeddah, Dammam, Madinah, Taif and every city in the Kingdom online, because renewal is done on the official platforms without you visiting any office.",
      faqs: [
        { q: "When should I start renewing a worker's iqama?", a: "Well before it expires, to avoid fines and blocked services. Send us the expiry date and we will schedule the renewal with you." },
        { q: "Is medical insurance required to renew an iqama?", a: "In most cases, yes — valid medical insurance linked to the worker is required. We check it before applying and tell you if it needs renewing." },
        { q: "Can Tasami renew it without me visiting an office?", a: "Yes. We prepare and follow the request on the official platforms, and you receive updates and confirmation on WhatsApp." },
      ],
    },
    ur: {
      primaryKeyword: "اقامہ تجدید",
      secondaryKeywords: ["اقامہ تجدید سعودی عرب", "ورکر اقامہ تجدید", "iqama tajdeed", "iqama renew karna"],
      metaDescription:
        "سعودی عرب میں ورکر اقامہ کی تجدید تسامی کے ساتھ: میڈیکل انشورنس، ورک پرمٹ اور خلاف ورزیوں کی جانچ، پھر مقیم / ابشر بزنس سے تجدید اور واٹس ایپ پر اپڈیٹ۔",
      intro:
        "ورکر کا اقامہ سرکاری فیس ادا ہونے کے بعد مقیم یا ابشر بزنس کے ذریعے آن لائن تجدید ہوتا ہے، اور عام طور پر درست میڈیکل انشورنس اور تجدید شدہ ورک پرمٹ ضروری ہوتا ہے۔ تسامی درخواست سے پہلے ورکر کی فائل چیک کرتا ہے، تجدید مکمل کرتا ہے اور نیا اقامہ جاری ہونے تک آپ کو آگاہ رکھتا ہے۔",
      who: [
        "وہ ادارے جن کے غیر ملکی ملازمین کے اقامے بغیر کام رکے تجدید ہونے ہیں۔",
        "چھوٹے کاروبار کے مالکان جن کے پاس سرکاری معاملات کے لیے الگ ملازم نہیں۔",
        "پرائیویٹ ڈرائیور یا گھریلو ملازم کے انفرادی کفیل۔",
      ],
      steps: [
        "اقامہ نمبر، میعاد ختم ہونے کی تاریخ اور ادارے کی معلومات واٹس ایپ یا فارم سے بھیجیں۔",
        "ہم میڈیکل انشورنس اور قوی پر ورک پرمٹ چیک کرتے ہیں، اور ایسی خلاف ورزیاں دیکھتے ہیں جو تجدید روک سکتی ہیں۔",
        "ہم واجب سرکاری فیس بتاتے ہیں تاکہ آپ سداد سے ادا کریں، پھر سرکاری پلیٹ فارم پر تجدید جمع کرتے ہیں۔",
        "نیا اقامہ جاری ہونے تک پیروی کرتے ہیں، تصدیق بھیجتے ہیں اور اگلی تاریخ یاد دلاتے ہیں۔",
      ],
      tips: [
        "میعاد ختم ہونے سے کافی پہلے شروع کریں؛ تاخیر پر جرمانہ اور ورکر کی سروسز بند ہو سکتی ہیں۔",
        "پہلے میڈیکل انشورنس تجدید کریں، اس کے بغیر عموماً تجدید مکمل نہیں ہوتی۔",
        "اقامہ کے ساتھ قوی پر ورک پرمٹ بھی تجدید کریں۔",
        "غیر ادا شدہ ٹریفک جرمانے تجدید روک سکتے ہیں، انہیں پہلے چیک کریں۔",
      ],
      local:
        "ہمارا دفتر مکہ مکرمہ کے العوالی میں ہے، اور ہم ریاض، جدہ، دمام، مدینہ منورہ اور پورے سعودی عرب میں آن لائن خدمت کرتے ہیں۔",
      faqs: [
        { q: "اقامہ کی تجدید کب شروع کروں؟", a: "میعاد ختم ہونے سے کافی پہلے، تاکہ جرمانے اور سروسز بند ہونے سے بچا جا سکے۔ تاریخ بھیجیں، ہم ترتیب بنا دیں گے۔" },
        { q: "کیا تجدید کے لیے میڈیکل انشورنس ضروری ہے؟", a: "زیادہ تر صورتوں میں ہاں۔ ہم درخواست سے پہلے چیک کرتے ہیں اور ضرورت ہو تو بتا دیتے ہیں۔" },
        { q: "کیا دفتر گئے بغیر تجدید ہو سکتی ہے؟", a: "جی ہاں۔ ہم سرکاری پلیٹ فارمز پر کام مکمل کرتے ہیں اور واٹس ایپ پر اپڈیٹ دیتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "इक़ामा नवीनीकरण",
      secondaryKeywords: ["सऊदी अरब इक़ामा नवीनीकरण", "वर्कर इक़ामा रिन्यू", "iqama renewal"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में वर्कर इक़ामा नवीनीकरण: मेडिकल इंश्योरेंस, वर्क परमिट और जुर्मानों की जाँच, फिर मुक़ीम / अबशर बिज़नेस से नवीनीकरण और व्हाट्सऐप पर अपडेट।",
      intro:
        "वर्कर का इक़ामा सरकारी फ़ीस भरने के बाद मुक़ीम या अबशर बिज़नेस से ऑनलाइन रिन्यू होता है, और आमतौर पर वैध मेडिकल इंश्योरेंस और रिन्यू किया हुआ वर्क परमिट ज़रूरी होता है। तसामी आवेदन से पहले फ़ाइल जाँचता है, नवीनीकरण पूरा करता है और नया इक़ामा जारी होने तक आपको अपडेट देता है।",
      who: [
        "विदेशी कर्मचारियों वाले प्रतिष्ठान जिन्हें बिना काम रुके इक़ामा रिन्यू कराना है।",
        "छोटे कारोबार जिनके पास सरकारी काम के लिए अलग कर्मचारी नहीं है।",
        "प्राइवेट ड्राइवर या घरेलू कामगार के व्यक्तिगत कफ़ील।",
      ],
      steps: [
        "इक़ामा नंबर, समाप्ति तिथि और प्रतिष्ठान की जानकारी व्हाट्सऐप या फ़ॉर्म से भेजें।",
        "हम मेडिकल इंश्योरेंस और क़िवा पर वर्क परमिट जाँचते हैं, और रुकावट डालने वाले जुर्माने देखते हैं।",
        "हम बकाया सरकारी फ़ीस बताते हैं ताकि आप सदाद से भरें, फिर आधिकारिक प्लेटफ़ॉर्म पर आवेदन करते हैं।",
        "नया इक़ामा जारी होने तक फ़ॉलो करते हैं, पुष्टि भेजते हैं और अगली तारीख़ याद दिलाते हैं।",
      ],
      tips: [
        "समाप्ति से काफ़ी पहले शुरू करें; देरी पर जुर्माना और सेवाएँ रुक सकती हैं।",
        "पहले मेडिकल इंश्योरेंस रिन्यू करें, इसके बिना नवीनीकरण अक्सर पूरा नहीं होता।",
        "इक़ामा के साथ क़िवा पर वर्क परमिट भी रिन्यू करें।",
        "बकाया ट्रैफ़िक जुर्माने नवीनीकरण रोक सकते हैं, उन्हें पहले जाँचें।",
      ],
      local:
        "हमारा दफ़्तर मक्का के अल-अवाली में है, और हम रियाद, जेद्दा, दम्माम, मदीना समेत पूरे सऊदी अरब में ऑनलाइन सेवा देते हैं।",
      faqs: [
        { q: "इक़ामा नवीनीकरण कब शुरू करें?", a: "समाप्ति से काफ़ी पहले, ताकि जुर्माने और सेवाएँ रुकने से बचा जा सके। तारीख़ भेजें, हम योजना बना देंगे।" },
        { q: "क्या मेडिकल इंश्योरेंस ज़रूरी है?", a: "ज़्यादातर मामलों में हाँ। हम आवेदन से पहले जाँचते हैं और ज़रूरत हो तो बताते हैं।" },
        { q: "क्या बिना दफ़्तर गए नवीनीकरण हो सकता है?", a: "हाँ। हम आधिकारिक प्लेटफ़ॉर्म पर काम पूरा करते हैं और व्हाट्सऐप पर अपडेट देते हैं।" },
      ],
    },
  },

  transferSponsorship: {
    ar: {
      primaryKeyword: "نقل خدمات",
      secondaryKeywords: ["نقل كفالة", "نقل خدمات عامل", "نقل خدمات عبر قوى", "transfer of sponsorship"],
      metaDescription:
        "نقل خدمات عامل (نقل كفالة) في السعودية عبر منصة قوى مع تسامي: نجهز عرض النقل ونتابع موافقة العامل والمنشأة حتى اكتمال النقل، مع تحديثك على واتساب.",
      intro:
        "نقل الخدمات، أو كما يسميه كثيرون «نقل الكفالة»، هو انتقال العامل الوافد من منشأة إلى أخرى عبر منصة قوى. يبدأ بعرض نقل من المنشأة الجديدة يوافق عليه العامل، وبحسب حالة العقد قد لا تشترط موافقة صاحب العمل الحالي وفق مبادرة تحسين العلاقة التعاقدية. تسامي تجهّز الطلب وتتابعه حتى يكتمل النقل.",
      who: [
        "منشأة تريد استقطاب عامل موجود داخل المملكة بدلاً من الاستقدام من الخارج.",
        "عامل وافد وجد فرصة عمل جديدة ويريد إتمام النقل بشكل نظامي.",
        "منشأة تريد نقل عامل بين فروعها أو منشآتها المرتبطة.",
      ],
      steps: [
        "ترسل بيانات المنشأة الجديدة ورقم إقامة العامل ومهنته.",
        "نتحقق من أهلية المنشأة في نطاقات وسريان إقامة العامل وتأمينه الطبي.",
        "نرفع عرض نقل الخدمات عبر قوى ونوجّه العامل لقبوله من حسابه.",
        "نتابع الموافقات وسداد المقابل المالي حتى انتقال العامل وتحديث بياناته.",
      ],
      tips: [
        "تأكد أن المنشأة الجديدة في نطاق يسمح بنقل العمالة إليها.",
        "يجب أن تكون إقامة العامل سارية وغير منتهية عند تقديم الطلب.",
        "راجع إن كان العامل يحتاج تعديل مهنة لتطابق وظيفته الجديدة.",
        "رسوم النقل تختلف حسب عدد مرات النقل السابقة، ونوضحها لك قبل البدء.",
      ],
      local:
        "ننجز نقل الخدمات للمنشآت والعمالة في مكة المكرمة والرياض وجدة والدمام وباقي مدن المملكة، لأن الإجراء كله إلكتروني عبر قوى وأبشر.",
      faqs: [
        { q: "ما الفرق بين نقل كفالة ونقل خدمات؟", a: "يقصدان نفس الإجراء: نقل العامل إلى منشأة جديدة. «نقل الخدمات» هو المسمى الرسمي، و«نقل الكفالة» هو المسمى الشائع." },
        { q: "هل تشترط موافقة صاحب العمل الحالي؟", a: "يعتمد على حالة العقد. وفق مبادرة تحسين العلاقة التعاقدية يمكن النقل دون موافقته في حالات محددة، ونراجع حالتك قبل التقديم." },
        { q: "ماذا أحتاج لبدء طلب نقل خدمات؟", a: "بيانات المنشأة الجديدة، ورقم إقامة العامل، وصلاحية الدخول على قوى. نحدد لك أي مستند إضافي حسب حالتك." },
      ],
    },
    en: {
      primaryKeyword: "transfer of services",
      secondaryKeywords: ["transfer of sponsorship Saudi Arabia", "kafala transfer", "transfer of services Qiwa", "worker transfer KSA"],
      metaDescription:
        "Worker transfer of services (sponsorship transfer) in Saudi Arabia via Qiwa with Tasami: we prepare the transfer offer and follow approvals until the move is complete.",
      intro:
        "Transfer of services — widely called \"sponsorship transfer\" or \"kafala transfer\" — moves an expatriate worker from one establishment to another through the Qiwa platform. It starts with a transfer offer from the new employer that the worker accepts, and depending on the contract the current employer's approval may not be required under the Labor Reform Initiative. Tasami prepares and follows the request until the transfer is complete.",
      who: [
        "Establishments hiring a worker already inside the Kingdom instead of recruiting from abroad.",
        "Expatriate workers who found a new job and want to transfer legally.",
        "Companies moving a worker between their own branches or related establishments.",
      ],
      steps: [
        "Send the new establishment's details plus the worker's iqama number and profession.",
        "We check the establishment's Nitaqat eligibility and the worker's iqama and medical insurance.",
        "We submit the transfer offer on Qiwa and guide the worker to accept it from their account.",
        "We follow approvals and the transfer fee payment until the worker is moved and records are updated.",
      ],
      tips: [
        "Make sure the new establishment's Nitaqat band allows incoming transfers.",
        "The worker's iqama must be valid when the request is submitted.",
        "Check whether the worker needs a profession change to match the new role.",
        "Transfer fees vary with the number of previous transfers; we confirm them before starting.",
      ],
      local:
        "We handle transfers for businesses and workers in Makkah, Riyadh, Jeddah, Dammam and the rest of the Kingdom, since the whole process runs online through Qiwa and Absher.",
      faqs: [
        { q: "Is sponsorship transfer the same as transfer of services?", a: "Yes. \"Transfer of services\" is the official name; \"sponsorship\" or \"kafala transfer\" is the common one." },
        { q: "Does the current employer have to approve?", a: "It depends on the contract. Under the Labor Reform Initiative a transfer can proceed without approval in specific cases; we review yours first." },
        { q: "What do I need to start?", a: "The new establishment's details, the worker's iqama number and Qiwa access. We tell you about any extra document for your case." },
      ],
    },
    ur: {
      primaryKeyword: "کفالت منتقلی",
      secondaryKeywords: ["نقل کفالہ سعودی عرب", "سروس ٹرانسفر قوی", "kafalat transfer Saudi"],
      metaDescription:
        "تسامی کے ساتھ قوی کے ذریعے سعودی عرب میں ورکر کی کفالت منتقلی (نقل خدمات): ٹرانسفر آفر کی تیاری اور منظوری تک مکمل پیروی، واٹس ایپ پر اپڈیٹ۔",
      intro:
        "نقل خدمات، جسے عام طور پر «کفالت منتقلی» کہا جاتا ہے، قوی پلیٹ فارم کے ذریعے غیر ملکی ورکر کو ایک ادارے سے دوسرے ادارے میں منتقل کرنا ہے۔ نیا ادارہ آفر بھیجتا ہے جسے ورکر قبول کرتا ہے، اور معاہدے کی صورت کے مطابق موجودہ آجر کی منظوری ہمیشہ ضروری نہیں ہوتی۔ تسامی درخواست تیار کرتا ہے اور منتقلی مکمل ہونے تک پیروی کرتا ہے۔",
      who: [
        "وہ ادارے جو باہر سے بلانے کے بجائے سعودی عرب میں موجود ورکر رکھنا چاہتے ہیں۔",
        "وہ ورکر جنہیں نئی نوکری ملی ہے اور قانونی طریقے سے منتقل ہونا چاہتے ہیں۔",
        "ادارے جو اپنی شاخوں کے درمیان ورکر منتقل کرنا چاہتے ہیں۔",
      ],
      steps: [
        "نئے ادارے کی معلومات، ورکر کا اقامہ نمبر اور پیشہ بھیجیں۔",
        "ہم نطاقات میں ادارے کی اہلیت اور ورکر کے اقامہ و انشورنس کی جانچ کرتے ہیں۔",
        "ہم قوی پر ٹرانسفر آفر جمع کرتے ہیں اور ورکر کو قبول کرنے کی رہنمائی دیتے ہیں۔",
        "منظوریوں اور فیس کی ادائیگی سے لے کر منتقلی مکمل ہونے تک پیروی کرتے ہیں۔",
      ],
      tips: [
        "یقینی بنائیں کہ نیا ادارہ نطاقات کے لحاظ سے ٹرانسفر لے سکتا ہے۔",
        "درخواست کے وقت ورکر کا اقامہ درست ہونا چاہیے۔",
        "دیکھیں کہ نئی نوکری کے مطابق پیشہ تبدیل کرنا تو ضروری نہیں۔",
        "فیس پچھلی منتقلیوں کی تعداد کے مطابق بدلتی ہے، ہم پہلے بتا دیتے ہیں۔",
      ],
      local: "ہم مکہ، ریاض، جدہ، دمام اور پورے سعودی عرب میں یہ کام آن لائن کرتے ہیں۔",
      faqs: [
        { q: "کفالت منتقلی اور نقل خدمات میں کیا فرق ہے؟", a: "دونوں ایک ہی کام ہیں۔ نقل خدمات سرکاری نام ہے اور کفالت منتقلی عام نام۔" },
        { q: "کیا موجودہ آجر کی منظوری ضروری ہے؟", a: "معاہدے کی صورت پر منحصر ہے۔ بعض حالات میں منظوری کے بغیر منتقلی ممکن ہے، ہم پہلے آپ کا کیس دیکھتے ہیں۔" },
        { q: "شروع کرنے کے لیے کیا چاہیے؟", a: "نئے ادارے کی معلومات، ورکر کا اقامہ نمبر اور قوی تک رسائی۔" },
      ],
    },
    hi: {
      primaryKeyword: "ट्रांसफर ऑफ सर्विस",
      secondaryKeywords: ["सऊदी कफ़ाला ट्रांसफर", "क़िवा ट्रांसफर", "sponsorship transfer Saudi"],
      metaDescription:
        "तसामी के साथ क़िवा से सऊदी अरब में वर्कर का ट्रांसफर ऑफ सर्विस (कफ़ाला ट्रांसफर): ऑफ़र की तैयारी और मंज़ूरी तक पूरा फ़ॉलो-अप, व्हाट्सऐप पर अपडेट।",
      intro:
        "ट्रांसफर ऑफ सर्विस, जिसे आम तौर पर «कफ़ाला ट्रांसफर» कहा जाता है, क़िवा प्लेटफ़ॉर्म से विदेशी कर्मचारी को एक प्रतिष्ठान से दूसरे में ले जाना है। नया नियोक्ता ऑफ़र भेजता है जिसे कर्मचारी स्वीकार करता है, और अनुबंध के अनुसार मौजूदा नियोक्ता की मंज़ूरी हमेशा ज़रूरी नहीं होती। तसामी आवेदन तैयार करता है और ट्रांसफर पूरा होने तक फ़ॉलो करता है।",
      who: [
        "प्रतिष्ठान जो विदेश से बुलाने के बजाय सऊदी में मौजूद कर्मचारी रखना चाहते हैं।",
        "कर्मचारी जिन्हें नई नौकरी मिली है और क़ानूनी तरीके से ट्रांसफर चाहते हैं।",
        "कंपनियाँ जो अपनी शाखाओं के बीच कर्मचारी ट्रांसफर करना चाहती हैं।",
      ],
      steps: [
        "नए प्रतिष्ठान की जानकारी, कर्मचारी का इक़ामा नंबर और पेशा भेजें।",
        "हम निताक़ात में पात्रता और इक़ामा व इंश्योरेंस की जाँच करते हैं।",
        "हम क़िवा पर ट्रांसफर ऑफ़र जमा करते हैं और कर्मचारी को स्वीकार करने में मदद करते हैं।",
        "मंज़ूरी और फ़ीस भुगतान से लेकर ट्रांसफर पूरा होने तक फ़ॉलो करते हैं।",
      ],
      tips: [
        "सुनिश्चित करें कि नया प्रतिष्ठान निताक़ात के अनुसार ट्रांसफर ले सकता है।",
        "आवेदन के समय कर्मचारी का इक़ामा वैध होना चाहिए।",
        "देखें कि नई नौकरी के अनुसार पेशा बदलना ज़रूरी तो नहीं।",
        "फ़ीस पिछले ट्रांसफ़र की संख्या पर निर्भर करती है, हम पहले बता देते हैं।",
      ],
      local: "हम मक्का, रियाद, जेद्दा, दम्माम और पूरे सऊदी अरब में यह काम ऑनलाइन करते हैं।",
      faqs: [
        { q: "कफ़ाला ट्रांसफर और ट्रांसफर ऑफ सर्विस में क्या फ़र्क़ है?", a: "दोनों एक ही प्रक्रिया हैं। ट्रांसफर ऑफ सर्विस आधिकारिक नाम है।" },
        { q: "क्या मौजूदा नियोक्ता की मंज़ूरी ज़रूरी है?", a: "अनुबंध पर निर्भर है। कुछ मामलों में बिना मंज़ूरी ट्रांसफर संभव है, हम पहले आपका मामला देखते हैं।" },
        { q: "शुरू करने के लिए क्या चाहिए?", a: "नए प्रतिष्ठान की जानकारी, इक़ामा नंबर और क़िवा एक्सेस।" },
      ],
    },
  },

  exitReentryIssue: {
    ar: {
      primaryKeyword: "خروج وعودة",
      secondaryKeywords: ["إصدار تأشيرة خروج وعودة", "خروج وعودة مفرد", "خروج وعودة متعدد", "exit re-entry visa"],
      metaDescription:
        "إصدار تأشيرة خروج وعودة في السعودية عبر تسامي: نراجع سريان الإقامة والجواز، ونصدر التأشيرة المفردة أو المتعددة عبر أبشر أو مقيم بسرعة ونؤكد لك الحالة.",
      intro:
        "تأشيرة الخروج والعودة تسمح للمقيم بالسفر خارج المملكة والعودة بنفس الإقامة، وتصدر إلكترونياً عبر أبشر للأفراد أو مقيم للمنشآت بعد سداد رسومها. تكون مفردة أو متعددة، ويشترط أن تكون الإقامة والجواز ساريين. تسامي تراجع البيانات وتصدر التأشيرة وتؤكد لك حالتها قبل سفرك.",
      who: [
        "منشأة تريد منح عامل إجازة سفر وعودة.",
        "كفيل فرد لسائق خاص أو عمالة منزلية.",
        "مقيم يحتاج من يتابع له الإصدار بشكل صحيح قبل موعد السفر.",
      ],
      steps: [
        "ترسل بيانات المكفول وموعد السفر المتوقع ونوع التأشيرة (مفردة أو متعددة).",
        "نتحقق من سريان الإقامة والجواز وعدم وجود ما يمنع الإصدار.",
        "نوضح لك الرسوم حسب مدة التأشيرة لتسددها، ثم نصدر التأشيرة عبر المنصة.",
        "نرسل لك تأكيد الإصدار ونذكّرك بآخر موعد للخروج والعودة.",
      ],
      tips: [
        "اطلب التأشيرة قبل موعد السفر بوقت كافٍ لتفادي أي تعطيل.",
        "تأكد أن صلاحية الإقامة والجواز تغطي فترة السفر.",
        "اختر المتعددة إذا كان العامل سيسافر أكثر من مرة خلال الفترة.",
        "إن احتجت تمديد التأشيرة والعامل خارج المملكة، تواصل معنا قبل انتهائها.",
      ],
      local:
        "نصدر تأشيرات الخروج والعودة لعملائنا في مكة المكرمة وجدة والرياض والدمام وكل مناطق المملكة عبر أبشر ومقيم دون حاجة للحضور.",
      faqs: [
        { q: "كيف أطلب خروج وعودة عبر تسامي؟", a: "أرسل بيانات المكفول ومدة السفر عبر نموذج الطلب أو واتساب، وننجز الإصدار عبر القنوات الرسمية ونرسل لك التأكيد." },
        { q: "ما الفرق بين خروج وعودة وخروج نهائي؟", a: "الخروج والعودة للسفر والرجوع بنفس الإقامة، أما الخروج النهائي فينهي الإقامة. نوضح لك الأنسب لحالتك." },
        { q: "هل يمكن تمديد تأشيرة الخروج والعودة؟", a: "في حالات كثيرة يمكن التمديد إلكترونياً قبل انتهائها، ولدينا صفحة مخصصة لتمديد الخروج والعودة." },
      ],
    },
    en: {
      primaryKeyword: "exit re-entry visa",
      secondaryKeywords: ["exit re-entry Saudi Arabia", "single exit re-entry", "multiple exit re-entry", "exit and return visa"],
      metaDescription:
        "Exit re-entry visa in Saudi Arabia with Tasami: we check iqama and passport validity, issue single or multiple visas via Absher or Muqeem and confirm the status.",
      intro:
        "An exit re-entry visa lets a resident travel abroad and return on the same iqama. It is issued online through Absher (individuals) or Muqeem (establishments) once the fee is paid, as a single or multiple visa, and requires a valid iqama and passport. Tasami reviews the details, issues the visa and confirms its status before you travel.",
      who: [
        "Establishments granting a worker leave to travel and return.",
        "Individual sponsors of a private driver or domestic worker.",
        "Residents who want the visa issued correctly before their travel date.",
      ],
      steps: [
        "Send the sponsored person's details, expected travel date and visa type (single or multiple).",
        "We check the iqama and passport validity and anything that could block issuance.",
        "We confirm the fee for the chosen duration so you can pay, then issue the visa on the platform.",
        "We send you the issuance confirmation and remind you of the last exit and return dates.",
      ],
      tips: [
        "Request the visa well before the travel date.",
        "Make sure the iqama and passport validity cover the travel period.",
        "Choose a multiple visa if the worker will travel more than once in the period.",
        "If you need an extension while the worker is abroad, contact us before it expires.",
      ],
      local:
        "We issue exit re-entry visas for clients in Makkah, Jeddah, Riyadh, Dammam and every region of the Kingdom via Absher and Muqeem, with no office visit needed.",
      faqs: [
        { q: "How do I request an exit re-entry visa through Tasami?", a: "Send the sponsored person's details and travel period via the form or WhatsApp; we issue it through the official channels and confirm." },
        { q: "What is the difference between exit re-entry and final exit?", a: "Exit re-entry is for travelling and returning on the same iqama; final exit ends the iqama. We advise which fits your case." },
        { q: "Can an exit re-entry visa be extended?", a: "In many cases it can be extended online before it expires — see our exit re-entry extension page." },
      ],
    },
    ur: {
      primaryKeyword: "خروج و عودہ",
      secondaryKeywords: ["ایگزٹ ری انٹری ویزا", "exit reentry Saudi", "خروج و عودہ ملٹی پل"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں خروج و عودہ ویزا: اقامہ اور پاسپورٹ کی جانچ، ابشر یا مقیم سے سنگل یا ملٹی پل ویزا کا اجرا اور تصدیق۔",
      intro:
        "خروج و عودہ ویزا مقیم کو سعودی عرب سے باہر جا کر اسی اقامہ پر واپس آنے کی اجازت دیتا ہے۔ یہ فیس ادا کرنے کے بعد ابشر یا مقیم سے آن لائن جاری ہوتا ہے، سنگل یا ملٹی پل ہو سکتا ہے، اور اقامہ و پاسپورٹ کا درست ہونا ضروری ہے۔ تسامی معلومات چیک کر کے ویزا جاری کرتا ہے اور سفر سے پہلے تصدیق دیتا ہے۔",
      who: [
        "ادارے جو ورکر کو چھٹی پر بھیجنا چاہتے ہیں۔",
        "پرائیویٹ ڈرائیور یا گھریلو ملازم کے کفیل۔",
        "مقیم جو سفر سے پہلے درست طریقے سے ویزا لینا چاہتے ہیں۔",
      ],
      steps: [
        "مکفول کی معلومات، سفر کی تاریخ اور ویزا کی قسم بھیجیں۔",
        "ہم اقامہ اور پاسپورٹ کی میعاد چیک کرتے ہیں۔",
        "مدت کے مطابق فیس بتاتے ہیں، پھر پلیٹ فارم سے ویزا جاری کرتے ہیں۔",
        "اجرا کی تصدیق اور واپسی کی آخری تاریخ بھیجتے ہیں۔",
      ],
      tips: [
        "سفر سے کافی پہلے ویزا کی درخواست دیں۔",
        "اقامہ اور پاسپورٹ کی میعاد سفر کی مدت سے زیادہ ہونی چاہیے۔",
        "بار بار سفر ہو تو ملٹی پل ویزا لیں۔",
        "باہر ہوتے ہوئے توسیع چاہیے تو میعاد ختم ہونے سے پہلے رابطہ کریں۔",
      ],
      local: "ہم مکہ، جدہ، ریاض، دمام اور پورے سعودی عرب میں ابشر اور مقیم سے ویزا جاری کرتے ہیں۔",
      faqs: [
        { q: "خروج و عودہ اور فائنل ایگزٹ میں کیا فرق ہے؟", a: "خروج و عودہ سفر کر کے واپس آنے کے لیے ہے، فائنل ایگزٹ اقامہ ختم کر دیتا ہے۔" },
        { q: "کیا ویزا میں توسیع ہو سکتی ہے؟", a: "اکثر صورتوں میں میعاد ختم ہونے سے پہلے آن لائن توسیع ممکن ہے۔" },
        { q: "درخواست کیسے دوں؟", a: "فارم یا واٹس ایپ پر مکفول کی معلومات اور سفر کی مدت بھیجیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "एग्ज़िट री-एंट्री वीज़ा",
      secondaryKeywords: ["सऊदी एग्ज़िट री-एंट्री", "मल्टीपल एग्ज़िट री-एंट्री", "exit reentry Saudi"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में एग्ज़िट री-एंट्री वीज़ा: इक़ामा और पासपोर्ट की जाँच, अबशर या मुक़ीम से सिंगल या मल्टीपल वीज़ा जारी और पुष्टि।",
      intro:
        "एग्ज़िट री-एंट्री वीज़ा निवासी को सऊदी से बाहर जाकर उसी इक़ामा पर लौटने की अनुमति देता है। फ़ीस भरने के बाद यह अबशर या मुक़ीम से ऑनलाइन जारी होता है, सिंगल या मल्टीपल हो सकता है, और इक़ामा व पासपोर्ट वैध होना ज़रूरी है। तसामी जानकारी जाँचकर वीज़ा जारी करता है और यात्रा से पहले पुष्टि देता है।",
      who: [
        "प्रतिष्ठान जो कर्मचारी को छुट्टी पर भेजना चाहते हैं।",
        "प्राइवेट ड्राइवर या घरेलू कामगार के कफ़ील।",
        "निवासी जो यात्रा से पहले सही तरीके से वीज़ा चाहते हैं।",
      ],
      steps: [
        "प्रायोजित व्यक्ति की जानकारी, यात्रा तिथि और वीज़ा का प्रकार भेजें।",
        "हम इक़ामा और पासपोर्ट की वैधता जाँचते हैं।",
        "अवधि के अनुसार फ़ीस बताते हैं, फिर प्लेटफ़ॉर्म से वीज़ा जारी करते हैं।",
        "जारी होने की पुष्टि और वापसी की अंतिम तिथि भेजते हैं।",
      ],
      tips: [
        "यात्रा से काफ़ी पहले वीज़ा के लिए आवेदन करें।",
        "इक़ामा और पासपोर्ट की वैधता यात्रा अवधि से ज़्यादा होनी चाहिए।",
        "बार-बार यात्रा हो तो मल्टीपल वीज़ा लें।",
        "बाहर रहते हुए एक्सटेंशन चाहिए तो समाप्ति से पहले संपर्क करें।",
      ],
      local: "हम मक्का, जेद्दा, रियाद, दम्माम और पूरे सऊदी अरब में अबशर और मुक़ीम से वीज़ा जारी करते हैं।",
      faqs: [
        { q: "एग्ज़िट री-एंट्री और फ़ाइनल एग्ज़िट में क्या फ़र्क़ है?", a: "एग्ज़िट री-एंट्री यात्रा करके लौटने के लिए है, फ़ाइनल एग्ज़िट इक़ामा ख़त्म करता है।" },
        { q: "क्या वीज़ा बढ़ाया जा सकता है?", a: "अक्सर समाप्ति से पहले ऑनलाइन एक्सटेंशन संभव है।" },
        { q: "आवेदन कैसे करें?", a: "फ़ॉर्म या व्हाट्सऐप पर जानकारी और यात्रा अवधि भेजें।" },
      ],
    },
  },

  finalExit: {
    ar: {
      primaryKeyword: "خروج نهائي",
      secondaryKeywords: ["تأشيرة خروج نهائي", "إصدار خروج نهائي", "خروج نهائي للعامل", "final exit visa"],
      metaDescription:
        "إصدار تأشيرة خروج نهائي للعامل في السعودية عبر تسامي: نراجع المخالفات والالتزامات المعلقة ونصدر التأشيرة عبر مقيم أو أبشر ونوضح لك ما يلزم قبل السفر.",
      intro:
        "تأشيرة الخروج النهائي تنهي إقامة العامل الوافد في المملكة، وتصدر إلكترونياً عبر مقيم أو أبشر بعد التأكد من عدم وجود مخالفات أو التزامات معلقة على العامل. بعد إصدارها يجب أن يغادر العامل خلال المدة المحددة في التأشيرة. تسامي تراجع الملف وتصدر التأشيرة وتوضح لك الخطوات المتبقية.",
      who: [
        "منشأة انتهى عقد عامل لديها وتريد إنهاء إقامته نظامياً.",
        "كفيل فرد لسائق أو عمالة منزلية تنتهي خدمتهم.",
        "عامل يريد مغادرة المملكة نهائياً بإجراء صحيح.",
      ],
      steps: [
        "ترسل رقم إقامة العامل وموعد المغادرة المتوقع.",
        "نتحقق من المخالفات المرورية والرسوم والمركبات المسجلة باسم العامل وأي بلاغات قائمة.",
        "نصدر تأشيرة الخروج النهائي عبر المنصة الرسمية بعد معالجة ما يمنع الإصدار.",
        "نرسل لك التأكيد ونذكّرك بالمدة المتاحة للمغادرة وما يلزم إنهاؤه قبلها.",
      ],
      tips: [
        "سدّد المخالفات والرسوم المستحقة قبل طلب الخروج النهائي.",
        "انقل ملكية أي مركبة مسجلة باسم العامل أو ألغِ تسجيلها قبل الإصدار.",
        "أنهِ مستحقات العامل ونهاية الخدمة قبل مغادرته.",
        "تابع مغادرة العامل خلال مدة التأشيرة لتجنب أي إشكال على المنشأة.",
      ],
      local:
        "ننجز الخروج النهائي للمنشآت والأفراد في مكة المكرمة والرياض وجدة والدمام وباقي مدن المملكة إلكترونياً عبر مقيم وأبشر.",
      faqs: [
        { q: "ما الذي يمنع إصدار الخروج النهائي؟", a: "غالباً وجود مخالفات أو رسوم غير مسددة، أو مركبة مسجلة باسم العامل، أو بلاغ قائم. نراجع ذلك قبل التقديم." },
        { q: "هل يمكن إلغاء الخروج النهائي بعد إصداره؟", a: "يمكن الإلغاء في حالات معينة قبل مغادرة العامل وخلال مدة التأشيرة. تواصل معنا ونراجع حالتك." },
        { q: "ما الفرق بينه وبين الخروج والعودة؟", a: "الخروج النهائي ينهي الإقامة، أما الخروج والعودة فهو للسفر والعودة بنفس الإقامة." },
      ],
    },
    en: {
      primaryKeyword: "final exit visa",
      secondaryKeywords: ["final exit Saudi Arabia", "issue final exit", "worker final exit", "cancel final exit"],
      metaDescription:
        "Final exit visa in Saudi Arabia with Tasami: we check violations and pending obligations, issue the visa via Muqeem or Absher and explain what to finish before departure.",
      intro:
        "A final exit visa ends an expatriate worker's residency in the Kingdom. It is issued online through Muqeem or Absher once there are no violations or pending obligations on the worker, who must then leave within the period stated on the visa. Tasami reviews the file, issues the visa and explains the remaining steps.",
      who: [
        "Establishments whose worker's contract has ended.",
        "Individual sponsors of a driver or domestic worker whose service is ending.",
        "Workers who want to leave the Kingdom permanently the correct way.",
      ],
      steps: [
        "Send the worker's iqama number and expected departure date.",
        "We check traffic violations, fees, vehicles registered to the worker and any open reports.",
        "We issue the final exit visa on the official platform after clearing anything that blocks it.",
        "We send confirmation and remind you of the departure window and what to finish before it.",
      ],
      tips: [
        "Pay outstanding violations and fees before requesting final exit.",
        "Transfer or deregister any vehicle registered to the worker first.",
        "Settle the worker's dues and end-of-service benefits before departure.",
        "Make sure the worker leaves within the visa period to avoid issues for the establishment.",
      ],
      local:
        "We handle final exit for establishments and individuals in Makkah, Riyadh, Jeddah, Dammam and across the Kingdom online via Muqeem and Absher.",
      faqs: [
        { q: "What can block a final exit visa?", a: "Usually unpaid violations or fees, a vehicle registered to the worker, or an open report. We check these before applying." },
        { q: "Can a final exit be cancelled after issuance?", a: "In certain cases, before the worker leaves and within the visa period. Contact us and we will review your case." },
        { q: "How is it different from exit re-entry?", a: "Final exit ends the iqama; exit re-entry is for travelling and returning on the same iqama." },
      ],
    },
    ur: {
      primaryKeyword: "فائنل ایگزٹ",
      secondaryKeywords: ["فائنل ایگزٹ ویزا", "خروج نہائی", "final exit karna"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں فائنل ایگزٹ ویزا: خلاف ورزیوں اور واجبات کی جانچ، مقیم یا ابشر سے اجرا اور روانگی سے پہلے کے مراحل کی وضاحت۔",
      intro:
        "فائنل ایگزٹ ویزا غیر ملکی ورکر کا سعودی عرب میں قیام ختم کر دیتا ہے۔ یہ مقیم یا ابشر سے آن لائن جاری ہوتا ہے، بشرطیکہ ورکر پر کوئی خلاف ورزی یا واجب الادا رقم نہ ہو، اور ورکر کو ویزا میں دی گئی مدت میں روانہ ہونا ہوتا ہے۔ تسامی فائل چیک کرتا ہے، ویزا جاری کرتا ہے اور باقی مراحل بتاتا ہے۔",
      who: [
        "ادارے جن کے ورکر کا معاہدہ ختم ہو گیا ہے۔",
        "ڈرائیور یا گھریلو ملازم کے کفیل جن کی خدمت ختم ہو رہی ہے۔",
        "ورکر جو درست طریقے سے مستقل واپس جانا چاہتے ہیں۔",
      ],
      steps: [
        "ورکر کا اقامہ نمبر اور روانگی کی متوقع تاریخ بھیجیں۔",
        "ہم ٹریفک جرمانے، فیس، گاڑیاں اور کھلی رپورٹس چیک کرتے ہیں۔",
        "رکاوٹیں دور ہونے کے بعد سرکاری پلیٹ فارم سے ویزا جاری کرتے ہیں۔",
        "تصدیق بھیجتے ہیں اور روانگی کی مدت یاد دلاتے ہیں۔",
      ],
      tips: [
        "پہلے تمام جرمانے اور فیس ادا کریں۔",
        "ورکر کے نام پر گاڑی ہو تو پہلے منتقل کریں۔",
        "روانگی سے پہلے ورکر کے واجبات اور اینڈ آف سروس ادا کریں۔",
        "ورکر ویزا کی مدت میں روانہ ہو جائے۔",
      ],
      local: "ہم مکہ، ریاض، جدہ، دمام اور پورے سعودی عرب میں آن لائن فائنل ایگزٹ کرتے ہیں۔",
      faqs: [
        { q: "فائنل ایگزٹ میں کیا رکاوٹ بنتا ہے؟", a: "عموماً غیر ادا شدہ جرمانے، ورکر کے نام گاڑی یا کوئی کھلی رپورٹ۔" },
        { q: "کیا جاری ہونے کے بعد منسوخ ہو سکتا ہے؟", a: "بعض صورتوں میں ورکر کے جانے سے پہلے اور ویزا کی مدت کے اندر۔" },
        { q: "خروج و عودہ سے کیا فرق ہے؟", a: "فائنل ایگزٹ اقامہ ختم کرتا ہے، خروج و عودہ واپسی کے لیے ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "फ़ाइनल एग्ज़िट",
      secondaryKeywords: ["फ़ाइनल एग्ज़िट वीज़ा सऊदी", "final exit Saudi"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में फ़ाइनल एग्ज़िट वीज़ा: जुर्मानों और बकाया की जाँच, मुक़ीम या अबशर से जारी और रवानगी से पहले के कदमों की जानकारी।",
      intro:
        "फ़ाइनल एग्ज़िट वीज़ा विदेशी कर्मचारी का सऊदी में निवास ख़त्म करता है। यह मुक़ीम या अबशर से ऑनलाइन जारी होता है, बशर्ते कर्मचारी पर कोई जुर्माना या बकाया न हो, और कर्मचारी को वीज़ा में दी गई अवधि में देश छोड़ना होता है। तसामी फ़ाइल जाँचता है, वीज़ा जारी करता है और बाकी कदम बताता है।",
      who: [
        "प्रतिष्ठान जिनके कर्मचारी का अनुबंध ख़त्म हो गया है।",
        "ड्राइवर या घरेलू कामगार के कफ़ील जिनकी सेवा ख़त्म हो रही है।",
        "कर्मचारी जो सही तरीके से स्थायी रूप से लौटना चाहते हैं।",
      ],
      steps: [
        "कर्मचारी का इक़ामा नंबर और रवानगी की संभावित तिथि भेजें।",
        "हम ट्रैफ़िक जुर्माने, फ़ीस, वाहन और खुली रिपोर्ट जाँचते हैं।",
        "रुकावटें दूर होने के बाद आधिकारिक प्लेटफ़ॉर्म से वीज़ा जारी करते हैं।",
        "पुष्टि भेजते हैं और रवानगी की अवधि याद दिलाते हैं।",
      ],
      tips: [
        "पहले सभी जुर्माने और फ़ीस भरें।",
        "कर्मचारी के नाम पर वाहन हो तो पहले ट्रांसफर करें।",
        "रवानगी से पहले कर्मचारी के बकाया और एंड-ऑफ़-सर्विस का भुगतान करें।",
        "कर्मचारी वीज़ा अवधि में ही रवाना हो।",
      ],
      local: "हम मक्का, रियाद, जेद्दा, दम्माम और पूरे सऊदी अरब में ऑनलाइन फ़ाइनल एग्ज़िट कराते हैं।",
      faqs: [
        { q: "फ़ाइनल एग्ज़िट में क्या रुकावट बनता है?", a: "आमतौर पर बकाया जुर्माने, कर्मचारी के नाम वाहन या कोई खुली रिपोर्ट।" },
        { q: "क्या जारी होने के बाद रद्द हो सकता है?", a: "कुछ मामलों में कर्मचारी के जाने से पहले और वीज़ा अवधि के भीतर।" },
        { q: "एग्ज़िट री-एंट्री से क्या फ़र्क़ है?", a: "फ़ाइनल एग्ज़िट इक़ामा ख़त्म करता है, एग्ज़िट री-एंट्री वापसी के लिए है।" },
      ],
    },
  },

  openCr: {
    ar: {
      primaryKeyword: "فتح سجل تجاري",
      secondaryKeywords: ["استخراج سجل تجاري", "حجز اسم تجاري", "تأسيس مؤسسة فردية", "commercial registration Saudi"],
      metaDescription:
        "فتح سجل تجاري في السعودية عبر تسامي: من حجز الاسم التجاري واختيار النشاط حتى إصدار السجل والاشتراك في الغرفة، مع توجيهك للتراخيص التي يحتاجها نشاطك.",
      intro:
        "فتح السجل التجاري هو أول خطوة لممارسة أي نشاط تجاري نظامي في المملكة، ويتم إلكترونياً عبر المركز السعودي للأعمال ووزارة التجارة: حجز الاسم التجاري، ثم اختيار النشاط، ثم إصدار السجل وسداد رسومه. تسامي ترتب لك هذه الخطوات وتوضح ما يلزم بعد السجل مثل الغرفة التجارية والتراخيص.",
      who: [
        "رواد أعمال يؤسسون مؤسسة فردية لأول مرة.",
        "شركاء يؤسسون شركة ويحتاجون تنظيم خطوات التأسيس.",
        "منشآت قائمة تريد فتح سجل فرعي أو نشاط جديد.",
      ],
      steps: [
        "نتعرف على نشاطك ونقترح الكيان المناسب (مؤسسة فردية أو شركة).",
        "نحجز الاسم التجاري ونختار رموز النشاط المطابقة لعملك.",
        "نصدر السجل عبر المنصة الرسمية بعد سداد الرسوم الحكومية.",
        "نوجهك للخطوات التالية: الاشتراك في الغرفة، والتسجيل في التأمينات وقوى والزكاة، والرخصة البلدية عند الحاجة.",
      ],
      tips: [
        "اختر اسماً تجارياً واضحاً واحتفظ ببدائل في حال كان الاسم محجوزاً.",
        "اختيار النشاط الصحيح يحدد التراخيص المطلوبة لاحقاً، فلا تستعجل فيه.",
        "بعض الأنشطة تحتاج ترخيصاً من جهة مختصة قبل البدء الفعلي.",
        "احتفظ ببيانات الدخول للمنصات الحكومية في مكان آمن بعد التأسيس.",
      ],
      local:
        "نخدم رواد الأعمال في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، لأن التأسيس يتم إلكترونياً عبر المركز السعودي للأعمال.",
      faqs: [
        { q: "هل تساعدون في فتح سجل تجاري من الصفر؟", a: "نعم، من حجز الاسم حتى إصدار السجل، مع توجيهك للتراخيص المرتبطة بنشاطك." },
        { q: "ما الفرق بين المؤسسة الفردية والشركة؟", a: "المؤسسة الفردية يملكها شخص واحد وتكون مسؤوليته غير محدودة غالباً، والشركة ذات المسؤولية المحدودة تفصل ذمة الشركاء. نوضح الأنسب لنشاطك." },
        { q: "ماذا بعد إصدار السجل؟", a: "عادةً الاشتراك في الغرفة التجارية، والتسجيل في التأمينات وقوى وهيئة الزكاة، والرخصة البلدية إذا كان لديك محل." },
      ],
    },
    en: {
      primaryKeyword: "commercial registration Saudi Arabia",
      secondaryKeywords: ["open CR Saudi", "reserve trade name", "establish sole proprietorship", "business setup Saudi Arabia"],
      metaDescription:
        "Open a commercial registration (CR) in Saudi Arabia with Tasami: from trade name reservation and activity selection to CR issuance and chamber membership.",
      intro:
        "A commercial registration (CR) is the first step to running any legal business in the Kingdom. It is done online through the Saudi Business Center and the Ministry of Commerce: reserve a trade name, choose the activity, then issue the CR and pay its fee. Tasami organises these steps and explains what comes after, such as Chamber of Commerce membership and licences.",
      who: [
        "Entrepreneurs setting up a sole proprietorship for the first time.",
        "Partners forming a company who need the setup steps organised.",
        "Existing businesses opening a branch CR or a new activity.",
      ],
      steps: [
        "We learn about your business and suggest the right entity (sole proprietorship or company).",
        "We reserve the trade name and select the activity codes that match your work.",
        "We issue the CR on the official platform once the government fee is paid.",
        "We guide the next steps: chamber membership, GOSI, Qiwa and ZATCA registration, and a municipal licence if needed.",
      ],
      tips: [
        "Pick a clear trade name and keep alternatives in case it is taken.",
        "The activity you choose determines later licences, so choose carefully.",
        "Some activities need a licence from a specialised authority before you start.",
        "Keep your government platform logins safe after setup.",
      ],
      local:
        "We serve entrepreneurs in Makkah, Jeddah, Riyadh, Dammam and every city in the Kingdom, since setup is done online through the Saudi Business Center.",
      faqs: [
        { q: "Can you open a CR from scratch?", a: "Yes — from trade name reservation to CR issuance, with guidance on licences for your activity." },
        { q: "Sole proprietorship or company?", a: "A sole proprietorship is owned by one person, usually with unlimited liability; an LLC separates the partners' liability. We advise what fits your business." },
        { q: "What comes after the CR?", a: "Usually chamber membership, GOSI, Qiwa and ZATCA registration, and a municipal licence if you have a shop." },
      ],
    },
    ur: {
      primaryKeyword: "کمرشل رجسٹریشن سعودی عرب",
      secondaryKeywords: ["سجل تجاری", "سعودی عرب میں کمپنی رجسٹریشن", "Saudi company registration Pakistani"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں کمرشل رجسٹریشن (سجل تجاری): تجارتی نام کی بکنگ اور سرگرمی کے انتخاب سے لے کر سجل کے اجرا اور چیمبر رکنیت تک۔",
      intro:
        "کمرشل رجسٹریشن (سجل تجاری) سعودی عرب میں کسی بھی قانونی کاروبار کا پہلا قدم ہے۔ یہ سعودی بزنس سینٹر اور وزارت تجارت کے ذریعے آن لائن ہوتی ہے: تجارتی نام بک کریں، سرگرمی منتخب کریں، پھر فیس ادا کر کے سجل جاری کریں۔ تسامی یہ مراحل ترتیب دیتا ہے اور بعد کے کام جیسے چیمبر اور لائسنس بھی بتاتا ہے۔",
      who: [
        "پہلی بار ادارہ قائم کرنے والے کاروباری افراد۔",
        "شراکت دار جو کمپنی بنا رہے ہیں۔",
        "موجودہ کاروبار جو نئی شاخ یا سرگرمی کھولنا چاہتے ہیں۔",
      ],
      steps: [
        "ہم آپ کے کاروبار کو سمجھ کر مناسب قسم تجویز کرتے ہیں۔",
        "تجارتی نام بک کرتے ہیں اور سرگرمی کے کوڈ منتخب کرتے ہیں۔",
        "فیس ادا ہونے کے بعد سرکاری پلیٹ فارم سے سجل جاری کرتے ہیں۔",
        "اگلے مراحل بتاتے ہیں: چیمبر، گوسی، قوی، زکاۃ اور بلدیہ لائسنس۔",
      ],
      tips: [
        "واضح تجارتی نام چنیں اور متبادل بھی رکھیں۔",
        "درست سرگرمی بعد کے لائسنس طے کرتی ہے۔",
        "کچھ سرگرمیوں کے لیے متعلقہ ادارے کا لائسنس ضروری ہے۔",
        "سرکاری پلیٹ فارمز کی لاگ ان معلومات محفوظ رکھیں۔",
      ],
      local: "ہم مکہ، جدہ، ریاض، دمام اور پورے سعودی عرب میں آن لائن خدمت کرتے ہیں۔",
      faqs: [
        { q: "کیا آپ شروع سے سجل تجاری کھول دیتے ہیں؟", a: "جی ہاں، نام کی بکنگ سے سجل کے اجرا تک۔" },
        { q: "سجل کے بعد کیا کرنا ہوتا ہے؟", a: "عموماً چیمبر رکنیت، گوسی، قوی اور زکاۃ میں رجسٹریشن، اور دکان ہو تو بلدیہ لائسنس۔" },
        { q: "انفرادی ادارہ یا کمپنی؟", a: "ہم آپ کے کاروبار کے مطابق مناسب قسم بتاتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में कंपनी रजिस्ट्रेशन",
      secondaryKeywords: ["कमर्शियल रजिस्ट्रेशन सऊदी", "सऊदी में बिज़नेस शुरू करना", "Saudi CR"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में कमर्शियल रजिस्ट्रेशन (CR): ट्रेड नेम बुकिंग और गतिविधि चयन से लेकर CR जारी होने और चैंबर सदस्यता तक।",
      intro:
        "कमर्शियल रजिस्ट्रेशन (CR) सऊदी अरब में किसी भी क़ानूनी व्यवसाय का पहला कदम है। यह सऊदी बिज़नेस सेंटर और वाणिज्य मंत्रालय से ऑनलाइन होता है: ट्रेड नेम बुक करें, गतिविधि चुनें, फिर फ़ीस भरकर CR जारी करें। तसामी ये कदम व्यवस्थित करता है और आगे के काम जैसे चैंबर और लाइसेंस भी बताता है।",
      who: [
        "पहली बार प्रतिष्ठान शुरू करने वाले उद्यमी।",
        "कंपनी बना रहे साझेदार।",
        "मौजूदा व्यवसाय जो नई शाखा या गतिविधि खोलना चाहते हैं।",
      ],
      steps: [
        "हम आपके व्यवसाय को समझकर सही प्रकार सुझाते हैं।",
        "ट्रेड नेम बुक करते हैं और गतिविधि कोड चुनते हैं।",
        "फ़ीस भरने के बाद आधिकारिक प्लेटफ़ॉर्म से CR जारी करते हैं।",
        "आगे के कदम बताते हैं: चैंबर, GOSI, क़िवा, ज़कात और बलदिया लाइसेंस।",
      ],
      tips: [
        "साफ़ ट्रेड नेम चुनें और विकल्प भी रखें।",
        "सही गतिविधि बाद के लाइसेंस तय करती है।",
        "कुछ गतिविधियों के लिए संबंधित विभाग का लाइसेंस ज़रूरी है।",
        "सरकारी प्लेटफ़ॉर्म की लॉगिन जानकारी सुरक्षित रखें।",
      ],
      local: "हम मक्का, जेद्दा, रियाद, दम्माम और पूरे सऊदी अरब में ऑनलाइन सेवा देते हैं।",
      faqs: [
        { q: "क्या आप शुरू से CR खुलवाते हैं?", a: "हाँ, नाम बुकिंग से CR जारी होने तक।" },
        { q: "CR के बाद क्या करना होता है?", a: "आमतौर पर चैंबर सदस्यता, GOSI, क़िवा और ज़कात में पंजीकरण, और दुकान हो तो बलदिया लाइसेंस।" },
        { q: "एकल प्रतिष्ठान या कंपनी?", a: "हम आपके व्यवसाय के अनुसार सही प्रकार बताते हैं।" },
      ],
    },
  },

  renewCr: {
    ar: {
      primaryKeyword: "تجديد سجل تجاري",
      secondaryKeywords: ["تأكيد بيانات السجل التجاري", "تجديد السجل التجاري إلكترونياً", "تعديل السجل التجاري"],
      metaDescription:
        "تجديد السجل التجاري في السعودية عبر تسامي: نتابع التأكيد السنوي لبيانات السجل وفق النظام الجديد، ونحدّث البيانات والنشاط ونتابع الاشتراك في الغرفة التجارية.",
      intro:
        "ما زال كثيرون يسمونه «تجديد السجل التجاري»، لكن نظام السجل التجاري الجديد ألغى تاريخ انتهاء السجل واستبدله بتأكيد بيانات السجل سنوياً عبر منصة وزارة التجارة، وعدم التأكيد في موعده قد يعرّض السجل للإيقاف. تسامي تراجع وضع سجلك وتتابع التأكيد السنوي وأي تحديث مطلوب للبيانات أو النشاط.",
      who: [
        "أصحاب المؤسسات والشركات الذين اقترب موعد تأكيد بيانات سجلاتهم.",
        "منشآت أُوقف سجلها أو ظهرت عليه ملاحظات تحتاج معالجة.",
        "من يريد تحديث النشاط أو العنوان أو بيانات المالك ضمن نفس الإجراء.",
        "أصحاب الفروع والسجلات المتعددة الذين يصعب عليهم متابعة مواعيد كل سجل على حدة.",
      ],
      steps: [
        "ترسل رقم السجل (الرقم الموحد) وبيانات التواصل.",
        "نراجع حالة السجل وموعد التأكيد السنوي وأي ملاحظات أو التزامات مرتبطة.",
        "نؤكد البيانات أو نحدّثها عبر المنصة ونتابع سداد الرسوم إن وُجدت.",
        "نتابع الاشتراك في الغرفة التجارية ونرسل لك ما يثبت اكتمال الإجراء.",
      ],
      tips: [
        "لا تنتظر الموعد الأخير؛ إيقاف السجل يعطل خدماتك في المنصات الأخرى.",
        "تأكد أن العنوان الوطني ومعلومات التواصل محدّثة.",
        "راجع أنشطة السجل؛ النشاط غير المطابق يسبب مشاكل في التراخيص.",
        "احتفظ برقمك الموحد، فهو المرجع في كل المعاملات.",
        "سجّل تذكيراً سنوياً بموعد التأكيد، أو اترك المتابعة لنا لنذكّرك قبله بوقت كافٍ.",
      ],
      local:
        "نتابع سجلات المنشآت في مكة المكرمة والرياض وجدة والدمام وكل مدن المملكة إلكترونياً دون حاجة لزيارة أي فرع.",
      faqs: [
        { q: "هل ما زال السجل التجاري يحتاج تجديداً؟", a: "وفق النظام الجديد لم يعد للسجل تاريخ انتهاء، لكن يجب تأكيد بياناته سنوياً. نتابع لك هذا التأكيد في موعده." },
        { q: "ماذا يحدث إذا لم أؤكد بيانات السجل؟", a: "قد يُوقف السجل وتتعطل خدمات المنشأة في المنصات المرتبطة. نساعدك في معالجة الإيقاف إن حدث." },
        { q: "كيف أجدد السجل عبر تسامي؟", a: "أرسل رقم السجل وبيانات التواصل، ونكمل الإجراء عبر وزارة التجارة مع متابعة حتى الاكتمال." },
      ],
    },
    en: {
      primaryKeyword: "commercial registration renewal",
      secondaryKeywords: ["CR renewal Saudi Arabia", "CR annual confirmation", "update commercial registration"],
      metaDescription:
        "CR renewal in Saudi Arabia with Tasami: we handle the annual commercial registration data confirmation under the new law, update details and activities, and follow chamber membership.",
      intro:
        "Many still call it \"CR renewal\", but the new Commercial Register Law removed the CR expiry date and replaced it with an annual confirmation of the CR data on the Ministry of Commerce platform; missing it can lead to suspension. Tasami reviews your CR status and handles the annual confirmation and any required update to details or activities.",
      who: [
        "Business owners whose annual CR confirmation is coming up.",
        "Establishments whose CR was suspended or has notes to resolve.",
        "Anyone updating the activity, address or owner details in the same step.",
      ],
      steps: [
        "Send the CR (unified) number and contact details.",
        "We review the CR status, annual confirmation date and any linked notes or obligations.",
        "We confirm or update the data on the platform and handle any fees.",
        "We follow chamber membership and send you proof the process is complete.",
      ],
      tips: [
        "Don't wait for the deadline; a suspended CR blocks services on other platforms.",
        "Make sure the national address and contact details are current.",
        "Review the CR activities — a mismatched activity causes licensing problems.",
        "Keep your unified number handy; it is the reference for every transaction.",
      ],
      local:
        "We manage CRs for businesses in Makkah, Riyadh, Jeddah, Dammam and every city in the Kingdom online, with no branch visit needed.",
      faqs: [
        { q: "Does a CR still need renewal?", a: "Under the new law the CR no longer expires, but its data must be confirmed annually. We handle that on time for you." },
        { q: "What if I don't confirm the CR data?", a: "The CR may be suspended and linked services blocked. We can help resolve a suspension." },
        { q: "How do I renew through Tasami?", a: "Send the CR number and contact details; we complete it via the Ministry of Commerce and follow up to completion." },
      ],
    },
    ur: {
      primaryKeyword: "سجل تجاری تجدید",
      secondaryKeywords: ["کمرشل رجسٹریشن تجدید", "CR renewal Saudi"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں سجل تجاری کی تجدید: نئے قانون کے تحت سالانہ ڈیٹا تصدیق، معلومات اور سرگرمی کی اپڈیٹ اور چیمبر رکنیت کی پیروی۔",
      intro:
        "لوگ اب بھی اسے «سجل تجاری کی تجدید» کہتے ہیں، لیکن نئے قانون نے سجل کی میعاد ختم کر کے سالانہ ڈیٹا تصدیق لازمی کر دی ہے، اور وقت پر تصدیق نہ کرنے سے سجل معطل ہو سکتا ہے۔ تسامی آپ کے سجل کی صورتحال دیکھ کر سالانہ تصدیق اور ضروری اپڈیٹ مکمل کرتا ہے۔",
      who: [
        "کاروباری مالکان جن کی سالانہ تصدیق قریب ہے۔",
        "ادارے جن کا سجل معطل ہوا یا اس پر نوٹس ہے۔",
        "جو سرگرمی یا پتہ بھی اپڈیٹ کرنا چاہتے ہیں۔",
      ],
      steps: [
        "سجل نمبر (یونیفائیڈ نمبر) اور رابطہ معلومات بھیجیں۔",
        "ہم سجل کی صورتحال اور تصدیق کی تاریخ چیک کرتے ہیں۔",
        "پلیٹ فارم پر ڈیٹا کی تصدیق یا اپڈیٹ کرتے ہیں۔",
        "چیمبر رکنیت کی پیروی کرتے ہیں اور تکمیل کا ثبوت بھیجتے ہیں۔",
      ],
      tips: [
        "آخری تاریخ کا انتظار نہ کریں؛ معطل سجل دوسری سروسز بھی روک دیتا ہے۔",
        "نیشنل ایڈریس اور رابطہ معلومات اپڈیٹ رکھیں۔",
        "سجل کی سرگرمیاں درست ہونی چاہئیں۔",
        "یونیفائیڈ نمبر محفوظ رکھیں۔",
      ],
      local: "ہم پورے سعودی عرب میں یہ کام آن لائن کرتے ہیں۔",
      faqs: [
        { q: "کیا سجل تجاری کی اب بھی تجدید ہوتی ہے؟", a: "نئے قانون میں میعاد نہیں، لیکن ہر سال ڈیٹا کی تصدیق ضروری ہے۔" },
        { q: "تصدیق نہ کی تو کیا ہوگا؟", a: "سجل معطل ہو سکتا ہے۔ ہم معطلی ختم کرانے میں مدد کرتے ہیں۔" },
        { q: "تسامی سے کیسے کرواؤں؟", a: "سجل نمبر اور رابطہ معلومات بھیجیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "कमर्शियल रजिस्ट्रेशन नवीनीकरण",
      secondaryKeywords: ["सऊदी CR रिन्यू", "CR annual confirmation"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में CR नवीनीकरण: नए क़ानून के तहत सालाना डेटा पुष्टि, जानकारी व गतिविधि अपडेट और चैंबर सदस्यता का फ़ॉलो-अप।",
      intro:
        "लोग अब भी इसे «CR रिन्यू» कहते हैं, लेकिन नए क़ानून ने CR की समाप्ति तिथि हटाकर सालाना डेटा पुष्टि ज़रूरी कर दी है, और समय पर पुष्टि न करने से CR निलंबित हो सकता है। तसामी आपके CR की स्थिति देखकर सालाना पुष्टि और ज़रूरी अपडेट पूरा करता है।",
      who: [
        "कारोबारी जिनकी सालाना पुष्टि नज़दीक है।",
        "प्रतिष्ठान जिनका CR निलंबित हुआ या उस पर नोटिस है।",
        "जो गतिविधि या पता भी अपडेट करना चाहते हैं।",
      ],
      steps: [
        "CR नंबर (यूनिफ़ाइड नंबर) और संपर्क जानकारी भेजें।",
        "हम CR की स्थिति और पुष्टि की तारीख़ जाँचते हैं।",
        "प्लेटफ़ॉर्म पर डेटा की पुष्टि या अपडेट करते हैं।",
        "चैंबर सदस्यता फ़ॉलो करते हैं और पूरा होने का प्रमाण भेजते हैं।",
      ],
      tips: [
        "अंतिम तिथि का इंतज़ार न करें; निलंबित CR दूसरी सेवाएँ भी रोकता है।",
        "नेशनल एड्रेस और संपर्क जानकारी अपडेट रखें।",
        "CR की गतिविधियाँ सही होनी चाहिए।",
        "यूनिफ़ाइड नंबर संभालकर रखें।",
      ],
      local: "हम पूरे सऊदी अरब में यह काम ऑनलाइन करते हैं।",
      faqs: [
        { q: "क्या CR अब भी रिन्यू होता है?", a: "नए क़ानून में समाप्ति तिथि नहीं है, लेकिन हर साल डेटा की पुष्टि ज़रूरी है।" },
        { q: "पुष्टि न की तो क्या होगा?", a: "CR निलंबित हो सकता है। हम निलंबन हटवाने में मदद करते हैं।" },
        { q: "तसामी से कैसे कराएँ?", a: "CR नंबर और संपर्क जानकारी भेजें।" },
      ],
    },
  },

  municipalLicense: {
    ar: {
      primaryKeyword: "رخصة بلدية",
      secondaryKeywords: ["استخراج رخصة بلدية", "تجديد رخصة بلدية", "رخصة محل", "منصة بلدي"],
      metaDescription:
        "استخراج وتجديد رخصة بلدية للمحلات والمنشآت في السعودية عبر منصة بلدي مع تسامي: نراجع السجل وعقد الإيجار وشهادة السلامة ونتابع حتى إصدار الرخصة.",
      intro:
        "الرخصة البلدية (رخصة المحل) تصدر إلكترونياً عبر منصة بلدي، وتشترط عادةً سجلاً تجارياً بنشاط مطابق، وعقد إيجار موثق، وموقعاً يسمح بالنشاط، وقد تحتاج شهادة سلامة من الدفاع المدني حسب النشاط. تسامي تراجع جاهزية المتطلبات وتتابع الإصدار أو التجديد حتى تستلم الرخصة.",
      who: [
        "من يفتح محلاً أو مطعماً أو مكتباً جديداً ويحتاج رخصة تشغيل.",
        "منشآت تريد تجديد رخصتها البلدية قبل انتهائها.",
        "من نقل نشاطه إلى موقع جديد ويحتاج تحديث الرخصة.",
        "من أضاف نشاطاً جديداً لسجله ويحتاج رخصة تغطي هذا النشاط.",
        "منشآت وصلتها ملاحظة أو مخالفة من البلدية وتحتاج تصحيح وضع الرخصة.",
      ],
      steps: [
        "ترسل رقم السجل التجاري وعنوان الموقع ونوع النشاط.",
        "نراجع مطابقة النشاط للموقع، وعقد الإيجار الموثق، ومتطلبات السلامة.",
        "نقدم الطلب عبر منصة بلدي ونتابع ملاحظات البلدية وسداد الرسوم.",
        "نتابع حتى إصدار الرخصة أو تجديدها ونرسلها لك.",
      ],
      tips: [
        "تأكد قبل توقيع الإيجار أن الموقع يسمح بنشاطك.",
        "وثّق عقد الإيجار إلكترونياً، فهو مطلوب في الطلب.",
        "بعض الأنشطة تحتاج شهادة سلامة من الدفاع المدني قبل الرخصة.",
        "جدّد الرخصة قبل انتهائها لتفادي المخالفات والإغلاق.",
        "اجعل اللوحة الخارجية للمحل مطابقة للاسم التجاري المسجل، فاختلافها قد يؤخر الموافقة.",
        "عند تغيير الموقع أو النشاط حدّث السجل التجاري أولاً ثم الرخصة البلدية.",
      ],
      local:
        "نتابع الرخص البلدية للمحلات والمنشآت في مكة المكرمة وجدة والرياض والدمام وباقي المدن عبر منصة بلدي.",
      faqs: [
        { q: "ما المتطلبات الأساسية لرخصة البلدية؟", a: "عادةً سجل تجاري بنشاط مطابق، وعقد إيجار موثق، وموقع مناسب للنشاط، وشهادة سلامة لبعض الأنشطة." },
        { q: "هل تساعدون في تجديد الرخصة البلدية؟", a: "نعم، نتابع التجديد عبر منصة بلدي ونعالج أي ملاحظات حتى صدور الرخصة المجددة." },
        { q: "هل يمكن إصدار الرخصة قبل توثيق عقد الإيجار؟", a: "غالباً لا، فعقد الإيجار الموثق من المتطلبات الأساسية في منصة بلدي. نساعدك في ترتيب المتطلبات بالتسلسل الصحيح حتى لا يُرفض الطلب." },
        { q: "أفتح مطعماً، ماذا أحتاج؟", a: "غالباً سجلاً تجارياً ورخصة بلدية وشهادة سلامة ومتطلبات صحية للعاملين. نرتب لك الخطوات حسب نشاطك." },
      ],
    },
    en: {
      primaryKeyword: "municipal license Saudi Arabia",
      secondaryKeywords: ["Balady license", "shop license Saudi", "renew municipal license", "Saudi municipal license"],
      metaDescription:
        "Get or renew a municipal (Balady) license for your shop or business in Saudi Arabia with Tasami: we check the CR, lease and safety certificate and follow until issuance.",
      intro:
        "A municipal licence (shop licence) is issued online through the Balady platform. It usually requires a CR with a matching activity, a registered lease, a location that permits the activity, and for some activities a Civil Defense safety certificate. Tasami checks the requirements and follows the issuance or renewal until you receive the licence.",
      who: [
        "Anyone opening a new shop, restaurant or office who needs an operating licence.",
        "Businesses renewing their municipal licence before it expires.",
        "Businesses that moved to a new location and need the licence updated.",
      ],
      steps: [
        "Send the CR number, location address and activity type.",
        "We check the activity-location match, the registered lease and safety requirements.",
        "We submit on Balady and handle municipality notes and fee payment.",
        "We follow up until the licence is issued or renewed and send it to you.",
      ],
      tips: [
        "Before signing a lease, confirm the location allows your activity.",
        "Register the lease electronically — it is required in the application.",
        "Some activities need a Civil Defense safety certificate first.",
        "Renew before expiry to avoid fines or closure.",
      ],
      local:
        "We handle municipal licences for shops and businesses in Makkah, Jeddah, Riyadh, Dammam and other cities through Balady.",
      faqs: [
        { q: "What are the basic requirements?", a: "Usually a CR with a matching activity, a registered lease, a suitable location and, for some activities, a safety certificate." },
        { q: "Do you renew municipal licences?", a: "Yes — we follow the renewal on Balady and resolve any notes until the renewed licence is issued." },
        { q: "I'm opening a restaurant — what do I need?", a: "Typically a CR, municipal licence, safety certificate and health requirements for staff. We map the steps for your activity." },
      ],
    },
    ur: {
      primaryKeyword: "بلدیہ لائسنس",
      secondaryKeywords: ["سعودی عرب دکان لائسنس", "بلدی لائسنس تجدید"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں دکان یا ادارے کا بلدیہ لائسنس بلدی پلیٹ فارم سے: سجل، کرایہ نامہ اور سیفٹی سرٹیفکیٹ کی جانچ اور اجرا تک پیروی۔",
      intro:
        "بلدیہ لائسنس (دکان کا لائسنس) بلدی پلیٹ فارم سے آن لائن جاری ہوتا ہے۔ عموماً مطابق سرگرمی والا سجل تجاری، رجسٹرڈ کرایہ نامہ، سرگرمی کے لیے موزوں جگہ اور بعض سرگرمیوں کے لیے سول ڈیفنس سیفٹی سرٹیفکیٹ ضروری ہوتا ہے۔ تسامی تقاضے چیک کر کے لائسنس جاری ہونے تک پیروی کرتا ہے۔",
      who: [
        "نئی دکان، ریسٹورنٹ یا دفتر کھولنے والے۔",
        "ادارے جو میعاد ختم ہونے سے پہلے لائسنس تجدید کرنا چاہتے ہیں۔",
        "جنہوں نے نئی جگہ منتقلی کی ہے۔",
      ],
      steps: [
        "سجل نمبر، جگہ کا پتہ اور سرگرمی بھیجیں۔",
        "ہم جگہ اور سرگرمی کی مطابقت، کرایہ نامہ اور سیفٹی چیک کرتے ہیں۔",
        "بلدی پر درخواست دیتے ہیں اور نوٹس و فیس کی پیروی کرتے ہیں۔",
        "لائسنس جاری ہونے تک پیروی کر کے آپ کو بھیجتے ہیں۔",
      ],
      tips: [
        "کرایہ نامہ سے پہلے یقینی بنائیں کہ جگہ پر آپ کی سرگرمی کی اجازت ہے۔",
        "کرایہ نامہ الیکٹرانک طور پر رجسٹر کریں۔",
        "بعض سرگرمیوں کے لیے پہلے سیفٹی سرٹیفکیٹ ضروری ہے۔",
        "جرمانے سے بچنے کے لیے وقت پر تجدید کریں۔",
      ],
      local: "ہم مکہ، جدہ، ریاض، دمام اور دیگر شہروں میں بلدی کے ذریعے لائسنس کا کام کرتے ہیں۔",
      faqs: [
        { q: "بنیادی تقاضے کیا ہیں؟", a: "مطابق سجل، رجسٹرڈ کرایہ نامہ، موزوں جگہ اور بعض سرگرمیوں کے لیے سیفٹی سرٹیفکیٹ۔" },
        { q: "کیا آپ تجدید بھی کرتے ہیں؟", a: "جی ہاں، بلدی پر تجدید کی مکمل پیروی کرتے ہیں۔" },
        { q: "ریسٹورنٹ کھولنے کے لیے کیا چاہیے؟", a: "عموماً سجل، بلدیہ لائسنس، سیفٹی سرٹیفکیٹ اور عملے کی صحت کی شرائط۔" },
      ],
    },
    hi: {
      primaryKeyword: "बलदिया लाइसेंस",
      secondaryKeywords: ["सऊदी दुकान लाइसेंस", "बलदी लाइसेंस नवीनीकरण"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में दुकान या प्रतिष्ठान का बलदिया लाइसेंस बलदी प्लेटफ़ॉर्म से: CR, किरायानामा और सेफ़्टी सर्टिफ़िकेट की जाँच और जारी होने तक फ़ॉलो-अप।",
      intro:
        "बलदिया लाइसेंस (दुकान लाइसेंस) बलदी प्लेटफ़ॉर्म से ऑनलाइन जारी होता है। आमतौर पर मेल खाती गतिविधि वाला CR, पंजीकृत किरायानामा, गतिविधि के लिए उपयुक्त जगह और कुछ गतिविधियों के लिए सिविल डिफ़ेंस सेफ़्टी सर्टिफ़िकेट ज़रूरी होता है। तसामी ज़रूरतें जाँचकर लाइसेंस जारी होने तक फ़ॉलो करता है।",
      who: [
        "नई दुकान, रेस्टोरेंट या दफ़्तर खोलने वाले।",
        "प्रतिष्ठान जो समाप्ति से पहले लाइसेंस रिन्यू करना चाहते हैं।",
        "जिन्होंने नई जगह पर कारोबार ले जाया है।",
      ],
      steps: [
        "CR नंबर, जगह का पता और गतिविधि भेजें।",
        "हम जगह-गतिविधि मेल, किरायानामा और सुरक्षा ज़रूरतें जाँचते हैं।",
        "बलदी पर आवेदन करते हैं और नोटिस व फ़ीस फ़ॉलो करते हैं।",
        "लाइसेंस जारी होने तक फ़ॉलो करके आपको भेजते हैं।",
      ],
      tips: [
        "किरायानामा से पहले पक्का करें कि जगह पर आपकी गतिविधि की अनुमति है।",
        "किरायानामा इलेक्ट्रॉनिक रूप से पंजीकृत कराएँ।",
        "कुछ गतिविधियों के लिए पहले सेफ़्टी सर्टिफ़िकेट ज़रूरी है।",
        "जुर्माने से बचने के लिए समय पर नवीनीकरण करें।",
      ],
      local: "हम मक्का, जेद्दा, रियाद, दम्माम और अन्य शहरों में बलदी के ज़रिए लाइसेंस का काम करते हैं।",
      faqs: [
        { q: "बुनियादी ज़रूरतें क्या हैं?", a: "मेल खाता CR, पंजीकृत किरायानामा, उपयुक्त जगह और कुछ गतिविधियों के लिए सेफ़्टी सर्टिफ़िकेट।" },
        { q: "क्या आप नवीनीकरण भी करते हैं?", a: "हाँ, बलदी पर नवीनीकरण का पूरा फ़ॉलो-अप करते हैं।" },
        { q: "रेस्टोरेंट खोलने के लिए क्या चाहिए?", a: "आमतौर पर CR, बलदिया लाइसेंस, सेफ़्टी सर्टिफ़िकेट और कर्मचारियों की स्वास्थ्य शर्तें।" },
      ],
    },
  },
};

export function getServiceGuide(key: string, locale: string): ServiceGuide | null {
  const def = GUIDES[key];
  if (!def) return null;
  return def[(locale as Lang) in def ? (locale as Lang) : "ar"];
}

export const GUIDED_SERVICE_KEYS = Object.keys(GUIDES);
