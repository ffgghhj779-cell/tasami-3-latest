import type { GuideDef } from "./service-guides";

/**
 * Guides for the tech category hub pages. No prices, fixed timelines or claimed partnerships.
 */
export const TECH_CATEGORY_GUIDES: Record<string, GuideDef> = {
  websites: {
    ar: {
      primaryKeyword: "تصميم مواقع في السعودية",
      secondaryKeywords: ["شركة تصميم مواقع", "تصميم موقع شركة", "تصميم مواقع إلكترونية احترافية", "تصميم موقع متوافق مع الجوال"],
      metaDescription:
        "تصميم مواقع ومتاجر إلكترونية في السعودية مع تسامي: موقع سريع بهوية علامتك، متوافق مع الجوال ومحركات البحث، ومربوط بالواتساب لاستقبال الطلبات.",
      intro:
        "موقعك الإلكتروني هو أول انطباع يأخذه العميل عن منشأتك، وغالباً يصل إليه من الجوال عبر بحث جوجل أو رابط في الواتساب. لذلك نصمم في تسامي مواقع سريعة وواضحة بهوية علامتك، تعمل بالعربية من اليمين لليسار بشكل سليم، ومهيأة لمحركات البحث من البداية، وتحوّل الزائر إلى طلب أو تواصل مباشر. نصمم مواقع الشركات والخدمات وصفحات الهبوط والمتاجر الإلكترونية على المنصة المناسبة لك.",
      who: [
        "الشركات والمؤسسات التي تحتاج موقعاً تعريفياً احترافياً.",
        "مقدمو الخدمات مثل العيادات والمكاتب والمطاعم الذين يريدون طلبات من الموقع.",
        "المتاجر التي تريد البيع أونلاين عبر سلة أو زد أو شوبيفاي أو متجر مبرمج.",
        "أصحاب المواقع القديمة البطيئة التي تحتاج إعادة تصميم.",
      ],
      steps: [
        "نفهم نشاطك وجمهورك وأهداف الموقع: تعريف، أو طلبات، أو بيع.",
        "نخطط صفحات الموقع ومحتواها والكلمات التي يبحث بها عملاؤك.",
        "نصمم الواجهة بهوية علامتك ونعرضها عليك للموافقة.",
        "نبرمج الموقع ونربطه بالواتساب والنماذج وأدوات القياس.",
        "نختبر السرعة والجوال ونطلق الموقع مع تسليم كامل وشرح للإدارة.",
      ],
      tips: [
        "جهّز شعارك وصوراً حقيقية لنشاطك؛ فهي تبني الثقة أكثر من الصور الجاهزة.",
        "ضع زر تواصل واضحاً في كل صفحة، خاصة على الجوال.",
        "اكتب لكل خدمة صفحة مستقلة لتظهر في نتائج البحث.",
        "استخدم نطاقاً باسم علامتك وبريداً رسمياً عليه.",
        "حدّث محتوى الموقع بانتظام ولا تتركه ثابتاً لسنوات.",
      ],
      local:
        "نصمم مواقع لعملاء في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، ونتابع المشروع عن بُعد عبر واتساب والاجتماعات المرئية.",
      faqs: [
        { q: "هل الموقع يكون متوافقاً مع الجوال؟", a: "نعم، نصمم للجوال أولاً ثم نوسع التصميم للشاشات الأكبر." },
        { q: "هل تهيئون الموقع لمحركات البحث؟", a: "نعم، نبني الموقع بعناوين ووصف وبنية مناسبة للسيو من البداية، ويمكن إضافة خطة محتوى لاحقاً." },
        { q: "هل أملك الموقع والنطاق؟", a: "نعم، النطاق والموقع باسمك، ونسلمك بيانات الدخول كاملة." },
        { q: "كيف أعرف التكلفة؟", a: "لا نعرض أسعاراً ثابتة؛ نرسل لك عرضاً على واتساب بعد فهم حجم الموقع واحتياجك." },
      ],
    },
    en: {
      primaryKeyword: "website design in Saudi Arabia",
      secondaryKeywords: ["web design company KSA", "company website design", "professional website design", "mobile-friendly website"],
      metaDescription:
        "Website and online store design in Saudi Arabia with Tasami: a fast site in your brand identity, mobile and search-engine friendly, connected to WhatsApp to receive requests.",
      intro:
        "Your website is the first impression customers get of your business, usually on their phone via a Google search or a WhatsApp link. That is why Tasami designs fast, clear websites in your brand identity that work properly in right-to-left Arabic, are search-engine ready from the start and turn visitors into requests or direct contact. We design company and service websites, landing pages and online stores on the platform that suits you.",
      who: [
        "Companies needing a professional corporate website.",
        "Service providers such as clinics, offices and restaurants wanting requests from their site.",
        "Stores selling online via Salla, Zid, Shopify or a custom store.",
        "Owners of slow, outdated websites that need a redesign.",
      ],
      steps: [
        "We understand your business, audience and website goals: presence, requests or sales.",
        "We plan pages, content and the keywords your customers search for.",
        "We design the interface in your brand identity and present it for approval.",
        "We build the site and connect WhatsApp, forms and analytics.",
        "We test speed and mobile, then launch with full handover and admin training.",
      ],
      tips: [
        "Prepare your logo and real photos of your business; they build more trust than stock images.",
        "Put a clear contact button on every page, especially on mobile.",
        "Give each service its own page so it can appear in search results.",
        "Use a domain with your brand name and an official email on it.",
        "Update website content regularly instead of leaving it static for years.",
      ],
      local:
        "We design websites for clients in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, managing projects remotely over WhatsApp and video calls.",
      faqs: [
        { q: "Will the website be mobile-friendly?", a: "Yes, we design mobile first and then expand to larger screens." },
        { q: "Do you optimize for search engines?", a: "Yes, we build with SEO-ready titles, descriptions and structure from the start, and a content plan can be added later." },
        { q: "Do I own the website and domain?", a: "Yes, the domain and site are in your name and we hand over full access." },
        { q: "How do I know the cost?", a: "We do not list fixed prices; we send a WhatsApp proposal after understanding the size and needs." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں ویب سائٹ ڈیزائن",
      secondaryKeywords: ["ویب ڈیزائن کمپنی", "کمپنی ویب سائٹ", "موبائل فرینڈلی ویب سائٹ"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں ویب سائٹ اور آن لائن اسٹور ڈیزائن: آپ کے برانڈ کی تیز ویب سائٹ، موبائل اور سرچ انجن کے موافق، درخواستوں کے لیے واٹس ایپ سے جڑی۔",
      intro:
        "آپ کی ویب سائٹ گاہک پر آپ کے ادارے کا پہلا تاثر ہے، جو عموماً گوگل سرچ یا واٹس ایپ لنک سے موبائل پر دیکھی جاتی ہے۔ اسی لیے تسامی آپ کے برانڈ کی تیز اور واضح ویب سائٹس بناتا ہے جو دائیں سے بائیں عربی میں درست چلیں، شروع سے سرچ انجن کے لیے تیار ہوں اور وزیٹر کو درخواست یا رابطے میں بدلیں۔ ہم کمپنی ویب سائٹس، لینڈنگ پیجز اور آن لائن اسٹورز بناتے ہیں۔",
      who: [
        "کمپنیاں جنہیں پیشہ ورانہ تعارفی ویب سائٹ چاہیے۔",
        "کلینکس، دفاتر اور ریستوران جو ویب سائٹ سے درخواستیں چاہتے ہیں۔",
        "اسٹورز جو سلہ، زد، شاپیفائی یا خصوصی اسٹور سے بیچنا چاہتے ہیں۔",
        "پرانی سست ویب سائٹس جنہیں نیا ڈیزائن چاہیے۔",
      ],
      steps: [
        "آپ کا کاروبار، ناظرین اور ویب سائٹ کے اہداف سمجھتے ہیں۔",
        "صفحات، مواد اور گاہکوں کے سرچ الفاظ کی منصوبہ بندی کرتے ہیں۔",
        "برانڈ کے مطابق انٹرفیس ڈیزائن کر کے منظوری لیتے ہیں۔",
        "ویب سائٹ بنا کر واٹس ایپ، فارمز اور تجزیاتی ٹولز جوڑتے ہیں۔",
        "رفتار اور موبائل ٹیسٹ کر کے مکمل حوالگی کے ساتھ لانچ کرتے ہیں۔",
      ],
      tips: [
        "لوگو اور کاروبار کی اصل تصاویر تیار رکھیں۔",
        "ہر صفحے پر واضح رابطہ بٹن رکھیں۔",
        "ہر سروس کا الگ صفحہ بنائیں تاکہ سرچ میں آئے۔",
        "برانڈ نام کا ڈومین اور سرکاری ای میل استعمال کریں۔",
        "مواد باقاعدگی سے اپ ڈیٹ کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام، مدینہ اور ہر شہر کے گاہکوں کے لیے ویب سائٹس بناتے ہیں اور واٹس ایپ پر دور سے کام کرتے ہیں۔",
      faqs: [
        { q: "کیا ویب سائٹ موبائل کے موافق ہوگی؟", a: "جی ہاں، ہم پہلے موبائل کے لیے ڈیزائن کرتے ہیں۔" },
        { q: "کیا آپ سرچ انجن کے لیے تیار کرتے ہیں؟", a: "جی ہاں، شروع سے SEO کے موافق عنوانات اور ڈھانچہ۔" },
        { q: "کیا ویب سائٹ اور ڈومین میرے ہوں گے؟", a: "جی ہاں، آپ کے نام اور مکمل رسائی کے ساتھ۔" },
        { q: "لاگت کیسے معلوم ہوگی؟", a: "ہم ضرورت سمجھ کر واٹس ایپ پر پیشکش بھیجتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में वेबसाइट डिज़ाइन",
      secondaryKeywords: ["वेब डिज़ाइन कंपनी", "कंपनी वेबसाइट", "मोबाइल फ़्रेंडली वेबसाइट"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में वेबसाइट और ऑनलाइन स्टोर डिज़ाइन: आपके ब्रांड की तेज़ वेबसाइट, मोबाइल और सर्च इंजन के अनुकूल, अनुरोधों के लिए व्हाट्सऐप से जुड़ी।",
      intro:
        "आपकी वेबसाइट ग्राहक पर आपके संस्थान का पहला प्रभाव है, जो आमतौर पर गूगल सर्च या व्हाट्सऐप लिंक से मोबाइल पर देखी जाती है। इसलिए तसामी आपके ब्रांड की तेज़ और साफ़ वेबसाइट बनाता है जो दाएँ-से-बाएँ अरबी में सही चलें, शुरू से सर्च इंजन के लिए तैयार हों और विज़िटर को अनुरोध या संपर्क में बदलें। हम कंपनी वेबसाइट, लैंडिंग पेज और ऑनलाइन स्टोर बनाते हैं।",
      who: [
        "कंपनियाँ जिन्हें पेशेवर परिचय वेबसाइट चाहिए।",
        "क्लिनिक, दफ़्तर और रेस्टोरेंट जो वेबसाइट से अनुरोध चाहते हैं।",
        "स्टोर जो सल्ला, ज़िद, शॉपिफ़ाई या कस्टम स्टोर से बेचना चाहते हैं।",
        "पुरानी धीमी वेबसाइट जिन्हें नया डिज़ाइन चाहिए।",
      ],
      steps: [
        "आपका व्यवसाय, दर्शक और वेबसाइट के लक्ष्य समझते हैं।",
        "पेज, सामग्री और ग्राहकों के सर्च शब्दों की योजना बनाते हैं।",
        "ब्रांड के अनुसार इंटरफ़ेस डिज़ाइन कर मंज़ूरी लेते हैं।",
        "वेबसाइट बनाकर व्हाट्सऐप, फ़ॉर्म और एनालिटिक्स जोड़ते हैं।",
        "स्पीड और मोबाइल टेस्ट कर पूरे हैंडओवर के साथ लॉन्च करते हैं।",
      ],
      tips: [
        "लोगो और व्यवसाय की असली फ़ोटो तैयार रखें।",
        "हर पेज पर साफ़ संपर्क बटन रखें।",
        "हर सेवा का अलग पेज बनाएँ ताकि सर्च में आए।",
        "ब्रांड नाम का डोमेन और आधिकारिक ईमेल इस्तेमाल करें।",
        "सामग्री नियमित अपडेट करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और हर शहर के ग्राहकों के लिए वेबसाइट बनाते हैं और व्हाट्सऐप पर दूर से काम करते हैं।",
      faqs: [
        { q: "क्या वेबसाइट मोबाइल के अनुकूल होगी?", a: "हाँ, हम पहले मोबाइल के लिए डिज़ाइन करते हैं।" },
        { q: "क्या आप सर्च इंजन के लिए तैयार करते हैं?", a: "हाँ, शुरू से SEO के अनुकूल शीर्षक और संरचना।" },
        { q: "क्या वेबसाइट और डोमेन मेरे होंगे?", a: "हाँ, आपके नाम और पूरी पहुँच के साथ।" },
        { q: "लागत कैसे पता चलेगी?", a: "हम ज़रूरत समझकर व्हाट्सऐप पर प्रस्ताव भेजते हैं।" },
      ],
    },
  },

  mobile: {
    ar: {
      primaryKeyword: "برمجة تطبيقات جوال في السعودية",
      secondaryKeywords: ["تصميم تطبيق جوال", "شركة برمجة تطبيقات", "تطبيق iOS وأندرويد", "تطبيق متجر إلكتروني"],
      metaDescription:
        "برمجة وتصميم تطبيقات جوال iOS وأندرويد في السعودية مع تسامي: من الفكرة والتصميم إلى البرمجة والنشر في المتاجر، بتجربة عربية سلسة.",
      intro:
        "تطبيق الجوال يضع منشأتك على شاشة عميلك مباشرة: طلبات أسرع، وإشعارات تعيده إليك، وتجربة أسهل من المتصفح. لكن نجاح التطبيق يبدأ قبل البرمجة، بفهم ما يحتاجه المستخدم فعلاً وتصميم رحلة بسيطة. في تسامي نحول فكرتك إلى تطبيق يعمل على iOS وأندرويد، بواجهة عربية واضحة، ولوحة تحكم لإدارته، ونتابع نشره في متجري Apple وGoogle.",
      who: [
        "المتاجر والمطاعم التي تريد تطبيق طلبات خاصاً بها.",
        "الشركات الناشئة التي لديها فكرة تطبيق وتحتاج تنفيذها.",
        "مقدمو الخدمات الذين يحتاجون تطبيق حجوزات أو متابعة.",
        "المنشآت التي تريد تطبيقاً داخلياً لموظفيها أو مندوبيها.",
      ],
      steps: [
        "نناقش الفكرة ونحدد المزايا الأساسية للنسخة الأولى.",
        "نصمم رحلة المستخدم والشاشات ونعرض نموذجاً تفاعلياً.",
        "نبرمج التطبيق ولوحة التحكم ونربطهما بالدفع والإشعارات حسب الحاجة.",
        "نختبر التطبيق على أجهزة مختلفة ونصلح الملاحظات.",
        "نتابع النشر في متجري التطبيقات ونقدم الدعم والتحديثات بعد الإطلاق.",
      ],
      tips: [
        "ابدأ بنسخة أولى بمزايا أساسية، ثم طوّر حسب ملاحظات المستخدمين.",
        "جهّز حسابات المطورين في متجري Apple وGoogle باسم منشأتك.",
        "فكّر كيف سيعرف العملاء بالتطبيق ويحملونه بعد الإطلاق.",
        "اجعل التسجيل سهلاً ولا تطلب بيانات كثيرة في البداية.",
        "خطط للتحديثات والدعم المستمر من البداية.",
      ],
      local:
        "نبرمج تطبيقات لعملاء في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، مع اجتماعات متابعة دورية عن بُعد.",
      faqs: [
        { q: "هل يعمل التطبيق على iOS وأندرويد معاً؟", a: "نعم، نبني التطبيق ليعمل على النظامين مع الحفاظ على تجربة سلسة." },
        { q: "هل يوجد لوحة تحكم لإدارة التطبيق؟", a: "نعم، نوفر لوحة تحكم لإدارة المحتوى والطلبات والمستخدمين حسب طبيعة التطبيق." },
        { q: "هل تتابعون نشر التطبيق في المتاجر؟", a: "نعم، نجهز ملفات النشر ونتابع المراجعة في متجري Apple وGoogle." },
        { q: "هل أملك الكود؟", a: "نعم وفق الاتفاق، يكون التطبيق والكود ملكاً لمنشأتك." },
        { q: "هل يمكن ربط التطبيق بمتجري أو نظامي الحالي؟", a: "نعم، يمكن ربط التطبيق بمتجرك الإلكتروني أو نظام الطلبات أو نظام إدارة العملاء حتى تبقى البيانات موحدة في مكان واحد." },
        { q: "ماذا بعد إطلاق التطبيق؟", a: "نتابع الأخطاء وملاحظات المستخدمين، ونجهز التحديثات المطلوبة لتوافق التطبيق مع إصدارات الأنظمة الجديدة." },
      ],
    },
    en: {
      primaryKeyword: "mobile app development in Saudi Arabia",
      secondaryKeywords: ["mobile app design", "app development company KSA", "iOS and Android app", "e-commerce app"],
      metaDescription:
        "iOS and Android mobile app development in Saudi Arabia with Tasami: from idea and design to development and store publishing, with a smooth Arabic experience.",
      intro:
        "A mobile app puts your business directly on your customer's screen: faster orders, notifications that bring them back and an easier experience than the browser. But app success starts before coding, by understanding what users really need and designing a simple journey. Tasami turns your idea into an app for iOS and Android with a clear Arabic interface and an admin dashboard, and follows its publishing on the Apple and Google stores.",
      who: [
        "Stores and restaurants wanting their own ordering app.",
        "Startups with an app idea needing execution.",
        "Service providers needing a booking or tracking app.",
        "Businesses wanting an internal app for staff or field reps.",
      ],
      steps: [
        "We discuss the idea and define core features for the first version.",
        "We design the user journey and screens and present an interactive prototype.",
        "We build the app and dashboard and connect payments and notifications as needed.",
        "We test on different devices and fix feedback.",
        "We follow store publishing and provide support and updates after launch.",
      ],
      tips: [
        "Start with a core first version, then evolve with user feedback.",
        "Prepare Apple and Google developer accounts in your business name.",
        "Plan how customers will discover and download the app after launch.",
        "Keep sign-up simple and avoid asking for too much data at first.",
        "Plan for ongoing updates and support from the start.",
      ],
      local:
        "We build apps for clients in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, with regular remote follow-up meetings.",
      faqs: [
        { q: "Will the app work on iOS and Android?", a: "Yes, we build for both systems while keeping a smooth experience." },
        { q: "Is there an admin dashboard?", a: "Yes, a dashboard to manage content, orders and users depending on the app." },
        { q: "Do you handle store publishing?", a: "Yes, we prepare publishing files and follow review on Apple and Google stores." },
        { q: "Do I own the code?", a: "Yes, per the agreement the app and code belong to your business." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں موبائل ایپ ڈیولپمنٹ",
      secondaryKeywords: ["موبائل ایپ ڈیزائن", "iOS اور اینڈرائیڈ ایپ", "ای کامرس ایپ"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں iOS اور اینڈرائیڈ ایپ ڈیولپمنٹ: آئیڈیا اور ڈیزائن سے پروگرامنگ اور اسٹور پر اشاعت تک، آسان عربی تجربے کے ساتھ۔",
      intro:
        "موبائل ایپ آپ کے ادارے کو براہِ راست گاہک کی اسکرین پر لاتی ہے: تیز آرڈرز، واپس لانے والے نوٹیفکیشن اور براؤزر سے آسان تجربہ۔ مگر کامیابی پروگرامنگ سے پہلے شروع ہوتی ہے، صارف کی اصل ضرورت سمجھ کر سادہ سفر ڈیزائن کرنے سے۔ تسامی آپ کے آئیڈیا کو iOS اور اینڈرائیڈ ایپ میں بدلتا ہے، واضح عربی انٹرفیس اور کنٹرول پینل کے ساتھ، اور ایپل و گوگل اسٹورز پر اشاعت فالو کرتا ہے۔",
      who: [
        "اسٹورز اور ریستوران جو اپنی آرڈر ایپ چاہتے ہیں۔",
        "اسٹارٹ اپس جن کے پاس ایپ کا آئیڈیا ہے۔",
        "بکنگ یا ٹریکنگ ایپ چاہنے والے سروس فراہم کنندگان۔",
        "ادارے جو ملازمین کے لیے اندرونی ایپ چاہتے ہیں۔",
      ],
      steps: [
        "آئیڈیا پر بات کر کے پہلے ورژن کی بنیادی خصوصیات طے کرتے ہیں۔",
        "صارف کا سفر اور اسکرینز ڈیزائن کر کے پروٹوٹائپ دکھاتے ہیں۔",
        "ایپ اور کنٹرول پینل بنا کر ضرورت کے مطابق ادائیگی و نوٹیفکیشن جوڑتے ہیں۔",
        "مختلف ڈیوائسز پر ٹیسٹ کر کے نوٹس درست کرتے ہیں۔",
        "اسٹورز پر اشاعت فالو کر کے لانچ کے بعد سپورٹ دیتے ہیں۔",
      ],
      tips: [
        "بنیادی خصوصیات والے پہلے ورژن سے شروع کریں۔",
        "ایپل اور گوگل ڈیولپر اکاؤنٹس ادارے کے نام پر بنائیں۔",
        "سوچیں کہ لانچ کے بعد گاہک ایپ کیسے ڈاؤن لوڈ کریں گے۔",
        "رجسٹریشن آسان رکھیں۔",
        "شروع سے اپ ڈیٹس اور سپورٹ کی منصوبہ بندی کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور ہر شہر کے گاہکوں کے لیے ایپس بناتے ہیں، باقاعدہ آن لائن میٹنگز کے ساتھ۔",
      faqs: [
        { q: "کیا ایپ iOS اور اینڈرائیڈ دونوں پر چلے گی؟", a: "جی ہاں، دونوں نظاموں کے لیے۔" },
        { q: "کیا کنٹرول پینل ملے گا؟", a: "جی ہاں، مواد، آرڈرز اور صارفین کے انتظام کے لیے۔" },
        { q: "کیا آپ اسٹور اشاعت کرتے ہیں؟", a: "جی ہاں، فائلیں تیار کر کے جائزہ فالو کرتے ہیں۔" },
        { q: "کیا کوڈ میرا ہوگا؟", a: "جی ہاں، معاہدے کے مطابق۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में मोबाइल ऐप डेवलपमेंट",
      secondaryKeywords: ["मोबाइल ऐप डिज़ाइन", "iOS और एंड्रॉइड ऐप", "ई-कॉमर्स ऐप"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में iOS और एंड्रॉइड ऐप डेवलपमेंट: आइडिया और डिज़ाइन से प्रोग्रामिंग और स्टोर पर प्रकाशन तक, आसान अरबी अनुभव के साथ।",
      intro:
        "मोबाइल ऐप आपके संस्थान को सीधे ग्राहक की स्क्रीन पर लाता है: तेज़ ऑर्डर, वापस लाने वाले नोटिफ़िकेशन और ब्राउज़र से आसान अनुभव। लेकिन सफलता प्रोग्रामिंग से पहले शुरू होती है, यूज़र की असली ज़रूरत समझकर सरल यात्रा डिज़ाइन करने से। तसामी आपके आइडिया को iOS और एंड्रॉइड ऐप में बदलता है, साफ़ अरबी इंटरफ़ेस और कंट्रोल पैनल के साथ, और ऐपल व गूगल स्टोर पर प्रकाशन फ़ॉलो करता है।",
      who: [
        "स्टोर और रेस्टोरेंट जो अपना ऑर्डर ऐप चाहते हैं।",
        "स्टार्टअप जिनके पास ऐप का आइडिया है।",
        "बुकिंग या ट्रैकिंग ऐप चाहने वाले सेवा प्रदाता।",
        "संस्थान जो कर्मचारियों के लिए आंतरिक ऐप चाहते हैं।",
      ],
      steps: [
        "आइडिया पर बात कर पहले वर्ज़न की मुख्य सुविधाएँ तय करते हैं।",
        "यूज़र यात्रा और स्क्रीन डिज़ाइन कर प्रोटोटाइप दिखाते हैं।",
        "ऐप और कंट्रोल पैनल बनाकर ज़रूरत के अनुसार पेमेंट व नोटिफ़िकेशन जोड़ते हैं।",
        "अलग-अलग डिवाइस पर टेस्ट कर टिप्पणियाँ ठीक करते हैं।",
        "स्टोर प्रकाशन फ़ॉलो कर लॉन्च के बाद सपोर्ट देते हैं।",
      ],
      tips: [
        "मुख्य सुविधाओं वाले पहले वर्ज़न से शुरू करें।",
        "ऐपल और गूगल डेवलपर अकाउंट संस्थान के नाम पर बनाएँ।",
        "सोचें कि लॉन्च के बाद ग्राहक ऐप कैसे डाउनलोड करेंगे।",
        "रजिस्ट्रेशन आसान रखें।",
        "शुरू से अपडेट और सपोर्ट की योजना बनाएँ।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के ग्राहकों के लिए ऐप बनाते हैं, नियमित ऑनलाइन मीटिंग के साथ।",
      faqs: [
        { q: "क्या ऐप iOS और एंड्रॉइड दोनों पर चलेगा?", a: "हाँ, दोनों सिस्टम के लिए।" },
        { q: "क्या कंट्रोल पैनल मिलेगा?", a: "हाँ, सामग्री, ऑर्डर और यूज़र प्रबंधन के लिए।" },
        { q: "क्या आप स्टोर प्रकाशन करते हैं?", a: "हाँ, फ़ाइलें तैयार कर समीक्षा फ़ॉलो करते हैं।" },
        { q: "क्या कोड मेरा होगा?", a: "हाँ, समझौते के अनुसार।" },
      ],
    },
  },

  ai: {
    ar: {
      primaryKeyword: "حلول الذكاء الاصطناعي للشركات",
      secondaryKeywords: ["ذكاء اصطناعي للأعمال", "أتمتة بالذكاء الاصطناعي", "شات بوت للشركات", "تحليل البيانات بالذكاء الاصطناعي"],
      metaDescription:
        "حلول الذكاء الاصطناعي للشركات في السعودية مع تسامي: شات بوت يرد بالعربية، وأتمتة المهام المتكررة، وتحليل البيانات، بحلول عملية تناسب حجم منشأتك.",
      intro:
        "الذكاء الاصطناعي لم يعد حكراً على الشركات الكبيرة؛ يمكن لأي منشأة اليوم أن تستخدمه للرد على العملاء على مدار الساعة، وتلخيص الطلبات، وتصنيف الرسائل، وتحليل المبيعات. المهم أن يبدأ من مشكلة حقيقية في عملك وليس من التقنية نفسها. في تسامي نحدد معك أين يوفر الذكاء الاصطناعي وقتاً أو يزيد مبيعات، ثم نبني الحل ونربطه بأنظمتك الحالية مثل الواتساب والموقع ونظام العملاء.",
      who: [
        "المنشآت التي تستقبل محادثات واستفسارات كثيرة يومياً.",
        "الفرق التي تقضي وقتاً طويلاً في مهام متكررة مثل إدخال البيانات.",
        "المتاجر التي تريد توصيات أو ردوداً ذكية على العملاء.",
        "الإدارات التي تريد تقارير وتحليلات أسرع من بياناتها.",
      ],
      steps: [
        "نراجع إجراءات عملك ونحدد المهام الأنسب للذكاء الاصطناعي.",
        "نقترح الحل المناسب: شات بوت، أو أتمتة، أو تحليل بيانات.",
        "نبني نموذجاً أولياً ونختبره على بيانات وحالات حقيقية.",
        "نربط الحل بأنظمتك الحالية ونضع ضوابط واضحة لما يفعله.",
        "نطلق الحل ونتابع النتائج ونحسّنه باستمرار.",
      ],
      tips: [
        "ابدأ بمهمة واحدة واضحة وقِس أثرها قبل التوسع.",
        "جهّز معلومات دقيقة عن خدماتك؛ فجودة الذكاء الاصطناعي من جودة بياناتك.",
        "اترك دائماً خياراً للتدخل البشري في القرارات المهمة.",
        "احرص على خصوصية بيانات عملائك وحدد ما يُشارك مع الأنظمة.",
        "راجع أداء الحل دورياً وحدّث معلوماته.",
      ],
      local:
        "نقدم حلول الذكاء الاصطناعي لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، والمتابعة عن بُعد.",
      faqs: [
        { q: "هل الذكاء الاصطناعي مناسب للمنشآت الصغيرة؟", a: "نعم، كثير من الحلول مثل الشات بوت والأتمتة البسيطة مناسبة للمنشآت الصغيرة وتوفر وقتاً واضحاً." },
        { q: "هل يفهم الحل اللغة العربية واللهجات؟", a: "نعم، نستخدم نماذج تفهم العربية الفصحى واللهجات المحلية." },
        { q: "هل بياناتي آمنة؟", a: "نضع ضوابط لما يُرسل للأنظمة ونختار الإعدادات المناسبة لحماية بياناتك." },
        { q: "هل يستبدل الذكاء الاصطناعي الموظفين؟", a: "هدفنا أن يتولى المهام المتكررة ليتفرغ فريقك للعمل الأهم، مع بقاء القرار البشري في الحالات المهمة." },
      ],
    },
    en: {
      primaryKeyword: "AI solutions for businesses in Saudi Arabia",
      secondaryKeywords: ["AI for business", "AI automation", "business chatbot", "AI data analysis"],
      metaDescription:
        "AI solutions for businesses in Saudi Arabia with Tasami: Arabic chatbots, automation of repetitive tasks and data analysis, with practical solutions sized for your business.",
      intro:
        "AI is no longer only for large companies; any business today can use it to answer customers around the clock, summarize requests, classify messages and analyze sales. What matters is starting from a real problem in your work, not from the technology itself. Tasami identifies where AI saves time or increases sales for you, then builds the solution and connects it to your existing systems such as WhatsApp, your website and CRM.",
      who: [
        "Businesses receiving many conversations and inquiries daily.",
        "Teams spending long hours on repetitive tasks such as data entry.",
        "Stores wanting smart recommendations or replies for customers.",
        "Departments wanting faster reports and insights from their data.",
      ],
      steps: [
        "We review your processes and identify tasks best suited for AI.",
        "We propose the right solution: chatbot, automation or data analysis.",
        "We build a prototype and test it on real data and cases.",
        "We connect it to your systems and set clear rules for what it does.",
        "We launch, monitor results and keep improving it.",
      ],
      tips: [
        "Start with one clear task and measure its impact before expanding.",
        "Prepare accurate information about your services; AI quality depends on your data.",
        "Always keep a human option for important decisions.",
        "Protect customer data privacy and define what is shared with systems.",
        "Review performance regularly and update its information.",
      ],
      local:
        "We provide AI solutions for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, with remote follow-up.",
      faqs: [
        { q: "Is AI suitable for small businesses?", a: "Yes, many solutions such as chatbots and simple automation suit small businesses and save clear time." },
        { q: "Does it understand Arabic and dialects?", a: "Yes, we use models that understand Modern Standard Arabic and local dialects." },
        { q: "Is my data safe?", a: "We set rules on what is sent to systems and choose settings that protect your data." },
        { q: "Does AI replace employees?", a: "Our aim is for it to handle repetitive tasks so your team focuses on more important work, with human decisions kept for key cases." },
      ],
    },
    ur: {
      primaryKeyword: "کاروبار کے لیے AI حل",
      secondaryKeywords: ["کاروباری AI", "AI آٹومیشن", "کاروباری چیٹ بوٹ"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں کاروبار کے لیے AI حل: عربی چیٹ بوٹ، بار بار کے کاموں کی آٹومیشن اور ڈیٹا تجزیہ، آپ کے ادارے کے سائز کے مطابق۔",
      intro:
        "AI اب صرف بڑی کمپنیوں کے لیے نہیں؛ آج کوئی بھی ادارہ اسے چوبیس گھنٹے گاہکوں کو جواب دینے، درخواستوں کا خلاصہ کرنے، پیغامات کی درجہ بندی اور سیلز کے تجزیے کے لیے استعمال کر سکتا ہے۔ اہم یہ ہے کہ آغاز کام کے حقیقی مسئلے سے ہو، ٹیکنالوجی سے نہیں۔ تسامی طے کرتا ہے کہ AI کہاں وقت بچاتا یا فروخت بڑھاتا ہے، پھر حل بنا کر واٹس ایپ، ویب سائٹ اور CRM سے جوڑتا ہے۔",
      who: [
        "ادارے جنہیں روزانہ بہت سی بات چیت ملتی ہے۔",
        "ٹیمیں جو ڈیٹا انٹری جیسے بار بار کے کاموں میں وقت لگاتی ہیں۔",
        "اسٹورز جو گاہکوں کے لیے اسمارٹ جوابات چاہتے ہیں۔",
        "شعبے جو ڈیٹا سے تیز رپورٹس چاہتے ہیں۔",
      ],
      steps: [
        "طریقہ کار دیکھ کر AI کے لیے موزوں کام طے کرتے ہیں۔",
        "مناسب حل تجویز کرتے ہیں: چیٹ بوٹ، آٹومیشن یا ڈیٹا تجزیہ۔",
        "پروٹوٹائپ بنا کر حقیقی ڈیٹا پر ٹیسٹ کرتے ہیں۔",
        "موجودہ سسٹمز سے جوڑ کر واضح قواعد طے کرتے ہیں۔",
        "لانچ کر کے نتائج دیکھتے اور بہتری کرتے ہیں۔",
      ],
      tips: [
        "ایک واضح کام سے شروع کر کے اثر ناپیں۔",
        "خدمات کی درست معلومات تیار رکھیں۔",
        "اہم فیصلوں میں انسانی آپشن رکھیں۔",
        "گاہکوں کے ڈیٹا کی رازداری کا خیال رکھیں۔",
        "کارکردگی باقاعدگی سے دیکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور ہر شہر کے اداروں کو دور سے AI حل فراہم کرتے ہیں۔",
      faqs: [
        { q: "کیا AI چھوٹے اداروں کے لیے موزوں ہے؟", a: "جی ہاں، چیٹ بوٹ اور سادہ آٹومیشن واضح وقت بچاتے ہیں۔" },
        { q: "کیا یہ عربی اور لہجے سمجھتا ہے؟", a: "جی ہاں، فصیح عربی اور مقامی لہجے۔" },
        { q: "کیا میرا ڈیٹا محفوظ ہے؟", a: "ہم ڈیٹا کی حفاظت کے لیے قواعد اور سیٹنگز طے کرتے ہیں۔" },
        { q: "کیا AI ملازمین کی جگہ لے گا؟", a: "یہ بار بار کے کام سنبھالتا ہے تاکہ ٹیم اہم کام پر توجہ دے۔" },
      ],
    },
    hi: {
      primaryKeyword: "व्यवसायों के लिए AI समाधान",
      secondaryKeywords: ["बिज़नेस AI", "AI ऑटोमेशन", "बिज़नेस चैटबॉट"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में व्यवसायों के लिए AI समाधान: अरबी चैटबॉट, बार-बार के कामों का ऑटोमेशन और डेटा विश्लेषण, आपके संस्थान के आकार के अनुसार।",
      intro:
        "AI अब सिर्फ़ बड़ी कंपनियों के लिए नहीं; आज कोई भी संस्थान इसे चौबीसों घंटे ग्राहकों को जवाब देने, अनुरोधों का सारांश बनाने, संदेशों को वर्गीकृत करने और बिक्री के विश्लेषण के लिए इस्तेमाल कर सकता है। ज़रूरी यह है कि शुरुआत काम की असली समस्या से हो, तकनीक से नहीं। तसामी तय करता है कि AI कहाँ समय बचाता या बिक्री बढ़ाता है, फिर समाधान बनाकर व्हाट्सऐप, वेबसाइट और CRM से जोड़ता है।",
      who: [
        "संस्थान जिन्हें रोज़ बहुत बातचीत मिलती है।",
        "टीमें जो डेटा एंट्री जैसे बार-बार के कामों में समय लगाती हैं।",
        "स्टोर जो ग्राहकों के लिए स्मार्ट जवाब चाहते हैं।",
        "विभाग जो डेटा से तेज़ रिपोर्ट चाहते हैं।",
      ],
      steps: [
        "प्रक्रियाएँ देखकर AI के लिए उपयुक्त काम तय करते हैं।",
        "सही समाधान सुझाते हैं: चैटबॉट, ऑटोमेशन या डेटा विश्लेषण।",
        "प्रोटोटाइप बनाकर असली डेटा पर टेस्ट करते हैं।",
        "मौजूदा सिस्टम से जोड़कर साफ़ नियम तय करते हैं।",
        "लॉन्च कर नतीजे देखते और सुधार करते हैं।",
      ],
      tips: [
        "एक साफ़ काम से शुरू कर असर मापें।",
        "सेवाओं की सटीक जानकारी तैयार रखें।",
        "ज़रूरी फ़ैसलों में इंसानी विकल्प रखें।",
        "ग्राहकों के डेटा की गोपनीयता का ध्यान रखें।",
        "प्रदर्शन नियमित रूप से देखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों को दूर से AI समाधान देते हैं।",
      faqs: [
        { q: "क्या AI छोटे संस्थानों के लिए उपयुक्त है?", a: "हाँ, चैटबॉट और सरल ऑटोमेशन साफ़ समय बचाते हैं।" },
        { q: "क्या यह अरबी और बोलियाँ समझता है?", a: "हाँ, मानक अरबी और स्थानीय बोलियाँ।" },
        { q: "क्या मेरा डेटा सुरक्षित है?", a: "हम डेटा सुरक्षा के लिए नियम और सेटिंग तय करते हैं।" },
        { q: "क्या AI कर्मचारियों की जगह लेगा?", a: "यह बार-बार के काम संभालता है ताकि टीम ज़रूरी काम पर ध्यान दे।" },
      ],
    },
  },

  cloud: {
    ar: {
      primaryKeyword: "استضافة مواقع وخدمات سحابية",
      secondaryKeywords: ["استضافة مواقع في السعودية", "نقل موقع لاستضافة جديدة", "خوادم سحابية", "نسخ احتياطي سحابي"],
      metaDescription:
        "استضافة مواقع وخدمات سحابية مع تسامي: اختيار الاستضافة المناسبة، ونقل المواقع والأنظمة للسحابة، والنسخ الاحتياطي والحماية والمراقبة المستمرة.",
      intro:
        "سرعة موقعك واستقراره وأمان بياناتك تعتمد على المكان الذي يعمل عليه. استضافة غير مناسبة تعني موقعاً بطيئاً أو متوقفاً في أوقات الذروة، وغياب النسخ الاحتياطي قد يعني فقدان بيانات مهمة. في تسامي نساعدك في اختيار الاستضافة أو الخدمة السحابية المناسبة لحجم مشروعك، وننقل موقعك أو نظامك إليها بأمان، ونضبط النسخ الاحتياطي والحماية والمراقبة، حتى تتفرغ لعملك وأنت مطمئن أن موقعك يعمل بسرعة واستقرار.",
      who: [
        "أصحاب المواقع البطيئة أو التي تتوقف كثيراً.",
        "المنشآت التي تريد نقل أنظمتها من خوادم محلية إلى السحابة.",
        "المتاجر التي تتوقع زيادة كبيرة في الزيارات في المواسم.",
        "من لا يملك نسخاً احتياطية منتظمة لموقعه أو بياناته.",
      ],
      steps: [
        "نراجع موقعك أو نظامك الحالي واحتياجه من الموارد.",
        "نرشح الاستضافة أو الخدمة السحابية المناسبة لحجمك.",
        "ننقل الموقع والبيانات بخطة تقلل وقت التوقف.",
        "نضبط الحماية وشهادة الأمان والنسخ الاحتياطي التلقائي.",
        "نراقب الأداء ونقدم الدعم والصيانة حسب الاتفاق.",
      ],
      tips: [
        "لا تختر الاستضافة الأرخص فقط؛ قارن السرعة والدعم والاستقرار.",
        "فعّل النسخ الاحتياطي التلقائي واختبر استعادته.",
        "استخدم شهادة أمان (SSL) لكل مواقعك.",
        "اجعل حسابات الاستضافة والنطاق باسم منشأتك.",
        "راقب استهلاك الموارد قبل المواسم المزدحمة.",
      ],
      local:
        "نخدم منشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، ونتابع الأنظمة عن بُعد.",
      faqs: [
        { q: "هل تنقلون موقعي من استضافة أخرى؟", a: "نعم، ننقل الموقع والبيانات والبريد بخطة تقلل وقت التوقف قدر الإمكان." },
        { q: "ما الفرق بين الاستضافة المشتركة والسحابية؟", a: "المشتركة تناسب المواقع الصغيرة، والسحابية أكثر مرونة وقابلية للتوسع مع زيادة الزيارات." },
        { q: "هل توفرون نسخاً احتياطية؟", a: "نضبط نسخاً احتياطية تلقائية ونتأكد من إمكانية استعادتها." },
        { q: "باسم من تكون الاستضافة؟", a: "يُفضّل أن تكون باسم منشأتك، ونساعدك في إعدادها." },
        { q: "هل تنقلون الأنظمة الداخلية للسحابة أيضاً؟", a: "نعم، ننقل الأنظمة وقواعد البيانات من الخوادم المحلية إلى السحابة بخطة واضحة، مع اختبار كل شيء قبل الإيقاف النهائي للخادم القديم." },
        { q: "ماذا يحدث إذا توقف الموقع فجأة؟", a: "مع خدمة المراقبة نتلقى تنبيهاً فور التوقف ونعمل على إعادة التشغيل ومعرفة السبب، ونستعيد النسخة الاحتياطية عند الحاجة." },
      ],
    },
    en: {
      primaryKeyword: "web hosting and cloud services in Saudi Arabia",
      secondaryKeywords: ["website hosting KSA", "website migration", "cloud servers", "cloud backup"],
      metaDescription:
        "Web hosting and cloud services with Tasami: choosing the right hosting, migrating sites and systems to the cloud, backups, security and ongoing monitoring.",
      intro:
        "Your website's speed and stability and your data's security depend on where it runs. Unsuitable hosting means a slow site or downtime at peak times, and missing backups can mean losing important data. Tasami helps you choose the hosting or cloud service that fits your project size, migrates your site or system to it safely and sets up backups, security and monitoring.",
      who: [
        "Owners of slow websites or sites that go down often.",
        "Businesses moving systems from local servers to the cloud.",
        "Stores expecting big traffic increases in seasons.",
        "Anyone without regular backups of their site or data.",
      ],
      steps: [
        "We review your current site or system and its resource needs.",
        "We recommend the hosting or cloud service that fits your size.",
        "We migrate the site and data with a plan that minimizes downtime.",
        "We configure security, SSL and automatic backups.",
        "We monitor performance and provide support and maintenance as agreed.",
      ],
      tips: [
        "Do not choose hosting on price alone; compare speed, support and stability.",
        "Enable automatic backups and test restoring them.",
        "Use an SSL certificate on all your sites.",
        "Keep hosting and domain accounts in your business name.",
        "Monitor resource usage before busy seasons.",
      ],
      local:
        "We serve businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, monitoring systems remotely.",
      faqs: [
        { q: "Can you migrate my site from another host?", a: "Yes, we migrate the site, data and email with a plan that minimizes downtime." },
        { q: "Shared vs cloud hosting?", a: "Shared suits small sites; cloud is more flexible and scales as traffic grows." },
        { q: "Do you provide backups?", a: "We set up automatic backups and confirm they can be restored." },
        { q: "Whose name is the hosting in?", a: "Preferably your business's name, and we help you set it up." },
      ],
    },
    ur: {
      primaryKeyword: "ویب ہوسٹنگ اور کلاؤڈ سروسز",
      secondaryKeywords: ["سعودی ویب ہوسٹنگ", "ویب سائٹ منتقلی", "کلاؤڈ سرورز"],
      metaDescription:
        "تسامی کے ساتھ ویب ہوسٹنگ اور کلاؤڈ سروسز: مناسب ہوسٹنگ کا انتخاب، ویب سائٹس اور سسٹمز کی کلاؤڈ منتقلی، بیک اپ، سیکیورٹی اور مسلسل نگرانی۔",
      intro:
        "ویب سائٹ کی رفتار، استحکام اور ڈیٹا کی حفاظت اس جگہ پر منحصر ہے جہاں وہ چلتی ہے۔ نامناسب ہوسٹنگ کا مطلب سست ویب سائٹ یا رش کے وقت بندش ہے، اور بیک اپ نہ ہونے سے اہم ڈیٹا ضائع ہو سکتا ہے۔ تسامی آپ کے منصوبے کے سائز کے مطابق ہوسٹنگ یا کلاؤڈ سروس منتخب کرنے، محفوظ منتقلی، بیک اپ، سیکیورٹی اور نگرانی میں مدد کرتا ہے۔",
      who: [
        "سست یا بار بار بند ہونے والی ویب سائٹس کے مالکان۔",
        "ادارے جو مقامی سرورز سے کلاؤڈ پر جانا چاہتے ہیں۔",
        "اسٹورز جنہیں موسم میں زیادہ وزیٹرز کی توقع ہے۔",
        "جن کے پاس باقاعدہ بیک اپ نہیں۔",
      ],
      steps: [
        "موجودہ ویب سائٹ یا سسٹم اور اس کی ضروریات دیکھتے ہیں۔",
        "سائز کے مطابق ہوسٹنگ یا کلاؤڈ سروس تجویز کرتے ہیں۔",
        "کم سے کم بندش کے ساتھ ویب سائٹ اور ڈیٹا منتقل کرتے ہیں۔",
        "سیکیورٹی، SSL اور خودکار بیک اپ سیٹ کرتے ہیں۔",
        "کارکردگی کی نگرانی اور سپورٹ دیتے ہیں۔",
      ],
      tips: [
        "صرف قیمت پر ہوسٹنگ نہ چنیں۔",
        "خودکار بیک اپ فعال کر کے بحالی ٹیسٹ کریں۔",
        "تمام ویب سائٹس پر SSL استعمال کریں۔",
        "ہوسٹنگ اور ڈومین ادارے کے نام پر رکھیں۔",
        "مصروف موسم سے پہلے وسائل کا استعمال دیکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور ہر شہر کے اداروں کے سسٹمز کی دور سے نگرانی کرتے ہیں۔",
      faqs: [
        { q: "کیا آپ دوسری ہوسٹنگ سے منتقل کرتے ہیں؟", a: "جی ہاں، ویب سائٹ، ڈیٹا اور ای میل کم بندش کے ساتھ۔" },
        { q: "شیئرڈ اور کلاؤڈ ہوسٹنگ میں فرق؟", a: "شیئرڈ چھوٹی ویب سائٹس کے لیے، کلاؤڈ زیادہ لچکدار ہے۔" },
        { q: "کیا آپ بیک اپ دیتے ہیں؟", a: "ہم خودکار بیک اپ سیٹ کر کے بحالی کی تصدیق کرتے ہیں۔" },
        { q: "ہوسٹنگ کس کے نام ہوگی؟", a: "بہتر ہے آپ کے ادارے کے نام۔" },
      ],
    },
    hi: {
      primaryKeyword: "वेब होस्टिंग और क्लाउड सेवाएँ",
      secondaryKeywords: ["सऊदी वेब होस्टिंग", "वेबसाइट माइग्रेशन", "क्लाउड सर्वर"],
      metaDescription:
        "तसामी के साथ वेब होस्टिंग और क्लाउड सेवाएँ: सही होस्टिंग का चुनाव, वेबसाइट और सिस्टम का क्लाउड माइग्रेशन, बैकअप, सुरक्षा और लगातार निगरानी।",
      intro:
        "वेबसाइट की स्पीड, स्थिरता और डेटा की सुरक्षा इस पर निर्भर है कि वह कहाँ चलती है। अनुपयुक्त होस्टिंग का मतलब धीमी वेबसाइट या भीड़ के समय बंद होना है, और बैकअप न होने से ज़रूरी डेटा खो सकता है। तसामी आपके प्रोजेक्ट के आकार के अनुसार होस्टिंग या क्लाउड सेवा चुनने, सुरक्षित माइग्रेशन, बैकअप, सुरक्षा और निगरानी में मदद करता है।",
      who: [
        "धीमी या बार-बार बंद होने वाली वेबसाइट के मालिक।",
        "संस्थान जो स्थानीय सर्वर से क्लाउड पर जाना चाहते हैं।",
        "स्टोर जिन्हें मौसम में ज़्यादा विज़िटर की उम्मीद है।",
        "जिनके पास नियमित बैकअप नहीं।",
      ],
      steps: [
        "मौजूदा वेबसाइट या सिस्टम और उसकी ज़रूरतें देखते हैं।",
        "आकार के अनुसार होस्टिंग या क्लाउड सेवा सुझाते हैं।",
        "कम से कम डाउनटाइम के साथ वेबसाइट और डेटा ले जाते हैं।",
        "सुरक्षा, SSL और ऑटो बैकअप सेट करते हैं।",
        "प्रदर्शन की निगरानी और सपोर्ट देते हैं।",
      ],
      tips: [
        "सिर्फ़ क़ीमत पर होस्टिंग न चुनें।",
        "ऑटो बैकअप चालू कर रीस्टोर टेस्ट करें।",
        "सभी वेबसाइट पर SSL इस्तेमाल करें।",
        "होस्टिंग और डोमेन संस्थान के नाम पर रखें।",
        "व्यस्त मौसम से पहले संसाधनों का उपयोग देखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों के सिस्टम की दूर से निगरानी करते हैं।",
      faqs: [
        { q: "क्या आप दूसरी होस्टिंग से ले जाते हैं?", a: "हाँ, वेबसाइट, डेटा और ईमेल कम डाउनटाइम के साथ।" },
        { q: "शेयर्ड और क्लाउड होस्टिंग में फ़र्क़?", a: "शेयर्ड छोटी वेबसाइट के लिए, क्लाउड ज़्यादा लचीला है।" },
        { q: "क्या आप बैकअप देते हैं?", a: "हम ऑटो बैकअप सेट कर रीस्टोर की पुष्टि करते हैं।" },
        { q: "होस्टिंग किसके नाम होगी?", a: "बेहतर है आपके संस्थान के नाम।" },
      ],
    },
  },
};
