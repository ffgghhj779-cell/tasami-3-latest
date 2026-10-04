import type { GuideDef } from "./service-guides";

/**
 * Third batch of government guides (passports + labor follow-ups).
 * No government fees, fixed durations or legal promises.
 */
export const GOV3_GUIDES: Record<string, GuideDef> = {
  driverIqamaRenew: {
    ar: {
      primaryKeyword: "تجديد إقامة سائق خاص",
      secondaryKeywords: ["تجديد اقامة عامل منزلي", "تجديد إقامة سائق عبر أبشر", "تعقيب تجديد إقامة", "إقامة منتهية سائق خاص"],
      metaDescription:
        "تجديد إقامة السائق الخاص أو العامل المنزلي مع تسامي: نراجع المتطلبات ونتابع التجديد عبر أبشر خطوة بخطوة على واتساب. لسنا جهة حكومية.",
      intro:
        "تجديد إقامة السائق الخاص أو العامل المنزلي من أكثر المعاملات التي يتأخر فيها الكفلاء، لأنها مرتبطة بأكثر من شرط في نفس الوقت: صلاحية الجواز، وسداد الرسوم الحكومية، وعدم وجود مخالفات أو بلاغات على العامل، وأحياناً تحديث بيانات في أبشر. أي نقص في هذه الشروط يوقف التجديد ويعرّضك لغرامات التأخير. في تسامي نراجع حالة الإقامة معك أولاً، ونوضح لك ما ينقص، ثم نتابع خطوات التجديد عبر أبشر أفراد حتى تصدر الإقامة الجديدة، وكل ذلك بلغة بسيطة وعبر واتساب دون مشاوير.",
      who: [
        "الكفلاء الذين اقترب انتهاء إقامة سائقهم الخاص.",
        "الأسر التي لديها عاملة منزلية وتحتاج تجديد إقامتها.",
        "من انتهت إقامة عامله ويريد تصحيح الوضع بسرعة.",
        "من واجه رسالة خطأ في أبشر ولا يعرف سببها.",
      ],
      steps: [
        "نراجع معك تاريخ انتهاء الإقامة وصلاحية جواز العامل.",
        "نتأكد من عدم وجود مخالفات مرورية أو بلاغات تمنع التجديد.",
        "نوضح لك الرسوم الحكومية المطلوبة لتسددها بنفسك عبر القنوات الرسمية.",
        "نتابع تنفيذ التجديد عبر أبشر أفراد ونراجع ظهور التاريخ الجديد.",
        "نذكّرك بخطوات طباعة الإقامة أو استخدام النسخة الرقمية حسب الحاجة.",
      ],
      tips: [
        "ابدأ التجديد قبل انتهاء الإقامة بوقت كافٍ لتجنب غرامات التأخير.",
        "تأكد من صلاحية جواز العامل، فبعض الحالات تتطلب تجديده أولاً.",
        "سدد المخالفات المرورية المسجلة على العامل قبل البدء.",
        "احتفظ بنسخة من الإقامة والجواز في مكان آمن.",
        "حدّث رقم جوالك في أبشر لتصلك رسائل التنبيه.",
      ],
      local:
        "نخدم الكفلاء في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب نتابع معك الإجراءات، والتجديد نفسه يتم عبر المنصات الرسمية مثل أبشر." },
        { q: "ماذا لو انتهت الإقامة بالفعل؟", a: "يمكن التجديد غالباً مع سداد غرامة التأخير المقررة نظاماً، ونوضح لك وضع حالتك قبل البدء." },
        { q: "هل يلزم وجود العامل داخل المملكة؟", a: "يختلف ذلك حسب الحالة ونوع الإجراء، ونراجع معك وضع العامل قبل أي خطوة." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل يمكن تجديد إقامة أكثر من عامل معاً؟", a: "نعم، نتابع تجديد إقامات أكثر من عامل منزلي لنفس الكفيل ونرتب لك المواعيد والمتطلبات لكل واحد منهم." },
      ],
    },
    en: {
      primaryKeyword: "private driver iqama renewal",
      secondaryKeywords: ["domestic worker iqama renewal", "renew driver iqama via Absher", "iqama renewal follow-up", "expired driver iqama"],
      metaDescription:
        "Renew your private driver's or domestic worker's iqama with Tasami: we check requirements and follow the renewal on Absher step by step via WhatsApp. Not a government entity.",
      intro:
        "Renewing the iqama of a private driver or domestic worker is one of the transactions sponsors most often delay, because several conditions must be met at once: a valid passport, paid government fees, no violations or reports on the worker, and sometimes updated Absher data. Missing any of these stops the renewal and can lead to late penalties. At Tasami we first review the iqama status with you, explain what is missing, then follow the renewal steps on Absher Individuals until the new iqama is issued, all in simple language over WhatsApp.",
      who: [
        "Sponsors whose private driver's iqama is about to expire.",
        "Families with a housemaid whose iqama needs renewal.",
        "Anyone whose worker's iqama has already expired and wants to fix it quickly.",
        "People who hit an Absher error message and don't know why.",
      ],
      steps: [
        "We review the iqama expiry date and the worker's passport validity.",
        "We check there are no traffic violations or reports blocking renewal.",
        "We explain the government fees so you pay them yourself through official channels.",
        "We follow the renewal on Absher Individuals and confirm the new date appears.",
        "We remind you how to print the iqama or use the digital version.",
      ],
      tips: [
        "Start the renewal well before expiry to avoid late penalties.",
        "Check the worker's passport validity; some cases require renewing it first.",
        "Settle any traffic violations registered on the worker first.",
        "Keep copies of the iqama and passport somewhere safe.",
        "Update your mobile number on Absher to receive alerts.",
      ],
      local:
        "We serve sponsors in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Is Tasami a government entity?", a: "No, we are a follow-up services office; the renewal itself is done through official platforms such as Absher." },
        { q: "What if the iqama has already expired?", a: "Renewal is usually still possible after paying the statutory late penalty; we review your case before starting." },
        { q: "Must the worker be inside the Kingdom?", a: "It depends on the case and procedure; we review the worker's situation before any step." },
        { q: "Who pays government fees?", a: "Government fees are paid through official channels in your name; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "پرائیویٹ ڈرائیور اقامہ تجدید",
      secondaryKeywords: ["گھریلو ملازم اقامہ تجدید", "ابشر سے ڈرائیور اقامہ تجدید", "اقامہ تجدید فالو اپ", "ختم شدہ اقامہ ڈرائیور"],
      metaDescription:
        "تسامی کے ساتھ پرائیویٹ ڈرائیور یا گھریلو ملازم کا اقامہ تجدید کریں: ہم شرائط چیک کرتے ہیں اور ابشر پر تجدید واٹس ایپ پر قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "پرائیویٹ ڈرائیور یا گھریلو ملازم کے اقامہ کی تجدید میں اکثر کفیل تاخیر کر دیتے ہیں، کیونکہ ایک ہی وقت میں کئی شرائط پوری ہونی ضروری ہیں: درست پاسپورٹ، سرکاری فیس کی ادائیگی، ملازم پر کوئی خلاف ورزی یا رپورٹ نہ ہونا، اور کبھی ابشر میں ڈیٹا اپڈیٹ کرنا۔ ان میں سے کوئی کمی تجدید روک دیتی ہے اور تاخیر کا جرمانہ لگ سکتا ہے۔ تسامی میں ہم پہلے آپ کے ساتھ اقامہ کی صورتحال دیکھتے ہیں، بتاتے ہیں کہ کیا کمی ہے، پھر ابشر افراد پر تجدید کے مراحل نیا اقامہ جاری ہونے تک فالو کرتے ہیں، آسان زبان میں اور واٹس ایپ کے ذریعے۔",
      who: [
        "وہ کفیل جن کے پرائیویٹ ڈرائیور کا اقامہ ختم ہونے والا ہے۔",
        "وہ خاندان جن کی گھریلو ملازمہ کا اقامہ تجدید ہونا ہے۔",
        "جن کے ملازم کا اقامہ ختم ہو چکا ہے اور جلد درست کرنا چاہتے ہیں۔",
        "جنہیں ابشر میں ایرر آیا اور وجہ معلوم نہیں۔",
      ],
      steps: [
        "ہم اقامہ کی میعاد اور ملازم کے پاسپورٹ کی مدت چیک کرتے ہیں۔",
        "ہم یقینی بناتے ہیں کہ کوئی ٹریفک خلاف ورزی یا رپورٹ تجدید میں رکاوٹ نہ ہو۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم ابشر افراد پر تجدید فالو کرتے ہیں اور نئی تاریخ کی تصدیق کرتے ہیں۔",
        "ہم اقامہ پرنٹ کرنے یا ڈیجیٹل ورژن استعمال کرنے کا طریقہ بتاتے ہیں۔",
      ],
      tips: [
        "جرمانے سے بچنے کے لیے میعاد ختم ہونے سے کافی پہلے تجدید شروع کریں۔",
        "ملازم کا پاسپورٹ چیک کریں؛ بعض صورتوں میں پہلے اس کی تجدید ضروری ہے۔",
        "ملازم پر درج ٹریفک خلاف ورزیاں پہلے ادا کریں۔",
        "اقامہ اور پاسپورٹ کی کاپیاں محفوظ رکھیں۔",
        "الرٹس کے لیے ابشر میں اپنا موبائل نمبر اپڈیٹ رکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں کفیلوں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم فالو اپ سروسز آفس ہیں؛ تجدید خود ابشر جیسے سرکاری پلیٹ فارمز سے ہوتی ہے۔" },
        { q: "اگر اقامہ ختم ہو چکا ہو تو؟", a: "عام طور پر مقررہ جرمانہ ادا کر کے تجدید ممکن ہے؛ ہم پہلے آپ کا کیس دیکھتے ہیں۔" },
        { q: "کیا ملازم کا مملکت میں ہونا ضروری ہے؟", a: "یہ کیس اور طریقہ کار پر منحصر ہے؛ ہم ہر قدم سے پہلے صورتحال دیکھتے ہیں۔" },
        { q: "سرکاری فیس کون ادا کرتا ہے؟", a: "سرکاری فیس آپ کے نام سے سرکاری ذرائع سے ادا ہوتی ہے؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "प्राइवेट ड्राइवर इकामा रिन्यूअल",
      secondaryKeywords: ["घरेलू कामगार इकामा रिन्यूअल", "अबशर से ड्राइवर इकामा रिन्यू", "इकामा रिन्यूअल फॉलो-अप", "एक्सपायर्ड ड्राइवर इकामा"],
      metaDescription:
        "तसामी के साथ प्राइवेट ड्राइवर या घरेलू कामगार का इकामा रिन्यू करें: हम शर्तें जांचते हैं और अबशर पर रिन्यूअल व्हाट्सऐप पर चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "प्राइवेट ड्राइवर या घरेलू कामगार का इकामा रिन्यू करने में अक्सर कफ़ील देर कर देते हैं, क्योंकि एक साथ कई शर्तें पूरी होनी चाहिए: वैध पासपोर्ट, सरकारी फीस का भुगतान, कामगार पर कोई उल्लंघन या रिपोर्ट न होना, और कभी-कभी अबशर में डेटा अपडेट। इनमें से कोई कमी रिन्यूअल रोक देती है और देरी का जुर्माना लग सकता है। तसामी में हम पहले आपके साथ इकामा की स्थिति देखते हैं, बताते हैं कि क्या कमी है, फिर अबशर इंडिविजुअल्स पर नया इकामा जारी होने तक रिन्यूअल के चरण फॉलो करते हैं, आसान भाषा में और व्हाट्सऐप पर।",
      who: [
        "वे कफ़ील जिनके प्राइवेट ड्राइवर का इकामा खत्म होने वाला है।",
        "वे परिवार जिनकी घरेलू कामगार का इकामा रिन्यू होना है।",
        "जिनके कामगार का इकामा खत्म हो चुका है और जल्दी ठीक करना चाहते हैं।",
        "जिन्हें अबशर में एरर आया और कारण पता नहीं।",
      ],
      steps: [
        "हम इकामा की समाप्ति तिथि और कामगार के पासपोर्ट की वैधता देखते हैं।",
        "हम जांचते हैं कि कोई ट्रैफिक उल्लंघन या रिपोर्ट रिन्यूअल में बाधा न हो।",
        "हम सरकारी फीस समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम अबशर इंडिविजुअल्स पर रिन्यूअल फॉलो करते हैं और नई तारीख की पुष्टि करते हैं।",
        "हम इकामा प्रिंट करने या डिजिटल संस्करण इस्तेमाल करने का तरीका बताते हैं।",
      ],
      tips: [
        "जुर्माने से बचने के लिए समाप्ति से काफी पहले रिन्यूअल शुरू करें।",
        "कामगार का पासपोर्ट जांचें; कुछ मामलों में पहले उसका रिन्यूअल ज़रूरी है।",
        "कामगार पर दर्ज ट्रैफिक उल्लंघन पहले चुका दें।",
        "इकामा और पासपोर्ट की कॉपी सुरक्षित रखें।",
        "अलर्ट के लिए अबशर में अपना मोबाइल नंबर अपडेट रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में कफ़ीलों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम फॉलो-अप सेवा कार्यालय हैं; रिन्यूअल स्वयं अबशर जैसे आधिकारिक प्लेटफॉर्म से होता है।" },
        { q: "अगर इकामा पहले ही खत्म हो गया हो?", a: "आमतौर पर तय जुर्माना भरकर रिन्यूअल संभव है; हम पहले आपका मामला देखते हैं।" },
        { q: "क्या कामगार का सऊदी में होना ज़रूरी है?", a: "यह मामले और प्रक्रिया पर निर्भर है; हम हर कदम से पहले स्थिति देखते हैं।" },
        { q: "सरकारी फीस कौन देता है?", a: "सरकारी फीस आपके नाम से आधिकारिक माध्यम से दी जाती है; हम केवल मार्गदर्शन करते हैं।" },
      ],
    },
  },

  familyVisitVisa: {
    ar: {
      primaryKeyword: "تأشيرة زيارة عائلية",
      secondaryKeywords: ["طلب زيارة عائلية للمقيمين", "تأشيرة زيارة عائلية منصة التأشيرات", "زيارة عائلية متعددة", "تعقيب زيارة عائلية"],
      metaDescription:
        "طلب تأشيرة زيارة عائلية للمقيمين مع تسامي: نراجع الأهلية والمستندات ونتابع الطلب عبر منصة التأشيرات خطوة بخطوة على واتساب. لسنا جهة حكومية.",
      intro:
        "تأشيرة الزيارة العائلية تتيح للمقيم في المملكة استضافة أفراد أسرته مثل الزوجة والأبناء والوالدين لفترة زيارة، ويُقدَّم الطلب عبر منصة التأشيرات الرسمية ثم تُستكمل الإجراءات في بلد الزائر. كثير من الطلبات تتعطل بسبب أخطاء في كتابة البيانات أو اختيار نوع الزيارة أو نقص في المستندات مثل إثبات صلة القرابة. في تسامي نراجع معك أهليتك والمستندات المطلوبة، ونتابع تعبئة الطلب بدقة، ونوضح لك المراحل التالية حتى يستطيع زائرك استكمال إجراءاته، دون أي وعود بالقبول لأن القرار للجهة الرسمية.",
      who: [
        "المقيمون الذين يرغبون في استضافة الزوجة أو الأبناء.",
        "من يريد زيارة والديه أو أقاربه المسموح بزيارتهم نظاماً.",
        "من رُفض طلبه سابقاً ويريد مراجعة البيانات قبل التقديم مجدداً.",
        "من لا يعرف الفرق بين الزيارة المفردة والمتعددة.",
      ],
      steps: [
        "نراجع أهليتك ومهنتك في الإقامة وصلة القرابة بالزائر.",
        "نجهز معك قائمة المستندات مثل جوازات الزوار وإثبات القرابة.",
        "نتابع تعبئة الطلب في منصة التأشيرات واختيار نوع الزيارة المناسب.",
        "نوضح لك الرسوم الحكومية لتسددها بنفسك عبر القنوات الرسمية.",
        "نشرح لك خطوات استكمال الإجراءات في بلد الزائر بعد صدور الطلب.",
      ],
      tips: [
        "اكتب أسماء الزوار كما هي في الجواز تماماً دون اختصار.",
        "تأكد من صلاحية جوازات الزوار لمدة كافية.",
        "جهّز إثبات صلة القرابة مصدقاً حسب المطلوب.",
        "اختر نوع الزيارة (مفردة أو متعددة) حسب خطتك الفعلية.",
        "احتفظ برقم الطلب وصورة منه لمتابعته لاحقاً.",
      ],
      local:
        "نخدم المقيمين في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل تضمنون قبول التأشيرة؟", a: "لا، قرار القبول للجهة الرسمية وحدها، ودورنا مراجعة البيانات والمستندات ومتابعة الإجراءات بدقة." },
        { q: "من يمكنني دعوته بالزيارة العائلية؟", a: "يختلف ذلك حسب الأنظمة المعمول بها ودرجة القرابة، ونراجع معك حالتك قبل التقديم." },
        { q: "هل تؤثر مهنتي على الطلب؟", a: "قد تؤثر المهنة المسجلة في الإقامة على الأهلية، لذلك نراجعها معك في البداية." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل يمكن تمديد الزيارة بعد وصول الزائر؟", a: "يمكن غالباً طلب التمديد عبر أبشر وفق الشروط المعمول بها، ونتابع معك ذلك قبل انتهاء المدة." },
      ],
    },
    en: {
      primaryKeyword: "family visit visa Saudi Arabia",
      secondaryKeywords: ["family visit visa for residents", "family visit visa MOFA platform", "multiple entry family visit", "family visit follow-up"],
      metaDescription:
        "Apply for a family visit visa as a resident with Tasami: we review eligibility and documents and follow the application on the visa platform step by step via WhatsApp. Not a government entity.",
      intro:
        "The family visit visa lets a resident host family members such as a spouse, children or parents for a visit period. The application is submitted on the official visa platform and then completed in the visitor's country. Many applications stall because of data entry errors, choosing the wrong visit type or missing documents such as proof of relationship. At Tasami we review your eligibility and required documents, follow the application carefully and explain the next stages so your visitor can complete their procedures, without promising approval because the decision belongs to the official authority.",
      who: [
        "Residents who want to host a spouse or children.",
        "Anyone wishing to invite parents or relatives permitted by regulations.",
        "People previously rejected who want their data reviewed before reapplying.",
        "Anyone unsure about single versus multiple entry visits.",
      ],
      steps: [
        "We review your eligibility, iqama profession and relationship to the visitor.",
        "We prepare a document list such as visitors' passports and proof of relationship.",
        "We follow the application on the visa platform and choose the right visit type.",
        "We explain government fees so you pay them yourself through official channels.",
        "We explain how the visitor completes procedures in their country afterwards.",
      ],
      tips: [
        "Write visitors' names exactly as in their passports, without abbreviations.",
        "Make sure visitors' passports are valid long enough.",
        "Prepare attested proof of relationship as required.",
        "Choose single or multiple entry according to your real plans.",
        "Keep the application number and a copy for follow-up.",
      ],
      local:
        "We serve residents in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do you guarantee visa approval?", a: "No, approval is decided solely by the official authority; our role is reviewing data and documents and following the process carefully." },
        { q: "Whom can I invite on a family visit?", a: "It depends on current regulations and the degree of relationship; we review your case before applying." },
        { q: "Does my profession affect the application?", a: "The profession on your iqama can affect eligibility, so we check it first." },
        { q: "Who pays government fees?", a: "Government fees are paid through official channels in your name; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "فیملی وزٹ ویزا سعودی عرب",
      secondaryKeywords: ["مقیمین کے لیے فیملی وزٹ", "ویزا پلیٹ فارم فیملی وزٹ", "ملٹیپل فیملی وزٹ", "فیملی وزٹ فالو اپ"],
      metaDescription:
        "تسامی کے ساتھ فیملی وزٹ ویزا کی درخواست دیں: ہم اہلیت اور دستاویزات دیکھتے ہیں اور ویزا پلیٹ فارم پر درخواست واٹس ایپ پر قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "فیملی وزٹ ویزا مملکت میں مقیم شخص کو اپنی بیوی، بچوں یا والدین جیسے اہل خانہ کو کچھ عرصے کے لیے بلانے کی سہولت دیتا ہے۔ درخواست سرکاری ویزا پلیٹ فارم پر جمع ہوتی ہے اور پھر زائر کے ملک میں مکمل ہوتی ہے۔ بہت سی درخواستیں ڈیٹا کی غلطی، غلط وزٹ ٹائپ یا رشتہ داری کے ثبوت جیسی دستاویزات کی کمی سے رک جاتی ہیں۔ تسامی میں ہم آپ کی اہلیت اور دستاویزات دیکھتے ہیں، درخواست احتیاط سے فالو کرتے ہیں اور اگلے مراحل سمجھاتے ہیں، منظوری کا کوئی وعدہ کیے بغیر کیونکہ فیصلہ سرکاری ادارے کا ہے۔",
      who: [
        "وہ مقیم جو بیوی یا بچوں کو بلانا چاہتے ہیں۔",
        "جو والدین یا قانوناً اجازت یافتہ رشتہ داروں کو بلانا چاہتے ہیں۔",
        "جن کی درخواست پہلے مسترد ہوئی اور دوبارہ سے پہلے جانچ چاہتے ہیں۔",
        "جو سنگل اور ملٹیپل وزٹ کا فرق نہیں جانتے۔",
      ],
      steps: [
        "ہم آپ کی اہلیت، اقامہ پیشہ اور زائر سے رشتہ دیکھتے ہیں۔",
        "ہم پاسپورٹس اور رشتہ داری کے ثبوت جیسی دستاویزات کی فہرست بناتے ہیں۔",
        "ہم ویزا پلیٹ فارم پر درخواست اور درست وزٹ ٹائپ فالو کرتے ہیں۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم بتاتے ہیں کہ زائر اپنے ملک میں باقی کارروائی کیسے مکمل کرے۔",
      ],
      tips: [
        "زائرین کے نام بالکل پاسپورٹ کے مطابق لکھیں۔",
        "یقینی بنائیں کہ پاسپورٹس کافی مدت کے لیے درست ہیں۔",
        "رشتہ داری کا تصدیق شدہ ثبوت تیار رکھیں۔",
        "اپنے اصل منصوبے کے مطابق سنگل یا ملٹیپل وزٹ منتخب کریں۔",
        "درخواست نمبر اور اس کی کاپی محفوظ رکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں مقیمین کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا آپ ویزا منظوری کی ضمانت دیتے ہیں؟", a: "نہیں، فیصلہ صرف سرکاری ادارہ کرتا ہے؛ ہمارا کام ڈیٹا اور دستاویزات کی جانچ اور فالو اپ ہے۔" },
        { q: "میں کس کو فیملی وزٹ پر بلا سکتا ہوں؟", a: "یہ موجودہ قوانین اور رشتے کے درجے پر منحصر ہے؛ ہم پہلے آپ کا کیس دیکھتے ہیں۔" },
        { q: "کیا میرا پیشہ درخواست پر اثر ڈالتا ہے؟", a: "اقامہ میں درج پیشہ اہلیت پر اثر ڈال سکتا ہے، اس لیے ہم پہلے اسے دیکھتے ہیں۔" },
        { q: "سرکاری فیس کون ادا کرتا ہے؟", a: "سرکاری فیس آپ کے نام سے سرکاری ذرائع سے ادا ہوتی ہے؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "फैमिली विज़िट वीज़ा सऊदी अरब",
      secondaryKeywords: ["निवासियों के लिए फैमिली विज़िट", "वीज़ा प्लेटफॉर्म फैमिली विज़िट", "मल्टीपल फैमिली विज़िट", "फैमिली विज़िट फॉलो-अप"],
      metaDescription:
        "तसामी के साथ फैमिली विज़िट वीज़ा के लिए आवेदन करें: हम पात्रता और दस्तावेज़ जांचते हैं और वीज़ा प्लेटफॉर्म पर आवेदन व्हाट्सऐप पर चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "फैमिली विज़िट वीज़ा सऊदी में रहने वाले व्यक्ति को पत्नी, बच्चों या माता-पिता जैसे परिवार के सदस्यों को कुछ समय के लिए बुलाने की सुविधा देता है। आवेदन आधिकारिक वीज़ा प्लेटफॉर्म पर जमा होता है और फिर विज़िटर के देश में पूरा होता है। कई आवेदन डेटा की गलती, गलत विज़िट प्रकार या रिश्ते के प्रमाण जैसे दस्तावेज़ों की कमी से अटक जाते हैं। तसामी में हम आपकी पात्रता और दस्तावेज़ देखते हैं, आवेदन ध्यान से फॉलो करते हैं और अगले चरण समझाते हैं, मंज़ूरी का कोई वादा किए बिना क्योंकि फैसला आधिकारिक संस्था का है।",
      who: [
        "वे निवासी जो पत्नी या बच्चों को बुलाना चाहते हैं।",
        "जो माता-पिता या नियमों के अनुसार अनुमत रिश्तेदारों को बुलाना चाहते हैं।",
        "जिनका आवेदन पहले अस्वीकार हुआ और दोबारा से पहले जांच चाहते हैं।",
        "जो सिंगल और मल्टीपल विज़िट का अंतर नहीं जानते।",
      ],
      steps: [
        "हम आपकी पात्रता, इकामा पेशा और विज़िटर से रिश्ता देखते हैं।",
        "हम पासपोर्ट और रिश्ते के प्रमाण जैसे दस्तावेज़ों की सूची बनाते हैं।",
        "हम वीज़ा प्लेटफॉर्म पर आवेदन और सही विज़िट प्रकार फॉलो करते हैं।",
        "हम सरकारी फीस समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम बताते हैं कि विज़िटर अपने देश में बाकी प्रक्रिया कैसे पूरी करे।",
      ],
      tips: [
        "विज़िटर्स के नाम बिल्कुल पासपोर्ट के अनुसार लिखें।",
        "सुनिश्चित करें कि पासपोर्ट पर्याप्त अवधि तक वैध हैं।",
        "रिश्ते का सत्यापित प्रमाण तैयार रखें।",
        "अपनी वास्तविक योजना के अनुसार सिंगल या मल्टीपल विज़िट चुनें।",
        "आवेदन नंबर और उसकी कॉपी सुरक्षित रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में निवासियों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या आप वीज़ा मंज़ूरी की गारंटी देते हैं?", a: "नहीं, फैसला केवल आधिकारिक संस्था करती है; हमारा काम डेटा और दस्तावेज़ों की जांच और फॉलो-अप है।" },
        { q: "मैं किसे फैमिली विज़िट पर बुला सकता हूं?", a: "यह मौजूदा नियमों और रिश्ते की श्रेणी पर निर्भर है; हम पहले आपका मामला देखते हैं।" },
        { q: "क्या मेरा पेशा आवेदन को प्रभावित करता है?", a: "इकामा में दर्ज पेशा पात्रता को प्रभावित कर सकता है, इसलिए हम पहले उसे देखते हैं।" },
        { q: "सरकारी फीस कौन देता है?", a: "सरकारी फीस आपके नाम से आधिकारिक माध्यम से दी जाती है; हम केवल मार्गदर्शन करते हैं।" },
      ],
    },
  },

  exitReentryExtend: {
    ar: {
      primaryKeyword: "تمديد تأشيرة خروج وعودة",
      secondaryKeywords: ["تمديد خروج وعودة وهو خارج المملكة", "تمديد خروج وعودة عبر أبشر", "تمديد تأشيرة عامل منزلي", "تمديد خروج وعودة مقيم"],
      metaDescription:
        "تمديد تأشيرة الخروج والعودة للمقيم أو العامل وهو خارج المملكة مع تسامي: نراجع الشروط ونتابع التمديد عبر أبشر أو مقيم خطوة بخطوة. لسنا جهة حكومية.",
      intro:
        "عندما يسافر المقيم أو العامل بتأشيرة خروج وعودة ثم يحتاج البقاء مدة أطول من المحددة، يمكن تمديد التأشيرة وهو خارج المملكة عبر أبشر للأفراد أو منصة مقيم للمنشآت، بشرط استيفاء المتطلبات مثل صلاحية الإقامة وسداد الرسوم الحكومية. التأخر في التمديد أو عدم العودة قبل انتهاء التأشيرة قد يسبب مشاكل في الإقامة أو منعاً من الدخول لفترة. في تسامي نراجع معك وضع التأشيرة والإقامة، ونوضح المتطلبات، ونتابع خطوات التمديد قبل فوات الأوان، بلغة بسيطة وعبر واتساب.",
      who: [
        "الكفلاء الذين سافر عاملهم المنزلي ويحتاج وقتاً إضافياً.",
        "المنشآت التي لديها موظف خارج المملكة وتأشيرته قاربت على الانتهاء.",
        "المقيمون الذين يحتاج أحد تابعيهم تمديد التأشيرة.",
        "من لا يعرف هل حالته تسمح بالتمديد أم لا.",
      ],
      steps: [
        "نراجع تاريخ انتهاء التأشيرة وصلاحية الإقامة الحالية.",
        "نتأكد من الشروط المطلوبة للتمديد حسب نوع الحالة.",
        "نوضح لك الرسوم الحكومية لتسددها بنفسك عبر القنوات الرسمية.",
        "نتابع تنفيذ التمديد عبر أبشر أو مقيم حسب صاحب الحساب.",
        "نتحقق معك من ظهور التاريخ الجديد ونوضح موعد العودة المطلوب.",
      ],
      tips: [
        "اطلب التمديد قبل انتهاء التأشيرة وليس بعدها.",
        "تأكد أن الإقامة سارية لمدة تغطي فترة التمديد المطلوبة.",
        "احسب مدة التمديد حسب حاجتك الفعلية لتجنب طلبات متكررة.",
        "أبلغ العامل بالتاريخ الجديد ليرتب عودته بناءً عليه.",
        "احتفظ بصورة من التأشيرة بعد التمديد.",
      ],
      local:
        "نخدم الأفراد والمنشآت في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل يمكن التمديد والعامل خارج المملكة؟", a: "نعم، هذه هي الحالة الأساسية لهذه الخدمة، بشرط استيفاء المتطلبات النظامية وقت الطلب." },
        { q: "ماذا لو انتهت التأشيرة قبل التمديد؟", a: "تختلف المعالجة حسب الحالة، ونراجع معك الوضع ونوضح الخيارات النظامية المتاحة." },
        { q: "هل يلزم أن تكون الإقامة سارية؟", a: "غالباً نعم، ويجب أن تغطي الإقامة مدة التمديد، وإلا قد يلزم تجديدها أولاً." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تتابعون تمديد أكثر من موظف للمنشأة؟", a: "نعم، نتابع حالات متعددة لنفس المنشأة عبر منصة مقيم ونرتب لك قائمة بالتواريخ والمتطلبات لكل موظف." },
      ],
    },
    en: {
      primaryKeyword: "exit re-entry visa extension",
      secondaryKeywords: ["extend exit re-entry while outside Saudi", "extend exit re-entry via Absher", "domestic worker visa extension", "resident exit re-entry extension"],
      metaDescription:
        "Extend an exit re-entry visa for a resident or worker outside the Kingdom with Tasami: we check conditions and follow the extension on Absher or Muqeem step by step. Not a government entity.",
      intro:
        "When a resident or worker travels on an exit re-entry visa and needs to stay longer than planned, the visa can be extended while they are outside the Kingdom through Absher for individuals or Muqeem for establishments, provided requirements such as a valid iqama and paid government fees are met. Delaying the extension or failing to return before expiry can cause residency problems or a temporary entry ban. At Tasami we review the visa and iqama status with you, explain requirements and follow the extension steps in time, simply and over WhatsApp.",
      who: [
        "Sponsors whose domestic worker travelled and needs extra time.",
        "Establishments with an employee abroad whose visa is nearly expired.",
        "Residents whose dependant needs a visa extension.",
        "Anyone unsure whether their case allows an extension.",
      ],
      steps: [
        "We review the visa expiry date and current iqama validity.",
        "We confirm the extension conditions for your type of case.",
        "We explain government fees so you pay them yourself through official channels.",
        "We follow the extension on Absher or Muqeem depending on the account holder.",
        "We confirm the new date appears and explain the required return date.",
      ],
      tips: [
        "Request the extension before the visa expires, not after.",
        "Make sure the iqama remains valid for the extension period.",
        "Choose the extension length based on real needs to avoid repeat requests.",
        "Tell the worker the new date so they can plan their return.",
        "Keep a copy of the visa after extension.",
      ],
      local:
        "We serve individuals and establishments in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Can the visa be extended while the worker is abroad?", a: "Yes, that is the main purpose of this service, provided regulatory requirements are met at the time of request." },
        { q: "What if the visa expired before extension?", a: "Handling differs by case; we review the situation and explain the available regulatory options." },
        { q: "Must the iqama be valid?", a: "Usually yes, and it must cover the extension period; otherwise it may need renewal first." },
        { q: "Who pays government fees?", a: "Government fees are paid through official channels in your name; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "خروج و عودہ ویزا توسیع",
      secondaryKeywords: ["مملکت سے باہر خروج و عودہ توسیع", "ابشر سے خروج و عودہ توسیع", "گھریلو ملازم ویزا توسیع", "مقیم خروج و عودہ توسیع"],
      metaDescription:
        "تسامی کے ساتھ مملکت سے باہر موجود مقیم یا ملازم کا خروج و عودہ ویزا بڑھائیں: ہم شرائط دیکھتے ہیں اور ابشر یا مقیم پر توسیع قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "جب کوئی مقیم یا ملازم خروج و عودہ ویزا پر سفر کرے اور مقررہ مدت سے زیادہ رکنا پڑے، تو مملکت سے باہر رہتے ہوئے افراد کے لیے ابشر یا اداروں کے لیے مقیم پلیٹ فارم سے ویزا بڑھایا جا سکتا ہے، بشرطیکہ درست اقامہ اور سرکاری فیس کی ادائیگی جیسی شرائط پوری ہوں۔ توسیع میں تاخیر یا وقت پر واپس نہ آنا اقامہ کے مسائل یا عارضی داخلہ پابندی کا سبب بن سکتا ہے۔ تسامی میں ہم ویزا اور اقامہ کی صورتحال دیکھتے ہیں، شرائط بتاتے ہیں اور وقت پر توسیع فالو کرتے ہیں، آسان زبان میں واٹس ایپ پر۔",
      who: [
        "وہ کفیل جن کا گھریلو ملازم سفر پر ہے اور مزید وقت چاہیے۔",
        "وہ ادارے جن کا ملازم باہر ہے اور ویزا ختم ہونے والا ہے۔",
        "وہ مقیم جن کے زیر کفالت فرد کو توسیع چاہیے۔",
        "جو نہیں جانتے کہ ان کا کیس توسیع کی اجازت دیتا ہے یا نہیں۔",
      ],
      steps: [
        "ہم ویزا کی میعاد اور موجودہ اقامہ کی مدت دیکھتے ہیں۔",
        "ہم آپ کے کیس کے مطابق توسیع کی شرائط کی تصدیق کرتے ہیں۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم اکاؤنٹ ہولڈر کے مطابق ابشر یا مقیم پر توسیع فالو کرتے ہیں۔",
        "ہم نئی تاریخ کی تصدیق کرتے ہیں اور واپسی کی مطلوبہ تاریخ بتاتے ہیں۔",
      ],
      tips: [
        "ویزا ختم ہونے سے پہلے توسیع کی درخواست دیں، بعد میں نہیں۔",
        "یقینی بنائیں کہ اقامہ توسیع کی مدت تک درست رہے۔",
        "بار بار درخواست سے بچنے کے لیے اصل ضرورت کے مطابق مدت منتخب کریں۔",
        "ملازم کو نئی تاریخ بتائیں تاکہ وہ واپسی کا انتظام کرے۔",
        "توسیع کے بعد ویزا کی کاپی محفوظ رکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں افراد اور اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا ملازم کے باہر ہوتے ہوئے توسیع ممکن ہے؟", a: "جی ہاں، یہی اس سروس کا اصل مقصد ہے، بشرطیکہ درخواست کے وقت شرائط پوری ہوں۔" },
        { q: "اگر توسیع سے پہلے ویزا ختم ہو گیا تو؟", a: "حل کیس کے مطابق مختلف ہوتا ہے؛ ہم صورتحال دیکھ کر قانونی آپشنز بتاتے ہیں۔" },
        { q: "کیا اقامہ کا درست ہونا ضروری ہے؟", a: "عام طور پر ہاں، اور اسے توسیع کی مدت تک درست ہونا چاہیے؛ ورنہ پہلے تجدید ضروری ہو سکتی ہے۔" },
        { q: "سرکاری فیس کون ادا کرتا ہے؟", a: "سرکاری فیس آپ کے نام سے سرکاری ذرائع سے ادا ہوتی ہے؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "एग्ज़िट री-एंट्री वीज़ा एक्सटेंशन",
      secondaryKeywords: ["सऊदी से बाहर रहते एग्ज़िट री-एंट्री एक्सटेंशन", "अबशर से एग्ज़िट री-एंट्री एक्सटेंशन", "घरेलू कामगार वीज़ा एक्सटेंशन", "निवासी एग्ज़िट री-एंट्री एक्सटेंशन"],
      metaDescription:
        "तसामी के साथ सऊदी से बाहर मौजूद निवासी या कामगार का एग्ज़िट री-एंट्री वीज़ा बढ़ाएं: हम शर्तें जांचते हैं और अबशर या मुक़ीम पर एक्सटेंशन चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "जब कोई निवासी या कामगार एग्ज़िट री-एंट्री वीज़ा पर यात्रा करे और तय समय से ज़्यादा रुकना पड़े, तो सऊदी से बाहर रहते हुए व्यक्तियों के लिए अबशर या संस्थानों के लिए मुक़ीम प्लेटफॉर्म से वीज़ा बढ़ाया जा सकता है, बशर्ते वैध इकामा और सरकारी फीस भुगतान जैसी शर्तें पूरी हों। एक्सटेंशन में देरी या समय पर वापस न आना इकामा की समस्या या अस्थायी प्रवेश प्रतिबंध का कारण बन सकता है। तसामी में हम वीज़ा और इकामा की स्थिति देखते हैं, शर्तें बताते हैं और समय पर एक्सटेंशन फॉलो करते हैं, आसान भाषा में व्हाट्सऐप पर।",
      who: [
        "वे कफ़ील जिनका घरेलू कामगार यात्रा पर है और अतिरिक्त समय चाहिए।",
        "वे संस्थान जिनका कर्मचारी बाहर है और वीज़ा खत्म होने वाला है।",
        "वे निवासी जिनके आश्रित को एक्सटेंशन चाहिए।",
        "जो नहीं जानते कि उनका मामला एक्सटेंशन की अनुमति देता है या नहीं।",
      ],
      steps: [
        "हम वीज़ा की समाप्ति तिथि और मौजूदा इकामा की वैधता देखते हैं।",
        "हम आपके मामले के अनुसार एक्सटेंशन की शर्तों की पुष्टि करते हैं।",
        "हम सरकारी फीस समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम खाताधारक के अनुसार अबशर या मुक़ीम पर एक्सटेंशन फॉलो करते हैं।",
        "हम नई तारीख की पुष्टि करते हैं और वापसी की आवश्यक तारीख बताते हैं।",
      ],
      tips: [
        "वीज़ा खत्म होने से पहले एक्सटेंशन का अनुरोध करें, बाद में नहीं।",
        "सुनिश्चित करें कि इकामा एक्सटेंशन अवधि तक वैध रहे।",
        "बार-बार अनुरोध से बचने के लिए वास्तविक ज़रूरत के अनुसार अवधि चुनें।",
        "कामगार को नई तारीख बताएं ताकि वह वापसी की योजना बनाए।",
        "एक्सटेंशन के बाद वीज़ा की कॉपी सुरक्षित रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में व्यक्तियों और संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या कामगार के बाहर रहते एक्सटेंशन संभव है?", a: "हां, यही इस सेवा का मुख्य उद्देश्य है, बशर्ते अनुरोध के समय नियामक शर्तें पूरी हों।" },
        { q: "अगर एक्सटेंशन से पहले वीज़ा खत्म हो गया?", a: "समाधान मामले के अनुसार अलग होता है; हम स्थिति देखकर उपलब्ध नियामक विकल्प बताते हैं।" },
        { q: "क्या इकामा का वैध होना ज़रूरी है?", a: "आमतौर पर हां, और उसे एक्सटेंशन अवधि तक वैध होना चाहिए; वरना पहले रिन्यूअल ज़रूरी हो सकता है।" },
        { q: "सरकारी फीस कौन देता है?", a: "सरकारी फीस आपके नाम से आधिकारिक माध्यम से दी जाती है; हम केवल मार्गदर्शन करते हैं।" },
      ],
    },
  },

  consulateAppointment: {
    ar: {
      primaryKeyword: "حجز موعد سفارة أو قنصلية",
      secondaryKeywords: ["حجز موعد قنصلية في جدة", "موعد سفارة في الرياض", "تجديد جواز من السفارة", "تجهيز أوراق السفارة"],
      metaDescription:
        "حجز موعد في السفارة أو القنصلية وتجهيز الأوراق المطلوبة مع تسامي: نساعدك في اختيار الخدمة الصحيحة وتعبئة البيانات خطوة بخطوة عبر واتساب. لسنا جهة حكومية.",
      intro:
        "كثير من المقيمين يحتاجون موعداً في سفارة أو قنصلية بلدهم داخل المملكة لتجديد الجواز أو استخراج وثيقة أو توثيق مستند، وقد يحتاج بعض المواطنين والمقيمين مواعيد لدى سفارات أجنبية للسفر. أنظمة الحجز تختلف من سفارة لأخرى، والخطأ في اختيار نوع الخدمة أو نقص الأوراق يعني ضياع الموعد والانتظار من جديد. في تسامي نساعدك في تحديد الخدمة الصحيحة، وتعبئة نموذج الحجز بدقة، وتجهيز قائمة المستندات المطلوبة قبل الموعد، علماً أن المواعيد المتاحة وقرارات السفارة تعود للسفارة نفسها.",
      who: [
        "المقيمون الذين يحتاجون تجديد جواز السفر من سفارة بلدهم.",
        "من يحتاج استخراج أو توثيق وثيقة من القنصلية.",
        "من يريد موعداً لدى سفارة أجنبية لطلب تأشيرة سفر.",
        "من لا يعرف طريقة الحجز الإلكتروني لسفارته.",
      ],
      steps: [
        "نحدد معك الجهة المطلوبة ونوع الخدمة بالضبط.",
        "نراجع قائمة المستندات والصور المطلوبة حسب متطلبات السفارة.",
        "نساعدك في تعبئة نموذج الحجز الإلكتروني ببيانات صحيحة.",
        "نوضح لك أي رسوم تخص السفارة لتسددها بنفسك عبر قنواتها الرسمية.",
        "نرسل لك ملخصاً بموعدك والأوراق التي تحملها معك يوم الحضور.",
      ],
      tips: [
        "تأكد من نوع الخدمة قبل الحجز لأن لكل خدمة متطلبات مختلفة.",
        "جهّز الصور الشخصية بالمقاس والخلفية المطلوبة.",
        "اطبع تأكيد الموعد واحتفظ بنسخة على جوالك.",
        "احضر قبل الموعد بوقت كافٍ ومعك أصول المستندات وصورها.",
        "تابع الموقع الرسمي للسفارة لأي تحديث في المتطلبات.",
      ],
      local:
        "نخدم المقيمين في جدة والرياض ومكة المكرمة والدمام وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل تضمنون الحصول على موعد قريب؟", a: "لا، المواعيد المتاحة تحددها السفارة نفسها، ودورنا مساعدتك في الحجز الصحيح وتجهيز أوراقك." },
        { q: "هل تتعاملون مع كل السفارات؟", a: "نساعدك مع السفارات التي توفر حجزاً إلكترونياً أو إجراءات واضحة، ونوضح لك ذلك عند التواصل." },
        { q: "هل تسامي تابعة لأي سفارة؟", a: "لا، تسامي مكتب خدمات مستقل وليست جهة حكومية أو دبلوماسية." },
        { q: "من يدفع رسوم السفارة؟", a: "تُدفع أي رسوم خاصة بالسفارة عبر قنواتها الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "ماذا لو فاتني الموعد؟", a: "نساعدك في حجز موعد جديد حسب ما يتيحه نظام السفارة، وننصح بتأكيد الموعد قبله بيوم لتجنب ذلك." },
      ],
    },
    en: {
      primaryKeyword: "embassy and consulate appointment booking",
      secondaryKeywords: ["consulate appointment Jeddah", "embassy appointment Riyadh", "passport renewal at embassy", "embassy document preparation"],
      metaDescription:
        "Book an embassy or consulate appointment and prepare required documents with Tasami: we help you pick the right service and fill in details step by step via WhatsApp. Not a government entity.",
      intro:
        "Many residents need an appointment at their country's embassy or consulate in the Kingdom to renew a passport, obtain a document or attest paperwork, and some citizens and residents need appointments at foreign embassies to travel. Booking systems differ between embassies, and picking the wrong service type or missing papers means losing the appointment and waiting again. At Tasami we help you identify the correct service, fill in the booking form accurately and prepare the document list before the appointment; available slots and decisions belong to the embassy itself.",
      who: [
        "Residents who need to renew their passport at their embassy.",
        "Anyone needing a document issued or attested by a consulate.",
        "People wanting a foreign embassy appointment for a travel visa.",
        "Anyone unfamiliar with their embassy's online booking.",
      ],
      steps: [
        "We identify the required mission and exact service type with you.",
        "We review the documents and photos required by the embassy.",
        "We help you fill in the online booking form with correct details.",
        "We explain any embassy fees so you pay them through its official channels.",
        "We send you a summary of your appointment and papers to bring.",
      ],
      tips: [
        "Confirm the service type before booking; each has different requirements.",
        "Prepare photos in the required size and background.",
        "Print the appointment confirmation and keep a copy on your phone.",
        "Arrive early with original documents and copies.",
        "Check the embassy's official site for requirement updates.",
      ],
      local:
        "We serve residents in Jeddah, Riyadh, Makkah, Dammam and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do you guarantee an early appointment?", a: "No, available slots are set by the embassy; our role is helping you book correctly and prepare your papers." },
        { q: "Do you work with all embassies?", a: "We help with embassies offering online booking or clear procedures, and confirm this when you contact us." },
        { q: "Is Tasami affiliated with any embassy?", a: "No, Tasami is an independent services office, not a government or diplomatic body." },
        { q: "Who pays embassy fees?", a: "Any embassy fees are paid through its official channels in your name; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "سفارت خانہ یا قونصل خانہ اپوائنٹمنٹ بکنگ",
      secondaryKeywords: ["جدہ قونصل خانہ اپوائنٹمنٹ", "ریاض سفارت خانہ اپوائنٹمنٹ", "سفارت خانے سے پاسپورٹ تجدید", "سفارت خانے کے کاغذات کی تیاری"],
      metaDescription:
        "تسامی کے ساتھ سفارت خانہ یا قونصل خانہ اپوائنٹمنٹ بک کریں اور کاغذات تیار کریں: ہم درست سروس منتخب کرنے اور فارم بھرنے میں واٹس ایپ پر مدد کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "بہت سے مقیمین کو پاسپورٹ تجدید، کوئی دستاویز بنوانے یا تصدیق کے لیے مملکت میں اپنے ملک کے سفارت خانے یا قونصل خانے میں اپوائنٹمنٹ چاہیے ہوتی ہے، اور کچھ لوگوں کو سفر کے لیے غیر ملکی سفارت خانوں میں۔ ہر سفارت خانے کا بکنگ سسٹم مختلف ہے، اور غلط سروس منتخب کرنا یا کاغذات کی کمی کا مطلب اپوائنٹمنٹ ضائع ہونا ہے۔ تسامی میں ہم درست سروس پہچاننے، بکنگ فارم صحیح بھرنے اور اپوائنٹمنٹ سے پہلے دستاویزات کی فہرست تیار کرنے میں مدد کرتے ہیں؛ دستیاب اوقات اور فیصلے سفارت خانے کے ہیں۔",
      who: [
        "وہ مقیم جنہیں اپنے سفارت خانے سے پاسپورٹ تجدید کرانا ہے۔",
        "جنہیں قونصل خانے سے کوئی دستاویز بنوانی یا تصدیق کرانی ہے۔",
        "جو سفری ویزا کے لیے غیر ملکی سفارت خانے کی اپوائنٹمنٹ چاہتے ہیں۔",
        "جو اپنے سفارت خانے کی آن لائن بکنگ نہیں جانتے۔",
      ],
      steps: [
        "ہم آپ کے ساتھ مطلوبہ مشن اور سروس کی قسم طے کرتے ہیں۔",
        "ہم سفارت خانے کی مطلوبہ دستاویزات اور تصاویر دیکھتے ہیں۔",
        "ہم آن لائن بکنگ فارم درست معلومات سے بھرنے میں مدد کرتے ہیں۔",
        "ہم سفارت خانے کی فیس بتاتے ہیں تاکہ آپ اس کے سرکاری ذرائع سے ادا کریں۔",
        "ہم اپوائنٹمنٹ اور ساتھ لانے والے کاغذات کا خلاصہ بھیجتے ہیں۔",
      ],
      tips: [
        "بکنگ سے پہلے سروس کی قسم کی تصدیق کریں۔",
        "مطلوبہ سائز اور بیک گراؤنڈ کی تصاویر تیار رکھیں۔",
        "اپوائنٹمنٹ کی تصدیق پرنٹ کریں اور موبائل میں کاپی رکھیں۔",
        "اصل دستاویزات اور کاپیوں کے ساتھ جلدی پہنچیں۔",
        "شرائط میں تبدیلی کے لیے سفارت خانے کی سرکاری ویب سائٹ دیکھتے رہیں۔",
      ],
      local:
        "ہم جدہ، ریاض، مکہ مکرمہ، دمام اور سعودی عرب کے ہر شہر میں مقیمین کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا آپ جلد اپوائنٹمنٹ کی ضمانت دیتے ہیں؟", a: "نہیں، اوقات سفارت خانہ طے کرتا ہے؛ ہمارا کام درست بکنگ اور کاغذات کی تیاری میں مدد ہے۔" },
        { q: "کیا آپ تمام سفارت خانوں کے ساتھ کام کرتے ہیں؟", a: "ہم آن لائن بکنگ یا واضح طریقہ کار والے سفارت خانوں میں مدد کرتے ہیں اور رابطے پر تصدیق کرتے ہیں۔" },
        { q: "کیا تسامی کسی سفارت خانے سے وابستہ ہے؟", a: "نہیں، تسامی ایک آزاد سروسز آفس ہے، سرکاری یا سفارتی ادارہ نہیں۔" },
        { q: "سفارت خانے کی فیس کون ادا کرتا ہے؟", a: "سفارت خانے کی فیس اس کے سرکاری ذرائع سے آپ کے نام سے ادا ہوتی ہے؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "दूतावास या कॉन्सुलेट अपॉइंटमेंट बुकिंग",
      secondaryKeywords: ["जेद्दा कॉन्सुलेट अपॉइंटमेंट", "रियाद दूतावास अपॉइंटमेंट", "दूतावास से पासपोर्ट रिन्यूअल", "दूतावास दस्तावेज़ तैयारी"],
      metaDescription:
        "तसामी के साथ दूतावास या कॉन्सुलेट अपॉइंटमेंट बुक करें और दस्तावेज़ तैयार करें: हम सही सेवा चुनने और फॉर्म भरने में व्हाट्सऐप पर मदद करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "कई निवासियों को पासपोर्ट रिन्यूअल, कोई दस्तावेज़ बनवाने या सत्यापन के लिए सऊदी में अपने देश के दूतावास या कॉन्सुलेट में अपॉइंटमेंट चाहिए होती है, और कुछ लोगों को यात्रा के लिए विदेशी दूतावासों में। हर दूतावास की बुकिंग प्रणाली अलग है, और गलत सेवा चुनना या कागज़ों की कमी का मतलब अपॉइंटमेंट गंवाना और फिर इंतज़ार है। तसामी में हम सही सेवा पहचानने, बुकिंग फॉर्म सही भरने और अपॉइंटमेंट से पहले दस्तावेज़ों की सूची तैयार करने में मदद करते हैं; उपलब्ध समय और फैसले दूतावास के हैं।",
      who: [
        "वे निवासी जिन्हें अपने दूतावास से पासपोर्ट रिन्यू कराना है।",
        "जिन्हें कॉन्सुलेट से कोई दस्तावेज़ बनवाना या सत्यापित कराना है।",
        "जो यात्रा वीज़ा के लिए विदेशी दूतावास की अपॉइंटमेंट चाहते हैं।",
        "जो अपने दूतावास की ऑनलाइन बुकिंग नहीं जानते।",
      ],
      steps: [
        "हम आपके साथ आवश्यक मिशन और सेवा का प्रकार तय करते हैं।",
        "हम दूतावास के आवश्यक दस्तावेज़ और फोटो देखते हैं।",
        "हम ऑनलाइन बुकिंग फॉर्म सही जानकारी से भरने में मदद करते हैं।",
        "हम दूतावास की फीस समझाते हैं ताकि आप उसके आधिकारिक माध्यम से भुगतान करें।",
        "हम अपॉइंटमेंट और साथ लाने वाले कागज़ों का सारांश भेजते हैं।",
      ],
      tips: [
        "बुकिंग से पहले सेवा के प्रकार की पुष्टि करें।",
        "आवश्यक साइज़ और बैकग्राउंड की फोटो तैयार रखें।",
        "अपॉइंटमेंट की पुष्टि प्रिंट करें और फोन में कॉपी रखें।",
        "मूल दस्तावेज़ों और कॉपियों के साथ जल्दी पहुंचें।",
        "शर्तों में बदलाव के लिए दूतावास की आधिकारिक वेबसाइट देखते रहें।",
      ],
      local:
        "हम जेद्दा, रियाद, मक्का, दम्माम और सऊदी अरब के हर शहर में निवासियों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या आप जल्दी अपॉइंटमेंट की गारंटी देते हैं?", a: "नहीं, समय दूतावास तय करता है; हमारा काम सही बुकिंग और कागज़ों की तैयारी में मदद है।" },
        { q: "क्या आप सभी दूतावासों के साथ काम करते हैं?", a: "हम ऑनलाइन बुकिंग या स्पष्ट प्रक्रिया वाले दूतावासों में मदद करते हैं और संपर्क पर पुष्टि करते हैं।" },
        { q: "क्या तसामी किसी दूतावास से जुड़ा है?", a: "नहीं, तसामी एक स्वतंत्र सेवा कार्यालय है, सरकारी या राजनयिक संस्था नहीं।" },
        { q: "दूतावास की फीस कौन देता है?", a: "दूतावास की फीस उसके आधिकारिक माध्यम से आपके नाम से दी जाती है; हम केवल मार्गदर्शन करते हैं।" },
      ],
    },
  },

  dropAbscondedWorker: {
    ar: {
      primaryKeyword: "بلاغ تغيب عامل عن العمل",
      secondaryKeywords: ["إسقاط عامل متغيب", "بلاغ انقطاع عن العمل قوى", "بلاغ تغيب عامل منزلي مساند", "إلغاء بلاغ تغيب"],
      metaDescription:
        "تقديم أو إلغاء بلاغ تغيب عامل عن العمل مع تسامي: نوضح لك الإجراء الصحيح عبر قوى أو مساند ونتابع الخطوات معك عبر واتساب. لسنا جهة حكومية.",
      intro:
        "عندما ينقطع العامل عن العمل دون سبب ولا يمكن الوصول إليه، يحق لصاحب العمل تقديم بلاغ تغيب عن العمل عبر المنصة الرسمية المختصة؛ منصة قوى لعمالة المنشآت، ومساند للعمالة المنزلية. هذا البلاغ يحمي صاحب العمل من تبعات بقاء العامل على كفالته، لكنه إجراء له آثار نظامية على العامل، لذلك يجب أن يكون مبنياً على واقعة حقيقية وفي الوقت الصحيح. في تسامي نوضح لك الشروط والخطوات، ونتابع تقديم البلاغ أو إلغاءه إذا عاد العامل خلال المدة المسموح بها نظاماً، بلغة بسيطة وعبر واتساب.",
      who: [
        "المنشآت التي انقطع أحد عمالها عن العمل دون إبلاغ.",
        "الأسر التي غادرت عاملتها المنزلية أو سائقها المنزل دون عودة.",
        "من قدّم بلاغاً ثم عاد العامل ويريد إلغاءه.",
        "من لا يعرف أي منصة يستخدم لتقديم البلاغ.",
      ],
      steps: [
        "نراجع معك تفاصيل الانقطاع وتاريخه ونوع العامل.",
        "نحدد المنصة الصحيحة: قوى لعمالة المنشآت أو مساند للعمالة المنزلية.",
        "نوضح لك الشروط والآثار النظامية قبل تقديم البلاغ.",
        "نتابع تقديم البلاغ أو إلغاءه عبر حسابك في المنصة.",
        "نتحقق من تحديث حالة العامل ونوضح لك الخطوات التالية.",
      ],
      tips: [
        "وثّق آخر تواصل مع العامل وتاريخ انقطاعه.",
        "لا تقدم البلاغ بدافع الخلاف؛ يجب أن يكون الانقطاع حقيقياً.",
        "تأكد من عدم وجود مستحقات معلقة للعامل قبل الإجراء.",
        "إذا عاد العامل، راجع إمكانية الإلغاء خلال المدة النظامية.",
        "احتفظ بنسخة من رقم البلاغ وتاريخه.",
      ],
      local:
        "نخدم المنشآت والأسر في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل يمكن إلغاء البلاغ إذا عاد العامل؟", a: "يمكن غالباً خلال مدة محددة نظاماً من تاريخ البلاغ، ونراجع معك إمكانية ذلك حسب حالتك." },
        { q: "ما الفرق بين قوى ومساند في هذا الإجراء؟", a: "قوى مخصصة لعمالة المنشآت، ومساند للعمالة المنزلية مثل العاملة والسائق الخاص." },
        { q: "هل البلاغ يؤثر على العامل؟", a: "نعم، له آثار نظامية على وضع العامل، لذلك نوضح لك كل شيء قبل التقديم." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب، والبلاغ يُقدم عبر المنصات الرسمية من حسابك." },
        { q: "هل يلزم إثبات الانقطاع؟", a: "يُفضل توثيق آخر تواصل وتاريخ الانقطاع، فقد يُطلب ذلك عند المراجعة أو في حال وجود اعتراض لاحقاً." },
      ],
    },
    en: {
      primaryKeyword: "absent worker report (huroob)",
      secondaryKeywords: ["absconding worker report Saudi", "work absence report Qiwa", "domestic worker absence Musaned", "cancel absence report"],
      metaDescription:
        "File or cancel a worker absence (huroob) report with Tasami: we explain the correct procedure on Qiwa or Musaned and follow the steps with you on WhatsApp. Not a government entity.",
      intro:
        "When a worker stops coming to work without reason and cannot be reached, the employer may file a work-absence report through the competent official platform: Qiwa for establishment workers and Musaned for domestic workers. The report protects the employer from the consequences of the worker remaining under their sponsorship, but it has legal effects on the worker, so it must be based on a real event and filed at the right time. At Tasami we explain conditions and steps and follow filing the report, or cancelling it if the worker returns within the permitted period, simply and over WhatsApp.",
      who: [
        "Establishments whose worker stopped coming without notice.",
        "Families whose housemaid or driver left and did not return.",
        "Anyone who filed a report and the worker came back.",
        "Anyone unsure which platform to use.",
      ],
      steps: [
        "We review the absence details, date and worker type with you.",
        "We identify the right platform: Qiwa for establishments or Musaned for domestic workers.",
        "We explain conditions and legal effects before filing.",
        "We follow filing or cancelling the report through your platform account.",
        "We confirm the worker's status updates and explain next steps.",
      ],
      tips: [
        "Document the last contact with the worker and the absence date.",
        "Never file out of a dispute; the absence must be genuine.",
        "Check there are no outstanding dues to the worker first.",
        "If the worker returns, check whether cancellation is possible within the legal period.",
        "Keep a copy of the report number and date.",
      ],
      local:
        "We serve establishments and families in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Can the report be cancelled if the worker returns?", a: "Usually within a legally defined period from the report date; we check this for your case." },
        { q: "What is the difference between Qiwa and Musaned here?", a: "Qiwa is for establishment workers, Musaned for domestic workers such as housemaids and private drivers." },
        { q: "Does the report affect the worker?", a: "Yes, it has legal effects on the worker's status, so we explain everything before filing." },
        { q: "Is Tasami a government entity?", a: "No, we are a follow-up services office; the report is filed via official platforms from your account." },
      ],
    },
    ur: {
      primaryKeyword: "ملازم غیر حاضری رپورٹ (ہروب)",
      secondaryKeywords: ["فرار ملازم رپورٹ سعودی", "قوی پر غیر حاضری رپورٹ", "مساند گھریلو ملازم غیر حاضری", "غیر حاضری رپورٹ منسوخی"],
      metaDescription:
        "تسامی کے ساتھ ملازم کی غیر حاضری (ہروب) رپورٹ درج یا منسوخ کریں: ہم قوی یا مساند پر درست طریقہ بتاتے ہیں اور واٹس ایپ پر مراحل فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "جب کوئی ملازم بغیر وجہ کام پر آنا بند کر دے اور رابطہ نہ ہو سکے، تو آجر متعلقہ سرکاری پلیٹ فارم پر غیر حاضری رپورٹ درج کر سکتا ہے: اداروں کے ملازمین کے لیے قوی اور گھریلو ملازمین کے لیے مساند۔ یہ رپورٹ آجر کو ملازم کے اس کی کفالت پر رہنے کے نتائج سے بچاتی ہے، لیکن ملازم پر اس کے قانونی اثرات ہیں، اس لیے یہ حقیقی واقعے پر اور درست وقت پر ہونی چاہیے۔ تسامی میں ہم شرائط اور مراحل سمجھاتے ہیں اور رپورٹ درج کرنے، یا ملازم کے مقررہ مدت میں واپس آنے پر منسوخ کرنے کو فالو کرتے ہیں۔",
      who: [
        "وہ ادارے جن کا ملازم بغیر اطلاع غائب ہو گیا۔",
        "وہ خاندان جن کی ملازمہ یا ڈرائیور چلا گیا اور واپس نہیں آیا۔",
        "جنہوں نے رپورٹ درج کی اور ملازم واپس آ گیا۔",
        "جو نہیں جانتے کون سا پلیٹ فارم استعمال کریں۔",
      ],
      steps: [
        "ہم غیر حاضری کی تفصیل، تاریخ اور ملازم کی قسم دیکھتے ہیں۔",
        "ہم درست پلیٹ فارم طے کرتے ہیں: اداروں کے لیے قوی یا گھریلو کے لیے مساند۔",
        "ہم رپورٹ سے پہلے شرائط اور قانونی اثرات بتاتے ہیں۔",
        "ہم آپ کے اکاؤنٹ سے رپورٹ درج یا منسوخ کرنا فالو کرتے ہیں۔",
        "ہم ملازم کی حیثیت اپڈیٹ ہونے کی تصدیق کرتے ہیں۔",
      ],
      tips: [
        "ملازم سے آخری رابطہ اور غیر حاضری کی تاریخ محفوظ کریں۔",
        "اختلاف کی بنیاد پر رپورٹ نہ کریں؛ غیر حاضری حقیقی ہونی چاہیے۔",
        "پہلے یقینی بنائیں کہ ملازم کے واجبات باقی نہ ہوں۔",
        "اگر ملازم واپس آئے تو قانونی مدت میں منسوخی کا امکان دیکھیں۔",
        "رپورٹ نمبر اور تاریخ کی کاپی رکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں اداروں اور خاندانوں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا ملازم واپس آئے تو رپورٹ منسوخ ہو سکتی ہے؟", a: "عام طور پر رپورٹ کی تاریخ سے قانونی مدت کے اندر؛ ہم آپ کے کیس کے لیے دیکھتے ہیں۔" },
        { q: "یہاں قوی اور مساند میں کیا فرق ہے؟", a: "قوی اداروں کے ملازمین کے لیے، مساند گھریلو ملازمین جیسے ملازمہ اور ڈرائیور کے لیے ہے۔" },
        { q: "کیا رپورٹ ملازم پر اثر ڈالتی ہے؟", a: "جی ہاں، اس کے قانونی اثرات ہیں، اس لیے ہم پہلے سب کچھ سمجھاتے ہیں۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم فالو اپ سروسز آفس ہیں؛ رپورٹ آپ کے اکاؤنٹ سے سرکاری پلیٹ فارمز پر درج ہوتی ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "कामगार अनुपस्थिति रिपोर्ट (हुरूब)",
      secondaryKeywords: ["फरार कामगार रिपोर्ट सऊदी", "किवा पर अनुपस्थिति रिपोर्ट", "मुसानेद घरेलू कामगार अनुपस्थिति", "अनुपस्थिति रिपोर्ट रद्द करना"],
      metaDescription:
        "तसामी के साथ कामगार की अनुपस्थिति (हुरूब) रिपोर्ट दर्ज या रद्द करें: हम किवा या मुसानेद पर सही प्रक्रिया बताते हैं और व्हाट्सऐप पर चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "जब कोई कामगार बिना कारण काम पर आना बंद कर दे और संपर्क न हो सके, तो नियोक्ता संबंधित आधिकारिक प्लेटफॉर्म पर अनुपस्थिति रिपोर्ट दर्ज कर सकता है: संस्थानों के कामगारों के लिए किवा और घरेलू कामगारों के लिए मुसानेद। यह रिपोर्ट नियोक्ता को कामगार के उसकी कफ़ालत में बने रहने के परिणामों से बचाती है, लेकिन कामगार पर इसके कानूनी प्रभाव हैं, इसलिए यह वास्तविक घटना पर और सही समय पर होनी चाहिए। तसामी में हम शर्तें और चरण समझाते हैं और रिपोर्ट दर्ज करना, या कामगार के तय अवधि में लौटने पर रद्द करना फॉलो करते हैं।",
      who: [
        "वे संस्थान जिनका कामगार बिना सूचना गायब हो गया।",
        "वे परिवार जिनकी कामगार या ड्राइवर चला गया और नहीं लौटा।",
        "जिन्होंने रिपोर्ट दर्ज की और कामगार लौट आया।",
        "जो नहीं जानते कौन सा प्लेटफॉर्म इस्तेमाल करें।",
      ],
      steps: [
        "हम अनुपस्थिति का विवरण, तारीख और कामगार का प्रकार देखते हैं।",
        "हम सही प्लेटफॉर्म तय करते हैं: संस्थानों के लिए किवा या घरेलू के लिए मुसानेद।",
        "हम रिपोर्ट से पहले शर्तें और कानूनी प्रभाव बताते हैं।",
        "हम आपके खाते से रिपोर्ट दर्ज या रद्द करना फॉलो करते हैं।",
        "हम कामगार की स्थिति अपडेट होने की पुष्टि करते हैं।",
      ],
      tips: [
        "कामगार से आखिरी संपर्क और अनुपस्थिति की तारीख दर्ज रखें।",
        "विवाद के कारण रिपोर्ट न करें; अनुपस्थिति वास्तविक होनी चाहिए।",
        "पहले सुनिश्चित करें कि कामगार का कोई बकाया न हो।",
        "अगर कामगार लौटे तो कानूनी अवधि में रद्द करने की संभावना देखें।",
        "रिपोर्ट नंबर और तारीख की कॉपी रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में संस्थानों और परिवारों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या कामगार लौटे तो रिपोर्ट रद्द हो सकती है?", a: "आमतौर पर रिपोर्ट की तारीख से कानूनी अवधि के भीतर; हम आपके मामले के लिए जांचते हैं।" },
        { q: "यहां किवा और मुसानेद में क्या अंतर है?", a: "किवा संस्थानों के कामगारों के लिए, मुसानेद घरेलू कामगारों जैसे हाउसमेड और ड्राइवर के लिए है।" },
        { q: "क्या रिपोर्ट कामगार को प्रभावित करती है?", a: "हां, इसके कानूनी प्रभाव हैं, इसलिए हम पहले सब कुछ समझाते हैं।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम फॉलो-अप सेवा कार्यालय हैं; रिपोर्ट आपके खाते से आधिकारिक प्लेटफॉर्म पर दर्ज होती है।" },
      ],
    },
  },

  ajeerContract: {
    ar: {
      primaryKeyword: "عقد أجير لإعارة العمالة",
      secondaryKeywords: ["برنامج أجير", "إصدار تصريح أجير", "إعارة عامل بين المنشآت", "أجير قوى"],
      metaDescription:
        "إصدار عقد أو تصريح أجير لإعارة العمالة بين المنشآت مع تسامي: نراجع الأهلية ونتابع الطلب عبر منصة أجير خطوة بخطوة على واتساب. لسنا جهة حكومية.",
      intro:
        "برنامج أجير هو الإطار الرسمي الذي يسمح للمنشآت بالاستفادة من عمالة منشأة أخرى بشكل مؤقت ونظامي، بدلاً من تشغيل عمالة لا تتبع المنشأة دون تصريح، وهو أمر يعرّض الطرفين للمخالفات. يتم ذلك عبر منصة أجير المرتبطة بمنظومة قوى، ويتطلب أن تكون المنشأتان مستوفيتين للشروط، وأن تكون بيانات العامل والمهنة ومدة الإعارة واضحة. في تسامي نراجع أهلية منشأتك، ونجهز البيانات المطلوبة، ونتابع إصدار التصريح بين الطرفين، ونوضح لك ما يجب الالتزام به أثناء مدة العقد.",
      who: [
        "المنشآت التي تحتاج عمالة مؤقتة لمشروع أو موسم.",
        "المنشآت التي لديها عمالة فائضة وتريد إعارتها نظامياً.",
        "المقاولون الذين يتعاونون مع منشآت أخرى في مشاريع مشتركة.",
        "من يريد تجنب مخالفات تشغيل عمالة لا تتبع منشأته.",
      ],
      steps: [
        "نراجع أهلية المنشأتين ووضعهما في قوى والتأمينات.",
        "نجهز بيانات العامل والمهنة ومدة الإعارة ومكان العمل.",
        "نتابع رفع الطلب في منصة أجير من حساب المنشأة المعنية.",
        "نوضح الرسوم الحكومية لتسددها بنفسك عبر القنوات الرسمية.",
        "نتابع موافقة الطرف الآخر وإصدار التصريح ونرسل لك ملخصه.",
      ],
      tips: [
        "لا تشغّل أي عامل لا يتبع منشأتك قبل صدور التصريح.",
        "حدد مدة الإعارة بدقة وجدد قبل انتهائها إذا احتجت.",
        "تأكد أن مهنة العامل تناسب العمل المطلوب.",
        "احتفظ بنسخة من التصريح في موقع العمل.",
        "راجع التزامات كل طرف تجاه العامل أثناء مدة العقد.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "ما الهدف من برنامج أجير؟", a: "تنظيم الاستفادة المؤقتة من عمالة منشأة أخرى بشكل نظامي يحمي المنشأتين والعامل." },
        { q: "هل يلزم موافقة المنشأتين؟", a: "نعم، الإعارة تتم باتفاق الطرفين عبر المنصة، ولكل منهما دور في الطلب." },
        { q: "هل يمكن تمديد التصريح؟", a: "يمكن غالباً التجديد وفق الشروط المعمول بها، ونذكّرك قبل انتهاء المدة." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسم المنشأة، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية أو تابعة لأجير؟", a: "لا، نحن مكتب خدمات تعقيب مستقل نتابع معك الإجراءات، والتصريح يصدر من المنصة الرسمية." },
      ],
    },
    en: {
      primaryKeyword: "Ajeer contract for worker loan",
      secondaryKeywords: ["Ajeer program Saudi", "Ajeer permit issuance", "loaning workers between establishments", "Ajeer Qiwa"],
      metaDescription:
        "Issue an Ajeer contract or permit to loan workers between establishments with Tasami: we check eligibility and follow the request on the Ajeer platform step by step via WhatsApp. Not a government entity.",
      intro:
        "Ajeer is the official framework allowing establishments to use another establishment's workers temporarily and legally, instead of employing non-sponsored workers without a permit, which exposes both parties to violations. It runs through the Ajeer platform linked to the Qiwa ecosystem and requires both establishments to meet conditions, with clear worker, profession and loan period details. At Tasami we review your establishment's eligibility, prepare the required data, follow permit issuance between both parties and explain what must be respected during the contract.",
      who: [
        "Establishments needing temporary workers for a project or season.",
        "Establishments with surplus workers wanting to loan them legally.",
        "Contractors cooperating with other establishments on joint projects.",
        "Anyone wanting to avoid violations for employing non-sponsored workers.",
      ],
      steps: [
        "We review both establishments' eligibility and status on Qiwa and GOSI.",
        "We prepare worker, profession, loan period and worksite details.",
        "We follow submitting the request on Ajeer from the relevant account.",
        "We explain government fees so you pay them through official channels.",
        "We follow the other party's approval and permit issuance and send you a summary.",
      ],
      tips: [
        "Never employ a non-sponsored worker before the permit is issued.",
        "Set the loan period precisely and renew before expiry if needed.",
        "Make sure the worker's profession suits the required work.",
        "Keep a copy of the permit at the worksite.",
        "Review each party's obligations to the worker during the contract.",
      ],
      local:
        "We serve establishments in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "What is the purpose of Ajeer?", a: "To regulate temporary use of another establishment's workers legally, protecting both establishments and the worker." },
        { q: "Do both establishments need to agree?", a: "Yes, the loan is by mutual agreement on the platform, and each party has a role in the request." },
        { q: "Can the permit be extended?", a: "Renewal is usually possible under current conditions; we remind you before expiry." },
        { q: "Who pays government fees?", a: "Government fees are paid through official channels in the establishment's name; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "اجیر معاہدہ برائے ملازم عاریتاً",
      secondaryKeywords: ["اجیر پروگرام سعودی", "اجیر پرمٹ اجرا", "اداروں کے درمیان ملازم عاریتاً", "اجیر قوی"],
      metaDescription:
        "تسامی کے ساتھ اداروں کے درمیان ملازمین عاریتاً دینے کے لیے اجیر معاہدہ یا پرمٹ جاری کرائیں: ہم اہلیت دیکھتے ہیں اور اجیر پلیٹ فارم پر درخواست واٹس ایپ پر فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "اجیر وہ سرکاری نظام ہے جو اداروں کو کسی دوسرے ادارے کے ملازمین سے عارضی اور قانونی طور پر کام لینے کی اجازت دیتا ہے، بجائے اس کے کہ بغیر پرمٹ دوسرے کی کفالت والے ملازم سے کام لیا جائے، جو دونوں فریقوں کو خلاف ورزی میں ڈالتا ہے۔ یہ قوی سسٹم سے منسلک اجیر پلیٹ فارم سے ہوتا ہے اور دونوں اداروں کا شرائط پوری کرنا اور ملازم، پیشہ اور مدت کی واضح تفصیل ضروری ہے۔ تسامی میں ہم آپ کے ادارے کی اہلیت دیکھتے ہیں، ڈیٹا تیار کرتے ہیں، دونوں فریقوں کے درمیان پرمٹ کا اجرا فالو کرتے ہیں اور معاہدے کے دوران کی ذمہ داریاں سمجھاتے ہیں۔",
      who: [
        "وہ ادارے جنہیں کسی منصوبے یا سیزن کے لیے عارضی ملازمین چاہئیں۔",
        "وہ ادارے جن کے پاس اضافی ملازمین ہیں اور قانونی طور پر عاریتاً دینا چاہتے ہیں۔",
        "مشترکہ منصوبوں میں دوسرے اداروں کے ساتھ کام کرنے والے ٹھیکیدار۔",
        "جو دوسرے کی کفالت والے ملازم سے کام لینے کی خلاف ورزی سے بچنا چاہتے ہیں۔",
      ],
      steps: [
        "ہم دونوں اداروں کی اہلیت اور قوی و گوسی میں حیثیت دیکھتے ہیں۔",
        "ہم ملازم، پیشہ، مدت اور کام کی جگہ کی تفصیل تیار کرتے ہیں۔",
        "ہم متعلقہ اکاؤنٹ سے اجیر پر درخواست جمع کرنا فالو کرتے ہیں۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ سرکاری ذرائع سے ادا کریں۔",
        "ہم دوسرے فریق کی منظوری اور پرمٹ کا اجرا فالو کر کے خلاصہ بھیجتے ہیں۔",
      ],
      tips: [
        "پرمٹ جاری ہونے سے پہلے دوسرے کی کفالت والے ملازم سے کام نہ لیں۔",
        "مدت درست طے کریں اور ضرورت ہو تو ختم ہونے سے پہلے تجدید کریں۔",
        "یقینی بنائیں کہ ملازم کا پیشہ مطلوبہ کام کے مطابق ہے۔",
        "پرمٹ کی کاپی کام کی جگہ پر رکھیں۔",
        "معاہدے کے دوران ہر فریق کی ذمہ داریاں دیکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "اجیر کا مقصد کیا ہے؟", a: "دوسرے ادارے کے ملازمین سے عارضی کام کو قانونی بنانا، جو دونوں اداروں اور ملازم کی حفاظت کرتا ہے۔" },
        { q: "کیا دونوں اداروں کی رضامندی ضروری ہے؟", a: "جی ہاں، یہ پلیٹ فارم پر باہمی رضامندی سے ہوتا ہے اور ہر فریق کا کردار ہے۔" },
        { q: "کیا پرمٹ بڑھایا جا سکتا ہے؟", a: "عام طور پر موجودہ شرائط کے تحت تجدید ممکن ہے؛ ہم ختم ہونے سے پہلے یاد دلاتے ہیں۔" },
        { q: "سرکاری فیس کون ادا کرتا ہے؟", a: "سرکاری فیس ادارے کے نام سے سرکاری ذرائع سے ادا ہوتی ہے؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "अजीर कॉन्ट्रैक्ट कामगार लोन के लिए",
      secondaryKeywords: ["अजीर प्रोग्राम सऊदी", "अजीर परमिट जारी करना", "संस्थानों के बीच कामगार लोन", "अजीर किवा"],
      metaDescription:
        "तसामी के साथ संस्थानों के बीच कामगार लोन के लिए अजीर कॉन्ट्रैक्ट या परमिट जारी कराएं: हम पात्रता जांचते हैं और अजीर प्लेटफॉर्म पर अनुरोध व्हाट्सऐप पर फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "अजीर वह आधिकारिक व्यवस्था है जो संस्थानों को किसी दूसरे संस्थान के कामगारों से अस्थायी और कानूनी रूप से काम लेने की अनुमति देती है, बजाय बिना परमिट दूसरे की कफ़ालत वाले कामगार से काम लेने के, जो दोनों पक्षों को उल्लंघन में डालता है। यह किवा प्रणाली से जुड़े अजीर प्लेटफॉर्म से होता है और दोनों संस्थानों का शर्तें पूरी करना तथा कामगार, पेशे और अवधि का स्पष्ट विवरण ज़रूरी है। तसामी में हम आपके संस्थान की पात्रता देखते हैं, डेटा तैयार करते हैं, दोनों पक्षों के बीच परमिट जारी होना फॉलो करते हैं और कॉन्ट्रैक्ट के दौरान की ज़िम्मेदारियां समझाते हैं।",
      who: [
        "वे संस्थान जिन्हें किसी प्रोजेक्ट या सीज़न के लिए अस्थायी कामगार चाहिए।",
        "वे संस्थान जिनके पास अतिरिक्त कामगार हैं और कानूनी रूप से लोन देना चाहते हैं।",
        "संयुक्त प्रोजेक्ट में दूसरे संस्थानों के साथ काम करने वाले ठेकेदार।",
        "जो दूसरे की कफ़ालत वाले कामगार से काम लेने के उल्लंघन से बचना चाहते हैं।",
      ],
      steps: [
        "हम दोनों संस्थानों की पात्रता और किवा व GOSI में स्थिति देखते हैं।",
        "हम कामगार, पेशा, अवधि और कार्यस्थल का विवरण तैयार करते हैं।",
        "हम संबंधित खाते से अजीर पर अनुरोध जमा करना फॉलो करते हैं।",
        "हम सरकारी फीस समझाते हैं ताकि आप आधिकारिक माध्यम से भुगतान करें।",
        "हम दूसरे पक्ष की मंज़ूरी और परमिट जारी होना फॉलो करके सारांश भेजते हैं।",
      ],
      tips: [
        "परमिट जारी होने से पहले दूसरे की कफ़ालत वाले कामगार से काम न लें।",
        "अवधि सटीक तय करें और ज़रूरत हो तो खत्म होने से पहले रिन्यू करें।",
        "सुनिश्चित करें कि कामगार का पेशा आवश्यक काम के अनुकूल है।",
        "परमिट की कॉपी कार्यस्थल पर रखें।",
        "कॉन्ट्रैक्ट के दौरान हर पक्ष की ज़िम्मेदारियां देखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "अजीर का उद्देश्य क्या है?", a: "दूसरे संस्थान के कामगारों से अस्थायी काम को कानूनी बनाना, जो दोनों संस्थानों और कामगार की रक्षा करता है।" },
        { q: "क्या दोनों संस्थानों की सहमति ज़रूरी है?", a: "हां, यह प्लेटफॉर्म पर आपसी सहमति से होता है और हर पक्ष की भूमिका है।" },
        { q: "क्या परमिट बढ़ाया जा सकता है?", a: "आमतौर पर मौजूदा शर्तों के तहत रिन्यूअल संभव है; हम खत्म होने से पहले याद दिलाते हैं।" },
        { q: "सरकारी फीस कौन देता है?", a: "सरकारी फीस संस्थान के नाम से आधिकारिक माध्यम से दी जाती है; हम केवल मार्गदर्शन करते हैं।" },
      ],
    },
  },
};
