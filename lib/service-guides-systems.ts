import type { GuideDef } from "./service-guides";

/**
 * Systems, automation and AI offering guides. No prices, fixed timelines or claimed vendor partnerships.
 */
export const SYSTEMS_GUIDES: Record<string, GuideDef> = {
  crmSystem: {
    ar: {
      primaryKeyword: "نظام CRM لإدارة العملاء",
      secondaryKeywords: ["برنامج إدارة علاقات العملاء", "نظام CRM في السعودية", "ربط CRM بالواتساب", "إدارة المبيعات والعملاء المحتملين"],
      metaDescription:
        "نظام CRM لإدارة العملاء والمبيعات مع تسامي: نجهز نظاماً جاهزاً أو مخصصاً، ونربطه بالواتساب والموقع، ونرحّل بياناتك وندرب فريقك.",
      intro:
        "عندما تتوزع بيانات العملاء بين الواتساب والجداول ودفاتر الموظفين تضيع فرص بيع كثيرة. نظام إدارة علاقات العملاء (CRM) يجمع كل عميل وتواصله وطلباته ومرحلة البيع في مكان واحد، ويذكّر فريقك بالمتابعة في وقتها. تسامي تساعدك في اختيار نظام جاهز مناسب أو بناء نظام مخصص، ثم تربطه بقنواتك وتدرب فريقك على استخدامه.",
      who: [
        "فرق المبيعات التي تتابع العملاء المحتملين يدوياً.",
        "الشركات التي تستقبل استفسارات كثيرة عبر الواتساب والموقع.",
        "مكاتب الخدمات والعقار والتدريب التي تحتاج متابعة دقيقة لكل عميل.",
        "المنشآت التي تريد تقارير واضحة عن أداء المبيعات.",
      ],
      steps: [
        "نفهم رحلة العميل لديك من أول تواصل حتى إتمام البيع.",
        "نرشح نظاماً جاهزاً أو نخطط لنظام مخصص حسب احتياجك.",
        "نضبط مراحل البيع والحقول والصلاحيات والتنبيهات.",
        "نربط النظام بالواتساب ونماذج الموقع ونرحّل البيانات الحالية.",
        "ندرب الفريق ونتابع الاستخدام في الأسابيع الأولى لضبط التفاصيل.",
      ],
      tips: [
        "ابدأ بمراحل بيع بسيطة ثم طوّرها مع الاستخدام.",
        "نظّف بيانات العملاء الحالية قبل ترحيلها للنظام.",
        "حدد مسؤولاً عن كل عميل لتجنب ضياع المتابعة.",
        "اربط النظام بالقنوات التي يتواصل منها عملاؤك فعلاً.",
        "راجع تقارير المبيعات أسبوعياً لتستفيد من النظام.",
      ],
      local:
        "نجهز أنظمة CRM لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، مع تدريب عن بُعد أو حضورياً حسب الاتفاق.",
      faqs: [
        { q: "نظام جاهز أم مخصص؟", a: "الأنظمة الجاهزة أسرع للبدء وتناسب معظم الفرق، والمخصص يناسب الإجراءات الخاصة. نرشح لك بعد فهم طريقة عملك." },
        { q: "هل يمكن ربط CRM بالواتساب؟", a: "نعم، نربطه عبر واتساب للأعمال (API) حتى تُسجل المحادثات والعملاء تلقائياً." },
        { q: "هل تنقلون بياناتنا الحالية؟", a: "نعم، نرحّل بيانات العملاء من الجداول أو الأنظمة السابقة بعد تنظيفها." },
        { q: "هل تدربون الموظفين؟", a: "نعم، ندرب الفريق ونجهز دليلاً مختصراً للاستخدام اليومي." },
      ],
    },
    en: {
      primaryKeyword: "CRM system in Saudi Arabia",
      secondaryKeywords: ["customer relationship management software", "CRM WhatsApp integration", "sales pipeline management", "lead management system"],
      metaDescription:
        "CRM system for customer and sales management with Tasami: we set up a ready or custom CRM, connect it to WhatsApp and your website, migrate your data and train your team.",
      intro:
        "When customer data is spread across WhatsApp, spreadsheets and staff notebooks, many sales opportunities are lost. A customer relationship management (CRM) system gathers every customer, conversation, request and sales stage in one place and reminds your team to follow up on time. Tasami helps you choose a suitable ready CRM or build a custom one, then connects it to your channels and trains your team.",
      who: [
        "Sales teams tracking leads manually.",
        "Companies receiving many inquiries over WhatsApp and the website.",
        "Service, real estate and training offices needing precise follow-up for each client.",
        "Businesses wanting clear sales performance reports.",
      ],
      steps: [
        "We understand your customer journey from first contact to closed sale.",
        "We recommend a ready system or plan a custom one for your needs.",
        "We configure sales stages, fields, permissions and alerts.",
        "We connect the system to WhatsApp and website forms and migrate existing data.",
        "We train the team and follow usage in the first weeks to fine-tune details.",
      ],
      tips: [
        "Start with simple sales stages and refine them with use.",
        "Clean existing customer data before migrating it.",
        "Assign an owner for every customer so follow-ups are not lost.",
        "Connect the system to the channels your customers actually use.",
        "Review sales reports weekly to benefit from the system.",
      ],
      local:
        "We set up CRM systems for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, with remote or on-site training as agreed.",
      faqs: [
        { q: "Ready or custom CRM?", a: "Ready systems are faster to start and suit most teams; custom suits special processes. We recommend after understanding how you work." },
        { q: "Can a CRM connect to WhatsApp?", a: "Yes, via the WhatsApp Business API so conversations and customers are logged automatically." },
        { q: "Do you migrate our current data?", a: "Yes, we migrate customer data from spreadsheets or previous systems after cleaning it." },
        { q: "Do you train staff?", a: "Yes, we train the team and prepare a short guide for daily use." },
      ],
    },
    ur: {
      primaryKeyword: "CRM سسٹم",
      secondaryKeywords: ["کسٹمر ریلیشن شپ مینجمنٹ", "CRM واٹس ایپ انٹیگریشن", "سیلز پائپ لائن"],
      metaDescription:
        "تسامی کے ساتھ گاہکوں اور سیلز کے انتظام کے لیے CRM سسٹم: تیار یا خصوصی سسٹم، واٹس ایپ اور ویب سائٹ سے جوڑنا، ڈیٹا منتقلی اور ٹیم کی تربیت۔",
      intro:
        "جب گاہکوں کا ڈیٹا واٹس ایپ، اسپریڈ شیٹس اور ملازمین کی نوٹ بکس میں بکھرا ہو تو فروخت کے کئی مواقع ضائع ہوتے ہیں۔ CRM سسٹم ہر گاہک، اس کی بات چیت، درخواستیں اور فروخت کا مرحلہ ایک جگہ جمع کرتا ہے اور ٹیم کو بروقت فالو اپ یاد دلاتا ہے۔ تسامی مناسب تیار سسٹم منتخب کرنے یا خصوصی سسٹم بنانے میں مدد کر کے اسے آپ کے چینلز سے جوڑتا اور ٹیم کو تربیت دیتا ہے۔",
      who: [
        "سیلز ٹیمیں جو ممکنہ گاہکوں کو دستی طور پر فالو کرتی ہیں۔",
        "کمپنیاں جنہیں واٹس ایپ اور ویب سائٹ پر بہت سی پوچھ گچھ ملتی ہے۔",
        "سروس، رئیل اسٹیٹ اور تربیتی دفاتر جنہیں ہر گاہک کا درست فالو اپ چاہیے۔",
        "کاروبار جو سیلز کارکردگی کی واضح رپورٹس چاہتے ہیں۔",
      ],
      steps: [
        "پہلے رابطے سے فروخت مکمل ہونے تک گاہک کا سفر سمجھتے ہیں۔",
        "تیار سسٹم تجویز کرتے ہیں یا خصوصی سسٹم کی منصوبہ بندی کرتے ہیں۔",
        "سیلز مراحل، فیلڈز، اجازتیں اور الرٹس سیٹ کرتے ہیں۔",
        "سسٹم کو واٹس ایپ اور ویب فارمز سے جوڑ کر موجودہ ڈیٹا منتقل کرتے ہیں۔",
        "ٹیم کو تربیت دے کر پہلے ہفتوں میں استعمال فالو کرتے ہیں۔",
      ],
      tips: [
        "سادہ سیلز مراحل سے شروع کر کے استعمال کے ساتھ بہتر بنائیں۔",
        "منتقلی سے پہلے موجودہ ڈیٹا صاف کریں۔",
        "ہر گاہک کا ذمہ دار مقرر کریں۔",
        "سسٹم کو ان چینلز سے جوڑیں جو گاہک واقعی استعمال کرتے ہیں۔",
        "ہفتہ وار سیلز رپورٹس دیکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کے لیے CRM سیٹ کرتے ہیں، تربیت دور سے یا حاضری کے ساتھ۔",
      faqs: [
        { q: "تیار یا خصوصی CRM؟", a: "تیار سسٹم شروع کرنے میں تیز اور زیادہ تر ٹیموں کے لیے موزوں ہیں؛ خصوصی، خاص طریقہ کار کے لیے۔" },
        { q: "کیا CRM واٹس ایپ سے جڑ سکتا ہے؟", a: "جی ہاں، واٹس ایپ بزنس API کے ذریعے تاکہ بات چیت خودکار ریکارڈ ہو۔" },
        { q: "کیا آپ موجودہ ڈیٹا منتقل کرتے ہیں؟", a: "جی ہاں، صفائی کے بعد اسپریڈ شیٹس یا پرانے سسٹمز سے۔" },
        { q: "کیا آپ ملازمین کو تربیت دیتے ہیں؟", a: "جی ہاں، تربیت اور روزمرہ استعمال کی مختصر گائیڈ کے ساتھ۔" },
      ],
    },
    hi: {
      primaryKeyword: "CRM सिस्टम",
      secondaryKeywords: ["कस्टमर रिलेशनशिप मैनेजमेंट", "CRM व्हाट्सऐप इंटीग्रेशन", "सेल्स पाइपलाइन"],
      metaDescription:
        "तसामी के साथ ग्राहक और सेल्स प्रबंधन के लिए CRM सिस्टम: तैयार या कस्टम सिस्टम, व्हाट्सऐप और वेबसाइट से जोड़ना, डेटा माइग्रेशन और टीम प्रशिक्षण।",
      intro:
        "जब ग्राहकों का डेटा व्हाट्सऐप, स्प्रेडशीट और कर्मचारियों की नोटबुक में बिखरा हो तो बिक्री के कई मौक़े खो जाते हैं। CRM सिस्टम हर ग्राहक, उसकी बातचीत, अनुरोध और बिक्री का चरण एक जगह जमा करता है और टीम को समय पर फ़ॉलो-अप याद दिलाता है। तसामी सही तैयार सिस्टम चुनने या कस्टम सिस्टम बनाने में मदद कर उसे आपके चैनलों से जोड़ता और टीम को प्रशिक्षण देता है।",
      who: [
        "सेल्स टीमें जो संभावित ग्राहकों को मैनुअल फ़ॉलो करती हैं।",
        "कंपनियाँ जिन्हें व्हाट्सऐप और वेबसाइट पर बहुत पूछताछ मिलती है।",
        "सेवा, रियल एस्टेट और प्रशिक्षण दफ़्तर जिन्हें हर ग्राहक का सटीक फ़ॉलो-अप चाहिए।",
        "व्यवसाय जो सेल्स प्रदर्शन की साफ़ रिपोर्ट चाहते हैं।",
      ],
      steps: [
        "पहले संपर्क से बिक्री पूरी होने तक ग्राहक की यात्रा समझते हैं।",
        "तैयार सिस्टम सुझाते हैं या कस्टम सिस्टम की योजना बनाते हैं।",
        "सेल्स चरण, फ़ील्ड, अनुमतियाँ और अलर्ट सेट करते हैं।",
        "सिस्टम को व्हाट्सऐप और वेब फ़ॉर्म से जोड़कर मौजूदा डेटा ले जाते हैं।",
        "टीम को प्रशिक्षण देकर पहले हफ़्तों में इस्तेमाल फ़ॉलो करते हैं।",
      ],
      tips: [
        "सरल सेल्स चरणों से शुरू कर इस्तेमाल के साथ बेहतर बनाएँ।",
        "माइग्रेशन से पहले मौजूदा डेटा साफ़ करें।",
        "हर ग्राहक का ज़िम्मेदार तय करें।",
        "सिस्टम को उन चैनलों से जोड़ें जो ग्राहक सच में इस्तेमाल करते हैं।",
        "हर हफ़्ते सेल्स रिपोर्ट देखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों के लिए CRM सेट करते हैं, प्रशिक्षण दूर से या मौक़े पर।",
      faqs: [
        { q: "तैयार या कस्टम CRM?", a: "तैयार सिस्टम शुरू करने में तेज़ और ज़्यादातर टीमों के लिए उपयुक्त हैं; कस्टम ख़ास प्रक्रियाओं के लिए।" },
        { q: "क्या CRM व्हाट्सऐप से जुड़ सकता है?", a: "हाँ, व्हाट्सऐप बिज़नेस API के ज़रिए ताकि बातचीत अपने-आप दर्ज हो।" },
        { q: "क्या आप मौजूदा डेटा ले जाते हैं?", a: "हाँ, सफ़ाई के बाद स्प्रेडशीट या पुराने सिस्टम से।" },
        { q: "क्या आप कर्मचारियों को प्रशिक्षण देते हैं?", a: "हाँ, प्रशिक्षण और रोज़ाना इस्तेमाल की छोटी गाइड के साथ।" },
      ],
    },
  },

  erpPos: {
    ar: {
      primaryKeyword: "نظام ERP ونقاط بيع",
      secondaryKeywords: ["نظام نقاط بيع POS", "نظام محاسبي ومخزون", "برنامج ERP للشركات", "نظام كاشير متوافق مع الفوترة"],
      metaDescription:
        "تجهيز نظام ERP ونقاط بيع (POS) مع تسامي: المبيعات والمخزون والمحاسبة والمشتريات في نظام واحد، مع ربط الفوترة الإلكترونية وتدريب الفريق.",
      intro:
        "مع نمو المنشأة يصبح التنقل بين برنامج للكاشير وآخر للمخزون وجداول للمحاسبة مصدراً للأخطاء والتأخير. نظام تخطيط موارد المنشأة (ERP) مع نقاط البيع (POS) يربط المبيعات والمخزون والمشتريات والمحاسبة في نظام واحد، ويعطيك تقارير لحظية. تسامي تساعدك في اختيار النظام المناسب وتجهيزه وربطه بالفوترة الإلكترونية ونقل بياناتك وتدريب فريقك.",
      who: [
        "المطاعم والمقاهي والمحلات التي تحتاج كاشيراً مرتبطاً بالمخزون.",
        "الشركات التجارية ذات الفروع أو المستودعات المتعددة.",
        "المنشآت التي تريد ربط المبيعات بالمحاسبة بدون إدخال يدوي.",
        "من يحتاج نظاماً متوافقاً مع متطلبات الفوترة الإلكترونية.",
      ],
      steps: [
        "نحلل إجراءات البيع والشراء والمخزون والمحاسبة لديك.",
        "نرشح النظام المناسب لحجم منشأتك ونشاطها.",
        "نجهز الأصناف والفروع والمستخدمين والصلاحيات وأجهزة نقاط البيع.",
        "نربط النظام بالفوترة الإلكترونية والمتجر الإلكتروني عند الحاجة ونرحّل البيانات.",
        "ندرب الموظفين ونرافقكم في أيام التشغيل الأولى.",
      ],
      tips: [
        "جهّز قائمة الأصناف والأسعار والأرصدة الافتتاحية قبل البدء.",
        "اختر نظاماً يتوسع معك إذا كنت تخطط لفروع جديدة.",
        "تأكد من توافق النظام مع متطلبات الفوترة الإلكترونية.",
        "حدد صلاحيات الموظفين بدقة لحماية البيانات المالية.",
        "شغّل النظام الجديد بالتوازي مع القديم لفترة قصيرة.",
      ],
      local:
        "نجهز أنظمة ERP ونقاط البيع لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة.",
      faqs: [
        { q: "ما الفرق بين ERP ونقاط البيع؟", a: "نقاط البيع هي الكاشير وتسجيل المبيعات، والـERP يشمل المخزون والمشتريات والمحاسبة والتقارير. نربطهما معاً." },
        { q: "هل النظام متوافق مع الفوترة الإلكترونية؟", a: "نختار أنظمة تدعم متطلبات الفوترة الإلكترونية ونساعدك في ربطها، وتأكيد التوافق يكون وفق متطلبات هيئة الزكاة والضريبة والجمارك." },
        { q: "هل يمكن ربطه بالمتجر الإلكتروني؟", a: "نعم، حسب النظام والمنصة يمكن مزامنة المخزون والطلبات بينهما." },
        { q: "هل توفرون أجهزة الكاشير؟", a: "نوضح لك مواصفات الأجهزة المتوافقة مع النظام ونساعدك في تجهيزها وربطها." },
      ],
    },
    en: {
      primaryKeyword: "ERP and POS system in Saudi Arabia",
      secondaryKeywords: ["point of sale system", "accounting and inventory system", "ERP for companies", "e-invoicing compliant POS"],
      metaDescription:
        "ERP and point-of-sale (POS) setup with Tasami: sales, inventory, accounting and purchasing in one system, with e-invoicing integration and team training.",
      intro:
        "As a business grows, switching between a cashier program, an inventory program and accounting spreadsheets becomes a source of errors and delays. An enterprise resource planning (ERP) system with point of sale (POS) links sales, inventory, purchasing and accounting in one system and gives you real-time reports. Tasami helps you choose the right system, set it up, connect it to e-invoicing, migrate your data and train your team.",
      who: [
        "Restaurants, cafés and shops needing a cashier linked to inventory.",
        "Trading companies with multiple branches or warehouses.",
        "Businesses wanting sales linked to accounting without manual entry.",
        "Anyone needing a system aligned with e-invoicing requirements.",
      ],
      steps: [
        "We analyze your sales, purchasing, inventory and accounting processes.",
        "We recommend the right system for your size and activity.",
        "We set up items, branches, users, permissions and POS devices.",
        "We connect the system to e-invoicing and your online store if needed, and migrate data.",
        "We train staff and support you through the first operating days.",
      ],
      tips: [
        "Prepare your item list, prices and opening balances before starting.",
        "Choose a system that scales if you plan new branches.",
        "Confirm the system meets e-invoicing requirements.",
        "Set staff permissions carefully to protect financial data.",
        "Run the new system in parallel with the old one briefly.",
      ],
      local:
        "We set up ERP and POS systems for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city.",
      faqs: [
        { q: "What is the difference between ERP and POS?", a: "POS is the cashier and sales recording; ERP covers inventory, purchasing, accounting and reports. We connect both." },
        { q: "Is the system e-invoicing compliant?", a: "We choose systems that support e-invoicing requirements and help integrate them; compliance is confirmed against ZATCA requirements." },
        { q: "Can it connect to my online store?", a: "Yes, depending on the system and platform, inventory and orders can be synced." },
        { q: "Do you supply cashier hardware?", a: "We specify compatible hardware and help you set it up and connect it." },
      ],
    },
    ur: {
      primaryKeyword: "ERP اور POS سسٹم",
      secondaryKeywords: ["پوائنٹ آف سیل سسٹم", "اکاؤنٹنگ اور انوینٹری سسٹم", "ای انوائسنگ والا کیشیئر"],
      metaDescription:
        "تسامی کے ساتھ ERP اور پوائنٹ آف سیل سیٹ اپ: سیلز، انوینٹری، اکاؤنٹنگ اور خریداری ایک سسٹم میں، ای انوائسنگ انٹیگریشن اور ٹیم تربیت کے ساتھ۔",
      intro:
        "کاروبار بڑھنے پر کیشیئر، انوینٹری اور اکاؤنٹنگ کے الگ الگ پروگرام غلطیوں اور تاخیر کا سبب بنتے ہیں۔ ERP سسٹم پوائنٹ آف سیل کے ساتھ سیلز، انوینٹری، خریداری اور اکاؤنٹنگ کو ایک سسٹم میں جوڑتا اور فوری رپورٹس دیتا ہے۔ تسامی مناسب سسٹم منتخب کرنے، سیٹ کرنے، ای انوائسنگ سے جوڑنے، ڈیٹا منتقل کرنے اور ٹیم کو تربیت دینے میں مدد کرتا ہے۔",
      who: [
        "ریستوران، کیفے اور دکانیں جنہیں انوینٹری سے جڑا کیشیئر چاہیے۔",
        "کئی شاخوں یا گوداموں والی تجارتی کمپنیاں۔",
        "کاروبار جو دستی اندراج کے بغیر سیلز کو اکاؤنٹنگ سے جوڑنا چاہتے ہیں۔",
        "جنہیں ای انوائسنگ تقاضوں کے مطابق سسٹم چاہیے۔",
      ],
      steps: [
        "سیلز، خریداری، انوینٹری اور اکاؤنٹنگ کے طریقہ کار کا تجزیہ کرتے ہیں۔",
        "آپ کے سائز اور سرگرمی کے مطابق سسٹم تجویز کرتے ہیں۔",
        "آئٹمز، شاخیں، صارفین، اجازتیں اور POS ڈیوائسز سیٹ کرتے ہیں۔",
        "ضرورت ہو تو ای انوائسنگ اور آن لائن اسٹور سے جوڑ کر ڈیٹا منتقل کرتے ہیں۔",
        "ملازمین کو تربیت دے کر ابتدائی دنوں میں ساتھ رہتے ہیں۔",
      ],
      tips: [
        "شروع سے پہلے آئٹمز، قیمتیں اور ابتدائی بیلنس تیار رکھیں۔",
        "نئی شاخوں کا ارادہ ہو تو بڑھنے والا سسٹم چنیں۔",
        "ای انوائسنگ تقاضوں سے مطابقت کی تصدیق کریں۔",
        "مالی ڈیٹا کی حفاظت کے لیے اجازتیں احتیاط سے دیں۔",
        "نیا سسٹم کچھ عرصہ پرانے کے ساتھ چلائیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کے لیے ERP اور POS سیٹ کرتے ہیں۔",
      faqs: [
        { q: "ERP اور POS میں کیا فرق ہے؟", a: "POS کیشیئر اور سیلز ریکارڈ ہے؛ ERP میں انوینٹری، خریداری، اکاؤنٹنگ اور رپورٹس شامل ہیں۔ ہم دونوں جوڑتے ہیں۔" },
        { q: "کیا سسٹم ای انوائسنگ کے مطابق ہے؟", a: "ہم ای انوائسنگ سپورٹ والے سسٹم چنتے اور جوڑتے ہیں؛ مطابقت زکاۃ، ٹیکس و کسٹمز اتھارٹی کے تقاضوں کے مطابق ہوتی ہے۔" },
        { q: "کیا یہ آن لائن اسٹور سے جڑ سکتا ہے؟", a: "جی ہاں، سسٹم اور پلیٹ فارم کے مطابق انوینٹری اور آرڈرز ہم آہنگ ہو سکتے ہیں۔" },
        { q: "کیا آپ کیشیئر ڈیوائسز دیتے ہیں؟", a: "ہم موزوں ڈیوائسز کی تفصیل بتا کر انہیں سیٹ اور جوڑنے میں مدد کرتے ہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "ERP और POS सिस्टम",
      secondaryKeywords: ["पॉइंट ऑफ़ सेल सिस्टम", "अकाउंटिंग और इन्वेंटरी सिस्टम", "ई-इनवॉइसिंग वाला कैशियर"],
      metaDescription:
        "तसामी के साथ ERP और पॉइंट ऑफ़ सेल सेटअप: सेल्स, इन्वेंटरी, अकाउंटिंग और ख़रीद एक सिस्टम में, ई-इनवॉइसिंग इंटीग्रेशन और टीम प्रशिक्षण के साथ।",
      intro:
        "व्यवसाय बढ़ने पर कैशियर, इन्वेंटरी और अकाउंटिंग के अलग-अलग प्रोग्राम ग़लतियों और देरी का कारण बनते हैं। ERP सिस्टम पॉइंट ऑफ़ सेल के साथ सेल्स, इन्वेंटरी, ख़रीद और अकाउंटिंग को एक सिस्टम में जोड़ता और तुरंत रिपोर्ट देता है। तसामी सही सिस्टम चुनने, सेट करने, ई-इनवॉइसिंग से जोड़ने, डेटा ले जाने और टीम को प्रशिक्षण देने में मदद करता है।",
      who: [
        "रेस्टोरेंट, कैफ़े और दुकानें जिन्हें इन्वेंटरी से जुड़ा कैशियर चाहिए।",
        "कई शाखाओं या गोदामों वाली ट्रेडिंग कंपनियाँ।",
        "व्यवसाय जो मैनुअल एंट्री के बिना सेल्स को अकाउंटिंग से जोड़ना चाहते हैं।",
        "जिन्हें ई-इनवॉइसिंग ज़रूरतों के अनुसार सिस्टम चाहिए।",
      ],
      steps: [
        "सेल्स, ख़रीद, इन्वेंटरी और अकाउंटिंग प्रक्रियाओं का विश्लेषण करते हैं।",
        "आपके आकार और गतिविधि के अनुसार सिस्टम सुझाते हैं।",
        "आइटम, शाखाएँ, यूज़र, अनुमतियाँ और POS डिवाइस सेट करते हैं।",
        "ज़रूरत हो तो ई-इनवॉइसिंग और ऑनलाइन स्टोर से जोड़कर डेटा ले जाते हैं।",
        "कर्मचारियों को प्रशिक्षण देकर शुरुआती दिनों में साथ रहते हैं।",
      ],
      tips: [
        "शुरू से पहले आइटम, क़ीमतें और शुरुआती बैलेंस तैयार रखें।",
        "नई शाखाओं की योजना हो तो बढ़ने वाला सिस्टम चुनें।",
        "ई-इनवॉइसिंग ज़रूरतों से मेल की पुष्टि करें।",
        "वित्तीय डेटा की सुरक्षा के लिए अनुमतियाँ सावधानी से दें।",
        "नया सिस्टम कुछ समय पुराने के साथ चलाएँ।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों के लिए ERP और POS सेट करते हैं।",
      faqs: [
        { q: "ERP और POS में क्या फ़र्क़ है?", a: "POS कैशियर और सेल्स रिकॉर्ड है; ERP में इन्वेंटरी, ख़रीद, अकाउंटिंग और रिपोर्ट शामिल हैं। हम दोनों जोड़ते हैं।" },
        { q: "क्या सिस्टम ई-इनवॉइसिंग के अनुरूप है?", a: "हम ई-इनवॉइसिंग सपोर्ट वाले सिस्टम चुनते और जोड़ते हैं; अनुरूपता ZATCA की ज़रूरतों के अनुसार होती है।" },
        { q: "क्या यह ऑनलाइन स्टोर से जुड़ सकता है?", a: "हाँ, सिस्टम और प्लेटफ़ॉर्म के अनुसार इन्वेंटरी और ऑर्डर सिंक हो सकते हैं।" },
        { q: "क्या आप कैशियर डिवाइस देते हैं?", a: "हम उपयुक्त डिवाइस की जानकारी देकर उन्हें सेट करने और जोड़ने में मदद करते हैं।" },
      ],
    },
  },

  whatsappApi: {
    ar: {
      primaryKeyword: "واتساب للأعمال API",
      secondaryKeywords: ["ربط واتساب API", "واتساب بزنس API في السعودية", "رسائل واتساب جماعية رسمية", "توثيق حساب واتساب للأعمال"],
      metaDescription:
        "ربط واتساب للأعمال API مع تسامي: تجهيز الحساب الرسمي، قوالب الرسائل المعتمدة، الردود الآلية، وربطه بالمتجر أو نظام CRM لخدمة عملائك بكفاءة.",
      intro:
        "عندما تكبر محادثات العملاء لا يكفي تطبيق واتساب للأعمال على جوال واحد. منصة واتساب للأعمال (API) من ميتا تسمح بأكثر من موظف على الرقم نفسه، وردود آلية، وإشعارات طلبات وتذكير بقوالب معتمدة، وربط بالمتجر ونظام إدارة العملاء. تسامي تجهز لك الحساب والربط التقني وتصمم سيناريوهات المحادثة بما يتوافق مع سياسات ميتا.",
      who: [
        "المتاجر التي تريد إرسال تأكيد الطلب والشحن تلقائياً على واتساب.",
        "الشركات التي يرد فيها أكثر من موظف على رقم خدمة العملاء.",
        "العيادات والمكاتب التي ترسل تذكيرات مواعيد بشكل منتظم.",
        "من يريد ربط واتساب بنظام CRM أو شات بوت ذكي.",
      ],
      steps: [
        "نراجع احتياجك: الرد على العملاء، أو الإشعارات، أو الحملات، أو جميعها.",
        "نجهز حساب ميتا للأعمال والرقم المخصص ونساعد في توثيق النشاط.",
        "نصمم قوالب الرسائل ونقدمها لاعتماد ميتا.",
        "نربط الواتساب بالمتجر أو نظام CRM أو لوحة محادثات للفريق.",
        "نختبر السيناريوهات ونسلمك النظام مع شرح سياسات الإرسال.",
      ],
      tips: [
        "استخدم رقماً مخصصاً للعمل غير مستخدم في تطبيق واتساب العادي.",
        "اجمع موافقة العملاء قبل إرسال رسائل تسويقية لهم.",
        "اكتب قوالب واضحة ومفيدة لترتفع فرصة اعتمادها.",
        "اترك دائماً خياراً للتحدث مع موظف حقيقي.",
        "راقب جودة الحساب في لوحة ميتا لتجنب تقييد الإرسال.",
      ],
      local:
        "نربط واتساب API لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة عن بُعد.",
      faqs: [
        { q: "ما الفرق بين تطبيق واتساب للأعمال وواتساب API؟", a: "التطبيق يعمل على جهاز واحد بإمكانات محدودة، والـAPI يتيح عدة موظفين وردوداً آلية وربطاً بالأنظمة وإشعارات بقوالب معتمدة." },
        { q: "هل توجد رسوم من ميتا؟", a: "ميتا تحتسب رسوماً على بعض أنواع المحادثات حسب سياستها المعلنة، ونوضح لك آلية الاحتساب قبل التشغيل." },
        { q: "هل يمكن استخدام رقمي الحالي؟", a: "يمكن غالباً بعد فصله عن تطبيق واتساب العادي، ونوضح لك الخطوات والتبعات قبل النقل." },
        { q: "هل يمكن إضافة شات بوت؟", a: "نعم، نربط شات بوت ذكي يرد بالعربية ويحوّل للموظف عند الحاجة." },
      ],
    },
    en: {
      primaryKeyword: "WhatsApp Business API in Saudi Arabia",
      secondaryKeywords: ["WhatsApp API integration", "official WhatsApp broadcast messages", "WhatsApp Business verification", "WhatsApp CRM integration"],
      metaDescription:
        "WhatsApp Business API integration with Tasami: official account setup, approved message templates, automated replies, and connection to your store or CRM to serve customers efficiently.",
      intro:
        "When customer conversations grow, the WhatsApp Business app on one phone is no longer enough. Meta's WhatsApp Business Platform (API) allows several agents on the same number, automated replies, order notifications and reminders through approved templates, and integration with your store and CRM. Tasami sets up the account and technical integration and designs conversation flows in line with Meta's policies.",
      who: [
        "Stores wanting automatic order and shipping confirmations on WhatsApp.",
        "Companies where several agents answer the customer service number.",
        "Clinics and offices sending regular appointment reminders.",
        "Anyone wanting WhatsApp connected to a CRM or AI chatbot.",
      ],
      steps: [
        "We review your needs: customer replies, notifications, campaigns or all of them.",
        "We set up the Meta Business account and dedicated number and help verify the business.",
        "We design message templates and submit them for Meta approval.",
        "We connect WhatsApp to your store, CRM or a team inbox.",
        "We test the flows and hand over the system with an explanation of messaging policies.",
      ],
      tips: [
        "Use a dedicated business number not used in the regular WhatsApp app.",
        "Collect customer consent before sending marketing messages.",
        "Write clear, useful templates to improve approval chances.",
        "Always offer an option to talk to a real person.",
        "Monitor account quality in Meta's dashboard to avoid messaging limits.",
      ],
      local:
        "We integrate WhatsApp API for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city remotely.",
      faqs: [
        { q: "WhatsApp Business app vs API?", a: "The app works on one device with limited features; the API allows multiple agents, automation, system integration and template notifications." },
        { q: "Does Meta charge fees?", a: "Meta charges for some conversation types according to its published policy; we explain how charges work before launch." },
        { q: "Can I use my current number?", a: "Usually yes after removing it from the regular WhatsApp app; we explain the steps and consequences before migrating." },
        { q: "Can a chatbot be added?", a: "Yes, we connect an AI chatbot that replies in Arabic and hands over to an agent when needed." },
      ],
    },
    ur: {
      primaryKeyword: "واٹس ایپ بزنس API",
      secondaryKeywords: ["واٹس ایپ API انٹیگریشن", "سرکاری واٹس ایپ پیغامات", "واٹس ایپ CRM انٹیگریشن"],
      metaDescription:
        "تسامی کے ساتھ واٹس ایپ بزنس API: سرکاری اکاؤنٹ سیٹ اپ، منظور شدہ پیغام ٹیمپلیٹس، خودکار جوابات اور اسٹور یا CRM سے انٹیگریشن۔",
      intro:
        "جب گاہکوں کی بات چیت بڑھ جائے تو ایک فون پر واٹس ایپ بزنس ایپ کافی نہیں رہتی۔ میٹا کا واٹس ایپ بزنس پلیٹ فارم (API) ایک ہی نمبر پر کئی ملازمین، خودکار جوابات، منظور شدہ ٹیمپلیٹس سے آرڈر نوٹیفکیشن اور یاد دہانیاں، اور اسٹور و CRM سے انٹیگریشن دیتا ہے۔ تسامی اکاؤنٹ اور تکنیکی انٹیگریشن سیٹ کرتا اور میٹا کی پالیسیوں کے مطابق گفتگو کے منظرنامے بناتا ہے۔",
      who: [
        "اسٹورز جو واٹس ایپ پر خودکار آرڈر اور شپنگ تصدیق چاہتے ہیں۔",
        "کمپنیاں جہاں کئی ملازمین کسٹمر سروس نمبر پر جواب دیتے ہیں۔",
        "کلینکس اور دفاتر جو باقاعدہ اپائنٹمنٹ یاد دہانی بھیجتے ہیں۔",
        "جو واٹس ایپ کو CRM یا AI چیٹ بوٹ سے جوڑنا چاہتے ہیں۔",
      ],
      steps: [
        "آپ کی ضرورت دیکھتے ہیں: جوابات، نوٹیفکیشن، مہمات یا سب۔",
        "میٹا بزنس اکاؤنٹ اور مخصوص نمبر سیٹ کر کے کاروبار کی تصدیق میں مدد کرتے ہیں۔",
        "پیغام ٹیمپلیٹس بنا کر میٹا کی منظوری کے لیے بھیجتے ہیں۔",
        "واٹس ایپ کو اسٹور، CRM یا ٹیم ان باکس سے جوڑتے ہیں۔",
        "منظرنامے ٹیسٹ کر کے پالیسیوں کی وضاحت کے ساتھ حوالے کرتے ہیں۔",
      ],
      tips: [
        "ایسا مخصوص کاروباری نمبر استعمال کریں جو عام واٹس ایپ میں نہ ہو۔",
        "مارکیٹنگ پیغامات سے پہلے گاہکوں کی رضامندی لیں۔",
        "منظوری کے لیے واضح اور مفید ٹیمپلیٹس لکھیں۔",
        "حقیقی ملازم سے بات کا آپشن ہمیشہ رکھیں۔",
        "پابندی سے بچنے کے لیے میٹا ڈیش بورڈ میں اکاؤنٹ کوالٹی دیکھیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کے لیے واٹس ایپ API دور سے جوڑتے ہیں۔",
      faqs: [
        { q: "واٹس ایپ بزنس ایپ اور API میں فرق؟", a: "ایپ ایک ڈیوائس پر محدود سہولیات کے ساتھ ہے؛ API کئی ملازمین، آٹومیشن اور سسٹمز سے انٹیگریشن دیتی ہے۔" },
        { q: "کیا میٹا فیس لیتا ہے؟", a: "میٹا اپنی اعلان کردہ پالیسی کے مطابق کچھ اقسام کی گفتگو پر فیس لیتا ہے؛ ہم لانچ سے پہلے وضاحت کرتے ہیں۔" },
        { q: "کیا موجودہ نمبر استعمال ہو سکتا ہے؟", a: "عموماً عام واٹس ایپ سے ہٹانے کے بعد؛ منتقلی سے پہلے مراحل اور اثرات بتاتے ہیں۔" },
        { q: "کیا چیٹ بوٹ شامل ہو سکتا ہے؟", a: "جی ہاں، عربی میں جواب دینے والا AI چیٹ بوٹ جو ضرورت پر ملازم کو منتقل کرے۔" },
      ],
    },
    hi: {
      primaryKeyword: "व्हाट्सऐप बिज़नेस API",
      secondaryKeywords: ["व्हाट्सऐप API इंटीग्रेशन", "आधिकारिक व्हाट्सऐप मैसेज", "व्हाट्सऐप CRM इंटीग्रेशन"],
      metaDescription:
        "तसामी के साथ व्हाट्सऐप बिज़नेस API: आधिकारिक अकाउंट सेटअप, स्वीकृत मैसेज टेम्पलेट, ऑटो जवाब और स्टोर या CRM से इंटीग्रेशन।",
      intro:
        "जब ग्राहकों की बातचीत बढ़ जाए तो एक फ़ोन पर व्हाट्सऐप बिज़नेस ऐप काफ़ी नहीं रहता। मेटा का व्हाट्सऐप बिज़नेस प्लेटफ़ॉर्म (API) एक ही नंबर पर कई कर्मचारी, ऑटो जवाब, स्वीकृत टेम्पलेट से ऑर्डर नोटिफ़िकेशन और रिमाइंडर, और स्टोर व CRM से इंटीग्रेशन देता है। तसामी अकाउंट और तकनीकी इंटीग्रेशन सेट करता और मेटा की नीतियों के अनुसार बातचीत के फ़्लो बनाता है।",
      who: [
        "स्टोर जो व्हाट्सऐप पर अपने-आप ऑर्डर और शिपिंग पुष्टि चाहते हैं।",
        "कंपनियाँ जहाँ कई कर्मचारी कस्टमर सर्विस नंबर पर जवाब देते हैं।",
        "क्लिनिक और दफ़्तर जो नियमित अपॉइंटमेंट रिमाइंडर भेजते हैं।",
        "जो व्हाट्सऐप को CRM या AI चैटबॉट से जोड़ना चाहते हैं।",
      ],
      steps: [
        "आपकी ज़रूरत देखते हैं: जवाब, नोटिफ़िकेशन, कैंपेन या सब।",
        "मेटा बिज़नेस अकाउंट और समर्पित नंबर सेट कर व्यवसाय सत्यापन में मदद करते हैं।",
        "मैसेज टेम्पलेट बनाकर मेटा की मंज़ूरी के लिए भेजते हैं।",
        "व्हाट्सऐप को स्टोर, CRM या टीम इनबॉक्स से जोड़ते हैं।",
        "फ़्लो टेस्ट कर नीतियाँ समझाकर सौंपते हैं।",
      ],
      tips: [
        "ऐसा समर्पित बिज़नेस नंबर इस्तेमाल करें जो आम व्हाट्सऐप में न हो।",
        "मार्केटिंग मैसेज से पहले ग्राहकों की सहमति लें।",
        "मंज़ूरी के लिए साफ़ और उपयोगी टेम्पलेट लिखें।",
        "असली कर्मचारी से बात का विकल्प हमेशा रखें।",
        "प्रतिबंध से बचने के लिए मेटा डैशबोर्ड में अकाउंट क्वालिटी देखें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों के लिए व्हाट्सऐप API दूर से जोड़ते हैं।",
      faqs: [
        { q: "व्हाट्सऐप बिज़नेस ऐप और API में फ़र्क़?", a: "ऐप एक डिवाइस पर सीमित सुविधाओं के साथ है; API कई कर्मचारी, ऑटोमेशन और सिस्टम इंटीग्रेशन देता है।" },
        { q: "क्या मेटा फ़ीस लेता है?", a: "मेटा अपनी घोषित नीति के अनुसार कुछ प्रकार की बातचीत पर फ़ीस लेता है; हम लॉन्च से पहले समझाते हैं।" },
        { q: "क्या मौजूदा नंबर इस्तेमाल हो सकता है?", a: "आमतौर पर आम व्हाट्सऐप से हटाने के बाद; ले जाने से पहले चरण और असर बताते हैं।" },
        { q: "क्या चैटबॉट जोड़ा जा सकता है?", a: "हाँ, अरबी में जवाब देने वाला AI चैटबॉट जो ज़रूरत पर कर्मचारी को सौंपे।" },
      ],
    },
  },

  customSoftware: {
    ar: {
      primaryKeyword: "برمجة أنظمة خاصة",
      secondaryKeywords: ["تطوير برمجيات حسب الطلب", "برمجة لوحة تحكم", "نظام إداري مخصص", "شركة برمجة في السعودية"],
      metaDescription:
        "برمجة أنظمة خاصة ولوحات تحكم حسب احتياج منشأتك مع تسامي: تحليل المتطلبات، تصميم، برمجة، ربط بالأنظمة الحالية، وتسليم مع دعم فني.",
      intro:
        "أحياناً لا يوجد نظام جاهز يناسب طريقة عمل منشأتك: إجراءات خاصة، أو تقارير لا يوفرها أي برنامج، أو حاجة لربط عدة أنظمة معاً. هنا تأتي البرمجة حسب الطلب: نظام إداري أو بوابة عملاء أو لوحة تحكم تُبنى على مقاس عملك. تسامي تحلل احتياجك وتصمم الحل وتبرمجه على مراحل واضحة، وتسلمك نظاماً تملكه مع التوثيق والدعم.",
      who: [
        "المنشآت ذات الإجراءات الخاصة التي لا تغطيها البرامج الجاهزة.",
        "الإدارات التي تحتاج لوحات تقارير تجمع بيانات من عدة مصادر.",
        "الشركات التي تريد بوابة لعملائها أو موظفيها.",
        "من يريد ربط أنظمته الحالية ببعضها عبر واجهات برمجية.",
      ],
      steps: [
        "نجلس معك لتحليل الإجراءات وتحديد المتطلبات بدقة.",
        "نجهز وثيقة نطاق العمل وتصميم الشاشات للموافقة.",
        "نبرمج النظام على مراحل ونعرض كل مرحلة للاختبار.",
        "نربط النظام بأنظمتك الحالية ونرحّل البيانات عند الحاجة.",
        "نطلق النظام وندرب المستخدمين ونقدم الدعم والتطوير المستمر.",
      ],
      tips: [
        "ابدأ بنسخة أولى تغطي الأهم، ثم أضف المزايا تدريجياً.",
        "حدد شخصاً من فريقك مسؤولاً عن المتطلبات والاختبار.",
        "اطلب أن يكون الكود والبيانات ملكاً لمنشأتك.",
        "خصص وقتاً لاختبار كل مرحلة قبل الانتقال للتالية.",
        "فكّر في الصلاحيات والنسخ الاحتياطي من البداية.",
      ],
      local:
        "نبرمج أنظمة لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، مع اجتماعات متابعة دورية.",
      faqs: [
        { q: "متى أحتاج نظاماً مخصصاً بدل الجاهز؟", a: "عندما تكون إجراءاتك خاصة أو تحتاج ربط أنظمة متعددة أو تقارير لا يوفرها أي برنامج جاهز." },
        { q: "هل أملك الكود بعد التسليم؟", a: "نعم وفق الاتفاق، يكون النظام والبيانات ملكاً لمنشأتك ونسلم التوثيق اللازم." },
        { q: "كيف تحددون التكلفة والمدة؟", a: "بعد تحليل المتطلبات وتحديد نطاق العمل نرسل لك عرضاً واضحاً بالمراحل." },
        { q: "هل تقدمون دعماً بعد الإطلاق؟", a: "نعم، نقدم الدعم الفني والتطوير المستمر حسب احتياجك." },
      ],
    },
    en: {
      primaryKeyword: "custom software development in Saudi Arabia",
      secondaryKeywords: ["bespoke software", "custom dashboard development", "custom management system", "software company KSA"],
      metaDescription:
        "Custom software and dashboards built around your business with Tasami: requirements analysis, design, development, integration with current systems and handover with support.",
      intro:
        "Sometimes no ready system fits how your business works: special processes, reports no program provides or a need to connect several systems. That is where custom development comes in: a management system, customer portal or dashboard built to fit your work. Tasami analyzes your needs, designs the solution and builds it in clear phases, handing over a system you own with documentation and support.",
      who: [
        "Businesses with special processes that ready software does not cover.",
        "Departments needing report dashboards combining data from several sources.",
        "Companies wanting a portal for customers or employees.",
        "Anyone wanting to connect existing systems through APIs.",
      ],
      steps: [
        "We sit with you to analyze processes and define requirements precisely.",
        "We prepare a scope document and screen designs for approval.",
        "We build the system in phases and present each phase for testing.",
        "We connect the system to your current systems and migrate data if needed.",
        "We launch, train users and provide ongoing support and development.",
      ],
      tips: [
        "Start with a first version covering the essentials, then add features gradually.",
        "Assign someone on your team to own requirements and testing.",
        "Ensure the code and data belong to your business.",
        "Set time aside to test each phase before moving on.",
        "Think about permissions and backups from the start.",
      ],
      local:
        "We build systems for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, with regular follow-up meetings.",
      faqs: [
        { q: "When do I need custom instead of ready software?", a: "When your processes are special, you need several systems connected or reports no ready program provides." },
        { q: "Do I own the code after handover?", a: "Yes, per the agreement the system and data belong to your business and we hand over documentation." },
        { q: "How do you set cost and timeline?", a: "After analyzing requirements and defining scope we send a clear phased proposal." },
        { q: "Do you support after launch?", a: "Yes, we provide technical support and ongoing development as needed." },
      ],
    },
    ur: {
      primaryKeyword: "خصوصی سافٹ ویئر ڈیولپمنٹ",
      secondaryKeywords: ["حسبِ ضرورت سافٹ ویئر", "ڈیش بورڈ ڈیولپمنٹ", "خصوصی انتظامی سسٹم"],
      metaDescription:
        "تسامی کے ساتھ آپ کے کاروبار کے مطابق خصوصی سسٹمز اور ڈیش بورڈز: ضروریات کا تجزیہ، ڈیزائن، پروگرامنگ، موجودہ سسٹمز سے انٹیگریشن اور سپورٹ کے ساتھ حوالگی۔",
      intro:
        "کبھی کوئی تیار سسٹم آپ کے کام کے طریقے کے مطابق نہیں ہوتا: خاص طریقہ کار، ایسی رپورٹس جو کوئی پروگرام نہیں دیتا، یا کئی سسٹمز جوڑنے کی ضرورت۔ یہاں حسبِ ضرورت پروگرامنگ آتی ہے: انتظامی سسٹم، کسٹمر پورٹل یا ڈیش بورڈ جو آپ کے کام کے مطابق بنے۔ تسامی ضرورت کا تجزیہ کر کے حل ڈیزائن کرتا اور واضح مراحل میں بناتا ہے، اور دستاویزات و سپورٹ کے ساتھ آپ کی ملکیت کا سسٹم حوالے کرتا ہے۔",
      who: [
        "خاص طریقہ کار والے ادارے جنہیں تیار سافٹ ویئر پورا نہیں کرتا۔",
        "شعبے جنہیں کئی ذرائع کا ڈیٹا جمع کرنے والے رپورٹ ڈیش بورڈ چاہییں۔",
        "کمپنیاں جو گاہکوں یا ملازمین کے لیے پورٹل چاہتی ہیں۔",
        "جو موجودہ سسٹمز کو API کے ذریعے جوڑنا چاہتے ہیں۔",
      ],
      steps: [
        "طریقہ کار کا تجزیہ کر کے ضروریات درست طے کرتے ہیں۔",
        "منظوری کے لیے کام کے دائرے کی دستاویز اور اسکرین ڈیزائن تیار کرتے ہیں۔",
        "سسٹم مراحل میں بناتے اور ہر مرحلہ ٹیسٹ کے لیے دکھاتے ہیں۔",
        "موجودہ سسٹمز سے جوڑ کر ضرورت ہو تو ڈیٹا منتقل کرتے ہیں۔",
        "لانچ کر کے صارفین کو تربیت اور مسلسل سپورٹ دیتے ہیں۔",
      ],
      tips: [
        "اہم چیزوں والے پہلے ورژن سے شروع کر کے بتدریج سہولیات شامل کریں۔",
        "ضروریات اور ٹیسٹنگ کے لیے اپنی ٹیم سے ایک ذمہ دار مقرر کریں۔",
        "یقینی بنائیں کہ کوڈ اور ڈیٹا آپ کے ادارے کی ملکیت ہوں۔",
        "اگلے مرحلے سے پہلے ہر مرحلہ ٹیسٹ کریں۔",
        "شروع سے اجازتوں اور بیک اپ کا سوچیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کے لیے سسٹمز بناتے ہیں، باقاعدہ فالو اپ میٹنگز کے ساتھ۔",
      faqs: [
        { q: "تیار کے بجائے خصوصی سسٹم کب چاہیے؟", a: "جب طریقہ کار خاص ہو، کئی سسٹمز جوڑنے ہوں یا ایسی رپورٹس چاہییں جو تیار پروگرام نہ دے۔" },
        { q: "کیا حوالگی کے بعد کوڈ میرا ہوگا؟", a: "جی ہاں، معاہدے کے مطابق سسٹم اور ڈیٹا آپ کے ادارے کی ملکیت ہوں گے۔" },
        { q: "لاگت اور مدت کیسے طے ہوتی ہے؟", a: "ضروریات کے تجزیے اور دائرہ کار طے کرنے کے بعد مراحل کے ساتھ واضح پیشکش بھیجتے ہیں۔" },
        { q: "کیا لانچ کے بعد سپورٹ ہے؟", a: "جی ہاں، تکنیکی سپورٹ اور مسلسل ڈیولپمنٹ۔" },
      ],
    },
    hi: {
      primaryKeyword: "कस्टम सॉफ़्टवेयर डेवलपमेंट",
      secondaryKeywords: ["ज़रूरत के अनुसार सॉफ़्टवेयर", "डैशबोर्ड डेवलपमेंट", "कस्टम प्रबंधन सिस्टम"],
      metaDescription:
        "तसामी के साथ आपके व्यवसाय के अनुसार कस्टम सिस्टम और डैशबोर्ड: ज़रूरतों का विश्लेषण, डिज़ाइन, प्रोग्रामिंग, मौजूदा सिस्टम से इंटीग्रेशन और सपोर्ट के साथ हैंडओवर।",
      intro:
        "कभी कोई तैयार सिस्टम आपके काम करने के तरीक़े में फ़िट नहीं होता: ख़ास प्रक्रियाएँ, ऐसी रिपोर्ट जो कोई प्रोग्राम नहीं देता, या कई सिस्टम जोड़ने की ज़रूरत। यहाँ कस्टम प्रोग्रामिंग काम आती है: प्रबंधन सिस्टम, ग्राहक पोर्टल या डैशबोर्ड जो आपके काम के नाप से बने। तसामी ज़रूरत का विश्लेषण कर समाधान डिज़ाइन करता और साफ़ चरणों में बनाता है, और दस्तावेज़ व सपोर्ट के साथ आपकी मिल्कियत वाला सिस्टम सौंपता है।",
      who: [
        "ख़ास प्रक्रियाओं वाले संस्थान जिन्हें तैयार सॉफ़्टवेयर पूरा नहीं करता।",
        "विभाग जिन्हें कई स्रोतों का डेटा जोड़ने वाले रिपोर्ट डैशबोर्ड चाहिए।",
        "कंपनियाँ जो ग्राहकों या कर्मचारियों के लिए पोर्टल चाहती हैं।",
        "जो मौजूदा सिस्टम को API के ज़रिए जोड़ना चाहते हैं।",
      ],
      steps: [
        "प्रक्रियाओं का विश्लेषण कर ज़रूरतें सटीक तय करते हैं।",
        "मंज़ूरी के लिए काम के दायरे का दस्तावेज़ और स्क्रीन डिज़ाइन तैयार करते हैं।",
        "सिस्टम चरणों में बनाते और हर चरण टेस्ट के लिए दिखाते हैं।",
        "मौजूदा सिस्टम से जोड़कर ज़रूरत हो तो डेटा ले जाते हैं।",
        "लॉन्च कर यूज़र को प्रशिक्षण और लगातार सपोर्ट देते हैं।",
      ],
      tips: [
        "ज़रूरी चीज़ों वाले पहले वर्ज़न से शुरू कर धीरे-धीरे सुविधाएँ जोड़ें।",
        "ज़रूरतों और टेस्टिंग के लिए अपनी टीम से एक ज़िम्मेदार तय करें।",
        "पक्का करें कि कोड और डेटा आपके संस्थान के हों।",
        "अगले चरण से पहले हर चरण टेस्ट करें।",
        "शुरू से अनुमतियों और बैकअप के बारे में सोचें।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों के लिए सिस्टम बनाते हैं, नियमित फ़ॉलो-अप मीटिंग के साथ।",
      faqs: [
        { q: "तैयार की जगह कस्टम सिस्टम कब चाहिए?", a: "जब प्रक्रियाएँ ख़ास हों, कई सिस्टम जोड़ने हों या ऐसी रिपोर्ट चाहिए जो तैयार प्रोग्राम न दे।" },
        { q: "क्या हैंडओवर के बाद कोड मेरा होगा?", a: "हाँ, समझौते के अनुसार सिस्टम और डेटा आपके संस्थान के होंगे।" },
        { q: "लागत और समय कैसे तय होता है?", a: "ज़रूरतों के विश्लेषण और दायरा तय करने के बाद चरणों के साथ साफ़ प्रस्ताव भेजते हैं।" },
        { q: "क्या लॉन्च के बाद सपोर्ट है?", a: "हाँ, तकनीकी सपोर्ट और लगातार डेवलपमेंट।" },
      ],
    },
  },

  aiChatbot: {
    ar: {
      primaryKeyword: "شات بوت ذكي",
      secondaryKeywords: ["روبوت محادثة بالذكاء الاصطناعي", "شات بوت واتساب", "شات بوت للموقع", "بوت خدمة عملاء باللهجة السعودية"],
      metaDescription:
        "شات بوت ذكي بالذكاء الاصطناعي للواتساب والموقع مع تسامي: يرد بالعربية على مدار الساعة من معلومات منشأتك، يستقبل الطلبات، ويحوّل للموظف عند الحاجة.",
      intro:
        "عملاؤك يسألون الأسئلة نفسها كل يوم وفي كل وقت: الأسعار، والمواعيد، وحالة الطلب، والموقع. الشات بوت الذكي يرد عليهم فوراً بالعربية وبأسلوب طبيعي، معتمداً على معلومات منشأتك فقط، ويستقبل الطلبات والحجوزات ويحوّل المحادثة لموظف عندما تحتاج تدخلاً بشرياً. تسامي تبني البوت وتدربه على خدماتك وتربطه بالواتساب أو موقعك.",
      who: [
        "المنشآت التي تستقبل محادثات كثيرة خارج أوقات الدوام.",
        "المتاجر التي تريد الرد على أسئلة المنتجات وحالة الطلب تلقائياً.",
        "العيادات والمكاتب التي تستقبل حجوزات ومواعيد.",
        "فرق خدمة العملاء التي تريد التركيز على الحالات المعقدة فقط.",
      ],
      steps: [
        "نجمع معلومات منشأتك وخدماتك والأسئلة المتكررة.",
        "نصمم شخصية البوت وأسلوبه وحدود ما يجيب عنه.",
        "نبني البوت ونربطه بالواتساب أو الموقع وبأنظمتك عند الحاجة.",
        "نختبره بمحادثات حقيقية ونضبط الردود.",
        "نطلقه ونتابع المحادثات ونحسّن أداءه باستمرار.",
      ],
      tips: [
        "زوّد البوت بمعلومات دقيقة ومحدثة عن خدماتك.",
        "حدد بوضوح متى يحوّل البوت المحادثة للموظف.",
        "اجعل البوت يعرّف بنفسه كمساعد آلي بشفافية.",
        "راجع المحادثات دورياً لتحسين الردود.",
        "ابدأ بالأسئلة الأكثر تكراراً ثم وسّع قدراته.",
      ],
      local:
        "نبني شات بوت لمنشآت في مكة المكرمة وجدة والرياض والدمام وكل مدن المملكة، ويرد على عملائك أينما كانوا، ونتابع معك عن بُعد عبر واتساب والاجتماعات المرئية من التخطيط حتى التشغيل.",
      faqs: [
        { q: "هل يفهم البوت اللهجة السعودية؟", a: "نعم، نعتمد نماذج ذكاء اصطناعي تفهم العربية الفصحى واللهجات المحلية، ونضبط أسلوب الرد حسب جمهورك." },
        { q: "هل يمكن أن يخترع البوت معلومات؟", a: "نقيّده بمعلومات منشأتك ونضع قواعد واضحة، وعند عدم معرفة الإجابة يحوّل المحادثة للموظف." },
        { q: "هل يعمل على الواتساب؟", a: "نعم، عبر واتساب للأعمال API، ويمكن تشغيله أيضاً على موقعك." },
        { q: "هل يستقبل الطلبات والحجوزات؟", a: "نعم، يمكنه جمع بيانات الطلب أو الحجز وإرسالها لفريقك أو لنظامك." },
        { q: "هل يمكن تعديل معلومات البوت لاحقاً؟", a: "نعم، عند تغيّر خدماتك أو مواعيدك أو عروضك نحدّث معلومات البوت حتى تبقى ردوده دقيقة ومحدثة دائماً." },
      ],
    },
    en: {
      primaryKeyword: "AI chatbot in Saudi Arabia",
      secondaryKeywords: ["AI chatbot for WhatsApp", "website chatbot", "Arabic customer service bot", "chatbot development"],
      metaDescription:
        "AI chatbot for WhatsApp and your website with Tasami: replies in Arabic around the clock from your business information, takes orders and hands over to an agent when needed.",
      intro:
        "Your customers ask the same questions every day at all hours: prices, opening times, order status and location. An AI chatbot answers them instantly in natural Arabic, relying only on your business information, takes orders and bookings, and hands the conversation to an agent when human help is needed. Tasami builds the bot, trains it on your services and connects it to WhatsApp or your website.",
      who: [
        "Businesses receiving many conversations outside working hours.",
        "Stores wanting automatic answers on products and order status.",
        "Clinics and offices taking bookings and appointments.",
        "Customer service teams wanting to focus on complex cases only.",
      ],
      steps: [
        "We gather your business information, services and frequent questions.",
        "We design the bot's persona, tone and the limits of what it answers.",
        "We build the bot and connect it to WhatsApp or your website and your systems if needed.",
        "We test it with real conversations and tune the replies.",
        "We launch it, monitor conversations and keep improving it.",
      ],
      tips: [
        "Give the bot accurate, up-to-date information about your services.",
        "Define clearly when the bot hands over to an agent.",
        "Let the bot transparently introduce itself as an automated assistant.",
        "Review conversations regularly to improve replies.",
        "Start with the most frequent questions, then expand.",
      ],
      local:
        "We build chatbots for businesses in Makkah, Jeddah, Riyadh, Dammam and every Saudi city, answering your customers wherever they are.",
      faqs: [
        { q: "Does the bot understand Saudi dialect?", a: "Yes, we use AI models that understand Modern Standard Arabic and local dialects, and tune the tone to your audience." },
        { q: "Can the bot make things up?", a: "We restrict it to your business information with clear rules; when it does not know, it hands over to an agent." },
        { q: "Does it work on WhatsApp?", a: "Yes, via the WhatsApp Business API, and it can also run on your website." },
        { q: "Can it take orders and bookings?", a: "Yes, it can collect order or booking details and send them to your team or system." },
        { q: "Can the bot's information be updated later?", a: "Yes, when your services, hours or offers change we update the bot so its answers stay accurate." },
      ],
    },
    ur: {
      primaryKeyword: "AI چیٹ بوٹ",
      secondaryKeywords: ["واٹس ایپ چیٹ بوٹ", "ویب سائٹ چیٹ بوٹ", "عربی کسٹمر سروس بوٹ"],
      metaDescription:
        "تسامی کے ساتھ واٹس ایپ اور ویب سائٹ کے لیے AI چیٹ بوٹ: آپ کے کاروبار کی معلومات سے چوبیس گھنٹے عربی میں جواب، آرڈرز وصول کرنا اور ضرورت پر ملازم کو منتقلی۔",
      intro:
        "آپ کے گاہک ہر روز ہر وقت ایک جیسے سوال پوچھتے ہیں: قیمتیں، اوقات، آرڈر کی حالت اور مقام۔ AI چیٹ بوٹ صرف آپ کے کاروبار کی معلومات کی بنیاد پر فوراً قدرتی عربی میں جواب دیتا ہے، آرڈرز اور بکنگ لیتا ہے، اور انسانی مدد کی ضرورت ہو تو بات ملازم کو منتقل کرتا ہے۔ تسامی بوٹ بنا کر آپ کی خدمات پر تربیت دیتا اور واٹس ایپ یا ویب سائٹ سے جوڑتا ہے۔",
      who: [
        "ادارے جنہیں دفتری اوقات کے بعد بہت سی بات چیت ملتی ہے۔",
        "اسٹورز جو پروڈکٹس اور آرڈر کی حالت کے خودکار جوابات چاہتے ہیں۔",
        "کلینکس اور دفاتر جو بکنگ اور اپائنٹمنٹس لیتے ہیں۔",
        "کسٹمر سروس ٹیمیں جو صرف پیچیدہ معاملات پر توجہ دینا چاہتی ہیں۔",
      ],
      steps: [
        "آپ کے کاروبار، خدمات اور عام سوالات کی معلومات جمع کرتے ہیں۔",
        "بوٹ کی شخصیت، انداز اور جواب کی حدود طے کرتے ہیں۔",
        "بوٹ بنا کر واٹس ایپ یا ویب سائٹ اور ضرورت ہو تو سسٹمز سے جوڑتے ہیں۔",
        "حقیقی گفتگو سے ٹیسٹ کر کے جوابات بہتر کرتے ہیں۔",
        "لانچ کر کے گفتگو کی نگرانی اور مسلسل بہتری کرتے ہیں۔",
      ],
      tips: [
        "بوٹ کو درست اور تازہ معلومات دیں۔",
        "واضح کریں کہ بوٹ کب ملازم کو منتقل کرے۔",
        "بوٹ شفافیت سے خود کو خودکار معاون کے طور پر متعارف کرائے۔",
        "جوابات بہتر کرنے کے لیے گفتگو باقاعدگی سے دیکھیں۔",
        "عام ترین سوالات سے شروع کر کے صلاحیتیں بڑھائیں۔",
      ],
      local:
        "ہم مکہ، جدہ، ریاض، دمام اور مملکت کے ہر شہر کے اداروں کے لیے چیٹ بوٹ بناتے ہیں۔",
      faqs: [
        { q: "کیا بوٹ سعودی لہجہ سمجھتا ہے؟", a: "جی ہاں، ہم فصیح عربی اور مقامی لہجے سمجھنے والے AI ماڈلز استعمال کرتے ہیں۔" },
        { q: "کیا بوٹ غلط معلومات بنا سکتا ہے؟", a: "ہم اسے آپ کی معلومات تک محدود رکھتے ہیں؛ جواب نہ معلوم ہو تو ملازم کو منتقل کرتا ہے۔" },
        { q: "کیا یہ واٹس ایپ پر چلتا ہے؟", a: "جی ہاں، واٹس ایپ بزنس API کے ذریعے، اور ویب سائٹ پر بھی۔" },
        { q: "کیا یہ آرڈرز اور بکنگ لیتا ہے؟", a: "جی ہاں، تفصیلات جمع کر کے آپ کی ٹیم یا سسٹم کو بھیجتا ہے۔" },
        { q: "کیا بوٹ کی معلومات بعد میں بدل سکتے ہیں؟", a: "جی ہاں، خدمات، اوقات یا آفرز بدلنے پر ہم بوٹ کو اپ ڈیٹ کرتے ہیں تاکہ جوابات درست رہیں۔" },
      ],
    },
    hi: {
      primaryKeyword: "AI चैटबॉट",
      secondaryKeywords: ["व्हाट्सऐप चैटबॉट", "वेबसाइट चैटबॉट", "अरबी कस्टमर सर्विस बॉट"],
      metaDescription:
        "तसामी के साथ व्हाट्सऐप और वेबसाइट के लिए AI चैटबॉट: आपके व्यवसाय की जानकारी से चौबीसों घंटे अरबी में जवाब, ऑर्डर लेना और ज़रूरत पर कर्मचारी को सौंपना।",
      intro:
        "आपके ग्राहक हर दिन हर समय एक जैसे सवाल पूछते हैं: क़ीमतें, समय, ऑर्डर की स्थिति और लोकेशन। AI चैटबॉट सिर्फ़ आपके व्यवसाय की जानकारी के आधार पर तुरंत स्वाभाविक अरबी में जवाब देता है, ऑर्डर और बुकिंग लेता है, और इंसानी मदद की ज़रूरत हो तो बातचीत कर्मचारी को सौंपता है। तसामी बॉट बनाकर आपकी सेवाओं पर प्रशिक्षित करता और व्हाट्सऐप या वेबसाइट से जोड़ता है।",
      who: [
        "संस्थान जिन्हें दफ़्तर के समय के बाद बहुत बातचीत मिलती है।",
        "स्टोर जो प्रोडक्ट और ऑर्डर स्थिति के अपने-आप जवाब चाहते हैं।",
        "क्लिनिक और दफ़्तर जो बुकिंग और अपॉइंटमेंट लेते हैं।",
        "कस्टमर सर्विस टीमें जो सिर्फ़ जटिल मामलों पर ध्यान देना चाहती हैं।",
      ],
      steps: [
        "आपके व्यवसाय, सेवाओं और आम सवालों की जानकारी जमा करते हैं।",
        "बॉट का व्यक्तित्व, अंदाज़ और जवाब की सीमाएँ तय करते हैं।",
        "बॉट बनाकर व्हाट्सऐप या वेबसाइट और ज़रूरत हो तो सिस्टम से जोड़ते हैं।",
        "असली बातचीत से टेस्ट कर जवाब बेहतर करते हैं।",
        "लॉन्च कर बातचीत की निगरानी और लगातार सुधार करते हैं।",
      ],
      tips: [
        "बॉट को सटीक और ताज़ा जानकारी दें।",
        "साफ़ तय करें कि बॉट कब कर्मचारी को सौंपे।",
        "बॉट पारदर्शिता से ख़ुद को ऑटोमेटेड सहायक बताए।",
        "जवाब बेहतर करने के लिए बातचीत नियमित देखें।",
        "सबसे आम सवालों से शुरू कर क्षमताएँ बढ़ाएँ।",
      ],
      local:
        "हम मक्का, जेद्दा, रियाद, दम्माम और हर शहर के संस्थानों के लिए चैटबॉट बनाते हैं।",
      faqs: [
        { q: "क्या बॉट सऊदी बोली समझता है?", a: "हाँ, हम मानक अरबी और स्थानीय बोलियाँ समझने वाले AI मॉडल इस्तेमाल करते हैं।" },
        { q: "क्या बॉट ग़लत जानकारी बना सकता है?", a: "हम उसे आपकी जानकारी तक सीमित रखते हैं; जवाब न पता हो तो कर्मचारी को सौंपता है।" },
        { q: "क्या यह व्हाट्सऐप पर चलता है?", a: "हाँ, व्हाट्सऐप बिज़नेस API के ज़रिए, और वेबसाइट पर भी।" },
        { q: "क्या यह ऑर्डर और बुकिंग लेता है?", a: "हाँ, विवरण जमा कर आपकी टीम या सिस्टम को भेजता है।" },
        { q: "क्या बॉट की जानकारी बाद में बदल सकते हैं?", a: "हाँ, सेवाएँ, समय या ऑफ़र बदलने पर हम बॉट अपडेट करते हैं ताकि जवाब सही रहें।" },
      ],
    },
  },
};
