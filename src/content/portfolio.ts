/**
 * ALL PORTFOLIO TEXT, IN TAMIL (ta) AND ENGLISH (en).
 * The Tamil page is at "/" and the English page at "/en".
 *
 * Career and Awards are ready for his details: add items to `career` and `awards`
 * below. While a list is empty, its section is hidden on the live site
 * (and shows a reminder only while you run `npm run dev`).
 */

export type T = { ta: string; en: string };
export type Lang = "ta" | "en";

export const profile = {
  name: { ta: "சின்னையா துரைராஜா", en: "Sinniah Thurairajah" } as T,
  title: { ta: "மிருதங்கக் கலைஞர் · ஆசிரியர் · பரீட்சகர்", en: "Mridangam Artist · Teacher · Examiner" } as T,
  place: { ta: "யாழ்ப்பாணம், இலங்கை", en: "Jaffna, Sri Lanka" } as T,
  tagline: {
    ta: "46 வருடங்களாகத் தொடரும் மிருதங்க இசைப் பயணம்",
    en: "A 46-year musical journey with the mridangam",
  } as T,
  portrait: "/images/thurairajah.jpg",
  portrait2: "/images/thurairajah-2.jpg",
  // Recording for the "Listen" button. Leave "" to hide the button.
  audio: "/audio/mridangam-full.mp3",
};

// Written in his own voice (first person), since this is his personal site.
export const about = {
  intro: {
    ta: "நான் 46 வருடங்களாக மிருதங்க இசைப் பயணத்தைத் தொடர்கிறேன். இக்காலத்தில் 5500க்கும் மேற்பட்ட மாணவர்களை உருவாக்கியுள்ளேன்; நூற்றுக்கும் மேற்பட்ட அரங்கேற்றங்களுக்கு மிருதங்கம் வாசித்துள்ளேன். 1991 முதல் வட இலங்கை சங்கீத சபையின் (NCOMS) பிரதம பரீட்சகராகக் கடமையாற்றி வருகிறேன்.",
    en: "I have spent 46 years on a musical journey with the mridangam. In that time I have trained more than 5,500 students and accompanied well over a hundred arangetrams, and since 1991 I have served the North Ceylon Oriental Music Society (NCOMS) as chief examiner.",
  } as T,
  paragraphs: [
    {
      ta: "சில வருடங்களாகத் துணை விரிவுரையாளராகவும், பாடசாலைகளில் சங்கீத ஆசிரியராகவும் கடமையாற்றிப் பணி நிறைவு செய்தேன். வட இலங்கை சங்கீத சபையின் வாழ்நாள் உறுப்பினராகவும், குழு உறுப்பினராகவும், மூன்று வருடங்கள் பொருளாளராகவும் கடமையாற்றியுள்ளேன்.",
      en: "I served for some years as an assistant lecturer and as a music teacher in schools, retiring after completing my service. I am a life member of NCOMS, have served on its committee, and was its treasurer for three years.",
    },
    {
      ta: "12க்கும் மேற்பட்ட எனது மாணவர்களுக்கு மிருதங்க அரங்கேற்றம் செய்து வைத்துள்ளேன்; அவர்கள் இன்று இந்தியா, லண்டன், ஆஸ்திரேலியா ஆகிய நாடுகளில் இருக்கிறார்கள். நல்லை குருஷேத்திரம் வருடம்தோறும் நடத்தும் ‘தண்ணுமைப் பிரவாகம்’ நிகழ்வில் ஒவ்வொரு வருடமும் 60 தொடக்கம் 70 மாணவர்களை மேடையேற்றி அழகு காண்கிறேன்.",
      en: "I have presented more than 12 of my own students in their mridangam arangetrams; they now live in India, London and Australia. Every year at Thannumai Pravaagam, the annual event of Nallai Kurukshetram, I bring 60 to 70 students to the stage.",
    },
  ] as T[],
};

