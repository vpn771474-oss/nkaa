export interface ServiceItem {
  id: string;
  enabled: boolean;
  title: string;
  description: string;
  image: string;
  accentColor: string;
  accentBadge: string;
  cta: string;
  details: string[];
}

export interface SpecialtyItem {
  id: string;
  enabled: boolean;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface DoctorItem {
  id: string;
  enabled: boolean;
  name: string;
  role: string;
  specialty: string;
  photo?: string;
  bio?: string;
  education?: string;
  credentials?: string;
  languages?: string[];
  appointmentCTA?: string;
}

export interface FaqItem {
  id: string;
  enabled: boolean;
  question: string;
  answer: string;
  category: string;
  featured?: boolean;
}

export interface PatientResourceItem {
  id: string;
  enabled: boolean;
  title: string;
  description: string;
  category: string;
  content: string[];
  cta: string;
}

export interface ClinicData {
  name: string;
  shortName: string;
  city: string;
  region: string;
  country: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: Record<string, string> | string;
  emergencyPhone: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    x: string;
  };
  doctors: DoctorItem[];
  services: ServiceItem[];
  specialties: SpecialtyItem[];
  faqs: FaqItem[];
  patientResources: PatientResourceItem[];
  testimonials: Array<{
    id: string;
    name: string;
    quote: string;
    service: string;
  }>;
}

