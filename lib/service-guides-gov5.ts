import type { GuideDef } from "./service-guides";

/**
 * Fifth batch of government guides (chamber, attestation, media licensing).
 * No government fees, fixed durations or legal promises.
 */
export const GOV5_GUIDES: Record<string, GuideDef> = {
  chamberMembership: {
    ar: {
      primaryKeyword: "اشتراك الغرفة التجارية",
      secondaryKeywords: ["تجديد اشتراك الغرفة التجارية", "شهادة اشتراك الغرفة", "عضوية الغرفة التجارية للمؤسسة", "تعقيب الغرفة التجارية"],
      metaDescription:
        "الاشتراك أو تجديد عضوية الغرفة التجارية لمنشأتك مع تسامي: نراجع بيانات السجل ونتابع الاشتراك وإصدار الشهادة خطوة بخطوة عبر واتساب. لسنا جهة حكومية.",
      intro:
        "عضوية الغرفة التجارية تمنح منشأتك شهادة اشتراك قد تُطلب في بعض المعاملات، مثل تصديق المستندات التجارية، أو التقدم لبعض المنافسات والجهات، أو التعامل مع جهات خارجية تطلب ما يثبت قيد المنشأة. كثير من أصحاب المنشآت لا يعرفون هل يحتاجون الاشتراك فعلاً، أو أي فئة تناسبهم، أو كيف يجددون قبل الانتهاء. في تسامي نوضح لك هل معاملتك تتطلب اشتراك الغرفة، ونراجع بيانات سجلك، ونتابع الاشتراك أو التجديد عبر الخدمات الإلكترونية للغرفة حتى تصدر الشهادة، مع تذكيرك بموعد التجديد القادم.",
      who: [
        "المنشآت الجديدة التي تحتاج شهادة اشتراك لأول مرة.",
        "من انتهى اشتراكه ويحتاج التجديد لإنجاز معاملة.",
        "من يحتاج تصديق مستندات تجارية تتطلب عضوية سارية.",
        "من لا يعرف الفئة المناسبة لمنشأته.",
      ],
      steps: [
        "نراجع حاجتك الفعلية للاشتراك حسب المعاملة المطلوبة.",
        "نراجع بيانات السجل التجاري والفئة المناسبة للمنشأة.",
        "نتابع طلب الاشتراك أو التجديد عبر الخدمات الإلكترونية للغرفة.",
        "نوضح لك رسوم الاشتراك لتسددها بنفسك عبر القنوات الرسمية.",
        "نتابع إصدار الشهادة ونرسل لك نسخة منها ونذكّرك بموعد التجديد.",
      ],
      tips: [
        "تأكد من حاجتك للاشتراك قبل الدفع، فبعض المعاملات لا تتطلبه.",
        "حدّث بيانات السجل التجاري قبل الاشتراك لتطابق الشهادة.",
        "جدد قبل الانتهاء إذا كانت لديك معاملات دورية تتطلب الشهادة.",
        "احتفظ بنسخة إلكترونية من الشهادة لسهولة إرسالها.",
        "راجع الخدمات المتاحة للمشتركين فقد تفيد منشأتك.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل اشتراك الغرفة التجارية إلزامي؟", a: "يختلف ذلك حسب الأنظمة الحالية ونوع المعاملة التي تحتاجها، ونوضح لك إن كانت حالتك تتطلبه قبل البدء." },
        { q: "متى أحتاج شهادة اشتراك الغرفة؟", a: "غالباً عند تصديق مستندات تجارية أو عند طلبها من جهة تتعامل معها منشأتك." },
        { q: "هل يمكن الاشتراك إلكترونياً؟", a: "نعم، تتيح الغرف التجارية خدمات إلكترونية للاشتراك والتجديد، ونتابعها معك." },
        { q: "من يدفع رسوم الاشتراك؟", a: "تُدفع الرسوم عبر القنوات الرسمية للغرفة باسم منشأتك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي تابعة للغرفة التجارية؟", a: "لا، نحن مكتب خدمات تعقيب مستقل، ولسنا جهة حكومية أو تابعة للغرفة." },
      ],
    },
    en: {
      primaryKeyword: "chamber of commerce membership",
      secondaryKeywords: ["renew chamber membership", "chamber membership certificate", "chamber of commerce subscription Saudi", "chamber follow-up"],
      metaDescription:
        "Subscribe to or renew your Chamber of Commerce membership with Tasami: we review your register details and follow the subscription and certificate step by step via WhatsApp. Not a government entity.",
      intro:
        "Chamber of Commerce membership gives your establishment a certificate that may be requested in some transactions, such as attesting commercial documents, applying to certain tenders or entities, or dealing with external parties requiring proof of registration. Many owners don't know whether they actually need it, which category fits, or how to renew before expiry. At Tasami we explain whether your transaction requires membership, review your register details and follow subscription or renewal through the chamber's e-services until the certificate is issued, reminding you of the next renewal.",
      who: [
        "New establishments needing a membership certificate for the first time.",
        "Anyone whose membership expired and needs renewal for a transaction.",
        "Anyone attesting commercial documents that require valid membership.",
        "Anyone unsure which category fits their establishment.",
      ],
      steps: [
        "We review whether your transaction actually needs membership.",
        "We review your register details and suitable category.",
        "We follow the subscription or renewal through the chamber's e-services.",
        "We explain membership fees so you pay them yourself through official channels.",
        "We follow certificate issuance, send you a copy and remind you of renewal.",
      ],
      tips: [
        "Confirm you need membership before paying; some transactions don't require it.",
        "Update register details first so the certificate matches.",
        "Renew before expiry if you have recurring transactions needing it.",
        "Keep an electronic copy of the certificate for easy sharing.",
        "Review member services that may benefit your business.",
      ],
      local:
        "We serve establishments in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Is chamber membership mandatory?", a: "It depends on current regulations and the transaction you need; we tell you whether your case requires it before starting." },
        { q: "When do I need a membership certificate?", a: "Usually when attesting commercial documents or when requested by an entity your business deals with." },
        { q: "Can I subscribe online?", a: "Yes, chambers offer e-services for subscription and renewal, and we follow them with you." },
        { q: "Is Tasami affiliated with the chamber?", a: "No, we are an independent follow-up services office, not a government body or part of the chamber." },
      ],
    },
    ur: {
      primaryKeyword: "چیمبر آف کامرس رکنیت",
      secondaryKeywords: ["چیمبر رکنیت تجدید", "چیمبر رکنیت سرٹیفکیٹ", "سعودی چیمبر سبسکرپشن", "چیمبر فالو اپ"],
      metaDescription:
        "تسامی کے ساتھ چیمبر آف کامرس کی رکنیت لیں یا تجدید کریں: ہم رجسٹر کی تفصیلات دیکھتے ہیں اور رکنیت و سرٹیفکیٹ قدم بہ قدم واٹس ایپ پر فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "چیمبر آف کامرس کی رکنیت آپ کے ادارے کو ایک سرٹیفکیٹ دیتی ہے جو بعض معاملات میں مانگا جا سکتا ہے، جیسے تجارتی دستاویزات کی تصدیق، بعض ٹینڈرز یا اداروں میں درخواست، یا رجسٹریشن کا ثبوت مانگنے والے بیرونی فریقوں سے معاملہ۔ بہت سے مالکان نہیں جانتے کہ انہیں واقعی اس کی ضرورت ہے، کون سی کیٹیگری مناسب ہے یا میعاد ختم ہونے سے پہلے تجدید کیسے کریں۔ تسامی میں ہم بتاتے ہیں کہ آپ کے معاملے کو رکنیت چاہیے یا نہیں، رجسٹر کی تفصیلات دیکھتے ہیں اور چیمبر کی ای سروسز پر رکنیت یا تجدید سرٹیفکیٹ جاری ہونے تک فالو کرتے ہیں۔",
      who: [
        "نئے ادارے جنہیں پہلی بار رکنیت سرٹیفکیٹ چاہیے۔",
        "جن کی رکنیت ختم ہو گئی اور کسی معاملے کے لیے تجدید چاہیے۔",
        "جنہیں ایسی تجارتی دستاویزات کی تصدیق کرانی ہے جن کے لیے رکنیت ضروری ہے۔",
        "جو نہیں جانتے کہ کون سی کیٹیگری مناسب ہے۔",
      ],
      steps: [
        "ہم دیکھتے ہیں کہ آپ کے معاملے کو واقعی رکنیت چاہیے یا نہیں۔",
        "ہم رجسٹر کی تفصیلات اور مناسب کیٹیگری دیکھتے ہیں۔",
        "ہم چیمبر کی ای سروسز پر رکنیت یا تجدید فالو کرتے ہیں۔",
        "ہم رکنیت فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم سرٹیفکیٹ کا اجرا فالو کر کے کاپی بھیجتے ہیں اور تجدید یاد دلاتے ہیں۔",
      ],
      tips: [
        "ادائیگی سے پہلے تصدیق کریں کہ رکنیت کی ضرورت ہے۔",
        "پہلے رجسٹر کی تفصیلات اپڈیٹ کریں تاکہ سرٹیفکیٹ مطابقت رکھے۔",
        "اگر بار بار ضرورت پڑتی ہے تو میعاد سے پہلے تجدید کریں۔",
        "سرٹیفکیٹ کی الیکٹرانک کاپی رکھیں۔",
        "اراکین کے لیے دستیاب خدمات دیکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا چیمبر رکنیت لازمی ہے؟", a: "یہ موجودہ قوانین اور آپ کے معاملے پر منحصر ہے؛ ہم پہلے بتاتے ہیں کہ آپ کو ضرورت ہے یا نہیں۔" },
        { q: "رکنیت سرٹیفکیٹ کب چاہیے؟", a: "عام طور پر تجارتی دستاویزات کی تصدیق کے وقت یا کسی ادارے کے مانگنے پر۔" },
        { q: "کیا آن لائن رکنیت ممکن ہے؟", a: "جی ہاں، چیمبرز رکنیت اور تجدید کی ای سروسز دیتے ہیں اور ہم انہیں فالو کرتے ہیں۔" },
        { q: "کیا تسامی چیمبر سے وابستہ ہے؟", a: "نہیں، ہم آزاد فالو اپ سروسز آفس ہیں، سرکاری ادارہ یا چیمبر کا حصہ نہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "चैंबर ऑफ कॉमर्स सदस्यता",
      secondaryKeywords: ["चैंबर सदस्यता रिन्यूअल", "चैंबर सदस्यता प्रमाणपत्र", "सऊदी चैंबर सब्सक्रिप्शन", "चैंबर फॉलो-अप"],
      metaDescription:
        "तसामी के साथ चैंबर ऑफ कॉमर्स की सदस्यता लें या रिन्यू करें: हम रजिस्टर विवरण देखते हैं और सदस्यता व प्रमाणपत्र चरण-दर-चरण व्हाट्सऐप पर फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "चैंबर ऑफ कॉमर्स की सदस्यता आपके संस्थान को एक प्रमाणपत्र देती है जो कुछ लेन-देन में मांगा जा सकता है, जैसे व्यावसायिक दस्तावेज़ों का सत्यापन, कुछ टेंडर या संस्थानों में आवेदन, या पंजीकरण का प्रमाण मांगने वाले बाहरी पक्षों से व्यवहार। कई मालिक नहीं जानते कि उन्हें वास्तव में इसकी ज़रूरत है, कौन सी श्रेणी उपयुक्त है या समाप्ति से पहले रिन्यू कैसे करें। तसामी में हम बताते हैं कि आपके लेन-देन को सदस्यता चाहिए या नहीं, रजिस्टर विवरण देखते हैं और चैंबर की ई-सेवाओं पर सदस्यता या रिन्यूअल प्रमाणपत्र जारी होने तक फॉलो करते हैं।",
      who: [
        "नए संस्थान जिन्हें पहली बार सदस्यता प्रमाणपत्र चाहिए।",
        "जिनकी सदस्यता खत्म हो गई और किसी लेन-देन के लिए रिन्यूअल चाहिए।",
        "जिन्हें ऐसे व्यावसायिक दस्तावेज़ सत्यापित कराने हैं जिनके लिए सदस्यता ज़रूरी है।",
        "जो नहीं जानते कि कौन सी श्रेणी उपयुक्त है।",
      ],
      steps: [
        "हम देखते हैं कि आपके लेन-देन को वास्तव में सदस्यता चाहिए या नहीं।",
        "हम रजिस्टर विवरण और उपयुक्त श्रेणी देखते हैं।",
        "हम चैंबर की ई-सेवाओं पर सदस्यता या रिन्यूअल फॉलो करते हैं।",
        "हम सदस्यता शुल्क समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम प्रमाणपत्र जारी होना फॉलो करके कॉपी भेजते हैं और रिन्यूअल याद दिलाते हैं।",
      ],
      tips: [
        "भुगतान से पहले पुष्टि करें कि सदस्यता की ज़रूरत है।",
        "पहले रजिस्टर विवरण अपडेट करें ताकि प्रमाणपत्र मेल खाए।",
        "अगर बार-बार ज़रूरत पड़ती है तो समाप्ति से पहले रिन्यू करें।",
        "प्रमाणपत्र की इलेक्ट्रॉनिक कॉपी रखें।",
        "सदस्यों के लिए उपलब्ध सेवाएं देखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या चैंबर सदस्यता अनिवार्य है?", a: "यह मौजूदा नियमों और आपके लेन-देन पर निर्भर है; हम पहले बताते हैं कि आपको ज़रूरत है या नहीं।" },
        { q: "सदस्यता प्रमाणपत्र कब चाहिए?", a: "आमतौर पर व्यावसायिक दस्तावेज़ों के सत्यापन के समय या किसी संस्थान के मांगने पर।" },
        { q: "क्या ऑनलाइन सदस्यता संभव है?", a: "हां, चैंबर सदस्यता और रिन्यूअल की ई-सेवाएं देते हैं और हम उन्हें फॉलो करते हैं।" },
        { q: "क्या तसामी चैंबर से जुड़ा है?", a: "नहीं, हम स्वतंत्र फॉलो-अप सेवा कार्यालय हैं, सरकारी संस्था या चैंबर का हिस्सा नहीं।" },
      ],
    },
  },

  chamberAttestation: {
    ar: {
      primaryKeyword: "تصديق مستندات من الغرفة التجارية",
      secondaryKeywords: ["تصديق الغرفة التجارية", "تصديق شهادة منشأ", "تصديق عقد عمل من الغرفة", "تصديق فواتير تجارية"],
      metaDescription:
        "تصديق المستندات التجارية من الغرفة التجارية مثل الشهادات والعقود والفواتير مع تسامي: نراجع المستند ونتابع التصديق إلكترونياً خطوة بخطوة. لسنا جهة حكومية.",
      intro:
        "كثير من المستندات التجارية تحتاج تصديق الغرفة التجارية قبل استخدامها لدى جهات أخرى، مثل شهادات الخبرة والرواتب، وعقود العمل، والفواتير التجارية، وشهادات المنشأ للتصدير، وبعض الخطابات الرسمية الصادرة من المنشأة. التصديق يتطلب أن يكون المستند صادراً بشكل صحيح ومطابقاً لبيانات المنشأة، وأن تكون عضوية الغرفة سارية في الحالات التي تتطلب ذلك. في تسامي نراجع المستند قبل رفعه للتأكد من سلامة البيانات والصيغة، ونتابع طلب التصديق عبر الخدمات الإلكترونية للغرفة، ونرسل لك النسخة المصدقة، ونوضح لك إن كان المستند يحتاج توثيقاً إضافياً من وزارة الخارجية.",
      who: [
        "المنشآت التي تصدر شهادات خبرة أو رواتب لموظفيها.",
        "المصدّرون الذين يحتاجون تصديق شهادات المنشأ والفواتير.",
        "الموظفون الذين يحتاجون تصديق شهادة من جهة عملهم.",
        "من يحتاج تصديق عقد أو خطاب تجاري لاستخدامه خارج المملكة.",
      ],
      steps: [
        "نراجع المستند وصيغته ومطابقته لبيانات المنشأة.",
        "نتأكد من سريان عضوية الغرفة إذا كانت مطلوبة.",
        "نتابع رفع طلب التصديق عبر الخدمات الإلكترونية للغرفة.",
        "نوضح لك رسوم التصديق لتسددها بنفسك عبر القنوات الرسمية.",
        "نرسل لك النسخة المصدقة ونوضح إن كان يلزم توثيق الخارجية.",
      ],
      tips: [
        "تأكد أن المستند على ورق المنشأة الرسمي وموقّع ومختوم.",
        "طابق الاسم ورقم السجل في المستند مع السجل التجاري.",
        "اعرف الجهة التي ستستخدم المستند لتعرف هل تحتاج توثيقاً إضافياً.",
        "احتفظ بنسخة إلكترونية من المستند المصدق.",
        "راجع صلاحية عضوية الغرفة قبل طلب التصديق.",
      ],
      local:
        "نخدم المنشآت والأفراد في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "ما المستندات التي تصدقها الغرفة التجارية؟", a: "مثل شهادات الخبرة والرواتب وعقود العمل والفواتير وشهادات المنشأ وبعض الخطابات التجارية." },
        { q: "هل يلزم أن تكون عضوية الغرفة سارية؟", a: "في كثير من الحالات نعم، ونراجع ذلك معك قبل رفع الطلب." },
        { q: "هل يكفي تصديق الغرفة لاستخدام المستند خارج المملكة؟", a: "غالباً يحتاج المستند بعدها توثيقاً من وزارة الخارجية، ونوضح لك ذلك حسب الجهة." },
        { q: "من يدفع رسوم التصديق؟", a: "تُدفع الرسوم عبر القنوات الرسمية باسمك أو باسم المنشأة، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب مستقل، والتصديق يتم من الغرفة التجارية نفسها." },
      ],
    },
    en: {
      primaryKeyword: "chamber of commerce document attestation",
      secondaryKeywords: ["chamber attestation Saudi", "certificate of origin attestation", "employment contract chamber attestation", "commercial invoice attestation"],
      metaDescription:
        "Attest commercial documents at the Chamber of Commerce, such as certificates, contracts and invoices, with Tasami: we review the document and follow online attestation step by step. Not a government entity.",
      intro:
        "Many commercial documents need Chamber of Commerce attestation before use with other parties, such as experience and salary certificates, employment contracts, commercial invoices, certificates of origin for export and some official letters issued by the establishment. Attestation requires the document to be issued correctly and match the establishment's data, with valid chamber membership where required. At Tasami we review the document before submission to make sure data and format are sound, follow the attestation request through the chamber's e-services, send you the attested copy and tell you whether the document also needs Ministry of Foreign Affairs attestation.",
      who: [
        "Establishments issuing experience or salary certificates to staff.",
        "Exporters needing certificates of origin and invoices attested.",
        "Employees needing a certificate from their employer attested.",
        "Anyone needing a contract or business letter attested for use abroad.",
      ],
      steps: [
        "We review the document, its format and match with establishment data.",
        "We confirm chamber membership is valid if required.",
        "We follow the attestation request through the chamber's e-services.",
        "We explain attestation fees so you pay them yourself through official channels.",
        "We send the attested copy and explain whether MOFA attestation is needed.",
      ],
      tips: [
        "Make sure the document is on official letterhead, signed and stamped.",
        "Match the name and register number with the commercial register.",
        "Know which party will use the document to see if extra attestation is needed.",
        "Keep an electronic copy of the attested document.",
        "Check chamber membership validity before requesting attestation.",
      ],
      local:
        "We serve establishments and individuals in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Which documents does the chamber attest?", a: "Such as experience and salary certificates, employment contracts, invoices, certificates of origin and some business letters." },
        { q: "Must chamber membership be valid?", a: "In many cases yes; we check that with you before submitting." },
        { q: "Is chamber attestation enough for use abroad?", a: "The document often then needs Ministry of Foreign Affairs attestation; we explain depending on the receiving party." },
        { q: "Is Tasami a government entity?", a: "No, we are an independent follow-up services office; attestation is done by the chamber itself." },
      ],
    },
    ur: {
      primaryKeyword: "چیمبر آف کامرس سے دستاویزات کی تصدیق",
      secondaryKeywords: ["چیمبر تصدیق سعودی", "سرٹیفکیٹ آف اوریجن تصدیق", "ملازمت معاہدے کی چیمبر تصدیق", "تجارتی انوائس تصدیق"],
      metaDescription:
        "تسامی کے ساتھ سرٹیفکیٹس، معاہدوں اور انوائسز جیسی تجارتی دستاویزات چیمبر آف کامرس سے تصدیق کرائیں: ہم دستاویز دیکھتے ہیں اور آن لائن تصدیق قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "بہت سی تجارتی دستاویزات کو دوسرے فریقوں کے پاس استعمال سے پہلے چیمبر آف کامرس کی تصدیق چاہیے، جیسے تجربہ اور تنخواہ سرٹیفکیٹ، ملازمت کے معاہدے، تجارتی انوائسز، برآمد کے لیے سرٹیفکیٹ آف اوریجن اور ادارے کے بعض سرکاری خطوط۔ تصدیق کے لیے دستاویز کا درست جاری ہونا، ادارے کے ڈیٹا سے مطابقت اور ضرورت ہو تو چیمبر رکنیت کا درست ہونا ضروری ہے۔ تسامی میں ہم جمع کرانے سے پہلے دستاویز دیکھتے ہیں، چیمبر کی ای سروسز پر تصدیق فالو کرتے ہیں، تصدیق شدہ کاپی بھیجتے ہیں اور بتاتے ہیں کہ کیا وزارت خارجہ کی تصدیق بھی چاہیے۔",
      who: [
        "وہ ادارے جو ملازمین کو تجربہ یا تنخواہ سرٹیفکیٹ دیتے ہیں۔",
        "وہ برآمد کنندگان جنہیں سرٹیفکیٹ آف اوریجن اور انوائسز کی تصدیق چاہیے۔",
        "وہ ملازمین جنہیں اپنے آجر کا سرٹیفکیٹ تصدیق کرانا ہے۔",
        "جنہیں بیرون ملک استعمال کے لیے معاہدہ یا خط تصدیق کرانا ہے۔",
      ],
      steps: [
        "ہم دستاویز، اس کی شکل اور ادارے کے ڈیٹا سے مطابقت دیکھتے ہیں۔",
        "ضرورت ہو تو ہم چیمبر رکنیت کی تصدیق کرتے ہیں۔",
        "ہم چیمبر کی ای سروسز پر تصدیق کی درخواست فالو کرتے ہیں۔",
        "ہم تصدیق فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم تصدیق شدہ کاپی بھیجتے ہیں اور وزارت خارجہ کی ضرورت بتاتے ہیں۔",
      ],
      tips: [
        "یقینی بنائیں کہ دستاویز سرکاری لیٹر ہیڈ پر، دستخط شدہ اور مہر شدہ ہے۔",
        "نام اور رجسٹر نمبر کمرشل رجسٹر سے ملائیں۔",
        "جانیں کہ دستاویز کون استعمال کرے گا تاکہ اضافی تصدیق کا پتا چلے۔",
        "تصدیق شدہ دستاویز کی الیکٹرانک کاپی رکھیں۔",
        "تصدیق سے پہلے چیمبر رکنیت کی میعاد دیکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں اداروں اور افراد کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "چیمبر کون سی دستاویزات تصدیق کرتا ہے؟", a: "جیسے تجربہ و تنخواہ سرٹیفکیٹ، ملازمت معاہدے، انوائسز، سرٹیفکیٹ آف اوریجن اور بعض خطوط۔" },
        { q: "کیا چیمبر رکنیت کا درست ہونا ضروری ہے؟", a: "کئی صورتوں میں ہاں؛ ہم جمع کرانے سے پہلے دیکھتے ہیں۔" },
        { q: "کیا بیرون ملک استعمال کے لیے چیمبر تصدیق کافی ہے؟", a: "اکثر بعد میں وزارت خارجہ کی تصدیق بھی چاہیے؛ ہم فریق کے مطابق بتاتے ہیں۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم آزاد فالو اپ سروسز آفس ہیں؛ تصدیق چیمبر خود کرتا ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "चैंबर ऑफ कॉमर्स से दस्तावेज़ सत्यापन",
      secondaryKeywords: ["चैंबर सत्यापन सऊदी", "सर्टिफिकेट ऑफ ओरिजिन सत्यापन", "रोज़गार अनुबंध चैंबर सत्यापन", "व्यावसायिक इनवॉइस सत्यापन"],
      metaDescription:
        "तसामी के साथ प्रमाणपत्र, अनुबंध और इनवॉइस जैसे व्यावसायिक दस्तावेज़ चैंबर ऑफ कॉमर्स से सत्यापित कराएं: हम दस्तावेज़ देखते हैं और ऑनलाइन सत्यापन चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "कई व्यावसायिक दस्तावेज़ों को दूसरे पक्षों के पास इस्तेमाल से पहले चैंबर ऑफ कॉमर्स का सत्यापन चाहिए, जैसे अनुभव और वेतन प्रमाणपत्र, रोज़गार अनुबंध, व्यावसायिक इनवॉइस, निर्यात के लिए सर्टिफिकेट ऑफ ओरिजिन और संस्थान के कुछ आधिकारिक पत्र। सत्यापन के लिए दस्तावेज़ का सही जारी होना, संस्थान के डेटा से मेल खाना और ज़रूरत हो तो चैंबर सदस्यता का वैध होना ज़रूरी है। तसामी में हम जमा करने से पहले दस्तावेज़ देखते हैं, चैंबर की ई-सेवाओं पर सत्यापन फॉलो करते हैं, सत्यापित कॉपी भेजते हैं और बताते हैं कि क्या विदेश मंत्रालय का सत्यापन भी चाहिए।",
      who: [
        "वे संस्थान जो कर्मचारियों को अनुभव या वेतन प्रमाणपत्र देते हैं।",
        "वे निर्यातक जिन्हें सर्टिफिकेट ऑफ ओरिजिन और इनवॉइस सत्यापित कराने हैं।",
        "वे कर्मचारी जिन्हें अपने नियोक्ता का प्रमाणपत्र सत्यापित कराना है।",
        "जिन्हें विदेश में इस्तेमाल के लिए अनुबंध या पत्र सत्यापित कराना है।",
      ],
      steps: [
        "हम दस्तावेज़, उसका प्रारूप और संस्थान के डेटा से मेल देखते हैं।",
        "ज़रूरत हो तो हम चैंबर सदस्यता की पुष्टि करते हैं।",
        "हम चैंबर की ई-सेवाओं पर सत्यापन अनुरोध फॉलो करते हैं।",
        "हम सत्यापन शुल्क समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम सत्यापित कॉपी भेजते हैं और विदेश मंत्रालय की ज़रूरत बताते हैं।",
      ],
      tips: [
        "सुनिश्चित करें कि दस्तावेज़ आधिकारिक लेटरहेड पर, हस्ताक्षरित और मुहरबंद है।",
        "नाम और रजिस्टर नंबर कमर्शियल रजिस्टर से मिलाएं।",
        "जानें कि दस्तावेज़ कौन इस्तेमाल करेगा ताकि अतिरिक्त सत्यापन का पता चले।",
        "सत्यापित दस्तावेज़ की इलेक्ट्रॉनिक कॉपी रखें।",
        "सत्यापन से पहले चैंबर सदस्यता की वैधता देखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में संस्थानों और व्यक्तियों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "चैंबर कौन से दस्तावेज़ सत्यापित करता है?", a: "जैसे अनुभव व वेतन प्रमाणपत्र, रोज़गार अनुबंध, इनवॉइस, सर्टिफिकेट ऑफ ओरिजिन और कुछ पत्र।" },
        { q: "क्या चैंबर सदस्यता का वैध होना ज़रूरी है?", a: "कई मामलों में हां; हम जमा करने से पहले जांचते हैं।" },
        { q: "क्या विदेश में इस्तेमाल के लिए चैंबर सत्यापन काफी है?", a: "अक्सर बाद में विदेश मंत्रालय का सत्यापन भी चाहिए; हम पक्ष के अनुसार बताते हैं।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम स्वतंत्र फॉलो-अप सेवा कार्यालय हैं; सत्यापन चैंबर स्वयं करता है।" },
      ],
    },
  },

  mofaAttestation: {
    ar: {
      primaryKeyword: "توثيق مستندات من وزارة الخارجية",
      secondaryKeywords: ["توثيق الخارجية السعودية", "تصديق شهادة من الخارجية", "توثيق وكالة من الخارجية", "توثيق مستندات للخارج"],
      metaDescription:
        "توثيق المستندات من وزارة الخارجية للاستخدام داخل المملكة أو خارجها مع تسامي: نراجع المستند وتسلسل التصديقات ونتابع التوثيق خطوة بخطوة. لسنا جهة حكومية.",
      intro:
        "عند استخدام مستند سعودي خارج المملكة، أو استخدام مستند أجنبي داخلها، يُطلب غالباً توثيقه من وزارة الخارجية بعد استكمال التصديقات السابقة من الجهة المصدرة أو الغرفة التجارية أو السفارة المعنية. من أمثلة ذلك الشهادات الدراسية وشهادات الخبرة والوكالات والعقود والمستندات التجارية. أكثر سبب لرفض التوثيق هو نقص أحد التصديقات المسبقة أو الخطأ في ترتيبها. في تسامي نراجع معك المستند والجهة التي ستستخدمه، ونحدد تسلسل التصديقات المطلوب بدقة، ونتابع طلب التوثيق عبر الخدمات الإلكترونية لوزارة الخارجية حتى تحصل على المستند الموثق.",
      who: [
        "من يحتاج توثيق شهادة دراسية أو خبرة لاستخدامها في الخارج.",
        "المنشآت التي ترسل عقوداً أو مستندات تجارية لجهات أجنبية.",
        "من لديه مستند أجنبي يريد اعتماده داخل المملكة.",
        "من يحتاج توثيق وكالة صادرة في المملكة لاستخدامها خارجها.",
      ],
      steps: [
        "نراجع المستند والجهة والدولة التي سيُستخدم فيها.",
        "نحدد التصديقات المسبقة المطلوبة وترتيبها الصحيح.",
        "نتابع استكمال أي تصديق ناقص قبل التوثيق.",
        "نوضح لك الرسوم الحكومية لتسددها بنفسك عبر القنوات الرسمية.",
        "نتابع طلب التوثيق عبر الخدمات الإلكترونية لوزارة الخارجية حتى اكتماله.",
      ],
      tips: [
        "اسأل الجهة المستقبلة عن متطلباتها قبل البدء بالتوثيق.",
        "لا تتجاوز أي تصديق مسبق، فذلك أكثر أسباب الرفض.",
        "تأكد من تطابق الأسماء في المستند مع الجواز أو الهوية.",
        "احتفظ بصورة من المستند قبل وبعد كل تصديق.",
        "إذا احتاج المستند ترجمة، استخدم مكتب ترجمة معتمداً.",
      ],
      local:
        "نخدم الأفراد والمنشآت في الرياض وجدة ومكة المكرمة والدمام وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "ما الفرق بين تصديق الغرفة وتوثيق الخارجية؟", a: "تصديق الغرفة يخص المستندات التجارية الصادرة من المنشآت، وتوثيق الخارجية خطوة لاحقة غالباً لاعتماد المستند دولياً." },
        { q: "هل يمكن توثيق مستند أجنبي؟", a: "نعم، بعد تصديقه من الجهات المختصة في بلده وسفارة المملكة هناك، حسب المتطلبات المعمول بها." },
        { q: "هل يحتاج المستند ترجمة؟", a: "قد تطلب بعض الجهات ترجمة معتمدة، ونوضح لك ذلك حسب المستند والجهة المستقبلة." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب مستقل، والتوثيق يصدر من وزارة الخارجية نفسها." },
      ],
    },
    en: {
      primaryKeyword: "Ministry of Foreign Affairs document attestation",
      secondaryKeywords: ["MOFA attestation Saudi", "certificate attestation MOFA", "power of attorney MOFA attestation", "attest documents for use abroad"],
      metaDescription:
        "Attest documents at the Ministry of Foreign Affairs for use inside or outside the Kingdom with Tasami: we review the document and attestation chain and follow it step by step. Not a government entity.",
      intro:
        "When a Saudi document is used abroad, or a foreign document is used inside the Kingdom, it usually needs Ministry of Foreign Affairs attestation after the earlier attestations by the issuer, the chamber of commerce or the relevant embassy. Examples include academic and experience certificates, powers of attorney, contracts and commercial documents. The most common rejection reason is a missing or misordered prior attestation. At Tasami we review the document and the receiving party with you, define the exact attestation chain and follow the request through MOFA e-services until you receive the attested document.",
      who: [
        "Anyone needing an academic or experience certificate attested for use abroad.",
        "Establishments sending contracts or commercial documents to foreign parties.",
        "Anyone with a foreign document to be accepted inside the Kingdom.",
        "Anyone needing a Saudi-issued power of attorney attested for use abroad.",
      ],
      steps: [
        "We review the document, receiving party and country of use.",
        "We define the required prior attestations and their correct order.",
        "We follow completing any missing attestation first.",
        "We explain government fees so you pay them yourself through official channels.",
        "We follow the attestation request through MOFA e-services until complete.",
      ],
      tips: [
        "Ask the receiving party about its requirements before starting.",
        "Never skip a prior attestation; it's the top rejection reason.",
        "Make sure names match your passport or ID.",
        "Keep a copy of the document before and after each attestation.",
        "If translation is needed, use a certified translation office.",
      ],
      local:
        "We serve individuals and establishments in Riyadh, Jeddah, Makkah, Dammam and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "What's the difference between chamber and MOFA attestation?", a: "Chamber attestation covers commercial documents issued by establishments; MOFA attestation is usually a later step for international acceptance." },
        { q: "Can a foreign document be attested?", a: "Yes, after attestation by competent authorities in its country and the Saudi embassy there, as required." },
        { q: "Does the document need translation?", a: "Some parties require certified translation; we explain depending on the document and receiving party." },
        { q: "Is Tasami a government entity?", a: "No, we are an independent follow-up services office; attestation is issued by the Ministry itself." },
      ],
    },
    ur: {
      primaryKeyword: "وزارت خارجہ سے دستاویزات کی تصدیق",
      secondaryKeywords: ["سعودی وزارت خارجہ تصدیق", "سرٹیفکیٹ کی خارجہ تصدیق", "وکالت نامہ خارجہ تصدیق", "بیرون ملک کے لیے دستاویزات کی تصدیق"],
      metaDescription:
        "تسامی کے ساتھ مملکت کے اندر یا باہر استعمال کے لیے وزارت خارجہ سے دستاویزات کی تصدیق کرائیں: ہم دستاویز اور تصدیقات کی ترتیب دیکھتے ہیں اور قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "جب سعودی دستاویز بیرون ملک یا غیر ملکی دستاویز مملکت میں استعمال ہو، تو عام طور پر جاری کرنے والے ادارے، چیمبر آف کامرس یا متعلقہ سفارت خانے کی پچھلی تصدیقات کے بعد وزارت خارجہ کی تصدیق چاہیے۔ مثالوں میں تعلیمی اور تجربہ سرٹیفکیٹ، وکالت نامے، معاہدے اور تجارتی دستاویزات شامل ہیں۔ مسترد ہونے کی سب سے عام وجہ کسی پچھلی تصدیق کی کمی یا غلط ترتیب ہے۔ تسامی میں ہم دستاویز اور وصول کنندہ دیکھتے ہیں، تصدیقات کی درست ترتیب طے کرتے ہیں اور وزارت خارجہ کی ای سروسز پر درخواست مکمل ہونے تک فالو کرتے ہیں۔",
      who: [
        "جنہیں بیرون ملک کے لیے تعلیمی یا تجربہ سرٹیفکیٹ کی تصدیق چاہیے۔",
        "وہ ادارے جو غیر ملکی فریقوں کو معاہدے یا تجارتی دستاویزات بھیجتے ہیں۔",
        "جن کے پاس مملکت میں قبول کرانے کے لیے غیر ملکی دستاویز ہے۔",
        "جنہیں سعودی وکالت نامہ بیرون ملک استعمال کے لیے تصدیق کرانا ہے۔",
      ],
      steps: [
        "ہم دستاویز، وصول کنندہ اور استعمال کا ملک دیکھتے ہیں۔",
        "ہم مطلوبہ پچھلی تصدیقات اور ان کی درست ترتیب طے کرتے ہیں۔",
        "ہم پہلے کسی کمی والی تصدیق کی تکمیل فالو کرتے ہیں۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم وزارت خارجہ کی ای سروسز پر تصدیق مکمل ہونے تک فالو کرتے ہیں۔",
      ],
      tips: [
        "شروع کرنے سے پہلے وصول کنندہ سے شرائط پوچھیں۔",
        "کوئی پچھلی تصدیق نہ چھوڑیں؛ یہ مسترد ہونے کی بڑی وجہ ہے۔",
        "یقینی بنائیں کہ نام پاسپورٹ یا شناختی کارڈ سے ملتے ہیں۔",
        "ہر تصدیق سے پہلے اور بعد کاپی رکھیں۔",
        "ترجمہ درکار ہو تو منظور شدہ ترجمہ دفتر استعمال کریں۔",
      ],
      local:
        "ہم ریاض، جدہ، مکہ مکرمہ، دمام اور سعودی عرب کے ہر شہر میں افراد اور اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "چیمبر اور وزارت خارجہ کی تصدیق میں کیا فرق ہے؟", a: "چیمبر تصدیق اداروں کی تجارتی دستاویزات کے لیے ہے؛ وزارت خارجہ کی تصدیق عام طور پر بین الاقوامی قبولیت کا اگلا مرحلہ ہے۔" },
        { q: "کیا غیر ملکی دستاویز کی تصدیق ہو سکتی ہے؟", a: "جی ہاں، اس کے ملک کے متعلقہ اداروں اور وہاں سعودی سفارت خانے کی تصدیق کے بعد۔" },
        { q: "کیا ترجمہ چاہیے؟", a: "بعض فریق منظور شدہ ترجمہ مانگتے ہیں؛ ہم دستاویز کے مطابق بتاتے ہیں۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم آزاد فالو اپ سروسز آفس ہیں؛ تصدیق وزارت خود جاری کرتی ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "विदेश मंत्रालय से दस्तावेज़ सत्यापन",
      secondaryKeywords: ["सऊदी विदेश मंत्रालय सत्यापन", "प्रमाणपत्र का MOFA सत्यापन", "पावर ऑफ अटॉर्नी MOFA सत्यापन", "विदेश के लिए दस्तावेज़ सत्यापन"],
      metaDescription:
        "तसामी के साथ सऊदी के अंदर या बाहर इस्तेमाल के लिए विदेश मंत्रालय से दस्तावेज़ सत्यापित कराएं: हम दस्तावेज़ और सत्यापन क्रम देखते हैं और चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "जब सऊदी दस्तावेज़ विदेश में या विदेशी दस्तावेज़ सऊदी में इस्तेमाल हो, तो आमतौर पर जारीकर्ता, चैंबर ऑफ कॉमर्स या संबंधित दूतावास के पिछले सत्यापनों के बाद विदेश मंत्रालय का सत्यापन चाहिए। उदाहरणों में शैक्षिक और अनुभव प्रमाणपत्र, पावर ऑफ अटॉर्नी, अनुबंध और व्यावसायिक दस्तावेज़ शामिल हैं। अस्वीकृति का सबसे आम कारण किसी पिछले सत्यापन की कमी या गलत क्रम है। तसामी में हम दस्तावेज़ और प्राप्तकर्ता देखते हैं, सत्यापनों का सही क्रम तय करते हैं और विदेश मंत्रालय की ई-सेवाओं पर अनुरोध पूरा होने तक फॉलो करते हैं।",
      who: [
        "जिन्हें विदेश के लिए शैक्षिक या अनुभव प्रमाणपत्र का सत्यापन चाहिए।",
        "वे संस्थान जो विदेशी पक्षों को अनुबंध या व्यावसायिक दस्तावेज़ भेजते हैं।",
        "जिनके पास सऊदी में स्वीकार कराने के लिए विदेशी दस्तावेज़ है।",
        "जिन्हें सऊदी पावर ऑफ अटॉर्नी विदेश में इस्तेमाल के लिए सत्यापित करानी है।",
      ],
      steps: [
        "हम दस्तावेज़, प्राप्तकर्ता और इस्तेमाल का देश देखते हैं।",
        "हम आवश्यक पिछले सत्यापन और उनका सही क्रम तय करते हैं।",
        "हम पहले किसी कमी वाले सत्यापन को पूरा करना फॉलो करते हैं।",
        "हम सरकारी फीस समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम विदेश मंत्रालय की ई-सेवाओं पर सत्यापन पूरा होने तक फॉलो करते हैं।",
      ],
      tips: [
        "शुरू करने से पहले प्राप्तकर्ता से शर्तें पूछें।",
        "कोई पिछला सत्यापन न छोड़ें; यह अस्वीकृति का बड़ा कारण है।",
        "सुनिश्चित करें कि नाम पासपोर्ट या पहचान पत्र से मेल खाते हैं।",
        "हर सत्यापन से पहले और बाद कॉपी रखें।",
        "अनुवाद चाहिए तो प्रमाणित अनुवाद कार्यालय इस्तेमाल करें।",
      ],
      local:
        "हम रियाद, जेद्दा, मक्का, दम्माम और सऊदी अरब के हर शहर में व्यक्तियों और संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "चैंबर और विदेश मंत्रालय सत्यापन में क्या अंतर है?", a: "चैंबर सत्यापन संस्थानों के व्यावसायिक दस्तावेज़ों के लिए है; विदेश मंत्रालय सत्यापन आमतौर पर अंतरराष्ट्रीय स्वीकृति का अगला चरण है।" },
        { q: "क्या विदेशी दस्तावेज़ सत्यापित हो सकता है?", a: "हां, उसके देश के संबंधित संस्थानों और वहां सऊदी दूतावास के सत्यापन के बाद।" },
        { q: "क्या अनुवाद चाहिए?", a: "कुछ पक्ष प्रमाणित अनुवाद मांगते हैं; हम दस्तावेज़ के अनुसार बताते हैं।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम स्वतंत्र फॉलो-अप सेवा कार्यालय हैं; सत्यापन मंत्रालय स्वयं जारी करता है।" },
      ],
    },
  },

  mediaLicense: {
    ar: {
      primaryKeyword: "ترخيص إعلامي في السعودية",
      secondaryKeywords: ["ترخيص موثوق للمعلنين", "ترخيص نشاط إعلامي", "ترخيص الإعلان في السوشيال ميديا", "ترخيص الهيئة العامة لتنظيم الإعلام"],
      metaDescription:
        "إصدار ترخيص إعلامي أو ترخيص موثوق للمعلنين في السعودية مع تسامي: نحدد نوع الترخيص المناسب لنشاطك ونتابع الطلب خطوة بخطوة. لسنا جهة حكومية.",
      intro:
        "تنظم الهيئة العامة لتنظيم الإعلام الأنشطة الإعلامية في المملكة، مثل الإعلان عبر منصات التواصل الاجتماعي، والإنتاج المرئي والمسموع، والنشر، وتنظيم الفعاليات الإعلامية، ولكل نشاط ترخيص خاص وشروط محددة. كثير من صناع المحتوى والمنشآت يمارسون الإعلان أو الإنتاج دون معرفة الترخيص المطلوب، مما يعرّضهم للمخالفات. من أشهر هذه التراخيص ترخيص موثوق للأفراد الذين يقدمون إعلانات عبر حساباتهم. في تسامي نساعدك في تحديد نوع الترخيص المناسب لنشاطك الفعلي، ونجهز البيانات والمستندات، ونتابع الطلب عبر المنصات الرسمية حتى صدور الترخيص.",
      who: [
        "صناع المحتوى الذين يقدمون إعلانات عبر حساباتهم.",
        "شركات الإنتاج المرئي والتصوير والتسويق.",
        "المنشآت التي تريد ممارسة نشاط نشر أو إعلام.",
        "من لا يعرف أي ترخيص يناسب نشاطه الإعلامي.",
      ],
      steps: [
        "نراجع طبيعة نشاطك الإعلامي الفعلي والمنصات التي تعمل عليها.",
        "نحدد نوع الترخيص المناسب وشروطه.",
        "نجهز معك البيانات والمستندات المطلوبة.",
        "نوضح لك الرسوم الحكومية لتسددها بنفسك عبر القنوات الرسمية.",
        "نتابع الطلب عبر المنصة الرسمية حتى صدور الترخيص ونذكّرك بالتجديد.",
      ],
      tips: [
        "لا تبدأ الإعلان المدفوع قبل صدور الترخيص المناسب.",
        "اختر الترخيص الذي يطابق نشاطك الفعلي وليس الأسهل.",
        "التزم بضوابط المحتوى الإعلاني والإفصاح عن الإعلانات.",
        "اعرض رقم الترخيص في حساباتك عند الحاجة.",
        "تابع تاريخ انتهاء الترخيص وجدده في وقته.",
      ],
      local:
        "نخدم صناع المحتوى والمنشآت في الرياض وجدة ومكة المكرمة والدمام وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل أحتاج ترخيصاً إذا كنت أعلن في حسابي الشخصي؟", a: "غالباً نعم إذا كنت تقدم إعلانات مقابل أجر، ونراجع حالتك ونوضح الترخيص المناسب." },
        { q: "ما هو ترخيص موثوق؟", a: "ترخيص للأفراد الذين يقدمون محتوى إعلانياً عبر منصات التواصل الاجتماعي وفق الضوابط المعمول بها." },
        { q: "هل تختلف تراخيص المنشآت عن الأفراد؟", a: "نعم، لكل نشاط ونوع ممارس ترخيص وشروط مختلفة، ونحدد معك الأنسب." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب مستقل، والترخيص يصدر من الجهة الرسمية المختصة." },
      ],
    },
    en: {
      primaryKeyword: "media licence in Saudi Arabia",
      secondaryKeywords: ["Mawthooq licence for advertisers", "media activity licence", "social media advertising licence", "GCAM licence"],
      metaDescription:
        "Get a media licence or Mawthooq advertiser licence in Saudi Arabia with Tasami: we identify the right licence for your activity and follow the request step by step. Not a government entity.",
      intro:
        "The General Commission for Audiovisual Media regulates media activities in the Kingdom, such as social media advertising, audiovisual production, publishing and media events, each with its own licence and conditions. Many content creators and businesses advertise or produce without knowing which licence is required, exposing them to violations. One of the best known is the Mawthooq licence for individuals advertising through their accounts. At Tasami we help you identify the licence that fits your real activity, prepare data and documents and follow the request through official platforms until the licence is issued.",
      who: [
        "Content creators who advertise through their accounts.",
        "Video production, photography and marketing companies.",
        "Businesses wanting to carry out publishing or media activities.",
        "Anyone unsure which licence fits their media activity.",
      ],
      steps: [
        "We review your actual media activity and the platforms you use.",
        "We identify the right licence type and its conditions.",
        "We prepare the required data and documents with you.",
        "We explain government fees so you pay them yourself through official channels.",
        "We follow the request on the official platform until issuance and remind you of renewal.",
      ],
      tips: [
        "Don't start paid advertising before the right licence is issued.",
        "Choose the licence matching your real activity, not the easiest one.",
        "Follow advertising content rules and ad disclosure requirements.",
        "Display your licence number on your accounts when needed.",
        "Track the expiry date and renew on time.",
      ],
      local:
        "We serve content creators and businesses in Riyadh, Jeddah, Makkah, Dammam and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do I need a licence to advertise on my personal account?", a: "Usually yes if you advertise for payment; we review your case and explain the right licence." },
        { q: "What is the Mawthooq licence?", a: "A licence for individuals providing advertising content on social media under current regulations." },
        { q: "Do business licences differ from individual ones?", a: "Yes, each activity and type of practitioner has different licences and conditions; we identify the best fit." },
        { q: "Is Tasami a government entity?", a: "No, we are an independent follow-up services office; the licence is issued by the competent authority." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں میڈیا لائسنس",
      secondaryKeywords: ["مشتہرین کے لیے موثوق لائسنس", "میڈیا سرگرمی لائسنس", "سوشل میڈیا اشتہار لائسنس", "میڈیا ریگولیٹری اتھارٹی لائسنس"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں میڈیا لائسنس یا مشتہرین کے لیے موثوق لائسنس حاصل کریں: ہم آپ کی سرگرمی کے لیے درست لائسنس طے کرتے ہیں اور درخواست قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "جنرل کمیشن فار آڈیو ویژول میڈیا مملکت میں میڈیا سرگرمیوں کو منظم کرتا ہے، جیسے سوشل میڈیا اشتہارات، آڈیو ویژول پروڈکشن، اشاعت اور میڈیا ایونٹس، اور ہر سرگرمی کا اپنا لائسنس اور شرائط ہیں۔ بہت سے کنٹینٹ کریئیٹرز اور ادارے مطلوبہ لائسنس جانے بغیر اشتہار یا پروڈکشن کرتے ہیں، جس سے خلاف ورزی کا خطرہ ہوتا ہے۔ سب سے مشہور لائسنسوں میں موثوق لائسنس ہے جو اپنے اکاؤنٹس سے اشتہار دینے والے افراد کے لیے ہے۔ تسامی میں ہم آپ کی اصل سرگرمی کے مطابق لائسنس طے کرتے ہیں، ڈیٹا اور دستاویزات تیار کرتے ہیں اور سرکاری پلیٹ فارمز پر درخواست اجرا تک فالو کرتے ہیں۔",
      who: [
        "وہ کنٹینٹ کریئیٹرز جو اپنے اکاؤنٹس سے اشتہار دیتے ہیں۔",
        "ویڈیو پروڈکشن، فوٹوگرافی اور مارکیٹنگ کمپنیاں۔",
        "وہ ادارے جو اشاعت یا میڈیا سرگرمی کرنا چاہتے ہیں۔",
        "جو نہیں جانتے کہ کون سا لائسنس ان کی سرگرمی کے مطابق ہے۔",
      ],
      steps: [
        "ہم آپ کی اصل میڈیا سرگرمی اور استعمال ہونے والے پلیٹ فارمز دیکھتے ہیں۔",
        "ہم درست لائسنس کی قسم اور شرائط طے کرتے ہیں۔",
        "ہم آپ کے ساتھ مطلوبہ ڈیٹا اور دستاویزات تیار کرتے ہیں۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم سرکاری پلیٹ فارم پر درخواست اجرا تک فالو کرتے ہیں اور تجدید یاد دلاتے ہیں۔",
      ],
      tips: [
        "درست لائسنس جاری ہونے سے پہلے معاوضہ والے اشتہارات شروع نہ کریں۔",
        "اپنی اصل سرگرمی کے مطابق لائسنس منتخب کریں، آسان والا نہیں۔",
        "اشتہاری مواد کے ضوابط اور اشتہار کے انکشاف کی پابندی کریں۔",
        "ضرورت ہو تو اکاؤنٹس پر لائسنس نمبر دکھائیں۔",
        "میعاد پر نظر رکھیں اور وقت پر تجدید کریں۔",
      ],
      local:
        "ہم ریاض، جدہ، مکہ مکرمہ، دمام اور سعودی عرب کے ہر شہر میں کنٹینٹ کریئیٹرز اور اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا ذاتی اکاؤنٹ پر اشتہار کے لیے لائسنس چاہیے؟", a: "اگر معاوضے پر اشتہار دیتے ہیں تو عام طور پر ہاں؛ ہم آپ کا کیس دیکھ کر بتاتے ہیں۔" },
        { q: "موثوق لائسنس کیا ہے؟", a: "سوشل میڈیا پر اشتہاری مواد دینے والے افراد کے لیے موجودہ ضوابط کے تحت لائسنس۔" },
        { q: "کیا اداروں اور افراد کے لائسنس مختلف ہیں؟", a: "جی ہاں، ہر سرگرمی اور قسم کے لیے مختلف لائسنس اور شرائط ہیں۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم آزاد فالو اپ سروسز آفس ہیں؛ لائسنس متعلقہ سرکاری ادارہ جاری کرتا ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में मीडिया लाइसेंस",
      secondaryKeywords: ["विज्ञापनदाताओं के लिए मौसूक़ लाइसेंस", "मीडिया गतिविधि लाइसेंस", "सोशल मीडिया विज्ञापन लाइसेंस", "मीडिया नियामक प्राधिकरण लाइसेंस"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में मीडिया लाइसेंस या विज्ञापनदाताओं के लिए मौसूक़ लाइसेंस प्राप्त करें: हम आपकी गतिविधि के लिए सही लाइसेंस तय करते हैं और अनुरोध चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "जनरल कमीशन फॉर ऑडियोविज़ुअल मीडिया सऊदी में मीडिया गतिविधियों को नियंत्रित करता है, जैसे सोशल मीडिया विज्ञापन, ऑडियोविज़ुअल प्रोडक्शन, प्रकाशन और मीडिया इवेंट, और हर गतिविधि का अपना लाइसेंस और शर्तें हैं। कई कंटेंट क्रिएटर और संस्थान आवश्यक लाइसेंस जाने बिना विज्ञापन या प्रोडक्शन करते हैं, जिससे उल्लंघन का खतरा होता है। सबसे प्रसिद्ध लाइसेंसों में मौसूक़ लाइसेंस है जो अपने अकाउंट से विज्ञापन देने वाले व्यक्तियों के लिए है। तसामी में हम आपकी वास्तविक गतिविधि के अनुसार लाइसेंस तय करते हैं, डेटा और दस्तावेज़ तैयार करते हैं और आधिकारिक प्लेटफॉर्म पर अनुरोध जारी होने तक फॉलो करते हैं।",
      who: [
        "वे कंटेंट क्रिएटर जो अपने अकाउंट से विज्ञापन देते हैं।",
        "वीडियो प्रोडक्शन, फोटोग्राफी और मार्केटिंग कंपनियां।",
        "वे संस्थान जो प्रकाशन या मीडिया गतिविधि करना चाहते हैं।",
        "जो नहीं जानते कि कौन सा लाइसेंस उनकी गतिविधि के अनुकूल है।",
      ],
      steps: [
        "हम आपकी वास्तविक मीडिया गतिविधि और इस्तेमाल होने वाले प्लेटफॉर्म देखते हैं।",
        "हम सही लाइसेंस का प्रकार और शर्तें तय करते हैं।",
        "हम आपके साथ आवश्यक डेटा और दस्तावेज़ तैयार करते हैं।",
        "हम सरकारी फीस समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम आधिकारिक प्लेटफॉर्म पर अनुरोध जारी होने तक फॉलो करते हैं और रिन्यूअल याद दिलाते हैं।",
      ],
      tips: [
        "सही लाइसेंस जारी होने से पहले भुगतान वाले विज्ञापन शुरू न करें।",
        "अपनी वास्तविक गतिविधि के अनुसार लाइसेंस चुनें, आसान वाला नहीं।",
        "विज्ञापन सामग्री के नियमों और विज्ञापन प्रकटीकरण का पालन करें।",
        "ज़रूरत हो तो अकाउंट पर लाइसेंस नंबर दिखाएं।",
        "समाप्ति तिथि पर नज़र रखें और समय पर रिन्यू करें।",
      ],
      local:
        "हम रियाद, जेद्दा, मक्का, दम्माम और सऊदी अरब के हर शहर में कंटेंट क्रिएटर्स और संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या निजी अकाउंट पर विज्ञापन के लिए लाइसेंस चाहिए?", a: "अगर भुगतान पर विज्ञापन देते हैं तो आमतौर पर हां; हम आपका मामला देखकर बताते हैं।" },
        { q: "मौसूक़ लाइसेंस क्या है?", a: "सोशल मीडिया पर विज्ञापन सामग्री देने वाले व्यक्तियों के लिए मौजूदा नियमों के तहत लाइसेंस।" },
        { q: "क्या संस्थानों और व्यक्तियों के लाइसेंस अलग हैं?", a: "हां, हर गतिविधि और प्रकार के लिए अलग लाइसेंस और शर्तें हैं।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम स्वतंत्र फॉलो-अप सेवा कार्यालय हैं; लाइसेंस संबंधित आधिकारिक संस्था जारी करती है।" },
      ],
    },
  },
};