// Key numbers
export const numbers: { value: string; label: T }[] = [
  { value: "46", label: { ta: "வருட இசைப் பயணம்", en: "years of musical journey" } },
  { value: "5500+", label: { ta: "மாணவர்கள்", en: "students trained" } },
  { value: "25+", label: { ta: "அரங்கேற்றங்களுக்குப் பக்கவாத்தியம்", en: "arangetrams accompanied" } },
  { value: "610+", label: { ta: "கலாவித்தகர்களுக்குப் பக்கவாத்தியம்", en: "Kalavithagars accompanied" } },
  { value: "100+", label: { ta: "நடன அரங்கேற்றங்களுக்குப் பிரதான பக்கவாத்தியம்", en: "dance arangetrams as principal accompanist" } },
];

/**
 * CAREER: positions and jobs, newest first.
 * years: e.g. "1991 – இன்று" / "1991 – present". Leave "" if not known.
 * Add his job details here.
 */
export const career: { years: T; role: T; place: T }[] = [
  {
    years: { ta: "1991 – இன்று வரை", en: "1991 – present" },
    role: { ta: "பிரதம பரீட்சகர், தரம் 1–6", en: "Chief Examiner, Grades 1–6" },
    place: { ta: "வட இலங்கை சங்கீத சபை (NCOMS)", en: "North Ceylon Oriental Music Society (NCOMS)" },
  },
  {
    years: { ta: "", en: "" },
    role: { ta: "குரு", en: "Guru" },
    place: { ta: "நல்லை குருஷேத்திரம், யாழ்ப்பாணம்", en: "Nallai Kurukshetram, Jaffna" },
  },
  {
    years: { ta: "மூன்று வருடங்கள்", en: "Three years" },
    role: { ta: "பொருளாளர்", en: "Treasurer" },
    place: { ta: "வட இலங்கை சங்கீத சபை (NCOMS)", en: "NCOMS" },
  },
  {
    years: { ta: "", en: "" },
    role: { ta: "குழு உறுப்பினர், வாழ்நாள் உறுப்பினர்", en: "Committee Member and Life Member" },
    place: { ta: "வட இலங்கை சங்கீத சபை (NCOMS)", en: "NCOMS" },
  },
  {
    years: { ta: "", en: "" },
    role: { ta: "துணை விரிவுரையாளர்", en: "Assistant Lecturer" },
    place: { ta: "(விவரம் சேர்க்கப்படும்)", en: "(details to be added)" },
  },
  {
    years: { ta: "", en: "" },
    role: { ta: "சங்கீத ஆசிரியர் (பணி நிறைவு)", en: "Music Teacher (retired)" },
    place: { ta: "பாடசாலைகள்", en: "Schools" },
  },
];

/**
 * AWARDS & HONOURS: add his awards here, newest first.
 * Example:
 *   { year: "2019", title: { ta: "…", en: "…" }, by: { ta: "…", en: "…" } },
 */
export const awards: { year: string; title: T; by: T }[] = [];