export const clinicData: ClinicData = {
  name: "نَقاء لطب الأسنان",
  shortName: "نَقاء",
  city: "الرياض",
  region: "منطقة الرياض",
  country: "المملكة العربية السعودية",
  phone: "", // Configurable: empty by default per instructions
  whatsapp: "", // Configurable: empty by default per instructions
  email: "care@naqaa-dental.demo",
  address: "", // Configurable: empty by default per instructions
  hours: "", // Configurable: empty by default per instructions
  emergencyPhone: "",
  socialLinks: {
    instagram: "",
    facebook: "",
    x: "",
  },
  // Empty doctor list per strict rule: "If no real doctor data is supplied, do NOT invent names, degrees... Instead display: 'بيانات الطبيب ستظهر هنا عند إضافتها.'"
  doctors: [],
  services: [
    {
      id: "general-dentistry",
      enabled: true,
      title: "طب الأسنان العام",
      description: "فحوصات وعناية أساسية بصحة الفم والأسنان ضمن خطة تناسب احتياج كل حالة.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80",
      accentColor: "#3A293B",
      accentBadge: "فحص دوري وعناية وقائية",
      cta: "طلب استشارة عامة",
      details: [
        "الفحص الإكلينيكي الشامل لصحة الفم واللثة",
        "تنظيف وتلميع الأسنان وإزالة التراكمات الجيرية",
        "تقييم الحشوات السابقة والوقاية من التسوس",
        "إرشادات مخصصة للمحافظة اليومية على نظافة الفم"
      ],
    },
    {
      id: "orthodontics",
      enabled: true,
      title: "التقويم",
      description: "خيارات لتصحيح ترتيب الأسنان وتحسين الإطباق وفق تقييم الحالة.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80",
      accentColor: "#A8B6A0",
      accentBadge: "محاذاة وإطباق وظيفي",
      cta: "طلب استشارة تقويم",
      details: [
        "دراسة قياسات الفك ونمط الإطباق السريري",
        "استعراض حلول التقويم الشفاف والقوالب العلاجية",
        "متابعات دورية دقيقة ومدروسة لضبط حركة الأسنان",
        "خطط تثبيت تدعم استقرار النتائج الوظيفية"
      ],
    },
    {
      id: "implants",
      enabled: true,
      title: "زراعة الأسنان",
      description: "استشارات وخطط علاجية لحالات فقدان الأسنان، بعد تقييم الحالة سريريًا.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
      accentColor: "#D8BFC2",
      accentBadge: "تعويض دقيق ومدروس",
      cta: "طلب استشارة زراعة",
      details: [
        "تقييم سريري دقيق لكثافة العظام وحالة اللثة",
        "مناقشة خيارات التعويض الثابت المناسبة للحالة",
        "توضيح مراحل الإجراء والجدول الزمني المريح",
        "عناية ومتابعة مستمرة بعد مرحلة التركيب"
      ],
    },
    {
      id: "cosmetic",
      enabled: true,
      title: "تجميل الأسنان",
      description: "خيارات تجميلية تهدف إلى تحسين مظهر الابتسامة وفق الحالة والاحتياج.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
      accentColor: "#A8B6A0",
      accentBadge: "تناسق طبيعي وجمالي",
      cta: "طلب استشارة تجميلية",
      details: [
        "جلسات تفتيح الأسنان الآمنة ومراقبة الحساسية",
        "دراسة تناغم الأسنان الأمامية وتناسب أبعادها",
        "خيارات الترميمات الخزفية التجميلية الدقيقة",
        "الحفاظ على المظهر الطبيعي المتناسق دون مبالغة"
      ],
    },
    {
      id: "periodontics-endodontics",
      enabled: true,
      title: "علاج اللثة والجذور",
      description: "العناية باللثة وعلاج مشكلات جذور الأسنان ضمن تقييم وخطة علاج مناسبة.",
      image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80",
      accentColor: "#68475E",
      accentBadge: "عناية متقدمة بالأنسجة والجذور",
      cta: "طلب استشارة علاجية",
      details: [
        "علاج التهابات اللثة والأنسجة الداعمة للأسنان",
        "إجراءات علاج قنوات الجذور للتخلص من مصدر الألم",
        "الحفاظ على السن الطبيعي قدر الإمكان سريريًا",
        "برامج وقائية للحد من تكرار انتكاسات اللثة"
      ],
    },
    {
      id: "pediatric",
      enabled: true,
      title: "أسنان الأطفال",
      description: "تجربة مصممة لتكون أبسط وأكثر هدوءًا للمرضى الصغار.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
      accentColor: "#F4F0E9",
      accentBadge: "بيئة مريحة ومهدئة",
      cta: "طلب موعد للأطفال",
      details: [
        "زيارات أولى استكشافية هادئة دون رهبة أو ضغط",
        "حماية الأسنان اللبنية والوقاية من تسوس الطفولة",
        "تطبيق الفلورايد والمواد السادة للشقوق السنية",
        "تعليم الطفل عادات العناية اليومية بأسلوب لطيف"
      ],
    },
  ],
  specialties: [
    {
      id: "spec-general",
      enabled: true,
      title: "العناية العامة والوقائية",
      subtitle: "صحة مستمرة",
      description: "تنظيم الفحوصات الدورية ومراقبة صحة الفم لتقليل التدخلات المعقدة مستقبلاً.",
      tags: ["فحص إكلينيكي", "تنظيف وقائي", "عناية مبكرة"],
    },
    {
      id: "spec-ortho",
      enabled: true,
      title: "التقويم والإطباق",
      subtitle: "توازن وظيفي",
      description: "إعادة التوازن الميكانيكي والجمالي للأسنان بالاعتماد على دراسة قياسات الفكين.",
      tags: ["قوالب شفافة", "تقويم تقليدي", "ضبط الإطباق"],
    },
    {
      id: "spec-implants",
      enabled: true,
      title: "الزراعة والاستعاضة",
      subtitle: "تعويض متقن",
      description: "حلول استعاضة متخصصة تهدف إلى استعادة وظيفة المضغ والراحة اليومية.",
      tags: ["تقييم عظمي", "تعويضات ثابتة", "متابعة طويلة"],
    },
    {
      id: "spec-cosmetics",
      enabled: true,
      title: "التجميل والابتسامة",
      subtitle: "طبيعية وبسيطة",
      description: "تحسينات جمالية مدروسة تحافظ على الملامح الطبيعية ولا تعتمد على المبالغة.",
      tags: ["تفتيح آمن", "تناغم لوني", "ترميم جمالي"],
    },
    {
      id: "spec-perio",
      enabled: true,
      title: "اللثة والجذور",
      subtitle: "أساس متين",
      description: "التركيز على صحة العظم والأنسجة اللثوية التي تشكل القاعدة الأساسية لأسنانك.",
      tags: ["أنسجة داعمة", "قنوات الجذور", "استقرار السن"],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      enabled: true,
      category: "المواعيد",
      featured: true,
      question: "كيف أحجز موعدًا؟",
      answer: "يمكنك إرسال طلب الموعد عبر النموذج الرقمي في هذه الصفحة، وتحديد اليوم والوقت ونوع الاستشارة المناسبة لك. سيتواصل معك فريق الاستقبال لتأكيد تفاصيل الموعد والرد على أي استفسار.",
    },
    {
      id: "faq-2",
      enabled: true,
      category: "التحضير",
      featured: true,
      question: "ماذا أحتاج قبل الموعد؟",
      answer: "يكفي الحضور قبل الموعد بنحو عشر دقائق، وإحضار هويتك الوطنية أو إقامتك، مع إفادة الفريق الطبي بأي سوابق صحية أو أدوية منتظمة تتناولها لضمان تقديم العناية بأمان.",
    },
    {
      id: "faq-3",
      enabled: true,
      category: "الحالات الطارئة",
      featured: true,
      question: "هل يمكن طلب موعد لحالة عاجلة؟",
      answer: "نعم، يمكنك اختيار خيار 'ألم أو حالة طارئة' في نموذج طلب الموعد أو التواصل المباشر مع العيادة ليتم توجيهك إلى الإجراء المناسب في أقرب فرصة ممكنة.",
    },
    {
      id: "faq-4",
      enabled: true,
      category: "الخدمات",
      featured: false,
      question: "كيف أعرف الخدمة المناسبة لي؟",
      answer: "تبدأ أي رحلة علاجية عادةً بجلسة تقييم وفحص سريري مع الطبيب لمناقشة الحالة وفهم أهدافك، ثم يتم وضع خطة علاجية مخصصة ومفصلة تراعي أولوياتك واحتياجك الفعلي.",
    },
    {
      id: "faq-5",
      enabled: true,
      category: "المواعيد",
      featured: false,
      question: "هل يمكن تعديل الموعد؟",
      answer: "نعم، يمكنك التواصل مع فريق التنسيق قبل موعدك بوقت كافٍ لتعديل الوقت أو اليوم بما يتناسب مع جدولك وجدول العيادة المتاح.",
    },
    {
      id: "faq-6",
      enabled: true,
      category: "الاستشارات",
      featured: false,
      question: "هل تقدم العيادة استشارات قبل العلاج؟",
      answer: "نعم، نؤمن بأن فهم خطة العلاج خطوة أساسية لراحة المريض؛ لذا تسبق معظم الإجراءات جلسة استشارية وتوضيح لكافة الخيارات المتاحة قبل البدء بأي خطوة.",
    },
  ],
  patientResources: [
    {
      id: "res-before",
      enabled: true,
      category: "إرشادات عامة",
      title: "قبل موعدك",
      description: "خطوات بسيطة تساعدك على الاستعداد لزيارتك الأولى بهدوء وراحة.",
      content: [
        "تناول وجبة خفيفة ومناسبة قبل القدوم إلى العيادة (ما لم يُطلب غير ذلك).",
        "تفريش الأسنان واستخدام الخيط برفق قبل الزيارة للمساعدة في فحص أكثر دقة.",
        "تدوين أي أسئلة أو مخاوف تود طرحها على الطبيب خلال جلسة الاستشارة.",
        "إحضار قائمة الأدوية الحالية أو الفحوصات السابقة إن وُجدت."
      ],
      cta: "عرض الدليل",
    },
    {
      id: "res-after",
      enabled: true,
      category: "متابعة",
      title: "بعد العلاج",
      description: "إرشادات عامة للمحافظة على الراحة والتعافي الهادئ بعد الزيارة.",
      content: [
        "الالتزام بتعليمات الطبيب المباشرة الخاصة بالإجراء السريري المنجز.",
        "تجنب المشروبات الساخنة جداً أو الأطعمة الصلبة خلال الساعات الأولى.",
        "التواصل مع العيادة فوراً في حال استمرار شعور غير معتاد أو ألم متزايد.",
        "أخذ قسط كافٍ من الراحة وشرب كمية مناسبة من الماء."
      ],
      cta: "عرض الدليل",
    },
    {
      id: "res-daily",
      enabled: true,
      category: "صحة الفم",
      title: "العناية اليومية",
      description: "عادات وقائية أساسية تعزز صحة اللثة وقوة ميناء الأسنان.",
      content: [
        "تفريش الأسنان مرتين يومياً على الأقل بمعجون يحتوي على الفلورايد.",
        "استخدام خيط الأسنان الطبي يومياً لإزالة الرواسب بين الأسنان.",
        "تنظيف اللسان بلطف للمساعدة في الحفاظ على نفس منتعش وبيئة فموية نظيفة.",
        "تقليل السكريات والمشروبات الحمضية بين الوجبات الرئيسية."
      ],
      cta: "عرض الدليل",
    },
    {
      id: "res-topics",
      enabled: true,
      category: "تثقيف",
      title: "مواضيع صحة الفم",
      description: "معلومات مبسطة حول مشكلات الفم الشائعة وطرق الوقاية منها.",
      content: [
        "أسباب نزيف اللثة المبكر وكيفية تداركه قبل تطوره.",
        "العوامل المؤثرة على حساسية الأسنان تجاه المشروبات الباردة والساخنة.",
        "أهمية الأسنان اللبنية في توجيه بزوغ الأسنان الدائمة عند الأطفال.",
        "دور الإطباق الصحيح في حماية مفاصل الفك من الإجهاد."
      ],
      cta: "عرض الدليل",
    },
  ],
  testimonials: [], // strictly empty: DO NOT fabricate patient testimonials
};
