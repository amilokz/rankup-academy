export const WHATSAPP = "923001234567";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

export type Course = {
  name: string;
  tagline: string;
  fee: string;
  feeNote: string;
  duration: string;
  icon: string;
  highlights: string[];
  popular?: boolean;
};

export const courses: Course[] = [
  {
    name: "Matric (9th & 10th)",
    tagline: "All Punjab boards — Science & Computer Science",
    fee: "Rs 4,500",
    feeNote: "/month",
    duration: "Evening batches",
    icon: "book",
    highlights: ["Board-pattern tests every Sunday", "Urdu + English medium", "Free notes & past papers"],
  },
  {
    name: "FSc Pre-Medical",
    tagline: "With integrated MDCAT preparation",
    fee: "Rs 6,000",
    feeNote: "/month",
    duration: "Evening batches",
    icon: "stethoscope",
    popular: true,
    highlights: ["MDCAT drills from day one", "Biology by PhD faculty", "Monthly parent meetings"],
  },
  {
    name: "FSc Pre-Engineering",
    tagline: "With integrated ECAT preparation",
    fee: "Rs 6,000",
    feeNote: "/month",
    duration: "Evening batches",
    icon: "cog",
    highlights: ["Maths problem marathons", "ECAT mock exams", "Small groups — max 25 students"],
  },
  {
    name: "CSS / PMS Preparation",
    tagline: "Compulsory + optional subjects",
    fee: "Rs 8,500",
    feeNote: "/month",
    duration: "Morning & evening",
    icon: "landmark",
    highlights: ["CSP & PMS qualifiers as mentors", "Essay & precis workshops", "Mock interviews"],
  },
  {
    name: "Spoken English & IELTS",
    tagline: "Fluency + band-score training",
    fee: "Rs 5,000",
    feeNote: "/month",
    duration: "Weekend batches",
    icon: "mic",
    highlights: ["Speaking clubs twice a week", "IELTS band 7+ track record", "Interview preparation"],
  },
  {
    name: "MDCAT Crash Program",
    tagline: "45-day intensive revision sprint",
    fee: "Rs 12,000",
    feeNote: "one-time",
    duration: "6 days a week",
    icon: "zap",
    highlights: ["10 full-length mock MDCATs", "Daily timed practice", "Personal weak-area plan"],
  },
];

export type Topper = {
  name: string;
  score: string;
  exam: string;
  badge: string;
};

export const toppers: Topper[] = [
  { name: "Ayesha Khan", score: "1098/1100", exam: "Matric 2025", badge: "Board Topper" },
  { name: "Hamza Tariq", score: "1075/1100", exam: "FSc 2025", badge: "A+ Grade" },
  { name: "Bilal Ahmed", score: "CSS 2025", exam: "Qualified", badge: "PAS Group" },
  { name: "Mahnoor Fatima", score: "1045/1100", exam: "Matric 2025", badge: "A+ Grade" },
  { name: "Usman Ghani", score: "198/200", exam: "MDCAT 2025", badge: "Top 50" },
  { name: "Zainab Raza", score: "1032/1100", exam: "FSc 2025", badge: "A+ Grade" },
];

export const stats = [
  { value: 98, suffix: "%", label: "Board pass rate" },
  { value: 1200, suffix: "+", label: "A & A+ grades in 2025" },
  { value: 85, suffix: "+", label: "CSS / PMS qualifiers" },
  { value: 15, suffix: "+", label: "Years of teaching" },
];

export type Faculty = {
  name: string;
  subject: string;
  credential: string;
  initials: string;
};

export const faculty: Faculty[] = [
  { name: "Prof. Ahmed Raza", subject: "Physics", credential: "18 yrs · Ex-board examiner", initials: "AR" },
  { name: "Dr. Saima Nawaz", subject: "Biology", credential: "PhD · MDCAT specialist", initials: "SN" },
  { name: "Sir Kamran Sheikh", subject: "Mathematics", credential: "15 yrs · ECAT mentor", initials: "KS" },
  { name: "Ms. Hira Malik", subject: "English & Essay", credential: "CSS mentor · IELTS trainer", initials: "HM" },
];

export const schedule = [
  { program: "Matric (9th & 10th)", days: "Mon – Sat", time: "4:00 – 6:00 PM" },
  { program: "FSc Pre-Med / Pre-Eng", days: "Mon – Sat", time: "6:00 – 8:30 PM" },
  { program: "CSS / PMS", days: "Mon – Fri", time: "9:00 AM – 1:00 PM · 5:00 – 8:00 PM" },
  { program: "Spoken English & IELTS", days: "Sat – Sun", time: "10:00 AM – 1:00 PM" },
  { program: "MDCAT Crash", days: "Mon – Sat", time: "3:00 – 8:00 PM" },
];

export const testimonials = [
  {
    quote:
      "My daughter went from 78% to 1098 marks. The weekly tests and the teachers' personal attention made all the difference.",
    name: "Mrs. Shazia Khan",
    role: "Parent · Matric batch",
  },
  {
    quote:
      "The MDCAT crash program is brutal in the best way. Ten full mocks before the real exam — I walked in with zero fear.",
    name: "Usman Ghani",
    role: "Student · MDCAT 2025",
  },
  {
    quote:
      "Essay workshops with CSP mentors changed my CSS game. I qualified in my first attempt, Alhamdulillah.",
    name: "Bilal Ahmed",
    role: "Student · CSS 2025",
  },
];

export const faqs = [
  {
    q: "What is the admission process?",
    a: "Fill the admission form on this page (or message us on WhatsApp), visit the campus for a free demo class, then confirm your batch. No admission fee for the first 50 students of the session.",
  },
  {
    q: "Are the batches really small?",
    a: "Yes. Regular batches are capped at 25 students so every teacher knows every student by name — and by weak chapter.",
  },
  {
    q: "Do you follow the board syllabus strictly?",
    a: "100%. Our tests follow the exact board paper pattern, and our faculty includes ex-board examiners who know how marking actually works.",
  },
  {
    q: "Is there any discount for siblings?",
    a: "Yes — 15% off the monthly fee for the second sibling, and merit scholarships up to 50% for board toppers.",
  },
  {
    q: "Can I take a free demo class?",
    a: "Absolutely. Every new student gets 2 free demo classes before paying a single rupee. If we're not the best fit, no hard feelings.",
  },
  {
    q: "Where are the campuses?",
    a: "Main Campus: Satellite Town, Rawalpindi. Branch Campus: DHA Phase 2, Islamabad. Both run the same faculty rotation and test schedule.",
  },
];

export const tickerItems = [
  "Ayesha Khan — 1098/1100 · Matric 2025",
  "Bilal Ahmed — CSS 2025 Qualified",
  "Usman Ghani — 198/200 · MDCAT",
  "Hamza Tariq — 1075/1100 · FSc 2025",
  "Mahnoor Fatima — 1045/1100 · Matric 2025",
  "Zainab Raza — 1032/1100 · FSc 2025",
];
