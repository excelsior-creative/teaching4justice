export interface ConferenceHero {
  theme: string;
  date: string;
  location: string;
  pricing: string;
  ctaText: string;
  ctaLink: string;
}

export interface DayInfo {
  day: string;
  date: string;
  time: string;
  focus: string;
}

export interface Keynote {
  name: string;
  title: string;
  description: string;
  photoSrc: string;
}

export interface Goal {
  title: string;
  description: string;
}

export interface GuidingQuestion {
  question: string;
}

export interface Session {
  time: string;
  title: string;
  presenters: string[];
  format: string;
  location: string;
}

export interface Schedule {
  day: string;
  sessions: Session[];
}

export interface Speaker {
  name: string;
  role: string;
  organization?: string;
  photoSrc: string;
}

export interface FilmScreening {
  title: string;
  day: string;
  time: string;
  description: string;
}

export interface RegistrationInfo {
  title: string;
  description: string;
  slidingScale: string;
  priceRange: string;
  includes: string[];
  link: string;
  linkText: string;
}

export interface ContactInfo {
  name: string;
  email: string;
}

export interface Partner {
  name: string;
  link?: string;
}

export interface Conference2026Content {
  hero: ConferenceHero;
  days: DayInfo[];
  keynotes: Keynote[];
  goals: Goal[];
  guidingQuestions: GuidingQuestion[];
  schedule: Schedule[];
  speakers: Speaker[];
  filmScreening: FilmScreening;
  registration: RegistrationInfo;
  contact: ContactInfo;
  partners: Partner[];
}

