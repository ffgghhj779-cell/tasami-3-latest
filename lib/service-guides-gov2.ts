import type { GuideDef } from "./service-guides";

/**
 * Second batch of government guides (visas, payroll, tax, licensing).
 * No government fees, fixed durations or legal promises.
 */
export const GOV2_GUIDES: Record<string, GuideDef> = {
  domesticVisa: {
    ar: {
      primaryKeyword: "استقدام عاملة منزلية عبر مساند",
      secondaryKeywords: ["تأشيرة عمالة منزلية", "إصدار تأشيرة مساند", "استقدام سائق خاص", "تعقيب مساند"],
      metaDescription:
        "استقدام عاملة منزلية أو سائق خاص عبر منصة مساند مع تسامي: نتابع إصدار التأشيرة واختيار المكتب والعقد خطوة بخطوة عبر واتساب. لسنا جهة حكومية.",
      intro:
        "استقدام العمالة المنزلية في المملكة يتم عبر منصة مساند التابعة لوزارة الموارد البشرية، ويشمل العاملة المنزلية والسائق الخاص وغيرهم من المهن المنزلية. الخطوات تبدو بسيطة، لكن كثيرين يتأخرون بسبب نقص إثبات القدرة المالية أو اختيار مكتب غير مناسب أو أخطاء في بيانات الطلب. في تسامي نتابع معك الطلب من التسجيل في مساند حتى إصدار التأشيرة وتوقيع العقد مع مكتب الاستقدام، ونوضح لك كل خطوة بلغة بسيطة.",
      who: [
        "الأسر التي تحتاج عاملة منزلية أو مربية أطفال لأول مرة.",
        "من يريد استقدام سائق خاص للعائلة.",
        "من لديه طلب سابق متعثر في مساند ويحتاج متابعة.",
        "المقيمون المؤهلون نظاماً لاستقدام عمالة منزلية.",
      ],
      steps: [
        "نتأكد من أهليتك ومن المستندات المطلوبة مثل إثبات الدخل والهوية.",
        "نتابع تسجيل الطلب في مساند واختيار المهنة والجنسية المناسبة.",
        "نساعدك في المقارنة بين مكاتب الاستقدام المعتمدة واختيار الأنسب.",
        "نتابع سداد الرسوم الحكومية بنفسك عبر القنوات الرسمية وإصدار التأشيرة.",
        "نتابع توقيع العقد مع المكتب ومراحل الاستقدام حتى وصول العامل.",
      ],
      tips: [
        "جهّز إثبات القدرة المالية مسبقاً، فهو من أكثر أسباب رفض الطلب.",
        "تعامل فقط مع مكاتب استقدام مرخصة ومعروضة داخل مساند.",
        "اقرأ بنود العقد وفترة التجربة والضمان قبل التوقيع.",
        "تأكد من صحة بياناتك في أبشر قبل بدء الطلب.",
        "احتفظ بجميع الإيصالات والعقود في مكان واحد.",
      ],
      local:
        "نخدم الأسر في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كلها عبر واتساب.",
      faqs: [
        { q: "هل تسامي مكتب استقدام؟", a: "لا، نحن مكتب خدمات تعقيب نتابع معك الإجراءات، والاستقدام نفسه يتم عبر مكاتب مرخصة داخل منصة مساند." },
        { q: "ما المستندات المطلوبة عادة؟", a: "غالباً الهوية الوطنية أو الإقامة وإثبات القدرة المالية، وقد تختلف المتطلبات حسب حالتك والمهنة المطلوبة." },
        { q: "هل يمكن استقدام سائق خاص بنفس الطريقة؟", a: "نعم، السائق الخاص من المهن المنزلية التي تُطلب عبر مساند." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
      ],
    },
    en: {
      primaryKeyword: "domestic worker visa via Musaned",
      secondaryKeywords: ["housemaid visa Saudi Arabia", "Musaned visa issuance", "private driver recruitment", "Musaned follow-up"],
      metaDescription:
        "Recruit a housemaid or private driver through Musaned with Tasami: we follow the visa, office selection and contract step by step on WhatsApp. Not a government entity.",
      intro:
        "Domestic worker recruitment in the Kingdom is done through the Musaned platform of the Ministry of Human Resources, covering housemaids, private drivers and other domestic jobs. The steps look simple, but many people are delayed by missing proof of financial ability, choosing the wrong office or errors in the application. At Tasami we follow your request from registering on Musaned to issuing the visa and signing the contract with the recruitment office, explaining each step simply.",
      who: [
        "Families needing a housemaid or nanny for the first time.",
        "Anyone wanting to recruit a private family driver.",
        "People with a stalled Musaned application needing follow-up.",
        "Residents eligible to recruit domestic workers.",
      ],
      steps: [
        "We confirm your eligibility and required documents such as income proof and ID.",
        "We follow the Musaned application and choice of profession and nationality.",
        "We help you compare licensed recruitment offices and choose the best fit.",
        "You pay government fees through official channels and we follow the visa issuance.",
        "We follow the contract signing and recruitment stages until the worker arrives.",
      ],
      tips: [
        "Prepare proof of financial ability early; it is a common rejection reason.",
        "Deal only with licensed offices listed inside Musaned.",
        "Read the contract, probation and guarantee terms before signing.",
        "Check your Absher details are correct before starting.",
        "Keep all receipts and contracts together.",
      ],
      local:
        "We serve families in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with all follow-up on WhatsApp.",
      faqs: [
        { q: "Is Tasami a recruitment office?", a: "No, we are a government-services follow-up office; recruitment itself is done by licensed offices inside Musaned." },
        { q: "Which documents are usually needed?", a: "Usually national ID or iqama and proof of financial ability; requirements vary by case and profession." },
        { q: "Can a private driver be recruited the same way?", a: "Yes, private driver is one of the domestic professions requested through Musaned." },
        { q: "Who pays government fees?", a: "Government fees are paid through official channels in your name; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "مساند کے ذریعے گھریلو ملازمہ کا ویزا",
      secondaryKeywords: ["گھریلو ملازم ویزا سعودی", "مساند ویزا", "پرائیویٹ ڈرائیور ویزا"],
      metaDescription:
        "تسامی کے ساتھ مساند کے ذریعے گھریلو ملازمہ یا پرائیویٹ ڈرائیور: ویزا، دفتر کا انتخاب اور معاہدہ واٹس ایپ پر مرحلہ وار۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "مملکت میں گھریلو ملازمین کی بھرتی وزارتِ افرادی قوت کے مساند پلیٹ فارم کے ذریعے ہوتی ہے، جس میں گھریلو ملازمہ، پرائیویٹ ڈرائیور اور دیگر گھریلو پیشے شامل ہیں۔ مراحل آسان لگتے ہیں مگر مالی اہلیت کا ثبوت نہ ہونے، غلط دفتر کے انتخاب یا درخواست میں غلطیوں سے تاخیر ہوتی ہے۔ تسامی مساند میں رجسٹریشن سے ویزا جاری ہونے اور بھرتی دفتر سے معاہدے تک آپ کے ساتھ فالو اپ کرتا ہے۔",
      who: [
        "خاندان جنہیں پہلی بار گھریلو ملازمہ یا آیا چاہیے۔",
        "جو خاندان کے لیے پرائیویٹ ڈرائیور لانا چاہتے ہیں۔",
        "جن کی مساند درخواست رکی ہوئی ہے۔",
        "اہل مقیم جو گھریلو ملازم لا سکتے ہیں۔",
      ],
      steps: [
        "اہلیت اور آمدنی کے ثبوت و شناخت جیسے کاغذات کی تصدیق کرتے ہیں۔",
        "مساند میں درخواست اور پیشہ و قومیت کا انتخاب فالو کرتے ہیں۔",
        "لائسنس یافتہ بھرتی دفاتر کا موازنہ کرنے میں مدد کرتے ہیں۔",
        "آپ سرکاری فیس سرکاری ذرائع سے ادا کرتے ہیں اور ہم ویزا فالو کرتے ہیں۔",
        "معاہدہ اور ملازم کی آمد تک کے مراحل فالو کرتے ہیں۔",
      ],
      tips: [
        "مالی اہلیت کا ثبوت پہلے تیار رکھیں؛ یہ مسترد ہونے کی عام وجہ ہے۔",
        "صرف مساند میں درج لائسنس یافتہ دفاتر سے معاملہ کریں۔",
        "دستخط سے پہلے معاہدہ، آزمائشی مدت اور ضمانت پڑھیں۔",
        "شروع سے پہلے ابشر میں اپنی معلومات درست کریں۔",
        "تمام رسیدیں اور معاہدے ایک جگہ رکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام، مدینہ اور مملکت کے ہر شہر کے خاندانوں کی واٹس ایپ پر خدمت کرتے ہیں۔",
      faqs: [
        { q: "کیا تسامی بھرتی دفتر ہے؟", a: "نہیں، ہم تعقیب دفتر ہیں؛ بھرتی مساند میں لائسنس یافتہ دفاتر کرتے ہیں۔" },
        { q: "عام طور پر کون سے کاغذات چاہییں؟", a: "عموماً شناختی کارڈ یا اقامہ اور مالی اہلیت کا ثبوت؛ تقاضے حالت کے مطابق بدلتے ہیں۔" },
        { q: "کیا پرائیویٹ ڈرائیور بھی اسی طرح آتا ہے؟", a: "جی ہاں، پرائیویٹ ڈرائیور مساند کے گھریلو پیشوں میں شامل ہے۔" },
        { q: "سرکاری فیس کون ادا کرتا ہے؟", a: "فیس آپ کے نام سرکاری ذرائع سے ادا ہوتی ہے؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "मुसानेद से घरेलू कामगार वीज़ा",
      secondaryKeywords: ["हाउसमेड वीज़ा सऊदी", "मुसानेद वीज़ा", "प्राइवेट ड्राइवर वीज़ा"],
      metaDescription:
        "तसामी के साथ मुसानेद से घरेलू कामगार या प्राइवेट ड्राइवर: वीज़ा, दफ़्तर चुनना और अनुबंध व्हाट्सऐप पर चरण-दर-चरण। हम सरकारी संस्था नहीं हैं।",
      intro:
        "सऊदी अरब में घरेलू कामगारों की भर्ती मानव संसाधन मंत्रालय के मुसानेद प्लेटफ़ॉर्म से होती है, जिसमें हाउसमेड, प्राइवेट ड्राइवर और दूसरे घरेलू पेशे शामिल हैं। चरण आसान लगते हैं लेकिन आर्थिक क्षमता का सबूत न होने, ग़लत दफ़्तर चुनने या आवेदन की ग़लतियों से देरी होती है। तसामी मुसानेद रजिस्ट्रेशन से वीज़ा जारी होने और भर्ती दफ़्तर से अनुबंध तक आपके साथ फ़ॉलो-अप करता है।",
      who: [
        "परिवार जिन्हें पहली बार हाउसमेड या आया चाहिए।",
        "जो परिवार के लिए प्राइवेट ड्राइवर लाना चाहते हैं।",
        "जिनका मुसानेद आवेदन अटका हुआ है।",
        "योग्य निवासी जो घरेलू कामगार ला सकते हैं।",
      ],
      steps: [
        "योग्यता और आय प्रमाण व पहचान जैसे दस्तावेज़ जाँचते हैं।",
        "मुसानेद में आवेदन और पेशा व राष्ट्रीयता का चुनाव फ़ॉलो करते हैं।",
        "लाइसेंसधारी भर्ती दफ़्तरों की तुलना में मदद करते हैं।",
        "आप सरकारी फ़ीस आधिकारिक माध्यम से देते हैं और हम वीज़ा फ़ॉलो करते हैं।",
        "अनुबंध और कामगार के आने तक के चरण फ़ॉलो करते हैं।",
      ],
      tips: [
        "आर्थिक क्षमता का सबूत पहले तैयार रखें; यह अस्वीकृति का आम कारण है।",
        "सिर्फ़ मुसानेद में दर्ज लाइसेंसधारी दफ़्तरों से काम करें।",
        "हस्ताक्षर से पहले अनुबंध, प्रोबेशन और गारंटी पढ़ें।",
        "शुरू करने से पहले अबशिर में अपनी जानकारी सही करें।",
        "सभी रसीदें और अनुबंध एक जगह रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और हर शहर के परिवारों की व्हाट्सऐप पर सेवा करते हैं।",
      faqs: [
        { q: "क्या तसामी भर्ती दफ़्तर है?", a: "नहीं, हम सरकारी सेवाओं के फ़ॉलो-अप का दफ़्तर हैं; भर्ती मुसानेद के लाइसेंसधारी दफ़्तर करते हैं।" },
        { q: "आमतौर पर कौन-से दस्तावेज़ चाहिए?", a: "आमतौर पर पहचान पत्र या इक़ामा और आर्थिक क्षमता का सबूत; ज़रूरतें स्थिति के अनुसार बदलती हैं।" },
        { q: "क्या प्राइवेट ड्राइवर भी ऐसे ही आता है?", a: "हाँ, प्राइवेट ड्राइवर मुसानेद के घरेलू पेशों में है।" },
        { q: "सरकारी फ़ीस कौन देता है?", a: "फ़ीस आपके नाम आधिकारिक माध्यम से दी जाती है; हम सिर्फ़ मार्गदर्शन करते हैं।" },
      ],
    },
  },

  workVisaPermanent: {
    ar: {
      primaryKeyword: "إصدار تأشيرة عمل دائمة للمنشآت",
      secondaryKeywords: ["تأشيرة عمل قوى", "طلب تأشيرات استقدام للشركات", "تفويض تأشيرة عمل", "استقدام عمالة للمنشأة"],
      metaDescription:
        "إصدار تأشيرات العمل الدائمة للمنشآت عبر منصة قوى مع تسامي: نراجع الأهلية ونطاقات المنشأة ونتابع الطلب والتفويض حتى الاستقدام. لسنا جهة حكومية.",
      intro:
        "تأشيرة العمل الدائمة هي الطريق النظامي لاستقدام موظف أجنبي للعمل في منشأتك داخل المملكة. الطلب يتم عبر منصة قوى ويعتمد على أهلية المنشأة: نطاقها في برنامج نطاقات، وسلامة سجلاتها في التأمينات وحماية الأجور، وتوافق المهن المطلوبة مع نشاطها. تسامي تراجع وضع منشأتك قبل التقديم، وتتابع طلب التأشيرات ثم التفويض لمكتب الاستقدام حتى وصول العامل.",
      who: [
        "المنشآت الجديدة التي تستقدم أول موظفيها من الخارج.",
        "الشركات التي تحتاج زيادة عدد العمالة لمشروع أو توسع.",
        "المنشآت التي رُفض طلب تأشيراتها وتريد معرفة السبب.",
        "أصحاب المحلات والمطاعم والورش الذين يحتاجون عمالة متخصصة.",
      ],
      steps: [
        "نراجع نطاق المنشأة وسجلات التأمينات وحماية الأجور قبل التقديم.",
        "نحدد المهن والأعداد المناسبة لنشاط المنشأة.",
        "نتابع رفع طلب التأشيرات في قوى حتى الاعتماد.",
        "نتابع تفويض التأشيرة لمكتب الاستقدام أو الجهة المعنية في بلد العامل.",
        "نتابع الإجراءات بعد الوصول مثل إصدار الإقامة ورخصة العمل.",
      ],
      tips: [
        "حافظ على نطاق المنشأة أخضر، فهو يؤثر مباشرة على قبول الطلب.",
        "تأكد من التزامك برفع ملفات الأجور في مدد شهرياً.",
        "اختر مهناً متوافقة مع نشاط السجل التجاري.",
        "لا تطلب أعداداً أكبر من حاجتك الفعلية.",
        "جهّز عقد العمل وبياناته قبل وصول العامل.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، والمتابعة عبر واتساب.",
      faqs: [
        { q: "ما الذي يحدد قبول طلب التأشيرات؟", a: "عوامل عدة أهمها نطاق المنشأة والتزامها بالتأمينات وحماية الأجور وتوافق المهن مع نشاطها." },
        { q: "هل تضمنون صدور التأشيرة؟", a: "لا، القرار للجهات الرسمية. نحن نراجع الملف ونتابع الطلب لتقليل أسباب الرفض." },
        { q: "ما الفرق بين التأشيرة الدائمة والمؤقتة؟", a: "الدائمة لاستقدام موظف بعقد مستمر وإقامة، والمؤقتة لأعمال موسمية أو مشاريع محددة المدة." },
        { q: "هل تتابعون الإجراءات بعد وصول العامل؟", a: "نعم، نتابع الإقامة ورخصة العمل وتوثيق العقد في قوى." },
      ],
    },
    en: {
      primaryKeyword: "permanent work visa for companies in Saudi Arabia",
      secondaryKeywords: ["Qiwa work visa", "company visa request", "work visa authorization", "recruit workers for business"],
      metaDescription:
        "Permanent work visas for businesses through Qiwa with Tasami: we review eligibility and Nitaqat status and follow the request and authorization until recruitment. Not a government entity.",
      intro:
        "A permanent work visa is the legal route to recruit a foreign employee for your business in the Kingdom. The request is made through Qiwa and depends on your establishment's eligibility: its Nitaqat band, clean GOSI and wage-protection records and professions that match its activity. Tasami reviews your establishment's status before applying and follows the visa request and the authorization to the recruitment office until the worker arrives.",
      who: [
        "New businesses recruiting their first employees from abroad.",
        "Companies needing more workers for a project or expansion.",
        "Businesses whose visa request was rejected and want to know why.",
        "Shop, restaurant and workshop owners needing specialized workers.",
      ],
      steps: [
        "We review Nitaqat, GOSI and wage-protection records before applying.",
        "We define suitable professions and numbers for your activity.",
        "We follow the visa request on Qiwa until approval.",
        "We follow the visa authorization to the recruitment office or relevant party in the worker's country.",
        "We follow post-arrival steps such as iqama and work permit issuance.",
      ],
      tips: [
        "Keep your Nitaqat band green; it directly affects approval.",
        "Upload wage files to Mudad every month.",
        "Choose professions that match your CR activity.",
        "Do not request more workers than you actually need.",
        "Prepare the employment contract before the worker arrives.",
      ],
      local:
        "We serve businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, with follow-up on WhatsApp.",
      faqs: [
        { q: "What determines visa approval?", a: "Several factors, mainly Nitaqat band, GOSI and wage-protection compliance and professions matching the activity." },
        { q: "Do you guarantee the visa?", a: "No, the decision belongs to official authorities. We review the file and follow the request to reduce rejection reasons." },
        { q: "Permanent vs temporary visa?", a: "Permanent is for an employee on a continuing contract with iqama; temporary is for seasonal work or fixed-term projects." },
        { q: "Do you follow steps after arrival?", a: "Yes, we follow the iqama, work permit and contract documentation on Qiwa." },
      ],
    },
    ur: {
      primaryKeyword: "کمپنیوں کے لیے مستقل ورک ویزا",
      secondaryKeywords: ["قوی ورک ویزا", "کمپنی ویزا درخواست", "ورک ویزا تفویض"],
      metaDescription:
        "تسامی کے ساتھ قوی کے ذریعے اداروں کے لیے مستقل ورک ویزا: اہلیت اور نطاقات کا جائزہ، درخواست اور تفویض کا فالو اپ۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "مستقل ورک ویزا مملکت میں اپنے ادارے کے لیے غیر ملکی ملازم لانے کا قانونی راستہ ہے۔ درخواست قوی پلیٹ فارم پر ہوتی ہے اور ادارے کی اہلیت پر منحصر ہے: نطاقات میں درجہ، انشورنس اور اجرت تحفظ کا صاف ریکارڈ، اور سرگرمی کے مطابق پیشے۔ تسامی درخواست سے پہلے ادارے کا جائزہ لیتا اور ویزا درخواست سے بھرتی دفتر کی تفویض اور ملازم کی آمد تک فالو کرتا ہے۔",
      who: [
        "نئے ادارے جو پہلی بار بیرونِ ملک سے ملازم لا رہے ہیں۔",
        "کمپنیاں جنہیں منصوبے یا توسیع کے لیے مزید ملازمین چاہییں۔",
        "ادارے جن کی ویزا درخواست مسترد ہوئی۔",
        "دکان، ریستوران اور ورکشاپ مالکان۔",
      ],
      steps: [
        "درخواست سے پہلے نطاقات، انشورنس اور اجرت ریکارڈ دیکھتے ہیں۔",
        "سرگرمی کے مطابق پیشے اور تعداد طے کرتے ہیں۔",
        "قوی میں ویزا درخواست منظوری تک فالو کرتے ہیں۔",
        "ملازم کے ملک میں بھرتی دفتر کو تفویض فالو کرتے ہیں۔",
        "آمد کے بعد اقامہ اور ورک پرمٹ فالو کرتے ہیں۔",
      ],
      tips: [
        "نطاقات میں سبز درجہ برقرار رکھیں۔",
        "ہر مہینے مدد میں اجرت فائل اپلوڈ کریں۔",
        "سجل کی سرگرمی کے مطابق پیشے منتخب کریں۔",
        "ضرورت سے زیادہ تعداد نہ مانگیں۔",
        "ملازم کی آمد سے پہلے معاہدہ تیار رکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کی واٹس ایپ پر خدمت کرتے ہیں۔",
      faqs: [
        { q: "ویزا منظوری کس پر منحصر ہے؟", a: "زیادہ تر نطاقات درجہ، انشورنس و اجرت تحفظ کی پابندی اور سرگرمی کے مطابق پیشوں پر۔" },
        { q: "کیا آپ ویزا کی ضمانت دیتے ہیں؟", a: "نہیں، فیصلہ سرکاری اداروں کا ہے؛ ہم فائل دیکھ کر مسترد ہونے کی وجوہات کم کرتے ہیں۔" },
        { q: "مستقل اور عارضی ویزا میں فرق؟", a: "مستقل جاری معاہدے اور اقامہ کے لیے، عارضی موسمی کام یا مقررہ مدت کے منصوبوں کے لیے۔" },
        { q: "کیا آمد کے بعد بھی فالو اپ ہے؟", a: "جی ہاں، اقامہ، ورک پرمٹ اور قوی میں معاہدے کی توثیق۔" },
      ],
    },
    hi: {
      primaryKeyword: "कंपनियों के लिए स्थायी वर्क वीज़ा",
      secondaryKeywords: ["क़िवा वर्क वीज़ा", "कंपनी वीज़ा आवेदन", "वर्क वीज़ा प्राधिकरण"],
      metaDescription:
        "तसामी के साथ क़िवा से संस्थानों के लिए स्थायी वर्क वीज़ा: योग्यता और निताक़ात की समीक्षा, आवेदन और प्राधिकरण का फ़ॉलो-अप। हम सरकारी संस्था नहीं हैं।",
      intro:
        "स्थायी वर्क वीज़ा सऊदी अरब में अपने संस्थान के लिए विदेशी कर्मचारी लाने का क़ानूनी रास्ता है। आवेदन क़िवा प्लेटफ़ॉर्म पर होता है और संस्थान की योग्यता पर निर्भर है: निताक़ात में श्रेणी, GOSI और वेतन संरक्षण का साफ़ रिकॉर्ड, और गतिविधि के अनुसार पेशे। तसामी आवेदन से पहले संस्थान की समीक्षा करता और वीज़ा आवेदन से भर्ती दफ़्तर के प्राधिकरण और कर्मचारी के आने तक फ़ॉलो करता है।",
      who: [
        "नए संस्थान जो पहली बार विदेश से कर्मचारी ला रहे हैं।",
        "कंपनियाँ जिन्हें प्रोजेक्ट या विस्तार के लिए और कर्मचारी चाहिए।",
        "संस्थान जिनका वीज़ा आवेदन अस्वीकार हुआ।",
        "दुकान, रेस्टोरेंट और वर्कशॉप मालिक।",
      ],
      steps: [
        "आवेदन से पहले निताक़ात, GOSI और वेतन रिकॉर्ड देखते हैं।",
        "गतिविधि के अनुसार पेशे और संख्या तय करते हैं।",
        "क़िवा में वीज़ा आवेदन मंज़ूरी तक फ़ॉलो करते हैं।",
        "कर्मचारी के देश में भर्ती दफ़्तर को प्राधिकरण फ़ॉलो करते हैं।",
        "आने के बाद इक़ामा और वर्क परमिट फ़ॉलो करते हैं।",
      ],
      tips: [
        "निताक़ात में हरी श्रेणी बनाए रखें।",
        "हर महीने मुदद में वेतन फ़ाइल अपलोड करें।",
        "CR गतिविधि के अनुसार पेशे चुनें।",
        "ज़रूरत से ज़्यादा संख्या न माँगें।",
        "कर्मचारी के आने से पहले अनुबंध तैयार रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों की व्हाट्सऐप पर सेवा करते हैं।",
      faqs: [
        { q: "वीज़ा मंज़ूरी किस पर निर्भर है?", a: "मुख्यतः निताक़ात श्रेणी, GOSI व वेतन संरक्षण के पालन और गतिविधि के अनुसार पेशों पर।" },
        { q: "क्या आप वीज़ा की गारंटी देते हैं?", a: "नहीं, फ़ैसला सरकारी संस्थाओं का है; हम फ़ाइल देखकर अस्वीकृति के कारण कम करते हैं।" },
        { q: "स्थायी और अस्थायी वीज़ा में फ़र्क़?", a: "स्थायी लगातार अनुबंध और इक़ामा के लिए, अस्थायी मौसमी काम या तय अवधि के प्रोजेक्ट के लिए।" },
        { q: "क्या आने के बाद भी फ़ॉलो-अप है?", a: "हाँ, इक़ामा, वर्क परमिट और क़िवा में अनुबंध प्रमाणन।" },
      ],
    },
  },

  workVisaTemporary: {
    ar: {
      primaryKeyword: "تأشيرة عمل مؤقت",
      secondaryKeywords: ["تأشيرة عمل موسمي", "تأشيرة عمل مؤقتة قوى", "عمالة مؤقتة للمشاريع", "تأشيرة عمل موسم الحج والعمرة"],
      metaDescription:
        "تأشيرة العمل المؤقت للمنشآت مع تسامي: نراجع أهلية النشاط ونتابع الطلب عبر قوى للأعمال الموسمية والمشاريع محددة المدة. لسنا جهة حكومية.",
      intro:
        "تأشيرة العمل المؤقت تناسب المنشآت التي تحتاج عمالة لفترة محددة فقط: موسم الحج والعمرة، أو مشروع إنشائي، أو أعمال موسمية في الزراعة والضيافة. بدلاً من استقدام دائم بإقامة، تتيح هذه التأشيرة تشغيل العامل للمدة التي يحتاجها المشروع وفق الأنشطة المسموحة. تسامي تتأكد من أن نشاط منشأتك مؤهل، وتتابع الطلب عبر قوى، وتوضح لك التزاماتك تجاه العامل خلال فترة عمله.",
      who: [
        "منشآت الضيافة والنقل والإعاشة في مواسم الحج والعمرة.",
        "شركات المقاولات التي تحتاج عمالة لمشروع محدد المدة.",
        "المنشآت الزراعية في مواسم الحصاد.",
        "منظمو الفعاليات والمعارض المؤقتة.",
      ],
      steps: [
        "نتأكد من أن نشاط منشأتك ضمن الأنشطة المسموح لها بالتأشيرات المؤقتة.",
        "نحدد عدد العمالة والمهن ومدة الحاجة الفعلية.",
        "نتابع رفع الطلب في قوى حتى الاعتماد.",
        "نتابع التفويض وإجراءات الاستقدام.",
        "نوضح لك التزامات السكن والأجر والمغادرة بعد انتهاء المدة.",
      ],
      tips: [
        "ابدأ مبكراً قبل الموسم بوقت كافٍ لتجنب الزحام.",
        "حدد مدة الحاجة بدقة حسب خطة المشروع.",
        "جهّز السكن والنقل المناسبين للعمالة قبل وصولها.",
        "تأكد من مغادرة العامل بعد انتهاء التأشيرة لتجنب المخالفات.",
        "احتفظ بعقود واضحة تحدد المدة والأجر والمهام.",
      ],
      local:
        "نخدم منشآت مكة المكرمة والمدينة المنورة وجدة والرياض والدمام وكل مدن المملكة، خاصة قبل مواسم الحج والعمرة.",
      faqs: [
        { q: "هل كل الأنشطة يمكنها طلب تأشيرة مؤقتة؟", a: "لا، التأشيرات المؤقتة متاحة لأنشطة محددة وفق الأنظمة، ونتحقق من نشاطك قبل التقديم." },
        { q: "هل يحصل العامل المؤقت على إقامة؟", a: "عادة لا، فهو يعمل بموجب التأشيرة المؤقتة للمدة المحددة ثم يغادر." },
        { q: "هل يمكن تمديد التأشيرة المؤقتة؟", a: "يعتمد ذلك على نوع التأشيرة والأنظمة السارية، ونوضح لك الخيارات المتاحة لحالتك." },
        { q: "هل تضمنون صدور التأشيرات؟", a: "لا، القرار للجهات الرسمية، ونحن نتابع الطلب ونراجع الملف لتقليل أسباب الرفض." },
      ],
    },
    en: {
      primaryKeyword: "temporary work visa in Saudi Arabia",
      secondaryKeywords: ["seasonal work visa", "Qiwa temporary visa", "temporary workers for projects", "Hajj and Umrah season work visa"],
      metaDescription:
        "Temporary work visas for businesses with Tasami: we check activity eligibility and follow the Qiwa request for seasonal work and fixed-term projects. Not a government entity.",
      intro:
        "A temporary work visa suits businesses that need workers for a limited period only: the Hajj and Umrah season, a construction project or seasonal work in agriculture and hospitality. Instead of permanent recruitment with an iqama, this visa allows the worker to be employed for the period the project needs, within permitted activities. Tasami confirms your activity is eligible, follows the request on Qiwa and explains your obligations toward the worker during the work period.",
      who: [
        "Hospitality, transport and catering businesses during Hajj and Umrah seasons.",
        "Contractors needing workers for a fixed-term project.",
        "Agricultural businesses during harvest seasons.",
        "Organizers of temporary events and exhibitions.",
      ],
      steps: [
        "We confirm your activity is among those permitted temporary visas.",
        "We define worker numbers, professions and the actual period needed.",
        "We follow the Qiwa request until approval.",
        "We follow the authorization and recruitment procedures.",
        "We explain housing, wage and departure obligations after the period ends.",
      ],
      tips: [
        "Start well before the season to avoid peak pressure.",
        "Define the period precisely according to the project plan.",
        "Prepare suitable housing and transport before workers arrive.",
        "Ensure workers depart when the visa ends to avoid violations.",
        "Keep clear contracts stating period, wage and duties.",
      ],
      local:
        "We serve businesses in Makkah, Madinah, Jeddah, Riyadh, Dammam and every Saudi city, especially before Hajj and Umrah seasons.",
      faqs: [
        { q: "Can every activity request a temporary visa?", a: "No, temporary visas are available to specific activities under the regulations; we check yours before applying." },
        { q: "Does a temporary worker get an iqama?", a: "Usually not; they work under the temporary visa for the set period and then depart." },
        { q: "Can a temporary visa be extended?", a: "It depends on the visa type and current regulations; we explain the options for your case." },
        { q: "Do you guarantee the visas?", a: "No, the decision belongs to official authorities; we follow the request and review the file to reduce rejection reasons." },
      ],
    },
    ur: {
      primaryKeyword: "عارضی ورک ویزا",
      secondaryKeywords: ["موسمی ورک ویزا", "قوی عارضی ویزا", "حج و عمرہ سیزن ورک ویزا"],
      metaDescription:
        "تسامی کے ساتھ اداروں کے لیے عارضی ورک ویزا: سرگرمی کی اہلیت کی جانچ اور موسمی کام و مقررہ مدت کے منصوبوں کے لیے قوی درخواست کا فالو اپ۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "عارضی ورک ویزا ان اداروں کے لیے ہے جنہیں صرف محدود مدت کے لیے کارکن چاہییں: حج و عمرہ کا موسم، تعمیراتی منصوبہ، یا زراعت اور مہمان نوازی کا موسمی کام۔ اقامہ کے ساتھ مستقل بھرتی کے بجائے یہ ویزا اجازت یافتہ سرگرمیوں میں منصوبے کی مدت تک کام کی اجازت دیتا ہے۔ تسامی سرگرمی کی اہلیت دیکھ کر قوی پر درخواست فالو کرتا اور کارکن کے بارے میں آپ کی ذمہ داریاں بتاتا ہے۔",
      who: [
        "حج و عمرہ کے موسم میں مہمان نوازی، ٹرانسپورٹ اور کیٹرنگ ادارے۔",
        "مقررہ مدت کے منصوبے کے لیے ٹھیکیدار۔",
        "فصل کے موسم میں زرعی ادارے۔",
        "عارضی تقریبات اور نمائشوں کے منتظمین۔",
      ],
      steps: [
        "تصدیق کرتے ہیں کہ سرگرمی عارضی ویزا کے لیے اجازت یافتہ ہے۔",
        "کارکنوں کی تعداد، پیشے اور اصل مدت طے کرتے ہیں۔",
        "قوی میں درخواست منظوری تک فالو کرتے ہیں۔",
        "تفویض اور بھرتی کے مراحل فالو کرتے ہیں۔",
        "رہائش، اجرت اور مدت ختم ہونے پر روانگی کی ذمہ داریاں بتاتے ہیں۔",
      ],
      tips: [
        "موسم سے کافی پہلے شروع کریں۔",
        "منصوبے کے مطابق مدت درست طے کریں۔",
        "کارکنوں کی آمد سے پہلے رہائش اور ٹرانسپورٹ تیار رکھیں۔",
        "خلاف ورزی سے بچنے کے لیے ویزا ختم ہونے پر روانگی یقینی بنائیں۔",
        "مدت، اجرت اور کام واضح معاہدے میں لکھیں۔",
      ],
      local:
        "ہم مکہ، مدینہ، جدہ، ریاض، دمام اور ہر شہر کے اداروں کی خدمت کرتے ہیں، خاص طور پر حج و عمرہ سے پہلے۔",
      faqs: [
        { q: "کیا ہر سرگرمی عارضی ویزا لے سکتی ہے؟", a: "نہیں، یہ ضوابط کے تحت مخصوص سرگرمیوں کے لیے ہے؛ ہم پہلے جانچ کرتے ہیں۔" },
        { q: "کیا عارضی کارکن کو اقامہ ملتا ہے؟", a: "عموماً نہیں؛ وہ مقررہ مدت کام کر کے واپس جاتا ہے۔" },
        { q: "کیا عارضی ویزا میں توسیع ہو سکتی ہے؟", a: "یہ ویزا کی قسم اور موجودہ ضوابط پر منحصر ہے؛ ہم آپشنز بتاتے ہیں۔" },
        { q: "کیا آپ ویزا کی ضمانت دیتے ہیں؟", a: "نہیں، فیصلہ سرکاری اداروں کا ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "अस्थायी वर्क वीज़ा",
      secondaryKeywords: ["मौसमी वर्क वीज़ा", "क़िवा अस्थायी वीज़ा", "हज और उमरा सीज़न वर्क वीज़ा"],
      metaDescription:
        "तसामी के साथ संस्थानों के लिए अस्थायी वर्क वीज़ा: गतिविधि की योग्यता जाँच और मौसमी काम व तय अवधि के प्रोजेक्ट के लिए क़िवा आवेदन का फ़ॉलो-अप। हम सरकारी संस्था नहीं हैं।",
      intro:
        "अस्थायी वर्क वीज़ा उन संस्थानों के लिए है जिन्हें सिर्फ़ सीमित अवधि के लिए कामगार चाहिए: हज और उमरा का मौसम, निर्माण प्रोजेक्ट, या खेती और आतिथ्य का मौसमी काम। इक़ामा के साथ स्थायी भर्ती की जगह यह वीज़ा अनुमत गतिविधियों में प्रोजेक्ट की अवधि तक काम की अनुमति देता है। तसामी गतिविधि की योग्यता देखकर क़िवा पर आवेदन फ़ॉलो करता और कामगार के प्रति आपकी ज़िम्मेदारियाँ बताता है।",
      who: [
        "हज और उमरा मौसम में आतिथ्य, परिवहन और कैटरिंग संस्थान।",
        "तय अवधि के प्रोजेक्ट के लिए ठेकेदार।",
        "फ़सल के मौसम में कृषि संस्थान।",
        "अस्थायी कार्यक्रमों और प्रदर्शनियों के आयोजक।",
      ],
      steps: [
        "पुष्टि करते हैं कि गतिविधि अस्थायी वीज़ा के लिए अनुमत है।",
        "कामगारों की संख्या, पेशे और असली अवधि तय करते हैं।",
        "क़िवा में आवेदन मंज़ूरी तक फ़ॉलो करते हैं।",
        "प्राधिकरण और भर्ती के चरण फ़ॉलो करते हैं।",
        "आवास, वेतन और अवधि ख़त्म होने पर वापसी की ज़िम्मेदारियाँ बताते हैं।",
      ],
      tips: [
        "मौसम से काफ़ी पहले शुरू करें।",
        "प्रोजेक्ट के अनुसार अवधि सटीक तय करें।",
        "कामगारों के आने से पहले आवास और परिवहन तैयार रखें।",
        "उल्लंघन से बचने के लिए वीज़ा ख़त्म होने पर वापसी पक्की करें।",
        "अवधि, वेतन और काम साफ़ अनुबंध में लिखें।",
      ],
      local:
        "हम मक्का, मदीना, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों की सेवा करते हैं, ख़ासकर हज और उमरा से पहले।",
      faqs: [
        { q: "क्या हर गतिविधि अस्थायी वीज़ा ले सकती है?", a: "नहीं, यह नियमों के तहत ख़ास गतिविधियों के लिए है; हम पहले जाँचते हैं।" },
        { q: "क्या अस्थायी कामगार को इक़ामा मिलता है?", a: "आमतौर पर नहीं; वह तय अवधि काम कर लौटता है।" },
        { q: "क्या अस्थायी वीज़ा बढ़ सकता है?", a: "यह वीज़ा के प्रकार और मौजूदा नियमों पर निर्भर है; हम विकल्प बताते हैं।" },
        { q: "क्या आप वीज़ा की गारंटी देते हैं?", a: "नहीं, फ़ैसला सरकारी संस्थाओं का है।" },
      ],
    },
  },

  vatFiling: {
    ar: {
      primaryKeyword: "تقديم إقرار ضريبة القيمة المضافة",
      secondaryKeywords: ["رفع إقرار الضريبة", "التسجيل في ضريبة القيمة المضافة", "إقرار ضريبي هيئة الزكاة", "محاسب ضريبة قيمة مضافة"],
      metaDescription:
        "تقديم إقرار ضريبة القيمة المضافة عبر بوابة هيئة الزكاة والضريبة والجمارك مع تسامي: نراجع المبيعات والمشتريات ونتابع الرفع في موعده. لسنا جهة حكومية.",
      intro:
        "كل منشأة مسجلة في ضريبة القيمة المضافة ملزمة بتقديم إقرار دوري عبر بوابة هيئة الزكاة والضريبة والجمارك، شهرياً أو ربع سنوي حسب حجم إيراداتها. الإقرار يجمع ضريبة المبيعات وضريبة المشتريات القابلة للخصم، وأي خطأ أو تأخير قد يعرّض المنشأة لغرامات. تسامي تساعدك في ترتيب الفواتير ومراجعة الأرقام ورفع الإقرار في موعده، وتوضح لك ما يجب الاحتفاظ به من مستندات.",
      who: [
        "المنشآت الصغيرة والمتوسطة التي لا يوجد لديها محاسب متفرغ.",
        "المنشآت التي وصلت مبيعاتها لحد التسجيل الإلزامي وتحتاج التسجيل.",
        "المتاجر الإلكترونية والمطاعم والمحلات التي تصدر فواتير يومية.",
        "من تأخر في تقديم إقرارات سابقة ويريد تنظيم وضعه.",
      ],
      steps: [
        "نتأكد من وضع التسجيل الضريبي للمنشأة وفترة الإقرار.",
        "نجمع فواتير المبيعات والمشتريات للفترة ونراجعها.",
        "نحسب الضريبة المستحقة والقابلة للخصم ونراجع الأرقام معك.",
        "نتابع رفع الإقرار في بوابة الهيئة قبل الموعد النظامي.",
        "نوضح لك طريقة السداد عبر القنوات الرسمية ونحفظ نسخة من الإقرار.",
      ],
      tips: [
        "سجّل كل فاتورة شراء ضريبية، فهي تخفض الضريبة المستحقة عليك.",
        "لا تنتظر آخر يوم في المهلة؛ ابدأ بمجرد انتهاء الفترة.",
        "استخدم نظام فوترة إلكترونية متوافق لتسهيل الإقرار.",
        "احتفظ بالفواتير والسجلات للمدة التي تحددها الأنظمة.",
        "راجع الفواتير المستلمة والتأكد من وجود الرقم الضريبي للمورد.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، ونستلم المستندات إلكترونياً عبر واتساب.",
      faqs: [
        { q: "متى أقدم الإقرار شهرياً ومتى ربع سنوي؟", a: "يعتمد على حجم الإيرادات السنوية وفق تعليمات الهيئة. نتحقق من فترة منشأتك في البوابة." },
        { q: "هل تدفعون الضريبة نيابة عني؟", a: "لا، السداد يتم من حساب منشأتك عبر القنوات الرسمية، ونحن نتابع إعداد الإقرار ورفعه." },
        { q: "ماذا لو تأخرت في إقرار سابق؟", a: "نساعدك في ترتيب المستندات ورفع الإقرارات المتأخرة بأسرع وقت لتقليل الأثر." },
        { q: "هل تساعدون في التسجيل الضريبي لأول مرة؟", a: "نعم، نتابع التسجيل في ضريبة القيمة المضافة إذا كانت منشأتك ملزمة أو ترغب بالتسجيل الاختياري." },
      ],
    },
    en: {
      primaryKeyword: "VAT return filing in Saudi Arabia",
      secondaryKeywords: ["submit VAT return ZATCA", "VAT registration KSA", "ZATCA tax return", "VAT accountant Saudi"],
      metaDescription:
        "VAT return filing through the ZATCA portal with Tasami: we review sales and purchases and follow submission on time. Not a government entity.",
      intro:
        "Every VAT-registered business must file a periodic return on the Zakat, Tax and Customs Authority (ZATCA) portal, monthly or quarterly depending on its revenue. The return combines output VAT on sales and deductible input VAT on purchases, and any error or delay can expose the business to penalties. Tasami helps you organize invoices, review the figures and submit the return on time, and explains which documents to keep.",
      who: [
        "Small and medium businesses without a full-time accountant.",
        "Businesses whose sales reached the mandatory registration threshold.",
        "Online stores, restaurants and shops issuing daily invoices.",
        "Anyone late on previous returns who wants to regularize.",
      ],
      steps: [
        "We confirm the business's VAT registration and filing period.",
        "We collect and review sales and purchase invoices for the period.",
        "We calculate output and deductible VAT and review the figures with you.",
        "We follow submission on the ZATCA portal before the deadline.",
        "We explain payment through official channels and keep a copy of the return.",
      ],
      tips: [
        "Record every tax purchase invoice; it reduces the VAT you owe.",
        "Do not wait for the last day; start once the period ends.",
        "Use a compliant e-invoicing system to simplify filing.",
        "Keep invoices and records for the period required by regulations.",
        "Check received invoices show the supplier's VAT number.",
      ],
      local:
        "We serve businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, receiving documents electronically on WhatsApp.",
      faqs: [
        { q: "Monthly or quarterly filing?", a: "It depends on annual revenue under ZATCA rules. We check your period on the portal." },
        { q: "Do you pay the tax for me?", a: "No, payment is made from your business account through official channels; we prepare and submit the return." },
        { q: "What if I missed a previous return?", a: "We help organize documents and submit late returns as soon as possible to limit the impact." },
        { q: "Do you help with first-time VAT registration?", a: "Yes, we follow VAT registration whether mandatory or voluntary." },
      ],
    },
    ur: {
      primaryKeyword: "ویلیو ایڈڈ ٹیکس ریٹرن جمع کرانا",
      secondaryKeywords: ["VAT ریٹرن زاٹکا", "VAT رجسٹریشن", "ٹیکس ریٹرن سعودی"],
      metaDescription:
        "تسامی کے ساتھ زاٹکا پورٹل پر VAT ریٹرن: سیلز اور خریداری کا جائزہ اور بروقت جمع کرانے کا فالو اپ۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "VAT میں رجسٹرڈ ہر ادارے کو زکاۃ، ٹیکس و کسٹمز اتھارٹی کے پورٹل پر آمدنی کے مطابق ماہانہ یا سہ ماہی ریٹرن جمع کرانا ہوتا ہے۔ ریٹرن میں سیلز کا ٹیکس اور خریداری کا قابلِ کٹوتی ٹیکس شامل ہوتا ہے، اور غلطی یا تاخیر سے جرمانہ ہو سکتا ہے۔ تسامی انوائسز ترتیب دینے، اعداد کا جائزہ لینے اور بروقت ریٹرن جمع کرانے میں مدد کرتا ہے۔",
      who: [
        "چھوٹے اور درمیانے ادارے جن کے پاس کل وقتی اکاؤنٹنٹ نہیں۔",
        "ادارے جن کی سیلز لازمی رجسٹریشن کی حد تک پہنچ گئی۔",
        "آن لائن اسٹورز، ریستوران اور دکانیں۔",
        "جو پچھلے ریٹرن میں تاخیر کر چکے ہیں۔",
      ],
      steps: [
        "ادارے کی ٹیکس رجسٹریشن اور ریٹرن کی مدت دیکھتے ہیں۔",
        "مدت کی سیلز اور خریداری انوائسز جمع کر کے جائزہ لیتے ہیں۔",
        "واجب اور قابلِ کٹوتی ٹیکس کا حساب آپ کے ساتھ دیکھتے ہیں۔",
        "آخری تاریخ سے پہلے پورٹل پر ریٹرن جمع کرانا فالو کرتے ہیں۔",
        "سرکاری ذرائع سے ادائیگی کا طریقہ بتا کر نقل محفوظ کرتے ہیں۔",
      ],
      tips: [
        "ہر ٹیکس خریداری انوائس درج کریں؛ اس سے واجب ٹیکس کم ہوتا ہے۔",
        "آخری دن کا انتظار نہ کریں۔",
        "موزوں ای انوائسنگ سسٹم استعمال کریں۔",
        "انوائسز اور ریکارڈ ضوابط کی مدت تک رکھیں۔",
        "سپلائر کا ٹیکس نمبر انوائس پر چیک کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور ہر شہر کے اداروں کی خدمت کرتے ہیں اور کاغذات واٹس ایپ پر لیتے ہیں۔",
      faqs: [
        { q: "ماہانہ یا سہ ماہی ریٹرن؟", a: "یہ سالانہ آمدنی پر منحصر ہے؛ ہم پورٹل پر آپ کی مدت دیکھتے ہیں۔" },
        { q: "کیا آپ میری طرف سے ٹیکس ادا کرتے ہیں؟", a: "نہیں، ادائیگی ادارے کے اکاؤنٹ سے سرکاری ذرائع سے ہوتی ہے۔" },
        { q: "اگر پچھلا ریٹرن رہ گیا ہو؟", a: "ہم کاغذات ترتیب دے کر جلد از جلد تاخیر شدہ ریٹرن جمع کراتے ہیں۔" },
        { q: "کیا پہلی بار VAT رجسٹریشن میں مدد کرتے ہیں؟", a: "جی ہاں، لازمی یا اختیاری رجسٹریشن دونوں۔" },
      ],
    },
    hi: {
      primaryKeyword: "VAT रिटर्न फ़ाइल करना",
      secondaryKeywords: ["ZATCA VAT रिटर्न", "VAT रजिस्ट्रेशन", "सऊदी टैक्स रिटर्न"],
      metaDescription:
        "तसामी के साथ ZATCA पोर्टल पर VAT रिटर्न: सेल्स और ख़रीद की समीक्षा और समय पर जमा करने का फ़ॉलो-अप। हम सरकारी संस्था नहीं हैं।",
      intro:
        "VAT में रजिस्टर्ड हर संस्थान को ज़कात, टैक्स और कस्टम्स प्राधिकरण (ZATCA) के पोर्टल पर आय के अनुसार मासिक या तिमाही रिटर्न जमा करना होता है। रिटर्न में बिक्री का टैक्स और ख़रीद का घटाने योग्य टैक्स शामिल होता है, और ग़लती या देरी से जुर्माना हो सकता है। तसामी इनवॉइस व्यवस्थित करने, आँकड़े जाँचने और समय पर रिटर्न जमा करने में मदद करता है।",
      who: [
        "छोटे और मध्यम संस्थान जिनके पास पूर्णकालिक अकाउंटेंट नहीं।",
        "संस्थान जिनकी बिक्री अनिवार्य रजिस्ट्रेशन सीमा तक पहुँची।",
        "ऑनलाइन स्टोर, रेस्टोरेंट और दुकानें।",
        "जो पिछले रिटर्न में देर कर चुके हैं।",
      ],
      steps: [
        "संस्थान का टैक्स रजिस्ट्रेशन और रिटर्न अवधि देखते हैं।",
        "अवधि की बिक्री और ख़रीद इनवॉइस जमा कर जाँचते हैं।",
        "देय और घटाने योग्य टैक्स का हिसाब आपके साथ देखते हैं।",
        "अंतिम तिथि से पहले पोर्टल पर रिटर्न जमा करना फ़ॉलो करते हैं।",
        "आधिकारिक माध्यम से भुगतान का तरीक़ा बताकर कॉपी सुरक्षित रखते हैं।",
      ],
      tips: [
        "हर टैक्स ख़रीद इनवॉइस दर्ज करें; इससे देय टैक्स घटता है।",
        "आख़िरी दिन का इंतज़ार न करें।",
        "अनुरूप ई-इनवॉइसिंग सिस्टम इस्तेमाल करें।",
        "इनवॉइस और रिकॉर्ड नियमों की अवधि तक रखें।",
        "सप्लायर का टैक्स नंबर इनवॉइस पर जाँचें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों की सेवा करते हैं और दस्तावेज़ व्हाट्सऐप पर लेते हैं।",
      faqs: [
        { q: "मासिक या तिमाही रिटर्न?", a: "यह सालाना आय पर निर्भर है; हम पोर्टल पर आपकी अवधि देखते हैं।" },
        { q: "क्या आप मेरी तरफ़ से टैक्स भरते हैं?", a: "नहीं, भुगतान संस्थान के खाते से आधिकारिक माध्यम से होता है।" },
        { q: "अगर पिछला रिटर्न छूट गया हो?", a: "हम दस्तावेज़ व्यवस्थित कर जल्द से जल्द देर वाले रिटर्न जमा करते हैं।" },
        { q: "क्या पहली बार VAT रजिस्ट्रेशन में मदद करते हैं?", a: "हाँ, अनिवार्य या वैकल्पिक दोनों।" },
      ],
    },
  },

  socialInsuranceReg: {
    ar: {
      primaryKeyword: "تسجيل منشأة في التأمينات الاجتماعية",
      secondaryKeywords: ["تسجيل موظف في التأمينات", "تعديل أجر في التأمينات", "استبعاد موظف من التأمينات", "تعقيب التأمينات الاجتماعية"],
      metaDescription:
        "تسجيل المنشأة والموظفين في التأمينات الاجتماعية عبر منصة تأمينات أعمال مع تسامي: تسجيل، تعديل أجور، استبعاد، ومتابعة الاشتراكات. لسنا جهة حكومية.",
      intro:
        "التسجيل في المؤسسة العامة للتأمينات الاجتماعية شرط أساسي لأي منشأة لديها موظفون، سواء سعوديين أو مقيمين. يشمل ذلك تسجيل المنشأة نفسها، ثم تسجيل كل موظف بأجره الصحيح، وتحديث البيانات عند تغيّر الأجر أو انتهاء العلاقة. الأخطاء هنا تؤثر على نطاقات المنشأة وحماية الأجور وقد تسبب غرامات. تسامي تتابع معك هذه الإجراءات عبر منصة تأمينات أعمال بدقة.",
      who: [
        "المنشآت الجديدة التي توظف أول موظف.",
        "المنشآت التي تحتاج تسجيل موظفين جدد أو تعديل أجورهم.",
        "من لديه موظف ترك العمل ويحتاج استبعاده.",
        "المنشآت التي لديها فروقات بين التأمينات وملف الأجور.",
      ],
      steps: [
        "نراجع وضع المنشأة وحسابها في منصة تأمينات أعمال.",
        "نتابع تسجيل المنشأة إن لم تكن مسجلة.",
        "نتابع تسجيل الموظفين بأجورهم الفعلية وتواريخ التحاقهم.",
        "نتابع تعديل الأجور أو استبعاد من انتهت علاقته بالمنشأة.",
        "نراجع فاتورة الاشتراكات الشهرية ونوضح لك طريقة السداد.",
      ],
      tips: [
        "سجّل الموظف بأجره الحقيقي المطابق لعقده وملف حماية الأجور.",
        "حدّث بيانات الموظف فور تغيّر أجره أو انتهاء عقده.",
        "سدّد الاشتراكات في موعدها لتجنب الغرامات.",
        "راجع تطابق عدد الموظفين بين التأمينات وقوى ومدد.",
        "احتفظ بنسخ العقود ومسيرات الرواتب.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، والمتابعة عبر واتساب.",
      faqs: [
        { q: "هل يجب تسجيل الموظف المقيم في التأمينات؟", a: "نعم، الموظفون المقيمون يُسجلون أيضاً وفق الفروع التأمينية المطبقة عليهم." },
        { q: "ماذا يحدث إذا سُجّل الأجر بشكل خاطئ؟", a: "يسبب فروقات مع حماية الأجور وقد يؤثر على المنشأة، لذلك نتابع تصحيحه عبر المنصة." },
        { q: "هل تسددون الاشتراكات عني؟", a: "لا، السداد من حساب المنشأة عبر القنوات الرسمية، ونحن نتابع الإجراءات فقط." },
        { q: "هل تتابعون استبعاد موظف غادر نهائياً؟", a: "نعم، نتابع استبعاده بتاريخ انتهاء العلاقة الصحيح." },
        { q: "هل تؤثر التأمينات على نطاقات المنشأة؟", a: "نعم، احتساب الموظفين في نطاقات يعتمد على تسجيلهم الصحيح في التأمينات، لذلك نراجع التطابق بين المنصات." },
      ],
    },
    en: {
      primaryKeyword: "GOSI registration for businesses in Saudi Arabia",
      secondaryKeywords: ["register employee in GOSI", "update wage in GOSI", "remove employee from GOSI", "GOSI follow-up service"],
      metaDescription:
        "Register your business and employees with GOSI through the Taminat Business platform with Tasami: registration, wage updates, exclusions and contribution follow-up. Not a government entity.",
      intro:
        "Registering with the General Organization for Social Insurance (GOSI) is essential for any business with employees, Saudi or expatriate. It covers registering the establishment, then every employee with the correct wage, and updating records when wages change or employment ends. Mistakes here affect Nitaqat and wage protection and may cause penalties. Tasami follows these procedures carefully through the Taminat Business platform.",
      who: [
        "New businesses hiring their first employee.",
        "Businesses needing to register new employees or update wages.",
        "Anyone with an employee who left and needs to be excluded.",
        "Businesses with mismatches between GOSI and wage files.",
      ],
      steps: [
        "We review the establishment's status and account on Taminat Business.",
        "We follow establishment registration if not registered.",
        "We follow employee registration with actual wages and joining dates.",
        "We follow wage updates or exclusion of employees who left.",
        "We review the monthly contribution invoice and explain payment.",
      ],
      tips: [
        "Register the actual wage matching the contract and wage-protection file.",
        "Update employee records as soon as the wage or contract changes.",
        "Pay contributions on time to avoid penalties.",
        "Check employee counts match across GOSI, Qiwa and Mudad.",
        "Keep copies of contracts and payrolls.",
      ],
      local:
        "We serve businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, with follow-up on WhatsApp.",
      faqs: [
        { q: "Must expatriate employees be registered?", a: "Yes, expatriates are registered too under the insurance branches that apply to them." },
        { q: "What if the wage was registered incorrectly?", a: "It causes mismatches with wage protection and may affect the business, so we follow its correction on the platform." },
        { q: "Do you pay contributions for me?", a: "No, payment is from the business account through official channels; we follow the procedures only." },
        { q: "Do you follow exclusion of an employee who left?", a: "Yes, we follow the exclusion with the correct end date." },
      ],
    },
    ur: {
      primaryKeyword: "سوشل انشورنس (گوسی) میں ادارے کی رجسٹریشن",
      secondaryKeywords: ["ملازم کی گوسی رجسٹریشن", "گوسی میں اجرت تبدیل", "گوسی سے ملازم خارج"],
      metaDescription:
        "تسامی کے ساتھ تأمینات اعمال پلیٹ فارم پر ادارے اور ملازمین کی گوسی رجسٹریشن: رجسٹریشن، اجرت میں تبدیلی، اخراج اور اشتراکات کا فالو اپ۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "سوشل انشورنس (گوسی) میں رجسٹریشن ہر اس ادارے کے لیے ضروری ہے جس کے ملازمین ہوں، سعودی ہوں یا مقیم۔ اس میں ادارے کی رجسٹریشن، ہر ملازم کی درست اجرت کے ساتھ رجسٹریشن، اور اجرت بدلنے یا ملازمت ختم ہونے پر اپ ڈیٹ شامل ہے۔ یہاں غلطیاں نطاقات اور اجرت تحفظ پر اثر ڈالتی ہیں۔ تسامی یہ مراحل احتیاط سے فالو کرتا ہے۔",
      who: [
        "نئے ادارے جو پہلا ملازم رکھ رہے ہیں۔",
        "ادارے جنہیں نئے ملازم رجسٹر یا اجرت تبدیل کرنی ہے۔",
        "جن کا ملازم چھوڑ گیا اور خارج کرنا ہے۔",
        "جن کے گوسی اور اجرت فائل میں فرق ہے۔",
      ],
      steps: [
        "تأمینات اعمال پر ادارے کا اکاؤنٹ دیکھتے ہیں۔",
        "رجسٹرڈ نہ ہو تو ادارے کی رجسٹریشن فالو کرتے ہیں۔",
        "ملازمین کو اصل اجرت اور شمولیت کی تاریخ کے ساتھ رجسٹر کرواتے ہیں۔",
        "اجرت میں تبدیلی یا اخراج فالو کرتے ہیں۔",
        "ماہانہ اشتراک کا بل دیکھ کر ادائیگی کا طریقہ بتاتے ہیں۔",
      ],
      tips: [
        "معاہدے اور اجرت فائل کے مطابق اصل اجرت درج کریں۔",
        "اجرت یا معاہدہ بدلتے ہی اپ ڈیٹ کریں۔",
        "جرمانے سے بچنے کے لیے بروقت اشتراک ادا کریں۔",
        "گوسی، قوی اور مدد میں ملازمین کی تعداد یکساں رکھیں۔",
        "معاہدوں اور تنخواہ شیٹس کی نقول رکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور ہر شہر کے اداروں کی واٹس ایپ پر خدمت کرتے ہیں۔",
      faqs: [
        { q: "کیا مقیم ملازم کی رجسٹریشن ضروری ہے؟", a: "جی ہاں، ان پر لاگو انشورنس شاخوں کے مطابق۔" },
        { q: "اگر اجرت غلط درج ہو جائے؟", a: "اجرت تحفظ سے فرق پیدا ہوتا ہے؛ ہم پلیٹ فارم پر درستگی فالو کرتے ہیں۔" },
        { q: "کیا آپ اشتراکات ادا کرتے ہیں؟", a: "نہیں، ادائیگی ادارے کے اکاؤنٹ سے سرکاری ذرائع سے ہوتی ہے۔" },
        { q: "کیا چھوڑنے والے ملازم کا اخراج فالو کرتے ہیں؟", a: "جی ہاں، درست تاریخ کے ساتھ۔" },
      ],
    },
    hi: {
      primaryKeyword: "GOSI में संस्थान का रजिस्ट्रेशन",
      secondaryKeywords: ["कर्मचारी का GOSI रजिस्ट्रेशन", "GOSI में वेतन बदलना", "GOSI से कर्मचारी हटाना"],
      metaDescription:
        "तसामी के साथ तअमीनात अमाल प्लेटफ़ॉर्म पर संस्थान और कर्मचारियों का GOSI रजिस्ट्रेशन: रजिस्ट्रेशन, वेतन बदलाव, हटाना और अंशदान का फ़ॉलो-अप। हम सरकारी संस्था नहीं हैं।",
      intro:
        "सामाजिक बीमा (GOSI) में रजिस्ट्रेशन हर उस संस्थान के लिए ज़रूरी है जिसके कर्मचारी हों, सऊदी या प्रवासी। इसमें संस्थान का रजिस्ट्रेशन, हर कर्मचारी का सही वेतन के साथ रजिस्ट्रेशन, और वेतन बदलने या नौकरी ख़त्म होने पर अपडेट शामिल है। यहाँ ग़लतियाँ निताक़ात और वेतन संरक्षण पर असर डालती हैं। तसामी ये प्रक्रियाएँ सावधानी से फ़ॉलो करता है।",
      who: [
        "नए संस्थान जो पहला कर्मचारी रख रहे हैं।",
        "संस्थान जिन्हें नए कर्मचारी रजिस्टर या वेतन बदलना है।",
        "जिनका कर्मचारी छोड़ गया और हटाना है।",
        "जिनके GOSI और वेतन फ़ाइल में अंतर है।",
      ],
      steps: [
        "तअमीनात अमाल पर संस्थान का अकाउंट देखते हैं।",
        "रजिस्टर्ड न हो तो संस्थान का रजिस्ट्रेशन फ़ॉलो करते हैं।",
        "कर्मचारियों को असली वेतन और जुड़ने की तारीख़ के साथ रजिस्टर कराते हैं।",
        "वेतन बदलाव या हटाना फ़ॉलो करते हैं।",
        "मासिक अंशदान बिल देखकर भुगतान का तरीक़ा बताते हैं।",
      ],
      tips: [
        "अनुबंध और वेतन फ़ाइल के अनुसार असली वेतन दर्ज करें।",
        "वेतन या अनुबंध बदलते ही अपडेट करें।",
        "जुर्माने से बचने के लिए समय पर अंशदान दें।",
        "GOSI, क़िवा और मुदद में कर्मचारियों की संख्या एक जैसी रखें।",
        "अनुबंधों और वेतन शीट की कॉपी रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों की व्हाट्सऐप पर सेवा करते हैं।",
      faqs: [
        { q: "क्या प्रवासी कर्मचारी का रजिस्ट्रेशन ज़रूरी है?", a: "हाँ, उन पर लागू बीमा शाखाओं के अनुसार।" },
        { q: "अगर वेतन ग़लत दर्ज हो जाए?", a: "वेतन संरक्षण से अंतर बनता है; हम प्लेटफ़ॉर्म पर सुधार फ़ॉलो करते हैं।" },
        { q: "क्या आप अंशदान भरते हैं?", a: "नहीं, भुगतान संस्थान के खाते से आधिकारिक माध्यम से होता है।" },
        { q: "क्या छोड़ने वाले कर्मचारी को हटाना फ़ॉलो करते हैं?", a: "हाँ, सही तारीख़ के साथ।" },
      ],
    },
  },

  mudadWagesFile: {
    ar: {
      primaryKeyword: "رفع ملف حماية الأجور في مدد",
      secondaryKeywords: ["نظام حماية الأجور", "منصة مدد", "نسبة الالتزام بحماية الأجور", "رفع مسير الرواتب"],
      metaDescription:
        "رفع ملف الأجور الشهري في منصة مدد ضمن نظام حماية الأجور مع تسامي: نجهز الملف ونطابقه مع التأمينات ونتابع نسبة الالتزام. لسنا جهة حكومية.",
      intro:
        "نظام حماية الأجور يلزم المنشآت برفع بيانات رواتب موظفيها شهرياً، ومنصة مدد من أشهر الطرق لذلك. الهدف التأكد من صرف الأجور في وقتها وبالمبالغ المسجلة. انخفاض نسبة الالتزام قد يؤدي لإيقاف بعض خدمات المنشأة في قوى. تسامي تساعدك في تجهيز ملف الأجور ومطابقته مع بيانات التأمينات ورفعه في موعده، ومعالجة أسباب انخفاض نسبة الالتزام.",
      who: [
        "المنشآت الصغيرة التي ترفع ملف الأجور لأول مرة.",
        "المنشآت التي انخفضت نسبة التزامها وتوقفت بعض خدماتها.",
        "أصحاب العمل الذين لا يملكون موظف موارد بشرية متفرغ.",
        "من لديه فروقات بين الرواتب المصروفة والمسجلة في التأمينات.",
      ],
      steps: [
        "نراجع حساب المنشأة في مدد ونسبة الالتزام الحالية.",
        "نجهز ملف الأجور حسب الصيغة المطلوبة وبيانات الموظفين.",
        "نطابق الأجور مع المسجل في التأمينات ونوضح الفروقات.",
        "نتابع رفع الملف في موعده الشهري.",
        "نتابع معالجة الملاحظات ورفع نسبة الالتزام إن كانت منخفضة.",
      ],
      tips: [
        "اصرف الرواتب عبر حساب بنكي للموظف كلما أمكن.",
        "طابق الأجر في العقد والتأمينات وملف الأجور.",
        "ارفع الملف كل شهر دون انقطاع.",
        "حدّث بيانات الموظفين المغادرين حتى لا تُحتسب عليك.",
        "راجع نسبة الالتزام بانتظام قبل أن تؤثر على خدماتك.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، والمتابعة شهرياً عبر واتساب.",
      faqs: [
        { q: "ماذا يحدث إذا لم أرفع ملف الأجور؟", a: "تنخفض نسبة الالتزام وقد تتوقف بعض خدمات المنشأة في قوى حتى تصحيح الوضع." },
        { q: "هل يجب أن يطابق الأجر ما في التأمينات؟", a: "نعم، الفروقات من أهم أسباب انخفاض نسبة الالتزام." },
        { q: "هل يمكن متابعة الرفع شهرياً معكم؟", a: "نعم، يمكننا متابعة رفع الملف كل شهر حسب اتفاقنا." },
        { q: "هل تصرفون الرواتب نيابة عني؟", a: "لا، صرف الرواتب مسؤولية المنشأة، ونحن نتابع تجهيز الملف ورفعه فقط." },
      ],
    },
    en: {
      primaryKeyword: "Mudad wage protection file upload",
      secondaryKeywords: ["Wage Protection System Saudi", "Mudad platform", "wage protection compliance rate", "upload payroll file"],
      metaDescription:
        "Upload your monthly wage file on Mudad under the Wage Protection System with Tasami: we prepare the file, match it with GOSI and follow your compliance rate. Not a government entity.",
      intro:
        "The Wage Protection System requires businesses to upload employee payroll data every month, and Mudad is one of the most common ways to do so. The aim is to ensure wages are paid on time and in the registered amounts. A low compliance rate can suspend some of your services on Qiwa. Tasami helps prepare the wage file, match it with GOSI data, upload it on time and fix the causes of a low compliance rate.",
      who: [
        "Small businesses uploading a wage file for the first time.",
        "Businesses whose compliance dropped and some services stopped.",
        "Employers without a full-time HR employee.",
        "Anyone with differences between paid wages and GOSI records.",
      ],
      steps: [
        "We review the Mudad account and current compliance rate.",
        "We prepare the wage file in the required format with employee data.",
        "We match wages with GOSI records and explain differences.",
        "We follow the monthly upload on time.",
        "We follow resolving remarks and raising a low compliance rate.",
      ],
      tips: [
        "Pay salaries to employees' bank accounts whenever possible.",
        "Match the wage in the contract, GOSI and wage file.",
        "Upload the file every month without gaps.",
        "Update records of departed employees so they are not counted.",
        "Check your compliance rate regularly before it affects services.",
      ],
      local:
        "We serve businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, with monthly follow-up on WhatsApp.",
      faqs: [
        { q: "What if I do not upload the wage file?", a: "Your compliance rate drops and some services on Qiwa may stop until corrected." },
        { q: "Must the wage match GOSI?", a: "Yes, mismatches are a main reason for low compliance." },
        { q: "Can you follow the upload monthly?", a: "Yes, we can follow the monthly upload as agreed." },
        { q: "Do you pay salaries for me?", a: "No, paying salaries is the business's responsibility; we prepare and upload the file." },
      ],
    },
    ur: {
      primaryKeyword: "مدد میں اجرت تحفظ فائل اپلوڈ",
      secondaryKeywords: ["اجرت تحفظ نظام", "مدد پلیٹ فارم", "اجرت تحفظ پابندی کی شرح"],
      metaDescription:
        "تسامی کے ساتھ اجرت تحفظ نظام کے تحت مدد پر ماہانہ اجرت فائل: فائل کی تیاری، گوسی سے مطابقت اور پابندی کی شرح کا فالو اپ۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "اجرت تحفظ نظام اداروں کو ہر مہینے ملازمین کی تنخواہوں کا ڈیٹا اپلوڈ کرنے کا پابند بناتا ہے، اور مدد اس کا عام طریقہ ہے۔ مقصد یہ یقینی بنانا ہے کہ اجرت وقت پر اور درج رقم میں ادا ہو۔ پابندی کی کم شرح سے قوی میں کچھ خدمات رک سکتی ہیں۔ تسامی فائل تیار کرنے، گوسی سے ملانے، بروقت اپلوڈ اور کم شرح کی وجوہات دور کرنے میں مدد کرتا ہے۔",
      who: [
        "چھوٹے ادارے جو پہلی بار اجرت فائل اپلوڈ کر رہے ہیں۔",
        "ادارے جن کی شرح کم ہوئی اور خدمات رکیں۔",
        "آجر جن کے پاس کل وقتی HR نہیں۔",
        "جن کی ادا شدہ اور گوسی اجرت میں فرق ہے۔",
      ],
      steps: [
        "مدد اکاؤنٹ اور موجودہ شرح دیکھتے ہیں۔",
        "مطلوبہ فارمیٹ میں اجرت فائل تیار کرتے ہیں۔",
        "اجرت کو گوسی ریکارڈ سے ملا کر فرق بتاتے ہیں۔",
        "ماہانہ اپلوڈ بروقت فالو کرتے ہیں۔",
        "نوٹس دور کرنے اور شرح بڑھانے کا فالو اپ کرتے ہیں۔",
      ],
      tips: [
        "ممکن ہو تو تنخواہ ملازم کے بینک اکاؤنٹ میں دیں۔",
        "معاہدہ، گوسی اور اجرت فائل میں اجرت یکساں رکھیں۔",
        "ہر مہینے بلا تعطل فائل اپلوڈ کریں۔",
        "چھوڑنے والے ملازمین کا ریکارڈ اپ ڈیٹ کریں۔",
        "شرح باقاعدگی سے چیک کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور ہر شہر کے اداروں کا ماہانہ فالو اپ واٹس ایپ پر کرتے ہیں۔",
      faqs: [
        { q: "اگر اجرت فائل اپلوڈ نہ کروں؟", a: "شرح کم ہوتی ہے اور قوی کی کچھ خدمات رک سکتی ہیں۔" },
        { q: "کیا اجرت گوسی کے مطابق ہونی چاہیے؟", a: "جی ہاں، فرق کم شرح کی بڑی وجہ ہے۔" },
        { q: "کیا ماہانہ فالو اپ ممکن ہے؟", a: "جی ہاں، اتفاق کے مطابق۔" },
        { q: "کیا آپ تنخواہیں ادا کرتے ہیں؟", a: "نہیں، یہ ادارے کی ذمہ داری ہے؛ ہم فائل تیار اور اپلوڈ کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "मुदद में वेतन संरक्षण फ़ाइल अपलोड",
      secondaryKeywords: ["वेतन संरक्षण प्रणाली", "मुदद प्लेटफ़ॉर्म", "वेतन संरक्षण अनुपालन दर"],
      metaDescription:
        "तसामी के साथ वेतन संरक्षण प्रणाली के तहत मुदद पर मासिक वेतन फ़ाइल: फ़ाइल तैयारी, GOSI से मिलान और अनुपालन दर का फ़ॉलो-अप। हम सरकारी संस्था नहीं हैं।",
      intro:
        "वेतन संरक्षण प्रणाली संस्थानों को हर महीने कर्मचारियों के वेतन का डेटा अपलोड करने के लिए बाध्य करती है, और मुदद इसका आम तरीक़ा है। मक़सद यह पक्का करना है कि वेतन समय पर और दर्ज रक़म में दिया जाए। कम अनुपालन दर से क़िवा में कुछ सेवाएँ रुक सकती हैं। तसामी फ़ाइल तैयार करने, GOSI से मिलाने, समय पर अपलोड और कम दर के कारण दूर करने में मदद करता है।",
      who: [
        "छोटे संस्थान जो पहली बार वेतन फ़ाइल अपलोड कर रहे हैं।",
        "संस्थान जिनकी दर घटी और सेवाएँ रुकीं।",
        "नियोक्ता जिनके पास पूर्णकालिक HR नहीं।",
        "जिनके दिए गए और GOSI वेतन में अंतर है।",
      ],
      steps: [
        "मुदद अकाउंट और मौजूदा दर देखते हैं।",
        "ज़रूरी फ़ॉर्मैट में वेतन फ़ाइल तैयार करते हैं।",
        "वेतन को GOSI रिकॉर्ड से मिलाकर अंतर बताते हैं।",
        "मासिक अपलोड समय पर फ़ॉलो करते हैं।",
        "टिप्पणियाँ सुलझाने और दर बढ़ाने का फ़ॉलो-अप करते हैं।",
      ],
      tips: [
        "संभव हो तो वेतन कर्मचारी के बैंक खाते में दें।",
        "अनुबंध, GOSI और वेतन फ़ाइल में वेतन एक जैसा रखें।",
        "हर महीने बिना रुके फ़ाइल अपलोड करें।",
        "छोड़ने वाले कर्मचारियों का रिकॉर्ड अपडेट करें।",
        "दर नियमित रूप से जाँचें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों का मासिक फ़ॉलो-अप व्हाट्सऐप पर करते हैं।",
      faqs: [
        { q: "अगर वेतन फ़ाइल अपलोड न करूँ?", a: "दर घटती है और क़िवा की कुछ सेवाएँ रुक सकती हैं।" },
        { q: "क्या वेतन GOSI के अनुसार होना चाहिए?", a: "हाँ, अंतर कम दर का बड़ा कारण है।" },
        { q: "क्या मासिक फ़ॉलो-अप संभव है?", a: "हाँ, सहमति के अनुसार।" },
        { q: "क्या आप वेतन देते हैं?", a: "नहीं, यह संस्थान की ज़िम्मेदारी है; हम फ़ाइल तैयार और अपलोड करते हैं।" },
      ],
    },
  },

  changeProfession: {
    ar: {
      primaryKeyword: "تعديل مهنة العامل الوافد",
      secondaryKeywords: ["تغيير المهنة في الإقامة", "تعديل مهنة قوى", "تغيير مهنة مقيم", "شروط تعديل المهنة"],
      metaDescription:
        "تعديل مهنة العامل الوافد عبر منصة قوى مع تسامي: نراجع الشروط والمهن المسموحة والاعتماد المهني ونتابع الطلب حتى تحديث الإقامة. لسنا جهة حكومية.",
      intro:
        "تعديل المهنة يكون مطلوباً عندما يختلف عمل الموظف الفعلي عن المهنة المسجلة في إقامته، أو عند ترقيته لوظيفة مختلفة. الطلب يتم عبر منصة قوى، لكن ليست كل المهن متاحة للتعديل: بعضها مقصور على السعوديين، وبعضها يتطلب اعتماداً مهنياً أو مؤهلاً موثقاً. تسامي تراجع حالة العامل قبل التقديم، وتتابع الطلب حتى تحديث المهنة في الإقامة.",
      who: [
        "المنشآت التي يعمل موظفها بمهنة مختلفة عن المسجلة.",
        "الموظفون الذين حصلوا على ترقية أو مؤهل جديد.",
        "من رُفض طلب تعديل مهنته ويريد معرفة السبب.",
        "المنشآت التي تريد تصحيح المهن قبل التفتيش.",
      ],
      steps: [
        "نراجع المهنة الحالية والمهنة المطلوبة وهل التعديل مسموح.",
        "نتأكد من متطلبات الاعتماد المهني أو المؤهل إن وجدت.",
        "نتابع رفع طلب التعديل في قوى من حساب المنشأة.",
        "نتابع موافقة العامل على الطلب إن كانت مطلوبة.",
        "نتابع تحديث المهنة في الإقامة وأنظمة الجهات المعنية.",
      ],
      tips: [
        "تأكد أن المهنة الجديدة غير مقصورة على السعوديين.",
        "جهّز المؤهل الموثق إذا كانت المهنة تتطلبه.",
        "طابق المهنة مع نشاط المنشأة وطبيعة العمل الفعلية.",
        "تأكد من سلامة وضع المنشأة في نطاقات وحماية الأجور.",
        "حدّث عقد العمل بعد تعديل المهنة.",
      ],
      local:
        "نخدم المنشآت والعاملين في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة عبر واتساب.",
      faqs: [
        { q: "هل يمكن تعديل أي مهنة؟", a: "لا، هناك مهن مقصورة على السعوديين ومهن تتطلب اعتماداً مهنياً. نراجع حالتك قبل التقديم." },
        { q: "هل يتطلب التعديل موافقة العامل؟", a: "في بعض الحالات تكون موافقة العامل عبر المنصة مطلوبة، ونوضح لك ذلك حسب الطلب." },
        { q: "هل يجب تعديل المهنة إذا اختلف العمل الفعلي؟", a: "يُفضّل تطابق المهنة مع العمل الفعلي لتجنب المخالفات عند التفتيش." },
        { q: "من يدفع الرسوم إن وجدت؟", a: "تُدفع عبر القنوات الرسمية من حساب المنشأة، ونحن نتابع الإجراء فقط." },
      ],
    },
    en: {
      primaryKeyword: "change profession for expatriate workers",
      secondaryKeywords: ["change profession on iqama", "Qiwa profession change", "expat profession change", "profession change requirements"],
      metaDescription:
        "Change an expatriate worker's profession through Qiwa with Tasami: we review conditions, permitted professions and professional accreditation and follow the request until the iqama is updated. Not a government entity.",
      intro:
        "A profession change is needed when an employee's actual work differs from the profession on their iqama, or when they are promoted to a different role. The request is made through Qiwa, but not every profession can be changed to: some are reserved for Saudis and some require professional accreditation or an attested qualification. Tasami reviews the worker's case before applying and follows the request until the iqama profession is updated.",
      who: [
        "Businesses whose employee works in a different profession than registered.",
        "Employees who got a promotion or a new qualification.",
        "Anyone whose profession change was rejected and wants to know why.",
        "Businesses wanting to correct professions before inspections.",
      ],
      steps: [
        "We review the current and requested profession and whether the change is allowed.",
        "We confirm professional accreditation or qualification requirements if any.",
        "We follow the change request on Qiwa from the business account.",
        "We follow the worker's approval of the request if required.",
        "We follow the profession update on the iqama and relevant systems.",
      ],
      tips: [
        "Confirm the new profession is not reserved for Saudis.",
        "Prepare an attested qualification if the profession requires it.",
        "Match the profession with your activity and the actual work.",
        "Make sure your Nitaqat and wage-protection status is sound.",
        "Update the employment contract after the change.",
      ],
      local:
        "We serve businesses and workers in Makkah, Jeddah, Riyadh, Dammam and every Saudi city on WhatsApp.",
      faqs: [
        { q: "Can any profession be changed?", a: "No, some professions are reserved for Saudis and some require accreditation. We review your case before applying." },
        { q: "Does the change need the worker's approval?", a: "In some cases the worker's approval on the platform is required; we explain this per request." },
        { q: "Must the profession match the actual work?", a: "It is advisable to avoid violations during inspections." },
        { q: "Who pays any fees?", a: "Paid through official channels from the business account; we only follow the procedure." },
      ],
    },
    ur: {
      primaryKeyword: "غیر ملکی کارکن کا پیشہ تبدیل کرنا",
      secondaryKeywords: ["اقامہ میں پیشہ تبدیلی", "قوی پیشہ تبدیلی", "پیشہ تبدیلی کی شرائط"],
      metaDescription:
        "تسامی کے ساتھ قوی کے ذریعے غیر ملکی کارکن کا پیشہ تبدیل: شرائط، اجازت یافتہ پیشوں اور پیشہ ورانہ منظوری کا جائزہ اور اقامہ اپ ڈیٹ تک فالو اپ۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "پیشہ تبدیلی تب ضروری ہوتی ہے جب ملازم کا اصل کام اقامہ کے پیشے سے مختلف ہو یا اسے مختلف عہدے پر ترقی ملے۔ درخواست قوی پر ہوتی ہے، مگر ہر پیشہ دستیاب نہیں: کچھ سعودیوں کے لیے مخصوص ہیں اور کچھ کے لیے پیشہ ورانہ منظوری یا تصدیق شدہ ڈگری چاہیے۔ تسامی درخواست سے پہلے حالت کا جائزہ لے کر اقامہ اپ ڈیٹ تک فالو کرتا ہے۔",
      who: [
        "ادارے جن کا ملازم درج پیشے سے مختلف کام کرتا ہے۔",
        "ملازمین جنہیں ترقی یا نئی ڈگری ملی۔",
        "جن کی پیشہ تبدیلی مسترد ہوئی۔",
        "ادارے جو معائنے سے پہلے پیشے درست کرنا چاہتے ہیں۔",
      ],
      steps: [
        "موجودہ اور مطلوبہ پیشہ اور تبدیلی کی اجازت دیکھتے ہیں۔",
        "پیشہ ورانہ منظوری یا ڈگری کی شرائط چیک کرتے ہیں۔",
        "ادارے کے اکاؤنٹ سے قوی میں درخواست فالو کرتے ہیں۔",
        "ضرورت ہو تو کارکن کی منظوری فالو کرتے ہیں۔",
        "اقامہ اور متعلقہ نظاموں میں پیشہ اپ ڈیٹ فالو کرتے ہیں۔",
      ],
      tips: [
        "تصدیق کریں کہ نیا پیشہ سعودیوں کے لیے مخصوص نہیں۔",
        "ضرورت ہو تو تصدیق شدہ ڈگری تیار رکھیں۔",
        "پیشہ ادارے کی سرگرمی اور اصل کام کے مطابق رکھیں۔",
        "نطاقات اور اجرت تحفظ کی حالت درست رکھیں۔",
        "تبدیلی کے بعد ملازمت کا معاہدہ اپ ڈیٹ کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور ہر شہر کے اداروں اور کارکنوں کی واٹس ایپ پر خدمت کرتے ہیں۔",
      faqs: [
        { q: "کیا ہر پیشہ تبدیل ہو سکتا ہے؟", a: "نہیں، کچھ سعودیوں کے لیے مخصوص اور کچھ کو منظوری چاہیے۔" },
        { q: "کیا کارکن کی منظوری چاہیے؟", a: "بعض حالات میں پلیٹ فارم پر کارکن کی منظوری درکار ہوتی ہے۔" },
        { q: "کیا پیشہ اصل کام کے مطابق ہونا چاہیے؟", a: "معائنے میں خلاف ورزی سے بچنے کے لیے بہتر ہے۔" },
        { q: "فیس کون ادا کرتا ہے؟", a: "ادارے کے اکاؤنٹ سے سرکاری ذرائع سے؛ ہم صرف فالو کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "प्रवासी कामगार का पेशा बदलना",
      secondaryKeywords: ["इक़ामा में पेशा बदलना", "क़िवा पेशा बदलाव", "पेशा बदलाव की शर्तें"],
      metaDescription:
        "तसामी के साथ क़िवा से प्रवासी कामगार का पेशा बदलना: शर्तों, अनुमत पेशों और पेशेवर मान्यता की समीक्षा और इक़ामा अपडेट तक फ़ॉलो-अप। हम सरकारी संस्था नहीं हैं।",
      intro:
        "पेशा बदलना तब ज़रूरी होता है जब कर्मचारी का असली काम इक़ामा के पेशे से अलग हो या उसे अलग पद पर पदोन्नति मिले। आवेदन क़िवा पर होता है, पर हर पेशा उपलब्ध नहीं: कुछ सऊदी नागरिकों के लिए आरक्षित हैं और कुछ के लिए पेशेवर मान्यता या सत्यापित डिग्री चाहिए। तसामी आवेदन से पहले स्थिति की समीक्षा कर इक़ामा अपडेट तक फ़ॉलो करता है।",
      who: [
        "संस्थान जिनका कर्मचारी दर्ज पेशे से अलग काम करता है।",
        "कर्मचारी जिन्हें पदोन्नति या नई डिग्री मिली।",
        "जिनका पेशा बदलाव अस्वीकार हुआ।",
        "संस्थान जो निरीक्षण से पहले पेशे ठीक करना चाहते हैं।",
      ],
      steps: [
        "मौजूदा और माँगा गया पेशा और बदलाव की अनुमति देखते हैं।",
        "पेशेवर मान्यता या डिग्री की शर्तें जाँचते हैं।",
        "संस्थान के अकाउंट से क़िवा में आवेदन फ़ॉलो करते हैं।",
        "ज़रूरत हो तो कामगार की मंज़ूरी फ़ॉलो करते हैं।",
        "इक़ामा और संबंधित सिस्टम में पेशा अपडेट फ़ॉलो करते हैं।",
      ],
      tips: [
        "पक्का करें कि नया पेशा सऊदी नागरिकों के लिए आरक्षित नहीं।",
        "ज़रूरत हो तो सत्यापित डिग्री तैयार रखें।",
        "पेशा संस्थान की गतिविधि और असली काम के अनुसार रखें।",
        "निताक़ात और वेतन संरक्षण की स्थिति ठीक रखें।",
        "बदलाव के बाद रोज़गार अनुबंध अपडेट करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों और कामगारों की व्हाट्सऐप पर सेवा करते हैं।",
      faqs: [
        { q: "क्या हर पेशा बदला जा सकता है?", a: "नहीं, कुछ सऊदी नागरिकों के लिए आरक्षित और कुछ को मान्यता चाहिए।" },
        { q: "क्या कामगार की मंज़ूरी चाहिए?", a: "कुछ मामलों में प्लेटफ़ॉर्म पर कामगार की मंज़ूरी ज़रूरी होती है।" },
        { q: "क्या पेशा असली काम के अनुसार होना चाहिए?", a: "निरीक्षण में उल्लंघन से बचने के लिए बेहतर है।" },
        { q: "फ़ीस कौन देता है?", a: "संस्थान के खाते से आधिकारिक माध्यम से; हम सिर्फ़ फ़ॉलो करते हैं।" },
      ],
    },
  },

  safetyLicense: {
    ar: {
      primaryKeyword: "ترخيص السلامة من الدفاع المدني",
      secondaryKeywords: ["شهادة سلامة الدفاع المدني", "منصة سلامة", "تجديد رخصة الدفاع المدني", "اشتراطات السلامة للمحلات"],
      metaDescription:
        "استخراج وتجديد ترخيص السلامة من الدفاع المدني عبر منصة سلامة مع تسامي: نراجع اشتراطات المنشأة ونتابع الطلب والمعاينة حتى صدور الشهادة. لسنا جهة حكومية.",
      intro:
        "ترخيص السلامة من الدفاع المدني يثبت أن منشأتك تستوفي اشتراطات الوقاية من الحريق والسلامة، وهو مرتبط برخصة البلدية لأغلب الأنشطة التجارية. الطلب يتم عبر منصة سلامة، وتختلف الاشتراطات حسب نوع النشاط ومساحته ودرجة خطورته: طفايات، وكاشف دخان، ولوحات إرشادية، وأحياناً أنظمة إنذار وإطفاء وعقد صيانة مع مكتب معتمد. تسامي توضح لك الاشتراطات المطلوبة لنشاطك وتتابع الطلب حتى صدور الترخيص.",
      who: [
        "أصحاب المحلات والمطاعم والمقاهي الجديدة.",
        "المنشآت التي انتهى ترخيص السلامة لديها وتحتاج التجديد.",
        "المستودعات والورش والأنشطة عالية الخطورة.",
        "من رُفض طلبه بسبب ملاحظات في المعاينة.",
      ],
      steps: [
        "نحدد تصنيف نشاطك ومتطلبات السلامة الخاصة به.",
        "نوضح لك التجهيزات المطلوبة قبل التقديم لتجنب الرفض.",
        "نتابع رفع الطلب في منصة سلامة ببيانات المنشأة الصحيحة.",
        "نتابع المعاينة أو التقييم الذاتي حسب نوع النشاط.",
        "نتابع معالجة الملاحظات حتى صدور الترخيص وربطه برخصة البلدية.",
      ],
      tips: [
        "ركّب الطفايات المناسبة وتأكد من صلاحيتها قبل الطلب.",
        "لا تغلق مخارج الطوارئ أو تضع بضائع أمامها.",
        "تعاقد مع مكتب سلامة معتمد إذا كان نشاطك يتطلب ذلك.",
        "جدّد الترخيص قبل انتهائه حتى لا تتأثر رخصة البلدية.",
        "احتفظ بتقارير الصيانة الدورية لأنظمة السلامة.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، والمتابعة عبر واتساب.",
      faqs: [
        { q: "هل كل المحلات تحتاج ترخيص سلامة؟", a: "أغلب الأنشطة التجارية تحتاجه، والاشتراطات تختلف حسب النشاط والمساحة ودرجة الخطورة." },
        { q: "هل تركبون أنظمة السلامة؟", a: "لا، نوضح لك المطلوب ونتابع الإجراء، والتركيب يتم عبر مؤسسات متخصصة معتمدة." },
        { q: "ما علاقة ترخيص السلامة برخصة البلدية؟", a: "ترتبط به أغلب رخص البلدية، وانتهاؤه قد يؤثر على إصدار رخصة البلدية أو تجديدها." },
        { q: "ماذا لو كانت هناك ملاحظات في المعاينة؟", a: "نوضح لك الملاحظات المطلوب معالجتها ونتابع إعادة الطلب بعد التصحيح." },
      ],
    },
    en: {
      primaryKeyword: "Civil Defense safety license in Saudi Arabia",
      secondaryKeywords: ["Civil Defense safety certificate", "Salamah platform", "renew Civil Defense license", "shop safety requirements"],
      metaDescription:
        "Issue and renew your Civil Defense safety license through the Salamah platform with Tasami: we review your requirements and follow the request and inspection until issuance. Not a government entity.",
      intro:
        "The Civil Defense safety license proves your business meets fire prevention and safety requirements, and it is linked to the municipal license for most commercial activities. The request is made through the Salamah platform, and requirements vary by activity type, area and risk level: extinguishers, smoke detectors, signage and sometimes alarm and suppression systems with a maintenance contract from an accredited office. Tasami explains the requirements for your activity and follows the request until the license is issued.",
      who: [
        "Owners of new shops, restaurants and cafés.",
        "Businesses whose safety license expired and needs renewal.",
        "Warehouses, workshops and high-risk activities.",
        "Anyone rejected due to inspection remarks.",
      ],
      steps: [
        "We identify your activity classification and its safety requirements.",
        "We explain the equipment needed before applying to avoid rejection.",
        "We follow the Salamah request with correct business data.",
        "We follow the inspection or self-assessment depending on activity.",
        "We follow resolving remarks until the license is issued and linked to the municipal license.",
      ],
      tips: [
        "Install suitable extinguishers and check their validity before applying.",
        "Never block emergency exits or stack goods in front of them.",
        "Contract an accredited safety office if your activity requires it.",
        "Renew before expiry so your municipal license is not affected.",
        "Keep periodic maintenance reports for safety systems.",
      ],
      local:
        "We serve businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, with follow-up on WhatsApp.",
      faqs: [
        { q: "Does every shop need a safety license?", a: "Most commercial activities do; requirements vary by activity, area and risk level." },
        { q: "Do you install safety systems?", a: "No, we explain what is required and follow the procedure; installation is done by accredited specialist firms." },
        { q: "How is it linked to the municipal license?", a: "Most municipal licenses depend on it, and its expiry can affect municipal issuance or renewal." },
        { q: "What if there are inspection remarks?", a: "We explain what must be fixed and follow resubmission after correction." },
      ],
    },
    ur: {
      primaryKeyword: "سول ڈیفنس سیفٹی لائسنس",
      secondaryKeywords: ["سول ڈیفنس سیفٹی سرٹیفکیٹ", "سلامہ پلیٹ فارم", "سول ڈیفنس لائسنس تجدید"],
      metaDescription:
        "تسامی کے ساتھ سلامہ پلیٹ فارم پر سول ڈیفنس سیفٹی لائسنس کا اجرا اور تجدید: تقاضوں کا جائزہ اور معائنے و اجرا تک فالو اپ۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "سول ڈیفنس سیفٹی لائسنس ثابت کرتا ہے کہ آپ کا ادارہ آگ سے بچاؤ اور حفاظت کے تقاضے پورے کرتا ہے، اور زیادہ تر تجارتی سرگرمیوں میں یہ بلدیہ لائسنس سے جڑا ہے۔ درخواست سلامہ پلیٹ فارم پر ہوتی ہے اور تقاضے سرگرمی، رقبے اور خطرے کے درجے کے مطابق بدلتے ہیں: آگ بجھانے والے آلات، اسموک ڈیٹیکٹر، نشانات اور بعض اوقات الارم اور منظور شدہ دفتر سے دیکھ بھال کا معاہدہ۔ تسامی تقاضے بتا کر اجرا تک فالو کرتا ہے۔",
      who: [
        "نئی دکانوں، ریستورانوں اور کیفے کے مالکان۔",
        "ادارے جن کا لائسنس ختم ہو گیا۔",
        "گودام، ورکشاپس اور زیادہ خطرے والی سرگرمیاں۔",
        "جن کی درخواست معائنے کے نوٹس پر مسترد ہوئی۔",
      ],
      steps: [
        "سرگرمی کی درجہ بندی اور سیفٹی تقاضے طے کرتے ہیں۔",
        "مسترد ہونے سے بچنے کے لیے درکار آلات پہلے بتاتے ہیں۔",
        "درست معلومات کے ساتھ سلامہ پر درخواست فالو کرتے ہیں۔",
        "معائنہ یا خود تشخیص فالو کرتے ہیں۔",
        "نوٹس دور ہونے اور بلدیہ لائسنس سے ربط تک فالو کرتے ہیں۔",
      ],
      tips: [
        "درخواست سے پہلے مناسب آلات لگا کر ان کی میعاد چیک کریں۔",
        "ایمرجنسی راستے کبھی بند نہ کریں۔",
        "ضرورت ہو تو منظور شدہ سیفٹی دفتر سے معاہدہ کریں۔",
        "میعاد ختم ہونے سے پہلے تجدید کریں۔",
        "دیکھ بھال کی رپورٹس محفوظ رکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور ہر شہر کے اداروں کی واٹس ایپ پر خدمت کرتے ہیں۔",
      faqs: [
        { q: "کیا ہر دکان کو سیفٹی لائسنس چاہیے؟", a: "زیادہ تر تجارتی سرگرمیوں کو؛ تقاضے سرگرمی اور رقبے کے مطابق بدلتے ہیں۔" },
        { q: "کیا آپ سیفٹی سسٹم لگاتے ہیں؟", a: "نہیں، ہم تقاضے بتاتے ہیں؛ تنصیب منظور شدہ کمپنیاں کرتی ہیں۔" },
        { q: "بلدیہ لائسنس سے کیا تعلق ہے؟", a: "زیادہ تر بلدیہ لائسنس اس پر منحصر ہیں۔" },
        { q: "اگر معائنے میں نوٹس ہوں؟", a: "ہم درستگی بتا کر دوبارہ درخواست فالو کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सिविल डिफ़ेंस सेफ़्टी लाइसेंस",
      secondaryKeywords: ["सिविल डिफ़ेंस सेफ़्टी सर्टिफ़िकेट", "सलामा प्लेटफ़ॉर्म", "सिविल डिफ़ेंस लाइसेंस नवीनीकरण"],
      metaDescription:
        "तसामी के साथ सलामा प्लेटफ़ॉर्म पर सिविल डिफ़ेंस सेफ़्टी लाइसेंस जारी और नवीनीकरण: ज़रूरतों की समीक्षा और निरीक्षण व जारी होने तक फ़ॉलो-अप। हम सरकारी संस्था नहीं हैं।",
      intro:
        "सिविल डिफ़ेंस सेफ़्टी लाइसेंस साबित करता है कि आपका संस्थान आग से बचाव और सुरक्षा की ज़रूरतें पूरी करता है, और ज़्यादातर व्यावसायिक गतिविधियों में यह नगरपालिका लाइसेंस से जुड़ा है। आवेदन सलामा प्लेटफ़ॉर्म पर होता है और ज़रूरतें गतिविधि, क्षेत्रफल और जोखिम स्तर के अनुसार बदलती हैं: अग्निशामक, स्मोक डिटेक्टर, संकेत और कभी-कभी अलार्म व मान्यता प्राप्त दफ़्तर से रखरखाव अनुबंध। तसामी ज़रूरतें बताकर जारी होने तक फ़ॉलो करता है।",
      who: [
        "नई दुकानों, रेस्टोरेंट और कैफ़े के मालिक।",
        "संस्थान जिनका लाइसेंस ख़त्म हो गया।",
        "गोदाम, वर्कशॉप और उच्च जोखिम वाली गतिविधियाँ।",
        "जिनका आवेदन निरीक्षण टिप्पणियों से अस्वीकार हुआ।",
      ],
      steps: [
        "गतिविधि का वर्गीकरण और सेफ़्टी ज़रूरतें तय करते हैं।",
        "अस्वीकृति से बचने के लिए ज़रूरी उपकरण पहले बताते हैं।",
        "सही जानकारी के साथ सलामा पर आवेदन फ़ॉलो करते हैं।",
        "निरीक्षण या स्व-मूल्यांकन फ़ॉलो करते हैं।",
        "टिप्पणियाँ सुलझने और नगरपालिका लाइसेंस से जुड़ने तक फ़ॉलो करते हैं।",
      ],
      tips: [
        "आवेदन से पहले उपयुक्त अग्निशामक लगाकर उनकी वैधता जाँचें।",
        "आपातकालीन रास्ते कभी बंद न करें।",
        "ज़रूरत हो तो मान्यता प्राप्त सेफ़्टी दफ़्तर से अनुबंध करें।",
        "समाप्ति से पहले नवीनीकरण करें।",
        "रखरखाव रिपोर्ट सुरक्षित रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों की व्हाट्सऐप पर सेवा करते हैं।",
      faqs: [
        { q: "क्या हर दुकान को सेफ़्टी लाइसेंस चाहिए?", a: "ज़्यादातर व्यावसायिक गतिविधियों को; ज़रूरतें गतिविधि और क्षेत्रफल के अनुसार बदलती हैं।" },
        { q: "क्या आप सेफ़्टी सिस्टम लगाते हैं?", a: "नहीं, हम ज़रूरतें बताते हैं; लगाने का काम मान्यता प्राप्त कंपनियाँ करती हैं।" },
        { q: "नगरपालिका लाइसेंस से क्या संबंध है?", a: "ज़्यादातर नगरपालिका लाइसेंस इस पर निर्भर हैं।" },
        { q: "अगर निरीक्षण में टिप्पणियाँ हों?", a: "हम सुधार बताकर दोबारा आवेदन फ़ॉलो करते हैं।" },
      ],
    },
  },

  reserveTradeName: {
    ar: {
      primaryKeyword: "حجز اسم تجاري",
      secondaryKeywords: ["حجز اسم تجاري المركز السعودي للأعمال", "الاستعلام عن اسم تجاري", "شروط الاسم التجاري", "تسجيل اسم تجاري"],
      metaDescription:
        "حجز اسم تجاري عبر المركز السعودي للأعمال مع تسامي: نتحقق من توفر الاسم ومطابقته للضوابط ونتابع الحجز تمهيداً لإصدار السجل التجاري. لسنا جهة حكومية.",
      intro:
        "الاسم التجاري هو أول خطوة في هوية منشأتك، ويُحجز عبر المركز السعودي للأعمال قبل إصدار السجل التجاري أو تعديله. كثير من الطلبات تُرفض لأن الاسم مشابه لاسم قائم، أو يخالف ضوابط الأسماء التجارية، أو لا يتناسب مع النشاط. تسامي تساعدك في اختيار بدائل مناسبة، والتحقق من توفرها، ومتابعة الحجز حتى يصبح الاسم جاهزاً لاستخدامه في السجل.",
      who: [
        "رواد الأعمال الذين يؤسسون منشأة أو شركة جديدة.",
        "أصحاب السجلات الذين يريدون تغيير الاسم التجاري.",
        "من رُفض اسمه المقترح ويحتاج بدائل مقبولة.",
        "العلامات التي تريد اسماً يتوافق مع علامتها التجارية.",
      ],
      steps: [
        "نجمع منك عدة أسماء مقترحة مرتبة حسب الأفضلية.",
        "نتحقق من توفر الأسماء ومطابقتها لضوابط الأسماء التجارية.",
        "نتابع رفع طلب الحجز في المركز السعودي للأعمال.",
        "نتابع اعتماد الاسم أو نقترح بدائل عند الرفض.",
        "نوضح لك الخطوة التالية لإصدار السجل التجاري بالاسم المحجوز.",
      ],
      tips: [
        "جهّز ثلاثة أسماء على الأقل تحسباً للرفض.",
        "تجنب الأسماء المشابهة لعلامات أو منشآت معروفة.",
        "اختر اسماً يناسب نشاطك ويسهل نطقه وكتابته.",
        "تحقق من توفر النطاق وحسابات التواصل بنفس الاسم.",
        "فكّر في تسجيل العلامة التجارية لحماية الاسم لاحقاً.",
      ],
      local:
        "نخدم رواد الأعمال في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة عبر واتساب.",
      faqs: [
        { q: "لماذا يُرفض الاسم التجاري؟", a: "غالباً لتشابهه مع اسم قائم أو مخالفته لضوابط الأسماء أو عدم مناسبته للنشاط." },
        { q: "هل يمكن حجز اسم بلغة أجنبية؟", a: "توجد ضوابط للأسماء الأجنبية والمعرّبة، ونتحقق من الاسم المقترح قبل التقديم." },
        { q: "هل حجز الاسم يحميه كعلامة تجارية؟", a: "لا، الاسم التجاري يختلف عن العلامة التجارية، ويُفضّل تسجيل العلامة لدى الجهة المختصة لحمايتها." },
        { q: "هل الحجز دائم؟", a: "الحجز مؤقت لفترة تحددها الأنظمة، لذا يُفضّل إصدار السجل بعد الحجز مباشرة." },
      ],
    },
    en: {
      primaryKeyword: "reserve a trade name in Saudi Arabia",
      secondaryKeywords: ["trade name reservation Saudi Business Center", "check trade name availability", "trade name rules", "register trade name"],
      metaDescription:
        "Reserve a trade name through the Saudi Business Center with Tasami: we check availability and compliance with naming rules and follow the reservation ahead of your CR. Not a government entity.",
      intro:
        "Your trade name is the first step in your business identity, reserved through the Saudi Business Center before issuing or amending a commercial registration. Many requests are rejected because the name resembles an existing one, breaks trade-name rules or does not fit the activity. Tasami helps you choose suitable alternatives, checks their availability and follows the reservation until the name is ready for your CR.",
      who: [
        "Entrepreneurs establishing a new business or company.",
        "CR holders who want to change their trade name.",
        "Anyone whose proposed name was rejected and needs acceptable alternatives.",
        "Brands wanting a name consistent with their trademark.",
      ],
      steps: [
        "We collect several proposed names ranked by preference.",
        "We check availability and compliance with trade-name rules.",
        "We follow the reservation request at the Saudi Business Center.",
        "We follow approval or suggest alternatives if rejected.",
        "We explain the next step to issue your CR with the reserved name.",
      ],
      tips: [
        "Prepare at least three names in case of rejection.",
        "Avoid names similar to known brands or businesses.",
        "Choose a name that fits your activity and is easy to say and write.",
        "Check the domain and social handles are available under the same name.",
        "Consider registering a trademark to protect the name later.",
      ],
      local:
        "We serve entrepreneurs in Makkah, Jeddah, Riyadh, Dammam and every Saudi city on WhatsApp.",
      faqs: [
        { q: "Why are trade names rejected?", a: "Usually due to similarity with an existing name, breaking naming rules or not fitting the activity." },
        { q: "Can I reserve a foreign-language name?", a: "There are rules for foreign and transliterated names; we check your proposal before applying." },
        { q: "Does reserving protect it as a trademark?", a: "No, a trade name differs from a trademark; registering the trademark with the competent authority is advisable." },
        { q: "Is the reservation permanent?", a: "It is temporary for a period set by regulations, so issuing the CR soon after is advisable." },
      ],
    },
    ur: {
      primaryKeyword: "تجارتی نام محفوظ کرنا",
      secondaryKeywords: ["سعودی بزنس سینٹر نام ریزرویشن", "تجارتی نام کی دستیابی", "تجارتی نام کے ضوابط"],
      metaDescription:
        "تسامی کے ساتھ سعودی بزنس سینٹر میں تجارتی نام محفوظ کریں: دستیابی اور ضوابط کی جانچ اور سجل سے پہلے ریزرویشن کا فالو اپ۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "تجارتی نام آپ کے ادارے کی شناخت کا پہلا قدم ہے، جو سجل تجاری جاری یا ترمیم سے پہلے سعودی بزنس سینٹر میں محفوظ کیا جاتا ہے۔ کئی درخواستیں اس لیے مسترد ہوتی ہیں کہ نام موجودہ نام سے ملتا ہے، ضوابط کے خلاف ہے یا سرگرمی سے مطابقت نہیں رکھتا۔ تسامی متبادل منتخب کرنے، دستیابی جانچنے اور ریزرویشن فالو کرنے میں مدد کرتا ہے۔",
      who: [
        "نیا ادارہ یا کمپنی بنانے والے کاروباری افراد۔",
        "سجل والے جو تجارتی نام بدلنا چاہتے ہیں۔",
        "جن کا مجوزہ نام مسترد ہوا۔",
        "برانڈز جو ٹریڈ مارک کے مطابق نام چاہتے ہیں۔",
      ],
      steps: [
        "ترجیح کے مطابق کئی مجوزہ نام لیتے ہیں۔",
        "دستیابی اور ضوابط سے مطابقت جانچتے ہیں۔",
        "سعودی بزنس سینٹر میں ریزرویشن فالو کرتے ہیں۔",
        "منظوری فالو کرتے یا مسترد ہونے پر متبادل تجویز کرتے ہیں۔",
        "محفوظ نام سے سجل جاری کرنے کا اگلا قدم بتاتے ہیں۔",
      ],
      tips: [
        "کم از کم تین نام تیار رکھیں۔",
        "معروف برانڈز سے ملتے جلتے نام سے بچیں۔",
        "سرگرمی کے مطابق آسان نام چنیں۔",
        "اسی نام سے ڈومین اور سوشل اکاؤنٹس کی دستیابی چیک کریں۔",
        "بعد میں ٹریڈ مارک رجسٹریشن پر غور کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور ہر شہر کے کاروباری افراد کی واٹس ایپ پر خدمت کرتے ہیں۔",
      faqs: [
        { q: "تجارتی نام کیوں مسترد ہوتا ہے؟", a: "عموماً موجودہ نام سے مشابہت، ضوابط کی خلاف ورزی یا سرگرمی سے عدم مطابقت کی وجہ سے۔" },
        { q: "کیا غیر ملکی زبان میں نام ہو سکتا ہے؟", a: "اس کے ضوابط ہیں؛ ہم پہلے جانچ کرتے ہیں۔" },
        { q: "کیا ریزرویشن ٹریڈ مارک کی حفاظت دیتی ہے؟", a: "نہیں، ٹریڈ مارک الگ رجسٹر کرنا بہتر ہے۔" },
        { q: "کیا ریزرویشن مستقل ہے؟", a: "یہ ضوابط کی مقررہ مدت کے لیے عارضی ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "व्यापारिक नाम आरक्षित करना",
      secondaryKeywords: ["सऊदी बिज़नेस सेंटर नाम आरक्षण", "व्यापारिक नाम उपलब्धता", "व्यापारिक नाम नियम"],
      metaDescription:
        "तसामी के साथ सऊदी बिज़नेस सेंटर में व्यापारिक नाम आरक्षित करें: उपलब्धता और नियमों की जाँच और CR से पहले आरक्षण का फ़ॉलो-अप। हम सरकारी संस्था नहीं हैं।",
      intro:
        "व्यापारिक नाम आपके संस्थान की पहचान का पहला क़दम है, जो कमर्शियल रजिस्ट्रेशन जारी या संशोधित करने से पहले सऊदी बिज़नेस सेंटर में आरक्षित होता है। कई आवेदन इसलिए अस्वीकार होते हैं कि नाम मौजूदा नाम जैसा है, नियमों के ख़िलाफ़ है या गतिविधि से मेल नहीं खाता। तसामी विकल्प चुनने, उपलब्धता जाँचने और आरक्षण फ़ॉलो करने में मदद करता है।",
      who: [
        "नया संस्थान या कंपनी बनाने वाले उद्यमी।",
        "CR धारक जो व्यापारिक नाम बदलना चाहते हैं।",
        "जिनका प्रस्तावित नाम अस्वीकार हुआ।",
        "ब्रांड जो ट्रेडमार्क के अनुरूप नाम चाहते हैं।",
      ],
      steps: [
        "पसंद के क्रम में कई प्रस्तावित नाम लेते हैं।",
        "उपलब्धता और नियमों से मेल जाँचते हैं।",
        "सऊदी बिज़नेस सेंटर में आरक्षण फ़ॉलो करते हैं।",
        "मंज़ूरी फ़ॉलो करते या अस्वीकृति पर विकल्प सुझाते हैं।",
        "आरक्षित नाम से CR जारी करने का अगला क़दम बताते हैं।",
      ],
      tips: [
        "कम से कम तीन नाम तैयार रखें।",
        "जाने-माने ब्रांड जैसे नामों से बचें।",
        "गतिविधि के अनुसार आसान नाम चुनें।",
        "उसी नाम से डोमेन और सोशल अकाउंट की उपलब्धता जाँचें।",
        "बाद में ट्रेडमार्क रजिस्ट्रेशन पर विचार करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के उद्यमियों की व्हाट्सऐप पर सेवा करते हैं।",
      faqs: [
        { q: "व्यापारिक नाम क्यों अस्वीकार होता है?", a: "आमतौर पर मौजूदा नाम से समानता, नियमों के उल्लंघन या गतिविधि से मेल न खाने के कारण।" },
        { q: "क्या विदेशी भाषा में नाम हो सकता है?", a: "इसके नियम हैं; हम पहले जाँचते हैं।" },
        { q: "क्या आरक्षण ट्रेडमार्क सुरक्षा देता है?", a: "नहीं, ट्रेडमार्क अलग से रजिस्टर करना बेहतर है।" },
        { q: "क्या आरक्षण स्थायी है?", a: "यह नियमों की तय अवधि के लिए अस्थायी है।" },
      ],
    },
  },
};
