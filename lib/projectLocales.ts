import { PROJECTS } from '@/lib/data';

export type ProjectLanguageCode = 'en' | 'fa' | 'el';

export type ProjectLocaleCopy = {
    title: string;
    description: string;
    role: string;
};

type ProjectLocaleMap = Record<string, ProjectLocaleCopy>;

const enFromData = (): ProjectLocaleMap =>
    Object.fromEntries(
        PROJECTS.map((project) => [
            project.slug,
            {
                title: project.title,
                description: project.description,
                role: project.role,
            },
        ]),
    );

const fa: ProjectLocaleMap = {
    synergo: {
        title: 'Synergo',
        description:
            'Synergo یک نمایشگر زنده چندنفره برای ایجنت‌های هوش مصنوعی در هکاتون‌ها و جلسات کدنویسی موازی است. فعالیت IDE، پرامپت‌ها، کپشن‌های AI و دیف فایل‌ها را از هر عضو تیم روی یک بورد مشترک استریم می‌کند و ویرایش‌های هم‌پوشان را قبل از تبدیل‌شدن به کانفلیکت مرج علامت می‌زند. شرکت‌کنندگان با یک کد وارد اتاق مشترک می‌شوند — بدون اکانت — و یک watcher محلی ذخیرهٔ دسته‌ای را از طریق WebSocket به رله FastAPI می‌فرستد تا به داشبورد React پخش شود.',
        role: 'مالکیت رله بک‌اند: چرخه عمر اتاق، جریان‌های join/broadcast وب‌سوکت برای watcherها و spectatorها، دریافت فعالیت (دیف و پرامپت با debounce)، و مسیر تشخیص کانفلیکت برای ویرایش‌های هم‌پوشان فایل. لایه کپشن/برچسب‌گذاری کانفلیکت با Gemini به‌صورت best-effort تا دمو حتی با کندی یا قطع مدل هم کار کند.',
    },
    codessey: {
        title: 'Codessey',
        description:
            'Codessey یک سیستم بازبینی کد چندایجنتی است که کد پیست‌شده، آپلود یا لینک GitHub را می‌گیرد و گزارش ساختاریافته Markdown تولید می‌کند. چهار ایجنت متخصص (منطق، امنیت، خوانایی، عملکرد) به‌صورت موازی با Google ADK اجرا می‌شوند و سپس یک conductor یافته‌ها را با امتیازدهی قطعی، پوشاندن secret و دریافت امن GitHub جمع‌بندی می‌کند — ساخته‌شده برای هکاتون GDG YorkU.',
        role: 'ساخت محصول به‌صورت end-to-end خارج از لایه سرویس بک‌اند (فعلاً): طراحی workflow ایجنت‌ها (fan-out/fan-in + conductor)، UX بازبینی و رندر گزارش، جریان‌های ingestion/validation (chunking، تشخیص زبان، مسیر URL گیت‌هاب)، سخت‌سازی امنیتی (دفاع در برابر injection، redaction)، مسیر CLI برای دمو، و معماری کلی برای تجربه پایدار روز دمو.',
    },
    delatio: {
        title: 'Delatio',
        description:
            'Delatio (CivicVox-Omni) یک پلتفرم هوش اضطراری چندرسانه‌ای local-first و کم‌تأخیر از NVIDIA Spark Hack تورنتو است. دوربین و میکروفون گوشی یک پایپ‌لاین لبه‌ای را تغذیه می‌کنند که خطر را طبقه‌بندی می‌کند، زمینه داده باز تورنتو (شیر آتش‌نشانی، RentSafeTO، ۳۱۱) را می‌کشد و گزارش dispatch-style را به داشبورد هماهنگ‌کننده استریم می‌کند — طراحی‌شده برای کار بدون وابستگی ابری روی نود GB10.',
        role: 'ساخت تجربه موبایل، راه‌اندازی مسیر ایجنت/inference روی GB10 برای دمو، و اتصال کامل استک تا capture موبایل، ایجنت‌های محلی و داشبورد در جریان‌های حادثه زنده همگام بمانند.',
    },
    elenchus: {
        title: 'Elenchus',
        description:
            'Elenchus یک «پیچ‌روستر» هوش مصنوعی است: بنیان‌گذاران فرصت کوتاهی دارند تا استارتاپشان را به یک آواتار انسان‌مانند ارائه کنند که مثل یک VC بی‌رحم بازجویی می‌کند — بدون تعریف و تمجید، فقط سوال‌هایی که فرض‌های ضعیف را لو می‌دهد. ساخته‌شده در کمتر از ۹۰ دقیقه برای Cursor × Toronto Tech Week؛ برنده Best Use of ElevenLabs در ترک.',
        role: 'مالکیت frontend UI/UX و هم‌رهبری pitch دمو — شکل‌دادن روایت محصول، ارائه زنده، و رابطی که بنیان‌گذاران زیر فشار زمان با آواتار روبرو می‌شوند.',
    },
    'file-changer': {
        title: 'File Changer',
        description:
            'ابزار دسکتاپ local-first برای تبدیل و فشرده‌سازی فایل با تمرکز روی سرعت و حریم خصوصی. از پردازش دسته‌ای مبتنی بر صف، فرمت‌های خروجی قابل تنظیم، مدیریت تداخل، همزمانی worker و پایپ‌لاین‌های Sharp/FFmpeg با ورودی drag-and-drop پشتیبانی می‌کند. انتشار دسکتاپ هنوز در جریان است، بنابراین لینک مخزن عمومی هنوز وجود ندارد.',
        role: 'طراحی به‌عنوان ابزار گردش‌کار دسکتاپ با UX متمرکز بر تبدیل و پردازش محلی.',
    },
    'hackathon-1-potluckio': {
        title: 'Hackathon 1 (Potluckio)',
        description:
            'اپ برنامه‌ریزی رویداد مشارکتی برای potluck که میزبان‌ها می‌توانند رویداد بسازند، لینک عضویت بفرستند و سهم‌ها را هماهنگ کنند تا مهمان‌ها مشخص کنند چه می‌آورند. شامل دسترسی حساب، جریان مدیریت رویداد و داشبورد ساده برای رویدادهای میزبانی‌شده است.',
        role: 'کار روی معماری بک‌اند و یکپارچه‌سازی Firebase همراه با بهبود نسخه آماده تولید.',
    },
    'wpm-game': {
        title: 'WPM ATLAS',
        description:
            'وب‌اپ سرعت تایپ با راندهای arcade-style، بازخورد زنده WPM، پیشرفت پروفایل و رقابت لیدربورد. بازیکنان هویت پروفایل را شخصی‌سازی می‌کنند، در مدت‌ها و سختی‌های مختلف رقابت می‌کنند و بهبود رتبه را در زمان دنبال می‌کنند.',
        role: 'ساخت به‌عنوان ابزار تمرین تعاملی با پشتیبانی بک‌اند real-time-oriented.',
    },
    'portfolio-website': {
        title: 'Portfolio Website',
        description:
            'وب‌سایت پورتفولیوی شخصی من برای ارائه پروژه‌ها با ترنزیشن‌های تعاملی، صفحات کیس‌استادی غنی، چیدمان واکنش‌گرا و داستان‌گویی مبتنی بر موشن.',
        role: 'طراحی و پیاده‌سازی کامل تجربه برند شخصی از UI تا ساختار داده.',
    },
};

