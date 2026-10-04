export type Language = "ar" | "en";

export interface Translations {
  nav: {
    brand: string;
    brandSubtitle: string;
    home: string;
    services: string;
    specialties: string;
    doctors: string;
    about: string;
    contact: string;
    exploreServices: string;
    bookAppointment: string;
    bookShort: string;
    langSwitch: string;
    langName: string;
  };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    mainCardSmall: string;
    mainCardTitle1: string;
    mainCardTitle2: string;
    mainCardDesc: string;
    secondCardTitle1: string;
    secondCardTitle2: string;
    secondCardBadge: string;
    brandVisionLabel: string;
    brandVisionSubtitle: string;
    brandVisionDesc: string;
    brandVisionFoot: string;
  };
  appointment: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    typeLabel: string;
    dateLabel: string;
    timeLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    disclaimer: string;
    submitCta: string;
    callCta: string;
    successTitle: string;
    successMsg: string;
    typeField: string;
    timeField: string;
    dateField: string;
    newBookingCta: string;
    browseServicesCta: string;
    types: string[];
    timeSlots: string[];
  };
  services: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    detailsCta: string;
    consultationCta: string;
    modalPillarsLabel: string;
    modalDisclaimer: string;
    modalClose: string;
    modalBookService: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      accentBadge: string;
      cta: string;
      details: string[];
    }>;
  };
  specialties: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      subtitle: string;
      description: string;
      tags: string[];
    }>;
  };
  doctors: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    placeholderTitle: string;
    placeholderDesc: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  comfort: {
    eyebrow: string;
    title1: string;
    title2: string;
    description: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    cta: string;
    photoTag: string;
    photoDesc: string;
  };
  emergency: {
    eyebrow: string;
    title: string;
    description: string;
    disclaimer: string;
    callNow: string;
    urgentCta: string;
    contactCta: string;
  };
  resources: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewGuide: string;
    modalClose: string;
    items: Array<{
      id: string;
      category: string;
      title: string;
      description: string;
      content: string[];
    }>;
  };
  journey: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    disclaimerIntro: string;
    disclaimerHighlight: string;
    disclaimerBody: string;
    startCta: string;
    steps: Array<{
      num: string;
      title: string;
      desc: string;
      tag: string;
    }>;
  };
  about: {
    eyebrow: string;
    title1: string;
    title2: string;
    body1: string;
    body2: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    locationBadge: string;
    locationDesc: string;
  };
  location: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    addressHeading: string;
    addressEmpty: string;
    parkingText: string;
    accessText: string;
    directContact: string;
    hoursHeading: string;
    hoursEmpty1: string;
    hoursEmpty2: string;
    hoursFooter: string;
  };
  faq: {
    eyebrow: string;
    title1: string;
    title2: string;
    subtitle: string;
    items: Array<{
      id: string;
      question: string;
      answer: string;
    }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    whatsappCta: string;
    bookDirectCta: string;
    formTitle: string;
    nameLabel: string;
    phoneLabelField: string;
    typeLabel: string;
    msgLabel: string;
    submitCta: string;
    successTitle: string;
    successDesc: string;
    anotherInquiryCta: string;
    inquiryOptions: string[];
  };
  footer: {
    tagline: string;
    demoNote: string;
    quickLinks: string;
    servicesTitle: string;
    bookPre: string;
    copyright: string;
    backToTop: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      brand: "نَقاء",
      brandSubtitle: "لطب الأسنان",
      home: "الرئيسية",
      services: "الخدمات",
      specialties: "التخصصات",
      doctors: "الأطباء",
      about: "عن نَقاء",
      contact: "تواصل معنا",
      exploreServices: "استكشف الخدمات",
      bookAppointment: "احجز موعدك",
      bookShort: "احجز",
      langSwitch: "EN",
      langName: "English",
    },
    hero: {
      eyebrow: "عناية • ابتسامة • صحة الفم",
      headlineLine1: "ابتسامتك تبدأ",
      headlineLine2: "من عناية هادئة",
      description: "تجربة عصرية للعناية بصحة الفم والأسنان، من الفحص الأول إلى خطة العلاج المناسبة لك.",
      primaryCta: "احجز موعدك",
      secondaryCta: "استكشف الخدمات",
      mainCardSmall: "العناية تبدأ بالتفاصيل",
      mainCardTitle1: "مساحة صُممت",
      mainCardTitle2: "لتشعر بالاطمئنان",
      mainCardDesc: "بيئة علاجية عصرية في الرياض تراعي راحة المريض النفسية وجودة الإجراء السريري من لحظة الوصول.",
      secondCardTitle1: "تجربة هادئة،",
      secondCardTitle2: "من الاستقبال حتى الموعد",
      secondCardBadge: "خصوصية ورعاية فردية",
      brandVisionLabel: "رؤية نَقاء",
      brandVisionSubtitle: "الرياض — المملكة العربية السعودية",
      brandVisionDesc: "عيادة أسنان تجريبية مصممة للارتقاء بالتجربة السريرية والرقمية.",
      brandVisionFoot: "مواعيد منظمة • فحص سريري دقيق",
    },
    appointment: {
      eyebrow: "الموعد",
      title1: "اختر الوقت",
      title2: "الذي يناسبك",
      subtitle: "أرسل طلب الموعد المفضل وتفاصيل زيارتك وسيقوم فريق الاستقبال في نَقاء بالتواصل معك لتأكيد التوقيت المناسب.",
      nameLabel: "الاسم الكريم",
      namePlaceholder: "مثال: عبد الله السالم",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "05XXXXXXXX",
      typeLabel: "نوع الموعد",
      dateLabel: "التاريخ المفضل",
      timeLabel: "الوقت المفضل",
      notesLabel: "ملاحظتك أو سبب الزيارة (اختياري)",
      notesPlaceholder: "هل تشعر بألم في سن معين، أو لديك استفسار محدد تود إخبارنا به؟",
      disclaimer: "* يُرسل هذا الطلب كاستفسار لتنسيق الموعد، وسيقوم فريق الاستقبال بتأكيد التوقيت النهائي.",
      submitCta: "طلب موعد",
      callCta: "اتصل بالعيادة",
      successTitle: "تم استلام طلب الموعد",
      successMsg: "شكراً لك. تم تسجيل استفسارك المبدئي لحجز موعد. سيتواصل معك فريق الاستقبال قريباً لتأكيد الموعد المناسب لجدولك.",
      typeField: "نوع الموعد:",
      timeField: "الوقت المفضل:",
      dateField: "التاريخ المطلوب:",
      newBookingCta: "إرسال طلب آخر",
      browseServicesCta: "تصفح الخدمات المتاحة",
      types: [
        "فحص واستشارة",
        "تنظيف",
        "ألم أو حالة طارئة",
        "زراعة أسنان",
        "تقويم",
        "تجميل الأسنان",
        "متابعة علاج",
        "موعد آخر",
      ],
      timeSlots: [
        "الفترة الصباحية (9:00 ص - 1:00 م)",
        "فترة الظهيرة (1:00 م - 5:00 م)",
        "الفترة المسائية (5:00 م - 9:00 م)",
      ],
    },
    services: {
      eyebrow: "الخدمات",
      title1: "العناية التي تحتاجها،",
      title2: "في مكان واحد",
      subtitle: "نقدم خيارات متكاملة لصحة الفم والأسنان، تبدأ من التقييم السريري الدقيق وتنتهي بخطة علاج مصممة خصيصاً لك.",
      detailsCta: "تفاصيل الخدمة",
      consultationCta: "طلب استشارة",
      modalPillarsLabel: "محاور العناية في هذه الخدمة:",
      modalDisclaimer: "تنويه مهني: يتم تحديد الخطة العلاجية والخيارات الإكلينيكية المناسبة بعد الفحص المباشر في العيادة ودراسة الحالة بدقة.",
      modalClose: "إغلاق",
      modalBookService: "حجز موعد لهذه الخدمة",
      items: [
        {
          id: "general-dentistry",
          title: "طب الأسنان العام",
          description: "فحوصات وعناية أساسية بصحة الفم والأسنان ضمن خطة تناسب احتياج كل حالة.",
          accentBadge: "فحص دوري وعناية وقائية",
          cta: "طلب استشارة عامة",
          details: [
            "الفحص الإكلينيكي الشامل لصحة الفم واللثة",
            "تنظيف وتلميع الأسنان وإزالة التراكمات الجيرية",
            "تقييم الحشوات السابقة والوقاية من التسوس",
            "إرشادات مخصصة للمحافظة اليومية على نظافة الفم",
          ],
        },
        {
          id: "orthodontics",
          title: "التقويم",
          description: "خيارات لتصحيح ترتيب الأسنان وتحسين الإطباق وفق تقييم الحالة.",
          accentBadge: "محاذاة وإطباق وظيفي",
          cta: "طلب استشارة تقويم",
          details: [
            "دراسة قياسات الفك ونمط الإطباق السريري",
            "استعراض حلول التقويم الشفاف والقوالب العلاجية",
            "متابعات دورية دقيقة ومدروسة لضبط حركة الأسنان",
            "خطط تثبيت تدعم استقرار النتائج الوظيفية",
          ],
        },
        {
          id: "implants",
          title: "زراعة الأسنان",
          description: "استشارات وخطط علاجية لحالات فقدان الأسنان، بعد تقييم الحالة سريريًا.",
          accentBadge: "تعويض دقيق ومدروس",
          cta: "طلب استشارة زراعة",
          details: [
            "تقييم سريري دقيق لكثافة العظام وحالة اللثة",
            "مناقشة خيارات التعويض الثابت المناسبة للحالة",
            "توضيح مراحل الإجراء والجدول الزمني المريح",
            "عناية ومتابعة مستمرة بعد مرحلة التركيب",
          ],
        },
        {
          id: "cosmetic",
          title: "تجميل الأسنان",
          description: "خيارات تجميلية تهدف إلى تحسين مظهر الابتسامة وفق الحالة والاحتياج.",
          accentBadge: "تناسق طبيعي وجمالي",
          cta: "طلب استشارة تجميلية",
          details: [
            "جلسات تفتيح الأسنان الآمنة ومراقبة الحساسية",
            "دراسة تناغم الأسنان الأمامية وتناسب أبعادها",
            "خيارات الترميمات الخزفية التجميلية الدقيقة",
            "الحفاظ على المظهر الطبيعي المتناسق دون مبالغة",
          ],
        },
        {
          id: "periodontics-endodontics",
          title: "علاج اللثة والجذور",
          description: "العناية باللثة وعلاج مشكلات جذور الأسنان ضمن تقييم وخطة علاج مناسبة.",
          accentBadge: "عناية متقدمة بالأنسجة والجذور",
          cta: "طلب استشارة علاجية",
          details: [
            "علاج التهابات اللثة والأنسجة الداعمة للأسنان",
            "إجراءات علاج قنوات الجذور للتخلص من مصدر الألم",
            "الحفاظ على السن الطبيعي قدر الإمكان سريريًا",
            "برامج وقائية للحد من تكرار انتكاسات اللثة",
          ],
        },
        {
          id: "pediatric",
          title: "أسنان الأطفال",
          description: "تجربة مصممة لتكون أبسط وأكثر هدوءًا للمرضى الصغار.",
          accentBadge: "بيئة مريحة ومهدئة",
          cta: "طلب موعد للأطفال",
          details: [
            "زيارات أولى استكشافية هادئة دون رهبة أو ضغط",
            "حماية الأسنان اللبنية والوقاية من تسوس الطفولة",
            "تطبيق الفلورايد والمواد السادة للشقوق السنية",
            "تعليم الطفل عادات العناية اليومية بأسلوب لطيف",
          ],
        },
      ],
    },
    specialties: {
      eyebrow: "التخصصات",
      title1: "رعاية تبدأ",
      title2: "من احتياجك",
      subtitle: "تنظيم متكامل للمسارات العلاجية لضمان تلقيك الاستشارة الدقيقة في التخصص الأنسب لحالتك دون تشتت.",
      items: [
        {
          id: "spec-general",
          title: "العناية العامة والوقائية",
          subtitle: "صحة مستمرة",
          description: "تنظيم الفحوصات الدورية ومراقبة صحة الفم لتقليل التدخلات المعقدة مستقبلاً.",
          tags: ["فحص إكلينيكي", "تنظيف وقائي", "عناية مبكرة"],
        },
        {
          id: "spec-ortho",
          title: "التقويم والإطباق",
          subtitle: "توازن وظيفي",
          description: "إعادة التوازن الميكانيكي والجمالي للأسنان بالاعتماد على دراسة قياسات الفكين.",
          tags: ["قوالب شفافة", "تقويم تقليدي", "ضبط الإطباق"],
        },
        {
          id: "spec-implants",
          title: "الزراعة والاستعاضة",
          subtitle: "تعويض متقن",
          description: "حلول استعاضة متخصصة تهدف إلى استعادة وظيفة المضغ والراحة اليومية.",
          tags: ["تقييم عظمي", "تعويضات ثابتة", "متابعة طويلة"],
        },
        {
          id: "spec-cosmetics",
          title: "التجميل والابتسامة",
          subtitle: "طبيعية وبسيطة",
          description: "تحسينات جمالية مدروسة تحافظ على الملامح الطبيعية ولا تعتمد على المبالغة.",
          tags: ["تفتيح آمن", "تناغم لوني", "ترميم جمالي"],
        },
        {
          id: "spec-perio",
          title: "اللثة والجذور",
          subtitle: "أساس متين",
          description: "التركيز على صحة العظم والأنسجة اللثوية التي تشكل القاعدة الأساسية لأسنانك.",
          tags: ["أنسجة داعمة", "قنوات الجذور", "استقرار السن"],
        },
      ],
    },
    doctors: {
      eyebrow: "الفريق",
      title1: "تعرف على من",
      title2: "يقف خلف العناية",
      subtitle: "نحرص على أن تتم الاستشارات السريرية من قِبل كفاءات مهنية مرخصة تضع راحة المريض ودقة التشخيص أولاً.",
      placeholderTitle: "بيانات الطبيب ستظهر هنا عند إضافتها",
      placeholderDesc: "التزاماً بمعايير الموثوقية الطبية، يتم نشر البيانات والتراخيص المهنية للأطباء الاستشاريين فور اعتمادها وتحديث ملفات الكادر الطبي السريري.",
      feature1Title: "التقييم السريري",
      feature1Desc: "استشارات شخصية مباشرة تراعي الحالة الصحية العامة.",
      feature2Title: "الخصوصية التامة",
      feature2Desc: "سرية كاملة للملفات وسجلات العناية والمراجعة.",
      feature3Title: "الوضوح المسبق",
      feature3Desc: "شرح مستفيض لخطوات العلاج قبل البدء بأي إجراء.",
    },
    comfort: {
      eyebrow: "تجربة المريض",
      title1: "مساحة هادئة،",
      title2: "تجعل الزيارة أبسط",
      description: "نصمم تجربة رقمية ومرئية أكثر وضوحًا للمريض، من معرفة الخدمة إلى طلب الموعد، بعيداً عن القلق والإجراءات المرهقة.",
      pillar1Title: "بيئة خالية من التوتر",
      pillar1Desc: "إضاءة طبيعية وألوان مهدئة تمنحك إحساساً بالسكينة قبل وأثناء كل فحص.",
      pillar2Title: "احترام الوقت والخصوصية",
      pillar2Desc: "مواعيد محددة بدقة تقلل أوقات الانتظار وتمنحك جلسة كاملة ومستحقة مع الطبيب.",
      pillar3Title: "إصغاء حقيقي لاحتياجك",
      pillar3Desc: "نأخذ الوقت الكافي للإجابة على كل استفساراتك ومناقشة تفاصيل الخطة العلاجية.",
      cta: "احجز موعدك",
      photoTag: "المعايير المعمارية للعيادة",
      photoDesc: "صُممت أروقة العيادة لتجمع بين الدقة الطبية وأجواء الراحة الفندقية الراقية.",
    },
    emergency: {
      eyebrow: "عناية عاجلة",
      title: "لديك ألم أو مشكلة تحتاج إلى تقييم؟",
      description: "اطلب التواصل مع العيادة لمعرفة الإجراء المناسب والخطوة التالية لمساعدتك في أسرع وقت متاح دون تأخير.",
      disclaimer: "* تنويه: للحالات الإسعافية الشديدة أو النزيف الحاد، يرجى التوجه فوراً إلى أقرب طوارئ طبية عامة.",
      callNow: "اتصل الآن",
      urgentCta: "طلب موعد عاجل",
      contactCta: "تواصل مع العيادة",
    },
    resources: {
      eyebrow: "إرشادات ومعلومات",
      title: "دليل المريض",
      subtitle: "إرشادات عامة ومعلومات تثقيفية موثوقة لمساعدتك في الاستعداد لموعدك والعناية اليومية بصحة فمك وأسنانك.",
      viewGuide: "عرض الدليل",
      modalClose: "حسناً، فهمت ذلك",
      items: [
        {
          id: "res-before",
          category: "إرشادات عامة",
          title: "قبل موعدك",
          description: "خطوات بسيطة تساعدك على الاستعداد لزيارتك الأولى بهدوء وراحة.",
          content: [
            "تناول وجبة خفيفة ومناسبة قبل القدوم إلى العيادة (ما لم يُطلب غير ذلك).",
            "تفريش الأسنان واستخدام الخيط برفق قبل الزيارة للمساعدة في فحص أكثر دقة.",
            "تدوين أي أسئلة أو مخاوف تود طرحها على الطبيب خلال جلسة الاستشارة.",
            "إحضار قائمة الأدوية الحالية أو الفحوصات السابقة إن وُجدت.",
          ],
        },
        {
          id: "res-after",
          category: "متابعة",
          title: "بعد العلاج",
          description: "إرشادات عامة للمحافظة على الراحة والتعافي الهادئ بعد الزيارة.",
          content: [
            "الالتزام بتعليمات الطبيب المباشرة الخاصة بالإجراء السريري المنجز.",
            "تجنب المشروبات الساخنة جداً أو الأطعمة الصلبة خلال الساعات الأولى.",
            "التواصل مع العيادة فوراً في حال استمرار شعور غير معتاد أو ألم متزايد.",
            "أخذ قسط كافٍ من الراحة وشرب كمية مناسبة من الماء.",
          ],
        },
        {
          id: "res-daily",
          category: "صحة الفم",
          title: "العناية اليومية",
          description: "عادات وقائية أساسية تعزز صحة اللثة وقوة ميناء الأسنان.",
          content: [
            "تفريش الأسنان مرتين يومياً على الأقل بمعجون يحتوي على الفلورايد.",
            "استخدام خيط الأسنان الطبي يومياً لإزالة الرواسب بين الأسنان.",
            "تنظيف اللسان بلطف للمساعدة في الحفاظ على نفس منتعش وبيئة فموية نظيفة.",
            "تقليل السكريات والمشروبات الحمضية بين الوجبات الرئيسية.",
          ],
        },
        {
          id: "res-topics",
          category: "تثقيف",
          title: "مواضيع صحة الفم",
          description: "معلومات مبسطة حول مشكلات الفم الشائعة وطرق الوقاية منها.",
          content: [
            "أسباب نزيف اللثة المبكر وكيفية تداركه قبل تطوره.",
            "العوامل المؤثرة على حساسية الأسنان تجاه المشروبات الباردة والساخنة.",
            "أهمية الأسنان اللبنية في توجيه بزوغ الأسنان الدائمة عند الأطفال.",
            "دور الإطباق الصحيح في حماية مفاصل الفك من الإجهاد.",
          ],
        },
      ],
    },
    journey: {
      eyebrow: "رحلتك معنا",
      title1: "من أول سؤال",
      title2: "إلى الخطة المناسبة",
      subtitle: "خطوات واضحة وبسيطة تضمن حصولك على الرعاية السريرية المناسبة مع فريق متخصص.",
      disclaimerIntro: "💡",
      disclaimerHighlight: "تنويه مهم:",
      disclaimerBody: "يتم التقييم السريري الدقيق وتحديد خطة العلاج المناسبة مباشرة داخل العيادة بعد الفحص المباشر من قِبل الطبيب المختص.",
      startCta: "ابدأ بحجز موعد استشارة أولية",
      steps: [
        {
          num: "01",
          title: "احجز الموعد",
          desc: "حدد نوع الزيارة والوقت الأنسب لك عبر النموذج الرقمي ليتواصل معك فريق الاستقبال.",
          tag: "خطوة أساسية في الرعاية",
        },
        {
          num: "02",
          title: "التقييم الأولي",
          desc: "جلسة فحص سريري هادئة وشاملة لفهم المشكلة أو الفحص الوقائي المطلوب داخل العيادة.",
          tag: "خطوة أساسية في الرعاية",
        },
        {
          num: "03",
          title: "مناقشة الخيارات",
          desc: "استعراض كافة الحلول الطبية المتاحة وتوضيح مراحل العلاج والخيارات المناسبة لحالتك.",
          tag: "خطوة أساسية في الرعاية",
        },
        {
          num: "04",
          title: "خطة العلاج",
          desc: "البدء بالإجراء وفق جدول زمني متفق عليه ومريح يضمن أعلى درجات العناية والمتابعة.",
          tag: "خطوة أساسية في الرعاية",
        },
      ],
    },
    about: {
      eyebrow: "عن نَقاء",
      title1: "نبدأ من الإنسان،",
      title2: "قبل أن نبدأ من العلاج",
      body1: "نَقاء علامة تجريبية لعيادة أسنان صُممت لتقديم تجربة رقمية أكثر هدوءًا ووضوحًا حول الخدمات والمواعيد ومعلومات العناية بالفم والأسنان.",
      body2: "نؤمن بأن زيارة طبيب الأسنان لا ينبغي أن تكون مصدر رهبة أو حيرة للمريض، بل تجربة متزنة تبدأ من الشفافية والراحة النفسية وتنتهي بخطة علاجية تراعي أولوياتك الفعلية.",
      feature1Title: "راحة المريض أولاً",
      feature1Desc: "تجهيزات سريرية وبيئة هادئة للحد من قلق الزيارات السنية.",
      feature2Title: "الشفافية الكاملة",
      feature2Desc: "توضيح تفاصيل كل خطوة سريرية قبل البدء بتنفيذها.",
      locationBadge: "الرياض، المملكة العربية السعودية",
      locationDesc: "مساحة مخصصة للعناية بصحة الأسنان بهدوء واحترافية.",
    },
    location: {
      eyebrow: "زورنا",
      title1: "موقع واضح،",
      title2: "ووصول أسهل",
      subtitle: "الرياض، المملكة العربية السعودية — سهولة في الوصول وأماكن مخصصة للمراجعين.",
      addressHeading: "عنوان العيادة",
      addressEmpty: "سيظهر موقع العيادة هنا عند إضافة البيانات. (الرياض، المملكة العربية السعودية)",
      parkingText: "مواقف مريحة ومخصصة لمراجعي العيادة.",
      accessText: "طرق رئيسية تسهل الوصول من مختلف أحياء الرياض.",
      directContact: "للتواصل والاستفسار المباشر",
      hoursHeading: "أوقات العمل",
      hoursEmpty1: "سيتم إدراج جدول أوقات العمل الرسمية عند الاعتماد.",
      hoursEmpty2: "تستقبل العيادة طلبات المواعيد عبر الموقع الإلكتروني.",
      hoursFooter: "يتم تنسيق المواعيد مسبقاً لضمان عدم حدوث فترات انتظار طويلة.",
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title1: "إجابات واضحة",
      title2: "لاستفساراتك",
      subtitle: "إليك أبرز الإجابات حول تنظيم المواعيد وجلسات الاستشارة وزيارة العيادة.",
      items: [
        {
          id: "faq-1",
          question: "كيف أحجز موعدًا؟",
          answer: "يمكنك إرسال طلب الموعد عبر النموذج الرقمي في هذه الصفحة، وتحديد اليوم والوقت ونوع الاستشارة المناسبة لك. سيتواصل معك فريق الاستقبال لتأكيد تفاصيل الموعد والرد على أي استفسار.",
        },
        {
          id: "faq-2",
          question: "ماذا أحتاج قبل الموعد؟",
          answer: "يكفي الحضور قبل الموعد بنحو عشر دقائق، وإحضار هويتك الوطنية أو إقامتك، مع إفادة الفريق الطبي بأي سوابق صحية أو أدوية منتظمة تتناولها لضمان تقديم العناية بأمان.",
        },
        {
          id: "faq-3",
          question: "هل يمكن طلب موعد لحالة عاجلة؟",
          answer: "نعم، يمكنك اختيار خيار 'ألم أو حالة طارئة' في نموذج طلب الموعد أو التواصل المباشر مع العيادة ليتم توجيهك إلى الإجراء المناسب في أقرب فرصة ممكنة.",
        },
        {
          id: "faq-4",
          question: "كيف أعرف الخدمة المناسبة لي؟",
          answer: "تبدأ أي رحلة علاجية عادةً بجلسة تقييم وفحص سريري مع الطبيب لمناقشة الحالة وفهم أهدافك، ثم يتم وضع خطة علاجية مخصصة ومفصلة تراعي أولوياتك واحتياجك الفعلي.",
        },
        {
          id: "faq-5",
          question: "هل يمكن تعديل الموعد؟",
          answer: "نعم، يمكنك التواصل مع فريق التنسيق قبل موعدك بوقت كافٍ لتعديل الوقت أو اليوم بما يتناسب مع جدولك وجدول العيادة المتاح.",
        },
        {
          id: "faq-6",
          question: "هل تقدم العيادة استشارات قبل العلاج؟",
          answer: "نعم، نؤمن بأن فهم خطة العلاج خطوة أساسية لراحة المريض؛ لذا تسبق معظم الإجراءات جلسة استشارية وتوضيح لكافة الخيارات المتاحة قبل البدء بأي خطوة.",
        },
      ],
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "لديك سؤال؟",
      subtitle: "أرسل استفسارك وسنساعدك في معرفة الخطوة المناسبة للتواصل مع العيادة وتحديد الموعد الملائم.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف المباشر",
      whatsappLabel: "محادثة واتساب",
      whatsappCta: "مراسلة العيادة",
      bookDirectCta: "احجز موعدك مباشرة",
      formTitle: "نموذج الاستفسار",
      nameLabel: "الاسم",
      phoneLabelField: "رقم الهاتف",
      typeLabel: "نوع الاستفسار",
      msgLabel: "رسالتك",
      submitCta: "إرسال الاستفسار",
      successTitle: "تم استلام استفسارك",
      successDesc: "شكراً لتواصلك معنا. سنقوم بمراجعة استفسارك والرد عليك عبر رقم الهاتف المسجل في أقرب وقت.",
      anotherInquiryCta: "إرسال استفسار آخر",
      inquiryOptions: [
        "استفسار عن الخدمات",
        "استفسار عن المواعيد",
        "استفسار طبي عام",
        "أخرى",
      ],
    },
    footer: {
      tagline: "تجربة أكثر هدوءًا للعناية بصحة الفم والأسنان.",
      demoNote: "* علامة تجريبية مصممة لأغراض العرض والتصميم المعاصر ولا تمثل منشأة طبية قائمة.",
      quickLinks: "روابط سريعة",
      servicesTitle: "خدمات العناية",
      bookPre: "طلب موعد مسبق",
      copyright: "© نَقاء لطب الأسنان — للاستخدام التجريبي",
      backToTop: "العودة للأعلى",
    },
  },
  en: {
    nav: {
      brand: "NAQAA",
      brandSubtitle: "Dental Clinic",
      home: "Home",
      services: "Services",
      specialties: "Specialties",
      doctors: "Team",
      about: "About",
      contact: "Contact",
      exploreServices: "Explore Services",
      bookAppointment: "Book Appointment",
      bookShort: "Book",
      langSwitch: "عربي",
      langName: "العربية",
    },
    hero: {
      eyebrow: "Care • Smile • Oral Health",
      headlineLine1: "Your smile begins",
      headlineLine2: "with serene care",
      description: "A contemporary experience in oral healthcare, from your initial clinical examination to a tailored treatment plan.",
      primaryCta: "Book Appointment",
      secondaryCta: "Explore Services",
      mainCardSmall: "Care begins in the details",
      mainCardTitle1: "A space crafted",
      mainCardTitle2: "for peace of mind",
      mainCardDesc: "A modern clinical sanctuary in Riyadh balancing patient tranquility with clinical precision from the moment of arrival.",
      secondCardTitle1: "A calm journey,",
      secondCardTitle2: "from welcome to appointment",
      secondCardBadge: "Privacy & Individual Care",
      brandVisionLabel: "Naqaa Vision",
      brandVisionSubtitle: "Riyadh — Kingdom of Saudi Arabia",
      brandVisionDesc: "A design-forward dental practice concept built to elevate the clinical and digital experience.",
      brandVisionFoot: "Structured schedule • Rigorous clinical care",
    },
    appointment: {
      eyebrow: "Appointment",
      title1: "Choose the time",
      title2: "that suits you",
      subtitle: "Submit your preferred visit time and details, and our reception team at Naqaa will connect with you to confirm your schedule.",
      nameLabel: "Full Name",
      namePlaceholder: "e.g., Sarah Al-Mansour",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+966 5X XXX XXXX",
      typeLabel: "Appointment Type",
      dateLabel: "Preferred Date",
      timeLabel: "Preferred Period",
      notesLabel: "Notes or Reason for Visit (Optional)",
      notesPlaceholder: "Are you experiencing specific discomfort, or do you have any particular questions for us?",
      disclaimer: "* This submission is sent as an initial scheduling inquiry; our reception desk will confirm your final slot.",
      submitCta: "Request Appointment",
      callCta: "Call Clinic",
      successTitle: "Appointment Request Received",
      successMsg: "Thank you. Your inquiry has been registered. Our reception team will get in touch shortly to finalize the ideal time slot for you.",
      typeField: "Type:",
      timeField: "Time:",
      dateField: "Requested Date:",
      newBookingCta: "Submit Another Request",
      browseServicesCta: "Browse Services",
      types: [
        "Checkup & Consultation",
        "Dental Hygiene & Cleaning",
        "Discomfort / Urgent Care",
        "Dental Implants",
        "Orthodontics & Aligners",
        "Cosmetic Dentistry",
        "Treatment Follow-up",
        "Other Visit",
      ],
      timeSlots: [
        "Morning (9:00 AM - 1:00 PM)",
        "Afternoon (1:00 PM - 5:00 PM)",
        "Evening (5:00 PM - 9:00 PM)",
      ],
    },
    services: {
      eyebrow: "Services",
      title1: "The care you need,",
      title2: "in one place",
      subtitle: "Comprehensive oral health solutions, beginning with an accurate clinical assessment and ending in a customized plan for you.",
      detailsCta: "Service Details",
      consultationCta: "Consultation Request",
      modalPillarsLabel: "Key focus areas for this service:",
      modalDisclaimer: "Professional notice: Clinical plans and treatment options are determined following an in-person clinical examination at the clinic.",
      modalClose: "Close",
      modalBookService: "Book for this Service",
      items: [
        {
          id: "general-dentistry",
          title: "General Dentistry",
          description: "Essential preventive exams and foundational dental care tailored to your specific clinical needs.",
          accentBadge: "Routine Checkups & Prevention",
          cta: "Request Consultation",
          details: [
            "Comprehensive clinical examination of teeth and gums",
            "Professional scaling, plaque removal, and polishing",
            "Evaluation of existing restorations and caries prevention",
            "Personalized daily hygiene and preventive guidance",
          ],
        },
        {
          id: "orthodontics",
          title: "Orthodontics",
          description: "Solutions to align teeth and optimize bite mechanics following careful clinical case evaluation.",
          accentBadge: "Alignment & Functional Occlusion",
          cta: "Request Consultation",
          details: [
            "Detailed study of jaw proportions and bite patterns",
            "Clear aligners and modern orthodontic options",
            "Precise periodic monitoring to guide tooth movement",
            "Retention plans to support lasting functional stability",
          ],
        },
        {
          id: "implants",
          title: "Dental Implants",
          description: "Consultations and structured treatment pathways for missing teeth after clinical evaluation.",
          accentBadge: "Precision Prosthetics",
          cta: "Request Consultation",
          details: [
            "Rigorous clinical assessment of bone density and tissue",
            "Discussion of fixed restorative options suitable for you",
            "Transparent procedural steps and a comfortable timeline",
            "Ongoing post-placement clinical monitoring and care",
          ],
        },
        {
          id: "cosmetic",
          title: "Cosmetic Dentistry",
          description: "Aesthetic options designed to harmonize smile appearance with natural proportions.",
          accentBadge: "Natural Smile Harmony",
          cta: "Request Consultation",
          details: [
            "Safe clinical whitening with sensitivity management",
            "Front teeth proportion and harmony evaluation",
            "High-precision aesthetic ceramic restorative options",
            "Preserving understated natural beauty without exaggeration",
          ],
        },
        {
          id: "periodontics-endodontics",
          title: "Periodontics & Endodontics",
          description: "Gum health management and root canal treatments within a thorough diagnostic framework.",
          accentBadge: "Tissue & Root Care",
          cta: "Request Consultation",
          details: [
            "Treatment of gum inflammation and supporting tissue health",
            "Root canal therapy aimed at alleviating source of pain",
            "Preserving natural tooth structure whenever clinically viable",
            "Preventive programs to reduce recurrent periodontal issues",
          ],
        },
        {
          id: "pediatric",
          title: "Pediatric Dentistry",
          description: "An experience designed to be gentle, reassuring, and stress-free for young patients.",
          accentBadge: "Gentle Child-Friendly Space",
          cta: "Request Consultation",
          details: [
            "Gentle first exploratory visits without stress or pressure",
            "Protecting primary teeth and preventing early childhood caries",
            "Fluoride applications and preventive fissure sealants",
            "Teaching daily oral habits through positive reinforcement",
          ],
        },
      ],
    },
    specialties: {
      eyebrow: "Specialties",
      title1: "Care structured",
      title2: "around your needs",
      subtitle: "An organized clinical pathway ensuring you receive focused care from the right discipline without distraction.",
      items: [
        {
          id: "spec-general",
          title: "General & Preventive Care",
          subtitle: "Long-Term Health",
          description: "Organizing routine checkups to maintain oral health and minimize future complex interventions.",
          tags: ["Clinical Exam", "Preventive Cleaning", "Early Care"],
        },
        {
          id: "spec-ortho",
          title: "Orthodontics & Occlusion",
          subtitle: "Functional Balance",
          description: "Restoring mechanical balance and alignment grounded in cephalometric and jaw analysis.",
          tags: ["Clear Aligners", "Traditional Systems", "Occlusal Tuning"],
        },
        {
          id: "spec-implants",
          title: "Implantology & Prosthetics",
          subtitle: "Precision Restoration",
          description: "Specialized restorative solutions aimed at recovering masticatory function and daily comfort.",
          tags: ["Bone Assessment", "Fixed Solutions", "Long-Term Follow-up"],
        },
        {
          id: "spec-cosmetics",
          title: "Aesthetics & Smile Design",
          subtitle: "Natural & Subtle",
          description: "Thoughtful cosmetic enhancements that respect your natural facial anatomy without artificiality.",
          tags: ["Safe Whitening", "Color Balance", "Ceramic Artistry"],
        },
        {
          id: "spec-perio",
          title: "Periodontics & Endodontics",
          subtitle: "Solid Foundation",
          description: "Prioritizing the bone and periodontal tissues that form the essential anchor for your smile.",
          tags: ["Supporting Tissues", "Root Canals", "Tooth Longevity"],
        },
      ],
    },
    doctors: {
      eyebrow: "The Team",
      title1: "Meet the professionals",
      title2: "behind your care",
      subtitle: "We ensure all clinical consultations are conducted by licensed dental practitioners who prioritize patient comfort and precision.",
      placeholderTitle: "Doctor profiles will appear here once updated",
      placeholderDesc: "In accordance with medical transparency standards, professional profiles and credentials of consultant doctors will be listed upon formal credential verification.",
      feature1Title: "Clinical Diagnosis",
      feature1Desc: "Direct in-person consultation considering your overall health.",
      feature2Title: "Absolute Privacy",
      feature2Desc: "Full confidentiality for your records and clinical history.",
      feature3Title: "Total Transparency",
      feature3Desc: "Comprehensive explanation of steps prior to starting any procedure.",
    },
    comfort: {
      eyebrow: "Patient Experience",
      title1: "A serene environment,",
      title2: "making every visit simpler",
      description: "We craft a clear, welcoming physical and digital journey for patients, from exploring treatments to booking visits, free of unnecessary anxiety.",
      pillar1Title: "Stress-Free Environment",
      pillar1Desc: "Natural illumination and soothing neutral palettes provide calm before and during appointments.",
      pillar2Title: "Respect for Time & Privacy",
      pillar2Desc: "Carefully structured slots minimize waiting and give you dedicated, unhurried time with the clinician.",
      pillar3Title: "Attentive Listening",
      pillar3Desc: "We dedicate time to listen to your concerns and review all aspects of your treatment plan.",
      cta: "Book Appointment",
      photoTag: "Architectural Standards",
      photoDesc: "Clinic interiors engineered to unite clinical rigor with hospitality-grade tranquility.",
    },
    emergency: {
      eyebrow: "Urgent Dental Care",
      title: "Experiencing acute pain or an urgent dental issue?",
      description: "Contact the clinic to determine the next immediate step and arrange evaluation at the earliest available time.",
      disclaimer: "* Notice: For severe medical emergencies, facial trauma, or uncontrolled bleeding, please proceed immediately to the nearest hospital emergency room.",
      callNow: "Call Now",
      urgentCta: "Request Urgent Visit",
      contactCta: "Contact Clinic",
    },
    resources: {
      eyebrow: "Guidance & Information",
      title: "Patient Guide",
      subtitle: "Clear, reliable educational resources to help you prepare for your visits and maintain everyday dental wellness.",
      viewGuide: "View Guide",
      modalClose: "Understood",
      items: [
        {
          id: "res-before",
          category: "General Preparation",
          title: "Before Your Appointment",
          description: "Simple steps to help you prepare comfortably for your initial dental visit.",
          content: [
            "Eat a light, balanced meal prior to arrival (unless otherwise instructed).",
            "Brush and gently floss your teeth before your visit to aid in accurate examination.",
            "Jot down any specific questions or concerns you would like to discuss with the doctor.",
            "Bring along a list of current medications or previous relevant dental records.",
          ],
        },
        {
          id: "res-after",
          category: "Aftercare",
          title: "Post-Treatment Care",
          description: "Essential guidelines to maintain comfort and smooth recovery following a procedure.",
          content: [
            "Adhere strictly to the specific aftercare instructions provided by your dental team.",
            "Avoid very hot beverages or hard foods during the first few hours.",
            "Reach out to the clinic promptly if you experience unexpected or increasing discomfort.",
            "Stay well-hydrated and allow yourself adequate time to rest.",
          ],
        },
        {
          id: "res-daily",
          category: "Oral Wellness",
          title: "Everyday Care",
          description: "Core preventive daily habits that strengthen enamel and protect gum health.",
          content: [
            "Brush teeth at least twice daily with a fluoride-containing toothpaste.",
            "Use dental floss daily to gently clean interdental surfaces.",
            "Clean your tongue gently to maintain freshness and a balanced oral environment.",
            "Limit frequent consumption of sugary snacks and acidic beverages between meals.",
          ],
        },
        {
          id: "res-topics",
          category: "Education",
          title: "Oral Health Insights",
          description: "Straightforward insights into common dental topics and proactive preventive measures.",
          content: [
            "Early indicators of gum inflammation and how to address them proactively.",
            "Factors influencing tooth sensitivity to cold and hot stimuli.",
            "The vital role of primary teeth in guiding permanent tooth eruption.",
            "How proper dental occlusion protects the temporomandibular jaw joint from strain.",
          ],
        },
      ],
    },
    journey: {
      eyebrow: "Your Journey",
      title1: "From your first question",
      title2: "to the right treatment plan",
      subtitle: "Four clear and reassuring steps ensuring you receive appropriate clinical attention with a dedicated team.",
      disclaimerIntro: "💡",
      disclaimerHighlight: "Important note:",
      disclaimerBody: "Accurate clinical evaluation and personalized treatment planning occur directly within the clinic following an in-person examination by a dental practitioner.",
      startCta: "Start by Booking an Initial Consultation",
      steps: [
        {
          num: "01",
          title: "Book the Visit",
          desc: "Select your preferred visit type and time via our digital form so our reception team can reach out.",
          tag: "Core Step in Care",
        },
        {
          num: "02",
          title: "Initial Assessment",
          desc: "A calm, thorough in-clinic examination to evaluate concerns and review oral health status.",
          tag: "Core Step in Care",
        },
        {
          num: "03",
          title: "Discuss Options",
          desc: "Transparent discussion of viable clinical choices, timelines, and tailored recommendations.",
          tag: "Core Step in Care",
        },
        {
          num: "04",
          title: "Treatment Pathway",
          desc: "Embarking on the agreed care plan with predictable pacing and consistent clinical support.",
          tag: "Core Step in Care",
        },
      ],
    },
    about: {
      eyebrow: "About Naqaa",
      title1: "We begin with the person,",
      title2: "before we begin treatment",
      body1: "Naqaa is a contemporary dental practice concept designed to deliver a calmer, more transparent digital and clinical experience around dental services, appointments, and oral wellness.",
      body2: "We believe a visit to the dental clinic should never evoke anxiety or uncertainty. It should be an unhurried, reassuring experience rooted in clear communication and genuine care.",
      feature1Title: "Patient Comfort First",
      feature1Desc: "Quiet clinical architecture thoughtfully organized to reduce apprehension.",
      feature2Title: "Complete Clarity",
      feature2Desc: "Transparent explanations of every clinical step before beginning any treatment.",
      locationBadge: "Riyadh, Kingdom of Saudi Arabia",
      locationDesc: "A dedicated sanctuary for oral healthcare characterized by poise and professionalism.",
    },
    location: {
      eyebrow: "Visit Us",
      title1: "Clear location,",
      title2: "effortless access",
      subtitle: "Riyadh, Saudi Arabia — Convenient accessibility and dedicated parking for clinic visitors.",
      addressHeading: "Clinic Address",
      addressEmpty: "Clinic location details will appear here upon configuration. (Riyadh, Saudi Arabia)",
      parkingText: "Spacious, dedicated parking available for patients.",
      accessText: "Direct connectivity from Riyadh's primary thoroughfares.",
      directContact: "Direct Inquiries & Questions",
      hoursHeading: "Opening Hours",
      hoursEmpty1: "Official operating hours timetable will be published upon scheduling accreditation.",
      hoursEmpty2: "The clinic receives appointment inquiries around the clock online.",
      hoursFooter: "All appointments are scheduled in advance to ensure minimal waiting times.",
    },
    faq: {
      eyebrow: "FAQ",
      title1: "Clear answers",
      title2: "to your questions",
      subtitle: "Find answers regarding visit coordination, initial consultations, and clinic procedures.",
      items: [
        {
          id: "faq-1",
          question: "How do I book an appointment?",
          answer: "You can submit an appointment request through the digital form on this page, specifying your preferred day, time, and service type. Our team will contact you to confirm final arrangements.",
        },
        {
          id: "faq-2",
          question: "What should I prepare prior to my visit?",
          answer: "Please arrive approximately 10 minutes early with your ID. Be sure to inform our clinical staff of any current medical conditions or medications you take regularly to ensure safe care.",
        },
        {
          id: "faq-3",
          question: "Can I request an urgent appointment for acute pain?",
          answer: "Yes, you can choose 'Discomfort / Urgent Care' in the appointment form or call the clinic directly so we can schedule you at the earliest available slot.",
        },
        {
          id: "faq-4",
          question: "How do I know which service is right for me?",
          answer: "Every treatment pathway begins with an initial clinical examination with the dentist to assess your oral health and discuss your goals, followed by a personalized plan.",
        },
        {
          id: "faq-5",
          question: "Can I reschedule my appointment?",
          answer: "Yes, simply contact our reception desk in advance, and we will gladly adjust your date and time to accommodate your schedule.",
        },
        {
          id: "faq-6",
          question: "Does the clinic offer pre-treatment consultations?",
          answer: "Yes, we believe thorough understanding is fundamental to patient peace of mind. Consultations precede all non-emergency procedures.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Have a question?",
      subtitle: "Send your inquiry and our team will guide you on the best next step to connect with the clinic.",
      emailLabel: "Email Address",
      phoneLabel: "Direct Phone",
      whatsappLabel: "WhatsApp Chat",
      whatsappCta: "Message the Clinic",
      bookDirectCta: "Book Your Appointment Directly",
      formTitle: "Inquiry Form",
      nameLabel: "Name",
      phoneLabelField: "Phone Number",
      typeLabel: "Inquiry Category",
      msgLabel: "Your Message",
      submitCta: "Send Inquiry",
      successTitle: "Inquiry Received",
      successDesc: "Thank you for reaching out. We will review your message and reply via your registered phone number shortly.",
      anotherInquiryCta: "Send Another Inquiry",
      inquiryOptions: [
        "Services Inquiry",
        "Appointments Inquiry",
        "General Medical Inquiry",
        "Other",
      ],
    },
    footer: {
      tagline: "A calmer, more serene oral healthcare experience.",
      demoNote: "* Fictional demonstration clinic designed for contemporary digital presentation purposes.",
      quickLinks: "Quick Navigation",
      servicesTitle: "Care Services",
      bookPre: "Request Appointment",
      copyright: "© Naqaa Dental Clinic — For demonstration use",
      backToTop: "Back to Top",
    },
  },
};
