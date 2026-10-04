import type { GuideDef } from "./service-guides";

/**
 * Fourth batch of government guides (commercial register changes).
 * No government fees, fixed durations or legal promises.
 */
export const GOV4_GUIDES: Record<string, GuideDef> = {
  addActivity: {
    ar: {
      primaryKeyword: "إضافة نشاط للسجل التجاري",
      secondaryKeywords: ["تعديل نشاط السجل التجاري", "إضافة نشاط جديد للمؤسسة", "أنشطة السجل التجاري", "تعقيب إضافة نشاط"],
      metaDescription:
        "إضافة نشاط جديد أو تعديل أنشطة السجل التجاري مع تسامي: نساعدك في اختيار النشاط الصحيح ونتابع التعديل عبر وزارة التجارة خطوة بخطوة. لسنا جهة حكومية.",
      intro:
        "مع توسع نشاطك التجاري قد تحتاج إضافة نشاط جديد إلى السجل التجاري، مثل إضافة البيع الإلكتروني أو خدمة جديدة أو نشاط مكمل لعملك الحالي. اختيار النشاط من دليل الأنشطة المعتمد يحتاج دقة، لأن بعض الأنشطة تتطلب تراخيص إضافية من جهات أخرى مثل البلدية أو الدفاع المدني أو هيئة الغذاء والدواء، والخطأ في الاختيار قد يسبب رفض الرخص لاحقاً أو مخالفات. في تسامي نراجع معك طبيعة عملك الفعلية، ونقترح النشاط المناسب من الدليل الرسمي، ونتابع تعديل السجل عبر منصات وزارة التجارة، ونوضح لك أي تراخيص إضافية يحتاجها النشاط الجديد.",
      who: [
        "أصحاب المؤسسات الذين يريدون التوسع في خدمة أو منتج جديد.",
        "من يريد إضافة نشاط التجارة الإلكترونية لسجله الحالي.",
        "من رُفضت له رخصة بسبب عدم وجود النشاط في السجل.",
        "الشركات التي تحتاج تعديل أنشطتها لتطابق عقد التأسيس.",
      ],
      steps: [
        "نراجع أنشطة سجلك الحالية وطبيعة العمل الجديد.",
        "نختار معك النشاط المناسب من دليل الأنشطة المعتمد.",
        "نتابع رفع طلب التعديل عبر منصة وزارة التجارة.",
        "نوضح لك الرسوم الحكومية لتسددها بنفسك عبر القنوات الرسمية.",
        "نوضح لك أي تراخيص إضافية يحتاجها النشاط ونتابعها إن رغبت.",
      ],
      tips: [
        "اختر النشاط الذي يصف عملك الفعلي بدقة، وليس الأقرب فقط.",
        "تأكد إن كان النشاط يتطلب ترخيصاً بلدياً أو من جهة أخرى.",
        "راجع عقد التأسيس إذا كانت منشأتك شركة قبل التعديل.",
        "حدّث بياناتك في الأنظمة الأخرى بعد التعديل مثل الزكاة والبلدية.",
        "احتفظ بنسخة من السجل المحدث بعد الإضافة.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل يمكن إضافة أكثر من نشاط مرة واحدة؟", a: "نعم غالباً، مع مراعاة توافق الأنشطة مع بعضها ومع متطلبات التراخيص لكل نشاط." },
        { q: "هل كل الأنشطة تحتاج ترخيصاً إضافياً؟", a: "لا، بعض الأنشطة تكفي إضافتها للسجل، وبعضها يحتاج تراخيص من جهات أخرى، ونوضح لك ذلك حسب النشاط." },
        { q: "هل يختلف الإجراء للشركات عن المؤسسات الفردية؟", a: "نعم، في الشركات قد يلزم تعديل عقد التأسيس أولاً، ونراجع ذلك معك قبل البدء." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب نتابع معك الإجراءات، والتعديل يتم عبر منصات وزارة التجارة الرسمية." },
      ],
    },
    en: {
      primaryKeyword: "add activity to commercial register",
      secondaryKeywords: ["amend CR activities", "add new business activity Saudi", "commercial register activities", "add activity follow-up"],
      metaDescription:
        "Add a new activity or amend your commercial register activities with Tasami: we help you choose the right activity and follow the amendment with the Ministry of Commerce step by step. Not a government entity.",
      intro:
        "As your business grows you may need to add a new activity to your commercial register, such as e-commerce, a new service or a complementary activity. Choosing from the official activity guide needs care, because some activities require additional licences from other authorities such as the municipality, Civil Defense or SFDA, and a wrong choice can cause licence rejections or violations later. At Tasami we review your real business, suggest the right activity from the official guide, follow the register amendment through Ministry of Commerce platforms and explain any extra licences the new activity needs.",
      who: [
        "Business owners expanding into a new service or product.",
        "Anyone adding e-commerce to an existing register.",
        "People whose licence was rejected because the activity wasn't on the register.",
        "Companies needing activities aligned with their articles of association.",
      ],
      steps: [
        "We review your current register activities and the new business.",
        "We choose the right activity from the official activity guide with you.",
        "We follow the amendment request on the Ministry of Commerce platform.",
        "We explain government fees so you pay them yourself through official channels.",
        "We explain any extra licences the activity needs and follow them if you wish.",
      ],
      tips: [
        "Choose the activity that precisely describes your real work, not just the closest one.",
        "Check whether the activity needs a municipal or other licence.",
        "Review the articles of association first if you are a company.",
        "Update other systems after the change, such as ZATCA and Balady.",
        "Keep a copy of the updated register.",
      ],
      local:
        "We serve establishments in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Can several activities be added at once?", a: "Usually yes, as long as they are compatible and each one's licensing requirements are considered." },
        { q: "Do all activities need an extra licence?", a: "No, some only need adding to the register while others need licences from other authorities; we explain per activity." },
        { q: "Is the procedure different for companies?", a: "Yes, companies may need to amend their articles of association first; we review that before starting." },
        { q: "Who pays government fees?", a: "Government fees are paid through official channels in your name; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "کمرشل رجسٹر میں سرگرمی شامل کرنا",
      secondaryKeywords: ["سی آر سرگرمی میں ترمیم", "نئی کاروباری سرگرمی سعودی", "کمرشل رجسٹر سرگرمیاں", "سرگرمی شامل کرنے کا فالو اپ"],
      metaDescription:
        "تسامی کے ساتھ کمرشل رجسٹر میں نئی سرگرمی شامل کریں: ہم درست سرگرمی منتخب کرنے میں مدد کرتے ہیں اور وزارت تجارت میں ترمیم قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "کاروبار بڑھنے پر آپ کو کمرشل رجسٹر میں نئی سرگرمی شامل کرنی پڑ سکتی ہے، جیسے ای کامرس، نئی سروس یا تکمیلی سرگرمی۔ سرکاری سرگرمیوں کی فہرست سے انتخاب میں احتیاط ضروری ہے، کیونکہ بعض سرگرمیوں کے لیے بلدیہ، سول ڈیفنس یا فوڈ اینڈ ڈرگ اتھارٹی جیسے اداروں سے اضافی لائسنس چاہیے، اور غلط انتخاب بعد میں لائسنس مسترد ہونے یا خلاف ورزی کا سبب بن سکتا ہے۔ تسامی میں ہم آپ کا اصل کام دیکھتے ہیں، سرکاری فہرست سے مناسب سرگرمی تجویز کرتے ہیں، وزارت تجارت کے پلیٹ فارمز پر ترمیم فالو کرتے ہیں اور اضافی لائسنس بتاتے ہیں۔",
      who: [
        "وہ کاروباری مالکان جو نئی سروس یا پروڈکٹ میں توسیع چاہتے ہیں۔",
        "جو موجودہ رجسٹر میں ای کامرس شامل کرنا چاہتے ہیں۔",
        "جن کا لائسنس سرگرمی رجسٹر میں نہ ہونے پر مسترد ہوا۔",
        "وہ کمپنیاں جنہیں سرگرمیاں معاہدہ تاسیس کے مطابق کرنی ہیں۔",
      ],
      steps: [
        "ہم موجودہ سرگرمیاں اور نیا کام دیکھتے ہیں۔",
        "ہم سرکاری فہرست سے آپ کے ساتھ درست سرگرمی منتخب کرتے ہیں۔",
        "ہم وزارت تجارت کے پلیٹ فارم پر ترمیم کی درخواست فالو کرتے ہیں۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم سرگرمی کے لیے اضافی لائسنس بتاتے ہیں اور چاہیں تو فالو کرتے ہیں۔",
      ],
      tips: [
        "وہ سرگرمی منتخب کریں جو آپ کے اصل کام کو درست بیان کرے۔",
        "دیکھیں کہ سرگرمی کو بلدیہ یا کسی اور لائسنس کی ضرورت تو نہیں۔",
        "اگر کمپنی ہے تو پہلے معاہدہ تاسیس دیکھیں۔",
        "ترمیم کے بعد زکوٰۃ اور بلدی جیسے دوسرے نظاموں میں ڈیٹا اپڈیٹ کریں۔",
        "اپڈیٹ شدہ رجسٹر کی کاپی رکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا ایک ساتھ کئی سرگرمیاں شامل ہو سکتی ہیں؟", a: "عام طور پر ہاں، بشرطیکہ وہ آپس میں ہم آہنگ ہوں اور ہر ایک کی لائسنسنگ شرائط دیکھی جائیں۔" },
        { q: "کیا ہر سرگرمی کو اضافی لائسنس چاہیے؟", a: "نہیں، بعض صرف رجسٹر میں شامل کرنا کافی ہے اور بعض کو دوسرے اداروں کا لائسنس چاہیے۔" },
        { q: "کیا کمپنیوں کے لیے طریقہ مختلف ہے؟", a: "جی ہاں، کمپنیوں کو پہلے معاہدہ تاسیس میں ترمیم کرنی پڑ سکتی ہے۔" },
        { q: "سرکاری فیس کون ادا کرتا ہے؟", a: "سرکاری فیس آپ کے نام سے سرکاری ذرائع سے ادا ہوتی ہے؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "कमर्शियल रजिस्टर में गतिविधि जोड़ना",
      secondaryKeywords: ["सीआर गतिविधि संशोधन", "नई व्यावसायिक गतिविधि सऊदी", "कमर्शियल रजिस्टर गतिविधियां", "गतिविधि जोड़ने का फॉलो-अप"],
      metaDescription:
        "तसामी के साथ कमर्शियल रजिस्टर में नई गतिविधि जोड़ें: हम सही गतिविधि चुनने में मदद करते हैं और वाणिज्य मंत्रालय में संशोधन चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "व्यवसाय बढ़ने पर आपको कमर्शियल रजिस्टर में नई गतिविधि जोड़नी पड़ सकती है, जैसे ई-कॉमर्स, नई सेवा या पूरक गतिविधि। आधिकारिक गतिविधि सूची से चुनाव में सावधानी ज़रूरी है, क्योंकि कुछ गतिविधियों के लिए नगरपालिका, सिविल डिफेंस या खाद्य एवं औषधि प्राधिकरण जैसे संस्थानों से अतिरिक्त लाइसेंस चाहिए, और गलत चुनाव बाद में लाइसेंस अस्वीकार या उल्लंघन का कारण बन सकता है। तसामी में हम आपका वास्तविक काम देखते हैं, आधिकारिक सूची से उपयुक्त गतिविधि सुझाते हैं, वाणिज्य मंत्रालय के प्लेटफॉर्म पर संशोधन फॉलो करते हैं और अतिरिक्त लाइसेंस बताते हैं।",
      who: [
        "वे व्यवसाय मालिक जो नई सेवा या उत्पाद में विस्तार चाहते हैं।",
        "जो मौजूदा रजिस्टर में ई-कॉमर्स जोड़ना चाहते हैं।",
        "जिनका लाइसेंस गतिविधि रजिस्टर में न होने से अस्वीकार हुआ।",
        "वे कंपनियां जिन्हें गतिविधियां संस्थापन अनुबंध के अनुसार करनी हैं।",
      ],
      steps: [
        "हम मौजूदा गतिविधियां और नया काम देखते हैं।",
        "हम आधिकारिक सूची से आपके साथ सही गतिविधि चुनते हैं।",
        "हम वाणिज्य मंत्रालय के प्लेटफॉर्म पर संशोधन अनुरोध फॉलो करते हैं।",
        "हम सरकारी फीस समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम गतिविधि के लिए अतिरिक्त लाइसेंस बताते हैं और चाहें तो फॉलो करते हैं।",
      ],
      tips: [
        "वह गतिविधि चुनें जो आपके वास्तविक काम का सटीक वर्णन करे।",
        "देखें कि गतिविधि को नगरपालिका या अन्य लाइसेंस की ज़रूरत तो नहीं।",
        "अगर कंपनी है तो पहले संस्थापन अनुबंध देखें।",
        "संशोधन के बाद ज़कात और बलदी जैसी अन्य प्रणालियों में डेटा अपडेट करें।",
        "अपडेटेड रजिस्टर की कॉपी रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या एक साथ कई गतिविधियां जोड़ी जा सकती हैं?", a: "आमतौर पर हां, बशर्ते वे आपस में संगत हों और हर एक की लाइसेंसिंग शर्तें देखी जाएं।" },
        { q: "क्या हर गतिविधि को अतिरिक्त लाइसेंस चाहिए?", a: "नहीं, कुछ को केवल रजिस्टर में जोड़ना काफी है और कुछ को अन्य संस्थानों का लाइसेंस चाहिए।" },
        { q: "क्या कंपनियों के लिए प्रक्रिया अलग है?", a: "हां, कंपनियों को पहले संस्थापन अनुबंध में संशोधन करना पड़ सकता है।" },
        { q: "सरकारी फीस कौन देता है?", a: "सरकारी फीस आपके नाम से आधिकारिक माध्यम से दी जाती है; हम केवल मार्गदर्शन करते हैं।" },
      ],
    },
  },

  cancelCr: {
    ar: {
      primaryKeyword: "شطب السجل التجاري للمؤسسة",
      secondaryKeywords: ["إلغاء سجل تجاري", "شطب مؤسسة فردية", "إغلاق المؤسسة نهائياً", "متطلبات شطب السجل"],
      metaDescription:
        "شطب السجل التجاري وإغلاق المؤسسة بشكل نظامي مع تسامي: نراجع الالتزامات القائمة ونتابع إخلاء الطرف والشطب خطوة بخطوة عبر واتساب. لسنا جهة حكومية.",
      intro:
        "إغلاق المؤسسة لا يكتمل بمجرد التوقف عن العمل؛ فبقاء السجل التجاري قائماً يعني استمرار الالتزامات مثل الإقرارات الضريبية والزكوية واشتراكات التأمينات ورسوم العمالة، وقد تتراكم عليك غرامات دون أن تنتبه. شطب السجل يتطلب عادة إنهاء أوضاع العمالة، وإغلاق الحسابات لدى الجهات المرتبطة مثل الزكاة والتأمينات وقوى، وإلغاء الرخص البلدية المرتبطة بالسجل. في تسامي نراجع معك الالتزامات القائمة على المؤسسة، ونرتب خطوات إخلاء الطرف بالترتيب الصحيح، ونتابع طلب الشطب عبر منصات وزارة التجارة حتى يُغلق الملف نظامياً.",
      who: [
        "أصحاب المؤسسات الذين توقفوا عن النشاط ويريدون الإغلاق النهائي.",
        "من لديه سجل غير مستخدم تتراكم عليه التزامات.",
        "من يريد إغلاق فرع أو سجل فرعي لم يعد يحتاجه.",
        "من حاول الشطب وواجه رسالة بوجود التزامات قائمة.",
      ],
      steps: [
        "نراجع حالة السجل والالتزامات القائمة لدى الجهات المرتبطة.",
        "نرتب معك إنهاء أوضاع العمالة إن وجدت بالطريقة النظامية.",
        "نتابع إغلاق الحسابات وتقديم الإقرارات النهائية المطلوبة.",
        "نتابع إلغاء الرخص المرتبطة بالسجل مثل الرخصة البلدية.",
        "نتابع رفع طلب الشطب عبر وزارة التجارة حتى اكتماله.",
      ],
      tips: [
        "لا تؤجل الشطب بعد التوقف عن العمل حتى لا تتراكم الالتزامات.",
        "سدد أي مستحقات للعمالة قبل إنهاء علاقتهم بالمنشأة.",
        "قدّم الإقرارات النهائية المطلوبة قبل طلب الشطب.",
        "احتفظ بجميع شهادات إخلاء الطرف والمستندات بعد الإغلاق.",
        "تأكد من إلغاء الاشتراكات والخدمات المرتبطة بالسجل.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "لماذا يُرفض طلب الشطب أحياناً؟", a: "غالباً بسبب التزامات قائمة مثل عمالة على المنشأة أو إقرارات أو مستحقات لم تُسوَّ لدى جهة مرتبطة." },
        { q: "هل يجب إنهاء أوضاع العمالة أولاً؟", a: "نعم عادة، سواء بنقل خدماتهم أو الخروج النهائي حسب حالة كل عامل، ونرتب ذلك معك." },
        { q: "هل يمكن شطب سجل فرعي فقط؟", a: "نعم، يمكن شطب سجل فرعي مع بقاء السجل الرئيسي، حسب الشروط المعمول بها." },
        { q: "من يدفع الرسوم والمستحقات الحكومية؟", a: "تُدفع أي رسوم أو مستحقات حكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب نتابع معك الإجراءات، والشطب يتم عبر منصات وزارة التجارة الرسمية." },
      ],
    },
    en: {
      primaryKeyword: "cancel commercial register (CR)",
      secondaryKeywords: ["close establishment Saudi", "cancel sole proprietorship", "permanently close business", "CR cancellation requirements"],
      metaDescription:
        "Cancel your commercial register and close your establishment properly with Tasami: we review outstanding obligations and follow clearances and cancellation step by step via WhatsApp. Not a government entity.",
      intro:
        "Closing an establishment isn't complete just by stopping work; while the register remains active, obligations such as tax and zakat returns, GOSI contributions and labour fees continue, and penalties may build up unnoticed. Cancelling the register usually requires settling workers' status, closing accounts with linked authorities such as ZATCA, GOSI and Qiwa, and cancelling municipal licences linked to the register. At Tasami we review outstanding obligations, arrange clearances in the right order and follow the cancellation request through Ministry of Commerce platforms until the file is closed properly.",
      who: [
        "Owners who stopped trading and want to close permanently.",
        "Anyone with an unused register accumulating obligations.",
        "Anyone closing a branch or sub-register no longer needed.",
        "People who tried to cancel and were told obligations remain.",
      ],
      steps: [
        "We review the register status and obligations with linked authorities.",
        "We arrange settling workers' status properly, if any.",
        "We follow closing accounts and submitting required final returns.",
        "We follow cancelling licences linked to the register, such as the municipal licence.",
        "We follow the cancellation request with the Ministry of Commerce until complete.",
      ],
      tips: [
        "Don't delay cancellation after stopping work, to avoid piling obligations.",
        "Pay any dues to workers before ending their relationship with the establishment.",
        "Submit required final returns before requesting cancellation.",
        "Keep all clearance certificates and documents after closing.",
        "Cancel subscriptions and services linked to the register.",
      ],
      local:
        "We serve establishments in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Why are cancellation requests sometimes rejected?", a: "Usually because of outstanding obligations such as workers still registered or unsettled returns or dues with a linked authority." },
        { q: "Must workers' status be settled first?", a: "Usually yes, by transfer or final exit depending on each worker; we arrange that with you." },
        { q: "Can only a sub-register be cancelled?", a: "Yes, a sub-register can be cancelled while keeping the main one, under current conditions." },
        { q: "Who pays government fees and dues?", a: "Any government fees or dues are paid through official channels in your name; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "کمرشل رجسٹر منسوخ کرنا",
      secondaryKeywords: ["ادارہ بند کرنا سعودی", "انفرادی ادارے کی منسوخی", "کاروبار مستقل بند کرنا", "سی آر منسوخی کی شرائط"],
      metaDescription:
        "تسامی کے ساتھ کمرشل رجسٹر منسوخ کریں اور ادارہ قانونی طور پر بند کریں: ہم باقی ذمہ داریاں دیکھتے ہیں اور کلیئرنس و منسوخی قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "ادارہ بند کرنا صرف کام روکنے سے مکمل نہیں ہوتا؛ رجسٹر فعال رہنے تک ٹیکس اور زکوٰۃ گوشوارے، گوسی اشتراکات اور لیبر فیس جیسی ذمہ داریاں جاری رہتی ہیں اور جرمانے بغیر پتا چلے جمع ہو سکتے ہیں۔ رجسٹر منسوخ کرنے کے لیے عام طور پر ملازمین کی حیثیت طے کرنا، زکوٰۃ، گوسی اور قوی جیسے اداروں میں اکاؤنٹس بند کرنا اور رجسٹر سے منسلک بلدیہ لائسنس منسوخ کرنا ضروری ہے۔ تسامی میں ہم باقی ذمہ داریاں دیکھتے ہیں، کلیئرنس درست ترتیب سے کرتے ہیں اور وزارت تجارت کے پلیٹ فارمز پر منسوخی فالو کرتے ہیں۔",
      who: [
        "وہ مالکان جنہوں نے کام روک دیا اور مستقل بند کرنا چاہتے ہیں۔",
        "جن کا غیر استعمال شدہ رجسٹر ذمہ داریاں جمع کر رہا ہے۔",
        "جو غیر ضروری برانچ یا ذیلی رجسٹر بند کرنا چاہتے ہیں۔",
        "جنہیں منسوخی پر باقی ذمہ داریوں کا پیغام ملا۔",
      ],
      steps: [
        "ہم رجسٹر کی حیثیت اور منسلک اداروں میں ذمہ داریاں دیکھتے ہیں۔",
        "ہم ملازمین کی حیثیت قانونی طور پر طے کرنے کا انتظام کرتے ہیں۔",
        "ہم اکاؤنٹس بند کرنا اور حتمی گوشوارے جمع کرنا فالو کرتے ہیں۔",
        "ہم رجسٹر سے منسلک لائسنس جیسے بلدیہ لائسنس کی منسوخی فالو کرتے ہیں۔",
        "ہم وزارت تجارت میں منسوخی کی درخواست مکمل ہونے تک فالو کرتے ہیں۔",
      ],
      tips: [
        "کام روکنے کے بعد منسوخی میں تاخیر نہ کریں۔",
        "ملازمین کے واجبات پہلے ادا کریں۔",
        "منسوخی سے پہلے حتمی گوشوارے جمع کریں۔",
        "بند کرنے کے بعد تمام کلیئرنس سرٹیفکیٹس محفوظ رکھیں۔",
        "رجسٹر سے منسلک سبسکرپشنز اور خدمات منسوخ کریں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "منسوخی کی درخواست کبھی کیوں مسترد ہوتی ہے؟", a: "عام طور پر باقی ذمہ داریوں جیسے رجسٹرڈ ملازمین یا غیر طے شدہ گوشواروں کی وجہ سے۔" },
        { q: "کیا پہلے ملازمین کی حیثیت طے کرنی ضروری ہے؟", a: "عام طور پر ہاں، منتقلی یا خروج نہائی کے ذریعے؛ ہم یہ انتظام کرتے ہیں۔" },
        { q: "کیا صرف ذیلی رجسٹر منسوخ ہو سکتا ہے؟", a: "جی ہاں، مرکزی رجسٹر برقرار رکھتے ہوئے ذیلی رجسٹر منسوخ ہو سکتا ہے۔" },
        { q: "سرکاری فیس اور واجبات کون ادا کرتا ہے؟", a: "سرکاری فیس آپ کے نام سے سرکاری ذرائع سے ادا ہوتی ہے؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "कमर्शियल रजिस्टर रद्द करना",
      secondaryKeywords: ["संस्थान बंद करना सऊदी", "एकल स्वामित्व रद्द करना", "व्यवसाय स्थायी रूप से बंद करना", "सीआर रद्द करने की शर्तें"],
      metaDescription:
        "तसामी के साथ कमर्शियल रजिस्टर रद्द करें और संस्थान कानूनी रूप से बंद करें: हम बकाया दायित्व देखते हैं और क्लीयरेंस व रद्दीकरण चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "संस्थान बंद करना केवल काम रोकने से पूरा नहीं होता; रजिस्टर सक्रिय रहने तक टैक्स और ज़कात रिटर्न, GOSI योगदान और श्रम शुल्क जैसे दायित्व जारी रहते हैं और जुर्माने बिना पता चले जमा हो सकते हैं। रजिस्टर रद्द करने के लिए आमतौर पर कामगारों की स्थिति तय करना, ज़कात, GOSI और किवा जैसे संस्थानों में खाते बंद करना और रजिस्टर से जुड़े नगरपालिका लाइसेंस रद्द करना ज़रूरी है। तसामी में हम बकाया दायित्व देखते हैं, क्लीयरेंस सही क्रम में करते हैं और वाणिज्य मंत्रालय के प्लेटफॉर्म पर रद्दीकरण फॉलो करते हैं।",
      who: [
        "वे मालिक जिन्होंने काम रोक दिया और स्थायी रूप से बंद करना चाहते हैं।",
        "जिनका अप्रयुक्त रजिस्टर दायित्व जमा कर रहा है।",
        "जो अनावश्यक शाखा या उप-रजिस्टर बंद करना चाहते हैं।",
        "जिन्हें रद्द करते समय बकाया दायित्वों का संदेश मिला।",
      ],
      steps: [
        "हम रजिस्टर की स्थिति और जुड़े संस्थानों में दायित्व देखते हैं।",
        "हम कामगारों की स्थिति कानूनी रूप से तय करने की व्यवस्था करते हैं।",
        "हम खाते बंद करना और अंतिम रिटर्न जमा करना फॉलो करते हैं।",
        "हम रजिस्टर से जुड़े लाइसेंस जैसे नगरपालिका लाइसेंस रद्द करना फॉलो करते हैं।",
        "हम वाणिज्य मंत्रालय में रद्दीकरण अनुरोध पूरा होने तक फॉलो करते हैं।",
      ],
      tips: [
        "काम रोकने के बाद रद्दीकरण में देरी न करें।",
        "कामगारों का बकाया पहले चुकाएं।",
        "रद्दीकरण से पहले अंतिम रिटर्न जमा करें।",
        "बंद करने के बाद सभी क्लीयरेंस प्रमाणपत्र सुरक्षित रखें।",
        "रजिस्टर से जुड़ी सदस्यताएं और सेवाएं रद्द करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "रद्दीकरण अनुरोध कभी-कभी क्यों अस्वीकार होता है?", a: "आमतौर पर बकाया दायित्वों जैसे पंजीकृत कामगारों या अनिपटे रिटर्न के कारण।" },
        { q: "क्या पहले कामगारों की स्थिति तय करनी ज़रूरी है?", a: "आमतौर पर हां, ट्रांसफर या फाइनल एग्ज़िट से; हम यह व्यवस्था करते हैं।" },
        { q: "क्या केवल उप-रजिस्टर रद्द हो सकता है?", a: "हां, मुख्य रजिस्टर रखते हुए उप-रजिस्टर रद्द हो सकता है।" },
        { q: "सरकारी फीस और बकाया कौन देता है?", a: "सरकारी फीस आपके नाम से आधिकारिक माध्यम से दी जाती है; हम केवल मार्गदर्शन करते हैं।" },
      ],
    },
  },

  transferCrOwnership: {
    ar: {
      primaryKeyword: "نقل ملكية سجل تجاري",
      secondaryKeywords: ["نقل ملكية مؤسسة فردية", "بيع مؤسسة تجارية", "التنازل عن سجل تجاري", "متطلبات نقل ملكية المؤسسة"],
      metaDescription:
        "نقل ملكية السجل التجاري أو المؤسسة الفردية بين طرفين مع تسامي: نراجع المتطلبات ونرتب إخلاء الطرف ونتابع النقل خطوة بخطوة. لسنا جهة حكومية.",
      intro:
        "عند بيع مؤسسة قائمة أو التنازل عنها لشخص آخر، لا يكفي الاتفاق بين الطرفين؛ يجب نقل ملكية السجل التجاري رسمياً حتى تنتقل الحقوق والالتزامات للمالك الجديد. الإجراء يتطلب موافقة الطرفين، وتسوية الالتزامات القائمة لدى الجهات المرتبطة مثل الزكاة والتأمينات، وترتيب أوضاع العمالة والرخص المرتبطة بالمؤسسة. في تسامي نراجع حالة المؤسسة والتزاماتها مع الطرفين، ونوضح ما يجب تسويته قبل النقل، ونتابع طلب نقل الملكية عبر منصات وزارة التجارة، ثم نساعد المالك الجديد في تحديث البيانات لدى الجهات الأخرى.",
      who: [
        "من يريد بيع مؤسسته القائمة بسجلها ونشاطها.",
        "من يشتري مؤسسة قائمة ويريد نقلها باسمه.",
        "الورثة الذين يحتاجون ترتيب ملكية مؤسسة بعد الوفاة.",
        "من يريد التنازل عن مؤسسة لقريب أو شريك.",
      ],
      steps: [
        "نراجع حالة السجل والالتزامات القائمة على المؤسسة.",
        "نوضح للطرفين المتطلبات والمستندات اللازمة للنقل.",
        "نرتب تسوية الالتزامات لدى الجهات المرتبطة قبل النقل.",
        "نتابع رفع طلب نقل الملكية وموافقة الطرفين عبر المنصة.",
        "نساعد المالك الجديد في تحديث بياناته لدى البلدية والزكاة وقوى.",
      ],
      tips: [
        "اطلب كشفاً بالالتزامات القائمة قبل الاتفاق على السعر.",
        "وثّق الاتفاق بين الطرفين كتابياً وبوضوح.",
        "تأكد من وضع العمالة والرخص قبل إتمام النقل.",
        "حدّث الحسابات البنكية ونقاط البيع بعد انتقال الملكية.",
        "احتفظ بنسخة من السجل الجديد ومستندات النقل.",
      ],
      local:
        "نخدم الأفراد والمنشآت في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل تنتقل الالتزامات للمالك الجديد؟", a: "قد تنتقل بعض الالتزامات حسب الحالة، لذلك نوصي بمراجعة كل الالتزامات وتسويتها قبل النقل." },
        { q: "هل يلزم حضور الطرفين؟", a: "يتطلب الإجراء موافقة الطرفين عبر المنصات الرسمية، ونوضح لكل طرف دوره بالضبط." },
        { q: "هل يمكن نقل مؤسسة عليها عمالة؟", a: "يمكن ذلك وفق الشروط النظامية، مع ترتيب أوضاع العمالة وفق ما يتطلبه الإجراء." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية حسب اتفاق الطرفين، ونحن نوضح الخطوات فقط." },
        { q: "هل تسامي جهة حكومية أو وسيط بيع؟", a: "لا، نحن مكتب خدمات تعقيب نتابع الإجراءات فقط، ولسنا طرفاً في البيع أو التقييم." },
      ],
    },
    en: {
      primaryKeyword: "transfer of commercial register ownership",
      secondaryKeywords: ["transfer sole proprietorship ownership", "sell a business in Saudi", "assign a commercial register", "establishment transfer requirements"],
      metaDescription:
        "Transfer ownership of a commercial register or sole proprietorship between two parties with Tasami: we review requirements, arrange clearances and follow the transfer step by step. Not a government entity.",
      intro:
        "When selling or assigning an existing establishment, agreement between the parties is not enough; the commercial register must be officially transferred so rights and obligations pass to the new owner. The procedure requires both parties' approval, settling obligations with linked authorities such as ZATCA and GOSI, and arranging workers and licences linked to the establishment. At Tasami we review the establishment's status and obligations with both parties, explain what must be settled first, follow the transfer request through Ministry of Commerce platforms and help the new owner update data with other authorities.",
      who: [
        "Owners selling an existing establishment with its register and activity.",
        "Buyers wanting an existing establishment transferred to their name.",
        "Heirs arranging ownership of an establishment after a death.",
        "Anyone assigning an establishment to a relative or partner.",
      ],
      steps: [
        "We review the register status and the establishment's obligations.",
        "We explain requirements and documents to both parties.",
        "We arrange settling obligations with linked authorities before transfer.",
        "We follow the transfer request and both parties' approval on the platform.",
        "We help the new owner update data with Balady, ZATCA and Qiwa.",
      ],
      tips: [
        "Request a statement of outstanding obligations before agreeing a price.",
        "Document the agreement between the parties clearly in writing.",
        "Check workers' and licences' status before completing the transfer.",
        "Update bank accounts and POS devices after the transfer.",
        "Keep a copy of the new register and transfer documents.",
      ],
      local:
        "We serve individuals and establishments in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do obligations pass to the new owner?", a: "Some may, depending on the case, so we recommend reviewing and settling all obligations before transfer." },
        { q: "Must both parties be involved?", a: "The procedure requires both parties' approval on official platforms; we explain each party's role." },
        { q: "Can an establishment with workers be transferred?", a: "Yes, under regulatory conditions, with workers' status arranged as the procedure requires." },
        { q: "Is Tasami a government entity or a business broker?", a: "No, we are a follow-up services office handling procedures only, not a party to the sale or valuation." },
      ],
    },
    ur: {
      primaryKeyword: "کمرشل رجسٹر کی ملکیت منتقلی",
      secondaryKeywords: ["انفرادی ادارے کی ملکیت منتقلی", "سعودی میں کاروبار فروخت", "کمرشل رجسٹر سے دستبرداری", "ادارہ منتقلی کی شرائط"],
      metaDescription:
        "تسامی کے ساتھ کمرشل رجسٹر یا انفرادی ادارے کی ملکیت دو فریقوں کے درمیان منتقل کریں: ہم شرائط دیکھتے ہیں، کلیئرنس کا انتظام کرتے ہیں اور منتقلی قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "موجودہ ادارہ فروخت یا کسی کو منتقل کرتے وقت فریقین کا معاہدہ کافی نہیں؛ کمرشل رجسٹر کی ملکیت سرکاری طور پر منتقل ہونی چاہیے تاکہ حقوق اور ذمہ داریاں نئے مالک کو منتقل ہوں۔ اس کے لیے دونوں فریقوں کی منظوری، زکوٰۃ اور گوسی جیسے اداروں میں ذمہ داریوں کا تصفیہ اور ادارے سے منسلک ملازمین و لائسنسوں کا انتظام ضروری ہے۔ تسامی میں ہم دونوں فریقوں کے ساتھ ادارے کی حیثیت اور ذمہ داریاں دیکھتے ہیں، بتاتے ہیں کہ پہلے کیا طے کرنا ہے، وزارت تجارت میں منتقلی فالو کرتے ہیں اور نئے مالک کو دوسرے اداروں میں ڈیٹا اپڈیٹ کرنے میں مدد دیتے ہیں۔",
      who: [
        "وہ مالکان جو اپنا موجودہ ادارہ رجسٹر سمیت فروخت کرنا چاہتے ہیں۔",
        "وہ خریدار جو موجودہ ادارہ اپنے نام کرانا چاہتے ہیں۔",
        "وہ ورثا جنہیں وفات کے بعد ادارے کی ملکیت ترتیب دینی ہے۔",
        "جو ادارہ کسی رشتہ دار یا شریک کو منتقل کرنا چاہتے ہیں۔",
      ],
      steps: [
        "ہم رجسٹر کی حیثیت اور ادارے کی ذمہ داریاں دیکھتے ہیں۔",
        "ہم دونوں فریقوں کو شرائط اور دستاویزات بتاتے ہیں۔",
        "ہم منتقلی سے پہلے منسلک اداروں میں ذمہ داریوں کا تصفیہ کراتے ہیں۔",
        "ہم پلیٹ فارم پر منتقلی کی درخواست اور فریقین کی منظوری فالو کرتے ہیں۔",
        "ہم نئے مالک کو بلدی، زکوٰۃ اور قوی میں ڈیٹا اپڈیٹ کرنے میں مدد دیتے ہیں۔",
      ],
      tips: [
        "قیمت طے کرنے سے پہلے باقی ذمہ داریوں کی تفصیل مانگیں۔",
        "فریقین کا معاہدہ واضح طور پر تحریری بنائیں۔",
        "منتقلی سے پہلے ملازمین اور لائسنسوں کی حیثیت دیکھیں۔",
        "منتقلی کے بعد بینک اکاؤنٹس اور POS اپڈیٹ کریں۔",
        "نئے رجسٹر اور منتقلی کے کاغذات کی کاپی رکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں افراد اور اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا ذمہ داریاں نئے مالک کو منتقل ہوتی ہیں؟", a: "کیس کے مطابق کچھ ہو سکتی ہیں، اس لیے منتقلی سے پہلے سب طے کرنے کا مشورہ دیتے ہیں۔" },
        { q: "کیا دونوں فریقوں کی شمولیت ضروری ہے؟", a: "جی ہاں، سرکاری پلیٹ فارم پر دونوں کی منظوری چاہیے؛ ہم ہر فریق کا کردار بتاتے ہیں۔" },
        { q: "کیا ملازمین والا ادارہ منتقل ہو سکتا ہے؟", a: "جی ہاں، قانونی شرائط کے تحت ملازمین کی حیثیت ترتیب دے کر۔" },
        { q: "کیا تسامی سرکاری ادارہ یا بروکر ہے؟", a: "نہیں، ہم صرف طریقہ کار کا فالو اپ کرتے ہیں، فروخت یا قیمت میں فریق نہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "कमर्शियल रजिस्टर स्वामित्व ट्रांसफर",
      secondaryKeywords: ["एकल स्वामित्व ट्रांसफर", "सऊदी में व्यवसाय बेचना", "कमर्शियल रजिस्टर हस्तांतरण", "संस्थान ट्रांसफर की शर्तें"],
      metaDescription:
        "तसामी के साथ कमर्शियल रजिस्टर या एकल स्वामित्व का स्वामित्व दो पक्षों के बीच ट्रांसफर करें: हम शर्तें देखते हैं, क्लीयरेंस व्यवस्थित करते हैं और ट्रांसफर चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "मौजूदा संस्थान बेचते या किसी को सौंपते समय पक्षों का समझौता काफी नहीं; कमर्शियल रजिस्टर का स्वामित्व आधिकारिक रूप से ट्रांसफर होना चाहिए ताकि अधिकार और दायित्व नए मालिक को मिलें। इसके लिए दोनों पक्षों की मंज़ूरी, ज़कात और GOSI जैसे संस्थानों में दायित्वों का निपटान और संस्थान से जुड़े कामगारों व लाइसेंसों की व्यवस्था ज़रूरी है। तसामी में हम दोनों पक्षों के साथ संस्थान की स्थिति और दायित्व देखते हैं, बताते हैं कि पहले क्या निपटाना है, वाणिज्य मंत्रालय में ट्रांसफर फॉलो करते हैं और नए मालिक को अन्य संस्थानों में डेटा अपडेट करने में मदद करते हैं।",
      who: [
        "वे मालिक जो अपना मौजूदा संस्थान रजिस्टर सहित बेचना चाहते हैं।",
        "वे खरीदार जो मौजूदा संस्थान अपने नाम कराना चाहते हैं।",
        "वे वारिस जिन्हें मृत्यु के बाद संस्थान का स्वामित्व व्यवस्थित करना है।",
        "जो संस्थान किसी रिश्तेदार या साझेदार को सौंपना चाहते हैं।",
      ],
      steps: [
        "हम रजिस्टर की स्थिति और संस्थान के दायित्व देखते हैं।",
        "हम दोनों पक्षों को शर्तें और दस्तावेज़ बताते हैं।",
        "हम ट्रांसफर से पहले जुड़े संस्थानों में दायित्वों का निपटान कराते हैं।",
        "हम प्लेटफॉर्म पर ट्रांसफर अनुरोध और दोनों पक्षों की मंज़ूरी फॉलो करते हैं।",
        "हम नए मालिक को बलदी, ज़कात और किवा में डेटा अपडेट करने में मदद करते हैं।",
      ],
      tips: [
        "कीमत तय करने से पहले बकाया दायित्वों का विवरण मांगें।",
        "पक्षों का समझौता स्पष्ट रूप से लिखित में करें।",
        "ट्रांसफर से पहले कामगारों और लाइसेंसों की स्थिति देखें।",
        "ट्रांसफर के बाद बैंक खाते और POS अपडेट करें।",
        "नए रजिस्टर और ट्रांसफर दस्तावेज़ों की कॉपी रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में व्यक्तियों और संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या दायित्व नए मालिक को जाते हैं?", a: "मामले के अनुसार कुछ जा सकते हैं, इसलिए ट्रांसफर से पहले सब निपटाने की सलाह देते हैं।" },
        { q: "क्या दोनों पक्षों की भागीदारी ज़रूरी है?", a: "हां, आधिकारिक प्लेटफॉर्म पर दोनों की मंज़ूरी चाहिए; हम हर पक्ष की भूमिका बताते हैं।" },
        { q: "क्या कामगारों वाला संस्थान ट्रांसफर हो सकता है?", a: "हां, कानूनी शर्तों के तहत कामगारों की स्थिति व्यवस्थित करके।" },
        { q: "क्या तसामी सरकारी संस्था या ब्रोकर है?", a: "नहीं, हम केवल प्रक्रिया का फॉलो-अप करते हैं, बिक्री या मूल्यांकन में पक्ष नहीं।" },
      ],
    },
  },

  transferActivityLicense: {
    ar: {
      primaryKeyword: "نقل رخصة نشاط تجاري",
      secondaryKeywords: ["نقل رخصة بلدية لموقع جديد", "نقل رخصة محل", "تعديل موقع الرخصة عبر بلدي", "نقل رخصة لمالك جديد"],
      metaDescription:
        "نقل رخصة النشاط البلدية إلى موقع جديد أو مالك جديد مع تسامي: نراجع اشتراطات الموقع ونتابع الطلب عبر منصة بلدي خطوة بخطوة. لسنا جهة حكومية.",
      intro:
        "عند انتقال محلك إلى موقع جديد أو انتقال ملكية النشاط لشخص آخر، تحتاج الرخصة البلدية إلى تحديث رسمي حتى لا تعمل برخصة لا تطابق الواقع، وهو ما قد يعرّضك لمخالفات أو إغلاق. الموقع الجديد يجب أن يستوفي اشتراطات النشاط مثل المساحة والاستخدام المسموح والسلامة، وقد يحتاج شهادة سلامة من الدفاع المدني. في تسامي نراجع معك اشتراطات النشاط على الموقع الجديد قبل توقيع الإيجار إن أمكن، ونتابع طلب النقل أو التعديل عبر منصة بلدي، ونوضح لك أي متطلبات إضافية حتى تصدر الرخصة المحدثة.",
      who: [
        "أصحاب المحلات الذين ينتقلون إلى موقع جديد.",
        "من اشترى نشاطاً قائماً ويريد تحديث الرخصة باسمه.",
        "من يريد التوسع إلى محل أكبر بنفس النشاط.",
        "من لديه رخصة لا تطابق موقعه الحالي ويريد تصحيحها.",
      ],
      steps: [
        "نراجع الرخصة الحالية ونوع التغيير المطلوب: موقع أو مالك.",
        "نراجع اشتراطات النشاط على الموقع الجديد.",
        "نتابع رفع طلب النقل أو التعديل عبر منصة بلدي.",
        "نوضح لك الرسوم الحكومية لتسددها بنفسك عبر القنوات الرسمية.",
        "نتابع المتطلبات الإضافية مثل شهادة السلامة حتى صدور الرخصة.",
      ],
      tips: [
        "راجع اشتراطات النشاط قبل توقيع عقد إيجار الموقع الجديد.",
        "وثّق عقد الإيجار إلكترونياً عبر المنصة المعتمدة.",
        "تأكد أن السجل التجاري يتضمن النشاط بشكل صحيح.",
        "جهّز متطلبات السلامة مبكراً لتجنب التأخير.",
        "لا تبدأ العمل في الموقع الجديد قبل تحديث الرخصة.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل يمكن نقل الرخصة لموقع في مدينة أخرى؟", a: "يعتمد ذلك على الأنظمة المعمول بها ونوع النشاط، وقد يلزم إصدار رخصة جديدة، ونراجع حالتك قبل البدء." },
        { q: "هل أحتاج شهادة سلامة للموقع الجديد؟", a: "غالباً نعم حسب النشاط والمساحة، ونوضح لك المتطلبات قبل التقديم." },
        { q: "ماذا لو كان الموقع الجديد لا يطابق الاشتراطات؟", a: "قد يُرفض الطلب، لذلك ننصح بمراجعة الاشتراطات قبل الالتزام بالإيجار." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب نتابع معك الإجراءات، والرخصة تصدر من منصة بلدي الرسمية." },
      ],
    },
    en: {
      primaryKeyword: "transfer business activity licence",
      secondaryKeywords: ["move municipal licence to new location", "transfer shop licence", "change licence location on Balady", "transfer licence to new owner"],
      metaDescription:
        "Transfer your municipal activity licence to a new location or owner with Tasami: we review site requirements and follow the request on Balady step by step. Not a government entity.",
      intro:
        "When your shop moves to a new location or the business changes hands, the municipal licence needs an official update so you are not operating with a licence that doesn't match reality, which may lead to violations or closure. The new site must meet the activity's requirements such as area, permitted use and safety, and may need a Civil Defense safety certificate. At Tasami we review the activity requirements at the new site, ideally before you sign the lease, follow the transfer or amendment request on Balady and explain any extra requirements until the updated licence is issued.",
      who: [
        "Shop owners moving to a new location.",
        "Buyers of an existing business updating the licence to their name.",
        "Anyone expanding to a bigger shop with the same activity.",
        "Anyone whose licence doesn't match their current site.",
      ],
      steps: [
        "We review the current licence and the change needed: location or owner.",
        "We review the activity requirements at the new site.",
        "We follow the transfer or amendment request on Balady.",
        "We explain government fees so you pay them yourself through official channels.",
        "We follow extra requirements such as the safety certificate until issuance.",
      ],
      tips: [
        "Review activity requirements before signing the new lease.",
        "Register the lease electronically on the approved platform.",
        "Make sure the commercial register lists the activity correctly.",
        "Prepare safety requirements early to avoid delays.",
        "Don't start operating at the new site before the licence is updated.",
      ],
      local:
        "We serve establishments in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Can the licence move to another city?", a: "It depends on regulations and activity type; a new licence may be needed. We review your case first." },
        { q: "Do I need a safety certificate for the new site?", a: "Usually yes depending on activity and area; we explain requirements before applying." },
        { q: "What if the new site doesn't meet requirements?", a: "The request may be rejected, so we advise checking requirements before committing to the lease." },
        { q: "Who pays government fees?", a: "Government fees are paid through official channels in your name; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "کاروباری سرگرمی لائسنس کی منتقلی",
      secondaryKeywords: ["بلدیہ لائسنس نئی جگہ منتقل", "دکان لائسنس منتقلی", "بلدی پر لائسنس کی جگہ تبدیل", "نئے مالک کو لائسنس منتقلی"],
      metaDescription:
        "تسامی کے ساتھ بلدیہ سرگرمی لائسنس نئی جگہ یا نئے مالک کو منتقل کریں: ہم جگہ کی شرائط دیکھتے ہیں اور بلدی پر درخواست قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "جب آپ کی دکان نئی جگہ منتقل ہو یا کاروبار کسی اور کے پاس جائے، تو بلدیہ لائسنس کی سرکاری اپڈیٹ ضروری ہے تاکہ آپ ایسے لائسنس سے کام نہ کریں جو حقیقت کے مطابق نہ ہو، جس سے خلاف ورزی یا بندش ہو سکتی ہے۔ نئی جگہ کو سرگرمی کی شرائط جیسے رقبہ، اجازت یافتہ استعمال اور حفاظت پوری کرنی چاہئیں، اور سول ڈیفنس سیفٹی سرٹیفکیٹ کی ضرورت ہو سکتی ہے۔ تسامی میں ہم نئی جگہ پر سرگرمی کی شرائط دیکھتے ہیں، بہتر ہے کرایہ نامے سے پہلے، بلدی پر منتقلی فالو کرتے ہیں اور اضافی شرائط بتاتے ہیں۔",
      who: [
        "وہ دکاندار جو نئی جگہ منتقل ہو رہے ہیں۔",
        "موجودہ کاروبار کے خریدار جو لائسنس اپنے نام کرانا چاہتے ہیں۔",
        "جو اسی سرگرمی کے ساتھ بڑی دکان میں جانا چاہتے ہیں۔",
        "جن کا لائسنس موجودہ جگہ سے مطابقت نہیں رکھتا۔",
      ],
      steps: [
        "ہم موجودہ لائسنس اور مطلوبہ تبدیلی دیکھتے ہیں: جگہ یا مالک۔",
        "ہم نئی جگہ پر سرگرمی کی شرائط دیکھتے ہیں۔",
        "ہم بلدی پر منتقلی یا ترمیم کی درخواست فالو کرتے ہیں۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم سیفٹی سرٹیفکیٹ جیسی اضافی شرائط اجرا تک فالو کرتے ہیں۔",
      ],
      tips: [
        "نیا کرایہ نامہ کرنے سے پہلے سرگرمی کی شرائط دیکھیں۔",
        "کرایہ نامہ منظور شدہ پلیٹ فارم پر الیکٹرانک رجسٹر کریں۔",
        "یقینی بنائیں کہ کمرشل رجسٹر میں سرگرمی درست درج ہے۔",
        "تاخیر سے بچنے کے لیے حفاظتی شرائط جلد تیار کریں۔",
        "لائسنس اپڈیٹ ہونے سے پہلے نئی جگہ پر کام شروع نہ کریں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا لائسنس دوسرے شہر منتقل ہو سکتا ہے؟", a: "یہ قوانین اور سرگرمی پر منحصر ہے؛ نیا لائسنس درکار ہو سکتا ہے۔" },
        { q: "کیا نئی جگہ کے لیے سیفٹی سرٹیفکیٹ چاہیے؟", a: "عام طور پر ہاں، سرگرمی اور رقبے کے مطابق؛ ہم پہلے شرائط بتاتے ہیں۔" },
        { q: "اگر نئی جگہ شرائط پوری نہ کرے تو؟", a: "درخواست مسترد ہو سکتی ہے، اس لیے کرایہ سے پہلے شرائط دیکھنے کا مشورہ ہے۔" },
        { q: "سرکاری فیس کون ادا کرتا ہے؟", a: "سرکاری فیس آپ کے نام سے سرکاری ذرائع سے ادا ہوتی ہے؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "व्यावसायिक गतिविधि लाइसेंस ट्रांसफर",
      secondaryKeywords: ["नगरपालिका लाइसेंस नई जगह ट्रांसफर", "दुकान लाइसेंस ट्रांसफर", "बलदी पर लाइसेंस स्थान बदलना", "नए मालिक को लाइसेंस ट्रांसफर"],
      metaDescription:
        "तसामी के साथ नगरपालिका गतिविधि लाइसेंस नई जगह या नए मालिक को ट्रांसफर करें: हम स्थान की शर्तें देखते हैं और बलदी पर अनुरोध चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "जब आपकी दुकान नई जगह जाए या व्यवसाय किसी और के पास जाए, तो नगरपालिका लाइसेंस का आधिकारिक अपडेट ज़रूरी है ताकि आप ऐसे लाइसेंस से काम न करें जो वास्तविकता से मेल न खाए, जिससे उल्लंघन या बंदी हो सकती है। नई जगह को गतिविधि की शर्तें जैसे क्षेत्रफल, अनुमत उपयोग और सुरक्षा पूरी करनी चाहिए, और सिविल डिफेंस सुरक्षा प्रमाणपत्र की ज़रूरत हो सकती है। तसामी में हम नई जगह पर गतिविधि की शर्तें देखते हैं, बेहतर है किराया अनुबंध से पहले, बलदी पर ट्रांसफर फॉलो करते हैं और अतिरिक्त शर्तें बताते हैं।",
      who: [
        "वे दुकानदार जो नई जगह जा रहे हैं।",
        "मौजूदा व्यवसाय के खरीदार जो लाइसेंस अपने नाम कराना चाहते हैं।",
        "जो उसी गतिविधि के साथ बड़ी दुकान में जाना चाहते हैं।",
        "जिनका लाइसेंस मौजूदा जगह से मेल नहीं खाता।",
      ],
      steps: [
        "हम मौजूदा लाइसेंस और आवश्यक बदलाव देखते हैं: स्थान या मालिक।",
        "हम नई जगह पर गतिविधि की शर्तें देखते हैं।",
        "हम बलदी पर ट्रांसफर या संशोधन अनुरोध फॉलो करते हैं।",
        "हम सरकारी फीस समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम सुरक्षा प्रमाणपत्र जैसी अतिरिक्त शर्तें जारी होने तक फॉलो करते हैं।",
      ],
      tips: [
        "नया किराया अनुबंध करने से पहले गतिविधि की शर्तें देखें।",
        "किराया अनुबंध अनुमोदित प्लेटफॉर्म पर इलेक्ट्रॉनिक रूप से दर्ज करें।",
        "सुनिश्चित करें कि कमर्शियल रजिस्टर में गतिविधि सही दर्ज है।",
        "देरी से बचने के लिए सुरक्षा शर्तें जल्दी तैयार करें।",
        "लाइसेंस अपडेट होने से पहले नई जगह पर काम शुरू न करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या लाइसेंस दूसरे शहर ट्रांसफर हो सकता है?", a: "यह नियमों और गतिविधि पर निर्भर है; नया लाइसेंस चाहिए हो सकता है।" },
        { q: "क्या नई जगह के लिए सुरक्षा प्रमाणपत्र चाहिए?", a: "आमतौर पर हां, गतिविधि और क्षेत्रफल के अनुसार; हम पहले शर्तें बताते हैं।" },
        { q: "अगर नई जगह शर्तें पूरी न करे तो?", a: "अनुरोध अस्वीकार हो सकता है, इसलिए किराए से पहले शर्तें देखने की सलाह है।" },
        { q: "सरकारी फीस कौन देता है?", a: "सरकारी फीस आपके नाम से आधिकारिक माध्यम से दी जाती है; हम केवल मार्गदर्शन करते हैं।" },
      ],
    },
  },
};
