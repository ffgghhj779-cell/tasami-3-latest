import type { GuideDef } from "./service-guides";

/** Business setup, licensing and tax guides. Same rules as service-guides.ts: no fees or fixed durations. */
export const BUSINESS_GUIDES: Record<string, GuideDef> = {
  proServices: {
    ar: {
      primaryKeyword: "تعقيب معاملات حكومية",
      secondaryKeywords: ["معقب", "مكتب تعقيب", "خدمات PRO في السعودية", "معقب معاملات للشركات"],
      metaDescription:
        "مكتب تعقيب معاملات حكومية في السعودية: إقامات ونقل كفالة وسجل تجاري ورخص بلدية وزكاة وتأمينات. نتابعها عبر المنصات الرسمية ونحدّثك على واتساب. لسنا جهة حكومية.",
      intro:
        "تسامي مكتب تعقيب معاملات حكومية (خدمات PRO) يخدم الأفراد والمنشآت في كل مدن المملكة. نتولى عنك المعاملات في الجوازات ووزارة الموارد البشرية ووزارة التجارة والبلديات وزاتكا والتأمينات وناجز، عبر المنصات الرسمية مثل أبشر وقوى ومقيم وبلدي، ونرسل لك تحديثاً عند كل مرحلة على واتساب حتى تنتهي المعاملة.",
      who: [
        "المنشآت الصغيرة والمتوسطة التي لا يتوفر لديها موظف علاقات حكومية متفرغ.",
        "الشركات التي لديها عمالة وافدة وتحتاج متابعة دورية للإقامات ورخص العمل والتأشيرات.",
        "رواد الأعمال الذين يؤسسون نشاطاً جديداً ويريدون إنهاء السجل والرخص بسرعة وبدون أخطاء.",
        "الأفراد الذين لديهم معاملة محددة مثل خروج وعودة أو نقل كفالة أو توثيق وكالة.",
      ],
      steps: [
        "تختار الخدمة من القائمة أو تكتب لنا على واتساب بما تحتاجه بكلماتك.",
        "نحدد لك المستندات والبيانات المطلوبة لحالتك بالضبط، دون طلبات زائدة.",
        "نراجع الملف قبل التقديم لاكتشاف أي عائق مثل مخالفة أو بيانات ناقصة.",
        "ننفذ المعاملة عبر المنصة الرسمية بتفويض منك، وتسدد الرسوم الحكومية للجهة المختصة مباشرة.",
        "نرسل لك تحديثاً عند كل مرحلة ونسلمك ما يثبت الإنجاز، مع تذكيرك بالمواعيد القادمة.",
      ],
      tips: [
        "اجمع معاملات منشأتك المتكررة (إقامات، رخص عمل، تأمينات) في جدول مواعيد واحد حتى لا يفوتك موعد.",
        "لا تشارك كلمات مرور حساباتك إلا مع جهة موثوقة وعند الضرورة، واستخدم التفويض داخل المنصة متى أمكن.",
        "راجع المخالفات والالتزامات المعلقة قبل أي معاملة، فهي أكثر سبب لتعطّل الطلبات.",
        "احتفظ بنسخ رقمية محدثة من السجل والهويات وعقود الإيجار لتسريع أي طلب جديد.",
        "اسأل عن المسار الصحيح قبل التقديم؛ بعض المعاملات تتشابه أسماؤها ولها إجراءات مختلفة.",
      ],
      local:
        "مقرنا في حي النسيم بالعوالي في مكة المكرمة، ونخدم الرياض وجدة والدمام والمدينة المنورة والطائف وبقية مدن المملكة عن بُعد، لأن أغلب المعاملات تتم إلكترونياً عبر المنصات الرسمية.",
      faqs: [
        { q: "ما هو التعقيب أو خدمات PRO؟", a: "هو متابعة المعاملات الحكومية نيابةً عن الفرد أو المنشأة: تجهيز الطلب ومراجعة المستندات وتقديمه عبر المنصة الرسمية ومتابعته حتى الإنجاز." },
        { q: "هل تسامي جهة حكومية؟", a: "لا. تسامي مكتب خدمات خاص، ننجز المعاملات عبر المنصات الرسمية، وقرار قبول الطلب يعود للجهة الحكومية." },
        { q: "هل أحتاج لزيارة مكتبكم؟", a: "لا في أغلب الحالات. نستلم البيانات على واتساب أو نموذج الطلب، ونتابع إلكترونياً من أي مدينة." },
        { q: "كيف أعرف أسعار الخدمات؟", a: "لا نعرض أسعاراً ثابتة لأن كل حالة تختلف. أرسل لنا معاملتك على واتساب ونوضح لك التفاصيل قبل البدء." },
      ],
    },
    en: {
      primaryKeyword: "government services agent in Saudi Arabia",
      secondaryKeywords: ["PRO services Saudi Arabia", "muaqqib", "government relations services", "PRO services for companies"],
      metaDescription:
        "Government transaction (PRO) services in Saudi Arabia: iqama, sponsorship transfer, CR, municipal licenses, Zakat and GOSI, handled via official platforms with WhatsApp updates. Not a government entity.",
      intro:
        "Tasami is a government services (PRO) office serving individuals and companies in every Saudi city. We handle your transactions with Jawazat, the Ministry of Human Resources, the Ministry of Commerce, municipalities, ZATCA, GOSI and Najiz through official platforms such as Absher, Qiwa, Muqeem and Balady, and send you a WhatsApp update at every stage until the job is done.",
      who: [
        "Small and medium businesses without a dedicated government relations employee.",
        "Companies with expat workers that need regular follow-up on iqamas, work permits and visas.",
        "Entrepreneurs starting a new business who want the CR and licenses done quickly and correctly.",
        "Individuals with a specific transaction such as exit/re-entry, sponsorship transfer or a power of attorney.",
      ],
      steps: [
        "Pick the service from the list or describe what you need on WhatsApp in your own words.",
        "We tell you exactly which documents and details your case needs, nothing extra.",
        "We review the file before submission to catch blockers such as violations or missing data.",
        "We process the transaction on the official platform with your authorization; government fees are paid directly to the authority.",
        "We update you at every stage, send proof of completion and remind you of upcoming deadlines.",
      ],
      tips: [
        "Keep your recurring company transactions (iqamas, work permits, GOSI) in one deadline calendar.",
        "Only share account passwords with a trusted provider when necessary, and use in-platform delegation where possible.",
        "Check outstanding violations and obligations before any transaction; they are the most common cause of delays.",
        "Keep up-to-date digital copies of your CR, IDs and lease contracts to speed up new requests.",
        "Ask about the right procedure before applying; some transactions have similar names but different steps.",
      ],
      local:
        "Our office is in Al Naseem, Al Awali, Makkah, and we serve Riyadh, Jeddah, Dammam, Madinah, Taif and every other Saudi city remotely, since most transactions are completed online through official platforms.",
      faqs: [
        { q: "What are PRO services?", a: "Following up government transactions on behalf of an individual or company: preparing the request, reviewing documents, submitting it on the official platform and following it until completion." },
        { q: "Is Tasami a government entity?", a: "No. Tasami is a private services office. We complete transactions through official platforms, and approval rests with the government authority." },
        { q: "Do I need to visit your office?", a: "In most cases no. We receive your details on WhatsApp or the request form and follow up online from any city." },
        { q: "How do I find out the price?", a: "We do not publish fixed prices because every case differs. Send us your transaction on WhatsApp and we will explain the details before we start." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں سرکاری معاملات کی خدمات",
      secondaryKeywords: ["معقب", "PRO سروسز سعودی عرب", "سرکاری کام کروانے والا دفتر"],
      metaDescription:
        "سعودی عرب میں سرکاری معاملات (PRO) کی خدمات: اقامہ، کفالت کی منتقلی، کمرشل رجسٹریشن، بلدیہ لائسنس، زکوٰۃ اور GOSI، سرکاری پلیٹ فارمز کے ذریعے، واٹس ایپ پر اپڈیٹ کے ساتھ۔",
      intro:
        "تسامی سرکاری معاملات (PRO) کا دفتر ہے جو مملکت کے ہر شہر میں افراد اور کمپنیوں کی خدمت کرتا ہے۔ ہم جوازات، وزارتِ افرادی قوت، وزارتِ تجارت، بلدیات، زاتکا، GOSI اور ناجز سے متعلق آپ کے کام ابشر، قوی، مقیم اور بلدی جیسے سرکاری پلیٹ فارمز کے ذریعے کرتے ہیں اور کام مکمل ہونے تک ہر مرحلے پر واٹس ایپ پر اپڈیٹ دیتے ہیں۔",
      who: [
        "چھوٹے اور درمیانے کاروبار جن کے پاس سرکاری امور کا مستقل ملازم نہیں۔",
        "غیر ملکی کارکنوں والی کمپنیاں جنہیں اقامہ، ورک پرمٹ اور ویزوں کی باقاعدہ پیروی چاہیے۔",
        "نیا کاروبار شروع کرنے والے جو سجل اور لائسنس جلد اور درست بنوانا چاہتے ہیں۔",
        "وہ افراد جنہیں کوئی خاص کام ہو جیسے خروج و عودہ، کفالت کی منتقلی یا وکالت نامہ۔",
      ],
      steps: [
        "فہرست سے سروس منتخب کریں یا واٹس ایپ پر اپنے الفاظ میں ضرورت بتائیں۔",
        "ہم آپ کے معاملے کے لیے درکار دستاویزات اور معلومات واضح طور پر بتاتے ہیں، کوئی اضافی مطالبہ نہیں۔",
        "جمع کرانے سے پہلے فائل چیک کرتے ہیں تاکہ خلاف ورزی یا نامکمل معلومات جیسی رکاوٹ پکڑی جا سکے۔",
        "آپ کی اجازت سے سرکاری پلیٹ فارم پر کام کرتے ہیں؛ سرکاری فیس براہِ راست متعلقہ ادارے کو ادا ہوتی ہے۔",
        "ہر مرحلے پر اپڈیٹ دیتے ہیں، تکمیل کا ثبوت بھیجتے ہیں اور آئندہ تاریخیں یاد دلاتے ہیں۔",
      ],
      tips: [
        "کمپنی کے بار بار ہونے والے کام (اقامہ، ورک پرمٹ، GOSI) ایک ہی شیڈول میں رکھیں۔",
        "پاس ورڈ صرف قابلِ اعتماد ادارے کو اور ضرورت پر دیں، اور جہاں ممکن ہو پلیٹ فارم کے اندر تفویض استعمال کریں۔",
        "کسی بھی کام سے پہلے زیرِ التوا خلاف ورزیاں اور واجبات چیک کریں؛ یہی تاخیر کی سب سے عام وجہ ہیں۔",
        "سجل، شناختی دستاویزات اور کرایہ نامے کی تازہ ڈیجیٹل کاپیاں رکھیں۔",
        "درخواست سے پہلے درست طریقہ پوچھ لیں؛ کچھ کاموں کے نام ملتے جلتے ہیں مگر طریقہ مختلف ہے۔",
      ],
      local:
        "ہمارا دفتر حی النسیم، العوالی، مکہ مکرمہ میں ہے اور ہم ریاض، جدہ، دمام، مدینہ، طائف اور مملکت کے دیگر شہروں میں دور سے خدمت کرتے ہیں کیونکہ زیادہ تر کام آن لائن ہوتے ہیں۔",
      faqs: [
        { q: "PRO سروسز کیا ہیں؟", a: "فرد یا کمپنی کی جانب سے سرکاری کاموں کی پیروی: درخواست تیار کرنا، دستاویزات چیک کرنا، سرکاری پلیٹ فارم پر جمع کرانا اور مکمل ہونے تک فالو اپ۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں۔ تسامی نجی خدمات کا دفتر ہے؛ ہم سرکاری پلیٹ فارمز کے ذریعے کام کرتے ہیں اور منظوری متعلقہ ادارے کا اختیار ہے۔" },
        { q: "کیا دفتر آنا ضروری ہے؟", a: "زیادہ تر نہیں۔ ہم واٹس ایپ یا فارم پر معلومات لے کر کسی بھی شہر سے آن لائن کام کرتے ہیں۔" },
        { q: "قیمت کیسے معلوم ہوگی؟", a: "ہر معاملہ مختلف ہوتا ہے اس لیے مقررہ قیمتیں نہیں دکھاتے۔ واٹس ایپ پر اپنا کام بتائیں، شروع کرنے سے پہلے تفصیل بتا دیں گے۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में सरकारी काम की सेवाएँ",
      secondaryKeywords: ["मुअक़्क़िब", "PRO सर्विसेज़ सऊदी अरब", "सरकारी काम कराने वाला दफ़्तर"],
      metaDescription:
        "सऊदी अरब में सरकारी काम (PRO) की सेवाएँ: इक़ामा, स्पॉन्सरशिप ट्रांसफ़र, CR, बलदिया लाइसेंस, ज़कात और GOSI, आधिकारिक प्लेटफ़ॉर्म से, व्हाट्सऐप अपडेट के साथ।",
      intro:
        "तसामी सरकारी काम (PRO) का दफ़्तर है जो सऊदी अरब के हर शहर में व्यक्तियों और कंपनियों की सेवा करता है। हम जवाज़ात, मानव संसाधन मंत्रालय, वाणिज्य मंत्रालय, नगरपालिकाओं, ZATCA, GOSI और नाजिज़ से जुड़े आपके काम अबशर, क़िवा, मुक़ीम और बलदी जैसे आधिकारिक प्लेटफ़ॉर्म से करते हैं और काम पूरा होने तक हर चरण पर व्हाट्सऐप पर अपडेट देते हैं।",
      who: [
        "छोटे और मध्यम व्यवसाय जिनके पास सरकारी काम के लिए अलग कर्मचारी नहीं है।",
        "प्रवासी कर्मचारियों वाली कंपनियाँ जिन्हें इक़ामा, वर्क परमिट और वीज़ा का नियमित फ़ॉलो-अप चाहिए।",
        "नया व्यवसाय शुरू करने वाले जो CR और लाइसेंस जल्दी और सही बनवाना चाहते हैं।",
        "ऐसे व्यक्ति जिनका कोई ख़ास काम है जैसे एग्ज़िट/री-एंट्री, स्पॉन्सरशिप ट्रांसफ़र या पावर ऑफ़ अटॉर्नी।",
      ],
      steps: [
        "सूची से सेवा चुनें या व्हाट्सऐप पर अपने शब्दों में ज़रूरत बताएँ।",
        "हम आपके मामले के लिए ज़रूरी दस्तावेज़ और जानकारी साफ़ बताते हैं, कुछ अतिरिक्त नहीं।",
        "जमा करने से पहले फ़ाइल जाँचते हैं ताकि जुर्माना या अधूरी जानकारी जैसी रुकावट पकड़ी जा सके।",
        "आपकी अनुमति से आधिकारिक प्लेटफ़ॉर्म पर काम करते हैं; सरकारी फ़ीस सीधे संबंधित विभाग को दी जाती है।",
        "हर चरण पर अपडेट देते हैं, काम पूरा होने का प्रमाण भेजते हैं और आने वाली तारीख़ें याद दिलाते हैं।",
      ],
      tips: [
        "कंपनी के बार-बार होने वाले काम (इक़ामा, वर्क परमिट, GOSI) एक ही कैलेंडर में रखें।",
        "पासवर्ड केवल भरोसेमंद सेवा को और ज़रूरत पर दें, और जहाँ हो सके प्लेटफ़ॉर्म के अंदर डेलिगेशन इस्तेमाल करें।",
        "किसी भी काम से पहले बकाया जुर्माने और देनदारियाँ जाँचें; देरी का सबसे आम कारण यही है।",
        "CR, पहचान पत्र और किरायानामे की ताज़ा डिजिटल कॉपियाँ रखें।",
        "आवेदन से पहले सही प्रक्रिया पूछ लें; कुछ कामों के नाम मिलते-जुलते हैं पर प्रक्रिया अलग है।",
      ],
      local:
        "हमारा दफ़्तर अल नसीम, अल अवाली, मक्का में है और हम रियाद, जेद्दा, दम्माम, मदीना, ताइफ़ और बाक़ी शहरों में दूर से सेवा देते हैं, क्योंकि ज़्यादातर काम ऑनलाइन होते हैं।",
      faqs: [
        { q: "PRO सेवाएँ क्या हैं?", a: "व्यक्ति या कंपनी की ओर से सरकारी कामों का फ़ॉलो-अप: आवेदन तैयार करना, दस्तावेज़ जाँचना, आधिकारिक प्लेटफ़ॉर्म पर जमा करना और पूरा होने तक फ़ॉलो करना।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं। तसामी एक निजी सेवा दफ़्तर है; हम आधिकारिक प्लेटफ़ॉर्म से काम करते हैं और मंज़ूरी संबंधित विभाग के अधिकार में है।" },
        { q: "क्या दफ़्तर आना ज़रूरी है?", a: "ज़्यादातर नहीं। हम व्हाट्सऐप या फ़ॉर्म से जानकारी लेकर किसी भी शहर से ऑनलाइन काम करते हैं।" },
        { q: "क़ीमत कैसे पता चलेगी?", a: "हर मामला अलग होता है इसलिए तय क़ीमतें नहीं दिखाते। व्हाट्सऐप पर अपना काम बताएँ, शुरू करने से पहले विवरण बता देंगे।" },
      ],
    },
  },

  companySetup: {
    ar: {
      primaryKeyword: "تأسيس شركة في السعودية",
      secondaryKeywords: ["تأسيس شركة ذات مسؤولية محدودة", "فتح شركة", "عقد تأسيس شركة", "المركز السعودي للأعمال"],
      metaDescription:
        "تأسيس شركة في السعودية عبر تسامي: نجهّز عقد التأسيس ونتابع الطلب في منصة المركز السعودي للأعمال حتى إصدار السجل، ثم التسجيلات الأساسية للمنشأة.",
      intro:
        "تأسيس الشركة ذات المسؤولية المحدودة يتم إلكترونياً عبر منصة المركز السعودي للأعمال: حجز الاسم التجاري، وإعداد عقد التأسيس وتحديد الشركاء ورأس المال والأنشطة، ثم إصدار السجل التجاري. تسامي ترتب معك هذه الخطوات بالتسلسل الصحيح، ثم تكمل التسجيلات التي تحتاجها المنشأة لتبدأ العمل فعلياً.",
      who: [
        "رواد الأعمال الذين يريدون تأسيس شركة جديدة بشريك واحد أو أكثر.",
        "أصحاب المؤسسات الفردية الذين يريدون التحول إلى شركة.",
        "الشركاء الذين يحتاجون صياغة واضحة لعقد التأسيس وتوزيع الحصص.",
        "من يريد إنهاء التأسيس والتسجيلات الحكومية دفعة واحدة مع جهة واحدة.",
      ],
      steps: [
        "نتعرف على نشاطك وعدد الشركاء والمدينة لاختيار الشكل النظامي المناسب.",
        "نقترح أسماء تجارية ونتحقق من توفرها ثم نحجز الاسم المعتمد.",
        "نعد بيانات عقد التأسيس (الشركاء، الحصص، رأس المال، الإدارة، الأنشطة) ونراجعها معك.",
        "نقدم الطلب عبر منصة المركز السعودي للأعمال ونتابع موافقات الشركاء حتى إصدار السجل.",
        "نكمل التسجيلات الأساسية بعد السجل حسب حاجتك، مثل التأمينات وقوى وزاتكا والعنوان الوطني.",
      ],
      tips: [
        "اختر الأنشطة بدقة من البداية؛ الرخص اللاحقة مثل البلدية تعتمد على نشاط السجل.",
        "اتفق مع شركائك مسبقاً على الحصص والإدارة وصلاحيات التوقيع قبل صياغة العقد.",
        "تأكد أن كل شريك لديه حساب نفاذ مفعّل، لأن الموافقات تتم إلكترونياً.",
        "جهّز عنواناً وطنياً للمنشأة، فهو مطلوب في عدد من الخدمات بعد التأسيس.",
        "إذا كان بين الشركاء مستثمر أجنبي فالمسار يختلف ويحتاج ترخيص استثمار أولاً.",
      ],
      local:
        "نؤسس الشركات لعملائنا في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة إلكترونياً عبر منصة المركز السعودي للأعمال، دون حاجة لزيارة أي جهة في أغلب الحالات.",
      faqs: [
        { q: "ما الفرق بين المؤسسة الفردية والشركة؟", a: "المؤسسة ترتبط بشخص مالكها مباشرة، أما الشركة ذات المسؤولية المحدودة فلها شخصية مستقلة ومسؤولية الشركاء فيها محدودة بحصصهم. نوضح لك الأنسب لنشاطك." },
        { q: "هل يمكن تأسيس شركة بشريك واحد؟", a: "نعم، نظام الشركات يسمح بتأسيس شركة ذات مسؤولية محدودة بشخص واحد. نراجع حالتك ونرتب الطلب وفقها." },
        { q: "ماذا بعد إصدار السجل التجاري؟", a: "عادةً تحتاج تسجيل المنشأة في التأمينات وقوى وزاتكا، ورخصة بلدية إن كان لديك موقع. نتابع معك هذه الخطوات." },
        { q: "هل تساعدون المستثمر الأجنبي؟", a: "مسار المستثمر الأجنبي يبدأ بترخيص من وزارة الاستثمار. تواصل معنا ونوضح لك المتطلبات حسب حالتك." },
      ],
    },
    en: {
      primaryKeyword: "company formation in Saudi Arabia",
      secondaryKeywords: ["LLC formation Saudi Arabia", "open a company in KSA", "articles of association Saudi", "Saudi Business Center"],
      metaDescription:
        "Company formation in Saudi Arabia with Tasami: we prepare the articles of association and follow your application on the Saudi Business Center platform until the CR is issued, then the core registrations.",
      intro:
        "An LLC is formed online through the Saudi Business Center platform: reserving the trade name, preparing the articles of association with partners, capital and activities, then issuing the commercial registration. Tasami arranges these steps in the right order with you, then completes the registrations your business needs to actually start operating.",
      who: [
        "Entrepreneurs forming a new company with one or more partners.",
        "Sole establishment owners who want to convert to a company.",
        "Partners who need clear articles of association and share allocation.",
        "Anyone who wants formation and government registrations done in one go with one provider.",
      ],
      steps: [
        "We learn about your activity, partners and city to choose the right legal form.",
        "We suggest trade names, check availability and reserve the approved one.",
        "We prepare the articles of association data (partners, shares, capital, management, activities) and review it with you.",
        "We submit on the Saudi Business Center platform and follow partner approvals until the CR is issued.",
        "We complete the core post-CR registrations you need, such as GOSI, Qiwa, ZATCA and the national address.",
      ],
      tips: [
        "Choose activities carefully from the start; later licenses such as the municipal license depend on them.",
        "Agree with partners on shares, management and signing authority before drafting the articles.",
        "Make sure every partner has an active Nafath account, since approvals are electronic.",
        "Prepare a national address for the business; several post-formation services require it.",
        "If a foreign investor is among the partners, the path differs and starts with an investment license.",
      ],
      local:
        "We form companies for clients in Makkah, Jeddah, Riyadh, Dammam and every Saudi city online through the Saudi Business Center platform, usually without visiting any office.",
      faqs: [
        { q: "What is the difference between an establishment and a company?", a: "An establishment is tied directly to its owner, while an LLC has its own legal personality and the partners' liability is limited to their shares. We advise what suits your activity." },
        { q: "Can I form a company with a single partner?", a: "Yes, the Companies Law allows a single-person LLC. We review your case and prepare the application accordingly." },
        { q: "What comes after the CR is issued?", a: "Usually registering with GOSI, Qiwa and ZATCA, plus a municipal license if you have premises. We follow these steps with you." },
        { q: "Do you help foreign investors?", a: "The foreign investor path starts with a license from the Ministry of Investment. Contact us and we will explain the requirements for your case." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں کمپنی کا قیام",
      secondaryKeywords: ["ایل ایل سی کمپنی سعودی عرب", "سعودی عرب میں کمپنی کھولنا", "عقدِ تاسیس"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں کمپنی کا قیام: عقدِ تاسیس کی تیاری، سعودی بزنس سینٹر پلیٹ فارم پر سجل جاری ہونے تک پیروی، اور بعد کی بنیادی رجسٹریشنز۔",
      intro:
        "ایل ایل سی کمپنی سعودی بزنس سینٹر کے پلیٹ فارم پر آن لائن قائم ہوتی ہے: تجارتی نام کی ریزرویشن، شراکت داروں، سرمائے اور سرگرمیوں کے ساتھ عقدِ تاسیس کی تیاری، پھر کمرشل رجسٹریشن کا اجرا۔ تسامی یہ مراحل درست ترتیب سے کرواتا ہے اور پھر وہ رجسٹریشنز مکمل کرتا ہے جن سے آپ کا کاروبار عملی طور پر شروع ہو سکے۔",
      who: [
        "ایک یا زیادہ شراکت داروں کے ساتھ نئی کمپنی بنانے والے۔",
        "انفرادی ادارے کے مالکان جو کمپنی میں تبدیل ہونا چاہتے ہیں۔",
        "شراکت دار جنہیں واضح عقدِ تاسیس اور حصص کی تقسیم چاہیے۔",
        "جو قیام اور سرکاری رجسٹریشنز ایک ہی جگہ سے مکمل کروانا چاہتے ہیں۔",
      ],
      steps: [
        "ہم آپ کی سرگرمی، شراکت دار اور شہر جان کر مناسب قانونی شکل منتخب کرتے ہیں۔",
        "تجارتی نام تجویز کرتے ہیں، دستیابی چیک کر کے منظور شدہ نام ریزرو کرتے ہیں۔",
        "عقدِ تاسیس کی معلومات (شراکت دار، حصص، سرمایہ، انتظامیہ، سرگرمیاں) تیار کر کے آپ کے ساتھ دیکھتے ہیں۔",
        "سعودی بزنس سینٹر پلیٹ فارم پر درخواست دیتے ہیں اور سجل جاری ہونے تک شراکت داروں کی منظوری فالو کرتے ہیں۔",
        "سجل کے بعد ضرورت کے مطابق GOSI، قوی، زاتکا اور قومی پتے کی رجسٹریشن مکمل کرتے ہیں۔",
      ],
      tips: [
        "شروع سے سرگرمیاں درست منتخب کریں؛ بعد کے لائسنس جیسے بلدیہ انہی پر منحصر ہیں۔",
        "عقد لکھنے سے پہلے شراکت داروں سے حصص، انتظام اور دستخط کے اختیارات طے کر لیں۔",
        "ہر شراکت دار کا نفاذ اکاؤنٹ فعال ہونا چاہیے کیونکہ منظوری الیکٹرانک ہوتی ہے۔",
        "کاروبار کا قومی پتہ تیار رکھیں؛ کئی خدمات میں درکار ہوتا ہے۔",
        "اگر شراکت داروں میں غیر ملکی سرمایہ کار ہو تو راستہ مختلف ہے اور پہلے سرمایہ کاری لائسنس چاہیے۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر میں سعودی بزنس سینٹر پلیٹ فارم کے ذریعے آن لائن کمپنیاں قائم کرتے ہیں، عموماً کسی دفتر جانے کی ضرورت نہیں۔",
      faqs: [
        { q: "ادارے اور کمپنی میں کیا فرق ہے؟", a: "ادارہ براہِ راست مالک سے جڑا ہوتا ہے جبکہ ایل ایل سی کی الگ قانونی حیثیت ہوتی ہے اور شراکت داروں کی ذمہ داری ان کے حصص تک محدود ہوتی ہے۔" },
        { q: "کیا ایک شخص کمپنی بنا سکتا ہے؟", a: "جی ہاں، کمپنیز قانون ایک شخص کی ایل ایل سی کی اجازت دیتا ہے۔ ہم آپ کا معاملہ دیکھ کر درخواست تیار کرتے ہیں۔" },
        { q: "سجل کے بعد کیا کرنا ہوتا ہے؟", a: "عموماً GOSI، قوی اور زاتکا میں رجسٹریشن اور جگہ ہو تو بلدیہ لائسنس۔ ہم یہ مراحل آپ کے ساتھ مکمل کرتے ہیں۔" },
        { q: "کیا آپ غیر ملکی سرمایہ کار کی مدد کرتے ہیں؟", a: "غیر ملکی سرمایہ کار کا راستہ وزارتِ سرمایہ کاری کے لائسنس سے شروع ہوتا ہے۔ رابطہ کریں، ہم شرائط بتا دیں گے۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में कंपनी स्थापना",
      secondaryKeywords: ["सऊदी में LLC कंपनी", "सऊदी अरब में कंपनी खोलना", "आर्टिकल्स ऑफ़ एसोसिएशन"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में कंपनी स्थापना: आर्टिकल्स ऑफ़ एसोसिएशन की तैयारी, सऊदी बिज़नेस सेंटर प्लेटफ़ॉर्म पर CR जारी होने तक फ़ॉलो-अप और बाद के ज़रूरी रजिस्ट्रेशन।",
      intro:
        "LLC कंपनी सऊदी बिज़नेस सेंटर प्लेटफ़ॉर्म पर ऑनलाइन बनती है: ट्रेड नेम रिज़र्व करना, साझेदारों, पूँजी और गतिविधियों के साथ आर्टिकल्स ऑफ़ एसोसिएशन तैयार करना, फिर कमर्शियल रजिस्ट्रेशन जारी होना। तसामी ये चरण सही क्रम में कराता है और फिर वे रजिस्ट्रेशन पूरे करता है जिनसे आपका व्यवसाय असल में काम शुरू कर सके।",
      who: [
        "एक या ज़्यादा साझेदारों के साथ नई कंपनी बनाने वाले।",
        "एकल प्रतिष्ठान के मालिक जो कंपनी में बदलना चाहते हैं।",
        "साझेदार जिन्हें साफ़ आर्टिकल्स और हिस्सेदारी का बँटवारा चाहिए।",
        "जो स्थापना और सरकारी रजिस्ट्रेशन एक ही जगह से पूरे कराना चाहते हैं।",
      ],
      steps: [
        "हम आपकी गतिविधि, साझेदार और शहर समझकर सही क़ानूनी ढाँचा चुनते हैं।",
        "ट्रेड नेम सुझाते हैं, उपलब्धता जाँचकर मंज़ूर नाम रिज़र्व करते हैं।",
        "आर्टिकल्स की जानकारी (साझेदार, हिस्से, पूँजी, प्रबंधन, गतिविधियाँ) तैयार कर आपके साथ जाँचते हैं।",
        "सऊदी बिज़नेस सेंटर प्लेटफ़ॉर्म पर आवेदन करते हैं और CR जारी होने तक साझेदारों की मंज़ूरी फ़ॉलो करते हैं।",
        "CR के बाद ज़रूरत के अनुसार GOSI, क़िवा, ZATCA और नेशनल एड्रेस रजिस्ट्रेशन पूरे करते हैं।",
      ],
      tips: [
        "शुरू से गतिविधियाँ ध्यान से चुनें; बलदिया जैसे बाद के लाइसेंस इन्हीं पर निर्भर हैं।",
        "आर्टिकल्स लिखने से पहले साझेदारों से हिस्से, प्रबंधन और हस्ताक्षर अधिकार तय कर लें।",
        "हर साझेदार का नफ़ाज़ अकाउंट सक्रिय होना चाहिए क्योंकि मंज़ूरी इलेक्ट्रॉनिक होती है।",
        "व्यवसाय का नेशनल एड्रेस तैयार रखें; कई सेवाओं में ज़रूरी होता है।",
        "अगर साझेदारों में विदेशी निवेशक है तो रास्ता अलग है और पहले निवेश लाइसेंस चाहिए।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर में सऊदी बिज़नेस सेंटर प्लेटफ़ॉर्म से ऑनलाइन कंपनियाँ बनाते हैं, आमतौर पर किसी दफ़्तर जाने की ज़रूरत नहीं होती।",
      faqs: [
        { q: "प्रतिष्ठान और कंपनी में क्या फ़र्क़ है?", a: "प्रतिष्ठान सीधे मालिक से जुड़ा होता है, जबकि LLC की अलग क़ानूनी पहचान होती है और साझेदारों की ज़िम्मेदारी उनके हिस्से तक सीमित रहती है।" },
        { q: "क्या एक व्यक्ति कंपनी बना सकता है?", a: "हाँ, कंपनी क़ानून एक व्यक्ति की LLC की अनुमति देता है। हम आपका मामला देखकर आवेदन तैयार करते हैं।" },
        { q: "CR के बाद क्या करना होता है?", a: "आमतौर पर GOSI, क़िवा और ZATCA में रजिस्ट्रेशन और जगह हो तो बलदिया लाइसेंस। हम ये चरण आपके साथ पूरे करते हैं।" },
        { q: "क्या आप विदेशी निवेशक की मदद करते हैं?", a: "विदेशी निवेशक का रास्ता निवेश मंत्रालय के लाइसेंस से शुरू होता है। संपर्क करें, हम शर्तें बता देंगे।" },
      ],
    },
  },

  openRestaurant: {
    ar: {
      primaryKeyword: "فتح مطعم في السعودية",
      secondaryKeywords: ["ترخيص مطعم", "رخصة بلدية مطعم", "فتح كافيه", "متطلبات فتح مطعم"],
      metaDescription:
        "فتح مطعم أو كافيه في السعودية مع تسامي: نرتب السجل والنشاط وعقد الإيجار ورخصة البلدية وشهادة السلامة والشهادات الصحية للعاملين بالتسلسل الصحيح.",
      intro:
        "فتح مطعم أو كافيه يحتاج سلسلة متطلبات مترابطة: سجل تجاري بنشاط الأغذية المناسب، وموقع يسمح بالنشاط بعقد إيجار موثق، ورخصة بلدية عبر منصة بلدي وفق اشتراطات المطاعم، وشهادة سلامة من الدفاع المدني، وشهادات صحية للعاملين. تسامي ترتب هذه الخطوات بالتسلسل الصحيح حتى لا يتأخر الافتتاح بسبب ورقة ناقصة.",
      who: [
        "من يفتح مطعماً أو كافيه أو محل وجبات سريعة لأول مرة.",
        "أصحاب المطاعم الذين يفتحون فرعاً جديداً في مدينة أخرى.",
        "من استأجر موقعاً ويريد التأكد من صلاحيته للنشاط قبل التجهيز.",
        "مطاعم قائمة تحتاج تجديد الرخص أو تصحيح ملاحظات البلدية.",
      ],
      steps: [
        "نراجع نوع المطعم والموقع المقترح ونشاط السجل الحالي أو المطلوب.",
        "نتحقق أن الموقع يسمح بالنشاط وأن عقد الإيجار موثق إلكترونياً.",
        "نجهز طلب رخصة البلدية عبر منصة بلدي ونوضح لك اشتراطات التجهيز المطلوبة قبل المعاينة.",
        "نتابع شهادة السلامة من الدفاع المدني والشهادات الصحية للعاملين.",
        "نتابع ملاحظات البلدية حتى صدور الرخصة، ونذكّرك بمواعيد التجديد لاحقاً.",
      ],
      tips: [
        "لا توقّع عقد الإيجار قبل التأكد أن الموقع يسمح بنشاط المطعم.",
        "اطّلع على اشتراطات المطاعم قبل التجهيز الداخلي حتى لا تعيد العمل بعد المعاينة.",
        "جهّز الشهادات الصحية للعاملين مبكراً، فهي مطلوبة قبل التشغيل.",
        "طابق اسم اللوحة الخارجية مع الاسم التجاري في السجل.",
        "إذا كنت ستعتمد على التوصيل فقط فاسأل عن المسار المناسب، فقد تختلف المتطلبات.",
      ],
      local:
        "نتابع تراخيص المطاعم والكافيهات في مكة المكرمة وجدة والرياض والدمام والطائف وباقي المدن عبر منصة بلدي والمنصات الرسمية المرتبطة.",
      faqs: [
        { q: "ما أهم متطلبات فتح مطعم؟", a: "عادةً سجل تجاري بنشاط مناسب، وموقع يسمح بالنشاط بعقد إيجار موثق، ورخصة بلدية، وشهادة سلامة، وشهادات صحية للعاملين." },
        { q: "هل تساعدون في فتح كافيه أيضاً؟", a: "نعم، الإجراءات متقاربة. نراجع نوع النشاط والموقع ونرتب المتطلبات بالتسلسل الصحيح." },
        { q: "هل يجب تجهيز المطعم قبل طلب الرخصة؟", a: "غالباً تحتاج المعاينة موقعاً مجهزاً وفق الاشتراطات، لذلك نوضح لك المتطلبات قبل أن تبدأ التجهيز." },
        { q: "هل تتابعون تجديد رخص المطعم؟", a: "نعم، نتابع تجديد رخصة البلدية وشهادة السلامة ونذكّرك قبل انتهائها." },
      ],
    },
    en: {
      primaryKeyword: "open a restaurant in Saudi Arabia",
      secondaryKeywords: ["restaurant license Saudi Arabia", "open a café in KSA", "restaurant municipal license", "Balady restaurant requirements"],
      metaDescription:
        "Open a restaurant or café in Saudi Arabia with Tasami: we arrange the CR activity, lease, Balady municipal license, civil defense certificate and staff health certificates in the right order.",
      intro:
        "Opening a restaurant or café involves a chain of linked requirements: a CR with the right food activity, premises zoned for the activity with a registered lease, a municipal license through Balady under restaurant requirements, a civil defense safety certificate and health certificates for staff. Tasami arranges these steps in the right order so a missing paper does not delay your opening.",
      who: [
        "First-time owners opening a restaurant, café or fast-food outlet.",
        "Restaurant owners opening a new branch in another city.",
        "Anyone who has rented premises and wants to confirm they suit the activity before fit-out.",
        "Existing restaurants that need license renewals or to resolve municipal notes.",
      ],
      steps: [
        "We review the restaurant type, proposed location and current or required CR activity.",
        "We confirm the location allows the activity and the lease is registered electronically.",
        "We prepare the Balady municipal license application and explain the fit-out requirements before inspection.",
        "We follow the civil defense safety certificate and staff health certificates.",
        "We follow municipal notes until the license is issued and remind you of renewal dates later.",
      ],
      tips: [
        "Do not sign the lease before confirming the premises allow a restaurant.",
        "Review restaurant requirements before interior fit-out so you do not redo work after inspection.",
        "Prepare staff health certificates early; they are needed before operating.",
        "Match your signboard name with the trade name on the CR.",
        "If you will operate delivery-only, ask about the right path, as requirements may differ.",
      ],
      local:
        "We handle restaurant and café licensing in Makkah, Jeddah, Riyadh, Dammam, Taif and other cities through Balady and the related official platforms.",
      faqs: [
        { q: "What are the main requirements to open a restaurant?", a: "Usually a CR with a suitable activity, premises zoned for it with a registered lease, a municipal license, a safety certificate and staff health certificates." },
        { q: "Do you also help open cafés?", a: "Yes, the procedures are similar. We review the activity and location and arrange the requirements in the right order." },
        { q: "Must the restaurant be fitted out before applying?", a: "Inspection usually requires premises fitted to the requirements, so we explain them before you start fit-out." },
        { q: "Do you handle restaurant license renewals?", a: "Yes, we follow municipal license and safety certificate renewals and remind you before expiry." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں ریسٹورنٹ کھولنا",
      secondaryKeywords: ["ریسٹورنٹ لائسنس سعودی عرب", "کیفے کھولنا", "ریسٹورنٹ بلدیہ لائسنس"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں ریسٹورنٹ یا کیفے کھولیں: سجل کی سرگرمی، کرایہ نامہ، بلدی لائسنس، سول ڈیفنس سرٹیفکیٹ اور عملے کے ہیلتھ سرٹیفکیٹ درست ترتیب سے۔",
      intro:
        "ریسٹورنٹ یا کیفے کھولنے کے لیے کئی جڑی ہوئی شرائط ہوتی ہیں: مناسب فوڈ سرگرمی والا سجل، سرگرمی کی اجازت والی جگہ اور رجسٹرڈ کرایہ نامہ، ریسٹورنٹ کی شرائط کے مطابق بلدی سے بلدیہ لائسنس، سول ڈیفنس سیفٹی سرٹیفکیٹ اور عملے کے ہیلتھ سرٹیفکیٹ۔ تسامی یہ مراحل درست ترتیب سے کرواتا ہے تاکہ کسی کاغذ کی کمی سے افتتاح میں تاخیر نہ ہو۔",
      who: [
        "پہلی بار ریسٹورنٹ، کیفے یا فاسٹ فوڈ کھولنے والے۔",
        "ریسٹورنٹ مالکان جو دوسرے شہر میں نئی برانچ کھول رہے ہیں۔",
        "جنہوں نے جگہ کرائے پر لی ہے اور تیاری سے پہلے اس کی موزونیت جاننا چاہتے ہیں۔",
        "موجودہ ریسٹورنٹ جنہیں لائسنس کی تجدید یا بلدیہ کے نوٹس درست کرنے ہوں۔",
      ],
      steps: [
        "ریسٹورنٹ کی قسم، مجوزہ جگہ اور سجل کی سرگرمی کا جائزہ لیتے ہیں۔",
        "تصدیق کرتے ہیں کہ جگہ پر سرگرمی کی اجازت ہے اور کرایہ نامہ الیکٹرانک طور پر رجسٹرڈ ہے۔",
        "بلدی پر لائسنس کی درخواست تیار کرتے ہیں اور معائنے سے پہلے تیاری کی شرائط بتاتے ہیں۔",
        "سول ڈیفنس سیفٹی سرٹیفکیٹ اور عملے کے ہیلتھ سرٹیفکیٹ فالو کرتے ہیں۔",
        "لائسنس جاری ہونے تک بلدیہ کے نوٹس فالو کرتے ہیں اور بعد میں تجدید یاد دلاتے ہیں۔",
      ],
      tips: [
        "جگہ پر ریسٹورنٹ کی اجازت کی تصدیق سے پہلے کرایہ نامہ نہ کریں۔",
        "اندرونی تیاری سے پہلے ریسٹورنٹ کی شرائط دیکھ لیں تاکہ معائنے کے بعد دوبارہ کام نہ کرنا پڑے۔",
        "عملے کے ہیلتھ سرٹیفکیٹ جلد تیار کریں؛ کام شروع کرنے سے پہلے لازمی ہیں۔",
        "سائن بورڈ کا نام سجل کے تجارتی نام کے مطابق رکھیں۔",
        "اگر صرف ڈیلیوری کا کام ہے تو مناسب طریقہ پوچھیں، شرائط مختلف ہو سکتی ہیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام، طائف اور دیگر شہروں میں بلدی اور متعلقہ سرکاری پلیٹ فارمز کے ذریعے ریسٹورنٹ اور کیفے کے لائسنس کا کام کرتے ہیں۔",
      faqs: [
        { q: "ریسٹورنٹ کھولنے کی اہم شرائط کیا ہیں؟", a: "عموماً مناسب سرگرمی والا سجل، اجازت والی جگہ اور رجسٹرڈ کرایہ نامہ، بلدیہ لائسنس، سیفٹی سرٹیفکیٹ اور عملے کے ہیلتھ سرٹیفکیٹ۔" },
        { q: "کیا آپ کیفے کھولنے میں بھی مدد کرتے ہیں؟", a: "جی ہاں، طریقہ کار ملتا جلتا ہے۔ ہم سرگرمی اور جگہ دیکھ کر شرائط ترتیب سے مکمل کرواتے ہیں۔" },
        { q: "کیا لائسنس سے پہلے ریسٹورنٹ تیار ہونا چاہیے؟", a: "معائنے کے لیے عموماً شرائط کے مطابق تیار جگہ چاہیے، اس لیے ہم تیاری سے پہلے شرائط بتا دیتے ہیں۔" },
        { q: "کیا آپ تجدید بھی کرتے ہیں؟", a: "جی ہاں، بلدیہ لائسنس اور سیفٹی سرٹیفکیٹ کی تجدید فالو کرتے ہیں اور پہلے سے یاد دلاتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में रेस्टोरेंट खोलना",
      secondaryKeywords: ["सऊदी रेस्टोरेंट लाइसेंस", "कैफ़े खोलना", "रेस्टोरेंट बलदिया लाइसेंस"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में रेस्टोरेंट या कैफ़े खोलें: CR गतिविधि, किरायानामा, बलदी लाइसेंस, सिविल डिफ़ेंस सर्टिफ़िकेट और स्टाफ़ हेल्थ सर्टिफ़िकेट सही क्रम में।",
      intro:
        "रेस्टोरेंट या कैफ़े खोलने में कई जुड़ी हुई शर्तें होती हैं: सही फ़ूड गतिविधि वाला CR, गतिविधि की अनुमति वाली जगह और पंजीकृत किरायानामा, रेस्टोरेंट शर्तों के अनुसार बलदी से बलदिया लाइसेंस, सिविल डिफ़ेंस सेफ़्टी सर्टिफ़िकेट और स्टाफ़ के हेल्थ सर्टिफ़िकेट। तसामी ये चरण सही क्रम में कराता है ताकि किसी काग़ज़ की कमी से उद्घाटन में देरी न हो।",
      who: [
        "पहली बार रेस्टोरेंट, कैफ़े या फ़ास्ट-फ़ूड खोलने वाले।",
        "रेस्टोरेंट मालिक जो दूसरे शहर में नई शाखा खोल रहे हैं।",
        "जिन्होंने जगह किराए पर ली है और तैयारी से पहले उसकी उपयुक्तता जानना चाहते हैं।",
        "मौजूदा रेस्टोरेंट जिन्हें लाइसेंस नवीनीकरण या बलदिया नोटिस सुधारने हैं।",
      ],
      steps: [
        "रेस्टोरेंट का प्रकार, प्रस्तावित जगह और CR गतिविधि की समीक्षा करते हैं।",
        "पुष्टि करते हैं कि जगह पर गतिविधि की अनुमति है और किरायानामा इलेक्ट्रॉनिक रूप से पंजीकृत है।",
        "बलदी पर लाइसेंस आवेदन तैयार करते हैं और निरीक्षण से पहले तैयारी की शर्तें बताते हैं।",
        "सिविल डिफ़ेंस सेफ़्टी सर्टिफ़िकेट और स्टाफ़ हेल्थ सर्टिफ़िकेट फ़ॉलो करते हैं।",
        "लाइसेंस जारी होने तक बलदिया नोटिस फ़ॉलो करते हैं और बाद में नवीनीकरण याद दिलाते हैं।",
      ],
      tips: [
        "जगह पर रेस्टोरेंट की अनुमति पक्की होने से पहले किरायानामा न करें।",
        "अंदरूनी तैयारी से पहले रेस्टोरेंट शर्तें देख लें ताकि निरीक्षण के बाद दोबारा काम न करना पड़े।",
        "स्टाफ़ हेल्थ सर्टिफ़िकेट जल्दी तैयार करें; काम शुरू करने से पहले ज़रूरी हैं।",
        "साइनबोर्ड का नाम CR के ट्रेड नेम से मिलाएँ।",
        "अगर सिर्फ़ डिलीवरी का काम है तो सही तरीक़ा पूछें, शर्तें अलग हो सकती हैं।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, ताइफ़ और दूसरे शहरों में बलदी और संबंधित आधिकारिक प्लेटफ़ॉर्म से रेस्टोरेंट और कैफ़े लाइसेंस का काम करते हैं।",
      faqs: [
        { q: "रेस्टोरेंट खोलने की मुख्य शर्तें क्या हैं?", a: "आमतौर पर सही गतिविधि वाला CR, अनुमति वाली जगह और पंजीकृत किरायानामा, बलदिया लाइसेंस, सेफ़्टी सर्टिफ़िकेट और स्टाफ़ हेल्थ सर्टिफ़िकेट।" },
        { q: "क्या आप कैफ़े खोलने में भी मदद करते हैं?", a: "हाँ, प्रक्रिया मिलती-जुलती है। हम गतिविधि और जगह देखकर शर्तें सही क्रम में पूरी कराते हैं।" },
        { q: "क्या लाइसेंस से पहले रेस्टोरेंट तैयार होना चाहिए?", a: "निरीक्षण के लिए आमतौर पर शर्तों के अनुसार तैयार जगह चाहिए, इसलिए हम तैयारी से पहले शर्तें बता देते हैं।" },
        { q: "क्या आप नवीनीकरण भी करते हैं?", a: "हाँ, बलदिया लाइसेंस और सेफ़्टी सर्टिफ़िकेट का नवीनीकरण फ़ॉलो करते हैं और पहले से याद दिलाते हैं।" },
      ],
    },
  },

  openShop: {
    ar: {
      primaryKeyword: "فتح محل تجاري في السعودية",
      secondaryKeywords: ["رخصة محل", "متطلبات فتح محل", "ترخيص محل تجاري", "رخصة لوحة محل"],
      metaDescription:
        "فتح محل تجاري في السعودية مع تسامي: نرتب السجل والنشاط وعقد الإيجار الموثق ورخصة البلدية واللوحة وشهادة السلامة حتى يبدأ محلك العمل نظامياً.",
      intro:
        "فتح محل تجاري يبدأ بسجل تجاري يتضمن النشاط الذي ستمارسه، ثم موقع مناسب بعقد إيجار موثق، ثم رخصة بلدية عبر منصة بلدي تشمل اللوحة التجارية، وقد يحتاج المحل شهادة سلامة من الدفاع المدني حسب النشاط والمساحة. تسامي تراجع جاهزيتك لكل خطوة وتتابع الطلبات حتى يفتح محلك نظامياً.",
      who: [
        "من يفتح محلاً تجارياً لأول مرة، مثل محل ملابس أو جوالات أو بقالة.",
        "أصحاب المحلات الذين ينتقلون لموقع جديد.",
        "من يضيف فرعاً جديداً لنشاطه القائم.",
        "المحلات القائمة التي تحتاج تجديد الرخص أو تعديل اللوحة.",
      ],
      steps: [
        "نراجع النشاط المطلوب ونتأكد أنه مضاف في السجل التجاري، أو نضيفه.",
        "نتحقق من ملاءمة الموقع للنشاط وتوثيق عقد الإيجار إلكترونياً.",
        "نقدم طلب رخصة البلدية واللوحة عبر منصة بلدي.",
        "نتابع شهادة السلامة إن كان النشاط يتطلبها، وأي ملاحظات من البلدية.",
        "نسلمك الرخص الصادرة ونذكّرك بمواعيد التجديد.",
      ],
      tips: [
        "تأكد قبل الاستئجار أن الموقع مصرح فيه بنشاطك التجاري.",
        "اجعل اسم اللوحة مطابقاً للاسم التجاري المسجل.",
        "احتفظ بعقد الإيجار الموثق، فهو أساس طلب الرخصة.",
        "راجع متطلبات السلامة الأساسية مثل طفايات الحريق قبل الافتتاح.",
        "سجل منشأتك في التأمينات وقوى إن كان لديك عاملون.",
      ],
      local:
        "نتابع تراخيص المحلات التجارية في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة عبر منصة بلدي.",
      faqs: [
        { q: "ما الأوراق المطلوبة لفتح محل؟", a: "عادةً سجل تجاري بالنشاط المناسب، وعقد إيجار موثق، ورخصة بلدية تشمل اللوحة، وشهادة سلامة لبعض الأنشطة." },
        { q: "هل تشمل رخصة البلدية اللوحة؟", a: "طلب اللوحة التجارية يتم عبر منصة بلدي ضمن إجراءات ترخيص المحل. نتابعه معك." },
        { q: "هل يمكن فتح المحل بسجل لا يتضمن النشاط؟", a: "لا، يجب أن يتضمن السجل النشاط الذي تمارسه. نضيفه لك أولاً ثم نكمل الرخص." },
        { q: "هل تساعدون في نقل المحل لموقع جديد؟", a: "نعم، نتابع تحديث العنوان والرخصة البلدية للموقع الجديد." },
      ],
    },
    en: {
      primaryKeyword: "open a shop in Saudi Arabia",
      secondaryKeywords: ["shop license Saudi Arabia", "retail shop requirements KSA", "shop signboard license", "Balady shop license"],
      metaDescription:
        "Open a retail shop in Saudi Arabia with Tasami: we arrange the CR activity, registered lease, Balady municipal and signboard license and safety certificate so your shop opens compliantly.",
      intro:
        "Opening a shop starts with a commercial registration that includes your activity, then suitable premises with a registered lease, then a municipal license through Balady that covers the signboard. Depending on the activity and size, a civil defense safety certificate may also be needed. Tasami checks your readiness for each step and follows the applications until your shop opens compliantly.",
      who: [
        "First-time owners opening a shop such as clothing, mobiles or a grocery.",
        "Shop owners moving to a new location.",
        "Businesses adding a new branch.",
        "Existing shops that need license renewals or signboard changes.",
      ],
      steps: [
        "We review the required activity and confirm it is on your CR, or add it.",
        "We check the premises suit the activity and the lease is registered electronically.",
        "We submit the municipal and signboard license application on Balady.",
        "We follow the safety certificate if the activity requires it, plus any municipal notes.",
        "We deliver the issued licenses and remind you of renewal dates.",
      ],
      tips: [
        "Before renting, confirm the premises are permitted for your activity.",
        "Make the signboard name match the registered trade name.",
        "Keep the registered lease; the license application is based on it.",
        "Check basic safety requirements such as fire extinguishers before opening.",
        "Register with GOSI and Qiwa if you have employees.",
      ],
      local:
        "We handle shop licensing in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city through Balady.",
      faqs: [
        { q: "What documents do I need to open a shop?", a: "Usually a CR with the right activity, a registered lease, a municipal license including the signboard, and a safety certificate for some activities." },
        { q: "Does the municipal license include the signboard?", a: "The signboard request is made on Balady as part of the shop licensing. We follow it with you." },
        { q: "Can I open with a CR that lacks the activity?", a: "No, the CR must include your activity. We add it first and then complete the licenses." },
        { q: "Do you help move a shop to a new location?", a: "Yes, we update the address and municipal license for the new premises." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں دکان کھولنا",
      secondaryKeywords: ["دکان کا لائسنس سعودی عرب", "دکان کھولنے کی شرائط", "سائن بورڈ لائسنس"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں دکان کھولیں: سجل کی سرگرمی، رجسٹرڈ کرایہ نامہ، بلدی لائسنس اور سائن بورڈ، اور سیفٹی سرٹیفکیٹ تاکہ دکان قانونی طور پر کھلے۔",
      intro:
        "دکان کھولنے کا آغاز ایسے کمرشل رجسٹریشن سے ہوتا ہے جس میں آپ کی سرگرمی شامل ہو، پھر رجسٹرڈ کرایہ نامے کے ساتھ مناسب جگہ، پھر بلدی کے ذریعے بلدیہ لائسنس جس میں سائن بورڈ بھی شامل ہے۔ سرگرمی اور رقبے کے مطابق سول ڈیفنس سیفٹی سرٹیفکیٹ بھی درکار ہو سکتا ہے۔ تسامی ہر مرحلے کی تیاری چیک کر کے دکان کھلنے تک درخواستیں فالو کرتا ہے۔",
      who: [
        "پہلی بار دکان کھولنے والے جیسے کپڑے، موبائل یا بقالہ۔",
        "دکان مالکان جو نئی جگہ منتقل ہو رہے ہیں۔",
        "کاروبار جو نئی برانچ کھول رہے ہیں۔",
        "موجودہ دکانیں جنہیں لائسنس کی تجدید یا سائن بورڈ میں تبدیلی چاہیے۔",
      ],
      steps: [
        "مطلوبہ سرگرمی دیکھ کر تصدیق کرتے ہیں کہ سجل میں شامل ہے، ورنہ شامل کرتے ہیں۔",
        "جگہ کی موزونیت اور کرایہ نامے کی الیکٹرانک رجسٹریشن چیک کرتے ہیں۔",
        "بلدی پر بلدیہ لائسنس اور سائن بورڈ کی درخواست دیتے ہیں۔",
        "اگر سرگرمی کے لیے ضروری ہو تو سیفٹی سرٹیفکیٹ اور بلدیہ کے نوٹس فالو کرتے ہیں۔",
        "جاری شدہ لائسنس آپ کو دیتے ہیں اور تجدید کی تاریخیں یاد دلاتے ہیں۔",
      ],
      tips: [
        "کرائے سے پہلے تصدیق کریں کہ جگہ پر آپ کی سرگرمی کی اجازت ہے۔",
        "سائن بورڈ کا نام رجسٹرڈ تجارتی نام کے مطابق رکھیں۔",
        "رجسٹرڈ کرایہ نامہ سنبھال کر رکھیں؛ لائسنس کی درخواست اسی پر مبنی ہے۔",
        "کھولنے سے پہلے فائر ایکسٹنگوشر جیسی بنیادی حفاظتی شرائط پوری کریں۔",
        "اگر ملازمین ہیں تو GOSI اور قوی میں رجسٹریشن کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام، مدینہ اور مملکت کے ہر شہر میں بلدی کے ذریعے دکانوں کے لائسنس کا کام کرتے ہیں۔",
      faqs: [
        { q: "دکان کھولنے کے لیے کون سے کاغذات چاہییں؟", a: "عموماً مناسب سرگرمی والا سجل، رجسٹرڈ کرایہ نامہ، سائن بورڈ سمیت بلدیہ لائسنس اور بعض سرگرمیوں کے لیے سیفٹی سرٹیفکیٹ۔" },
        { q: "کیا بلدیہ لائسنس میں سائن بورڈ شامل ہے؟", a: "سائن بورڈ کی درخواست بلدی پر دکان کے لائسنس کے عمل کا حصہ ہے۔ ہم اسے فالو کرتے ہیں۔" },
        { q: "کیا سرگرمی کے بغیر سجل سے دکان کھل سکتی ہے؟", a: "نہیں، سجل میں آپ کی سرگرمی شامل ہونی چاہیے۔ ہم پہلے اسے شامل کرتے ہیں پھر لائسنس مکمل کرتے ہیں۔" },
        { q: "کیا آپ دکان نئی جگہ منتقل کرنے میں مدد کرتے ہیں؟", a: "جی ہاں، نئی جگہ کے لیے پتہ اور بلدیہ لائسنس اپڈیٹ کرواتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में दुकान खोलना",
      secondaryKeywords: ["सऊदी दुकान लाइसेंस", "दुकान खोलने की शर्तें", "साइनबोर्ड लाइसेंस"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में दुकान खोलें: CR गतिविधि, पंजीकृत किरायानामा, बलदी लाइसेंस और साइनबोर्ड, और सेफ़्टी सर्टिफ़िकेट ताकि दुकान नियमों के साथ खुले।",
      intro:
        "दुकान खोलने की शुरुआत ऐसे कमर्शियल रजिस्ट्रेशन से होती है जिसमें आपकी गतिविधि शामिल हो, फिर पंजीकृत किरायानामे के साथ सही जगह, फिर बलदी से बलदिया लाइसेंस जिसमें साइनबोर्ड भी शामिल है। गतिविधि और आकार के अनुसार सिविल डिफ़ेंस सेफ़्टी सर्टिफ़िकेट भी लग सकता है। तसामी हर चरण की तैयारी जाँचकर दुकान खुलने तक आवेदन फ़ॉलो करता है।",
      who: [
        "पहली बार दुकान खोलने वाले, जैसे कपड़े, मोबाइल या किराना।",
        "दुकान मालिक जो नई जगह जा रहे हैं।",
        "व्यवसाय जो नई शाखा खोल रहे हैं।",
        "मौजूदा दुकानें जिन्हें लाइसेंस नवीनीकरण या साइनबोर्ड बदलाव चाहिए।",
      ],
      steps: [
        "ज़रूरी गतिविधि देखकर पुष्टि करते हैं कि CR में है, नहीं तो जोड़ते हैं।",
        "जगह की उपयुक्तता और किरायानामे का इलेक्ट्रॉनिक पंजीकरण जाँचते हैं।",
        "बलदी पर बलदिया लाइसेंस और साइनबोर्ड का आवेदन करते हैं।",
        "गतिविधि के लिए ज़रूरी हो तो सेफ़्टी सर्टिफ़िकेट और बलदिया नोटिस फ़ॉलो करते हैं।",
        "जारी लाइसेंस आपको देते हैं और नवीनीकरण की तारीख़ें याद दिलाते हैं।",
      ],
      tips: [
        "किराए से पहले पक्का करें कि जगह पर आपकी गतिविधि की अनुमति है।",
        "साइनबोर्ड का नाम पंजीकृत ट्रेड नेम से मिलाएँ।",
        "पंजीकृत किरायानामा सँभालकर रखें; लाइसेंस आवेदन उसी पर आधारित है।",
        "खोलने से पहले अग्निशामक जैसी बुनियादी सुरक्षा शर्तें पूरी करें।",
        "कर्मचारी हों तो GOSI और क़िवा में रजिस्ट्रेशन करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और हर शहर में बलदी से दुकानों के लाइसेंस का काम करते हैं।",
      faqs: [
        { q: "दुकान खोलने के लिए कौन-से काग़ज़ चाहिए?", a: "आमतौर पर सही गतिविधि वाला CR, पंजीकृत किरायानामा, साइनबोर्ड सहित बलदिया लाइसेंस और कुछ गतिविधियों के लिए सेफ़्टी सर्टिफ़िकेट।" },
        { q: "क्या बलदिया लाइसेंस में साइनबोर्ड शामिल है?", a: "साइनबोर्ड का आवेदन बलदी पर दुकान लाइसेंस प्रक्रिया का हिस्सा है। हम इसे फ़ॉलो करते हैं।" },
        { q: "क्या बिना गतिविधि वाले CR से दुकान खुल सकती है?", a: "नहीं, CR में आपकी गतिविधि होनी चाहिए। हम पहले उसे जोड़ते हैं फिर लाइसेंस पूरे करते हैं।" },
        { q: "क्या आप दुकान नई जगह ले जाने में मदद करते हैं?", a: "हाँ, नई जगह के लिए पता और बलदिया लाइसेंस अपडेट कराते हैं।" },
      ],
    },
  },

  zakatFiling: {
    ar: {
      primaryKeyword: "إقرار الزكاة",
      secondaryKeywords: ["تقديم الإقرار الزكوي", "إقرار زكوي للمؤسسات", "بوابة زاتكا", "شهادة الزكاة"],
      metaDescription:
        "تقديم الإقرار الزكوي للمنشآت في السعودية عبر تسامي: نراجع بيانات السنة المالية ونتابع رفع الإقرار في بوابة زاتكا وسداد المستحق وشهادة الزكاة.",
      intro:
        "المنشآت الخاضعة للزكاة تقدم إقرارها الزكوي سنوياً عبر بوابة هيئة الزكاة والضريبة والجمارك (زاتكا) خلال المهلة النظامية بعد نهاية السنة المالية، وعادةً ما تكون 120 يوماً. التأخر قد يؤدي لغرامات ويؤخر إصدار شهادة الزكاة التي تحتاجها المنشأة في المنافسات وبعض الخدمات. تسامي تتابع معك تجهيز البيانات ورفع الإقرار حتى صدور الشهادة.",
      who: [
        "المؤسسات والشركات السعودية الخاضعة للزكاة.",
        "أصحاب المنشآت الصغيرة الذين لا يتوفر لديهم محاسب متفرغ.",
        "منشآت تحتاج شهادة الزكاة للتقديم على منافسات أو تجديد خدمات.",
        "منشآت تأخرت في تقديم إقرارات سابقة وتريد تصحيح وضعها.",
      ],
      steps: [
        "نراجع بيانات المنشأة ورقمها في زاتكا ونهاية سنتها المالية.",
        "نحدد البيانات المالية المطلوبة لحالتك، ونوضح إن كانت المنشأة تحتاج قوائم مالية معتمدة.",
        "نجهز الإقرار ونراجعه معك قبل الرفع.",
        "نرفع الإقرار عبر بوابة زاتكا ونوضح لك المبلغ المستحق لسداده عبر سداد.",
        "نتابع حتى صدور شهادة الزكاة ونذكّرك بموعد الإقرار القادم.",
      ],
      tips: [
        "سجّل نهاية سنتك المالية في تقويمك وابدأ التجهيز قبل نهاية المهلة بوقت كافٍ.",
        "احتفظ بدفاتر وفواتير منظمة طوال السنة، فهي أساس أي إقرار صحيح.",
        "تحقق من وجود إقرارات سابقة متأخرة قبل تقديم الإقرار الجديد.",
        "إذا كانت منشأتك مسجلة في ضريبة القيمة المضافة فتابع إقراراتها الدورية أيضاً.",
        "احتفظ بنسخة من الإقرار وإيصال السداد والشهادة الصادرة.",
      ],
      local:
        "نتابع الإقرارات الزكوية لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة إلكترونياً عبر بوابة زاتكا.",
      faqs: [
        { q: "متى يُقدَّم الإقرار الزكوي؟", a: "سنوياً بعد نهاية السنة المالية للمنشأة وخلال المهلة النظامية، وعادةً 120 يوماً. نذكّرك بالموعد ونتابع التقديم." },
        { q: "ما فائدة شهادة الزكاة؟", a: "تثبت التزام المنشأة، وتُطلب عادةً في المنافسات الحكومية وبعض الخدمات. تصدر بعد تقديم الإقرار وسداد المستحق." },
        { q: "هل تعدّون القوائم المالية؟", a: "نتابع إجراءات الإقرار والرفع. إذا كانت منشأتك تحتاج قوائم مالية معتمدة نوضح لك ذلك قبل البدء." },
        { q: "تأخرت في الإقرار، ماذا أفعل؟", a: "أرسل لنا وضع المنشأة، نراجع الإقرارات المتأخرة ونرتب تقديمها بأسرع وقت لتقليل الأثر." },
      ],
    },
    en: {
      primaryKeyword: "Zakat return filing in Saudi Arabia",
      secondaryKeywords: ["Zakat declaration", "ZATCA Zakat return", "Zakat certificate", "Zakat filing for companies"],
      metaDescription:
        "Zakat return filing for Saudi businesses with Tasami: we review your fiscal year data and follow the submission on the ZATCA portal, the payment and the Zakat certificate.",
      intro:
        "Businesses subject to Zakat file an annual Zakat return on the Zakat, Tax and Customs Authority (ZATCA) portal within the statutory period after the fiscal year ends, usually 120 days. Late filing can lead to penalties and delay the Zakat certificate that businesses need for tenders and some services. Tasami follows the data preparation and submission with you until the certificate is issued.",
      who: [
        "Saudi establishments and companies subject to Zakat.",
        "Small business owners without a full-time accountant.",
        "Businesses that need a Zakat certificate for tenders or service renewals.",
        "Businesses with late past returns that want to regularize their status.",
      ],
      steps: [
        "We review the business details, ZATCA number and fiscal year end.",
        "We identify the financial data your case needs and tell you whether certified financial statements are required.",
        "We prepare the return and review it with you before submission.",
        "We submit on the ZATCA portal and tell you the amount due to pay through SADAD.",
        "We follow until the Zakat certificate is issued and remind you of the next deadline.",
      ],
      tips: [
        "Put your fiscal year end in your calendar and start preparing well before the deadline.",
        "Keep organized books and invoices all year; they are the basis of a correct return.",
        "Check for late past returns before filing the new one.",
        "If you are VAT-registered, keep up with periodic VAT returns too.",
        "Keep a copy of the return, payment receipt and issued certificate.",
      ],
      local:
        "We follow Zakat returns for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city online through the ZATCA portal.",
      faqs: [
        { q: "When is the Zakat return due?", a: "Annually after the business's fiscal year ends, within the statutory period, usually 120 days. We remind you and follow the filing." },
        { q: "Why do I need a Zakat certificate?", a: "It proves compliance and is usually required for government tenders and some services. It is issued after filing and paying the amount due." },
        { q: "Do you prepare financial statements?", a: "We handle the return procedure and submission. If your business needs certified financial statements, we tell you before starting." },
        { q: "I filed late. What should I do?", a: "Send us your situation; we review the late returns and arrange filing as soon as possible to limit the impact." },
      ],
    },
    ur: {
      primaryKeyword: "زکوٰۃ ریٹرن",
      secondaryKeywords: ["زکوٰۃ گوشوارہ", "زاتکا زکوٰۃ", "زکوٰۃ سرٹیفکیٹ"],
      metaDescription:
        "تسامی کے ساتھ سعودی اداروں کا زکوٰۃ ریٹرن: مالی سال کی معلومات کا جائزہ، زاتکا پورٹل پر جمع کرانا، ادائیگی اور زکوٰۃ سرٹیفکیٹ تک پیروی۔",
      intro:
        "زکوٰۃ کے پابند ادارے مالی سال ختم ہونے کے بعد مقررہ مدت میں، جو عموماً 120 دن ہوتی ہے، زکوٰۃ، ٹیکس اور کسٹمز اتھارٹی (زاتکا) کے پورٹل پر سالانہ زکوٰۃ ریٹرن جمع کرواتے ہیں۔ تاخیر سے جرمانہ ہو سکتا ہے اور زکوٰۃ سرٹیفکیٹ میں دیر ہوتی ہے جو ٹینڈرز اور بعض خدمات میں درکار ہوتا ہے۔ تسامی معلومات کی تیاری اور جمع کرانے سے سرٹیفکیٹ جاری ہونے تک آپ کے ساتھ رہتا ہے۔",
      who: [
        "زکوٰۃ کے پابند سعودی ادارے اور کمپنیاں۔",
        "چھوٹے کاروبار جن کے پاس مستقل اکاؤنٹنٹ نہیں۔",
        "ادارے جنہیں ٹینڈر یا خدمات کی تجدید کے لیے زکوٰۃ سرٹیفکیٹ چاہیے۔",
        "ادارے جن کے پچھلے ریٹرن تاخیر کا شکار ہیں۔",
      ],
      steps: [
        "ادارے کی معلومات، زاتکا نمبر اور مالی سال کا اختتام دیکھتے ہیں۔",
        "آپ کے معاملے کے لیے درکار مالی معلومات طے کرتے ہیں اور بتاتے ہیں کہ تصدیق شدہ مالی گوشوارے چاہییں یا نہیں۔",
        "ریٹرن تیار کر کے جمع کرانے سے پہلے آپ کے ساتھ دیکھتے ہیں۔",
        "زاتکا پورٹل پر جمع کراتے ہیں اور سداد کے ذریعے ادا کی جانے والی رقم بتاتے ہیں۔",
        "زکوٰۃ سرٹیفکیٹ جاری ہونے تک فالو کرتے ہیں اور اگلی تاریخ یاد دلاتے ہیں۔",
      ],
      tips: [
        "مالی سال کا اختتام کیلنڈر میں رکھیں اور مدت ختم ہونے سے کافی پہلے تیاری شروع کریں۔",
        "سال بھر کھاتے اور انوائسز منظم رکھیں۔",
        "نیا ریٹرن جمع کرانے سے پہلے پچھلے زیرِ التوا ریٹرن چیک کریں۔",
        "اگر VAT میں رجسٹرڈ ہیں تو اس کے دورانیہ ریٹرن بھی وقت پر جمع کرائیں۔",
        "ریٹرن، ادائیگی کی رسید اور سرٹیفکیٹ کی کاپی محفوظ رکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کے زکوٰۃ ریٹرن زاتکا پورٹل کے ذریعے آن لائن فالو کرتے ہیں۔",
      faqs: [
        { q: "زکوٰۃ ریٹرن کب جمع ہوتا ہے؟", a: "ہر سال مالی سال ختم ہونے کے بعد مقررہ مدت میں، عموماً 120 دن۔ ہم یاد دلاتے ہیں اور جمع کرواتے ہیں۔" },
        { q: "زکوٰۃ سرٹیفکیٹ کیوں ضروری ہے؟", a: "یہ ادارے کی پابندی ثابت کرتا ہے اور عموماً سرکاری ٹینڈرز اور بعض خدمات میں مانگا جاتا ہے۔" },
        { q: "کیا آپ مالی گوشوارے تیار کرتے ہیں؟", a: "ہم ریٹرن کا عمل اور جمع کرانا سنبھالتے ہیں۔ اگر تصدیق شدہ گوشوارے چاہییں تو پہلے بتا دیتے ہیں۔" },
        { q: "ریٹرن میں تاخیر ہو گئی، کیا کروں؟", a: "اپنی صورتحال بتائیں؛ ہم پچھلے ریٹرن دیکھ کر جلد از جلد جمع کرواتے ہیں تاکہ اثر کم ہو۔" },
      ],
    },
    hi: {
      primaryKeyword: "ज़कात रिटर्न",
      secondaryKeywords: ["ज़कात डिक्लेरेशन", "ZATCA ज़कात", "ज़कात सर्टिफ़िकेट"],
      metaDescription:
        "तसामी के साथ सऊदी प्रतिष्ठानों का ज़कात रिटर्न: वित्तीय वर्ष की जानकारी की समीक्षा, ZATCA पोर्टल पर दाख़िल करना, भुगतान और ज़कात सर्टिफ़िकेट तक फ़ॉलो-अप।",
      intro:
        "ज़कात के दायरे में आने वाले प्रतिष्ठान वित्तीय वर्ष ख़त्म होने के बाद तय अवधि में, जो आमतौर पर 120 दिन होती है, ज़कात, टैक्स और कस्टम्स अथॉरिटी (ZATCA) के पोर्टल पर सालाना ज़कात रिटर्न दाख़िल करते हैं। देरी से जुर्माना लग सकता है और ज़कात सर्टिफ़िकेट में देर होती है, जो टेंडर और कुछ सेवाओं में चाहिए। तसामी जानकारी की तैयारी से सर्टिफ़िकेट जारी होने तक आपके साथ रहता है।",
      who: [
        "ज़कात के दायरे में आने वाले सऊदी प्रतिष्ठान और कंपनियाँ।",
        "छोटे व्यवसाय जिनके पास पूर्णकालिक अकाउंटेंट नहीं है।",
        "प्रतिष्ठान जिन्हें टेंडर या सेवा नवीनीकरण के लिए ज़कात सर्टिफ़िकेट चाहिए।",
        "प्रतिष्ठान जिनके पिछले रिटर्न देर से हैं।",
      ],
      steps: [
        "प्रतिष्ठान की जानकारी, ZATCA नंबर और वित्तीय वर्ष का अंत देखते हैं।",
        "आपके मामले के लिए ज़रूरी वित्तीय जानकारी तय करते हैं और बताते हैं कि प्रमाणित वित्तीय विवरण चाहिए या नहीं।",
        "रिटर्न तैयार कर दाख़िल करने से पहले आपके साथ जाँचते हैं।",
        "ZATCA पोर्टल पर दाख़िल करते हैं और SADAD से चुकाई जाने वाली रक़म बताते हैं।",
        "ज़कात सर्टिफ़िकेट जारी होने तक फ़ॉलो करते हैं और अगली तारीख़ याद दिलाते हैं।",
      ],
      tips: [
        "वित्तीय वर्ष का अंत कैलेंडर में रखें और समय-सीमा से काफ़ी पहले तैयारी शुरू करें।",
        "पूरे साल खाते और इनवॉइस व्यवस्थित रखें।",
        "नया रिटर्न दाख़िल करने से पहले पिछले बकाया रिटर्न जाँचें।",
        "VAT में पंजीकृत हैं तो उसके नियमित रिटर्न भी समय पर दाख़िल करें।",
        "रिटर्न, भुगतान रसीद और सर्टिफ़िकेट की कॉपी सुरक्षित रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के प्रतिष्ठानों के ज़कात रिटर्न ZATCA पोर्टल से ऑनलाइन फ़ॉलो करते हैं।",
      faqs: [
        { q: "ज़कात रिटर्न कब दाख़िल होता है?", a: "हर साल वित्तीय वर्ष ख़त्म होने के बाद तय अवधि में, आमतौर पर 120 दिन। हम याद दिलाते हैं और दाख़िल कराते हैं।" },
        { q: "ज़कात सर्टिफ़िकेट क्यों ज़रूरी है?", a: "यह प्रतिष्ठान का अनुपालन साबित करता है और आमतौर पर सरकारी टेंडर और कुछ सेवाओं में माँगा जाता है।" },
        { q: "क्या आप वित्तीय विवरण तैयार करते हैं?", a: "हम रिटर्न प्रक्रिया और दाख़िला संभालते हैं। प्रमाणित विवरण चाहिए हों तो पहले बता देते हैं।" },
        { q: "रिटर्न में देरी हो गई, क्या करूँ?", a: "अपनी स्थिति बताएँ; हम पिछले रिटर्न देखकर जल्द से जल्द दाख़िल कराते हैं ताकि असर कम हो।" },
      ],
    },
  },

  eInvoicing: {
    ar: {
      primaryKeyword: "الفوترة الإلكترونية",
      secondaryKeywords: ["فاتورة زاتكا", "الربط مع زاتكا", "المرحلة الثانية الفوترة الإلكترونية", "نظام فواتير معتمد"],
      metaDescription:
        "الفوترة الإلكترونية (فاتورة) في السعودية مع تسامي: نراجع التزام منشأتك ونرتب الربط مع زاتكا عبر نظام فواتير متوافق، بالتعاون مع قسمنا التقني.",
      intro:
        "الفوترة الإلكترونية (فاتورة) إلزامية على المنشآت المسجلة في ضريبة القيمة المضافة، وتطبق على مرحلتين: مرحلة الإصدار التي تشترط إصدار الفواتير من نظام إلكتروني متوافق، ومرحلة الربط والتكامل مع منصة زاتكا التي تُطبق على المنشآت تدريجياً حسب الإشعار الذي تصلها من الهيئة. تسامي تراجع وضع منشأتك وتتابع تجهيز الربط، ويساعدك قسمنا التقني إن احتجت نظاماً أو تكاملاً.",
      who: [
        "المنشآت المسجلة في ضريبة القيمة المضافة وتريد التأكد من التوافق.",
        "منشآت وصلها إشعار من زاتكا بموعد الربط في المرحلة الثانية.",
        "محلات ومتاجر تستخدم برنامج كاشير أو فواتير غير متوافق.",
        "أصحاب المنشآت الذين يحتاجون شرحاً واضحاً للمتطلبات قبل شراء نظام.",
      ],
      steps: [
        "نراجع تسجيل منشأتك في الضريبة وأي إشعار وصلها من زاتكا بخصوص الربط.",
        "نراجع النظام الذي تصدر منه فواتيرك ونوضح إن كان متوافقاً أو يحتاج تحديثاً.",
        "نرتب معك ربط النظام بمنصة فاتورة وتسجيل الأجهزة أو الحلول المستخدمة.",
        "نختبر إصدار فاتورة والتأكد من ظهور العناصر المطلوبة مثل رمز الاستجابة السريعة.",
        "نتابع أي ملاحظات بعد الربط ونوضح لك ما يلزم للاستمرار في الالتزام.",
      ],
      tips: [
        "تابع بريد منشأتك المسجل في زاتكا، فإشعار موعد الربط يصل عليه.",
        "لا تشترِ نظام فواتير قبل التأكد أنه مدرج ضمن الحلول المتوافقة.",
        "الفواتير المكتوبة يدوياً أو من برامج تحرير النصوص لا تحقق المتطلبات.",
        "احتفظ بنسخ الفواتير إلكترونياً وفق المدة النظامية.",
        "درّب موظفي الكاشير على الإصدار الصحيح لتفادي الأخطاء.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة عن بُعد، ونقدم الدعم التقني للربط عبر فريقنا.",
      faqs: [
        { q: "هل الفوترة الإلكترونية إلزامية على منشأتي؟", a: "هي إلزامية على المنشآت المسجلة في ضريبة القيمة المضافة. أما مرحلة الربط فتطبق حسب الإشعار الذي يصل المنشأة من زاتكا." },
        { q: "ما الفرق بين المرحلة الأولى والثانية؟", a: "الأولى تشترط إصدار الفواتير من نظام إلكتروني متوافق، والثانية تشترط ربط هذا النظام مع منصة زاتكا وإرسال الفواتير إليها." },
        { q: "هل توفرون نظام فواتير؟", a: "قسمنا التقني يساعدك في اختيار حل متوافق أو تطوير التكامل مع نظامك الحالي حسب حاجتك." },
        { q: "وصلني إشعار ربط، ماذا أفعل؟", a: "أرسل لنا الإشعار وبيانات النظام الذي تستخدمه، ونرتب معك خطة الربط قبل الموعد." },
      ],
    },
    en: {
      primaryKeyword: "e-invoicing in Saudi Arabia",
      secondaryKeywords: ["ZATCA Fatoora", "ZATCA integration", "e-invoicing phase 2", "compliant invoicing system"],
      metaDescription:
        "E-invoicing (Fatoora) in Saudi Arabia with Tasami: we review your obligation and arrange ZATCA integration through a compliant invoicing system, with support from our tech team.",
      intro:
        "E-invoicing (Fatoora) is mandatory for VAT-registered businesses and is applied in two phases: the generation phase, which requires issuing invoices from a compliant electronic system, and the integration phase with the ZATCA platform, rolled out to businesses gradually according to the notification they receive from the authority. Tasami reviews your situation and follows the integration readiness, and our tech team helps if you need a system or integration.",
      who: [
        "VAT-registered businesses that want to confirm compliance.",
        "Businesses that received a ZATCA notification with their phase 2 integration date.",
        "Shops and stores using a non-compliant POS or invoicing program.",
        "Owners who need a clear explanation of the requirements before buying a system.",
      ],
      steps: [
        "We review your VAT registration and any ZATCA notification about integration.",
        "We review the system you invoice from and tell you whether it is compliant or needs updating.",
        "We arrange integrating the system with the Fatoora platform and onboarding the devices or solutions used.",
        "We test issuing an invoice and confirm required elements such as the QR code appear.",
        "We follow any post-integration notes and explain what is needed to stay compliant.",
      ],
      tips: [
        "Watch the email registered with ZATCA; the integration notice arrives there.",
        "Do not buy an invoicing system before confirming it is a compliant solution.",
        "Handwritten invoices or invoices from word processors do not meet the requirements.",
        "Keep electronic copies of invoices for the statutory period.",
        "Train cashier staff to issue invoices correctly to avoid errors.",
      ],
      local:
        "We serve businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city remotely, with technical integration support from our team.",
      faqs: [
        { q: "Is e-invoicing mandatory for my business?", a: "It is mandatory for VAT-registered businesses. The integration phase applies according to the notification your business receives from ZATCA." },
        { q: "What is the difference between phase 1 and phase 2?", a: "Phase 1 requires issuing invoices from a compliant electronic system; phase 2 requires integrating that system with the ZATCA platform and sending invoices to it." },
        { q: "Do you provide an invoicing system?", a: "Our tech team helps you choose a compliant solution or build the integration with your current system as needed." },
        { q: "I received an integration notice. What now?", a: "Send us the notice and details of your current system, and we will plan the integration with you before the deadline." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں ای انوائسنگ",
      secondaryKeywords: ["زاتکا فاتورہ", "زاتکا انٹیگریشن", "ای انوائسنگ فیز 2"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں ای انوائسنگ (فاتورہ): آپ کی ذمہ داری کا جائزہ اور مطابق انوائس سسٹم کے ذریعے زاتکا سے انٹیگریشن، ہماری ٹیک ٹیم کی مدد کے ساتھ۔",
      intro:
        "ای انوائسنگ (فاتورہ) VAT میں رجسٹرڈ اداروں کے لیے لازمی ہے اور دو مراحل میں نافذ ہے: پہلا مرحلہ مطابق الیکٹرانک سسٹم سے انوائس جاری کرنا، اور دوسرا مرحلہ زاتکا پلیٹ فارم سے انٹیگریشن، جو اداروں پر اتھارٹی کے نوٹس کے مطابق بتدریج لاگو ہوتا ہے۔ تسامی آپ کی صورتحال دیکھ کر انٹیگریشن کی تیاری فالو کرتا ہے اور سسٹم یا انٹیگریشن کی ضرورت ہو تو ہماری ٹیک ٹیم مدد کرتی ہے۔",
      who: [
        "VAT میں رجسٹرڈ ادارے جو مطابقت یقینی بنانا چاہتے ہیں۔",
        "ادارے جنہیں زاتکا سے فیز 2 انٹیگریشن کی تاریخ کا نوٹس ملا ہے۔",
        "دکانیں جو غیر مطابق POS یا انوائس پروگرام استعمال کرتی ہیں۔",
        "مالکان جنہیں سسٹم خریدنے سے پہلے شرائط کی واضح وضاحت چاہیے۔",
      ],
      steps: [
        "VAT رجسٹریشن اور زاتکا کے کسی انٹیگریشن نوٹس کا جائزہ لیتے ہیں۔",
        "آپ کا انوائس سسٹم دیکھ کر بتاتے ہیں کہ مطابق ہے یا اپڈیٹ چاہیے۔",
        "فاتورہ پلیٹ فارم سے سسٹم کی انٹیگریشن اور ڈیوائسز کی آن بورڈنگ ترتیب دیتے ہیں۔",
        "انوائس جاری کر کے ٹیسٹ کرتے ہیں کہ QR کوڈ جیسے ضروری عناصر موجود ہیں۔",
        "انٹیگریشن کے بعد کے نوٹس فالو کرتے ہیں اور مسلسل پابندی کے لیے ضروری باتیں بتاتے ہیں۔",
      ],
      tips: [
        "زاتکا میں رجسٹرڈ ای میل دیکھتے رہیں؛ انٹیگریشن کا نوٹس وہیں آتا ہے۔",
        "مطابق ہونے کی تصدیق سے پہلے انوائس سسٹم نہ خریدیں۔",
        "ہاتھ سے لکھی یا ورڈ پروسیسر سے بنی انوائسز شرائط پوری نہیں کرتیں۔",
        "انوائسز کی الیکٹرانک کاپیاں مقررہ مدت تک رکھیں۔",
        "کیشیئر عملے کو درست انوائس جاری کرنے کی تربیت دیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کی دور سے خدمت کرتے ہیں اور انٹیگریشن میں تکنیکی مدد دیتے ہیں۔",
      faqs: [
        { q: "کیا ای انوائسنگ میرے ادارے پر لازمی ہے؟", a: "VAT میں رجسٹرڈ اداروں پر لازمی ہے۔ انٹیگریشن کا مرحلہ زاتکا کے نوٹس کے مطابق لاگو ہوتا ہے۔" },
        { q: "پہلے اور دوسرے مرحلے میں کیا فرق ہے؟", a: "پہلے میں مطابق الیکٹرانک سسٹم سے انوائس جاری کرنا، دوسرے میں اس سسٹم کو زاتکا پلیٹ فارم سے جوڑ کر انوائسز بھیجنا۔" },
        { q: "کیا آپ انوائس سسٹم فراہم کرتے ہیں؟", a: "ہماری ٹیک ٹیم مطابق حل منتخب کرنے یا موجودہ سسٹم کی انٹیگریشن بنانے میں مدد کرتی ہے۔" },
        { q: "انٹیگریشن نوٹس ملا ہے، اب کیا کروں؟", a: "نوٹس اور موجودہ سسٹم کی تفصیل بھیجیں، ہم تاریخ سے پہلے انٹیگریشن کا منصوبہ بنا دیں گے۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में ई-इनवॉइसिंग",
      secondaryKeywords: ["ZATCA फ़ातूरा", "ZATCA इंटीग्रेशन", "ई-इनवॉइसिंग फ़ेज़ 2"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में ई-इनवॉइसिंग (फ़ातूरा): आपकी बाध्यता की समीक्षा और अनुरूप इनवॉइस सिस्टम से ZATCA इंटीग्रेशन, हमारी टेक टीम की मदद से।",
      intro:
        "ई-इनवॉइसिंग (फ़ातूरा) VAT में पंजीकृत प्रतिष्ठानों के लिए अनिवार्य है और दो चरणों में लागू है: पहला चरण अनुरूप इलेक्ट्रॉनिक सिस्टम से इनवॉइस जारी करना, और दूसरा चरण ZATCA प्लेटफ़ॉर्म से इंटीग्रेशन, जो प्राधिकरण की सूचना के अनुसार प्रतिष्ठानों पर धीरे-धीरे लागू होता है। तसामी आपकी स्थिति देखकर इंटीग्रेशन की तैयारी फ़ॉलो करता है और सिस्टम या इंटीग्रेशन चाहिए तो हमारी टेक टीम मदद करती है।",
      who: [
        "VAT में पंजीकृत प्रतिष्ठान जो अनुपालन पक्का करना चाहते हैं।",
        "प्रतिष्ठान जिन्हें ZATCA से फ़ेज़ 2 इंटीग्रेशन तारीख़ की सूचना मिली है।",
        "दुकानें जो गैर-अनुरूप POS या इनवॉइस प्रोग्राम इस्तेमाल करती हैं।",
        "मालिक जिन्हें सिस्टम ख़रीदने से पहले शर्तों की साफ़ जानकारी चाहिए।",
      ],
      steps: [
        "VAT पंजीकरण और ZATCA की किसी इंटीग्रेशन सूचना की समीक्षा करते हैं।",
        "आपका इनवॉइस सिस्टम देखकर बताते हैं कि अनुरूप है या अपडेट चाहिए।",
        "फ़ातूरा प्लेटफ़ॉर्म से सिस्टम इंटीग्रेशन और डिवाइस ऑनबोर्डिंग व्यवस्थित करते हैं।",
        "इनवॉइस जारी कर जाँचते हैं कि QR कोड जैसे ज़रूरी तत्व मौजूद हैं।",
        "इंटीग्रेशन के बाद के नोट्स फ़ॉलो करते हैं और लगातार अनुपालन के लिए ज़रूरी बातें बताते हैं।",
      ],
      tips: [
        "ZATCA में पंजीकृत ईमेल देखते रहें; इंटीग्रेशन सूचना वहीं आती है।",
        "अनुरूप होने की पुष्टि से पहले इनवॉइस सिस्टम न ख़रीदें।",
        "हाथ से लिखे या वर्ड प्रोसेसर से बने इनवॉइस शर्तें पूरी नहीं करते।",
        "इनवॉइस की इलेक्ट्रॉनिक कॉपियाँ तय अवधि तक रखें।",
        "कैशियर स्टाफ़ को सही इनवॉइस जारी करने का प्रशिक्षण दें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के प्रतिष्ठानों को दूर से सेवा देते हैं और इंटीग्रेशन में तकनीकी मदद करते हैं।",
      faqs: [
        { q: "क्या ई-इनवॉइसिंग मेरे प्रतिष्ठान पर अनिवार्य है?", a: "VAT में पंजीकृत प्रतिष्ठानों पर अनिवार्य है। इंटीग्रेशन चरण ZATCA की सूचना के अनुसार लागू होता है।" },
        { q: "पहले और दूसरे चरण में क्या फ़र्क़ है?", a: "पहले में अनुरूप इलेक्ट्रॉनिक सिस्टम से इनवॉइस जारी करना, दूसरे में उस सिस्टम को ZATCA प्लेटफ़ॉर्म से जोड़कर इनवॉइस भेजना।" },
        { q: "क्या आप इनवॉइस सिस्टम देते हैं?", a: "हमारी टेक टीम अनुरूप समाधान चुनने या मौजूदा सिस्टम का इंटीग्रेशन बनाने में मदद करती है।" },
        { q: "इंटीग्रेशन सूचना मिली है, अब क्या करूँ?", a: "सूचना और मौजूदा सिस्टम का विवरण भेजें, हम तारीख़ से पहले इंटीग्रेशन योजना बना देंगे।" },
      ],
    },
  },
};
