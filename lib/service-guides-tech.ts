import type { GuideDef } from "./service-guides";

/**
 * Tech offering guides. No prices, fixed timelines or claimed platform partnerships.
 */
export const TECH_GUIDES: Record<string, GuideDef> = {
  ecommerceStore: {
    ar: {
      primaryKeyword: "تصميم متجر إلكتروني",
      secondaryKeywords: ["إنشاء متجر إلكتروني", "متجر إلكتروني في السعودية", "برمجة متجر إلكتروني", "تصميم متجر احترافي"],
      metaDescription:
        "تصميم متجر إلكتروني في السعودية مع تسامي: نختار معك المنصة المناسبة ونجهز المتجر بالمنتجات والدفع والشحن والفواتير، بتصميم عربي سريع يناسب الجوال.",
      intro:
        "المتجر الإلكتروني الناجح ليس مجرد صفحات منتجات؛ هو تجربة شراء سهلة على الجوال، ودفع موثوق، وشحن واضح، وفواتير نظامية. في تسامي نبدأ باختيار المسار الأنسب لك: منصة جاهزة مثل سلة أو زد أو شوبيفاي، أو متجر مبرمج خصيصاً لاحتياجات لا تغطيها المنصات. ثم نجهز المتجر كاملاً ونسلمه لك جاهزاً للبيع مع شرح لإدارته.",
      who: [
        "أصحاب المحلات الذين يريدون البيع أونلاين إلى جانب المحل.",
        "المشاريع المنزلية والعلامات الناشئة التي تبدأ البيع لأول مرة.",
        "المتاجر القائمة التي تريد تحسين التصميم أو الانتقال لمنصة أفضل.",
        "الشركات التي تحتاج متجراً بخصائص خاصة مثل الاشتراكات أو البيع بالجملة.",
      ],
      steps: [
        "نتعرف على منتجاتك وطريقة بيعك وحجم الطلبات المتوقع.",
        "نرشح المنصة أو الحل المناسب ونوضح لك مزايا كل خيار.",
        "نصمم واجهة المتجر بهوية علامتك ونرفع المنتجات والتصنيفات.",
        "نربط وسائل الدفع وشركات الشحن ونضبط الضريبة والفواتير.",
        "نختبر رحلة الشراء كاملة، ثم نسلمك المتجر مع تدريب على الإدارة.",
      ],
      tips: [
        "صور المنتجات الواضحة تؤثر على المبيعات أكثر من أي تصميم.",
        "اكتب سياسة الاسترجاع والشحن بوضوح قبل الإطلاق.",
        "اختبر المتجر على الجوال أولاً، فأغلب الزوار يتسوقون منه.",
        "وفّر وسائل الدفع المعتادة لدى عملائك مثل مدى وApple Pay.",
        "اعرض بيانات منشأتك ووسائل التواصل بوضوح لبناء الثقة.",
      ],
      local:
        "نصمم متاجر لعملاء في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، ونتابع معك عن بُعد عبر واتساب والاجتماعات المرئية.",
      faqs: [
        { q: "هل أختار منصة جاهزة أم متجراً مبرمجاً؟", a: "المنصات الجاهزة أسرع وأوفر لمعظم المتاجر، والبرمجة الخاصة تناسب الاحتياجات غير المعتادة. نرشح لك الأنسب بعد فهم نشاطك." },
        { q: "هل تضيفون المنتجات بأنفسكم؟", a: "نعم، نرفع المنتجات والتصنيفات الأولية، ونعلمك طريقة الإضافة والتعديل لاحقاً." },
        { q: "هل يدعم المتجر الدفع بمدى وApple Pay؟", a: "نربط بوابات الدفع التي تدعم هذه الوسائل حسب المنصة ومزود الدفع الذي تختاره." },
        { q: "هل تقدمون دعماً بعد الإطلاق؟", a: "نعم، نتابع معك بعد الإطلاق ونقدم الدعم الفني والتطوير حسب احتياجك." },
      ],
    },
    en: {
      primaryKeyword: "e-commerce store design in Saudi Arabia",
      secondaryKeywords: ["build an online store KSA", "online store development", "Arabic e-commerce website", "professional store design"],
      metaDescription:
        "E-commerce store design in Saudi Arabia with Tasami: we choose the right platform with you and set up products, payments, shipping and invoices in a fast, mobile-friendly Arabic design.",
      intro:
        "A successful online store is more than product pages; it is an easy mobile checkout, trusted payments, clear shipping and compliant invoices. At Tasami we start by choosing the right path: a ready platform such as Salla, Zid or Shopify, or a custom-built store for needs the platforms do not cover. We then set up the whole store and hand it over ready to sell, with training on how to run it.",
      who: [
        "Shop owners who want to sell online alongside their physical store.",
        "Home businesses and new brands selling for the first time.",
        "Existing stores that want a better design or a better platform.",
        "Companies needing special features such as subscriptions or wholesale.",
      ],
      steps: [
        "We learn about your products, sales model and expected order volume.",
        "We recommend the right platform or solution and explain each option.",
        "We design the storefront in your brand identity and upload products and categories.",
        "We connect payments and shipping companies and configure tax and invoices.",
        "We test the full purchase journey, then hand over the store with admin training.",
      ],
      tips: [
        "Clear product photos affect sales more than any design.",
        "Write your return and shipping policy clearly before launch.",
        "Test the store on mobile first; most visitors shop from their phones.",
        "Offer the payment methods your customers use, such as mada and Apple Pay.",
        "Display your business details and contact options clearly to build trust.",
      ],
      local:
        "We design stores for clients in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, working with you remotely over WhatsApp and video calls.",
      faqs: [
        { q: "Ready platform or custom store?", a: "Ready platforms are faster and more economical for most stores; custom builds suit unusual needs. We recommend the best fit after understanding your business." },
        { q: "Do you upload the products?", a: "Yes, we upload the initial products and categories and show you how to add and edit later." },
        { q: "Will the store accept mada and Apple Pay?", a: "We connect payment gateways that support these methods, depending on the platform and payment provider you choose." },
        { q: "Do you offer support after launch?", a: "Yes, we follow up after launch and provide technical support and development as needed." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں ای کامرس اسٹور ڈیزائن",
      secondaryKeywords: ["آن لائن اسٹور بنانا", "ای کامرس ویب سائٹ", "عربی آن لائن اسٹور"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں ای کامرس اسٹور: مناسب پلیٹ فارم کا انتخاب، پروڈکٹس، ادائیگی، شپنگ اور انوائسز کی تیاری، موبائل کے لیے تیز عربی ڈیزائن میں۔",
      intro:
        "کامیاب آن لائن اسٹور صرف پروڈکٹ صفحات نہیں؛ یہ موبائل پر آسان خریداری، قابلِ اعتماد ادائیگی، واضح شپنگ اور درست انوائسز کا نام ہے۔ تسامی میں ہم مناسب راستہ منتخب کرنے سے شروع کرتے ہیں: سلہ، زد یا شاپیفائی جیسا تیار پلیٹ فارم، یا ان ضروریات کے لیے خصوصی اسٹور جو پلیٹ فارمز پوری نہیں کرتے۔ پھر پورا اسٹور تیار کر کے فروخت کے لیے حوالے کرتے ہیں اور چلانے کی تربیت دیتے ہیں۔",
      who: [
        "دکان مالکان جو دکان کے ساتھ آن لائن بیچنا چاہتے ہیں۔",
        "گھریلو کاروبار اور نئے برانڈز جو پہلی بار آن لائن بیچ رہے ہیں۔",
        "موجودہ اسٹورز جو بہتر ڈیزائن یا بہتر پلیٹ فارم چاہتے ہیں۔",
        "کمپنیاں جنہیں سبسکرپشن یا ہول سیل جیسی خاص سہولیات چاہییں۔",
      ],
      steps: [
        "آپ کی پروڈکٹس، فروخت کا طریقہ اور متوقع آرڈرز سمجھتے ہیں۔",
        "مناسب پلیٹ فارم یا حل تجویز کرتے ہیں اور ہر آپشن واضح کرتے ہیں۔",
        "آپ کے برانڈ کے مطابق اسٹور ڈیزائن کر کے پروڈکٹس اور کیٹیگریز اپلوڈ کرتے ہیں۔",
        "ادائیگی اور شپنگ کمپنیاں جوڑتے ہیں اور ٹیکس و انوائسز سیٹ کرتے ہیں۔",
        "خریداری کا پورا عمل ٹیسٹ کر کے تربیت کے ساتھ اسٹور حوالے کرتے ہیں۔",
      ],
      tips: [
        "واضح پروڈکٹ تصاویر کسی بھی ڈیزائن سے زیادہ فروخت پر اثر ڈالتی ہیں۔",
        "لانچ سے پہلے واپسی اور شپنگ پالیسی واضح لکھیں۔",
        "پہلے موبائل پر اسٹور ٹیسٹ کریں؛ زیادہ تر لوگ وہیں سے خریدتے ہیں۔",
        "گاہکوں کی عام ادائیگی کے طریقے جیسے مدیٰ اور ایپل پے رکھیں۔",
        "اعتماد کے لیے کاروبار کی معلومات اور رابطے واضح دکھائیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے گاہکوں کے لیے اسٹور بناتے ہیں اور واٹس ایپ و ویڈیو کالز پر دور سے کام کرتے ہیں۔",
      faqs: [
        { q: "تیار پلیٹ فارم یا خصوصی اسٹور؟", a: "زیادہ تر اسٹورز کے لیے تیار پلیٹ فارم تیز اور کم خرچ ہیں؛ خاص ضروریات کے لیے خصوصی اسٹور بہتر ہے۔ ہم آپ کا کاروبار سمجھ کر مشورہ دیتے ہیں۔" },
        { q: "کیا آپ پروڈکٹس اپلوڈ کرتے ہیں؟", a: "جی ہاں، ابتدائی پروڈکٹس اپلوڈ کرتے ہیں اور بعد میں اضافہ و ترمیم سکھاتے ہیں۔" },
        { q: "کیا اسٹور مدیٰ اور ایپل پے قبول کرے گا؟", a: "ہم ایسے پیمنٹ گیٹ وے جوڑتے ہیں جو یہ طریقے سپورٹ کرتے ہیں، پلیٹ فارم اور فراہم کنندہ کے مطابق۔" },
        { q: "کیا لانچ کے بعد سپورٹ ملتی ہے؟", a: "جی ہاں، لانچ کے بعد فالو اپ اور ضرورت کے مطابق تکنیکی سپورٹ دیتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में ई-कॉमर्स स्टोर डिज़ाइन",
      secondaryKeywords: ["ऑनलाइन स्टोर बनाना", "ई-कॉमर्स वेबसाइट", "अरबी ऑनलाइन स्टोर"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में ई-कॉमर्स स्टोर: सही प्लेटफ़ॉर्म का चुनाव, प्रोडक्ट, पेमेंट, शिपिंग और इनवॉइस की तैयारी, मोबाइल के लिए तेज़ अरबी डिज़ाइन में।",
      intro:
        "सफल ऑनलाइन स्टोर सिर्फ़ प्रोडक्ट पेज नहीं है; यह मोबाइल पर आसान ख़रीदारी, भरोसेमंद पेमेंट, साफ़ शिपिंग और सही इनवॉइस है। तसामी में हम सही रास्ता चुनने से शुरू करते हैं: सल्ला, ज़िद या शॉपिफ़ाई जैसा तैयार प्लेटफ़ॉर्म, या उन ज़रूरतों के लिए कस्टम स्टोर जो प्लेटफ़ॉर्म पूरी नहीं करते। फिर पूरा स्टोर तैयार कर बिक्री के लिए सौंपते हैं और चलाने का प्रशिक्षण देते हैं।",
      who: [
        "दुकान मालिक जो दुकान के साथ ऑनलाइन बेचना चाहते हैं।",
        "घरेलू व्यवसाय और नए ब्रांड जो पहली बार ऑनलाइन बेच रहे हैं।",
        "मौजूदा स्टोर जो बेहतर डिज़ाइन या बेहतर प्लेटफ़ॉर्म चाहते हैं।",
        "कंपनियाँ जिन्हें सब्सक्रिप्शन या होलसेल जैसी ख़ास सुविधाएँ चाहिए।",
      ],
      steps: [
        "आपके प्रोडक्ट, बिक्री का तरीक़ा और अनुमानित ऑर्डर समझते हैं।",
        "सही प्लेटफ़ॉर्म या समाधान सुझाते हैं और हर विकल्प समझाते हैं।",
        "आपके ब्रांड के अनुसार स्टोर डिज़ाइन कर प्रोडक्ट और कैटेगरी अपलोड करते हैं।",
        "पेमेंट और शिपिंग कंपनियाँ जोड़ते हैं और टैक्स व इनवॉइस सेट करते हैं।",
        "पूरी ख़रीद प्रक्रिया टेस्ट कर प्रशिक्षण के साथ स्टोर सौंपते हैं।",
      ],
      tips: [
        "साफ़ प्रोडक्ट फ़ोटो किसी भी डिज़ाइन से ज़्यादा बिक्री पर असर डालती हैं।",
        "लॉन्च से पहले रिटर्न और शिपिंग नीति साफ़ लिखें।",
        "पहले मोबाइल पर स्टोर टेस्ट करें; ज़्यादातर लोग वहीं से ख़रीदते हैं।",
        "ग्राहकों के आम पेमेंट तरीक़े जैसे मदा और Apple Pay रखें।",
        "भरोसे के लिए व्यवसाय की जानकारी और संपर्क साफ़ दिखाएँ।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के ग्राहकों के लिए स्टोर बनाते हैं और व्हाट्सऐप व वीडियो कॉल पर दूर से काम करते हैं।",
      faqs: [
        { q: "तैयार प्लेटफ़ॉर्म या कस्टम स्टोर?", a: "ज़्यादातर स्टोर के लिए तैयार प्लेटफ़ॉर्म तेज़ और किफ़ायती हैं; ख़ास ज़रूरतों के लिए कस्टम बेहतर है। हम आपका व्यवसाय समझकर सलाह देते हैं।" },
        { q: "क्या आप प्रोडक्ट अपलोड करते हैं?", a: "हाँ, शुरुआती प्रोडक्ट अपलोड करते हैं और बाद में जोड़ना-बदलना सिखाते हैं।" },
        { q: "क्या स्टोर मदा और Apple Pay लेगा?", a: "हम ऐसे पेमेंट गेटवे जोड़ते हैं जो ये तरीक़े सपोर्ट करते हैं, प्लेटफ़ॉर्म और प्रदाता के अनुसार।" },
        { q: "क्या लॉन्च के बाद सपोर्ट मिलता है?", a: "हाँ, लॉन्च के बाद फ़ॉलो-अप और ज़रूरत के अनुसार तकनीकी सपोर्ट देते हैं।" },
      ],
    },
  },

  sallaStore: {
    ar: {
      primaryKeyword: "تصميم متجر سلة",
      secondaryKeywords: ["إنشاء متجر على سلة", "تصميم ثيم سلة", "تجهيز متجر سلة", "مصمم متاجر سلة"],
      metaDescription:
        "تصميم وتجهيز متجر سلة مع تسامي: نضبط الثيم بهوية علامتك ونرفع المنتجات ونربط الدفع والشحن والنطاق، ونسلمك متجراً جاهزاً للبيع مع تدريب.",
      intro:
        "سلة منصة سعودية لإنشاء المتاجر الإلكترونية، تناسب كثيراً من المتاجر لأنها توفر الدفع والشحن والفواتير داخل لوحة واحدة باللغة العربية. لكن المتجر الجاهز للبيع يحتاج إعداداً صحيحاً: ثيم مضبوط بهويتك، ومنتجات مرتبة بصور وأوصاف جيدة، ووسائل دفع وشحن مفعلة، وإعدادات ضريبية سليمة. تسامي تجهز متجرك على سلة من البداية وتسلمه لك جاهزاً.",
      who: [
        "من يريد إطلاق متجر سريع على منصة سعودية بلوحة عربية.",
        "أصحاب متاجر سلة الحالية الذين يريدون تحسين التصميم وتجربة الشراء.",
        "المحلات التي تريد نقل منتجاتها إلى متجر أونلاين بسهولة.",
        "المشاريع التي تحتاج ربط تطبيقات إضافية من متجر تطبيقات سلة.",
      ],
      steps: [
        "نساعدك في إنشاء حساب المتجر واختيار الباقة المناسبة لاحتياجك.",
        "نختار الثيم المناسب ونضبط الألوان والخطوط والصفحات بهوية علامتك.",
        "نرفع المنتجات والتصنيفات والخيارات مثل المقاسات والألوان.",
        "نفعّل وسائل الدفع وشركات الشحن ونربط النطاق الخاص بك.",
        "نختبر الطلب من البداية للنهاية ونسلمك المتجر مع شرح للوحة التحكم.",
      ],
      tips: [
        "جهّز شعارك وصور منتجاتك بجودة عالية قبل البدء.",
        "استخدم نطاقاً خاصاً باسم علامتك ليبدو متجرك احترافياً.",
        "اكتب أوصافاً واضحة لكل منتج تجيب على أسئلة العميل.",
        "فعّل وسائل الدفع الأكثر استخداماً لدى عملائك.",
        "لا تكثر من التطبيقات الإضافية؛ اختر ما يخدم مبيعاتك فعلاً.",
      ],
      local:
        "نجهز متاجر سلة لعملاء في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة عن بُعد.",
      faqs: [
        { q: "هل تسامي شريك رسمي لسلة؟", a: "نحن فريق مستقل يجهز المتاجر على منصة سلة لعملائه. الاشتراك في سلة يكون باسمك وتملك متجرك بالكامل." },
        { q: "هل يمكن تخصيص ثيم سلة؟", a: "نعم، نضبط الثيم بهويتك، وإذا احتجت تخصيصاً أعمق نوضح لك الخيارات المتاحة." },
        { q: "هل تنقلون متجري من منصة أخرى إلى سلة؟", a: "نعم، نساعد في نقل المنتجات والبيانات الأساسية حسب ما تسمح به المنصتان." },
        { q: "من يدير المتجر بعد التسليم؟", a: "أنت تديره بعد تدريب بسيط، ونبقى متاحين للدعم والتطوير عند الحاجة." },
      ],
    },
    en: {
      primaryKeyword: "Salla store design",
      secondaryKeywords: ["create a Salla store", "Salla theme customization", "Salla store setup", "Salla store designer"],
      metaDescription:
        "Salla store design and setup with Tasami: we customize the theme to your brand, upload products, connect payments, shipping and your domain, and hand over a ready-to-sell store with training.",
      intro:
        "Salla is a Saudi e-commerce platform that suits many stores because it offers payments, shipping and invoices in one Arabic dashboard. But a ready-to-sell store needs correct setup: a theme tuned to your identity, well-organized products with good photos and descriptions, active payment and shipping methods and sound tax settings. Tasami sets up your Salla store from scratch and hands it over ready.",
      who: [
        "Anyone who wants to launch quickly on a Saudi platform with an Arabic dashboard.",
        "Existing Salla store owners who want a better design and checkout experience.",
        "Shops that want to move their products online easily.",
        "Businesses that need extra apps from the Salla app store connected.",
      ],
      steps: [
        "We help you create the store account and choose the right plan.",
        "We pick a suitable theme and set colors, fonts and pages in your brand identity.",
        "We upload products, categories and options such as sizes and colors.",
        "We activate payment methods and shipping companies and connect your domain.",
        "We test an order end to end and hand over the store with a dashboard walkthrough.",
      ],
      tips: [
        "Prepare your logo and high-quality product photos before starting.",
        "Use a custom domain with your brand name to look professional.",
        "Write clear descriptions that answer customers' questions.",
        "Activate the payment methods your customers use most.",
        "Do not overload apps; choose those that truly help sales.",
      ],
      local:
        "We set up Salla stores for clients in Makkah, Jeddah, Riyadh, Dammam and every Saudi city remotely.",
      faqs: [
        { q: "Is Tasami an official Salla partner?", a: "We are an independent team that sets up stores on Salla for our clients. The Salla subscription is in your name and you fully own your store." },
        { q: "Can the Salla theme be customized?", a: "Yes, we tune the theme to your identity, and if you need deeper customization we explain the available options." },
        { q: "Can you move my store from another platform to Salla?", a: "Yes, we help move products and core data as far as both platforms allow." },
        { q: "Who runs the store after handover?", a: "You do, after simple training, and we remain available for support and development." },
      ],
    },
    ur: {
      primaryKeyword: "سلہ اسٹور ڈیزائن",
      secondaryKeywords: ["سلہ پر اسٹور بنانا", "سلہ تھیم", "سلہ اسٹور سیٹ اپ"],
      metaDescription:
        "تسامی کے ساتھ سلہ اسٹور ڈیزائن اور سیٹ اپ: آپ کے برانڈ کے مطابق تھیم، پروڈکٹس، ادائیگی، شپنگ اور ڈومین کی تیاری، فروخت کے لیے تیار اسٹور اور تربیت۔",
      intro:
        "سلہ ایک سعودی ای کامرس پلیٹ فارم ہے جو کئی اسٹورز کے لیے موزوں ہے کیونکہ ادائیگی، شپنگ اور انوائسز ایک ہی عربی ڈیش بورڈ میں ملتے ہیں۔ مگر فروخت کے لیے تیار اسٹور کو درست سیٹ اپ چاہیے: آپ کی شناخت کے مطابق تھیم، اچھی تصاویر اور تفصیل والی منظم پروڈکٹس، فعال ادائیگی و شپنگ اور درست ٹیکس سیٹنگز۔ تسامی شروع سے سلہ اسٹور تیار کر کے حوالے کرتا ہے۔",
      who: [
        "جو عربی ڈیش بورڈ والے سعودی پلیٹ فارم پر جلد اسٹور شروع کرنا چاہتے ہیں۔",
        "موجودہ سلہ اسٹور مالکان جو بہتر ڈیزائن اور خریداری کا تجربہ چاہتے ہیں۔",
        "دکانیں جو اپنی پروڈکٹس آسانی سے آن لائن لانا چاہتی ہیں۔",
        "کاروبار جنہیں سلہ ایپ اسٹور سے اضافی ایپس جوڑنی ہیں۔",
      ],
      steps: [
        "اسٹور اکاؤنٹ بنانے اور مناسب پلان منتخب کرنے میں مدد کرتے ہیں۔",
        "مناسب تھیم منتخب کر کے رنگ، فونٹ اور صفحات آپ کے برانڈ کے مطابق سیٹ کرتے ہیں۔",
        "پروڈکٹس، کیٹیگریز اور سائز و رنگ جیسے آپشنز اپلوڈ کرتے ہیں۔",
        "ادائیگی اور شپنگ فعال کر کے آپ کا ڈومین جوڑتے ہیں۔",
        "مکمل آرڈر ٹیسٹ کر کے ڈیش بورڈ کی وضاحت کے ساتھ اسٹور حوالے کرتے ہیں۔",
      ],
      tips: [
        "شروع کرنے سے پہلے لوگو اور اعلیٰ معیار کی پروڈکٹ تصاویر تیار رکھیں۔",
        "پیشہ ورانہ تاثر کے لیے برانڈ نام کا ڈومین استعمال کریں۔",
        "ہر پروڈکٹ کی واضح تفصیل لکھیں۔",
        "گاہکوں کے زیادہ استعمال ہونے والے ادائیگی کے طریقے فعال کریں۔",
        "زیادہ ایپس نہ لگائیں؛ صرف وہ رکھیں جو فروخت میں مدد دیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے گاہکوں کے سلہ اسٹور دور سے تیار کرتے ہیں۔",
      faqs: [
        { q: "کیا تسامی سلہ کا سرکاری پارٹنر ہے؟", a: "ہم آزاد ٹیم ہیں جو گاہکوں کے لیے سلہ پر اسٹور تیار کرتی ہے۔ سبسکرپشن آپ کے نام ہوتی ہے اور اسٹور کے مکمل مالک آپ ہیں۔" },
        { q: "کیا سلہ تھیم میں تبدیلی ہو سکتی ہے؟", a: "جی ہاں، تھیم آپ کی شناخت کے مطابق سیٹ کرتے ہیں اور گہری تبدیلی کے آپشنز بتاتے ہیں۔" },
        { q: "کیا آپ دوسرے پلیٹ فارم سے سلہ پر منتقل کرتے ہیں؟", a: "جی ہاں، دونوں پلیٹ فارمز کی اجازت کے مطابق پروڈکٹس اور بنیادی ڈیٹا منتقل کرتے ہیں۔" },
        { q: "حوالگی کے بعد اسٹور کون چلائے گا؟", a: "آسان تربیت کے بعد آپ خود، اور ہم سپورٹ کے لیے دستیاب رہتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सल्ला स्टोर डिज़ाइन",
      secondaryKeywords: ["सल्ला पर स्टोर बनाना", "सल्ला थीम", "सल्ला स्टोर सेटअप"],
      metaDescription:
        "तसामी के साथ सल्ला स्टोर डिज़ाइन और सेटअप: आपके ब्रांड के अनुसार थीम, प्रोडक्ट, पेमेंट, शिपिंग और डोमेन की तैयारी, बिक्री के लिए तैयार स्टोर और प्रशिक्षण।",
      intro:
        "सल्ला एक सऊदी ई-कॉमर्स प्लेटफ़ॉर्म है जो कई स्टोर के लिए उपयुक्त है क्योंकि पेमेंट, शिपिंग और इनवॉइस एक ही अरबी डैशबोर्ड में मिलते हैं। लेकिन बिक्री के लिए तैयार स्टोर को सही सेटअप चाहिए: आपकी पहचान के अनुसार थीम, अच्छी फ़ोटो और विवरण वाले व्यवस्थित प्रोडक्ट, सक्रिय पेमेंट व शिपिंग और सही टैक्स सेटिंग। तसामी शुरू से सल्ला स्टोर तैयार कर सौंपता है।",
      who: [
        "जो अरबी डैशबोर्ड वाले सऊदी प्लेटफ़ॉर्म पर जल्दी स्टोर शुरू करना चाहते हैं।",
        "मौजूदा सल्ला स्टोर मालिक जो बेहतर डिज़ाइन और ख़रीद अनुभव चाहते हैं।",
        "दुकानें जो अपने प्रोडक्ट आसानी से ऑनलाइन लाना चाहती हैं।",
        "व्यवसाय जिन्हें सल्ला ऐप स्टोर से अतिरिक्त ऐप जोड़ने हैं।",
      ],
      steps: [
        "स्टोर अकाउंट बनाने और सही प्लान चुनने में मदद करते हैं।",
        "सही थीम चुनकर रंग, फ़ॉन्ट और पेज आपके ब्रांड के अनुसार सेट करते हैं।",
        "प्रोडक्ट, कैटेगरी और साइज़ व रंग जैसे विकल्प अपलोड करते हैं।",
        "पेमेंट और शिपिंग सक्रिय कर आपका डोमेन जोड़ते हैं।",
        "पूरा ऑर्डर टेस्ट कर डैशबोर्ड समझाकर स्टोर सौंपते हैं।",
      ],
      tips: [
        "शुरू करने से पहले लोगो और अच्छी क्वालिटी की प्रोडक्ट फ़ोटो तैयार रखें।",
        "पेशेवर दिखने के लिए ब्रांड नाम का डोमेन इस्तेमाल करें।",
        "हर प्रोडक्ट का साफ़ विवरण लिखें।",
        "ग्राहकों के सबसे ज़्यादा इस्तेमाल होने वाले पेमेंट तरीक़े सक्रिय करें।",
        "ज़्यादा ऐप न लगाएँ; सिर्फ़ वही रखें जो बिक्री में मदद करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के ग्राहकों के सल्ला स्टोर दूर से तैयार करते हैं।",
      faqs: [
        { q: "क्या तसामी सल्ला का आधिकारिक पार्टनर है?", a: "हम एक स्वतंत्र टीम हैं जो ग्राहकों के लिए सल्ला पर स्टोर तैयार करती है। सब्सक्रिप्शन आपके नाम होता है और स्टोर के पूरे मालिक आप हैं।" },
        { q: "क्या सल्ला थीम बदली जा सकती है?", a: "हाँ, थीम आपकी पहचान के अनुसार सेट करते हैं और गहरे बदलाव के विकल्प बताते हैं।" },
        { q: "क्या आप दूसरे प्लेटफ़ॉर्म से सल्ला पर ले जाते हैं?", a: "हाँ, दोनों प्लेटफ़ॉर्म की अनुमति के अनुसार प्रोडक्ट और मुख्य डेटा ले जाते हैं।" },
        { q: "सौंपने के बाद स्टोर कौन चलाएगा?", a: "आसान प्रशिक्षण के बाद आप ख़ुद, और हम सपोर्ट के लिए उपलब्ध रहते हैं।" },
      ],
    },
  },

  zidStore: {
    ar: {
      primaryKeyword: "تصميم متجر زد",
      secondaryKeywords: ["إنشاء متجر على زد", "تجهيز متجر زد", "ثيم زد", "مصمم متاجر زد"],
      metaDescription:
        "تصميم وتجهيز متجر زد مع تسامي: نضبط الواجهة بهوية علامتك ونرفع المنتجات ونفعّل الدفع والشحن والنطاق، ونسلمك متجراً جاهزاً مع تدريب.",
      intro:
        "زد منصة سعودية لإنشاء المتاجر الإلكترونية وإدارتها، توفر أدوات الدفع والشحن والتسويق في لوحة عربية. نجاح المتجر على زد يعتمد على الإعداد الجيد: واجهة واضحة بهويتك، ومنتجات منظمة، ووسائل دفع وشحن مفعلة، وتجربة شراء سلسة على الجوال. تسامي تجهز متجرك على زد خطوة بخطوة حتى يصبح جاهزاً لاستقبال الطلبات.",
      who: [
        "من يريد إطلاق متجر على منصة سعودية بأدوات تسويق مدمجة.",
        "أصحاب متاجر زد الحالية الذين يريدون تحسين الواجهة والمبيعات.",
        "العلامات التي تبيع منتجات متعددة الخيارات وتحتاج تنظيماً جيداً.",
        "المحلات التي تريد بداية سريعة في البيع أونلاين.",
      ],
      steps: [
        "نساعدك في إنشاء حساب المتجر واختيار الباقة المناسبة.",
        "نصمم الواجهة ونضبط القوالب والألوان والصفحات بهوية علامتك.",
        "نرفع المنتجات والتصنيفات والخيارات والمخزون.",
        "نفعّل وسائل الدفع وشركات الشحن ونربط النطاق الخاص.",
        "نختبر رحلة الشراء ونسلمك المتجر مع شرح لإدارته وأدوات التسويق.",
      ],
      tips: [
        "رتب منتجاتك في تصنيفات واضحة يسهل على العميل تصفحها.",
        "استخدم أدوات الكوبونات والعروض بحكمة لزيادة الطلبات.",
        "تابع المخزون حتى لا تُباع منتجات غير متوفرة.",
        "اختبر صفحة الدفع على أكثر من جهاز قبل الإطلاق.",
        "اربط حساباتك على وسائل التواصل بالمتجر لتسهيل الوصول.",
      ],
      local:
        "نجهز متاجر زد لعملاء في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة عن بُعد.",
      faqs: [
        { q: "هل تسامي شريك رسمي لزد؟", a: "نحن فريق مستقل يجهز المتاجر على منصة زد لعملائه. الاشتراك باسمك وتملك متجرك بالكامل." },
        { q: "زد أم سلة، أيهما أنسب لي؟", a: "كلاهما منصة سعودية قوية، والفرق في بعض الأدوات والباقات. نقارن لك حسب منتجاتك وطريقة بيعك." },
        { q: "هل تضبطون الشحن والدفع؟", a: "نعم، نفعّل وسائل الدفع وشركات الشحن المتاحة في زد ونختبرها قبل الإطلاق." },
        { q: "هل تطورون متجري الحالي على زد؟", a: "نعم، نراجع المتجر ونحسن الواجهة وتجربة الشراء وترتيب المنتجات." },
      ],
    },
    en: {
      primaryKeyword: "Zid store design",
      secondaryKeywords: ["create a Zid store", "Zid store setup", "Zid theme", "Zid store designer"],
      metaDescription:
        "Zid store design and setup with Tasami: we tune the storefront to your brand, upload products, activate payments, shipping and your domain, and hand over a ready store with training.",
      intro:
        "Zid is a Saudi platform for building and managing online stores, offering payment, shipping and marketing tools in an Arabic dashboard. Success on Zid depends on good setup: a clear storefront in your identity, organized products, active payment and shipping methods and a smooth mobile checkout. Tasami sets up your Zid store step by step until it is ready to receive orders.",
      who: [
        "Anyone launching on a Saudi platform with built-in marketing tools.",
        "Existing Zid store owners who want a better storefront and more sales.",
        "Brands selling products with many options that need good organization.",
        "Shops that want a quick start selling online.",
      ],
      steps: [
        "We help you create the store account and choose the right plan.",
        "We design the storefront and set templates, colors and pages in your brand identity.",
        "We upload products, categories, options and inventory.",
        "We activate payments and shipping companies and connect your domain.",
        "We test the purchase journey and hand over the store with training on management and marketing tools.",
      ],
      tips: [
        "Organize products into clear categories that are easy to browse.",
        "Use coupons and offers wisely to increase orders.",
        "Track inventory so out-of-stock items are not sold.",
        "Test the checkout on several devices before launch.",
        "Link your social accounts to the store for easy access.",
      ],
      local:
        "We set up Zid stores for clients in Makkah, Jeddah, Riyadh, Dammam and every Saudi city remotely.",
      faqs: [
        { q: "Is Tasami an official Zid partner?", a: "We are an independent team that sets up stores on Zid for our clients. The subscription is in your name and you fully own your store." },
        { q: "Zid or Salla: which suits me?", a: "Both are strong Saudi platforms; the differences are in some tools and plans. We compare them based on your products and sales model." },
        { q: "Do you set up shipping and payments?", a: "Yes, we activate the payment methods and shipping companies available on Zid and test them before launch." },
        { q: "Can you improve my existing Zid store?", a: "Yes, we review the store and improve the storefront, checkout and product organization." },
      ],
    },
    ur: {
      primaryKeyword: "زد اسٹور ڈیزائن",
      secondaryKeywords: ["زد پر اسٹور بنانا", "زد اسٹور سیٹ اپ", "زد تھیم"],
      metaDescription:
        "تسامی کے ساتھ زد اسٹور ڈیزائن اور سیٹ اپ: برانڈ کے مطابق انٹرفیس، پروڈکٹس، ادائیگی، شپنگ اور ڈومین کی تیاری، تیار اسٹور اور تربیت۔",
      intro:
        "زد آن لائن اسٹور بنانے اور چلانے کا سعودی پلیٹ فارم ہے جو عربی ڈیش بورڈ میں ادائیگی، شپنگ اور مارکیٹنگ ٹولز دیتا ہے۔ زد پر کامیابی اچھے سیٹ اپ پر منحصر ہے: آپ کی شناخت کے مطابق واضح انٹرفیس، منظم پروڈکٹس، فعال ادائیگی و شپنگ اور موبائل پر آسان خریداری۔ تسامی مرحلہ وار زد اسٹور تیار کرتا ہے یہاں تک کہ آرڈرز کے لیے تیار ہو جائے۔",
      who: [
        "جو بلٹ اِن مارکیٹنگ ٹولز والے سعودی پلیٹ فارم پر اسٹور شروع کرنا چاہتے ہیں۔",
        "موجودہ زد اسٹور مالکان جو بہتر انٹرفیس اور زیادہ فروخت چاہتے ہیں۔",
        "برانڈز جن کی پروڈکٹس کے کئی آپشنز ہیں اور اچھی ترتیب چاہیے۔",
        "دکانیں جو آن لائن فروخت کا جلد آغاز چاہتی ہیں۔",
      ],
      steps: [
        "اسٹور اکاؤنٹ بنانے اور مناسب پلان منتخب کرنے میں مدد کرتے ہیں۔",
        "انٹرفیس ڈیزائن کر کے ٹیمپلیٹس، رنگ اور صفحات برانڈ کے مطابق سیٹ کرتے ہیں۔",
        "پروڈکٹس، کیٹیگریز، آپشنز اور اسٹاک اپلوڈ کرتے ہیں۔",
        "ادائیگی اور شپنگ فعال کر کے ڈومین جوڑتے ہیں۔",
        "خریداری ٹیسٹ کر کے انتظام اور مارکیٹنگ ٹولز کی تربیت کے ساتھ اسٹور حوالے کرتے ہیں۔",
      ],
      tips: [
        "پروڈکٹس کو واضح کیٹیگریز میں رکھیں۔",
        "آرڈرز بڑھانے کے لیے کوپن اور آفرز سوچ سمجھ کر استعمال کریں۔",
        "اسٹاک پر نظر رکھیں تاکہ ختم شدہ پروڈکٹ فروخت نہ ہو۔",
        "لانچ سے پہلے کئی ڈیوائسز پر چیک آؤٹ ٹیسٹ کریں۔",
        "سوشل میڈیا اکاؤنٹس اسٹور سے جوڑیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے گاہکوں کے زد اسٹور دور سے تیار کرتے ہیں۔",
      faqs: [
        { q: "کیا تسامی زد کا سرکاری پارٹنر ہے؟", a: "ہم آزاد ٹیم ہیں جو گاہکوں کے لیے زد پر اسٹور تیار کرتی ہے۔ سبسکرپشن آپ کے نام ہوتی ہے۔" },
        { q: "زد یا سلہ، کون سا بہتر ہے؟", a: "دونوں مضبوط سعودی پلیٹ فارم ہیں؛ فرق کچھ ٹولز اور پلانز میں ہے۔ ہم آپ کی پروڈکٹس کے مطابق موازنہ کرتے ہیں۔" },
        { q: "کیا آپ شپنگ اور ادائیگی سیٹ کرتے ہیں؟", a: "جی ہاں، زد میں دستیاب ادائیگی اور شپنگ فعال کر کے لانچ سے پہلے ٹیسٹ کرتے ہیں۔" },
        { q: "کیا آپ موجودہ زد اسٹور بہتر بناتے ہیں؟", a: "جی ہاں، انٹرفیس، چیک آؤٹ اور پروڈکٹس کی ترتیب بہتر بناتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "ज़िद स्टोर डिज़ाइन",
      secondaryKeywords: ["ज़िद पर स्टोर बनाना", "ज़िद स्टोर सेटअप", "ज़िद थीम"],
      metaDescription:
        "तसामी के साथ ज़िद स्टोर डिज़ाइन और सेटअप: ब्रांड के अनुसार इंटरफ़ेस, प्रोडक्ट, पेमेंट, शिपिंग और डोमेन की तैयारी, तैयार स्टोर और प्रशिक्षण।",
      intro:
        "ज़िद ऑनलाइन स्टोर बनाने और चलाने का सऊदी प्लेटफ़ॉर्म है जो अरबी डैशबोर्ड में पेमेंट, शिपिंग और मार्केटिंग टूल देता है। ज़िद पर सफलता अच्छे सेटअप पर निर्भर है: आपकी पहचान के अनुसार साफ़ इंटरफ़ेस, व्यवस्थित प्रोडक्ट, सक्रिय पेमेंट व शिपिंग और मोबाइल पर आसान ख़रीदारी। तसामी चरण-दर-चरण ज़िद स्टोर तैयार करता है जब तक वह ऑर्डर के लिए तैयार न हो जाए।",
      who: [
        "जो बिल्ट-इन मार्केटिंग टूल वाले सऊदी प्लेटफ़ॉर्म पर स्टोर शुरू करना चाहते हैं।",
        "मौजूदा ज़िद स्टोर मालिक जो बेहतर इंटरफ़ेस और ज़्यादा बिक्री चाहते हैं।",
        "ब्रांड जिनके प्रोडक्ट के कई विकल्प हैं और अच्छी व्यवस्था चाहिए।",
        "दुकानें जो ऑनलाइन बिक्री की जल्दी शुरुआत चाहती हैं।",
      ],
      steps: [
        "स्टोर अकाउंट बनाने और सही प्लान चुनने में मदद करते हैं।",
        "इंटरफ़ेस डिज़ाइन कर टेम्पलेट, रंग और पेज ब्रांड के अनुसार सेट करते हैं।",
        "प्रोडक्ट, कैटेगरी, विकल्प और स्टॉक अपलोड करते हैं।",
        "पेमेंट और शिपिंग सक्रिय कर डोमेन जोड़ते हैं।",
        "ख़रीद प्रक्रिया टेस्ट कर प्रबंधन और मार्केटिंग टूल के प्रशिक्षण के साथ स्टोर सौंपते हैं।",
      ],
      tips: [
        "प्रोडक्ट को साफ़ कैटेगरी में रखें।",
        "ऑर्डर बढ़ाने के लिए कूपन और ऑफ़र सोच-समझकर इस्तेमाल करें।",
        "स्टॉक पर नज़र रखें ताकि ख़त्म प्रोडक्ट न बिके।",
        "लॉन्च से पहले कई डिवाइस पर चेकआउट टेस्ट करें।",
        "सोशल मीडिया अकाउंट स्टोर से जोड़ें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के ग्राहकों के ज़िद स्टोर दूर से तैयार करते हैं।",
      faqs: [
        { q: "क्या तसामी ज़िद का आधिकारिक पार्टनर है?", a: "हम एक स्वतंत्र टीम हैं जो ग्राहकों के लिए ज़िद पर स्टोर तैयार करती है। सब्सक्रिप्शन आपके नाम होता है।" },
        { q: "ज़िद या सल्ला, कौन-सा बेहतर है?", a: "दोनों मज़बूत सऊदी प्लेटफ़ॉर्म हैं; फ़र्क़ कुछ टूल और प्लान में है। हम आपके प्रोडक्ट के अनुसार तुलना करते हैं।" },
        { q: "क्या आप शिपिंग और पेमेंट सेट करते हैं?", a: "हाँ, ज़िद में उपलब्ध पेमेंट और शिपिंग सक्रिय कर लॉन्च से पहले टेस्ट करते हैं।" },
        { q: "क्या आप मौजूदा ज़िद स्टोर बेहतर बनाते हैं?", a: "हाँ, इंटरफ़ेस, चेकआउट और प्रोडक्ट की व्यवस्था बेहतर बनाते हैं।" },
      ],
    },
  },

  shopifyStore: {
    ar: {
      primaryKeyword: "تصميم متجر شوبيفاي",
      secondaryKeywords: ["إنشاء متجر شوبيفاي", "شوبيفاي بالعربي", "تعريب متجر شوبيفاي", "ربط شوبيفاي بالدفع في السعودية"],
      metaDescription:
        "تصميم متجر شوبيفاي للسوق السعودي مع تسامي: واجهة عربية من اليمين لليسار، عملة الريال، ربط بوابات دفع وشحن محلية، وإعداد جاهز للبيع.",
      intro:
        "شوبيفاي منصة عالمية مرنة تناسب العلامات التي تبيع داخل المملكة وخارجها أو تحتاج تخصيصاً واسعاً. لكن تجهيزها للسوق السعودي يحتاج عناية: واجهة عربية تعمل من اليمين لليسار بشكل سليم، والأسعار بالريال، وبوابات دفع تدعم الوسائل المحلية، وشركات شحن داخلية، وإعدادات ضريبية صحيحة. تسامي تجهز متجرك على شوبيفاي بهذه التفاصيل كلها.",
      who: [
        "العلامات التي تبيع محلياً ودولياً من متجر واحد.",
        "من يحتاج تصميماً مرناً وتطبيقات متقدمة غير متاحة في المنصات المحلية.",
        "أصحاب متاجر شوبيفاي الحالية التي تعاني من مشاكل في العربية أو الدفع.",
        "المشاريع التي تخطط للتوسع خارج المملكة لاحقاً.",
      ],
      steps: [
        "نحدد أسواقك ووسائل الدفع والشحن التي يحتاجها عملاؤك.",
        "نختار ثيماً يدعم العربية ونضبط اتجاه الصفحات والخطوط.",
        "نرفع المنتجات ونضبط العملة والضريبة والأسواق.",
        "نربط بوابة دفع تدعم الوسائل المحلية وتطبيقات الشحن المناسبة.",
        "نختبر الطلب كاملاً ونسلمك المتجر مع تدريب على لوحة التحكم.",
      ],
      tips: [
        "تأكد أن الثيم يدعم الاتجاه من اليمين لليسار قبل شرائه.",
        "اختر بوابة دفع تدعم مدى إذا كان أغلب عملائك داخل المملكة.",
        "راجع ترجمة صفحات الدفع والرسائل الآلية للعربية.",
        "احسب تكلفة التطبيقات الشهرية قبل تفعيلها.",
        "ابدأ بالسوق المحلي ثم أضف أسواقاً أخرى تدريجياً.",
      ],
      local:
        "نجهز متاجر شوبيفاي لعملاء في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة عن بُعد.",
      faqs: [
        { q: "هل شوبيفاي مناسب للسوق السعودي؟", a: "نعم مع الإعداد الصحيح للعربية والعملة وبوابة الدفع المحلية والشحن، وهو مناسب خاصة لمن يبيع محلياً ودولياً." },
        { q: "هل يدعم شوبيفاي الدفع بمدى؟", a: "يتم ذلك عبر بوابات دفع تدعم مدى وتتكامل مع شوبيفاي. نرشح لك الخيار المناسب ونربطه." },
        { q: "هل تعرّبون متجري الحالي؟", a: "نعم، نضبط الواجهة العربية واتجاه الصفحات ونراجع النصوص والرسائل الآلية." },
        { q: "ما الفرق بين شوبيفاي وسلة؟", a: "سلة منصة سعودية بأدوات محلية جاهزة، وشوبيفاي عالمية أكثر مرونة وتطبيقات. نساعدك في الاختيار حسب خطتك." },
      ],
    },
    en: {
      primaryKeyword: "Shopify store design for Saudi Arabia",
      secondaryKeywords: ["create a Shopify store KSA", "Arabic Shopify store", "Shopify RTL", "Shopify payment gateway Saudi"],
      metaDescription:
        "Shopify store design for the Saudi market with Tasami: a proper right-to-left Arabic storefront, SAR pricing, local payment gateways and shipping, set up ready to sell.",
      intro:
        "Shopify is a flexible global platform that suits brands selling inside and outside the Kingdom or needing extensive customization. Preparing it for the Saudi market takes care: an Arabic storefront that works properly right to left, prices in riyals, payment gateways that support local methods, domestic shipping companies and correct tax settings. Tasami sets up your Shopify store with all of these details.",
      who: [
        "Brands selling locally and internationally from one store.",
        "Anyone needing flexible design and advanced apps not available on local platforms.",
        "Existing Shopify stores with Arabic or payment problems.",
        "Businesses planning to expand outside the Kingdom later.",
      ],
      steps: [
        "We define your markets and the payment and shipping methods your customers need.",
        "We choose an Arabic-ready theme and set page direction and fonts.",
        "We upload products and configure currency, tax and markets.",
        "We connect a payment gateway that supports local methods and suitable shipping apps.",
        "We test a full order and hand over the store with dashboard training.",
      ],
      tips: [
        "Confirm the theme supports right-to-left before buying it.",
        "Choose a gateway that supports mada if most customers are in the Kingdom.",
        "Review the Arabic translation of checkout pages and automated messages.",
        "Calculate monthly app costs before activating them.",
        "Start with the local market, then add others gradually.",
      ],
      local:
        "We set up Shopify stores for clients in Makkah, Jeddah, Riyadh, Dammam and every Saudi city remotely.",
      faqs: [
        { q: "Is Shopify suitable for the Saudi market?", a: "Yes, with correct setup for Arabic, currency, a local payment gateway and shipping; it especially suits stores selling locally and internationally." },
        { q: "Does Shopify accept mada?", a: "Through payment gateways that support mada and integrate with Shopify. We recommend and connect the right option." },
        { q: "Can you arabize my existing store?", a: "Yes, we set up the Arabic storefront and page direction and review texts and automated messages." },
        { q: "Shopify vs Salla?", a: "Salla is a Saudi platform with ready local tools; Shopify is global with more flexibility and apps. We help you choose based on your plans." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی مارکیٹ کے لیے شاپیفائی اسٹور",
      secondaryKeywords: ["شاپیفائی اسٹور بنانا", "عربی شاپیفائی", "شاپیفائی پیمنٹ گیٹ وے سعودی"],
      metaDescription:
        "تسامی کے ساتھ سعودی مارکیٹ کے لیے شاپیفائی اسٹور: درست دائیں سے بائیں عربی انٹرفیس، ریال میں قیمتیں، مقامی پیمنٹ گیٹ وے اور شپنگ، فروخت کے لیے تیار۔",
      intro:
        "شاپیفائی ایک لچکدار عالمی پلیٹ فارم ہے جو مملکت کے اندر اور باہر بیچنے والے یا زیادہ تخصیص چاہنے والے برانڈز کے لیے موزوں ہے۔ سعودی مارکیٹ کے لیے تیاری میں توجہ چاہیے: درست طریقے سے دائیں سے بائیں کام کرنے والا عربی انٹرفیس، ریال میں قیمتیں، مقامی ادائیگی سپورٹ کرنے والے گیٹ وے، مقامی شپنگ اور درست ٹیکس سیٹنگز۔ تسامی یہ سب تفصیلات سیٹ کرتا ہے۔",
      who: [
        "برانڈز جو ایک اسٹور سے مقامی اور بین الاقوامی فروخت کرتے ہیں۔",
        "جنہیں لچکدار ڈیزائن اور جدید ایپس چاہییں۔",
        "موجودہ شاپیفائی اسٹورز جنہیں عربی یا ادائیگی کے مسائل ہیں۔",
        "کاروبار جو بعد میں مملکت سے باہر پھیلنا چاہتے ہیں۔",
      ],
      steps: [
        "آپ کی مارکیٹس اور گاہکوں کے لیے درکار ادائیگی و شپنگ طے کرتے ہیں۔",
        "عربی سپورٹ والا تھیم منتخب کر کے صفحات کی سمت اور فونٹ سیٹ کرتے ہیں۔",
        "پروڈکٹس اپلوڈ کر کے کرنسی، ٹیکس اور مارکیٹس سیٹ کرتے ہیں۔",
        "مقامی ادائیگی سپورٹ کرنے والا گیٹ وے اور شپنگ ایپس جوڑتے ہیں۔",
        "مکمل آرڈر ٹیسٹ کر کے تربیت کے ساتھ اسٹور حوالے کرتے ہیں۔",
      ],
      tips: [
        "خریدنے سے پہلے تصدیق کریں کہ تھیم دائیں سے بائیں سپورٹ کرتا ہے۔",
        "اگر زیادہ گاہک مملکت میں ہیں تو مدیٰ سپورٹ والا گیٹ وے چنیں۔",
        "چیک آؤٹ صفحات اور خودکار پیغامات کا عربی ترجمہ دیکھیں۔",
        "ایپس فعال کرنے سے پہلے ماہانہ لاگت کا حساب لگائیں۔",
        "مقامی مارکیٹ سے شروع کر کے بتدریج دوسری مارکیٹس شامل کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے گاہکوں کے شاپیفائی اسٹور دور سے تیار کرتے ہیں۔",
      faqs: [
        { q: "کیا شاپیفائی سعودی مارکیٹ کے لیے موزوں ہے؟", a: "جی ہاں، عربی، کرنسی، مقامی گیٹ وے اور شپنگ کے درست سیٹ اپ کے ساتھ۔" },
        { q: "کیا شاپیفائی مدیٰ قبول کرتا ہے؟", a: "مدیٰ سپورٹ کرنے والے اور شاپیفائی سے جڑنے والے گیٹ وے کے ذریعے۔ ہم مناسب آپشن جوڑتے ہیں۔" },
        { q: "کیا آپ موجودہ اسٹور کو عربی بناتے ہیں؟", a: "جی ہاں، عربی انٹرفیس اور سمت سیٹ کر کے متن اور پیغامات دیکھتے ہیں۔" },
        { q: "شاپیفائی اور سلہ میں کیا فرق ہے؟", a: "سلہ مقامی ٹولز والا سعودی پلیٹ فارم ہے، شاپیفائی عالمی اور زیادہ لچکدار ہے۔ ہم انتخاب میں مدد کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी बाज़ार के लिए शॉपिफ़ाई स्टोर",
      secondaryKeywords: ["शॉपिफ़ाई स्टोर बनाना", "अरबी शॉपिफ़ाई", "शॉपिफ़ाई पेमेंट गेटवे सऊदी"],
      metaDescription:
        "तसामी के साथ सऊदी बाज़ार के लिए शॉपिफ़ाई स्टोर: सही दाएँ-से-बाएँ अरबी इंटरफ़ेस, रियाल में क़ीमतें, स्थानीय पेमेंट गेटवे और शिपिंग, बिक्री के लिए तैयार।",
      intro:
        "शॉपिफ़ाई एक लचीला वैश्विक प्लेटफ़ॉर्म है जो देश के अंदर और बाहर बेचने वाले या ज़्यादा कस्टमाइज़ेशन चाहने वाले ब्रांड के लिए उपयुक्त है। सऊदी बाज़ार के लिए तैयारी में ध्यान चाहिए: सही ढंग से दाएँ-से-बाएँ चलने वाला अरबी इंटरफ़ेस, रियाल में क़ीमतें, स्थानीय पेमेंट सपोर्ट करने वाले गेटवे, स्थानीय शिपिंग और सही टैक्स सेटिंग। तसामी ये सब बारीकियाँ सेट करता है।",
      who: [
        "ब्रांड जो एक स्टोर से स्थानीय और अंतरराष्ट्रीय बिक्री करते हैं।",
        "जिन्हें लचीला डिज़ाइन और उन्नत ऐप चाहिए।",
        "मौजूदा शॉपिफ़ाई स्टोर जिन्हें अरबी या पेमेंट की समस्या है।",
        "व्यवसाय जो बाद में देश से बाहर फैलना चाहते हैं।",
      ],
      steps: [
        "आपके बाज़ार और ग्राहकों के लिए ज़रूरी पेमेंट व शिपिंग तय करते हैं।",
        "अरबी सपोर्ट वाली थीम चुनकर पेज दिशा और फ़ॉन्ट सेट करते हैं।",
        "प्रोडक्ट अपलोड कर मुद्रा, टैक्स और बाज़ार सेट करते हैं।",
        "स्थानीय पेमेंट सपोर्ट करने वाला गेटवे और शिपिंग ऐप जोड़ते हैं।",
        "पूरा ऑर्डर टेस्ट कर प्रशिक्षण के साथ स्टोर सौंपते हैं।",
      ],
      tips: [
        "ख़रीदने से पहले पक्का करें कि थीम दाएँ-से-बाएँ सपोर्ट करती है।",
        "ज़्यादातर ग्राहक देश में हैं तो मदा सपोर्ट वाला गेटवे चुनें।",
        "चेकआउट पेज और ऑटो मैसेज का अरबी अनुवाद जाँचें।",
        "ऐप सक्रिय करने से पहले मासिक लागत का हिसाब लगाएँ।",
        "स्थानीय बाज़ार से शुरू कर धीरे-धीरे दूसरे बाज़ार जोड़ें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के ग्राहकों के शॉपिफ़ाई स्टोर दूर से तैयार करते हैं।",
      faqs: [
        { q: "क्या शॉपिफ़ाई सऊदी बाज़ार के लिए उपयुक्त है?", a: "हाँ, अरबी, मुद्रा, स्थानीय गेटवे और शिपिंग के सही सेटअप के साथ।" },
        { q: "क्या शॉपिफ़ाई मदा लेता है?", a: "मदा सपोर्ट करने वाले और शॉपिफ़ाई से जुड़ने वाले गेटवे के ज़रिए। हम सही विकल्प जोड़ते हैं।" },
        { q: "क्या आप मौजूदा स्टोर को अरबी बनाते हैं?", a: "हाँ, अरबी इंटरफ़ेस और दिशा सेट कर टेक्स्ट और मैसेज जाँचते हैं।" },
        { q: "शॉपिफ़ाई और सल्ला में क्या फ़र्क़ है?", a: "सल्ला स्थानीय टूल वाला सऊदी प्लेटफ़ॉर्म है, शॉपिफ़ाई वैश्विक और ज़्यादा लचीला है। हम चुनने में मदद करते हैं।" },
      ],
    },
  },

  paymentsShipping: {
    ar: {
      primaryKeyword: "ربط بوابة دفع",
      secondaryKeywords: ["ربط بوابة دفع إلكتروني", "ربط شركات الشحن بالمتجر", "دفع مدى وApple Pay", "ربط تابي وتمارا"],
      metaDescription:
        "ربط بوابات الدفع وشركات الشحن بمتجرك أو موقعك مع تسامي: مدى وApple Pay وخدمات الدفع لاحقاً حسب المزود، مع ربط الشحن وتتبع الطلبات.",
      intro:
        "طريقة الدفع وسرعة الشحن من أهم أسباب إتمام الطلب أو التخلي عنه. ربط بوابة الدفع يعني أن يدفع العميل بمدى أو البطاقات أو Apple Pay أو خدمات الدفع لاحقاً بأمان داخل متجرك، وربط الشحن يعني إنشاء البوليصة وتتبع الشحنة تلقائياً. تسامي تساعدك في اختيار المزودين المناسبين وتنفذ الربط التقني وتختبره قبل التشغيل.",
      who: [
        "المتاجر التي تعتمد على التحويل البنكي وتريد دفعاً إلكترونياً مباشراً.",
        "المواقع والتطبيقات المبرمجة خصيصاً وتحتاج ربطاً تقنياً ببوابة دفع.",
        "المتاجر التي تريد إضافة خيارات تقسيط أو دفع لاحق.",
        "من يدير الشحن يدوياً ويريد إنشاء البوالص وتتبعها تلقائياً.",
      ],
      steps: [
        "نراجع منصتك الحالية ووسائل الدفع والشحن التي يحتاجها عملاؤك.",
        "نرشح مزودي الدفع والشحن المناسبين ونوضح متطلبات التسجيل لديهم.",
        "نساعدك في تجهيز حساب التاجر بالمستندات المطلوبة من المزود.",
        "ننفذ الربط التقني في المتجر أو الموقع ونضبط حالات الطلب.",
        "نختبر عمليات الدفع والاسترجاع والشحن قبل التشغيل الفعلي.",
      ],
      tips: [
        "جهّز السجل التجاري والحساب البنكي للمنشأة، فأغلب المزودين يطلبونهما.",
        "قارن رسوم العمليات ومدة تحويل المبالغ بين المزودين.",
        "اختبر الدفع بمبالغ صغيرة قبل الإطلاق.",
        "وضّح للعميل تكلفة الشحن ومدته قبل إتمام الطلب.",
        "فعّل إشعارات تتبع الشحنة لتقليل استفسارات العملاء.",
      ],
      local:
        "ننفذ ربط الدفع والشحن لمتاجر ومواقع في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة عن بُعد.",
      faqs: [
        { q: "ما وسائل الدفع التي يمكن ربطها؟", a: "غالباً مدى والبطاقات الائتمانية وApple Pay، وخدمات الدفع لاحقاً، حسب المزود الذي تختاره ونوع منصتك." },
        { q: "هل أحتاج سجلاً تجارياً لبوابة الدفع؟", a: "أغلب مزودي الدفع يطلبون سجلاً تجارياً وحساباً بنكياً باسم المنشأة. نوضح لك متطلبات المزود المختار." },
        { q: "هل تربطون شركات الشحن المحلية؟", a: "نعم، نربط شركات الشحن التي تدعمها منصتك أو عبر واجهاتها البرمجية في المواقع المبرمجة." },
        { q: "هل يمكن الربط بموقع مبرمج خصيصاً؟", a: "نعم، ننفذ التكامل البرمجي مع بوابة الدفع وشركة الشحن في موقعك أو تطبيقك." },
      ],
    },
    en: {
      primaryKeyword: "payment gateway integration in Saudi Arabia",
      secondaryKeywords: ["connect payment gateway", "shipping integration for online store", "mada and Apple Pay integration", "buy now pay later integration"],
      metaDescription:
        "Payment gateway and shipping integration for your store or website with Tasami: mada, Apple Pay and buy-now-pay-later depending on the provider, plus shipping and order tracking.",
      intro:
        "Payment options and shipping speed are among the main reasons customers complete or abandon an order. Payment gateway integration lets customers pay securely with mada, cards, Apple Pay or buy-now-pay-later inside your store, while shipping integration creates waybills and tracks shipments automatically. Tasami helps you choose suitable providers, implements the technical integration and tests it before going live.",
      who: [
        "Stores relying on bank transfers that want direct electronic payment.",
        "Custom-built websites and apps needing a technical gateway integration.",
        "Stores wanting to add installment or pay-later options.",
        "Anyone managing shipping manually who wants automatic waybills and tracking.",
      ],
      steps: [
        "We review your platform and the payment and shipping methods your customers need.",
        "We recommend suitable payment and shipping providers and explain their onboarding requirements.",
        "We help you prepare the merchant account with the documents the provider requires.",
        "We implement the technical integration in your store or website and configure order statuses.",
        "We test payments, refunds and shipping before going live.",
      ],
      tips: [
        "Prepare your CR and business bank account; most providers require them.",
        "Compare transaction fees and settlement times between providers.",
        "Test payments with small amounts before launch.",
        "Show customers shipping cost and time before checkout.",
        "Enable shipment tracking notifications to reduce customer inquiries.",
      ],
      local:
        "We integrate payments and shipping for stores and websites in Makkah, Jeddah, Riyadh, Dammam and every Saudi city remotely.",
      faqs: [
        { q: "Which payment methods can be connected?", a: "Usually mada, credit cards, Apple Pay and pay-later services, depending on the provider and your platform." },
        { q: "Do I need a CR for a payment gateway?", a: "Most providers require a CR and a business bank account. We explain the chosen provider's requirements." },
        { q: "Do you connect local shipping companies?", a: "Yes, through the companies your platform supports or via their APIs on custom-built sites." },
        { q: "Can you integrate with a custom-built website?", a: "Yes, we build the API integration with the payment gateway and shipping company in your site or app." },
      ],
    },
    ur: {
      primaryKeyword: "پیمنٹ گیٹ وے انٹیگریشن",
      secondaryKeywords: ["پیمنٹ گیٹ وے جوڑنا", "اسٹور سے شپنگ جوڑنا", "مدیٰ اور ایپل پے"],
      metaDescription:
        "تسامی کے ساتھ اسٹور یا ویب سائٹ سے پیمنٹ گیٹ وے اور شپنگ جوڑیں: مدیٰ، ایپل پے اور بعد میں ادائیگی، فراہم کنندہ کے مطابق، شپنگ اور آرڈر ٹریکنگ کے ساتھ۔",
      intro:
        "ادائیگی کے طریقے اور شپنگ کی رفتار آرڈر مکمل یا ترک ہونے کی اہم وجوہات ہیں۔ پیمنٹ گیٹ وے انٹیگریشن سے گاہک آپ کے اسٹور میں مدیٰ، کارڈز، ایپل پے یا بعد میں ادائیگی سے محفوظ طریقے سے ادا کرتا ہے، اور شپنگ انٹیگریشن سے بلٹی بنتی اور ٹریکنگ خودکار ہوتی ہے۔ تسامی مناسب فراہم کنندہ منتخب کرنے میں مدد کر کے تکنیکی انٹیگریشن کرتا اور لانچ سے پہلے ٹیسٹ کرتا ہے۔",
      who: [
        "بینک ٹرانسفر پر چلنے والے اسٹورز جو براہِ راست الیکٹرانک ادائیگی چاہتے ہیں۔",
        "خصوصی ویب سائٹس اور ایپس جنہیں گیٹ وے کی تکنیکی انٹیگریشن چاہیے۔",
        "اسٹورز جو قسطوں یا بعد میں ادائیگی کا آپشن چاہتے ہیں۔",
        "جو دستی شپنگ کرتے ہیں اور خودکار بلٹی و ٹریکنگ چاہتے ہیں۔",
      ],
      steps: [
        "آپ کا پلیٹ فارم اور گاہکوں کے لیے درکار ادائیگی و شپنگ دیکھتے ہیں۔",
        "مناسب فراہم کنندہ تجویز کر کے ان کی رجسٹریشن کی شرائط بتاتے ہیں۔",
        "فراہم کنندہ کے مطلوبہ کاغذات کے ساتھ مرچنٹ اکاؤنٹ کی تیاری میں مدد کرتے ہیں۔",
        "اسٹور یا ویب سائٹ میں تکنیکی انٹیگریشن کر کے آرڈر اسٹیٹس سیٹ کرتے ہیں۔",
        "لانچ سے پہلے ادائیگی، رقم واپسی اور شپنگ ٹیسٹ کرتے ہیں۔",
      ],
      tips: [
        "سجل اور کاروباری بینک اکاؤنٹ تیار رکھیں؛ زیادہ تر فراہم کنندہ مانگتے ہیں۔",
        "فراہم کنندگان کی ٹرانزیکشن فیس اور رقم منتقلی کا وقت موازنہ کریں۔",
        "لانچ سے پہلے چھوٹی رقم سے ادائیگی ٹیسٹ کریں۔",
        "چیک آؤٹ سے پہلے شپنگ لاگت اور وقت دکھائیں۔",
        "گاہکوں کے سوالات کم کرنے کے لیے ٹریکنگ نوٹیفکیشن فعال کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اسٹورز اور ویب سائٹس کی ادائیگی و شپنگ دور سے جوڑتے ہیں۔",
      faqs: [
        { q: "کون سے ادائیگی کے طریقے جوڑے جا سکتے ہیں؟", a: "عموماً مدیٰ، کریڈٹ کارڈ، ایپل پے اور بعد میں ادائیگی، فراہم کنندہ اور پلیٹ فارم کے مطابق۔" },
        { q: "کیا گیٹ وے کے لیے سجل ضروری ہے؟", a: "زیادہ تر فراہم کنندہ سجل اور کاروباری بینک اکاؤنٹ مانگتے ہیں۔ ہم شرائط بتاتے ہیں۔" },
        { q: "کیا آپ مقامی شپنگ کمپنیاں جوڑتے ہیں؟", a: "جی ہاں، پلیٹ فارم کی سپورٹ یا ان کی API کے ذریعے۔" },
        { q: "کیا خصوصی ویب سائٹ سے جوڑ سکتے ہیں؟", a: "جی ہاں، ہم گیٹ وے اور شپنگ کمپنی سے پروگرامنگ انٹیگریشن بناتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "पेमेंट गेटवे इंटीग्रेशन",
      secondaryKeywords: ["पेमेंट गेटवे जोड़ना", "स्टोर से शिपिंग जोड़ना", "मदा और Apple Pay"],
      metaDescription:
        "तसामी के साथ स्टोर या वेबसाइट से पेमेंट गेटवे और शिपिंग जोड़ें: मदा, Apple Pay और बाद में भुगतान, प्रदाता के अनुसार, शिपिंग और ऑर्डर ट्रैकिंग के साथ।",
      intro:
        "पेमेंट के तरीक़े और शिपिंग की रफ़्तार ऑर्डर पूरा होने या छोड़ने के मुख्य कारण हैं। पेमेंट गेटवे इंटीग्रेशन से ग्राहक आपके स्टोर में मदा, कार्ड, Apple Pay या बाद में भुगतान से सुरक्षित पेमेंट करता है, और शिपिंग इंटीग्रेशन से वेबिल बनता और ट्रैकिंग अपने आप होती है। तसामी सही प्रदाता चुनने में मदद कर तकनीकी इंटीग्रेशन करता और लॉन्च से पहले टेस्ट करता है।",
      who: [
        "बैंक ट्रांसफ़र पर चलने वाले स्टोर जो सीधा इलेक्ट्रॉनिक पेमेंट चाहते हैं।",
        "कस्टम वेबसाइट और ऐप जिन्हें गेटवे का तकनीकी इंटीग्रेशन चाहिए।",
        "स्टोर जो किश्त या बाद में भुगतान का विकल्प चाहते हैं।",
        "जो मैनुअल शिपिंग करते हैं और अपने-आप वेबिल व ट्रैकिंग चाहते हैं।",
      ],
      steps: [
        "आपका प्लेटफ़ॉर्म और ग्राहकों के लिए ज़रूरी पेमेंट व शिपिंग देखते हैं।",
        "सही प्रदाता सुझाकर उनकी रजिस्ट्रेशन शर्तें बताते हैं।",
        "प्रदाता के ज़रूरी दस्तावेज़ों के साथ मर्चेंट अकाउंट तैयार करने में मदद करते हैं।",
        "स्टोर या वेबसाइट में तकनीकी इंटीग्रेशन कर ऑर्डर स्टेटस सेट करते हैं।",
        "लॉन्च से पहले पेमेंट, रिफ़ंड और शिपिंग टेस्ट करते हैं।",
      ],
      tips: [
        "CR और व्यवसाय का बैंक अकाउंट तैयार रखें; ज़्यादातर प्रदाता माँगते हैं।",
        "प्रदाताओं की ट्रांज़ैक्शन फ़ीस और रक़म ट्रांसफ़र का समय तुलना करें।",
        "लॉन्च से पहले छोटी रक़म से पेमेंट टेस्ट करें।",
        "चेकआउट से पहले शिपिंग लागत और समय दिखाएँ।",
        "ग्राहकों के सवाल कम करने के लिए ट्रैकिंग नोटिफ़िकेशन चालू करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के स्टोर और वेबसाइट के पेमेंट व शिपिंग दूर से जोड़ते हैं।",
      faqs: [
        { q: "कौन-से पेमेंट तरीक़े जोड़े जा सकते हैं?", a: "आमतौर पर मदा, क्रेडिट कार्ड, Apple Pay और बाद में भुगतान, प्रदाता और प्लेटफ़ॉर्म के अनुसार।" },
        { q: "क्या गेटवे के लिए CR ज़रूरी है?", a: "ज़्यादातर प्रदाता CR और व्यवसाय बैंक अकाउंट माँगते हैं। हम शर्तें बताते हैं।" },
        { q: "क्या आप स्थानीय शिपिंग कंपनियाँ जोड़ते हैं?", a: "हाँ, प्लेटफ़ॉर्म के सपोर्ट या उनकी API के ज़रिए।" },
        { q: "क्या कस्टम वेबसाइट से जोड़ सकते हैं?", a: "हाँ, हम गेटवे और शिपिंग कंपनी से प्रोग्रामिंग इंटीग्रेशन बनाते हैं।" },
      ],
    },
  },

  uiuxDesign: {
    ar: {
      primaryKeyword: "تصميم واجهة مستخدم",
      secondaryKeywords: ["تصميم تجربة المستخدم", "تصميم UI UX", "تصميم واجهات تطبيقات", "نموذج أولي فيجما"],
      metaDescription:
        "تصميم واجهات وتجربة مستخدم (UI/UX) لمواقع وتطبيقات عربية مع تسامي: دراسة المستخدم، مخططات أولية، تصميم في فيجما، ونموذج تفاعلي قبل البرمجة.",
      intro:
        "تصميم الواجهة وتجربة المستخدم يحدد هل سيفهم العميل منتجك ويكمل الطلب أم يغادر. التصميم الجيد يبدأ بفهم المستخدم ورحلته، ثم مخططات أولية بسيطة، ثم تصميم نهائي متناسق يدعم العربية من اليمين لليسار، ونموذج تفاعلي يُختبر قبل البرمجة. تسامي تصمم لك الواجهات وتسلم ملفات جاهزة لفريق البرمجة، سواء نفذنا البرمجة أو فريق آخر.",
      who: [
        "الشركات الناشئة التي تبني تطبيقاً أو منصة وتحتاج تصميماً قبل البرمجة.",
        "أصحاب المواقع والتطبيقات القائمة التي يشتكي مستخدموها من صعوبة الاستخدام.",
        "فرق البرمجة التي تحتاج تصميماً احترافياً يدعم العربية.",
        "الجهات التي تريد توحيد هوية منتجاتها الرقمية بنظام تصميم.",
      ],
      steps: [
        "نفهم أهداف المنتج والمستخدمين المستهدفين ونراجع المنافسين.",
        "نرسم رحلة المستخدم والمخططات الأولية للشاشات الأساسية.",
        "نصمم الواجهات النهائية بالهوية البصرية في فيجما.",
        "نجهز نموذجاً تفاعلياً لتجربة التنقل قبل البرمجة.",
        "نسلم الملفات ونظام المكونات لفريق البرمجة ونتابع التنفيذ.",
      ],
      tips: [
        "صمّم للجوال أولاً، ثم وسّع التصميم للشاشات الأكبر.",
        "اختبر التصميم مع مستخدمين حقيقيين ولو كانوا قلة.",
        "لا تكتفِ بقلب التصميم الإنجليزي؛ العربية تحتاج عناية بالخطوط والمسافات.",
        "استخدم نظام مكونات موحد لتسريع البرمجة والتطوير لاحقاً.",
        "اجعل الإجراء الأهم في كل شاشة واضحاً وسهل الوصول.",
      ],
      local:
        "نصمم واجهات لعملاء في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، ونعرض التصاميم ونتلقى الملاحظات عن بُعد.",
      faqs: [
        { q: "ما الفرق بين UI وUX؟", a: "UX هو تخطيط تجربة المستخدم ورحلته وسهولة الاستخدام، وUI هو الشكل البصري للواجهات. نقدم الاثنين معاً." },
        { q: "هل تسلمون ملفات فيجما؟", a: "نعم، نسلم ملفات فيجما منظمة مع المكونات والنموذج التفاعلي." },
        { q: "هل يجب أن تبرمجوا المشروع أيضاً؟", a: "لا، يمكنك أخذ التصميم لفريق برمجة آخر، ويمكننا تنفيذ البرمجة إن رغبت." },
        { q: "هل تعيدون تصميم تطبيق قائم؟", a: "نعم، نراجع التطبيق الحالي ونحدد نقاط الضعف ثم نعيد تصميم الشاشات الأهم." },
      ],
    },
    en: {
      primaryKeyword: "UI/UX design in Saudi Arabia",
      secondaryKeywords: ["user interface design", "user experience design", "app UI design", "Figma prototype"],
      metaDescription:
        "UI/UX design for Arabic websites and apps with Tasami: user research, wireframes, Figma design and an interactive prototype before development.",
      intro:
        "Interface and experience design decides whether customers understand your product and complete an action or leave. Good design starts with understanding users and their journey, then simple wireframes, then a consistent final design that supports right-to-left Arabic, and an interactive prototype tested before development. Tasami designs your interfaces and delivers files ready for developers, whether we build it or another team does.",
      who: [
        "Startups building an app or platform that need design before development.",
        "Owners of existing sites and apps whose users find them hard to use.",
        "Development teams needing professional Arabic-ready design.",
        "Organizations wanting to unify their digital products with a design system.",
      ],
      steps: [
        "We understand product goals and target users and review competitors.",
        "We map the user journey and wireframe the key screens.",
        "We design the final interfaces in your visual identity in Figma.",
        "We build an interactive prototype to test navigation before development.",
        "We hand over files and the component system to developers and follow implementation.",
      ],
      tips: [
        "Design mobile first, then expand to larger screens.",
        "Test the design with real users, even a few.",
        "Do not just mirror an English design; Arabic needs care with fonts and spacing.",
        "Use a unified component system to speed up development later.",
        "Make the most important action on each screen clear and easy to reach.",
      ],
      local:
        "We design interfaces for clients in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, presenting designs and collecting feedback remotely.",
      faqs: [
        { q: "What is the difference between UI and UX?", a: "UX plans the user experience, journey and usability; UI is the visual look of the interfaces. We provide both." },
        { q: "Do you deliver Figma files?", a: "Yes, organized Figma files with components and the interactive prototype." },
        { q: "Do you have to build the project too?", a: "No, you can take the design to another development team, or we can build it if you prefer." },
        { q: "Do you redesign existing apps?", a: "Yes, we review the current app, identify weak points and redesign the key screens." },
      ],
    },
    ur: {
      primaryKeyword: "UI/UX ڈیزائن",
      secondaryKeywords: ["یوزر انٹرفیس ڈیزائن", "یوزر ایکسپیرینس ڈیزائن", "فگما پروٹوٹائپ"],
      metaDescription:
        "تسامی کے ساتھ عربی ویب سائٹس اور ایپس کے لیے UI/UX ڈیزائن: صارف کی تحقیق، وائر فریمز، فگما ڈیزائن اور پروگرامنگ سے پہلے انٹرایکٹو پروٹوٹائپ۔",
      intro:
        "انٹرفیس اور تجربے کا ڈیزائن طے کرتا ہے کہ گاہک آپ کی پروڈکٹ سمجھ کر عمل مکمل کرے گا یا چلا جائے گا۔ اچھا ڈیزائن صارف اور اس کے سفر کو سمجھنے سے شروع ہوتا ہے، پھر سادہ وائر فریمز، پھر دائیں سے بائیں عربی سپورٹ والا مربوط حتمی ڈیزائن، اور پروگرامنگ سے پہلے ٹیسٹ ہونے والا انٹرایکٹو پروٹوٹائپ۔ تسامی انٹرفیس ڈیزائن کر کے پروگرامنگ ٹیم کے لیے تیار فائلیں دیتا ہے۔",
      who: [
        "اسٹارٹ اپس جو ایپ یا پلیٹ فارم بنا رہے ہیں اور پروگرامنگ سے پہلے ڈیزائن چاہتے ہیں۔",
        "موجودہ ویب سائٹس اور ایپس جن کے صارفین استعمال میں مشکل محسوس کرتے ہیں۔",
        "پروگرامنگ ٹیمیں جنہیں عربی سپورٹ والا پیشہ ورانہ ڈیزائن چاہیے۔",
        "ادارے جو ڈیزائن سسٹم سے اپنی ڈیجیٹل پروڈکٹس یکساں بنانا چاہتے ہیں۔",
      ],
      steps: [
        "پروڈکٹ کے اہداف اور ہدف صارفین سمجھ کر حریفوں کا جائزہ لیتے ہیں۔",
        "صارف کا سفر اور اہم اسکرینز کے وائر فریمز بناتے ہیں۔",
        "فگما میں بصری شناخت کے ساتھ حتمی انٹرفیس ڈیزائن کرتے ہیں۔",
        "پروگرامنگ سے پہلے نیویگیشن ٹیسٹ کے لیے انٹرایکٹو پروٹوٹائپ بناتے ہیں۔",
        "فائلیں اور کمپوننٹ سسٹم پروگرامنگ ٹیم کو دے کر عمل درآمد فالو کرتے ہیں۔",
      ],
      tips: [
        "پہلے موبائل کے لیے ڈیزائن کریں، پھر بڑی اسکرینز کے لیے۔",
        "چند ہی سہی، حقیقی صارفین کے ساتھ ڈیزائن ٹیسٹ کریں۔",
        "انگریزی ڈیزائن کو صرف الٹا نہ کریں؛ عربی کو فونٹ اور فاصلوں میں توجہ چاہیے۔",
        "بعد میں تیز پروگرامنگ کے لیے یکساں کمپوننٹ سسٹم رکھیں۔",
        "ہر اسکرین کا اہم ترین عمل واضح رکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے گاہکوں کے لیے ڈیزائن کرتے ہیں اور دور سے آراء لیتے ہیں۔",
      faqs: [
        { q: "UI اور UX میں کیا فرق ہے؟", a: "UX صارف کے تجربے، سفر اور آسانی کی منصوبہ بندی ہے؛ UI انٹرفیس کی بصری شکل ہے۔ ہم دونوں دیتے ہیں۔" },
        { q: "کیا آپ فگما فائلیں دیتے ہیں؟", a: "جی ہاں، کمپوننٹس اور پروٹوٹائپ کے ساتھ منظم فگما فائلیں۔" },
        { q: "کیا پروگرامنگ بھی آپ سے کروانی ہوگی؟", a: "نہیں، ڈیزائن کسی دوسری ٹیم کو دے سکتے ہیں، یا چاہیں تو ہم بنا دیں۔" },
        { q: "کیا آپ موجودہ ایپ کا ری ڈیزائن کرتے ہیں؟", a: "جی ہاں، کمزوریاں دیکھ کر اہم اسکرینز دوبارہ ڈیزائن کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "UI/UX डिज़ाइन",
      secondaryKeywords: ["यूज़र इंटरफ़ेस डिज़ाइन", "यूज़र एक्सपीरियंस डिज़ाइन", "फ़िग्मा प्रोटोटाइप"],
      metaDescription:
        "तसामी के साथ अरबी वेबसाइट और ऐप के लिए UI/UX डिज़ाइन: यूज़र रिसर्च, वायरफ़्रेम, फ़िग्मा डिज़ाइन और प्रोग्रामिंग से पहले इंटरैक्टिव प्रोटोटाइप।",
      intro:
        "इंटरफ़ेस और अनुभव का डिज़ाइन तय करता है कि ग्राहक आपका प्रोडक्ट समझकर काम पूरा करेगा या चला जाएगा। अच्छा डिज़ाइन यूज़र और उसकी यात्रा समझने से शुरू होता है, फिर सरल वायरफ़्रेम, फिर दाएँ-से-बाएँ अरबी सपोर्ट वाला एकरूप अंतिम डिज़ाइन, और प्रोग्रामिंग से पहले टेस्ट होने वाला इंटरैक्टिव प्रोटोटाइप। तसामी इंटरफ़ेस डिज़ाइन कर प्रोग्रामिंग टीम के लिए तैयार फ़ाइलें देता है।",
      who: [
        "स्टार्टअप जो ऐप या प्लेटफ़ॉर्म बना रहे हैं और प्रोग्रामिंग से पहले डिज़ाइन चाहते हैं।",
        "मौजूदा वेबसाइट और ऐप जिनके यूज़र इस्तेमाल में मुश्किल महसूस करते हैं।",
        "प्रोग्रामिंग टीमें जिन्हें अरबी सपोर्ट वाला पेशेवर डिज़ाइन चाहिए।",
        "संस्थाएँ जो डिज़ाइन सिस्टम से अपने डिजिटल प्रोडक्ट एकरूप बनाना चाहती हैं।",
      ],
      steps: [
        "प्रोडक्ट के लक्ष्य और लक्षित यूज़र समझकर प्रतिस्पर्धियों की समीक्षा करते हैं।",
        "यूज़र यात्रा और मुख्य स्क्रीन के वायरफ़्रेम बनाते हैं।",
        "फ़िग्मा में विज़ुअल पहचान के साथ अंतिम इंटरफ़ेस डिज़ाइन करते हैं।",
        "प्रोग्रामिंग से पहले नेविगेशन टेस्ट के लिए इंटरैक्टिव प्रोटोटाइप बनाते हैं।",
        "फ़ाइलें और कंपोनेंट सिस्टम प्रोग्रामिंग टीम को देकर काम फ़ॉलो करते हैं।",
      ],
      tips: [
        "पहले मोबाइल के लिए डिज़ाइन करें, फिर बड़ी स्क्रीन के लिए।",
        "भले कम हों, असली यूज़र के साथ डिज़ाइन टेस्ट करें।",
        "अंग्रेज़ी डिज़ाइन को सिर्फ़ उल्टा न करें; अरबी को फ़ॉन्ट और स्पेसिंग में ध्यान चाहिए।",
        "बाद में तेज़ प्रोग्रामिंग के लिए एकरूप कंपोनेंट सिस्टम रखें।",
        "हर स्क्रीन का सबसे ज़रूरी काम साफ़ रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के ग्राहकों के लिए डिज़ाइन करते हैं और दूर से फ़ीडबैक लेते हैं।",
      faqs: [
        { q: "UI और UX में क्या फ़र्क़ है?", a: "UX यूज़र के अनुभव, यात्रा और आसानी की योजना है; UI इंटरफ़ेस का विज़ुअल रूप है। हम दोनों देते हैं।" },
        { q: "क्या आप फ़िग्मा फ़ाइलें देते हैं?", a: "हाँ, कंपोनेंट और प्रोटोटाइप के साथ व्यवस्थित फ़िग्मा फ़ाइलें।" },
        { q: "क्या प्रोग्रामिंग भी आपसे करानी होगी?", a: "नहीं, डिज़ाइन किसी दूसरी टीम को दे सकते हैं, या चाहें तो हम बना दें।" },
        { q: "क्या आप मौजूदा ऐप का रीडिज़ाइन करते हैं?", a: "हाँ, कमज़ोरियाँ देखकर मुख्य स्क्रीन दोबारा डिज़ाइन करते हैं।" },
      ],
    },
  },
};