// Performance highlights
export const performances: T[] = [
  {
    ta: "வயலின், வீணை, வாய்ப்பாட்டு அரங்கேற்றங்கள் 25க்கும் மேற்பட்டவற்றுக்கு மிருதங்கப் பக்கவாத்தியம் வாசித்துள்ளேன்.",
    en: "I have accompanied more than 25 violin, veena and vocal arangetrams on the mridangam.",
  },
  {
    ta: "நூற்றுக்கும் மேற்பட்ட நடன அரங்கேற்றங்களுக்குப் பிரதான பக்கவாத்தியக் கலைஞராக வாசித்துள்ளேன்.",
    en: "I have been the principal accompanist for more than a hundred dance arangetrams.",
  },
  {
    ta: "வட இலங்கை சங்கீத சபையின் ஆசிரியர் தர நடன ஆற்றுகைகளில் 610க்கும் மேற்பட்ட கலாவித்தகர்களுக்குப் பக்கவாத்தியம் வாசித்துள்ளேன்.",
    en: "I have accompanied more than 610 Kalavithagars in NCOMS teacher-grade dance performances.",
  },
  {
    ta: "முத்து கந்தசுவாமி தேசிகர் அவர்களுக்கு மிருதங்கம் வாசித்துள்ளேன்.",
    en: "I have accompanied Muthu Kandasamy Desikar.",
  },
  {
    ta: "யாழ்ப்பாணம் வள்ளலார் கலையரங்கத்தில் மூன்று வருடங்களாக இந்தியாவிலிருந்து வருகை தந்த பாடகர்களுக்கு மிருதங்கம் வாசித்தேன்.",
    en: "For three years I accompanied singers visiting from India at the Vallalar Kalaiyarangam, Jaffna.",
  },
  {
    ta: "25க்கும் மேற்பட்ட ஈழத்துக் கோவில்களின் இறுவட்டுகளில் மிருதங்கம் வாசித்துள்ளேன்.",
    en: "I have played on more than 25 recordings made for Tamil temples in Sri Lanka.",
  },
];

export const publications: { title: T; text: T; available: boolean }[] = [
  {
    title: { ta: "பல்லவி மாலை", en: "Pallavi Maalai" },
    text: {
      ta: "27 பல்லவிகளின் அமைப்புகளை ஸ்வர, சாகித்திய, ஜதி அமைப்புகளுடன் மூன்று காலங்களிலும் திஸ்ரமாகவும் எழுதி வெளியிட்டுள்ளேன்.",
      en: "My book of 27 pallavis, written out with their swara, sahitya and jathi patterns in all three speeds and in tisra.",
    },
    available: true,
  },
  {
    title: { ta: "அலாரிப்பு", en: "Alarippu" },
    text: {
      ta: "ஏழு தாளங்கள், 35 தாளங்கள், 54 அபூர்வ தாளங்கள், 108 தாளங்கள், சாபுத் தாளங்கள் ஆகியவற்றிலிருந்து 50 தாளங்களைத் தெரிவுசெய்து, அலாரிப்பின் நாட்டிய அமைப்பிற்குத் திரிகாலமாக எழுதி வெளியிட்டுள்ளேன்.",
      en: "From the seven talas, the 35 talas, 54 rare talas, the 108 talas and the chapu talas, I chose 50 talas and set the alarippu dance form in each, in three speeds.",
    },
    available: true,
  },
  {
    title: { ta: "தரம் 1, 2 பாடங்கள் (ஒலிப்பதிவுகள்)", en: "Grade 1 and 2 Lessons (recordings)" },
    text: {
      ta: "வட இலங்கை சங்கீத சபைப் பரீட்சைக்கான தரம் 1, 2 பாடங்களின் செய்முறை விளக்கங்கள், வாய்ப்பாட்டு முறையில் ஒப்புவித்தல், மிருதங்கத்தில் வாசித்தல் ஆகியவற்றை ஒலிப்பதிவுகளாக வெளியிட்டுள்ளேன்.",
      en: "My recordings for NCOMS Grade 1 and 2: practical explanations, the lessons recited aloud, and the same lessons played on the mridangam.",
    },
    available: false,
  },
];

export const video = {
  youtubeId: "i_eNZsBlrS4",
  title: { ta: "தண்ணுமைப் பிரவாகம் – நல்லை குருஷேத்திரத்தில் எனது மாணவர்கள்", en: "Thannumai Pravaagam – my students at Nallai Kurukshetram" } as T,
};

export const contact = {
  whatsapp: "94774299724",
  phone: "+94 77 429 9724",
  address: {
    ta: "28/16, மணல் தரை ஒழுங்கை (சாமி அம்மா ஒழுங்கை), கந்தர்மடம், யாழ்ப்பாணம், இலங்கை",
    en: "28/16 Manaltharai Lane (Sami Amma Lane), Kantharmadam, Jaffna, Sri Lanka",
  } as T,
  school: { name: { ta: "நல்லை குருஷேத்திரம்", en: "Nallai Kurukshetram" } as T, url: "https://nallai-kandan-kurukshetram.lathusanthurairajah-9a4.workers.dev" },
  youtube: "https://www.youtube.com/@nallaikuruksheththiram",
  facebook: "https://www.facebook.com/thurai.rasa.58",
};

