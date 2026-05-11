'use client';

import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

export type LanguageCode = 'en' | 'fa' | 'el';

export type LanguageCopy = {
    banner: {
        title: [string, string];
        name: string;
        description: string;
        status: string;
        stats: [string, string, string];
    };
    about: {
        heading: string;
        intro: string;
        body: string;
    };
    experience: {
        sectionTitle: string;
        recent: {
            title: string;
            company: string;
            duration: string;
            bullets: string[];
        };
        previous: {
            title: string;
            company: string;
            duration: string;
            bullets: string[];
        };
    };
    projects: {
        sectionTitle: string;
    };
    footer: {
        prompt: string;
        credit: string;
    };
    nav: {
        home: string;
        about: string;
        experience: string;
        projects: string;
        menu: string;
        social: string;
    };
    sidebar: {
        themeLight: string;
        themeDark: string;
        language: string;
        languageLabel: string;
        links: {
            linkedin: string;
            email: string;
            github: string;
        };
    };
};

const COPY: Record<LanguageCode, LanguageCopy> = {
    en: {
        banner: {
            title: ['Hello, I’m', 'Adrian.'],
            name: 'Adrian Shahnazari Darcheh',
            description:
                'A first-year Computer Engineering student at York University. I document my journey here as I explore software, AI, and technology constantly learning, building, and evolving.',
            status: 'Open to learning, collaboration, and internships.',
            stats: ['1st', 'Full', 'UI + API'],
        },
        about: {
            heading:
                'I lead with empathy for the user pairing thoughtful design, pragmatic engineering, and the curiosity that comes with being a first-year computer engineering student.',
            intro: 'Hi, I\'m Adrian Shahnazari Darcheh.',
            body: 'I\'m a fullstack engineer in progress, focused on turning ideas into reliable products and polished user experiences. My approach focuses on performance, clarity, accessibility, and responsiveness so the final product feels solid on both desktop and mobile.',
        },
        experience: {
            sectionTitle: 'My Experience',
            recent: {
                title: 'Prep / Line Cook',
                company: "Moxie's Bar & Grill — Markham, ON",
                duration: 'Sep. 2024 – Dec. 2024',
                bullets: [
                    'Executed high-volume food preparation with rigorous attention to detail and quality control under time pressure.',
                    'Collaborated cross-functionally with kitchen and front-of-house teams to meet throughput targets during peak service periods.',
                    'Demonstrated reliability and consistency across a 4-month tenure in a fast-paced, high-accountability environment.',
                ],
            },
            previous: {
                title: 'Office Assistant & Data Operations',
                company: 'Tosan Transportation — Vaughan, ON',
                duration: 'Feb. 2022 – Jun. 2022',
                bullets: [
                    'Managed high-volume document scanning, filing, and data entry workflows, maintaining accuracy across digital records systems.',
                    'Provided technical support and training to drivers on company software and device usage, improving operational efficiency.',
                    'Delivered customer-facing communications handling inquiries, demonstrating strong written and verbal skills in a fast-paced environment.',
                ],
            },
        },
        projects: {
            sectionTitle: 'Selected Projects',
        },
        footer: {
            prompt: "Let's Connect",
            credit: 'Built by Adrian Shahnazari Darcheh',
        },
        nav: {
            home: 'Home',
            about: 'About Me',
            experience: 'Experience',
            projects: 'Projects',
            menu: 'Menu',
            social: 'Social',
        },
        sidebar: {
            themeLight: 'Light mode',
            themeDark: 'Dark mode',
            language: 'Language',
            languageLabel: 'English',
            links: {
                linkedin: 'LinkedIn',
                email: 'Email',
                github: 'GitHub',
            },
        },
    },
    fa: {
        banner: {
            title: ['سلام، من', 'آدریان هستم.'],
            name: ' آدریان شاه نظری درچه',
            description:
                'دانشجوی سال اول مهندسی کامپیوتر در دانشگاه یورک هستم. اینجا مسیرم را در دنیای شاه نظری درچههوش مصنوعی و فناوری ثبت می‌کنم؛ همیشه در حال یادگیری، ساختن و رشد کردن.',
            status: 'آماده یادگیری، همکاری و فرصت‌های کارآموزی.',
            stats: ['سال اول', 'فول‌استک', 'رابط و API'],
        },
        about: {
            heading:
                'اولویت من درک نیاز کاربر است؛ ترکیبی از طراحی دقیق، مهندسی عملی و همان کنجکاوی‌ای که به‌عنوان دانشجوی سال اول مهندسی کامپیوتر همراه من است.',
            intro: 'سلام، من آدریان شاه نظری درچه هستم',
            body: 'من در مسیر تبدیل شدن به یک فول‌استک انجینیر هستم و روی ساخت محصول‌های قابل‌اعتماد و تجربه‌های کاربری صیقلی تمرکز دارم. اولویت من عملکرد، شفافیت، دسترس‌ پذیری و واکنش‌ گرایی است تا نتیجه نهایی روی دسکتاپ و موبایل محکم و خوب به نظر برسد.',
        },
        experience: {
            sectionTitle: 'تجربه من',
            recent: {
                title: 'آشپز پرپ / لاین کوک',
                company: 'موکسیز بار اند گریل — مارکم، اونتاریو',
                duration: 'سپتامبر ۲۰۲۴ – دسامبر ۲۰۲۴',
                bullets: [
                    'آماده‌سازی غذا با حجم بالا، با دقت بالا و کنترل کیفیت دقیق تحت فشار زمانی.',
                    'همکاری متقابل با تیم آشپزخانه و سالن برای رسیدن به اهداف خروجی در ساعات اوج سرویس.',
                    'نمایش قابلیت اعتماد و ثبات در طول ۴ ماه فعالیت در محیطی پرسرعت و مسئولیت‌پذیر.',
                ],
            },
            previous: {
                title: 'دستیار اداری و عملیات داده',
                company: 'توسن ترنسپورتیشن — وان، اونتاریو',
                duration: 'فوریه ۲۰۲۲ – ژوئن ۲۰۲۲',
                bullets: [
                    'مدیریت اسکن، بایگانی و ورود داده با حجم بالا و حفظ دقت در سیستم‌های ثبت دیجیتال.',
                    'ارائه پشتیبانی فنی و آموزش به رانندگان درباره نرم‌افزار و دستگاه‌های شرکت برای بهبود بهره‌وری عملیاتی.',
                    'برقراری ارتباط با مشتری برای پاسخ به پرسش‌ها و نمایش مهارت‌های قوی نوشتن و گفتاری در محیطی پرسرعت.',
                ],
            },
        },
        projects: {
            sectionTitle: 'پروژه‌های منتخب',
        },
        footer: {
            prompt: "Let's Connect",
            credit: 'ساخت توسط آدریان شاه نظری درچه ',
        },
        nav: {
            home: 'خانه',
            about: 'درباره من',
            experience: 'تجربه',
            projects: 'پروژه‌ها',
            menu: 'منو',
            social: 'شبکه‌های اجتماعی',
        },
        sidebar: {
            themeLight: 'حالت روشن',
            themeDark: 'حالت تیره',
            language: 'زبان',
            languageLabel: 'فارسی',
            links: {
                linkedin: 'لینکدین',
                email: 'ایمیل',
                github: 'گیت‌هاب',
            },
        },
    },
    el: {
        banner: {
            title: ['Γεια, είμαι ο', 'Αντριάν.'],
            name: 'Αντριάν Σιαχαναζάρι Νταρτζε',
            description:
                'Φοιτητής πρώτου έτους στη Μηχανική Υπολογιστών στο York University. Καταγράφω εδώ τη διαδρομή μου καθώς εξερευνώ λογισμικό, AI και τεχνολογία, μαθαίνοντας, χτίζοντας και εξελίσσοντας συνεχώς.',
            status: 'Ανοιχτός σε μάθηση, συνεργασία και πρακτική άσκηση.',
            stats: ['1ο', 'Full', 'UI + API'],
        },
        about: {
            heading:
                'Ξεκινώ από τον χρήστη: συνδυάζω προσεκτικό σχεδιασμό, ρεαλιστική μηχανική και την περιέργεια ενός φοιτητή πρώτου έτους στη Μηχανική Υπολογιστών.',
            intro: 'Γεια, είμαι ο Αντριάν Σιαχαναζάρι Νταρτζε.',
            body: 'Εξελίσσομαι σε fullstack engineer και επικεντρώνομαι στη δημιουργία αξιόπιστων προϊόντων και καλοδουλεμένων εμπειριών χρήστη. Δίνω προτεραιότητα στην απόδοση, τη σαφήνεια, την προσβασιμότητα και την προσαρμοστικότητα ώστε το τελικό αποτέλεσμα να λειτουργεί σωστά σε desktop και mobile.',
        },
        experience: {
            sectionTitle: 'Η Εμπειρία Μου',
            recent: {
                title: 'Prep / Line Cook',
                company: "Moxie's Bar & Grill — Markham, ON",
                duration: 'Σεπτ. 2024 – Δεκ. 2024',
                bullets: [
                    'Εκτέλεση προετοιμασίας φαγητού μεγάλης κλίμακας με αυστηρή προσοχή στη λεπτομέρεια και έλεγχο ποιότητας υπό πίεση χρόνου.',
                    'Συνεργασία διατομεακά με τις ομάδες κουζίνας και αίθουσας για επίτευξη στόχων παραγωγής στις ώρες αιχμής.',
                    'Επίδειξη αξιοπιστίας και συνέπειας σε διάστημα 4 μηνών σε γρήγορο, υψηλής ευθύνης περιβάλλον.',
                ],
            },
            previous: {
                title: 'Βοηθός Γραφείου & Λειτουργιών Δεδομένων',
                company: 'Tosan Transportation — Vaughan, ON',
                duration: 'Φεβ. 2022 – Ιούν. 2022',
                bullets: [
                    'Διαχείριση μεγάλου όγκου σάρωσης εγγράφων, αρχειοθέτησης και καταχώρησης δεδομένων, διατηρώντας ακρίβεια στα ψηφιακά συστήματα αρχείων.',
                    'Παροχή τεχνικής υποστήριξης και εκπαίδευσης σε οδηγούς για το λογισμικό και τις συσκευές της εταιρείας, βελτιώνοντας τη λειτουργική απόδοση.',
                    'Διαχείριση επικοινωνίας με πελάτες σε ερωτήματα, με ισχυρές γραπτές και προφορικές δεξιότητες σε γρήγορο περιβάλλον.',
                ],
            },
        },
        projects: {
            sectionTitle: 'Επιλεγμένα Έργα',
        },
        footer: {
            prompt: "Let's Connect",
            credit: 'Χτισμένο απο τον Αντριάν Σιαχαναζάρι Νταρτζε',
        },
        nav: {
            home: 'Αρχική',
            about: 'Σχετικά',
            experience: 'Εμπειρία',
            projects: 'Projects',
            menu: 'Μενού',
            social: 'Κοινωνικά',
        },
        sidebar: {
            themeLight: 'Ανοιχτό θέμα',
            themeDark: 'Σκοτεινό θέμα',
            language: 'Γλώσσα',
            languageLabel: 'Ελληνικά',
            links: {
                linkedin: 'LinkedIn',
                email: 'Email',
                github: 'GitHub',
            },
        },
    },
};

