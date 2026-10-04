import type { GuideDef } from "./service-guides";

/**
 * Sixth batch of government guides (municipal, health, traffic, Najiz, civil status).
 * No government fees, fixed durations or legal promises.
 */
export const GOV6_GUIDES: Record<string, GuideDef> = {
  wasteContract: {
    ar: {
      primaryKeyword: "عقد نقل النفايات للمنشآت",
      secondaryKeywords: ["عقد نفايات للرخصة البلدية", "عقد نقل نفايات مطعم", "شركة نقل نفايات مرخصة", "اشتراطات النفايات بلدي"],
      metaDescription:
        "توثيق عقد نقل النفايات المطلوب للرخصة البلدية مع تسامي: نوضح لك المتطلبات ونساعدك في ربط العقد بالرخصة عبر منصة بلدي خطوة بخطوة. لسنا جهة حكومية.",
      intro:
        "كثير من الأنشطة التجارية مثل المطاعم والمقاهي والمحلات الغذائية والورش يُطلب منها عقد مع جهة مرخصة لنقل النفايات، ويكون هذا العقد من متطلبات إصدار الرخصة البلدية أو تجديدها. المشكلة أن بعض أصحاب المنشآت يوقعون عقداً مع جهة غير مرخصة، أو عقداً لا يغطي نوع النفايات الناتجة عن نشاطهم، فيُرفض الطلب أو يتعرضون لمخالفات عند الجولات الرقابية. في تسامي نوضح لك هل نشاطك يتطلب عقد نفايات، ونساعدك في التحقق من ترخيص الجهة الناقلة، ونتابع ربط العقد بطلب الرخصة عبر منصة بلدي حتى يكتمل الملف.",
      who: [
        "أصحاب المطاعم والمقاهي والمحلات الغذائية.",
        "الورش والمصانع الصغيرة التي تنتج نفايات خاصة.",
        "من رُفض تجديد رخصته البلدية بسبب عقد النفايات.",
        "من يفتح نشاطاً جديداً ويجهز متطلبات الرخصة.",
      ],
      steps: [
        "نراجع نوع نشاطك ونوع النفايات الناتجة عنه.",
        "نوضح لك هل يتطلب نشاطك عقد نفايات ضمن متطلبات الرخصة.",
        "نساعدك في التحقق من ترخيص الجهة الناقلة قبل التعاقد.",
        "نتابع رفع العقد وربطه بطلب الرخصة عبر منصة بلدي.",
        "نتابع اكتمال الطلب ونذكّرك بموعد تجديد العقد.",
      ],
      tips: [
        "تعاقد فقط مع جهة نقل نفايات مرخصة ومعتمدة.",
        "تأكد أن العقد يغطي نوع النفايات الناتجة عن نشاطك.",
        "اجعل مدة العقد متوافقة مع مدة الرخصة قدر الإمكان.",
        "احتفظ بنسخة من العقد في المنشأة للجولات الرقابية.",
        "التزم بأماكن ومواعيد تجميع النفايات المتفق عليها.",
      ],
      local:
        "نخدم المنشآت في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل كل الأنشطة تحتاج عقد نفايات؟", a: "لا، يختلف ذلك حسب نوع النشاط واشتراطات البلدية، ونوضح لك إن كان نشاطك يتطلبه." },
        { q: "هل تسامي شركة نقل نفايات؟", a: "لا، نحن مكتب خدمات تعقيب نساعدك في المتطلبات والربط بالرخصة، والنقل نفسه تقوم به جهات مرخصة." },
        { q: "ماذا لو انتهى عقد النفايات قبل الرخصة؟", a: "يُفضل تجديده قبل انتهائه، لأن انتهاء العقد قد يؤثر على وضع الرخصة عند التجديد أو الرقابة." },
        { q: "من يدفع الرسوم؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية وقيمة العقد للجهة الناقلة مباشرة، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات مستقل، والرخصة تصدر من البلدية عبر منصة بلدي الرسمية." },
      ],
    },
    en: {
      primaryKeyword: "waste collection contract for businesses",
      secondaryKeywords: ["waste contract for municipal licence", "restaurant waste contract", "licensed waste collection company", "Balady waste requirements"],
      metaDescription:
        "Arrange the waste collection contract required for your municipal licence with Tasami: we explain requirements and help link the contract to your licence on Balady step by step. Not a government entity.",
      intro:
        "Many businesses such as restaurants, cafés, food shops and workshops are required to have a contract with a licensed waste collection provider, and this contract is often a requirement for issuing or renewing the municipal licence. Some owners sign with an unlicensed provider, or with a contract that doesn't cover the waste their activity produces, leading to rejections or violations during inspections. At Tasami we explain whether your activity needs a waste contract, help you verify the provider's licence and follow linking the contract to your licence request on Balady until the file is complete.",
      who: [
        "Restaurant, café and food shop owners.",
        "Workshops and small factories producing special waste.",
        "Anyone whose municipal licence renewal was rejected over the waste contract.",
        "Anyone opening a new business and preparing licence requirements.",
      ],
      steps: [
        "We review your activity and the type of waste it produces.",
        "We explain whether your activity needs a waste contract for the licence.",
        "We help you verify the provider's licence before contracting.",
        "We follow uploading the contract and linking it to your licence on Balady.",
        "We follow completion and remind you of contract renewal.",
      ],
      tips: [
        "Only contract with a licensed, approved waste provider.",
        "Make sure the contract covers the waste your activity produces.",
        "Align the contract period with the licence period where possible.",
        "Keep a copy of the contract on site for inspections.",
        "Stick to the agreed collection points and times.",
      ],
      local:
        "We serve establishments in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do all activities need a waste contract?", a: "No, it depends on the activity and municipal requirements; we tell you whether yours needs one." },
        { q: "Is Tasami a waste collection company?", a: "No, we are a follow-up services office helping with requirements and licence linking; collection is done by licensed providers." },
        { q: "What if the waste contract expires before the licence?", a: "Renew it before expiry, as an expired contract may affect the licence at renewal or inspection." },
        { q: "Who pays?", a: "Government fees go through official channels and the contract value directly to the provider; we only guide the steps." },
      ],
    },
    ur: {
      primaryKeyword: "اداروں کے لیے کچرا اٹھانے کا معاہدہ",
      secondaryKeywords: ["بلدیہ لائسنس کے لیے کچرا معاہدہ", "ریسٹورنٹ کچرا معاہدہ", "لائسنس یافتہ کچرا کمپنی", "بلدی کچرا شرائط"],
      metaDescription:
        "تسامی کے ساتھ بلدیہ لائسنس کے لیے مطلوبہ کچرا اٹھانے کا معاہدہ ترتیب دیں: ہم شرائط بتاتے ہیں اور بلدی پر معاہدہ لائسنس سے منسلک کرنے میں قدم بہ قدم مدد کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "ریسٹورنٹس، کیفے، فوڈ شاپس اور ورکشاپس جیسے کئی کاروباروں سے لائسنس یافتہ کچرا اٹھانے والی کمپنی سے معاہدہ مانگا جاتا ہے، اور یہ معاہدہ اکثر بلدیہ لائسنس کے اجرا یا تجدید کی شرط ہوتا ہے۔ بعض مالکان غیر لائسنس یافتہ کمپنی سے یا ایسا معاہدہ کرتے ہیں جو ان کی سرگرمی کے کچرے کی قسم کو شامل نہیں کرتا، جس سے درخواست مسترد یا معائنے میں خلاف ورزی ہوتی ہے۔ تسامی میں ہم بتاتے ہیں کہ آپ کی سرگرمی کو کچرا معاہدہ چاہیے یا نہیں، کمپنی کا لائسنس چیک کرنے میں مدد کرتے ہیں اور بلدی پر معاہدہ لائسنس سے منسلک کرنا فالو کرتے ہیں۔",
      who: [
        "ریسٹورنٹ، کیفے اور فوڈ شاپ مالکان۔",
        "خاص کچرا پیدا کرنے والی ورکشاپس اور چھوٹے کارخانے۔",
        "جن کی بلدیہ لائسنس تجدید کچرا معاہدے کی وجہ سے مسترد ہوئی۔",
        "جو نیا کاروبار کھول کر لائسنس کی شرائط تیار کر رہے ہیں۔",
      ],
      steps: [
        "ہم آپ کی سرگرمی اور اس سے پیدا ہونے والے کچرے کی قسم دیکھتے ہیں۔",
        "ہم بتاتے ہیں کہ لائسنس کے لیے کچرا معاہدہ چاہیے یا نہیں۔",
        "ہم معاہدے سے پہلے کمپنی کا لائسنس چیک کرنے میں مدد کرتے ہیں۔",
        "ہم بلدی پر معاہدہ اپلوڈ اور لائسنس سے منسلک کرنا فالو کرتے ہیں۔",
        "ہم تکمیل فالو کرتے ہیں اور معاہدے کی تجدید یاد دلاتے ہیں۔",
      ],
      tips: [
        "صرف لائسنس یافتہ اور منظور شدہ کمپنی سے معاہدہ کریں۔",
        "یقینی بنائیں کہ معاہدہ آپ کے کچرے کی قسم کو شامل کرتا ہے۔",
        "ممکن ہو تو معاہدے کی مدت لائسنس کی مدت کے مطابق رکھیں۔",
        "معائنے کے لیے معاہدے کی کاپی دکان پر رکھیں۔",
        "طے شدہ جگہوں اور اوقات کی پابندی کریں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا ہر سرگرمی کو کچرا معاہدہ چاہیے؟", a: "نہیں، یہ سرگرمی اور بلدیہ کی شرائط پر منحصر ہے؛ ہم بتاتے ہیں کہ آپ کو چاہیے یا نہیں۔" },
        { q: "کیا تسامی کچرا اٹھانے والی کمپنی ہے؟", a: "نہیں، ہم فالو اپ سروسز آفس ہیں؛ کچرا لائسنس یافتہ کمپنیاں اٹھاتی ہیں۔" },
        { q: "اگر معاہدہ لائسنس سے پہلے ختم ہو جائے؟", a: "میعاد سے پہلے تجدید کریں، کیونکہ ختم شدہ معاہدہ لائسنس پر اثر ڈال سکتا ہے۔" },
        { q: "ادائیگی کون کرتا ہے؟", a: "سرکاری فیس سرکاری ذرائع سے اور معاہدے کی رقم براہ راست کمپنی کو؛ ہم صرف رہنمائی کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "व्यवसायों के लिए कचरा संग्रह अनुबंध",
      secondaryKeywords: ["नगरपालिका लाइसेंस के लिए कचरा अनुबंध", "रेस्टोरेंट कचरा अनुबंध", "लाइसेंस प्राप्त कचरा कंपनी", "बलदी कचरा शर्तें"],
      metaDescription:
        "तसामी के साथ नगरपालिका लाइसेंस के लिए आवश्यक कचरा संग्रह अनुबंध व्यवस्थित करें: हम शर्तें बताते हैं और बलदी पर अनुबंध को लाइसेंस से जोड़ने में चरण-दर-चरण मदद करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "रेस्टोरेंट, कैफे, फूड शॉप और वर्कशॉप जैसे कई व्यवसायों से लाइसेंस प्राप्त कचरा संग्रह कंपनी के साथ अनुबंध मांगा जाता है, और यह अनुबंध अक्सर नगरपालिका लाइसेंस जारी करने या रिन्यू करने की शर्त होता है। कुछ मालिक बिना लाइसेंस वाली कंपनी से या ऐसा अनुबंध करते हैं जो उनकी गतिविधि के कचरे के प्रकार को शामिल नहीं करता, जिससे आवेदन अस्वीकार या निरीक्षण में उल्लंघन होता है। तसामी में हम बताते हैं कि आपकी गतिविधि को कचरा अनुबंध चाहिए या नहीं, कंपनी का लाइसेंस जांचने में मदद करते हैं और बलदी पर अनुबंध को लाइसेंस से जोड़ना फॉलो करते हैं।",
      who: [
        "रेस्टोरेंट, कैफे और फूड शॉप मालिक।",
        "विशेष कचरा पैदा करने वाली वर्कशॉप और छोटे कारखाने।",
        "जिनका नगरपालिका लाइसेंस रिन्यूअल कचरा अनुबंध के कारण अस्वीकार हुआ।",
        "जो नया व्यवसाय खोलकर लाइसेंस की शर्तें तैयार कर रहे हैं।",
      ],
      steps: [
        "हम आपकी गतिविधि और उससे पैदा होने वाले कचरे का प्रकार देखते हैं।",
        "हम बताते हैं कि लाइसेंस के लिए कचरा अनुबंध चाहिए या नहीं।",
        "हम अनुबंध से पहले कंपनी का लाइसेंस जांचने में मदद करते हैं।",
        "हम बलदी पर अनुबंध अपलोड और लाइसेंस से जोड़ना फॉलो करते हैं।",
        "हम पूरा होना फॉलो करते हैं और अनुबंध रिन्यूअल याद दिलाते हैं।",
      ],
      tips: [
        "केवल लाइसेंस प्राप्त और अनुमोदित कंपनी से अनुबंध करें।",
        "सुनिश्चित करें कि अनुबंध आपके कचरे के प्रकार को शामिल करता है।",
        "संभव हो तो अनुबंध की अवधि लाइसेंस की अवधि के अनुसार रखें।",
        "निरीक्षण के लिए अनुबंध की कॉपी दुकान पर रखें।",
        "तय स्थानों और समय का पालन करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या हर गतिविधि को कचरा अनुबंध चाहिए?", a: "नहीं, यह गतिविधि और नगरपालिका की शर्तों पर निर्भर है; हम बताते हैं कि आपको चाहिए या नहीं।" },
        { q: "क्या तसामी कचरा संग्रह कंपनी है?", a: "नहीं, हम फॉलो-अप सेवा कार्यालय हैं; कचरा लाइसेंस प्राप्त कंपनियां उठाती हैं।" },
        { q: "अगर अनुबंध लाइसेंस से पहले खत्म हो जाए?", a: "समाप्ति से पहले रिन्यू करें, क्योंकि खत्म अनुबंध लाइसेंस को प्रभावित कर सकता है।" },
        { q: "भुगतान कौन करता है?", a: "सरकारी फीस आधिकारिक माध्यम से और अनुबंध राशि सीधे कंपनी को; हम केवल मार्गदर्शन करते हैं।" },
      ],
    },
  },

  sfdaLicense: {
    ar: {
      primaryKeyword: "ترخيص هيئة الغذاء والدواء",
      secondaryKeywords: ["ترخيص منشأة غذائية من الهيئة", "تسجيل منتج في هيئة الغذاء والدواء", "ترخيص مستودع أغذية", "ترخيص مستحضرات تجميل"],
      metaDescription:
        "ترخيص المنشآت وتسجيل المنتجات لدى هيئة الغذاء والدواء مع تسامي: نحدد نوع الترخيص المناسب لنشاطك ونتابع الطلب عبر الأنظمة الإلكترونية للهيئة خطوة بخطوة. لسنا جهة حكومية.",
      intro:
        "الهيئة العامة للغذاء والدواء تنظم المنشآت والمنتجات المتعلقة بالغذاء والدواء والأجهزة الطبية ومستحضرات التجميل، مثل المصانع والمستودعات ومنشآت الاستيراد والتوزيع، إضافة إلى تسجيل بعض المنتجات قبل طرحها في السوق. لكل نشاط ترخيص ومتطلبات فنية مختلفة، والخطأ في اختيار نوع الترخيص أو نقص الاشتراطات الفنية للموقع قد يؤخر الطلب كثيراً. في تسامي نراجع معك طبيعة نشاطك ومنتجاتك، ونحدد نوع الترخيص أو التسجيل المطلوب، ونجهز معك قائمة المتطلبات، ونتابع الطلب عبر الأنظمة الإلكترونية للهيئة حتى صدور القرار.",
      who: [
        "مستوردو وموزعو المواد الغذائية.",
        "أصحاب مستودعات الأغذية أو الأدوية أو مستحضرات التجميل.",
        "المصانع الصغيرة والمتوسطة في قطاع الغذاء.",
        "من يريد تسجيل منتج قبل بيعه في السوق السعودي.",
      ],
      steps: [
        "نراجع نشاطك ومنتجاتك ونوع المنشأة.",
        "نحدد نوع الترخيص أو تسجيل المنتج المطلوب.",
        "نجهز معك قائمة المتطلبات الفنية والمستندات.",
        "نوضح لك الرسوم الحكومية لتسددها بنفسك عبر القنوات الرسمية.",
        "نتابع الطلب عبر الأنظمة الإلكترونية للهيئة ونرد على الملاحظات حتى صدور القرار.",
      ],
      tips: [
        "تأكد أن نشاط الهيئة المطلوب موجود في سجلك التجاري.",
        "جهّز الموقع حسب الاشتراطات الفنية قبل التقديم.",
        "احتفظ بمستندات المنتجات وشهاداتها من المصنع.",
        "تابع ملاحظات الهيئة بسرعة لتجنب إغلاق الطلب.",
        "راجع متطلبات بطاقة البيان للمنتجات قبل الاستيراد.",
      ],
      local:
        "نخدم المنشآت في الرياض وجدة والدمام ومكة المكرمة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل كل المنشآت الغذائية تحتاج ترخيص الهيئة؟", a: "لا، بعض الأنشطة كالمطاعم تتبع البلدية غالباً، بينما المصانع والمستودعات والاستيراد قد تتطلب ترخيص الهيئة؛ نوضح لك ذلك حسب نشاطك." },
        { q: "هل تسجيل المنتج إلزامي؟", a: "يعتمد ذلك على نوع المنتج وفئته، ونراجع معك المتطلبات قبل الاستيراد أو البيع." },
        { q: "هل تضمنون صدور الترخيص؟", a: "لا، القرار للهيئة وحدها، ودورنا تجهيز الطلب ومتابعته بدقة." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع الرسوم الحكومية عبر القنوات الرسمية باسم منشأتك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب مستقل، والترخيص يصدر من هيئة الغذاء والدواء." },
      ],
    },
    en: {
      primaryKeyword: "SFDA licence Saudi Arabia",
      secondaryKeywords: ["SFDA food establishment licence", "SFDA product registration", "food warehouse licence", "cosmetics licence SFDA"],
      metaDescription:
        "Licence your establishment and register products with the Saudi Food and Drug Authority with Tasami: we identify the right licence and follow the request on SFDA e-systems step by step. Not a government entity.",
      intro:
        "The Saudi Food and Drug Authority regulates establishments and products related to food, medicines, medical devices and cosmetics, such as factories, warehouses and import and distribution businesses, plus registration of certain products before sale. Each activity has its own licence and technical requirements, and choosing the wrong licence type or missing site requirements can delay the request considerably. At Tasami we review your activity and products, identify the licence or registration needed, prepare the requirements list with you and follow the request on SFDA e-systems until a decision is issued.",
      who: [
        "Food importers and distributors.",
        "Owners of food, medicine or cosmetics warehouses.",
        "Small and medium food factories.",
        "Anyone registering a product before selling it in Saudi Arabia.",
      ],
      steps: [
        "We review your activity, products and establishment type.",
        "We identify the licence or product registration needed.",
        "We prepare technical requirements and documents with you.",
        "We explain government fees so you pay them yourself through official channels.",
        "We follow the request on SFDA e-systems and respond to comments until a decision.",
      ],
      tips: [
        "Make sure the required activity is on your commercial register.",
        "Prepare the site according to technical requirements before applying.",
        "Keep product documents and manufacturer certificates.",
        "Respond to SFDA comments quickly to avoid the request closing.",
        "Review product labelling requirements before importing.",
      ],
      local:
        "We serve establishments in Riyadh, Jeddah, Dammam, Makkah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do all food businesses need an SFDA licence?", a: "No, restaurants usually fall under the municipality, while factories, warehouses and importers may need SFDA licences; we explain for your activity." },
        { q: "Is product registration mandatory?", a: "It depends on the product type and category; we review requirements before import or sale." },
        { q: "Do you guarantee the licence?", a: "No, the decision is SFDA's alone; our role is preparing and following the request carefully." },
        { q: "Is Tasami a government entity?", a: "No, we are an independent follow-up services office; the licence is issued by SFDA." },
      ],
    },
    ur: {
      primaryKeyword: "فوڈ اینڈ ڈرگ اتھارٹی لائسنس",
      secondaryKeywords: ["فوڈ ادارے کا SFDA لائسنس", "SFDA پروڈکٹ رجسٹریشن", "فوڈ گودام لائسنس", "کاسمیٹکس لائسنس"],
      metaDescription:
        "تسامی کے ساتھ سعودی فوڈ اینڈ ڈرگ اتھارٹی میں ادارے کا لائسنس اور پروڈکٹ رجسٹریشن کرائیں: ہم درست لائسنس طے کرتے ہیں اور اتھارٹی کے ای سسٹمز پر درخواست قدم بہ قدم فالو کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "سعودی فوڈ اینڈ ڈرگ اتھارٹی خوراک، ادویات، طبی آلات اور کاسمیٹکس سے متعلق اداروں اور مصنوعات کو منظم کرتی ہے، جیسے کارخانے، گودام اور درآمد و تقسیم کے کاروبار، نیز بعض مصنوعات کی فروخت سے پہلے رجسٹریشن۔ ہر سرگرمی کا اپنا لائسنس اور تکنیکی شرائط ہیں، اور غلط لائسنس یا جگہ کی شرائط کی کمی درخواست میں کافی تاخیر کر سکتی ہے۔ تسامی میں ہم آپ کی سرگرمی اور مصنوعات دیکھتے ہیں، مطلوبہ لائسنس یا رجسٹریشن طے کرتے ہیں، شرائط کی فہرست تیار کرتے ہیں اور اتھارٹی کے ای سسٹمز پر فیصلے تک فالو کرتے ہیں۔",
      who: [
        "خوراک کے درآمد کنندگان اور تقسیم کار۔",
        "خوراک، ادویات یا کاسمیٹکس کے گوداموں کے مالکان۔",
        "خوراک کے چھوٹے اور درمیانے کارخانے۔",
        "جو سعودی مارکیٹ میں فروخت سے پہلے پروڈکٹ رجسٹر کرانا چاہتے ہیں۔",
      ],
      steps: [
        "ہم آپ کی سرگرمی، مصنوعات اور ادارے کی قسم دیکھتے ہیں۔",
        "ہم مطلوبہ لائسنس یا پروڈکٹ رجسٹریشن طے کرتے ہیں۔",
        "ہم آپ کے ساتھ تکنیکی شرائط اور دستاویزات تیار کرتے ہیں۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ خود سرکاری ذرائع سے ادا کریں۔",
        "ہم ای سسٹمز پر درخواست اور ملاحظات کا جواب فیصلے تک فالو کرتے ہیں۔",
      ],
      tips: [
        "یقینی بنائیں کہ مطلوبہ سرگرمی کمرشل رجسٹر میں ہے۔",
        "درخواست سے پہلے جگہ تکنیکی شرائط کے مطابق تیار کریں۔",
        "مصنوعات کی دستاویزات اور مینوفیکچرر سرٹیفکیٹس رکھیں۔",
        "درخواست بند ہونے سے بچنے کے لیے ملاحظات کا جلد جواب دیں۔",
        "درآمد سے پہلے لیبلنگ کی شرائط دیکھیں۔",
      ],
      local:
        "ہم ریاض، جدہ، دمام، مکہ مکرمہ اور سعودی عرب کے ہر شہر میں اداروں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا ہر فوڈ کاروبار کو SFDA لائسنس چاہیے؟", a: "نہیں، ریسٹورنٹس عام طور پر بلدیہ کے تحت ہیں جبکہ کارخانے، گودام اور درآمد کنندگان کو SFDA لائسنس چاہیے ہو سکتا ہے۔" },
        { q: "کیا پروڈکٹ رجسٹریشن لازمی ہے؟", a: "یہ پروڈکٹ کی قسم پر منحصر ہے؛ ہم درآمد یا فروخت سے پہلے شرائط دیکھتے ہیں۔" },
        { q: "کیا آپ لائسنس کی ضمانت دیتے ہیں؟", a: "نہیں، فیصلہ صرف اتھارٹی کا ہے؛ ہمارا کام درخواست کی تیاری اور فالو اپ ہے۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم آزاد فالو اپ سروسز آفس ہیں؛ لائسنس SFDA جاری کرتی ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "खाद्य एवं औषधि प्राधिकरण (SFDA) लाइसेंस",
      secondaryKeywords: ["खाद्य संस्थान SFDA लाइसेंस", "SFDA उत्पाद पंजीकरण", "खाद्य गोदाम लाइसेंस", "कॉस्मेटिक्स लाइसेंस"],
      metaDescription:
        "तसामी के साथ सऊदी खाद्य एवं औषधि प्राधिकरण में संस्थान का लाइसेंस और उत्पाद पंजीकरण कराएं: हम सही लाइसेंस तय करते हैं और प्राधिकरण की ई-प्रणालियों पर अनुरोध चरण-दर-चरण फॉलो करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "सऊदी खाद्य एवं औषधि प्राधिकरण खाद्य, दवाओं, चिकित्सा उपकरणों और कॉस्मेटिक्स से जुड़े संस्थानों और उत्पादों को नियंत्रित करता है, जैसे कारखाने, गोदाम और आयात व वितरण व्यवसाय, साथ ही कुछ उत्पादों का बिक्री से पहले पंजीकरण। हर गतिविधि का अपना लाइसेंस और तकनीकी शर्तें हैं, और गलत लाइसेंस या स्थान की शर्तों की कमी अनुरोध में काफी देरी कर सकती है। तसामी में हम आपकी गतिविधि और उत्पाद देखते हैं, आवश्यक लाइसेंस या पंजीकरण तय करते हैं, शर्तों की सूची तैयार करते हैं और प्राधिकरण की ई-प्रणालियों पर निर्णय तक फॉलो करते हैं।",
      who: [
        "खाद्य आयातक और वितरक।",
        "खाद्य, दवा या कॉस्मेटिक्स गोदामों के मालिक।",
        "खाद्य क्षेत्र के छोटे और मध्यम कारखाने।",
        "जो सऊदी बाज़ार में बिक्री से पहले उत्पाद पंजीकृत कराना चाहते हैं।",
      ],
      steps: [
        "हम आपकी गतिविधि, उत्पाद और संस्थान का प्रकार देखते हैं।",
        "हम आवश्यक लाइसेंस या उत्पाद पंजीकरण तय करते हैं।",
        "हम आपके साथ तकनीकी शर्तें और दस्तावेज़ तैयार करते हैं।",
        "हम सरकारी फीस समझाते हैं ताकि आप स्वयं आधिकारिक माध्यम से भुगतान करें।",
        "हम ई-प्रणालियों पर अनुरोध और टिप्पणियों का जवाब निर्णय तक फॉलो करते हैं।",
      ],
      tips: [
        "सुनिश्चित करें कि आवश्यक गतिविधि कमर्शियल रजिस्टर में है।",
        "आवेदन से पहले स्थान तकनीकी शर्तों के अनुसार तैयार करें।",
        "उत्पादों के दस्तावेज़ और निर्माता प्रमाणपत्र रखें।",
        "अनुरोध बंद होने से बचने के लिए टिप्पणियों का जल्दी जवाब दें।",
        "आयात से पहले लेबलिंग की शर्तें देखें।",
      ],
      local:
        "हम रियाद, जेद्दा, दम्माम, मक्का और सऊदी अरब के हर शहर में संस्थानों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या हर खाद्य व्यवसाय को SFDA लाइसेंस चाहिए?", a: "नहीं, रेस्टोरेंट आमतौर पर नगरपालिका के अधीन हैं जबकि कारखानों, गोदामों और आयातकों को SFDA लाइसेंस चाहिए हो सकता है।" },
        { q: "क्या उत्पाद पंजीकरण अनिवार्य है?", a: "यह उत्पाद के प्रकार पर निर्भर है; हम आयात या बिक्री से पहले शर्तें देखते हैं।" },
        { q: "क्या आप लाइसेंस की गारंटी देते हैं?", a: "नहीं, निर्णय केवल प्राधिकरण का है; हमारा काम अनुरोध की तैयारी और फॉलो-अप है।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम स्वतंत्र फॉलो-अप सेवा कार्यालय हैं; लाइसेंस SFDA जारी करता है।" },
      ],
    },
  },

  trafficAppointment: {
    ar: {
      primaryKeyword: "حجز موعد المرور",
      secondaryKeywords: ["حجز موعد مرور عبر أبشر", "موعد تجديد رخصة القيادة", "موعد نقل ملكية مركبة", "موعد مرور للمقيمين"],
      metaDescription:
        "حجز موعد المرور عبر أبشر مع تسامي: نحدد الخدمة الصحيحة والمستندات المطلوبة ونساعدك في الحجز وتجهيز الأوراق قبل الحضور. لسنا جهة حكومية.",
      intro:
        "كثير من خدمات المرور أصبحت إلكترونية عبر أبشر، لكن بعض الحالات ما زالت تتطلب حضوراً شخصياً بموعد مسبق، مثل بعض حالات رخص القيادة أو المركبات أو الحالات التي تحتاج مراجعة خاصة. اختيار نوع الموعد الخاطئ أو الحضور دون المستندات المطلوبة يعني ضياع الموعد والبدء من جديد. في تسامي نوضح لك أولاً هل خدمتك يمكن إنجازها إلكترونياً دون حضور، وإذا كان الحضور مطلوباً نساعدك في حجز الموعد المناسب عبر أبشر، ونجهز معك قائمة المستندات، ونتأكد من سداد المخالفات والرسوم المطلوبة قبل يوم الموعد.",
      who: [
        "من يحتاج موعداً لخدمة رخصة قيادة لا تتم إلكترونياً.",
        "من لديه معاملة مركبة تتطلب الحضور.",
        "المقيمون الذين لا يعرفون طريقة الحجز في أبشر.",
        "من حضر سابقاً ورُفضت معاملته لنقص الأوراق.",
      ],
      steps: [
        "نتأكد هل يمكن إنجاز خدمتك إلكترونياً دون حضور.",
        "نحدد نوع الموعد المناسب والفرع الأقرب لك.",
        "نساعدك في حجز الموعد عبر أبشر.",
        "نراجع المخالفات والرسوم لتسددها بنفسك عبر القنوات الرسمية قبل الموعد.",
        "نرسل لك قائمة المستندات التي تحملها معك يوم الحضور.",
      ],
      tips: [
        "تحقق أولاً من إمكانية إنجاز الخدمة إلكترونياً.",
        "سدد المخالفات المرورية قبل الموعد لأنها قد توقف المعاملة.",
        "احمل أصل الهوية أو الإقامة والمستندات المطلوبة.",
        "احضر قبل الموعد بوقت كافٍ.",
        "إذا لم تستطع الحضور، ألغِ الموعد ليتاح لغيرك.",
      ],
      local:
        "نخدم الأفراد في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل كل خدمات المرور تحتاج موعداً؟", a: "لا، كثير من الخدمات تتم إلكترونياً عبر أبشر، ونوضح لك إن كانت خدمتك تحتاج حضوراً." },
        { q: "هل تضمنون موعداً قريباً؟", a: "لا، المواعيد المتاحة تحددها الجهة الرسمية، ودورنا مساعدتك في الحجز الصحيح وتجهيز أوراقك." },
        { q: "هل يمكن الحجز لشخص آخر؟", a: "الحجز يتم غالباً من حساب صاحب المعاملة في أبشر، ونوضح لك الطريقة حسب الحالة." },
        { q: "من يدفع الرسوم والمخالفات؟", a: "تُدفع الرسوم والمخالفات عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات تعقيب مستقل، والموعد يُحجز عبر منصة أبشر الرسمية." },
      ],
    },
    en: {
      primaryKeyword: "traffic department appointment booking",
      secondaryKeywords: ["book traffic appointment via Absher", "driving licence renewal appointment", "vehicle ownership transfer appointment", "traffic appointment for residents"],
      metaDescription:
        "Book a traffic department appointment via Absher with Tasami: we identify the right service and documents, help with booking and prepare your papers before you go. Not a government entity.",
      intro:
        "Many traffic services are now online through Absher, but some cases still require an in-person visit with a prior appointment, such as certain driving licence or vehicle cases or cases needing special review. Choosing the wrong appointment type or arriving without required documents means losing the slot and starting again. At Tasami we first check whether your service can be completed online without visiting; if a visit is required, we help you book the right appointment on Absher, prepare the document list and make sure violations and fees are settled before the day.",
      who: [
        "Anyone needing an appointment for a driving licence service not available online.",
        "Anyone with a vehicle transaction requiring a visit.",
        "Residents unfamiliar with booking on Absher.",
        "People previously turned away for missing papers.",
      ],
      steps: [
        "We check whether your service can be done online without a visit.",
        "We identify the right appointment type and nearest branch.",
        "We help you book the appointment on Absher.",
        "We review violations and fees so you pay them through official channels beforehand.",
        "We send the list of documents to bring on the day.",
      ],
      tips: [
        "First check whether the service can be done online.",
        "Settle traffic violations before the appointment; they may block the transaction.",
        "Bring your original ID or iqama and required documents.",
        "Arrive early.",
        "If you can't attend, cancel so others can use the slot.",
      ],
      local:
        "We serve individuals in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do all traffic services need an appointment?", a: "No, many are done online via Absher; we tell you whether yours needs a visit." },
        { q: "Do you guarantee an early appointment?", a: "No, available slots are set by the official authority; we help you book correctly and prepare papers." },
        { q: "Can I book for someone else?", a: "Booking is usually from the transaction owner's Absher account; we explain depending on the case." },
        { q: "Is Tasami a government entity?", a: "No, we are an independent follow-up services office; appointments are booked on the official Absher platform." },
      ],
    },
    ur: {
      primaryKeyword: "ٹریفک اپوائنٹمنٹ بکنگ",
      secondaryKeywords: ["ابشر سے ٹریفک اپوائنٹمنٹ", "ڈرائیونگ لائسنس تجدید اپوائنٹمنٹ", "گاڑی ملکیت منتقلی اپوائنٹمنٹ", "مقیمین کے لیے ٹریفک اپوائنٹمنٹ"],
      metaDescription:
        "تسامی کے ساتھ ابشر سے ٹریفک اپوائنٹمنٹ بک کریں: ہم درست سروس اور دستاویزات طے کرتے ہیں، بکنگ میں مدد کرتے ہیں اور جانے سے پہلے کاغذات تیار کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "ٹریفک کی بہت سی خدمات اب ابشر پر آن لائن ہیں، لیکن بعض صورتوں میں پیشگی اپوائنٹمنٹ کے ساتھ ذاتی حاضری اب بھی ضروری ہے، جیسے ڈرائیونگ لائسنس یا گاڑی کے بعض کیسز یا خاص جانچ والے معاملات۔ غلط اپوائنٹمنٹ منتخب کرنا یا دستاویزات کے بغیر جانا اپوائنٹمنٹ ضائع کرنا ہے۔ تسامی میں ہم پہلے دیکھتے ہیں کہ آپ کی سروس آن لائن ہو سکتی ہے یا نہیں؛ اگر حاضری ضروری ہو تو ابشر پر درست اپوائنٹمنٹ بک کرنے، دستاویزات کی فہرست تیار کرنے اور اس دن سے پہلے خلاف ورزیاں و فیس ادا ہونے کو یقینی بنانے میں مدد کرتے ہیں۔",
      who: [
        "جنہیں ایسی ڈرائیونگ لائسنس سروس کے لیے اپوائنٹمنٹ چاہیے جو آن لائن نہیں۔",
        "جن کی گاڑی کے معاملے میں حاضری ضروری ہے۔",
        "وہ مقیم جو ابشر پر بکنگ نہیں جانتے۔",
        "جنہیں پہلے کاغذات کی کمی پر واپس کیا گیا۔",
      ],
      steps: [
        "ہم دیکھتے ہیں کہ آپ کی سروس بغیر حاضری آن لائن ہو سکتی ہے یا نہیں۔",
        "ہم درست اپوائنٹمنٹ کی قسم اور قریبی برانچ طے کرتے ہیں۔",
        "ہم ابشر پر اپوائنٹمنٹ بک کرنے میں مدد کرتے ہیں۔",
        "ہم خلاف ورزیاں اور فیس دیکھتے ہیں تاکہ آپ پہلے سرکاری ذرائع سے ادا کریں۔",
        "ہم اس دن ساتھ لانے والی دستاویزات کی فہرست بھیجتے ہیں۔",
      ],
      tips: [
        "پہلے دیکھیں کہ سروس آن لائن ہو سکتی ہے یا نہیں۔",
        "اپوائنٹمنٹ سے پہلے ٹریفک خلاف ورزیاں ادا کریں۔",
        "اصل شناختی کارڈ یا اقامہ اور مطلوبہ دستاویزات ساتھ لائیں۔",
        "جلدی پہنچیں۔",
        "نہ جا سکیں تو اپوائنٹمنٹ منسوخ کریں تاکہ دوسرے استعمال کر سکیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں افراد کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا ہر ٹریفک سروس کو اپوائنٹمنٹ چاہیے؟", a: "نہیں، بہت سی ابشر پر آن لائن ہوتی ہیں؛ ہم بتاتے ہیں کہ آپ کو حاضری چاہیے یا نہیں۔" },
        { q: "کیا آپ جلد اپوائنٹمنٹ کی ضمانت دیتے ہیں؟", a: "نہیں، اوقات سرکاری ادارہ طے کرتا ہے؛ ہم درست بکنگ اور کاغذات میں مدد کرتے ہیں۔" },
        { q: "کیا کسی اور کے لیے بک کر سکتے ہیں؟", a: "بکنگ عام طور پر معاملے کے مالک کے ابشر اکاؤنٹ سے ہوتی ہے؛ ہم کیس کے مطابق بتاتے ہیں۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم آزاد فالو اپ سروسز آفس ہیں؛ اپوائنٹمنٹ سرکاری ابشر پلیٹ فارم پر بک ہوتی ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "ट्रैफिक विभाग अपॉइंटमेंट बुकिंग",
      secondaryKeywords: ["अबशर से ट्रैफिक अपॉइंटमेंट", "ड्राइविंग लाइसेंस रिन्यूअल अपॉइंटमेंट", "वाहन स्वामित्व ट्रांसफर अपॉइंटमेंट", "निवासियों के लिए ट्रैफिक अपॉइंटमेंट"],
      metaDescription:
        "तसामी के साथ अबशर से ट्रैफिक अपॉइंटमेंट बुक करें: हम सही सेवा और दस्तावेज़ तय करते हैं, बुकिंग में मदद करते हैं और जाने से पहले कागज़ तैयार करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "ट्रैफिक की कई सेवाएं अब अबशर पर ऑनलाइन हैं, लेकिन कुछ मामलों में पूर्व अपॉइंटमेंट के साथ व्यक्तिगत उपस्थिति अभी भी ज़रूरी है, जैसे ड्राइविंग लाइसेंस या वाहन के कुछ मामले या विशेष समीक्षा वाले मामले। गलत अपॉइंटमेंट चुनना या दस्तावेज़ों के बिना जाना अपॉइंटमेंट गंवाना है। तसामी में हम पहले देखते हैं कि आपकी सेवा ऑनलाइन हो सकती है या नहीं; अगर उपस्थिति ज़रूरी हो तो अबशर पर सही अपॉइंटमेंट बुक करने, दस्तावेज़ों की सूची तैयार करने और उस दिन से पहले उल्लंघन व फीस चुकाने में मदद करते हैं।",
      who: [
        "जिन्हें ऐसी ड्राइविंग लाइसेंस सेवा के लिए अपॉइंटमेंट चाहिए जो ऑनलाइन नहीं।",
        "जिनके वाहन के मामले में उपस्थिति ज़रूरी है।",
        "वे निवासी जो अबशर पर बुकिंग नहीं जानते।",
        "जिन्हें पहले कागज़ों की कमी से लौटाया गया।",
      ],
      steps: [
        "हम देखते हैं कि आपकी सेवा बिना उपस्थिति ऑनलाइन हो सकती है या नहीं।",
        "हम सही अपॉइंटमेंट प्रकार और नज़दीकी शाखा तय करते हैं।",
        "हम अबशर पर अपॉइंटमेंट बुक करने में मदद करते हैं।",
        "हम उल्लंघन और फीस देखते हैं ताकि आप पहले आधिकारिक माध्यम से भुगतान करें।",
        "हम उस दिन साथ लाने वाले दस्तावेज़ों की सूची भेजते हैं।",
      ],
      tips: [
        "पहले देखें कि सेवा ऑनलाइन हो सकती है या नहीं।",
        "अपॉइंटमेंट से पहले ट्रैफिक उल्लंघन चुकाएं।",
        "मूल पहचान पत्र या इकामा और आवश्यक दस्तावेज़ साथ लाएं।",
        "जल्दी पहुंचें।",
        "न जा सकें तो अपॉइंटमेंट रद्द करें ताकि दूसरे इस्तेमाल कर सकें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में व्यक्तियों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या हर ट्रैफिक सेवा को अपॉइंटमेंट चाहिए?", a: "नहीं, कई अबशर पर ऑनलाइन होती हैं; हम बताते हैं कि आपको उपस्थिति चाहिए या नहीं।" },
        { q: "क्या आप जल्दी अपॉइंटमेंट की गारंटी देते हैं?", a: "नहीं, समय आधिकारिक संस्था तय करती है; हम सही बुकिंग और कागज़ों में मदद करते हैं।" },
        { q: "क्या किसी और के लिए बुक कर सकते हैं?", a: "बुकिंग आमतौर पर मामले के मालिक के अबशर खाते से होती है; हम मामले के अनुसार बताते हैं।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम स्वतंत्र फॉलो-अप सेवा कार्यालय हैं; अपॉइंटमेंट आधिकारिक अबशर प्लेटफॉर्म पर बुक होती है।" },
      ],
    },
  },

  najizAppointment: {
    ar: {
      primaryKeyword: "حجز موعد ناجز",
      secondaryKeywords: ["حجز موعد كتابة عدل", "خدمات ناجز الإلكترونية", "موعد محكمة عبر ناجز", "تسهيل خدمات ناجز"],
      metaDescription:
        "حجز مواعيد ناجز واستخدام خدماته الإلكترونية مع تسامي: نساعدك في اختيار الخدمة الصحيحة وتعبئة الطلب وتجهيز المستندات خطوة بخطوة. لسنا جهة حكومية ولا مكتب محاماة.",
      intro:
        "منصة ناجز التابعة لوزارة العدل تقدم عدداً كبيراً من الخدمات العدلية إلكترونياً، مثل حجز مواعيد كتابة العدل، والوكالات، وبعض طلبات المحاكم والتنفيذ، والاستعلام عن المعاملات. كثير من المستخدمين يجدون صعوبة في معرفة الخدمة الصحيحة بين الخدمات المتعددة، أو تعبئة البيانات بدقة، أو تجهيز المستندات المطلوبة قبل الموعد. في تسامي نساعدك في الجانب الإجرائي فقط: تحديد الخدمة المناسبة في ناجز، وحجز الموعد، وتعبئة الطلب، وتجهيز قائمة المستندات. لا نقدم استشارات قانونية أو تمثيلاً أمام المحاكم، وننصحك بمحامٍ مرخص عند الحاجة لذلك.",
      who: [
        "من يحتاج موعداً لدى كتابة العدل لإفراغ أو إقرار.",
        "من يريد استخدام خدمات ناجز الإلكترونية ولا يعرف طريقها.",
        "كبار السن ومن يجدون صعوبة في التعامل مع المنصات.",
        "المقيمون الذين يحتاجون خدمة عدلية لأول مرة.",
      ],
      steps: [
        "نسمع منك نوع المعاملة ونحدد الخدمة المناسبة في ناجز.",
        "نساعدك في الدخول إلى حسابك وتعبئة الطلب أو حجز الموعد.",
        "نجهز معك قائمة المستندات المطلوبة.",
        "نوضح لك أي رسوم حكومية لتسددها بنفسك عبر القنوات الرسمية.",
        "نرسل لك ملخصاً بالموعد أو رقم الطلب وما تحتاجه بعدها.",
      ],
      tips: [
        "تأكد من تحديث بياناتك في النفاذ الوطني الموحد.",
        "اختر الخدمة بدقة لأن لكل خدمة متطلبات مختلفة.",
        "جهّز صوراً واضحة من المستندات قبل البدء.",
        "احتفظ برقم الطلب أو الموعد لمتابعته.",
        "استشر محامياً مرخصاً في المسائل القانونية.",
      ],
      local:
        "نخدم الأفراد في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل تقدمون استشارات قانونية؟", a: "لا، دورنا إجرائي فقط في استخدام منصة ناجز وحجز المواعيد، وللمسائل القانونية ننصحك بمحامٍ مرخص." },
        { q: "هل يمكن إنجاز كل شيء إلكترونياً؟", a: "كثير من الخدمات إلكترونية بالكامل، وبعضها يتطلب حضوراً بموعد، ونوضح لك ذلك حسب الخدمة." },
        { q: "هل أحتاج حساب النفاذ الوطني؟", a: "نعم، الدخول إلى ناجز يتم عبر النفاذ الوطني الموحد، ونساعدك إن واجهت مشكلة في الدخول." },
        { q: "من يدفع الرسوم الحكومية؟", a: "تُدفع أي رسوم حكومية عبر القنوات الرسمية باسمك، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات مستقل، ولسنا جهة حكومية أو مكتب محاماة." },
      ],
    },
    en: {
      primaryKeyword: "Najiz appointment booking",
      secondaryKeywords: ["notary appointment booking Saudi", "Najiz e-services", "court appointment via Najiz", "Najiz assistance"],
      metaDescription:
        "Book Najiz appointments and use its e-services with Tasami: we help you choose the right service, fill in the request and prepare documents step by step. Not a government entity or law firm.",
      intro:
        "Najiz, the Ministry of Justice platform, offers many judicial services online, such as notary appointments, powers of attorney, some court and enforcement requests and transaction enquiries. Many users struggle to find the right service among many, fill in data accurately or prepare documents before the appointment. At Tasami we help with the procedural side only: identifying the right Najiz service, booking the appointment, filling in the request and preparing the document list. We do not give legal advice or court representation and recommend a licensed lawyer when needed.",
      who: [
        "Anyone needing a notary appointment for a transfer or acknowledgement.",
        "Anyone wanting to use Najiz e-services but unsure how.",
        "Elderly people and those who find platforms difficult.",
        "Residents needing a judicial service for the first time.",
      ],
      steps: [
        "We hear the type of transaction and identify the right Najiz service.",
        "We help you log in and fill in the request or book the appointment.",
        "We prepare the required documents list with you.",
        "We explain any government fees so you pay them through official channels.",
        "We send a summary of the appointment or request number and next steps.",
      ],
      tips: [
        "Make sure your Nafath (national single sign-on) details are up to date.",
        "Choose the service precisely; each has different requirements.",
        "Prepare clear copies of documents before starting.",
        "Keep the request or appointment number for follow-up.",
        "Consult a licensed lawyer on legal matters.",
      ],
      local:
        "We serve individuals in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do you give legal advice?", a: "No, our role is procedural only for using Najiz and booking appointments; for legal matters we recommend a licensed lawyer." },
        { q: "Can everything be done online?", a: "Many services are fully online, while some need an in-person appointment; we explain per service." },
        { q: "Do I need a Nafath account?", a: "Yes, Najiz login is through Nafath; we help if you face login issues." },
        { q: "Is Tasami a government entity?", a: "No, we are an independent services office, not a government entity or law firm." },
      ],
    },
    ur: {
      primaryKeyword: "ناجز اپوائنٹمنٹ بکنگ",
      secondaryKeywords: ["نوٹری اپوائنٹمنٹ سعودی", "ناجز ای سروسز", "ناجز سے عدالت اپوائنٹمنٹ", "ناجز میں مدد"],
      metaDescription:
        "تسامی کے ساتھ ناجز اپوائنٹمنٹ بک کریں اور اس کی ای سروسز استعمال کریں: ہم درست سروس منتخب کرنے، درخواست بھرنے اور دستاویزات تیار کرنے میں مدد کرتے ہیں۔ ہم سرکاری ادارہ یا لاء فرم نہیں ہیں۔",
      intro:
        "وزارت انصاف کا ناجز پلیٹ فارم بہت سی عدالتی خدمات آن لائن دیتا ہے، جیسے نوٹری اپوائنٹمنٹ، وکالت نامے، بعض عدالتی و تنفیذی درخواستیں اور معاملات کی معلومات۔ بہت سے صارفین کو درست سروس ڈھونڈنے، ڈیٹا صحیح بھرنے یا اپوائنٹمنٹ سے پہلے دستاویزات تیار کرنے میں مشکل ہوتی ہے۔ تسامی میں ہم صرف طریقہ کار میں مدد کرتے ہیں: ناجز میں درست سروس پہچاننا، اپوائنٹمنٹ بک کرنا، درخواست بھرنا اور دستاویزات کی فہرست تیار کرنا۔ ہم قانونی مشورہ یا عدالت میں نمائندگی نہیں دیتے اور ضرورت پر لائسنس یافتہ وکیل کا مشورہ دیتے ہیں۔",
      who: [
        "جنہیں نوٹری کے پاس منتقلی یا اقرار کے لیے اپوائنٹمنٹ چاہیے۔",
        "جو ناجز ای سروسز استعمال کرنا چاہتے ہیں لیکن طریقہ نہیں جانتے۔",
        "بزرگ اور وہ لوگ جنہیں پلیٹ فارمز مشکل لگتے ہیں۔",
        "وہ مقیم جنہیں پہلی بار عدالتی سروس چاہیے۔",
      ],
      steps: [
        "ہم معاملے کی قسم سن کر ناجز میں درست سروس طے کرتے ہیں۔",
        "ہم لاگ ان کر کے درخواست بھرنے یا اپوائنٹمنٹ بک کرنے میں مدد کرتے ہیں۔",
        "ہم آپ کے ساتھ دستاویزات کی فہرست تیار کرتے ہیں۔",
        "ہم سرکاری فیس بتاتے ہیں تاکہ آپ سرکاری ذرائع سے ادا کریں۔",
        "ہم اپوائنٹمنٹ یا درخواست نمبر اور اگلے مراحل کا خلاصہ بھیجتے ہیں۔",
      ],
      tips: [
        "نفاذ (قومی سنگل سائن آن) میں اپنی معلومات اپڈیٹ رکھیں۔",
        "سروس درست منتخب کریں؛ ہر ایک کی شرائط مختلف ہیں۔",
        "شروع کرنے سے پہلے دستاویزات کی واضح کاپیاں تیار رکھیں۔",
        "درخواست یا اپوائنٹمنٹ نمبر محفوظ رکھیں۔",
        "قانونی معاملات میں لائسنس یافتہ وکیل سے مشورہ کریں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں افراد کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا آپ قانونی مشورہ دیتے ہیں؟", a: "نہیں، ہمارا کام صرف ناجز کے استعمال اور اپوائنٹمنٹ میں طریقہ کار کی مدد ہے؛ قانونی معاملات کے لیے وکیل سے رجوع کریں۔" },
        { q: "کیا سب کچھ آن لائن ہو سکتا ہے؟", a: "بہت سی خدمات مکمل آن لائن ہیں، بعض میں حاضری چاہیے؛ ہم سروس کے مطابق بتاتے ہیں۔" },
        { q: "کیا نفاذ اکاؤنٹ چاہیے؟", a: "جی ہاں، ناجز میں لاگ ان نفاذ سے ہوتا ہے؛ مسئلہ ہو تو ہم مدد کرتے ہیں۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم آزاد سروسز آفس ہیں، سرکاری ادارہ یا لاء فرم نہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "नाजिज़ अपॉइंटमेंट बुकिंग",
      secondaryKeywords: ["नोटरी अपॉइंटमेंट सऊदी", "नाजिज़ ई-सेवाएं", "नाजिज़ से कोर्ट अपॉइंटमेंट", "नाजिज़ में सहायता"],
      metaDescription:
        "तसामी के साथ नाजिज़ अपॉइंटमेंट बुक करें और इसकी ई-सेवाएं इस्तेमाल करें: हम सही सेवा चुनने, अनुरोध भरने और दस्तावेज़ तैयार करने में मदद करते हैं। हम सरकारी संस्था या लॉ फर्म नहीं हैं।",
      intro:
        "न्याय मंत्रालय का नाजिज़ प्लेटफॉर्म कई न्यायिक सेवाएं ऑनलाइन देता है, जैसे नोटरी अपॉइंटमेंट, पावर ऑफ अटॉर्नी, कुछ अदालती व प्रवर्तन अनुरोध और लेन-देन की जानकारी। कई उपयोगकर्ताओं को सही सेवा ढूंढने, डेटा सही भरने या अपॉइंटमेंट से पहले दस्तावेज़ तैयार करने में कठिनाई होती है। तसामी में हम केवल प्रक्रियात्मक मदद करते हैं: नाजिज़ में सही सेवा पहचानना, अपॉइंटमेंट बुक करना, अनुरोध भरना और दस्तावेज़ों की सूची तैयार करना। हम कानूनी सलाह या अदालत में प्रतिनिधित्व नहीं देते और ज़रूरत पर लाइसेंस प्राप्त वकील की सलाह देते हैं।",
      who: [
        "जिन्हें नोटरी के पास ट्रांसफर या स्वीकारोक्ति के लिए अपॉइंटमेंट चाहिए।",
        "जो नाजिज़ ई-सेवाएं इस्तेमाल करना चाहते हैं लेकिन तरीका नहीं जानते।",
        "बुज़ुर्ग और वे लोग जिन्हें प्लेटफॉर्म कठिन लगते हैं।",
        "वे निवासी जिन्हें पहली बार न्यायिक सेवा चाहिए।",
      ],
      steps: [
        "हम लेन-देन का प्रकार सुनकर नाजिज़ में सही सेवा तय करते हैं।",
        "हम लॉग इन करके अनुरोध भरने या अपॉइंटमेंट बुक करने में मदद करते हैं।",
        "हम आपके साथ दस्तावेज़ों की सूची तैयार करते हैं।",
        "हम सरकारी फीस समझाते हैं ताकि आप आधिकारिक माध्यम से भुगतान करें।",
        "हम अपॉइंटमेंट या अनुरोध नंबर और अगले चरणों का सारांश भेजते हैं।",
      ],
      tips: [
        "नफ़ाज़ (राष्ट्रीय सिंगल साइन-ऑन) में अपनी जानकारी अपडेट रखें।",
        "सेवा सटीक चुनें; हर एक की शर्तें अलग हैं।",
        "शुरू करने से पहले दस्तावेज़ों की स्पष्ट कॉपियां तैयार रखें।",
        "अनुरोध या अपॉइंटमेंट नंबर सुरक्षित रखें।",
        "कानूनी मामलों में लाइसेंस प्राप्त वकील से सलाह लें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में व्यक्तियों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या आप कानूनी सलाह देते हैं?", a: "नहीं, हमारा काम केवल नाजिज़ इस्तेमाल और अपॉइंटमेंट में प्रक्रियात्मक मदद है; कानूनी मामलों के लिए वकील से संपर्क करें।" },
        { q: "क्या सब कुछ ऑनलाइन हो सकता है?", a: "कई सेवाएं पूरी तरह ऑनलाइन हैं, कुछ में उपस्थिति चाहिए; हम सेवा के अनुसार बताते हैं।" },
        { q: "क्या नफ़ाज़ खाता चाहिए?", a: "हां, नाजिज़ में लॉग इन नफ़ाज़ से होता है; समस्या हो तो हम मदद करते हैं।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम स्वतंत्र सेवा कार्यालय हैं, सरकारी संस्था या लॉ फर्म नहीं।" },
      ],
    },
  },

  noorRegistration: {
    ar: {
      primaryKeyword: "تسجيل الطلاب في نظام نور",
      secondaryKeywords: ["تسجيل طالب مستجد في نور", "نقل طالب بين المدارس نور", "تسجيل أبناء المقيمين في المدارس", "مشاكل نظام نور"],
      metaDescription:
        "تسجيل الطلاب المستجدين ونقلهم بين المدارس عبر نظام نور مع تسامي: نساعد ولي الأمر في التسجيل وتجهيز المستندات خطوة بخطوة عبر واتساب. لسنا جهة حكومية.",
      intro:
        "نظام نور هو المنصة الإلكترونية التي يستخدمها أولياء الأمور لتسجيل أبنائهم في المدارس الحكومية، سواء للطلاب المستجدين في الصف الأول أو رياض الأطفال، أو لنقل الطالب من مدرسة إلى أخرى، ويشمل ذلك أبناء المواطنين والمقيمين وفق الشروط المعمول بها. كثير من أولياء الأمور يواجهون صعوبة في إنشاء الحساب، أو إضافة الأبناء، أو اختيار المدرسة المناسبة، أو رفع المستندات في الوقت المحدد للتسجيل. في تسامي نساعدك خطوة بخطوة في التسجيل أو النقل، ونجهز معك المستندات المطلوبة، ونتابع حالة الطلب حتى يظهر القبول، علماً أن القبول نفسه يعود لإدارة التعليم والمقاعد المتاحة.",
      who: [
        "أولياء أمور الطلاب المستجدين في الصف الأول أو رياض الأطفال.",
        "من انتقل إلى حي أو مدينة جديدة ويريد نقل أبنائه.",
        "المقيمون الذين يسجلون أبناءهم في المدارس الحكومية لأول مرة.",
        "من واجه مشكلة في الدخول أو رفع المستندات في نور.",
      ],
      steps: [
        "نتأكد من حسابك في نور وبيانات الأبناء.",
        "نوضح لك شروط التسجيل أو النقل والمستندات المطلوبة.",
        "نساعدك في اختيار المدرسة ورفع الطلب في الوقت المحدد.",
        "نتابع حالة الطلب ونوضح لك أي ملاحظات من المدرسة.",
        "نرسل لك ملخصاً بالخطوات التالية بعد القبول.",
      ],
      tips: [
        "تابع مواعيد التسجيل المعلنة من وزارة التعليم ولا تؤجل.",
        "جهّز شهادة الميلاد والتطعيمات وصورة الهوية أو الإقامة مسبقاً.",
        "تأكد أن عنوانك الوطني محدث لأنه يؤثر على اختيار المدرسة.",
        "اختر أكثر من مدرسة إن أتاح النظام ذلك.",
        "احتفظ برقم الطلب لمتابعته.",
      ],
      local:
        "نخدم أولياء الأمور في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل تضمنون القبول في مدرسة معينة؟", a: "لا، القبول يعود لإدارة التعليم والمقاعد المتاحة، ودورنا مساعدتك في التسجيل الصحيح وفي الوقت المحدد." },
        { q: "هل يمكن تسجيل أبناء المقيمين في المدارس الحكومية؟", a: "نعم وفق الشروط والضوابط المعمول بها، ونوضح لك المتطلبات حسب حالتك." },
        { q: "ما المستندات المطلوبة عادة؟", a: "غالباً شهادة الميلاد وسجل التطعيمات وهوية ولي الأمر أو إقامته، وقد تختلف حسب المرحلة." },
        { q: "هل توجد رسوم؟", a: "التسجيل في المدارس الحكومية عبر نور لا يتطلب عادة رسوماً حكومية، ونوضح لك أي استثناءات إن وجدت." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات مستقل، والتسجيل يتم عبر نظام نور الرسمي التابع لوزارة التعليم." },
      ],
    },
    en: {
      primaryKeyword: "Noor system student registration",
      secondaryKeywords: ["register new student on Noor", "transfer student between schools Noor", "register residents' children in public schools", "Noor system problems"],
      metaDescription:
        "Register new students and transfer them between schools through the Noor system with Tasami: we help parents with registration and documents step by step via WhatsApp. Not a government entity.",
      intro:
        "Noor is the online platform parents use to register children in public schools, whether new students in first grade or kindergarten or transfers between schools, covering children of citizens and residents under current conditions. Many parents struggle to create an account, add children, choose a suitable school or upload documents within the registration window. At Tasami we help step by step with registration or transfer, prepare required documents with you and follow the request status until acceptance appears; acceptance itself depends on the education department and available seats.",
      who: [
        "Parents of new first-grade or kindergarten students.",
        "Families who moved to a new district or city and need transfers.",
        "Residents registering children in public schools for the first time.",
        "Anyone facing login or upload problems on Noor.",
      ],
      steps: [
        "We check your Noor account and children's details.",
        "We explain registration or transfer conditions and documents.",
        "We help you choose the school and submit within the deadline.",
        "We follow the request status and explain any school comments.",
        "We send a summary of next steps after acceptance.",
      ],
      tips: [
        "Follow Ministry of Education registration dates and don't delay.",
        "Prepare the birth certificate, vaccination record and ID or iqama copy in advance.",
        "Make sure your national address is updated; it affects school choice.",
        "Choose more than one school if the system allows.",
        "Keep the request number for follow-up.",
      ],
      local:
        "We serve parents in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do you guarantee acceptance at a specific school?", a: "No, acceptance depends on the education department and available seats; we help you register correctly and on time." },
        { q: "Can residents' children register in public schools?", a: "Yes under current rules and conditions; we explain requirements for your case." },
        { q: "Which documents are usually needed?", a: "Usually a birth certificate, vaccination record and the parent's ID or iqama; it may vary by stage." },
        { q: "Is Tasami a government entity?", a: "No, we are an independent services office; registration is through the official Noor system of the Ministry of Education." },
      ],
    },
    ur: {
      primaryKeyword: "نور سسٹم میں طلبہ کی رجسٹریشن",
      secondaryKeywords: ["نور پر نئے طالب علم کی رجسٹریشن", "نور سے اسکول منتقلی", "مقیمین کے بچوں کی سرکاری اسکول رجسٹریشن", "نور سسٹم مسائل"],
      metaDescription:
        "تسامی کے ساتھ نور سسٹم سے نئے طلبہ کی رجسٹریشن اور اسکولوں کے درمیان منتقلی کرائیں: ہم والدین کی رجسٹریشن اور دستاویزات میں واٹس ایپ پر قدم بہ قدم مدد کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "نور وہ آن لائن پلیٹ فارم ہے جسے والدین بچوں کو سرکاری اسکولوں میں رجسٹر کرانے کے لیے استعمال کرتے ہیں، چاہے پہلی جماعت یا کنڈرگارٹن کے نئے طلبہ ہوں یا اسکولوں کے درمیان منتقلی، موجودہ شرائط کے تحت شہریوں اور مقیمین دونوں کے بچوں کے لیے۔ بہت سے والدین کو اکاؤنٹ بنانے، بچوں کو شامل کرنے، مناسب اسکول منتخب کرنے یا رجسٹریشن کی مدت میں دستاویزات اپلوڈ کرنے میں مشکل ہوتی ہے۔ تسامی میں ہم رجسٹریشن یا منتقلی میں قدم بہ قدم مدد کرتے ہیں، دستاویزات تیار کرتے ہیں اور قبولیت تک درخواست فالو کرتے ہیں؛ قبولیت محکمہ تعلیم اور دستیاب نشستوں پر منحصر ہے۔",
      who: [
        "پہلی جماعت یا کنڈرگارٹن کے نئے طلبہ کے والدین۔",
        "نئے محلے یا شہر منتقل ہونے والے خاندان جنہیں منتقلی چاہیے۔",
        "وہ مقیم جو پہلی بار بچوں کو سرکاری اسکول میں رجسٹر کرا رہے ہیں۔",
        "جنہیں نور پر لاگ ان یا اپلوڈ میں مسئلہ ہے۔",
      ],
      steps: [
        "ہم آپ کا نور اکاؤنٹ اور بچوں کی تفصیلات دیکھتے ہیں۔",
        "ہم رجسٹریشن یا منتقلی کی شرائط اور دستاویزات بتاتے ہیں۔",
        "ہم اسکول منتخب کرنے اور مقررہ وقت میں درخواست جمع کرنے میں مدد کرتے ہیں۔",
        "ہم درخواست کی حیثیت اور اسکول کے ملاحظات فالو کرتے ہیں۔",
        "ہم قبولیت کے بعد اگلے مراحل کا خلاصہ بھیجتے ہیں۔",
      ],
      tips: [
        "وزارت تعلیم کی رجسٹریشن تاریخوں پر نظر رکھیں۔",
        "پیدائش سرٹیفکیٹ، ویکسینیشن ریکارڈ اور شناختی کارڈ یا اقامہ کی کاپی پہلے تیار رکھیں۔",
        "قومی پتہ اپڈیٹ رکھیں؛ یہ اسکول کے انتخاب پر اثر ڈالتا ہے۔",
        "سسٹم اجازت دے تو ایک سے زیادہ اسکول منتخب کریں۔",
        "درخواست نمبر محفوظ رکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں والدین کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا آپ کسی خاص اسکول میں قبولیت کی ضمانت دیتے ہیں؟", a: "نہیں، قبولیت محکمہ تعلیم اور نشستوں پر منحصر ہے؛ ہم درست اور بروقت رجسٹریشن میں مدد کرتے ہیں۔" },
        { q: "کیا مقیمین کے بچے سرکاری اسکول میں رجسٹر ہو سکتے ہیں؟", a: "جی ہاں، موجودہ ضوابط کے تحت؛ ہم آپ کے کیس کے مطابق شرائط بتاتے ہیں۔" },
        { q: "عام طور پر کون سی دستاویزات چاہئیں؟", a: "عام طور پر پیدائش سرٹیفکیٹ، ویکسینیشن ریکارڈ اور والد کا شناختی کارڈ یا اقامہ۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم آزاد سروسز آفس ہیں؛ رجسٹریشن وزارت تعلیم کے سرکاری نور سسٹم سے ہوتی ہے۔" },
      ],
    },
    hi: {
      primaryKeyword: "नूर सिस्टम में छात्र पंजीकरण",
      secondaryKeywords: ["नूर पर नए छात्र का पंजीकरण", "नूर से स्कूल ट्रांसफर", "निवासियों के बच्चों का सरकारी स्कूल पंजीकरण", "नूर सिस्टम समस्याएं"],
      metaDescription:
        "तसामी के साथ नूर सिस्टम से नए छात्रों का पंजीकरण और स्कूलों के बीच ट्रांसफर कराएं: हम अभिभावकों को पंजीकरण और दस्तावेज़ों में व्हाट्सऐप पर चरण-दर-चरण मदद करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "नूर वह ऑनलाइन प्लेटफॉर्म है जिसे अभिभावक बच्चों को सरकारी स्कूलों में पंजीकृत कराने के लिए इस्तेमाल करते हैं, चाहे पहली कक्षा या किंडरगार्टन के नए छात्र हों या स्कूलों के बीच ट्रांसफर, मौजूदा शर्तों के तहत नागरिकों और निवासियों दोनों के बच्चों के लिए। कई अभिभावकों को खाता बनाने, बच्चों को जोड़ने, उपयुक्त स्कूल चुनने या पंजीकरण अवधि में दस्तावेज़ अपलोड करने में कठिनाई होती है। तसामी में हम पंजीकरण या ट्रांसफर में चरण-दर-चरण मदद करते हैं, दस्तावेज़ तैयार करते हैं और स्वीकृति तक अनुरोध फॉलो करते हैं; स्वीकृति शिक्षा विभाग और उपलब्ध सीटों पर निर्भर है।",
      who: [
        "पहली कक्षा या किंडरगार्टन के नए छात्रों के अभिभावक।",
        "नए मोहल्ले या शहर में जाने वाले परिवार जिन्हें ट्रांसफर चाहिए।",
        "वे निवासी जो पहली बार बच्चों को सरकारी स्कूल में पंजीकृत करा रहे हैं।",
        "जिन्हें नूर पर लॉग इन या अपलोड में समस्या है।",
      ],
      steps: [
        "हम आपका नूर खाता और बच्चों का विवरण देखते हैं।",
        "हम पंजीकरण या ट्रांसफर की शर्तें और दस्तावेज़ बताते हैं।",
        "हम स्कूल चुनने और तय समय में अनुरोध जमा करने में मदद करते हैं।",
        "हम अनुरोध की स्थिति और स्कूल की टिप्पणियां फॉलो करते हैं।",
        "हम स्वीकृति के बाद अगले चरणों का सारांश भेजते हैं।",
      ],
      tips: [
        "शिक्षा मंत्रालय की पंजीकरण तारीखों पर नज़र रखें।",
        "जन्म प्रमाणपत्र, टीकाकरण रिकॉर्ड और पहचान पत्र या इकामा की कॉपी पहले तैयार रखें।",
        "राष्ट्रीय पता अपडेट रखें; यह स्कूल चयन को प्रभावित करता है।",
        "सिस्टम अनुमति दे तो एक से अधिक स्कूल चुनें।",
        "अनुरोध नंबर सुरक्षित रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में अभिभावकों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या आप किसी खास स्कूल में स्वीकृति की गारंटी देते हैं?", a: "नहीं, स्वीकृति शिक्षा विभाग और सीटों पर निर्भर है; हम सही और समय पर पंजीकरण में मदद करते हैं।" },
        { q: "क्या निवासियों के बच्चे सरकारी स्कूल में पंजीकृत हो सकते हैं?", a: "हां, मौजूदा नियमों के तहत; हम आपके मामले के अनुसार शर्तें बताते हैं।" },
        { q: "आमतौर पर कौन से दस्तावेज़ चाहिए?", a: "आमतौर पर जन्म प्रमाणपत्र, टीकाकरण रिकॉर्ड और अभिभावक का पहचान पत्र या इकामा।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम स्वतंत्र सेवा कार्यालय हैं; पंजीकरण शिक्षा मंत्रालय के आधिकारिक नूर सिस्टम से होता है।" },
      ],
    },
  },

  citizenAccount: {
    ar: {
      primaryKeyword: "التسجيل في حساب المواطن",
      secondaryKeywords: ["تحديث بيانات حساب المواطن", "إضافة تابع في حساب المواطن", "اعتراض حساب المواطن", "مشاكل حساب المواطن"],
      metaDescription:
        "التسجيل في حساب المواطن وتحديث البيانات وإضافة التابعين وتقديم الاعتراض مع تسامي: نساعدك خطوة بخطوة عبر البوابة الرسمية. لسنا جهة حكومية.",
      intro:
        "برنامج حساب المواطن يقدم دعماً للأسر المستحقة من المواطنين وفق معايير محددة، ويعتمد بشكل كبير على دقة البيانات المسجلة مثل الدخل وعدد التابعين وعنوان السكن. أي خطأ أو نقص في البيانات قد يؤدي إلى عدم الأهلية أو تغير مبلغ الدعم، وكثيرون لا يعرفون كيف يحدثون بياناتهم أو يضيفون مولوداً جديداً أو يقدمون اعتراضاً عند وجود ملاحظة. في تسامي نساعدك في التسجيل أو تحديث البيانات عبر البوابة الرسمية، ونوضح لك المستندات المطلوبة، ونساعدك في صياغة الاعتراض وتقديمه إذا احتجت، علماً أن قرار الأهلية ومبلغ الدعم يعود للبرنامج وحده.",
      who: [
        "المواطنون الذين يريدون التسجيل في البرنامج لأول مرة.",
        "الأسر التي تغيرت بياناتها مثل الدخل أو عدد التابعين.",
        "من رُزق بمولود ويريد إضافته كتابع.",
        "من ظهرت له نتيجة عدم أهلية ويريد تقديم اعتراض.",
      ],
      steps: [
        "نراجع معك بياناتك الحالية في البوابة وحالة الأهلية.",
        "نوضح لك المستندات المطلوبة للتسجيل أو التحديث.",
        "نساعدك في إدخال البيانات أو تحديثها بدقة.",
        "نساعدك في صياغة الاعتراض وتقديمه عند الحاجة.",
        "نوضح لك كيفية متابعة النتيجة والدورات القادمة.",
      ],
      tips: [
        "حدّث بياناتك فور حدوث أي تغيير في الدخل أو التابعين.",
        "تأكد من صحة عنوانك الوطني ورقم الآيبان المسجل.",
        "أدخل الدخل بدقة وبشفافية لتجنب المطالبات لاحقاً.",
        "قدّم الاعتراض خلال المدة المحددة إذا كانت لديك ملاحظة.",
        "احتفظ بصور المستندات التي رفعتها.",
      ],
      local:
        "نخدم المواطنين في مكة المكرمة وجدة والرياض والدمام والمدينة المنورة وكل مدن المملكة، والمتابعة كاملة عبر واتساب.",
      faqs: [
        { q: "هل تضمنون الأهلية أو زيادة الدعم؟", a: "لا، قرار الأهلية ومبلغ الدعم يعود للبرنامج وفق معاييره، ودورنا مساعدتك في إدخال بيانات صحيحة ومتابعتها." },
        { q: "كيف أضيف مولوداً جديداً؟", a: "بعد تسجيل المولود في الأحوال المدنية، يمكن تحديث التابعين في البوابة، ونساعدك في الخطوات." },
        { q: "ماذا أفعل إذا ظهرت نتيجة عدم أهلية؟", a: "نراجع معك سبب النتيجة، وإذا كان هناك خطأ في البيانات نساعدك في تصحيحها أو تقديم اعتراض." },
        { q: "هل توجد رسوم حكومية؟", a: "التسجيل في حساب المواطن لا يتطلب رسوماً حكومية، ونحن نوضح لك الخطوات فقط." },
        { q: "هل تسامي جهة حكومية؟", a: "لا، نحن مكتب خدمات مستقل، والتسجيل والاعتراض يتمان عبر البوابة الرسمية لحساب المواطن." },
      ],
    },
    en: {
      primaryKeyword: "Citizen Account registration",
      secondaryKeywords: ["update Citizen Account data", "add dependant to Citizen Account", "Citizen Account objection", "Citizen Account problems"],
      metaDescription:
        "Register for the Citizen Account, update data, add dependants and file objections with Tasami: we help step by step through the official portal. Not a government entity.",
      intro:
        "The Citizen Account programme provides support to eligible citizen households according to defined criteria, and it relies heavily on accurate registered data such as income, number of dependants and home address. Any error or missing data can lead to ineligibility or a change in the support amount, and many people don't know how to update data, add a newborn or file an objection. At Tasami we help you register or update data through the official portal, explain the required documents and help draft and submit an objection if needed; eligibility and amounts are decided solely by the programme.",
      who: [
        "Citizens registering for the programme for the first time.",
        "Households whose data changed, such as income or dependants.",
        "Parents of a newborn who want to add them as a dependant.",
        "Anyone found ineligible who wants to object.",
      ],
      steps: [
        "We review your current portal data and eligibility status.",
        "We explain documents required for registration or updates.",
        "We help you enter or update data accurately.",
        "We help draft and submit an objection when needed.",
        "We explain how to follow results and upcoming cycles.",
      ],
      tips: [
        "Update data as soon as income or dependants change.",
        "Make sure your national address and registered IBAN are correct.",
        "Enter income accurately and transparently to avoid later claims.",
        "Object within the set period if you have a concern.",
        "Keep copies of uploaded documents.",
      ],
      local:
        "We serve citizens in Makkah, Jeddah, Riyadh, Dammam, Madinah and every Saudi city, with full follow-up on WhatsApp.",
      faqs: [
        { q: "Do you guarantee eligibility or higher support?", a: "No, eligibility and amounts are decided by the programme's criteria; we help you enter correct data and follow up." },
        { q: "How do I add a newborn?", a: "After registering the birth with Civil Affairs, dependants can be updated on the portal; we help with the steps." },
        { q: "What if I'm found ineligible?", a: "We review the reason with you, and if data is wrong we help correct it or file an objection." },
        { q: "Is Tasami a government entity?", a: "No, we are an independent services office; registration and objections go through the official Citizen Account portal." },
      ],
    },
    ur: {
      primaryKeyword: "حساب المواطن رجسٹریشن",
      secondaryKeywords: ["حساب المواطن ڈیٹا اپڈیٹ", "حساب المواطن میں زیر کفالت شامل کرنا", "حساب المواطن اعتراض", "حساب المواطن مسائل"],
      metaDescription:
        "تسامی کے ساتھ حساب المواطن میں رجسٹریشن، ڈیٹا اپڈیٹ، زیر کفالت افراد شامل کرنا اور اعتراض جمع کرانا: ہم سرکاری پورٹل پر قدم بہ قدم مدد کرتے ہیں۔ ہم سرکاری ادارہ نہیں ہیں۔",
      intro:
        "حساب المواطن پروگرام مقررہ معیار کے مطابق مستحق سعودی خاندانوں کو مدد فراہم کرتا ہے، اور یہ آمدنی، زیر کفالت افراد کی تعداد اور رہائشی پتے جیسے درج شدہ ڈیٹا کی درستگی پر بہت زیادہ انحصار کرتا ہے۔ ڈیٹا میں کوئی غلطی یا کمی نااہلی یا مدد کی رقم میں تبدیلی کا سبب بن سکتی ہے، اور بہت سے لوگ نہیں جانتے کہ ڈیٹا کیسے اپڈیٹ کریں، نومولود کیسے شامل کریں یا اعتراض کیسے کریں۔ تسامی میں ہم سرکاری پورٹل پر رجسٹریشن یا اپڈیٹ میں مدد کرتے ہیں، دستاویزات بتاتے ہیں اور ضرورت ہو تو اعتراض لکھنے اور جمع کرانے میں مدد کرتے ہیں؛ اہلیت کا فیصلہ صرف پروگرام کرتا ہے۔",
      who: [
        "وہ شہری جو پہلی بار پروگرام میں رجسٹر ہونا چاہتے ہیں۔",
        "وہ خاندان جن کی آمدنی یا زیر کفالت افراد بدل گئے۔",
        "نومولود کے والدین جو اسے زیر کفالت شامل کرنا چاہتے ہیں۔",
        "جنہیں نااہل قرار دیا گیا اور اعتراض کرنا چاہتے ہیں۔",
      ],
      steps: [
        "ہم پورٹل پر آپ کا موجودہ ڈیٹا اور اہلیت کی حیثیت دیکھتے ہیں۔",
        "ہم رجسٹریشن یا اپڈیٹ کی دستاویزات بتاتے ہیں۔",
        "ہم ڈیٹا درست طریقے سے درج یا اپڈیٹ کرنے میں مدد کرتے ہیں۔",
        "ہم ضرورت پر اعتراض لکھنے اور جمع کرانے میں مدد کرتے ہیں۔",
        "ہم نتیجہ اور آئندہ سائیکلز فالو کرنے کا طریقہ بتاتے ہیں۔",
      ],
      tips: [
        "آمدنی یا زیر کفالت افراد بدلتے ہی ڈیٹا اپڈیٹ کریں۔",
        "قومی پتہ اور درج شدہ IBAN درست رکھیں۔",
        "بعد کے مطالبات سے بچنے کے لیے آمدنی درست اور شفاف درج کریں۔",
        "اعتراض مقررہ مدت میں کریں۔",
        "اپلوڈ کردہ دستاویزات کی کاپیاں رکھیں۔",
      ],
      local:
        "ہم مکہ مکرمہ، جدہ، ریاض، دمام، مدینہ منورہ اور سعودی عرب کے ہر شہر میں شہریوں کی خدمت کرتے ہیں، مکمل فالو اپ واٹس ایپ پر۔",
      faqs: [
        { q: "کیا آپ اہلیت یا زیادہ مدد کی ضمانت دیتے ہیں؟", a: "نہیں، فیصلہ پروگرام کے معیار پر ہے؛ ہم درست ڈیٹا درج کرنے اور فالو اپ میں مدد کرتے ہیں۔" },
        { q: "نومولود کیسے شامل کروں؟", a: "سول افیئرز میں پیدائش رجسٹر ہونے کے بعد پورٹل پر زیر کفالت اپڈیٹ ہو سکتے ہیں؛ ہم مدد کرتے ہیں۔" },
        { q: "اگر نااہل قرار دیا جائے تو؟", a: "ہم وجہ دیکھتے ہیں، اور ڈیٹا غلط ہو تو درستگی یا اعتراض میں مدد کرتے ہیں۔" },
        { q: "کیا تسامی سرکاری ادارہ ہے؟", a: "نہیں، ہم آزاد سروسز آفس ہیں؛ رجسٹریشن اور اعتراض سرکاری حساب المواطن پورٹل سے ہوتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सिटीज़न अकाउंट (हिसाब अल-मुवातिन) पंजीकरण",
      secondaryKeywords: ["सिटीज़न अकाउंट डेटा अपडेट", "सिटीज़न अकाउंट में आश्रित जोड़ना", "सिटीज़न अकाउंट आपत्ति", "सिटीज़न अकाउंट समस्याएं"],
      metaDescription:
        "तसामी के साथ सिटीज़न अकाउंट में पंजीकरण, डेटा अपडेट, आश्रित जोड़ना और आपत्ति दर्ज करना: हम आधिकारिक पोर्टल पर चरण-दर-चरण मदद करते हैं। हम सरकारी संस्था नहीं हैं।",
      intro:
        "सिटीज़न अकाउंट कार्यक्रम तय मानदंडों के अनुसार पात्र सऊदी परिवारों को सहायता देता है, और यह आय, आश्रितों की संख्या और आवासीय पते जैसे दर्ज डेटा की सटीकता पर बहुत निर्भर है। डेटा में कोई गलती या कमी अपात्रता या सहायता राशि में बदलाव का कारण बन सकती है, और कई लोग नहीं जानते कि डेटा कैसे अपडेट करें, नवजात को कैसे जोड़ें या आपत्ति कैसे दर्ज करें। तसामी में हम आधिकारिक पोर्टल पर पंजीकरण या अपडेट में मदद करते हैं, दस्तावेज़ बताते हैं और ज़रूरत हो तो आपत्ति लिखने और जमा करने में मदद करते हैं; पात्रता का फैसला केवल कार्यक्रम करता है।",
      who: [
        "वे नागरिक जो पहली बार कार्यक्रम में पंजीकरण करना चाहते हैं।",
        "वे परिवार जिनकी आय या आश्रित बदल गए।",
        "नवजात के माता-पिता जो उसे आश्रित के रूप में जोड़ना चाहते हैं।",
        "जिन्हें अपात्र घोषित किया गया और आपत्ति करना चाहते हैं।",
      ],
      steps: [
        "हम पोर्टल पर आपका मौजूदा डेटा और पात्रता स्थिति देखते हैं।",
        "हम पंजीकरण या अपडेट के दस्तावेज़ बताते हैं।",
        "हम डेटा सही तरीके से दर्ज या अपडेट करने में मदद करते हैं।",
        "हम ज़रूरत पर आपत्ति लिखने और जमा करने में मदद करते हैं।",
        "हम परिणाम और आगामी चक्र फॉलो करने का तरीका बताते हैं।",
      ],
      tips: [
        "आय या आश्रित बदलते ही डेटा अपडेट करें।",
        "राष्ट्रीय पता और दर्ज IBAN सही रखें।",
        "बाद के दावों से बचने के लिए आय सही और पारदर्शी दर्ज करें।",
        "आपत्ति तय अवधि में करें।",
        "अपलोड किए दस्तावेज़ों की कॉपियां रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम, मदीना और सऊदी अरब के हर शहर में नागरिकों की सेवा करते हैं, पूरा फॉलो-अप व्हाट्सऐप पर।",
      faqs: [
        { q: "क्या आप पात्रता या अधिक सहायता की गारंटी देते हैं?", a: "नहीं, फैसला कार्यक्रम के मानदंडों पर है; हम सही डेटा दर्ज करने और फॉलो-अप में मदद करते हैं।" },
        { q: "नवजात को कैसे जोड़ें?", a: "सिविल अफेयर्स में जन्म पंजीकरण के बाद पोर्टल पर आश्रित अपडेट हो सकते हैं; हम मदद करते हैं।" },
        { q: "अगर अपात्र घोषित किया जाए तो?", a: "हम कारण देखते हैं, और डेटा गलत हो तो सुधार या आपत्ति में मदद करते हैं।" },
        { q: "क्या तसामी सरकारी संस्था है?", a: "नहीं, हम स्वतंत्र सेवा कार्यालय हैं; पंजीकरण और आपत्ति आधिकारिक सिटीज़न अकाउंट पोर्टल से होते हैं।" },
      ],
    },
  },
};
