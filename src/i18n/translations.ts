export const translations = {
  en: {
    // Nav
    home: "Home",
    explore: "Explore",
    bookings: "Bookings",
    messages: "Messages",
    profile: "Profile",
    
    // Home
    heroTitle: "Find Your Perfect Event",
    heroSubtitle: "Discover & book the best service providers",
    browseCategories: "Browse Categories",
    featuredProviders: "Featured Providers",
    popularServices: "Popular Services",
    
    // Search
    searchPlaceholder: "Search services, venues, providers...",
    
    // Explore
    categories: "Categories",
    allProviders: "All Providers",
    resultsFor: "Results for",
    noResults: "No results found",
    
    // Provider Profile
    reviews: "Reviews",
    about: "About",
    startingAt: "Starting at",
    inquire: "Inquire",
    bookNow: "Book Now",
    providerNotFound: "Provider not found",
    featured: "Featured",
    
    // Bookings
    myBookings: "My Bookings",
    noBookingsYet: "No bookings yet",
    noBookingsDesc: "When you book a service, it will appear here",
    
    // Messages
    noMessagesYet: "No messages yet",
    noMessagesDesc: "Start a conversation with a service provider",
    
    // Profile
    guestUser: "Guest User",
    signInPrompt: "Sign in to manage your account",
    signIn: "Sign In",
    favorites: "Favorites",
    notifications: "Notifications",
    settings: "Settings",
    helpSupport: "Help & Support",
    logOut: "Log Out",
    
    // Category
    categoryNotFound: "Category not found",
    noProvidersCategory: "No providers yet in this category",
    
    // Language
    switchLang: "العربية",

    // Categories
    "cat_1": "Wedding Halls",
    "cat_2": "Photographers",
    "cat_3": "Makeup Artists",
    "cat_4": "Event Planners",
    "cat_5": "DJs & Music",
    "cat_6": "Decoration",
    "cat_7": "Catering",
    "cat_8": "Car Rental",
    "cat_9": "Lighting",
  },
  ar: {
    // Nav
    home: "الرئيسية",
    explore: "استكشاف",
    bookings: "الحجوزات",
    messages: "الرسائل",
    profile: "الحساب",
    
    // Home
    heroTitle: "اعثر على حدثك المثالي",
    heroSubtitle: "اكتشف واحجز أفضل مقدمي الخدمات",
    browseCategories: "تصفح الفئات",
    featuredProviders: "مقدمو خدمات مميزون",
    popularServices: "خدمات شائعة",
    
    // Search
    searchPlaceholder: "ابحث عن خدمات، قاعات، مقدمي خدمات...",
    
    // Explore
    categories: "الفئات",
    allProviders: "جميع مقدمي الخدمات",
    resultsFor: "نتائج البحث عن",
    noResults: "لا توجد نتائج",
    
    // Provider Profile
    reviews: "التقييمات",
    about: "نبذة",
    startingAt: "يبدأ من",
    inquire: "استفسار",
    bookNow: "احجز الآن",
    providerNotFound: "مقدم الخدمة غير موجود",
    featured: "مميز",
    
    // Bookings
    myBookings: "حجوزاتي",
    noBookingsYet: "لا توجد حجوزات بعد",
    noBookingsDesc: "عند حجز خدمة، ستظهر هنا",
    
    // Messages
    noMessagesYet: "لا توجد رسائل بعد",
    noMessagesDesc: "ابدأ محادثة مع مقدم خدمة",
    
    // Profile
    guestUser: "مستخدم زائر",
    signInPrompt: "سجل دخولك لإدارة حسابك",
    signIn: "تسجيل الدخول",
    favorites: "المفضلة",
    notifications: "الإشعارات",
    settings: "الإعدادات",
    helpSupport: "المساعدة والدعم",
    logOut: "تسجيل الخروج",
    
    // Category
    categoryNotFound: "الفئة غير موجودة",
    noProvidersCategory: "لا يوجد مقدمو خدمات في هذه الفئة بعد",
    
    // Language
    switchLang: "English",

    // Categories
    "cat_1": "قاعات أفراح",
    "cat_2": "مصورون",
    "cat_3": "خبيرات تجميل",
    "cat_4": "منظمو حفلات",
    "cat_5": "دي جي وموسيقى",
    "cat_6": "ديكور",
    "cat_7": "تموين وضيافة",
    "cat_8": "تأجير سيارات",
    "cat_9": "إضاءة",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