type LanguageContextValue = {
    language: LanguageCode;
    setLanguage: (_language: LanguageCode) => void;
    cycleLanguage: () => void;
    copy: LanguageCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LANGUAGE_OPTIONS: Array<{ code: LanguageCode; label: string }> = [
    { code: 'en', label: 'English' },
    { code: 'fa', label: 'فارسی' },
    { code: 'el', label: 'Greek' },
];

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeLanguage, setActiveLanguage] = useState<LanguageCode>('en');

    useEffect(() => {
        const storedLanguage = window.localStorage.getItem('portfolio-language');

        if (storedLanguage === 'en' || storedLanguage === 'fa' || storedLanguage === 'el') {
            setActiveLanguage(storedLanguage);
            document.documentElement.lang = storedLanguage;
        }
    }, []);

    const setLanguage = (nextLanguage: LanguageCode) => {
        setActiveLanguage(nextLanguage);
        document.documentElement.lang = nextLanguage;
        window.localStorage.setItem('portfolio-language', nextLanguage);
    };

    const cycleLanguage = () => {
        const currentIndex = LANGUAGE_OPTIONS.findIndex(
            (option) => option.code === activeLanguage,
        );
        const nextIndex = (currentIndex + 1) % LANGUAGE_OPTIONS.length;

        setLanguage(LANGUAGE_OPTIONS[nextIndex].code);
    };

    const value = useMemo(
        () => ({
            language: activeLanguage,
            setLanguage,
            cycleLanguage,
            copy: COPY[activeLanguage],
        }),
        [activeLanguage],
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage must be used inside LanguageProvider');
    }

    return context;
};