const el: ProjectLocaleMap = {
    synergo: {
        title: 'Synergo',
        description:
            'Το Synergo είναι ένα live multiplayer AI agent viewer για hackathons και παράλληλες συνεδρίες coding. Μεταδίδει δραστηριότητα IDE, prompts, AI captions και file diffs από κάθε teammate σε έναν κοινό πίνακα και επισημαίνει επικαλυπτόμενες επεξεργασίες πριν γίνουν merge conflicts. Οι contributors μπαίνουν σε κοινό room με κωδικό — χωρίς λογαριασμούς — ενώ ένα τοπικό watcher στέλνει batched saves μέσω WebSockets σε FastAPI relay που κάνει broadcast σε React dashboard.',
        role: 'Ανέλαβα το backend relay: lifecycle δωματίων, WebSocket join/broadcast για watchers και spectators, activity ingestion (debounced diffs και prompts) και τη διαδρομή conflict-detection για overlapping file edits. Σύνδεσα Gemini captioning/conflict labeling ως best-effort AI layer ώστε το demo να δουλεύει ακόμη και όταν το μοντέλο είναι αργό ή offline.',
    },
    codessey: {
        title: 'Codessey',
        description:
            'Το Codessey είναι σύστημα multi-agent code review που δέχεται pasted code, uploads ή GitHub URLs και παράγει δομημένο Markdown report. Τέσσερις specialist agents (logic, security, readability, performance) τρέχουν παράλληλα μέσω Google ADK και ένας conductor συνθέτει τα findings με deterministic scoring, secret redaction και SSRF-safe GitHub ingestion — για το GDG YorkU Hackathon.',
        role: 'Έχτισα το προϊόν end-to-end εκτός του backend service layer προς το παρόν: σχεδιασμός agent workflow (fan-out/fan-in + conductor), review UX και report rendering, ingestion/validation (chunking, language detect, GitHub URL path), security hardening (injection defenses, redaction), CLI demo path και συνολική αρχιτεκτονική για αξιόπιστο demo-day.',
    },
    delatio: {
        title: 'Delatio',
        description:
            'Το Delatio (CivicVox-Omni) είναι local-first, χαμηλής καθυστέρησης multimodal emergency intelligence πλατφόρμα από το NVIDIA Spark Hack Toronto. Κάμερα και μικρόφωνο τηλεφώνου τροφοδοτούν edge pipeline που ταξινομεί κινδύνους, αντλεί Toronto open-data context (hydrants, RentSafeTO, 311) και στέλνει dispatch-style report σε dashboard συντονιστή — σχεδιασμένο να λειτουργεί χωρίς cloud dependency σε GB10 node.',
        role: 'Έχτισα το mobile experience, έθεσα σε λειτουργία το GB10 agent/inference path για το demo και συνέδεσα το full stack ώστε mobile capture, local agents και dashboard να μένουν συγχρονισμένα στα live incident flows.',
    },
    elenchus: {
        title: 'Elenchus',
        description:
            'Το Elenchus είναι AI pitch roaster: οι founders έχουν σύντομο παράθυρο να παρουσιάσουν το startup σε ρεαλιστικό human avatar που τους εξετάζει σαν αδίστακτος VC — χωρίς κολακείες, μόνο ερωτήσεις που αποκαλύπτουν αδύναμες υποθέσεις. Χτίστηκε σε λιγότερο από 90 λεπτά για Cursor × Toronto Tech Week· κέρδισε Best Use of ElevenLabs στο track.',
        role: 'Ανέλαβα το frontend UI/UX και συν-οδήγησα το demo pitch — διαμορφώνοντας το narrative του προϊόντος, τη live παρουσίαση και το interface με το οποίο οι founders αντιμετωπίζουν το avatar υπό πίεση χρόνου.',
    },
    'file-changer': {
        title: 'File Changer',
        description:
            'Local-first desktop εργαλείο μετατροπής και συμπίεσης αρχείων με έμφαση στην ταχύτητα και την ιδιωτικότητα. Υποστηρίζει queue-based batch processing, ρυθμιζόμενα output formats, conflict handling, worker concurrency και Sharp/FFmpeg pipelines με drag-and-drop. Το desktop release είναι ακόμη σε εξέλιξη, οπότε δεν υπάρχει ακόμη δημόσιο repository link.',
        role: 'Σχεδιάστηκε ως desktop workflow εργαλείο με conversion-focused UX και τοπική επεξεργασία.',
    },
    'hackathon-1-potluckio': {
        title: 'Hackathon 1 (Potluckio)',
        description:
            'Collaborative εφαρμογή οργάνωσης εκδηλώσεων για potlucks όπου οι hosts δημιουργούν events, μοιράζονται join links και συντονίζουν συνεισφορές ώστε οι guests να δηλώνουν τι φέρνουν. Περιλαμβάνει account access, event management flows και απλό dashboard για hosted events.',
        role: 'Δούλεψα στην αρχιτεκτονική backend και την ενσωμάτωση Firebase ενώ βελτίωνα την production-ready έκδοση.',
    },
    'wpm-game': {
        title: 'WPM ATLAS',
        description:
            'Web εφαρμογή ταχύτητας πληκτρολόγησης με arcade-style rounds, live WPM feedback, πρόοδο προφίλ και ανταγωνισμό leaderboard. Οι παίκτες προσαρμόζουν την ταυτότητα προφίλ, ανταγωνίζονται σε πολλαπλές διάρκειες και δυσκολίες και παρακολουθούν βελτιώσεις κατάταξης με τον χρόνο.',
        role: 'Χτίστηκε ως διαδραστικό εργαλείο εξάσκησης με real-time-oriented backend υποστήριξη.',
    },
    'portfolio-website': {
        title: 'Portfolio Website',
        description:
            'Αυτό είναι το προσωπικό μου portfolio website, χτισμένο για να παρουσιάζει projects με interactive transitions, πλούσιες case-study σελίδες, responsive layouts και ομαλή motion-driven αφήγηση.',
        role: 'Σχεδίασα και υλοποίησα την πλήρη personal brand εμπειρία από το UI έως τη δομή δεδομένων.',
    },
};

const LOCALES: Record<ProjectLanguageCode, ProjectLocaleMap> = {
    en: enFromData(),
    fa,
    el,
};

export function getProjectLocale(
    language: ProjectLanguageCode,
    slug: string,
): ProjectLocaleCopy {
    const localized = LOCALES[language]?.[slug];
    if (localized) return localized;

    const fallback = LOCALES.en[slug];
    if (fallback) return fallback;

    const project = PROJECTS.find((item) => item.slug === slug);
    return {
        title: project?.title ?? slug,
        description: project?.description ?? '',
        role: project?.role ?? '',
    };
}