export const conference2026Content: Conference2026Content = {
  hero: {
    theme: "Communities of Care",
    date: "March 13-14, 2026",
    location: "California State University, Fullerton",
    pricing: "Sliding Scale: $25–$400",
    ctaText: "Register Now",
    ctaLink: "https://www.givsum.com/opportunities/teaching-for-justice-communities-of-care-c7ae2bb80",
  },
  days: [
    {
      day: "Day 1",
      date: "Friday, March 13, 2026",
      time: "8:00 AM – 5:00 PM",
      focus: "Building Foundations: Understanding Care in Education",
    },
    {
      day: "Day 2",
      date: "Saturday, March 14, 2026",
      time: "8:00 AM – 5:00 PM",
      focus: "Sustaining Communities: Practices and Partnerships",
    },
  ],
  keynotes: [
    {
      name: "Dr. Kimberly Chen",
      title: "Keynote Speaker",
      description: "Dr. Chen is a renowned educator and author whose work focuses on intersectional approaches to anti-racist teaching in K-12 classrooms. Her latest book, 'Teaching as Care,' has transformed how educators think about their role in students' lives.",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Maria Santos",
      title: "Keynote Speaker",
      description: "Dr. Santos brings decades of experience in community-based education and restorative justice practices. Her research on care networks in schools has influenced policy across multiple districts.",
      photoSrc: "/tfj/placeholder.svg",
    },
  ],
  goals: [
    {
      title: "Deepen Understanding",
      description: "Develop a nuanced understanding of what it means to create communities of care in educational settings.",
    },
    {
      title: "Build Connections",
      description: "Forge meaningful relationships with fellow educators committed to justice-oriented teaching.",
    },
    {
      title: "Acquire Tools",
      description: "Leave with practical strategies and resources to implement in your classroom immediately.",
    },
    {
      title: "Center AAPI Voices",
      description: "Amplify AAPI perspectives and experiences in curriculum and school culture.",
    },
    {
      title: "Sustain Ongoing Growth",
      description: "Create plans for continued learning and community engagement beyond the conference.",
    },
  ],
  guidingQuestions: [
    {
      question: "How do we create educational spaces where every student feels seen, valued, and cared for?",
    },
    {
      question: "What does it mean to teach for justice in today's political and social climate?",
    },
    {
      question: "How can we build sustainable networks of support among educators and communities?",
    },
  ],
  schedule: [
    {
      day: "Friday",
      sessions: [
        {
          time: "8:00–9:00 AM",
          title: "Registration & Breakfast",
          presenters: [],
          format: "Networking",
          location: "Main Lobby",
        },
        {
          time: "9:00–9:30 AM",
          title: "Welcome & Opening Remarks",
          presenters: ["Naehee Kwun", "Conference Team"],
          format: "Keynote",
          location: "Main Auditorium",
        },
        {
          time: "9:30–10:45 AM",
          title: "Keynote: Foundations of Care in Education",
          presenters: ["Dr. Kimberly Chen"],
          format: "Keynote",
          location: "Main Auditorium",
        },
        {
          time: "11:00 AM–12:30 PM",
          title: "Workshop Session 1: Building Community in the Classroom",
          presenters: ["Multiple Facilitators"],
          format: "Workshop",
          location: "Breakout Rooms A-E",
        },
        {
          time: "12:30–1:30 PM",
          title: "Lunch & Community Building",
          presenters: [],
          format: "Networking",
          location: "Dining Hall",
        },
        {
          time: "1:30–2:45 PM",
          title: "Workshop Session 2: Culturally Responsive Practices",
          presenters: ["Multiple Facilitators"],
          format: "Workshop",
          location: "Breakout Rooms A-E",
        },
        {
          time: "3:00–4:30 PM",
          title: "Panel: Navigating Challenges in Care-Based Teaching",
          presenters: ["Educator Panel"],
          format: "Panel Discussion",
          location: "Main Auditorium",
        },
        {
          time: "4:30–5:00 PM",
          title: "Day 1 Closing & Reflection",
          presenters: ["Conference Team"],
          format: "Reflection",
          location: "Main Auditorium",
        },
      ],
    },
    {
      day: "Saturday",
      sessions: [
        {
          time: "8:00–9:00 AM",
          title: "Breakfast & Morning Connection",
          presenters: [],
          format: "Networking",
          location: "Dining Hall",
        },
        {
          time: "9:00–9:30 AM",
          title: "Day 2 Welcome",
          presenters: ["Conference Team"],
          format: "Keynote",
          location: "Main Auditorium",
        },
        {
          time: "9:30–10:45 AM",
          title: "Keynote: Sustaining Communities of Care",
          presenters: ["Dr. Maria Santos"],
          format: "Keynote",
          location: "Main Auditorium",
        },
        {
          time: "11:00 AM–12:30 PM",
          title: "Workshop Session 3: Restorative Practices",
          presenters: ["Multiple Facilitators"],
          format: "Workshop",
          location: "Breakout Rooms A-E",
        },
        {
          time: "12:30–1:30 PM",
          title: "Lunch & Resource Sharing",
          presenters: [],
          format: "Networking",
          location: "Dining Hall",
        },
        {
          time: "1:30–2:45 PM",
          title: "Workshop Session 4: AAPI Centered Curriculum",
          presenters: ["Multiple Facilitators"],
          format: "Workshop",
          location: "Breakout Rooms A-E",
        },
        {
          time: "3:00–3:30 PM",
          title: "Break",
          presenters: [],
          format: "Break",
          location: "Throughout Venue",
        },
        {
          time: "3:30–5:00 PM",
          title: "Film Screening: Home Court",
          presenters: ["Film Team"],
          format: "Film Screening",
          location: "Main Auditorium",
        },
        {
          time: "5:00–5:30 PM",
          title: "Closing & Community Commitment",
          presenters: ["Conference Team"],
          format: "Keynote",
          location: "Main Auditorium",
        },
      ],
    },
  ],
  speakers: [
    {
      name: "Dr. Kimberly Chen",
      role: "Keynote Speaker",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Maria Santos",
      role: "Keynote Speaker",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Naehee Kwun",
      role: "Conference Director",
      organization: "Teaching for Justice",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Jennifer Wu",
      role: "Workshop Facilitator",
      organization: "Los Angeles Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Michael Tanaka",
      role: "Workshop Facilitator",
      organization: "San Francisco Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Lisa Park",
      role: "Panelist",
      organization: "University of California, Los Angeles",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "David Kim",
      role: "Workshop Facilitator",
      organization: "Long Beach Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Sarah Nguyen",
      role: "Workshop Facilitator",
      organization: "Orange County Department of Education",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. James Rodriguez",
      role: "Panelist",
      organization: "CSUF College of Education",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Maria Fernandez",
      role: "Workshop Facilitator",
      organization: "Santa Ana Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Kevin O'Brien",
      role: "Workshop Facilitator",
      organization: "Educate to Empower",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Aisha Johnson",
      role: "Workshop Facilitator",
      organization: "Garden Grove Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Yuki Tanaka",
      role: "Panelist",
      organization: "California State University, Fullerton",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Carlos Mendez",
      role: "Workshop Facilitator",
      organization: "Anaheim Elementary School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Rebecca Cho",
      role: "Workshop Facilitator",
      organization: "Irvine Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Panelist",
      organization: "University of California, Irvine",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Nancy Patel",
      role: "Workshop Facilitator",
      organization: "Fullerton School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Robert Lee",
      role: "Workshop Facilitator",
      organization: "Montebello Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Maya Sharma",
      role: "Panelist",
      organization: "University of Southern California",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Thomas Garcia",
      role: "Workshop Facilitator",
      organization: "Pomona Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Emily Wong",
      role: "Workshop Facilitator",
      organization: "Newport-Mesa Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Jordan Smith",
      role: "Panelist",
      organization: "California State University, Long Beach",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Linda Kim",
      role: "Workshop Facilitator",
      organization: "Placentia-Yorba Linda Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Mark Johnson",
      role: "Workshop Facilitator",
      organization: "Capistrano Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Fatima Al-Rashid",
      role: "Panelist",
      organization: "University of California, Riverside",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Angela Davis",
      role: "Workshop Facilitator",
      organization: "Saddleback Valley Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Steven Park",
      role: "Workshop Facilitator",
      organization: "Tustin Unified School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Rachel Green",
      role: "Panelist",
      organization: "California State University, Northridge",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Daniel Martinez",
      role: "Workshop Facilitator",
      organization: "Huntington Beach City School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Victoria Tran",
      role: "Workshop Facilitator",
      organization: "Westminster School District",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Dr. Brian O'Connor",
      role: "Panelist",
      organization: "University of San Diego",
      photoSrc: "/tfj/placeholder.svg",
    },
    {
      name: "Michelle Kim",
      role: "Workshop Facilitator",
      organization: "Fountain Valley School District",
      photoSrc: "/tfj/placeholder.svg",
    },
  ],
  filmScreening: {
    title: "Home Court",
    day: "Saturday",
    time: "3:30 PM",
    description: "Join us for a special screening of 'Home Court,' a powerful documentary exploring themes of identity, community, and belonging in American society. A Q&A session with the filmmakers will follow the screening.",
  },
  registration: {
    title: "Register Now",
    description: "We believe in making our conference accessible to all educators regardless of their financial situation. Our sliding scale pricing ensures that everyone can participate.",
    slidingScale: "Sliding Scale Pricing",
    priceRange: "$25–$400",
    includes: [
      "Two full days of workshops and sessions",
      "Access to all keynote presentations",
      "Conference materials and resources",
      "Lunch and refreshments both days",
      "Networking opportunities with fellow educators",
      "Film screening and Q&A session",
      "Ongoing access to our educator community",
    ],
    link: "https://www.givsum.com/opportunities/teaching-for-justice-communities-of-care-c7ae2bb80",
    linkText: "Register on GivSum",
  },
  contact: {
    name: "Naehee Kwun",
    email: "tfj@edutoempower.org",
  },
  partners: [
    {
      name: "Educate to Empower",
    },
    {
      name: "CSUF College of Education",
    },
  ],
};