export const developer = { name: "Codearson", url: "https://codearson.com" };

// Interface wording
export const ui = {
  nav: {
    about: { ta: "என்னைப் பற்றி", en: "About me" },
    career: { ta: "பணிகள்", en: "Career" },
    awards: { ta: "விருதுகள்", en: "Awards" },
    performances: { ta: "இசைப் பயணம்", en: "Performances" },
    publications: { ta: "நூல்கள்", en: "Publications" },
    contact: { ta: "தொடர்பு", en: "Contact" },
  },
  switchTo: { ta: "English", en: "தமிழ்" } as T,
  listen: { ta: "மிருதங்க வாசிப்பைக் கேளுங்கள்", en: "Listen to my mridangam" } as T,
  pause: { ta: "நிறுத்து", en: "Pause" } as T,
  inNumbers: { ta: "எண்களில்", en: "In numbers" } as T,
  career: { ta: "எனது பணிகளும் பொறுப்புகளும்", en: "My career and positions" } as T,
  awards: { ta: "எனக்குக் கிடைத்த விருதுகளும் கௌரவங்களும்", en: "My awards and honours" } as T,
  performances: { ta: "எனது இசைப் பயணத்தின் சிறப்புகள்", en: "Highlights of my musical journey" } as T,
  publications: { ta: "எனது நூல்களும் ஒலிப்பதிவுகளும்", en: "My publications and recordings" } as T,
  available: { ta: "ஓடர் செய்யலாம்", en: "Available to order" } as T,
  notAvailable: { ta: "தற்போது கிடைக்காது", en: "Not available at present" } as T,
  order: { ta: "WhatsApp மூலம் ஓடர் செய்ய", en: "Order on WhatsApp" } as T,
  orderMessage: { ta: "வணக்கம், \"{title}\" பிரதி ஒன்றை ஓடர் செய்ய விரும்புகிறேன்.", en: "Hello, I would like to order a copy of \"{title}\"." } as T,
  students: { ta: "எனது மாணவர்களுடன்", en: "With my students" } as T,
  watch: { ta: "காணொளியை இயக்க", en: "Play video" } as T,
  contact: { ta: "தொடர்புகொள்ள", en: "Get in touch" } as T,
  contactText: {
    ta: "கச்சேரிகள், அரங்கேற்றங்கள், வகுப்புகள் தொடர்பாக என்னைத் தொடர்புகொள்ளுங்கள்.",
    en: "For concerts, arangetrams and classes, please get in touch with me.",
  } as T,
  whatsapp: { ta: "WhatsApp-இல் செய்தி அனுப்ப", en: "Message on WhatsApp" } as T,
  hello: { ta: "வணக்கம், உங்களுடன் தொடர்புகொள்ள விரும்புகிறேன்.", en: "Hello, I would like to get in touch." } as T,
  call: { ta: "அழைக்க", en: "Call" } as T,
  visitSchool: { ta: "எனது பாடசாலை இணையதளம்", en: "My school's website" } as T,
  developedBy: { ta: "உருவாக்கம்:", en: "Developed by" } as T,
  rights: { ta: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.", en: "All rights reserved." } as T,
  devNote: {
    ta: "இந்தப் பகுதி இன்னும் காலியாக உள்ளது. src/content/portfolio.ts கோப்பில் விவரங்களைச் சேர்க்கவும். (இக்குறிப்பு உங்கள் கணினியில் மட்டுமே தெரியும்.)",
    en: "This section is still empty. Add the details in src/content/portfolio.ts. (This note only shows on your computer, not on the live site.)",
  } as T,
};
