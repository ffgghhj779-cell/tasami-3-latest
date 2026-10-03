import type { GuideDef } from "./service-guides";

/** Workforce, residency and legal-document guides. Same rules as service-guides.ts: no fees or fixed durations. */
export const WORKFORCE_GUIDES: Record<string, GuideDef> = {
  lostIqama: {
    ar: {
      primaryKeyword: "بدل فاقد إقامة",
      secondaryKeywords: ["إقامة مفقودة", "بلاغ فقدان إقامة", "بدل تالف إقامة", "استخراج بدل فاقد إقامة"],
      metaDescription:
        "بدل فاقد إقامة في السعودية عبر تسامي: نتابع بلاغ الفقدان وإصدار البدل عبر أبشر ومقيم، ونوضح لك المطلوب حتى تستلم الإقامة الجديدة.",
      intro:
        "عند فقدان الإقامة أو تلفها يجب الإبلاغ عن الفقدان أولاً، ثم إصدار بدل فاقد أو تالف عبر أبشر أعمال أو منصة مقيم من حساب صاحب العمل، مع سداد الرسوم الحكومية المستحقة. وإلى حين استلام البدل يمكن للمقيم غالباً استخدام هوية مقيم الرقمية في تطبيق أبشر. تسامي تتابع البلاغ والإصدار وتوضح لك ما يلزم في كل خطوة.",
      who: [
        "العامل الذي فقد إقامته أو تلفت ويحتاج بدلاً بسرعة.",
        "المنشآت التي فقد أحد عمالها إقامته وتريد إنهاء الإجراء دون تعطيل.",
        "الكفلاء الأفراد لعمالة منزلية أو سائق خاص.",
        "من لديه إقامة تالفة أو بيانات غير واضحة عليها.",
      ],
      steps: [
        "ترسل لنا رقم الإقامة وبيانات صاحب العمل وظروف الفقد أو التلف.",
        "نتحقق من تسجيل بلاغ الفقدان، أو نرتب تسجيله عبر القنوات الرسمية.",
        "نراجع صلاحية الإقامة وأي مخالفات أو التزامات قد تمنع إصدار البدل.",
        "نقدم طلب البدل عبر أبشر أعمال أو مقيم بعد سداد الرسوم الحكومية.",
        "نتابع حتى إصدار البدل ونوضح لك طريقة الاستلام.",
      ],
      tips: [
        "أبلغ عن الفقدان فوراً لحماية العامل من أي استخدام غير نظامي للإقامة.",
        "استخدم هوية مقيم الرقمية في أبشر لحين استلام البدل.",
        "احتفظ بصورة من الإقامة والجواز في هاتفك لتسهيل أي إجراء مستقبلي.",
        "تكرار الفقد قد يترتب عليه رسوم أعلى، فحافظ على الإقامة الجديدة.",
        "إذا كانت الإقامة قريبة الانتهاء فقد يكون التجديد مع البدل أنسب؛ اسألنا عن حالتك.",
      ],
      local:
        "نتابع طلبات بدل فاقد الإقامة لعملائنا في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة إلكترونياً عبر أبشر ومقيم.",
      faqs: [
        { q: "ماذا أفعل أولاً عند فقدان الإقامة؟", a: "الإبلاغ عن الفقدان، ثم إصدار البدل من حساب صاحب العمل في أبشر أعمال أو مقيم. نتابع لك الخطوتين." },
        { q: "هل يمكن استخدام الإقامة الرقمية مؤقتاً؟", a: "غالباً نعم، هوية مقيم الرقمية في تطبيق أبشر تُستخدم في كثير من التعاملات لحين استلام البدل." },
        { q: "هل يستطيع العامل إصدار البدل بنفسه؟", a: "طلب البدل يتم عادةً من حساب صاحب العمل أو الكفيل. نتواصل معك لترتيب الصلاحيات اللازمة." },
        { q: "ما الفرق بين بدل فاقد وبدل تالف؟", a: "بدل الفاقد عند ضياع الإقامة ويتطلب بلاغ فقدان، وبدل التالف عند تلف البطاقة. نحدد المسار المناسب لحالتك." },
      ],
    },
    en: {
      primaryKeyword: "lost iqama replacement",
      secondaryKeywords: ["lost iqama Saudi Arabia", "report lost iqama", "damaged iqama replacement", "iqama replacement Absher"],
      metaDescription:
        "Lost iqama replacement in Saudi Arabia with Tasami: we follow the loss report and the replacement through Absher and Muqeem, and explain what is needed until the new iqama is ready.",
      intro:
        "When an iqama is lost or damaged, the loss must be reported first, then a replacement is issued through Absher Business or Muqeem from the employer's account, after paying the government fees due. Until the replacement arrives, the resident can usually use the digital resident ID in the Absher app. Tasami follows the report and the replacement and explains what is needed at each step.",
      who: [
        "Workers who lost or damaged their iqama and need a replacement quickly.",
        "Businesses whose worker lost an iqama and want it resolved without disruption.",
        "Individual sponsors of domestic workers or private drivers.",
        "Anyone with a damaged iqama or unreadable details on it.",
      ],
      steps: [
        "You send the iqama number, employer details and how it was lost or damaged.",
        "We check the loss report is registered, or arrange it through official channels.",
        "We review the iqama validity and any violations or obligations that could block the replacement.",
        "We submit the replacement request through Absher Business or Muqeem after the government fees are paid.",
        "We follow until the replacement is issued and explain how to collect it.",
      ],
      tips: [
        "Report the loss immediately to protect the worker from any misuse of the iqama.",
        "Use the digital resident ID in Absher until the replacement arrives.",
        "Keep a photo of the iqama and passport on your phone to ease future procedures.",
        "Repeated loss may mean higher fees, so keep the new iqama safe.",
        "If the iqama is close to expiry, renewing with the replacement may be better; ask us about your case.",
      ],
      local:
        "We follow lost iqama replacements for clients in Makkah, Jeddah, Riyadh, Dammam and every Saudi city online through Absher and Muqeem.",
      faqs: [
        { q: "What should I do first when an iqama is lost?", a: "Report the loss, then issue the replacement from the employer's Absher Business or Muqeem account. We follow both steps for you." },
        { q: "Can the digital iqama be used meanwhile?", a: "Usually yes, the digital resident ID in the Absher app is accepted in many transactions until the replacement arrives." },
        { q: "Can the worker request the replacement himself?", a: "The request is usually made from the employer's or sponsor's account. We coordinate the needed permissions with you." },
        { q: "What is the difference between lost and damaged replacement?", a: "A lost replacement is for a missing iqama and needs a loss report; a damaged replacement is for a damaged card. We pick the right path for you." },
      ],
    },
    ur: {
      primaryKeyword: "گم شدہ اقامہ کا متبادل",
      secondaryKeywords: ["اقامہ گم ہو گیا", "اقامہ گمشدگی رپورٹ", "خراب اقامہ کا متبادل"],
      metaDescription:
        "تسامی کے ساتھ سعودی عرب میں گم شدہ اقامہ کا متبادل: گمشدگی رپورٹ اور ابشر و مقیم کے ذریعے متبادل کا اجرا، نیا اقامہ ملنے تک مکمل رہنمائی۔",
      intro:
        "اقامہ گم یا خراب ہونے پر پہلے گمشدگی کی رپورٹ ضروری ہے، پھر سرکاری فیس کی ادائیگی کے بعد آجر کے اکاؤنٹ سے ابشر بزنس یا مقیم کے ذریعے متبادل جاری ہوتا ہے۔ متبادل ملنے تک مقیم عموماً ابشر ایپ میں ڈیجیٹل مقیم شناخت استعمال کر سکتا ہے۔ تسامی رپورٹ اور اجرا فالو کرتا ہے اور ہر مرحلے پر ضروری بات بتاتا ہے۔",
      who: [
        "وہ کارکن جس کا اقامہ گم یا خراب ہو گیا اور جلد متبادل چاہیے۔",
        "کمپنیاں جن کے کارکن کا اقامہ گم ہو گیا اور کام متاثر کیے بغیر حل چاہتی ہیں۔",
        "گھریلو ملازم یا ذاتی ڈرائیور کے انفرادی کفیل۔",
        "جن کا اقامہ خراب ہے یا اس کی معلومات واضح نہیں۔",
      ],
      steps: [
        "اقامہ نمبر، آجر کی معلومات اور گم یا خراب ہونے کی صورت بتائیں۔",
        "تصدیق کرتے ہیں کہ گمشدگی رپورٹ درج ہے، ورنہ سرکاری ذرائع سے درج کرواتے ہیں۔",
        "اقامہ کی میعاد اور ان خلاف ورزیوں یا واجبات کا جائزہ لیتے ہیں جو اجرا روک سکتے ہیں۔",
        "سرکاری فیس کی ادائیگی کے بعد ابشر بزنس یا مقیم پر متبادل کی درخواست دیتے ہیں۔",
        "متبادل جاری ہونے تک فالو کرتے ہیں اور وصولی کا طریقہ بتاتے ہیں۔",
      ],
      tips: [
        "غلط استعمال سے بچانے کے لیے فوراً گمشدگی رپورٹ کریں۔",
        "متبادل ملنے تک ابشر میں ڈیجیٹل مقیم شناخت استعمال کریں۔",
        "اقامہ اور پاسپورٹ کی تصویر فون میں رکھیں۔",
        "بار بار گم ہونے پر فیس زیادہ ہو سکتی ہے، نیا اقامہ سنبھال کر رکھیں۔",
        "اگر اقامہ جلد ختم ہونے والا ہے تو متبادل کے ساتھ تجدید بہتر ہو سکتی ہے؛ ہم سے پوچھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر میں ابشر اور مقیم کے ذریعے گم شدہ اقامہ کے متبادل کا کام آن لائن کرتے ہیں۔",
      faqs: [
        { q: "اقامہ گم ہونے پر پہلے کیا کروں؟", a: "گمشدگی رپورٹ کریں، پھر آجر کے ابشر بزنس یا مقیم اکاؤنٹ سے متبادل جاری ہوتا ہے۔ ہم دونوں مراحل فالو کرتے ہیں۔" },
        { q: "کیا اس دوران ڈیجیٹل اقامہ استعمال ہو سکتا ہے؟", a: "عموماً ہاں، ابشر ایپ کی ڈیجیٹل مقیم شناخت متبادل ملنے تک کئی جگہ قبول ہوتی ہے۔" },
        { q: "کیا کارکن خود متبادل کی درخواست دے سکتا ہے؟", a: "درخواست عموماً آجر یا کفیل کے اکاؤنٹ سے ہوتی ہے۔ ہم ضروری اجازتیں ترتیب دیتے ہیں۔" },
        { q: "گم شدہ اور خراب کے متبادل میں کیا فرق ہے؟", a: "گم شدہ کے لیے گمشدگی رپورٹ ضروری ہے، خراب کارڈ کا متبادل الگ طریقہ ہے۔ ہم درست راستہ منتخب کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "खोए इक़ामा का बदल",
      secondaryKeywords: ["इक़ामा खो गया", "इक़ामा गुमशुदगी रिपोर्ट", "ख़राब इक़ामा का बदल"],
      metaDescription:
        "तसामी के साथ सऊदी अरब में खोए इक़ामा का बदल: गुमशुदगी रिपोर्ट और अबशर व मुक़ीम से बदल जारी कराना, नया इक़ामा मिलने तक पूरा मार्गदर्शन।",
      intro:
        "इक़ामा खोने या ख़राब होने पर पहले गुमशुदगी की रिपोर्ट ज़रूरी है, फिर सरकारी फ़ीस चुकाने के बाद नियोक्ता के अकाउंट से अबशर बिज़नेस या मुक़ीम के ज़रिए बदल जारी होता है। बदल मिलने तक निवासी आमतौर पर अबशर ऐप में डिजिटल रेज़िडेंट आईडी इस्तेमाल कर सकता है। तसामी रिपोर्ट और बदल फ़ॉलो करता है और हर चरण पर ज़रूरी बात बताता है।",
      who: [
        "वह कर्मचारी जिसका इक़ामा खो गया या ख़राब हो गया और जल्दी बदल चाहिए।",
        "कंपनियाँ जिनके कर्मचारी का इक़ामा खो गया और काम रुके बिना हल चाहती हैं।",
        "घरेलू कर्मचारी या निजी ड्राइवर के व्यक्तिगत कफ़ील।",
        "जिनका इक़ामा ख़राब है या जानकारी साफ़ नहीं दिखती।",
      ],
      steps: [
        "इक़ामा नंबर, नियोक्ता की जानकारी और खोने या ख़राब होने की स्थिति बताएँ।",
        "पुष्टि करते हैं कि गुमशुदगी रिपोर्ट दर्ज है, नहीं तो आधिकारिक माध्यम से दर्ज कराते हैं।",
        "इक़ामा की वैधता और ऐसे जुर्माने या देनदारियाँ जाँचते हैं जो बदल रोक सकती हैं।",
        "सरकारी फ़ीस चुकाने के बाद अबशर बिज़नेस या मुक़ीम पर बदल का आवेदन करते हैं।",
        "बदल जारी होने तक फ़ॉलो करते हैं और लेने का तरीक़ा बताते हैं।",
      ],
      tips: [
        "ग़लत इस्तेमाल से बचाने के लिए तुरंत गुमशुदगी रिपोर्ट करें।",
        "बदल मिलने तक अबशर में डिजिटल रेज़िडेंट आईडी इस्तेमाल करें।",
        "इक़ामा और पासपोर्ट की फ़ोटो फ़ोन में रखें।",
        "बार-बार खोने पर फ़ीस ज़्यादा हो सकती है, नया इक़ामा सँभालकर रखें।",
        "इक़ामा जल्दी ख़त्म होने वाला हो तो बदल के साथ नवीनीकरण बेहतर हो सकता है; हमसे पूछें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर में अबशर और मुक़ीम से खोए इक़ामा के बदल का काम ऑनलाइन करते हैं।",
      faqs: [
        { q: "इक़ामा खोने पर पहले क्या करूँ?", a: "गुमशुदगी रिपोर्ट करें, फिर नियोक्ता के अबशर बिज़नेस या मुक़ीम अकाउंट से बदल जारी होता है। हम दोनों चरण फ़ॉलो करते हैं।" },
        { q: "क्या इस बीच डिजिटल इक़ामा चल सकता है?", a: "आमतौर पर हाँ, अबशर ऐप की डिजिटल रेज़िडेंट आईडी बदल मिलने तक कई जगह मान्य है।" },
        { q: "क्या कर्मचारी ख़ुद बदल का आवेदन कर सकता है?", a: "आवेदन आमतौर पर नियोक्ता या कफ़ील के अकाउंट से होता है। हम ज़रूरी अनुमतियाँ व्यवस्थित करते हैं।" },
        { q: "खोए और ख़राब इक़ामा के बदल में क्या फ़र्क़ है?", a: "खोए के लिए गुमशुदगी रिपोर्ट ज़रूरी है, ख़राब कार्ड का बदल अलग प्रक्रिया है। हम सही रास्ता चुनते हैं।" },
      ],
    },
  },

  qiwaContracts: {
    ar: {
      primaryKeyword: "توثيق عقود العمل",
      secondaryKeywords: ["توثيق العقود في قوى", "عقد عمل إلكتروني", "توثيق عقد عامل", "منصة قوى"],
      metaDescription:
        "توثيق عقود العمل في منصة قوى عبر تسامي: نجهز العقود الإلكترونية لعمالتك ونتابع موافقة الموظفين حتى يكتمل التوثيق، مع مراجعة البيانات قبل الإرسال.",
      intro:
        "توثيق عقود العمل إلكترونياً في منصة قوى من متطلبات وزارة الموارد البشرية للمنشآت، ويحفظ حقوق صاحب العمل والموظف معاً. تنشئ المنشأة العقد في قوى بالبيانات الأساسية مثل الأجر والمهنة ومدة العقد، ثم يوافق الموظف عليه من حسابه في قوى أفراد. تسامي تجهز العقود وتراجع بياناتها وتتابع الموافقات حتى يكتمل توثيق عمالتك.",
      who: [
        "المنشآت التي لديها عقود غير موثقة وتريد استكمالها.",
        "منشآت توظف عاملين جدداً وتحتاج عقوداً موثقة من البداية.",
        "أصحاب المنشآت الصغيرة الذين لا يملكون موظف موارد بشرية.",
        "منشآت تحتاج تعديل بيانات عقود قائمة مثل الأجر أو المهنة.",
      ],
      steps: [
        "نستلم قائمة الموظفين وبياناتهم الأساسية من المنشأة.",
        "نراجع تطابق البيانات مع التأمينات وقوى، مثل الأجر والمهنة.",
        "ننشئ العقود في منصة قوى بصلاحية من المنشأة.",
        "نتابع موافقة كل موظف على عقده من حسابه، ونساعد من يحتاج شرحاً.",
        "نرسل لك تقريراً بالعقود الموثقة وأي عقود معلقة.",
      ],
      tips: [
        "تأكد أن الأجر في العقد مطابق للأجر المسجل في التأمينات.",
        "اطلب من الموظفين تفعيل حساباتهم في قوى أفراد لتسريع الموافقة.",
        "راجع مدة العقد ونوعه قبل الإرسال لتجنب التعديل لاحقاً.",
        "حدّث العقد عند أي تغيير في الأجر أو المهنة.",
        "العقود الموثقة تسهل كثيراً من خدمات المنشأة والموظف لاحقاً.",
      ],
      local:
        "نوثق عقود العمل لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة إلكترونياً عبر منصة قوى.",
      faqs: [
        { q: "هل توثيق عقود العمل إلزامي؟", a: "وزارة الموارد البشرية تتطلب توثيق عقود العاملين في المنشآت عبر منصة قوى. نساعدك في إكمال التوثيق." },
        { q: "ماذا لو لم يوافق الموظف على العقد؟", a: "يبقى العقد معلقاً حتى يوافق الموظف أو يُعدّل. نتابع مع الموظفين ونوضح لهم الخطوات." },
        { q: "هل يمكن تعديل عقد موثق؟", a: "نعم، يمكن تعديل بعض البيانات عبر قوى ويتطلب ذلك موافقة الموظف مجدداً." },
        { q: "هل تشمل الخدمة الموظفين السعوديين؟", a: "نعم، توثيق العقود يشمل الموظفين السعوديين والوافدين في المنشأة." },
      ],
    },
    en: {
      primaryKeyword: "Qiwa contract documentation",
      secondaryKeywords: ["document employment contracts Qiwa", "electronic work contract Saudi", "Qiwa contract authentication", "employee contract documentation"],
      metaDescription:
        "Employment contract documentation on Qiwa with Tasami: we prepare electronic contracts for your staff and follow employee approvals until documentation is complete, reviewing the data first.",
      intro:
        "Documenting employment contracts electronically on Qiwa is a Ministry of Human Resources requirement for businesses and protects both employer and employee. The business creates the contract on Qiwa with core data such as salary, profession and duration, then the employee approves it from their Qiwa individual account. Tasami prepares the contracts, reviews the data and follows approvals until your workforce is documented.",
      who: [
        "Businesses with undocumented contracts that need completing.",
        "Businesses hiring new staff who need documented contracts from day one.",
        "Small business owners without an HR employee.",
        "Businesses needing to amend existing contracts such as salary or profession.",
      ],
      steps: [
        "We receive the employee list and core details from the business.",
        "We check the data matches GOSI and Qiwa, such as salary and profession.",
        "We create the contracts on Qiwa with the business's authorization.",
        "We follow each employee's approval from their account and help anyone who needs guidance.",
        "We send you a report of documented and pending contracts.",
      ],
      tips: [
        "Make sure the contract salary matches the salary registered with GOSI.",
        "Ask employees to activate their Qiwa individual accounts to speed approval.",
        "Review contract duration and type before sending to avoid later amendments.",
        "Update the contract whenever salary or profession changes.",
        "Documented contracts make many later business and employee services easier.",
      ],
      local:
        "We document employment contracts for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city online through Qiwa.",
      faqs: [
        { q: "Is contract documentation mandatory?", a: "The Ministry of Human Resources requires businesses to document employee contracts on Qiwa. We help you complete it." },
        { q: "What if an employee does not approve?", a: "The contract stays pending until the employee approves or it is amended. We follow up with employees and explain the steps." },
        { q: "Can a documented contract be amended?", a: "Yes, some data can be amended on Qiwa, which requires the employee's approval again." },
        { q: "Does it cover Saudi employees too?", a: "Yes, documentation covers both Saudi and expat employees of the business." },
      ],
    },
    ur: {
      primaryKeyword: "قوی پر ورک کنٹریکٹ کی توثیق",
      secondaryKeywords: ["قوی کنٹریکٹ", "الیکٹرانک ورک کنٹریکٹ", "ملازم معاہدے کی توثیق"],
      metaDescription:
        "تسامی کے ساتھ قوی پر ملازمین کے معاہدوں کی توثیق: الیکٹرانک کنٹریکٹ کی تیاری، معلومات کا جائزہ اور توثیق مکمل ہونے تک ملازمین کی منظوری کی پیروی۔",
      intro:
        "قوی پر ملازمین کے معاہدوں کی الیکٹرانک توثیق وزارتِ افرادی قوت کی جانب سے اداروں کے لیے ضروری ہے اور آجر و ملازم دونوں کے حقوق محفوظ کرتی ہے۔ ادارہ تنخواہ، پیشہ اور مدت جیسی بنیادی معلومات کے ساتھ قوی پر معاہدہ بناتا ہے، پھر ملازم اپنے قوی انفرادی اکاؤنٹ سے منظوری دیتا ہے۔ تسامی معاہدے تیار کر کے معلومات چیک کرتا ہے اور توثیق مکمل ہونے تک منظوریاں فالو کرتا ہے۔",
      who: [
        "ادارے جن کے معاہدے غیر تصدیق شدہ ہیں۔",
        "نئے ملازمین رکھنے والے ادارے جنہیں شروع سے تصدیق شدہ معاہدے چاہییں۔",
        "چھوٹے کاروبار جن کے پاس HR ملازم نہیں۔",
        "ادارے جنہیں موجودہ معاہدوں میں تنخواہ یا پیشہ تبدیل کرنا ہے۔",
      ],
      steps: [
        "ادارے سے ملازمین کی فہرست اور بنیادی معلومات لیتے ہیں۔",
        "تنخواہ اور پیشے جیسی معلومات GOSI اور قوی کے مطابق ہونے کی تصدیق کرتے ہیں۔",
        "ادارے کی اجازت سے قوی پر معاہدے بناتے ہیں۔",
        "ہر ملازم کی منظوری فالو کرتے ہیں اور ضرورت ہو تو رہنمائی دیتے ہیں۔",
        "تصدیق شدہ اور زیرِ التوا معاہدوں کی رپورٹ بھیجتے ہیں۔",
      ],
      tips: [
        "معاہدے کی تنخواہ GOSI میں درج تنخواہ کے مطابق رکھیں۔",
        "ملازمین سے قوی انفرادی اکاؤنٹ فعال کرنے کو کہیں تاکہ منظوری جلد ہو۔",
        "بھیجنے سے پہلے معاہدے کی مدت اور قسم چیک کریں۔",
        "تنخواہ یا پیشہ بدلنے پر معاہدہ اپڈیٹ کریں۔",
        "تصدیق شدہ معاہدے بعد کی کئی خدمات آسان بناتے ہیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کے معاہدے قوی کے ذریعے آن لائن تصدیق کرواتے ہیں۔",
      faqs: [
        { q: "کیا معاہدوں کی توثیق لازمی ہے؟", a: "وزارتِ افرادی قوت اداروں سے قوی پر ملازمین کے معاہدوں کی توثیق کا تقاضا کرتی ہے۔ ہم مکمل کرنے میں مدد کرتے ہیں۔" },
        { q: "اگر ملازم منظوری نہ دے تو؟", a: "معاہدہ منظوری یا ترمیم تک زیرِ التوا رہتا ہے۔ ہم ملازمین سے رابطہ کر کے مراحل سمجھاتے ہیں۔" },
        { q: "کیا تصدیق شدہ معاہدے میں ترمیم ہو سکتی ہے؟", a: "جی ہاں، قوی پر کچھ معلومات تبدیل ہو سکتی ہیں اور ملازم کی دوبارہ منظوری درکار ہوتی ہے۔" },
        { q: "کیا اس میں سعودی ملازمین بھی شامل ہیں؟", a: "جی ہاں، سعودی اور غیر ملکی دونوں ملازمین کے معاہدے شامل ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "क़िवा पर वर्क कॉन्ट्रैक्ट प्रमाणन",
      secondaryKeywords: ["क़िवा कॉन्ट्रैक्ट", "इलेक्ट्रॉनिक वर्क कॉन्ट्रैक्ट", "कर्मचारी अनुबंध प्रमाणन"],
      metaDescription:
        "तसामी के साथ क़िवा पर कर्मचारी अनुबंधों का प्रमाणन: इलेक्ट्रॉनिक कॉन्ट्रैक्ट की तैयारी, जानकारी की जाँच और प्रमाणन पूरा होने तक कर्मचारियों की मंज़ूरी का फ़ॉलो-अप।",
      intro:
        "क़िवा पर कर्मचारी अनुबंधों का इलेक्ट्रॉनिक प्रमाणन मानव संसाधन मंत्रालय की ओर से प्रतिष्ठानों के लिए ज़रूरी है और नियोक्ता व कर्मचारी दोनों के अधिकार सुरक्षित करता है। प्रतिष्ठान वेतन, पेशा और अवधि जैसी बुनियादी जानकारी के साथ क़िवा पर अनुबंध बनाता है, फिर कर्मचारी अपने क़िवा व्यक्तिगत अकाउंट से मंज़ूरी देता है। तसामी अनुबंध तैयार कर जानकारी जाँचता है और प्रमाणन पूरा होने तक मंज़ूरियाँ फ़ॉलो करता है।",
      who: [
        "प्रतिष्ठान जिनके अनुबंध अभी प्रमाणित नहीं हैं।",
        "नए कर्मचारी रखने वाले प्रतिष्ठान जिन्हें शुरू से प्रमाणित अनुबंध चाहिए।",
        "छोटे व्यवसाय जिनके पास HR कर्मचारी नहीं है।",
        "प्रतिष्ठान जिन्हें मौजूदा अनुबंधों में वेतन या पेशा बदलना है।",
      ],
      steps: [
        "प्रतिष्ठान से कर्मचारियों की सूची और बुनियादी जानकारी लेते हैं।",
        "वेतन और पेशे जैसी जानकारी GOSI और क़िवा से मेल खाती है, यह जाँचते हैं।",
        "प्रतिष्ठान की अनुमति से क़िवा पर अनुबंध बनाते हैं।",
        "हर कर्मचारी की मंज़ूरी फ़ॉलो करते हैं और ज़रूरत हो तो मार्गदर्शन देते हैं।",
        "प्रमाणित और लंबित अनुबंधों की रिपोर्ट भेजते हैं।",
      ],
      tips: [
        "अनुबंध का वेतन GOSI में दर्ज वेतन से मिलाएँ।",
        "कर्मचारियों से क़िवा व्यक्तिगत अकाउंट सक्रिय करने को कहें ताकि मंज़ूरी जल्दी हो।",
        "भेजने से पहले अनुबंध की अवधि और प्रकार जाँचें।",
        "वेतन या पेशा बदलने पर अनुबंध अपडेट करें।",
        "प्रमाणित अनुबंध बाद की कई सेवाएँ आसान बनाते हैं।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के प्रतिष्ठानों के अनुबंध क़िवा से ऑनलाइन प्रमाणित कराते हैं।",
      faqs: [
        { q: "क्या अनुबंध प्रमाणन अनिवार्य है?", a: "मानव संसाधन मंत्रालय प्रतिष्ठानों से क़िवा पर कर्मचारी अनुबंध प्रमाणित करने की अपेक्षा करता है। हम पूरा करने में मदद करते हैं।" },
        { q: "अगर कर्मचारी मंज़ूरी न दे तो?", a: "अनुबंध मंज़ूरी या संशोधन तक लंबित रहता है। हम कर्मचारियों से संपर्क कर चरण समझाते हैं।" },
        { q: "क्या प्रमाणित अनुबंध बदला जा सकता है?", a: "हाँ, क़िवा पर कुछ जानकारी बदली जा सकती है और कर्मचारी की दोबारा मंज़ूरी चाहिए।" },
        { q: "क्या इसमें सऊदी कर्मचारी भी शामिल हैं?", a: "हाँ, सऊदी और प्रवासी दोनों कर्मचारियों के अनुबंध शामिल हैं।" },
      ],
    },
  },

  workPermit: {
    ar: {
      primaryKeyword: "رخصة عمل",
      secondaryKeywords: ["تجديد رخصة العمل", "إصدار رخصة عمل", "رخصة عمل قوى", "المقابل المالي"],
      metaDescription:
        "إصدار وتجديد رخصة العمل للعمالة الوافدة عبر قوى مع تسامي: نراجع وضع المنشأة والعامل ونتابع السداد والإصدار، بالتزامن مع تجديد الإقامة.",
      intro:
        "رخصة العمل تصدر وتجدد للعامل الوافد عبر منصة قوى، وترتبط مباشرة بتجديد الإقامة، إذ لا يكتمل تجديد الإقامة عادةً دون رخصة عمل سارية. يتطلب الإصدار أن يكون وضع المنشأة نظامياً، وأن تُسدد الرسوم الحكومية المستحقة ومنها المقابل المالي. تسامي تراجع وضع المنشأة والعامل وتتابع الإصدار أو التجديد في موعده.",
      who: [
        "المنشآت التي لديها عمالة وافدة تقترب رخص عملها من الانتهاء.",
        "منشآت استقدمت عمالة جديدة وتحتاج إصدار رخص العمل لهم.",
        "أصحاب المنشآت الذين يريدون تنظيم مواعيد رخص العمل والإقامات معاً.",
        "منشآت واجهت عائقاً في التجديد بسبب وضع المنشأة في قوى.",
      ],
      steps: [
        "نراجع قائمة العمالة ومواعيد انتهاء رخص العمل والإقامات.",
        "نتحقق من وضع المنشأة في قوى وأي عوائق قد تمنع الإصدار أو التجديد.",
        "نوضح لك الرسوم الحكومية المستحقة لتسددها عبر سداد.",
        "نقدم طلب الإصدار أو التجديد عبر قوى ونتابع حتى الاعتماد.",
        "نربط موعد رخصة العمل بتجديد الإقامة ونذكّرك بالمواعيد القادمة.",
      ],
      tips: [
        "جدّد رخصة العمل قبل الإقامة أو معها، فالإقامة تعتمد عليها.",
        "تابع وضع منشأتك في قوى بانتظام، فهو يؤثر على الخدمات المتاحة.",
        "تأكد من تطابق المهنة في رخصة العمل مع عمل الموظف الفعلي.",
        "خطط لميزانية الرسوم السنوية للعمالة مسبقاً.",
        "وثّق عقود العمل في قوى لتسهيل الخدمات المرتبطة.",
      ],
      local:
        "نتابع رخص العمل لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة إلكترونياً عبر منصة قوى.",
      faqs: [
        { q: "ما علاقة رخصة العمل بتجديد الإقامة؟", a: "تجديد إقامة العامل يتطلب عادةً رخصة عمل سارية، لذلك نتابعهما معاً في نفس الموعد." },
        { q: "أين تُصدر رخصة العمل؟", a: "تصدر وتجدد إلكترونياً عبر منصة قوى بعد سداد الرسوم الحكومية المستحقة." },
        { q: "لماذا قد يتعذر تجديد رخصة العمل؟", a: "من الأسباب الشائعة وضع المنشأة في قوى أو التزامات غير مسددة. نراجع السبب ونوضح لك الحل." },
        { q: "هل تتابعون رخص عدد كبير من العمالة؟", a: "نعم، ننظم مواعيد عمالتك في جدول واحد ونتابع التجديدات تباعاً." },
      ],
    },
    en: {
      primaryKeyword: "work permit in Saudi Arabia",
      secondaryKeywords: ["work permit renewal", "issue work permit Qiwa", "Qiwa work permit", "expat levy"],
      metaDescription:
        "Issue and renew work permits for expat workers through Qiwa with Tasami: we review the business and worker status and follow payment and issuance alongside iqama renewal.",
      intro:
        "Work permits for expat workers are issued and renewed through Qiwa and are directly linked to iqama renewal, since an iqama usually cannot be renewed without a valid work permit. Issuance requires the business to be in good standing and the government fees due, including the expat levy, to be paid. Tasami reviews the business and worker status and follows issuance or renewal on time.",
      who: [
        "Businesses whose expat workers' permits are nearing expiry.",
        "Businesses that recruited new workers and need permits issued.",
        "Owners who want work permit and iqama dates organized together.",
        "Businesses blocked from renewing due to their Qiwa status.",
      ],
      steps: [
        "We review the worker list and work permit and iqama expiry dates.",
        "We check the business's Qiwa status and any blockers to issuance or renewal.",
        "We tell you the government fees due to pay through SADAD.",
        "We submit the issuance or renewal on Qiwa and follow until approval.",
        "We align the work permit with the iqama renewal and remind you of upcoming dates.",
      ],
      tips: [
        "Renew the work permit before or with the iqama, since the iqama depends on it.",
        "Monitor your Qiwa status regularly; it affects the services available.",
        "Make sure the profession on the permit matches the employee's actual job.",
        "Budget the annual workforce fees in advance.",
        "Document employment contracts on Qiwa to ease related services.",
      ],
      local:
        "We follow work permits for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city online through Qiwa.",
      faqs: [
        { q: "How is the work permit related to iqama renewal?", a: "Renewing a worker's iqama usually requires a valid work permit, so we follow both together." },
        { q: "Where is the work permit issued?", a: "It is issued and renewed online through Qiwa after paying the government fees due." },
        { q: "Why might a renewal be blocked?", a: "Common reasons include the business's Qiwa status or unpaid obligations. We find the cause and explain the solution." },
        { q: "Can you handle permits for many workers?", a: "Yes, we organize your workforce dates in one schedule and follow renewals in turn." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں ورک پرمٹ",
      secondaryKeywords: ["ورک پرمٹ کی تجدید", "قوی ورک پرمٹ", "لیوی"],
      metaDescription:
        "تسامی کے ساتھ قوی کے ذریعے غیر ملکی کارکنوں کے ورک پرمٹ کا اجرا اور تجدید: ادارے اور کارکن کی صورتحال کا جائزہ، ادائیگی اور اجرا، اقامہ کی تجدید کے ساتھ۔",
      intro:
        "غیر ملکی کارکن کا ورک پرمٹ قوی کے ذریعے جاری اور تجدید ہوتا ہے اور براہِ راست اقامہ کی تجدید سے جڑا ہے، کیونکہ عموماً درست ورک پرمٹ کے بغیر اقامہ کی تجدید مکمل نہیں ہوتی۔ اجرا کے لیے ادارے کی صورتحال درست ہونا اور لیوی سمیت سرکاری فیس ادا ہونا ضروری ہے۔ تسامی ادارے اور کارکن کی صورتحال دیکھ کر وقت پر اجرا یا تجدید فالو کرتا ہے۔",
      who: [
        "ادارے جن کے غیر ملکی کارکنوں کے پرمٹ ختم ہونے والے ہیں۔",
        "نئے کارکن بلانے والے ادارے جنہیں پرمٹ جاری کروانے ہیں۔",
        "مالکان جو ورک پرمٹ اور اقامہ کی تاریخیں ساتھ منظم کرنا چاہتے ہیں۔",
        "ادارے جنہیں قوی کی صورتحال کی وجہ سے تجدید میں رکاوٹ ہے۔",
      ],
      steps: [
        "کارکنوں کی فہرست اور ورک پرمٹ و اقامہ کی تاریخیں دیکھتے ہیں۔",
        "قوی میں ادارے کی صورتحال اور اجرا یا تجدید کی رکاوٹیں چیک کرتے ہیں۔",
        "سداد کے ذریعے ادا کی جانے والی سرکاری فیس بتاتے ہیں۔",
        "قوی پر اجرا یا تجدید کی درخواست دے کر منظوری تک فالو کرتے ہیں۔",
        "ورک پرمٹ کو اقامہ کی تجدید کے ساتھ ملاتے ہیں اور آئندہ تاریخیں یاد دلاتے ہیں۔",
      ],
      tips: [
        "ورک پرمٹ اقامہ سے پہلے یا ساتھ تجدید کریں کیونکہ اقامہ اسی پر منحصر ہے۔",
        "قوی میں ادارے کی صورتحال باقاعدگی سے دیکھیں۔",
        "پرمٹ کا پیشہ کارکن کے اصل کام کے مطابق ہو۔",
        "کارکنوں کی سالانہ فیس کا بجٹ پہلے سے بنائیں۔",
        "متعلقہ خدمات آسان بنانے کے لیے قوی پر معاہدوں کی توثیق کریں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کے ورک پرمٹ قوی کے ذریعے آن لائن فالو کرتے ہیں۔",
      faqs: [
        { q: "ورک پرمٹ کا اقامہ کی تجدید سے کیا تعلق ہے؟", a: "اقامہ کی تجدید کے لیے عموماً درست ورک پرمٹ چاہیے، اس لیے ہم دونوں ساتھ فالو کرتے ہیں۔" },
        { q: "ورک پرمٹ کہاں جاری ہوتا ہے؟", a: "سرکاری فیس کی ادائیگی کے بعد قوی کے ذریعے آن لائن جاری اور تجدید ہوتا ہے۔" },
        { q: "تجدید میں رکاوٹ کیوں آ سکتی ہے؟", a: "عام وجوہات میں قوی میں ادارے کی صورتحال یا غیر ادا شدہ واجبات شامل ہیں۔ ہم وجہ معلوم کر کے حل بتاتے ہیں۔" },
        { q: "کیا آپ زیادہ کارکنوں کے پرمٹ سنبھالتے ہیں؟", a: "جی ہاں، ہم تمام تاریخیں ایک شیڈول میں رکھ کر ترتیب سے تجدید کرواتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में वर्क परमिट",
      secondaryKeywords: ["वर्क परमिट नवीनीकरण", "क़िवा वर्क परमिट", "लेवी"],
      metaDescription:
        "तसामी के साथ क़िवा से प्रवासी कर्मचारियों के वर्क परमिट जारी और नवीनीकरण: प्रतिष्ठान और कर्मचारी की स्थिति की जाँच, भुगतान और जारी होना, इक़ामा नवीनीकरण के साथ।",
      intro:
        "प्रवासी कर्मचारी का वर्क परमिट क़िवा से जारी और नवीनीकृत होता है और सीधे इक़ामा नवीनीकरण से जुड़ा है, क्योंकि आमतौर पर वैध वर्क परमिट के बिना इक़ामा नवीनीकरण पूरा नहीं होता। जारी होने के लिए प्रतिष्ठान की स्थिति ठीक होना और लेवी सहित सरकारी फ़ीस चुकाना ज़रूरी है। तसामी प्रतिष्ठान और कर्मचारी की स्थिति देखकर समय पर जारी या नवीनीकरण फ़ॉलो करता है।",
      who: [
        "प्रतिष्ठान जिनके प्रवासी कर्मचारियों के परमिट ख़त्म होने वाले हैं।",
        "नए कर्मचारी बुलाने वाले प्रतिष्ठान जिन्हें परमिट जारी कराने हैं।",
        "मालिक जो वर्क परमिट और इक़ामा की तारीख़ें साथ व्यवस्थित करना चाहते हैं।",
        "प्रतिष्ठान जिन्हें क़िवा स्थिति के कारण नवीनीकरण में रुकावट है।",
      ],
      steps: [
        "कर्मचारियों की सूची और वर्क परमिट व इक़ामा की तारीख़ें देखते हैं।",
        "क़िवा में प्रतिष्ठान की स्थिति और जारी या नवीनीकरण की रुकावटें जाँचते हैं।",
        "SADAD से चुकाई जाने वाली सरकारी फ़ीस बताते हैं।",
        "क़िवा पर जारी या नवीनीकरण का आवेदन कर मंज़ूरी तक फ़ॉलो करते हैं।",
        "वर्क परमिट को इक़ामा नवीनीकरण के साथ मिलाते हैं और आगे की तारीख़ें याद दिलाते हैं।",
      ],
      tips: [
        "वर्क परमिट इक़ामा से पहले या साथ में रिन्यू करें, क्योंकि इक़ामा इसी पर निर्भर है।",
        "क़िवा में प्रतिष्ठान की स्थिति नियमित देखें।",
        "परमिट का पेशा कर्मचारी के असली काम से मेल खाए।",
        "कर्मचारियों की सालाना फ़ीस का बजट पहले से बनाएँ।",
        "संबंधित सेवाएँ आसान करने के लिए क़िवा पर अनुबंध प्रमाणित करें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के प्रतिष्ठानों के वर्क परमिट क़िवा से ऑनलाइन फ़ॉलो करते हैं।",
      faqs: [
        { q: "वर्क परमिट का इक़ामा नवीनीकरण से क्या संबंध है?", a: "इक़ामा नवीनीकरण के लिए आमतौर पर वैध वर्क परमिट चाहिए, इसलिए हम दोनों साथ फ़ॉलो करते हैं।" },
        { q: "वर्क परमिट कहाँ जारी होता है?", a: "सरकारी फ़ीस चुकाने के बाद क़िवा से ऑनलाइन जारी और नवीनीकृत होता है।" },
        { q: "नवीनीकरण में रुकावट क्यों आ सकती है?", a: "आम कारणों में क़िवा में प्रतिष्ठान की स्थिति या बकाया देनदारियाँ हैं। हम कारण पता कर हल बताते हैं।" },
        { q: "क्या आप ज़्यादा कर्मचारियों के परमिट संभालते हैं?", a: "हाँ, हम सारी तारीख़ें एक शेड्यूल में रखकर क्रम से नवीनीकरण कराते हैं।" },
      ],
    },
  },

  najizPoa: {
    ar: {
      primaryKeyword: "توثيق وكالة",
      secondaryKeywords: ["إصدار وكالة إلكترونية", "وكالة ناجز", "إلغاء وكالة", "وكالة منشأة"],
      metaDescription:
        "إصدار وتوثيق الوكالات الإلكترونية عبر منصة ناجز مع تسامي: نجهز صيغة الوكالة وبيانات الأطراف ونتابع الإصدار أو الإلغاء، والتوثيق يتم بتحقق نفاذ.",
      intro:
        "الوكالات تصدر اليوم إلكترونياً عبر منصة ناجز التابعة لوزارة العدل، سواء للأفراد أو للمنشآت، ويتم التحقق من الموكّل عبر نفاذ. اختيار البنود الصحيحة في الوكالة مهم حتى تؤدي الغرض دون صلاحيات زائدة أو ناقصة. تسامي تساعدك في تحديد نوع الوكالة وبنودها وتجهيز بيانات الأطراف، وتتابع الإصدار أو الإلغاء، بينما تبقى الموافقة النهائية لك عبر نفاذ.",
      who: [
        "من يريد توكيل شخص لإنهاء معاملة نيابةً عنه.",
        "المنشآت التي تحتاج توكيل موظف أو معقب في معاملات محددة.",
        "المقيمون خارج مدينتهم أو خارج المملكة ويحتاجون وكيلاً داخلها.",
        "من يريد إلغاء وكالة سابقة أو التحقق من صلاحيتها.",
      ],
      steps: [
        "نتعرف على الغرض من الوكالة والجهة التي ستُستخدم لديها.",
        "نحدد نوع الوكالة والبنود المناسبة دون صلاحيات زائدة.",
        "نجهز بيانات الموكل والوكيل ونراجعها معك.",
        "نقدم طلب الوكالة عبر ناجز، وتؤكد أنت الطلب عبر نفاذ.",
        "نرسل لك الوكالة الصادرة ونوضح طريقة التحقق منها أو إلغائها لاحقاً.",
      ],
      tips: [
        "اختر البنود التي تحتاجها فقط؛ الوكالة الواسعة تمنح صلاحيات قد لا تريدها.",
        "حدد مدة مناسبة للوكالة بدلاً من تركها مفتوحة إن أمكن.",
        "تأكد من صحة رقم هوية الوكيل وبياناته قبل الإصدار.",
        "احتفظ برقم الوكالة للتحقق منها أو إلغائها عند الحاجة.",
        "لا تشارك رمز نفاذ مع أي شخص، فالتأكيد يجب أن يكون منك.",
      ],
      local:
        "نخدم عملاءنا في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة إلكترونياً عبر منصة ناجز.",
      faqs: [
        { q: "هل يمكن إصدار الوكالة دون زيارة كتابة العدل؟", a: "نعم في أغلب الحالات، الوكالات تصدر إلكترونياً عبر ناجز مع التحقق بنفاذ." },
        { q: "هل تستطيع تسامي إصدار الوكالة نيابةً عني؟", a: "نجهز الطلب وبنوده ونتابعه، لكن تأكيد الموكل عبر نفاذ يجب أن يكون منك شخصياً." },
        { q: "كيف ألغي وكالة؟", a: "يمكن إلغاء الوكالة إلكترونياً عبر ناجز. أرسل لنا رقمها ونتابع الإلغاء معك." },
        { q: "هل تصدرون وكالات للمنشآت؟", a: "نعم، نساعد في وكالات المنشآت بشرط أن يكون مقدم الطلب مخولاً بالتوقيع عنها." },
      ],
    },
    en: {
      primaryKeyword: "power of attorney in Saudi Arabia",
      secondaryKeywords: ["electronic power of attorney", "Najiz power of attorney", "cancel power of attorney", "company power of attorney"],
      metaDescription:
        "Issue electronic powers of attorney through Najiz with Tasami: we prepare the wording and party details and follow issuance or cancellation, with your confirmation via Nafath.",
      intro:
        "Powers of attorney are now issued electronically through Najiz, the Ministry of Justice platform, for individuals and businesses, with the principal verified through Nafath. Choosing the right clauses matters so the power of attorney serves its purpose without excess or missing authority. Tasami helps you choose the type and clauses, prepares the party details and follows issuance or cancellation, while the final confirmation stays with you via Nafath.",
      who: [
        "Anyone who wants to authorize someone to complete a transaction on their behalf.",
        "Businesses that need to authorize an employee or agent for specific transactions.",
        "People away from their city or outside the Kingdom who need an agent inside.",
        "Anyone who wants to cancel or verify a previous power of attorney.",
      ],
      steps: [
        "We learn the purpose of the power of attorney and where it will be used.",
        "We choose the type and suitable clauses without excess authority.",
        "We prepare the principal and agent details and review them with you.",
        "We submit the request on Najiz and you confirm it via Nafath.",
        "We send you the issued document and explain how to verify or cancel it later.",
      ],
      tips: [
        "Choose only the clauses you need; a broad power of attorney grants authority you may not want.",
        "Set a suitable duration rather than leaving it open where possible.",
        "Double-check the agent's ID number and details before issuance.",
        "Keep the document number to verify or cancel it when needed.",
        "Never share your Nafath code; the confirmation must come from you.",
      ],
      local:
        "We serve clients in Makkah, Jeddah, Riyadh, Dammam and every Saudi city online through Najiz.",
      faqs: [
        { q: "Can I issue it without visiting a notary?", a: "In most cases yes; powers of attorney are issued electronically on Najiz with Nafath verification." },
        { q: "Can Tasami issue it on my behalf?", a: "We prepare and follow the request and its clauses, but the principal's Nafath confirmation must come from you personally." },
        { q: "How do I cancel a power of attorney?", a: "It can be cancelled electronically on Najiz. Send us its number and we will follow the cancellation with you." },
        { q: "Do you handle company powers of attorney?", a: "Yes, provided the applicant is authorized to sign on the company's behalf." },
      ],
    },
    ur: {
      primaryKeyword: "سعودی عرب میں وکالت نامہ",
      secondaryKeywords: ["الیکٹرانک وکالت نامہ", "ناجز وکالت", "وکالت نامہ منسوخ کرنا"],
      metaDescription:
        "تسامی کے ساتھ ناجز کے ذریعے الیکٹرانک وکالت نامہ: الفاظ اور فریقین کی معلومات کی تیاری، اجرا یا منسوخی کی پیروی، اور نفاذ کے ذریعے آپ کی تصدیق۔",
      intro:
        "وکالت نامے اب وزارتِ انصاف کے پلیٹ فارم ناجز کے ذریعے افراد اور اداروں کے لیے الیکٹرانک طور پر جاری ہوتے ہیں اور مؤکل کی تصدیق نفاذ سے ہوتی ہے۔ درست شقیں منتخب کرنا ضروری ہے تاکہ وکالت نامہ زائد یا کم اختیارات کے بغیر مقصد پورا کرے۔ تسامی نوعیت اور شقیں طے کرنے، فریقین کی معلومات تیار کرنے اور اجرا یا منسوخی فالو کرنے میں مدد کرتا ہے، جبکہ حتمی تصدیق نفاذ کے ذریعے آپ ہی کرتے ہیں۔",
      who: [
        "جو کسی کو اپنی جگہ کام مکمل کرنے کا اختیار دینا چاہتے ہیں۔",
        "ادارے جنہیں مخصوص کاموں کے لیے ملازم یا نمائندے کو اختیار دینا ہے۔",
        "اپنے شہر یا مملکت سے باہر موجود افراد جنہیں اندر وکیل چاہیے۔",
        "جو پچھلا وکالت نامہ منسوخ یا چیک کرنا چاہتے ہیں۔",
      ],
      steps: [
        "وکالت نامے کا مقصد اور استعمال کی جگہ سمجھتے ہیں۔",
        "زائد اختیارات کے بغیر مناسب نوعیت اور شقیں منتخب کرتے ہیں۔",
        "مؤکل اور وکیل کی معلومات تیار کر کے آپ کے ساتھ دیکھتے ہیں۔",
        "ناجز پر درخواست دیتے ہیں اور آپ نفاذ کے ذریعے تصدیق کرتے ہیں۔",
        "جاری شدہ وکالت نامہ بھیجتے ہیں اور بعد میں تصدیق یا منسوخی کا طریقہ بتاتے ہیں۔",
      ],
      tips: [
        "صرف ضروری شقیں منتخب کریں؛ وسیع وکالت نامہ غیر ضروری اختیارات دیتا ہے۔",
        "ممکن ہو تو کھلا چھوڑنے کے بجائے مناسب مدت رکھیں۔",
        "اجرا سے پہلے وکیل کا شناختی نمبر اور معلومات دوبارہ چیک کریں۔",
        "تصدیق یا منسوخی کے لیے وکالت نامے کا نمبر محفوظ رکھیں۔",
        "نفاذ کوڈ کسی کو نہ دیں؛ تصدیق آپ کی طرف سے ہونی چاہیے۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر میں ناجز کے ذریعے آن لائن خدمت کرتے ہیں۔",
      faqs: [
        { q: "کیا نوٹری جائے بغیر وکالت نامہ بن سکتا ہے؟", a: "زیادہ تر ہاں؛ وکالت نامے نفاذ کی تصدیق کے ساتھ ناجز پر الیکٹرانک طور پر جاری ہوتے ہیں۔" },
        { q: "کیا تسامی میری جگہ جاری کر سکتا ہے؟", a: "ہم درخواست اور شقیں تیار کر کے فالو کرتے ہیں، مگر نفاذ پر تصدیق آپ کو خود کرنی ہوگی۔" },
        { q: "وکالت نامہ کیسے منسوخ کروں؟", a: "ناجز پر الیکٹرانک طور پر منسوخ ہو سکتا ہے۔ نمبر بھیجیں، ہم منسوخی فالو کریں گے۔" },
        { q: "کیا آپ اداروں کے وکالت نامے بناتے ہیں؟", a: "جی ہاں، بشرطیکہ درخواست دہندہ ادارے کی جانب سے دستخط کا مجاز ہو۔" },
      ],
    },
    hi: {
      primaryKeyword: "सऊदी अरब में पावर ऑफ़ अटॉर्नी",
      secondaryKeywords: ["इलेक्ट्रॉनिक पावर ऑफ़ अटॉर्नी", "नाजिज़ वकालतनामा", "पावर ऑफ़ अटॉर्नी रद्द करना"],
      metaDescription:
        "तसामी के साथ नाजिज़ से इलेक्ट्रॉनिक पावर ऑफ़ अटॉर्नी: शब्दावली और पक्षों की जानकारी की तैयारी, जारी या रद्द करने का फ़ॉलो-अप, और नफ़ाज़ से आपकी पुष्टि।",
      intro:
        "पावर ऑफ़ अटॉर्नी अब न्याय मंत्रालय के प्लेटफ़ॉर्म नाजिज़ से व्यक्तियों और प्रतिष्ठानों के लिए इलेक्ट्रॉनिक रूप से जारी होती है और प्रधान की पुष्टि नफ़ाज़ से होती है। सही धाराएँ चुनना ज़रूरी है ताकि दस्तावेज़ ज़्यादा या कम अधिकारों के बिना अपना उद्देश्य पूरा करे। तसामी प्रकार और धाराएँ तय करने, पक्षों की जानकारी तैयार करने और जारी या रद्द करने में मदद करता है, जबकि अंतिम पुष्टि नफ़ाज़ से आप ही करते हैं।",
      who: [
        "जो किसी को अपनी ओर से काम पूरा करने का अधिकार देना चाहते हैं।",
        "प्रतिष्ठान जिन्हें ख़ास कामों के लिए कर्मचारी या प्रतिनिधि को अधिकार देना है।",
        "अपने शहर या देश से बाहर के लोग जिन्हें अंदर एजेंट चाहिए।",
        "जो पुरानी पावर ऑफ़ अटॉर्नी रद्द या जाँचना चाहते हैं।",
      ],
      steps: [
        "पावर ऑफ़ अटॉर्नी का उद्देश्य और इस्तेमाल की जगह समझते हैं।",
        "ज़्यादा अधिकारों के बिना सही प्रकार और धाराएँ चुनते हैं।",
        "प्रधान और एजेंट की जानकारी तैयार कर आपके साथ जाँचते हैं।",
        "नाजिज़ पर आवेदन करते हैं और आप नफ़ाज़ से पुष्टि करते हैं।",
        "जारी दस्तावेज़ भेजते हैं और बाद में जाँचने या रद्द करने का तरीक़ा बताते हैं।",
      ],
      tips: [
        "सिर्फ़ ज़रूरी धाराएँ चुनें; व्यापक पावर ऑफ़ अटॉर्नी अनचाहे अधिकार देती है।",
        "हो सके तो खुला छोड़ने के बजाय उचित अवधि रखें।",
        "जारी करने से पहले एजेंट का आईडी नंबर और जानकारी दोबारा जाँचें।",
        "जाँचने या रद्द करने के लिए दस्तावेज़ नंबर सुरक्षित रखें।",
        "नफ़ाज़ कोड किसी को न दें; पुष्टि आपकी ओर से होनी चाहिए।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर में नाजिज़ से ऑनलाइन सेवा देते हैं।",
      faqs: [
        { q: "क्या नोटरी गए बिना पावर ऑफ़ अटॉर्नी बन सकती है?", a: "ज़्यादातर हाँ; यह नफ़ाज़ पुष्टि के साथ नाजिज़ पर इलेक्ट्रॉनिक रूप से जारी होती है।" },
        { q: "क्या तसामी मेरी ओर से जारी कर सकता है?", a: "हम आवेदन और धाराएँ तैयार कर फ़ॉलो करते हैं, पर नफ़ाज़ पर पुष्टि आपको ख़ुद करनी होगी।" },
        { q: "पावर ऑफ़ अटॉर्नी कैसे रद्द करूँ?", a: "नाजिज़ पर इलेक्ट्रॉनिक रूप से रद्द हो सकती है। नंबर भेजें, हम रद्द करना फ़ॉलो करेंगे।" },
        { q: "क्या आप प्रतिष्ठानों की पावर ऑफ़ अटॉर्नी बनाते हैं?", a: "हाँ, बशर्ते आवेदक प्रतिष्ठान की ओर से हस्ताक्षर के लिए अधिकृत हो।" },
      ],
    },
  },

  muqeem: {
    ar: {
      primaryKeyword: "بوابة مقيم",
      secondaryKeywords: ["خدمات مقيم", "الاشتراك في مقيم", "مقيم للمنشآت", "تقارير مقيم"],
      metaDescription:
        "خدمات بوابة مقيم للمنشآت مع تسامي: نتابع اشتراك المنشأة وننفذ خدمات العمالة الوافدة مثل تجديد الإقامات والتأشيرات والتقارير بانتظام.",
      intro:
        "بوابة مقيم منصة إلكترونية للمنشآت لإدارة خدمات العمالة الوافدة، مثل إصدار الإقامات وتجديدها، وتأشيرات الخروج والعودة والخروج النهائي، وتحديث بعض البيانات واستخراج التقارير. تحتاج المنشأة اشتراكاً سارياً في البوابة. تسامي تساعدك في الاشتراك وتنفذ الخدمات بانتظام، وتنبهك للمواعيد القريبة حتى لا تتعطل عمالتك.",
      who: [
        "المنشآت التي لديها عمالة وافدة وتريد إدارة خدماتهم من مكان واحد.",
        "منشآت مشتركة في مقيم ولا يتوفر لديها موظف يتابع البوابة.",
        "منشآت جديدة تحتاج الاشتراك في مقيم لأول مرة.",
        "أصحاب العمل الذين يحتاجون تقارير دورية عن صلاحية إقامات العمالة.",
      ],
      steps: [
        "نراجع وضع اشتراك المنشأة في مقيم أو نرتب الاشتراك إن لم يكن موجوداً.",
        "نستخرج تقريراً بالعمالة ومواعيد انتهاء الإقامات والتأشيرات.",
        "ننفذ الخدمات المطلوبة مثل التجديد والخروج والعودة عبر البوابة بتفويض المنشأة.",
        "نوضح لك الرسوم الحكومية المستحقة لكل خدمة قبل تنفيذها.",
        "نرسل لك تحديثاً بعد كل خدمة وتذكيراً دورياً بالمواعيد القادمة.",
      ],
      tips: [
        "تأكد من تجديد اشتراك المنشأة في مقيم قبل انتهائه لتجنب توقف الخدمات.",
        "اطلب تقريراً دورياً بصلاحية الإقامات لتخطط للتجديدات مبكراً.",
        "حدّد مستخدمين مخولين للبوابة وراجع صلاحياتهم بانتظام.",
        "تابع رخص العمل في قوى بالتوازي مع خدمات مقيم.",
        "احتفظ ببيانات جوازات العمالة محدثة لتسهيل الخدمات.",
      ],
      local:
        "ندير خدمات مقيم لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة عن بُعد.",
      faqs: [
        { q: "ما الفرق بين مقيم وأبشر أعمال؟", a: "كلاهما يقدم خدمات العمالة للمنشآت، وتختلف بعض الخدمات والتقارير بينهما. نستخدم المنصة الأنسب لكل خدمة." },
        { q: "هل الاشتراك في مقيم إلزامي؟", a: "تحتاجه المنشأة لاستخدام خدمات البوابة. نوضح لك إن كانت منشأتك تحتاجه حسب حجم عمالتها والخدمات المطلوبة." },
        { q: "هل يمكن طباعة الإقامة من مقيم؟", a: "تتيح البوابة عدداً من خدمات الإقامة للمنشأة. نوضح لك الخدمة المتاحة حسب حالتك." },
        { q: "هل تديرون البوابة بشكل دوري؟", a: "نعم، يمكننا متابعة خدمات عمالتك بشكل مستمر مع تقارير وتذكيرات دورية." },
      ],
    },
    en: {
      primaryKeyword: "Muqeem portal services",
      secondaryKeywords: ["Muqeem services", "Muqeem subscription", "Muqeem for businesses", "Muqeem reports"],
      metaDescription:
        "Muqeem portal services for businesses with Tasami: we follow your subscription and run expat workforce services such as iqama renewals, visas and reports on a regular basis.",
      intro:
        "Muqeem is an online portal for businesses to manage expat workforce services, such as issuing and renewing iqamas, exit/re-entry and final exit visas, updating some data and extracting reports. A business needs an active portal subscription. Tasami helps you subscribe, runs the services regularly and alerts you to upcoming dates so your workforce is never disrupted.",
      who: [
        "Businesses with expat workers that want their services managed in one place.",
        "Businesses subscribed to Muqeem without an employee to follow the portal.",
        "New businesses subscribing to Muqeem for the first time.",
        "Employers who need regular reports on workers' iqama validity.",
      ],
      steps: [
        "We review your Muqeem subscription or arrange one if needed.",
        "We extract a report of workers and their iqama and visa expiry dates.",
        "We run the required services such as renewals and exit/re-entry on the portal with the business's authorization.",
        "We tell you the government fees due for each service before running it.",
        "We update you after each service and send regular reminders of upcoming dates.",
      ],
      tips: [
        "Renew the Muqeem subscription before it expires to avoid service interruption.",
        "Request a regular iqama validity report to plan renewals early.",
        "Assign authorized portal users and review their permissions regularly.",
        "Follow work permits on Qiwa alongside Muqeem services.",
        "Keep workers' passport details up to date to ease services.",
      ],
      local:
        "We manage Muqeem services for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city remotely.",
      faqs: [
        { q: "What is the difference between Muqeem and Absher Business?", a: "Both provide workforce services for businesses, with some services and reports differing. We use the most suitable platform for each service." },
        { q: "Is a Muqeem subscription mandatory?", a: "A business needs it to use the portal's services. We tell you whether your business needs it based on workforce size and required services." },
        { q: "Can an iqama be printed from Muqeem?", a: "The portal offers several iqama services for businesses. We explain what is available for your case." },
        { q: "Do you manage the portal on an ongoing basis?", a: "Yes, we can follow your workforce services continuously with regular reports and reminders." },
      ],
    },
    ur: {
      primaryKeyword: "مقیم پورٹل خدمات",
      secondaryKeywords: ["مقیم سروسز", "مقیم سبسکرپشن", "اداروں کے لیے مقیم"],
      metaDescription:
        "تسامی کے ساتھ اداروں کے لیے مقیم پورٹل خدمات: سبسکرپشن کی پیروی اور اقامہ کی تجدید، ویزے اور رپورٹس جیسی غیر ملکی کارکنوں کی خدمات باقاعدگی سے۔",
      intro:
        "مقیم اداروں کے لیے غیر ملکی کارکنوں کی خدمات کا آن لائن پورٹل ہے، جیسے اقامہ کا اجرا اور تجدید، خروج و عودہ اور فائنل ایگزٹ ویزا، کچھ معلومات کی اپڈیٹ اور رپورٹس۔ ادارے کے پاس پورٹل کی فعال سبسکرپشن ہونی چاہیے۔ تسامی سبسکرپشن میں مدد کرتا ہے، خدمات باقاعدگی سے انجام دیتا ہے اور قریبی تاریخوں سے آگاہ کرتا ہے تاکہ کارکنوں کا کام نہ رکے۔",
      who: [
        "غیر ملکی کارکنوں والے ادارے جو ان کی خدمات ایک جگہ سے سنبھالنا چاہتے ہیں۔",
        "مقیم میں سبسکرائبڈ ادارے جن کے پاس پورٹل دیکھنے والا ملازم نہیں۔",
        "نئے ادارے جو پہلی بار مقیم میں سبسکرائب کر رہے ہیں۔",
        "آجر جنہیں اقامہ کی میعاد کی باقاعدہ رپورٹ چاہیے۔",
      ],
      steps: [
        "ادارے کی مقیم سبسکرپشن دیکھتے ہیں یا ضرورت ہو تو سبسکرپشن کرواتے ہیں۔",
        "کارکنوں اور ان کے اقامہ و ویزا کی تاریخوں کی رپورٹ نکالتے ہیں۔",
        "ادارے کی اجازت سے پورٹل پر تجدید اور خروج و عودہ جیسی خدمات انجام دیتے ہیں۔",
        "ہر خدمت سے پہلے متعلقہ سرکاری فیس بتاتے ہیں۔",
        "ہر خدمت کے بعد اپڈیٹ اور آئندہ تاریخوں کی باقاعدہ یاد دہانی بھیجتے ہیں۔",
      ],
      tips: [
        "خدمات رکنے سے بچنے کے لیے مقیم سبسکرپشن ختم ہونے سے پہلے تجدید کریں۔",
        "تجدید کی پیشگی منصوبہ بندی کے لیے اقامہ کی میعاد کی رپورٹ باقاعدگی سے لیں۔",
        "پورٹل کے مجاز صارفین طے کریں اور ان کے اختیارات دیکھتے رہیں۔",
        "مقیم کے ساتھ قوی میں ورک پرمٹ بھی فالو کریں۔",
        "کارکنوں کے پاسپورٹ کی معلومات اپڈیٹ رکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کی مقیم خدمات دور سے سنبھالتے ہیں۔",
      faqs: [
        { q: "مقیم اور ابشر بزنس میں کیا فرق ہے؟", a: "دونوں اداروں کو کارکنوں کی خدمات دیتے ہیں اور کچھ خدمات و رپورٹس مختلف ہیں۔ ہم ہر خدمت کے لیے مناسب پلیٹ فارم استعمال کرتے ہیں۔" },
        { q: "کیا مقیم سبسکرپشن لازمی ہے؟", a: "پورٹل کی خدمات استعمال کرنے کے لیے ضروری ہے۔ ہم بتاتے ہیں کہ آپ کے ادارے کو اس کی ضرورت ہے یا نہیں۔" },
        { q: "کیا مقیم سے اقامہ پرنٹ ہو سکتا ہے؟", a: "پورٹل اداروں کو اقامہ کی کئی خدمات دیتا ہے۔ ہم آپ کے معاملے میں دستیاب خدمت بتاتے ہیں۔" },
        { q: "کیا آپ پورٹل مسلسل سنبھالتے ہیں؟", a: "جی ہاں، ہم باقاعدہ رپورٹس اور یاد دہانیوں کے ساتھ مسلسل خدمات فالو کر سکتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "मुक़ीम पोर्टल सेवाएँ",
      secondaryKeywords: ["मुक़ीम सर्विसेज़", "मुक़ीम सब्सक्रिप्शन", "प्रतिष्ठानों के लिए मुक़ीम"],
      metaDescription:
        "तसामी के साथ प्रतिष्ठानों के लिए मुक़ीम पोर्टल सेवाएँ: सब्सक्रिप्शन फ़ॉलो-अप और इक़ामा नवीनीकरण, वीज़ा व रिपोर्ट जैसी प्रवासी कर्मचारी सेवाएँ नियमित रूप से।",
      intro:
        "मुक़ीम प्रतिष्ठानों के लिए प्रवासी कर्मचारी सेवाओं का ऑनलाइन पोर्टल है, जैसे इक़ामा जारी और नवीनीकरण, एग्ज़िट/री-एंट्री और फ़ाइनल एग्ज़िट वीज़ा, कुछ जानकारी अपडेट करना और रिपोर्ट निकालना। प्रतिष्ठान के पास पोर्टल का सक्रिय सब्सक्रिप्शन होना चाहिए। तसामी सब्सक्रिप्शन में मदद करता है, सेवाएँ नियमित रूप से करता है और नज़दीकी तारीख़ों की सूचना देता है ताकि कर्मचारियों का काम न रुके।",
      who: [
        "प्रवासी कर्मचारियों वाले प्रतिष्ठान जो उनकी सेवाएँ एक जगह से संभालना चाहते हैं।",
        "मुक़ीम में सब्सक्राइब्ड प्रतिष्ठान जिनके पास पोर्टल देखने वाला कर्मचारी नहीं है।",
        "नए प्रतिष्ठान जो पहली बार मुक़ीम में सब्सक्राइब कर रहे हैं।",
        "नियोक्ता जिन्हें इक़ामा वैधता की नियमित रिपोर्ट चाहिए।",
      ],
      steps: [
        "प्रतिष्ठान का मुक़ीम सब्सक्रिप्शन देखते हैं या ज़रूरत हो तो कराते हैं।",
        "कर्मचारियों और उनके इक़ामा व वीज़ा की तारीख़ों की रिपोर्ट निकालते हैं।",
        "प्रतिष्ठान की अनुमति से पोर्टल पर नवीनीकरण और एग्ज़िट/री-एंट्री जैसी सेवाएँ करते हैं।",
        "हर सेवा से पहले संबंधित सरकारी फ़ीस बताते हैं।",
        "हर सेवा के बाद अपडेट और आने वाली तारीख़ों की नियमित याद भेजते हैं।",
      ],
      tips: [
        "सेवाएँ रुकने से बचने के लिए मुक़ीम सब्सक्रिप्शन ख़त्म होने से पहले रिन्यू करें।",
        "नवीनीकरण की पहले से योजना के लिए इक़ामा वैधता रिपोर्ट नियमित लें।",
        "पोर्टल के अधिकृत उपयोगकर्ता तय करें और उनकी अनुमतियाँ जाँचते रहें।",
        "मुक़ीम के साथ क़िवा में वर्क परमिट भी फ़ॉलो करें।",
        "कर्मचारियों के पासपोर्ट की जानकारी अपडेट रखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के प्रतिष्ठानों की मुक़ीम सेवाएँ दूर से संभालते हैं।",
      faqs: [
        { q: "मुक़ीम और अबशर बिज़नेस में क्या फ़र्क़ है?", a: "दोनों प्रतिष्ठानों को कर्मचारी सेवाएँ देते हैं और कुछ सेवाएँ व रिपोर्ट अलग हैं। हम हर सेवा के लिए सही प्लेटफ़ॉर्म इस्तेमाल करते हैं।" },
        { q: "क्या मुक़ीम सब्सक्रिप्शन अनिवार्य है?", a: "पोर्टल की सेवाएँ इस्तेमाल करने के लिए ज़रूरी है। हम बताते हैं कि आपके प्रतिष्ठान को इसकी ज़रूरत है या नहीं।" },
        { q: "क्या मुक़ीम से इक़ामा प्रिंट हो सकता है?", a: "पोर्टल प्रतिष्ठानों को इक़ामा की कई सेवाएँ देता है। हम आपके मामले में उपलब्ध सेवा बताते हैं।" },
        { q: "क्या आप पोर्टल लगातार संभालते हैं?", a: "हाँ, हम नियमित रिपोर्ट और याद-दिहानी के साथ लगातार सेवाएँ फ़ॉलो कर सकते हैं।" },
      ],
    },
  },
};
