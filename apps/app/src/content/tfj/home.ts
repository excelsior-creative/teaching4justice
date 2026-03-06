export interface HeroSection {
  tagline: string;
  ctaText: string;
  ctaLink: string;
}

export interface StorySection {
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface ApproachCard {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface GalleryItem {
  alt: string;
  src: string;
}

export interface HomePageContent {
  hero: HeroSection;
  story: StorySection;
  values: Value[];
  timeline: TimelineEntry[];
  approach: ApproachCard[];
  testimonials: Testimonial[];
  gallery: GalleryItem[];
  quoteBanner: {
    quote: string;
    author: string;
  };
}

export const homeContent: HomePageContent = {
  hero: {
    tagline: "Empowering educators to build a more equitable world.",
    ctaText: "Register for 2026 Conference",
    ctaLink: "/conference/2026",
  },
  story: {
    paragraphs: [
      "Teaching for Justice began in 2021 as a grassroots response to the urgent need for AAPI-centered K-12 education resources. What started as a small group of dedicated educators has grown into a vibrant community committed to justice-oriented teaching practices.",
      "Our journey has been guided by the belief that education is a powerful tool for social change. Through conferences, workshops, and collaborative resources, we've created spaces where educators can learn, share, and grow together.",
      "Today, Teaching for Justice continues to evolve, bringing together diverse voices and perspectives to create educational experiences that honor the complexity of AAPI experiences while building pathways for meaningful dialogue and action in classrooms across the country.",
    ],
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    imageAlt: "Diverse group of educators collaborating together",
  },
  values: [
    {
      title: "Community-First",
      description: "We center relationships and collective growth in all our work.",
    },
    {
      title: "Cultural Humility",
      description: "We approach learning with openness, respect, and curiosity.",
    },
    {
      title: "Intersectionality",
      description: "We recognize and honor the complexity of identities and experiences.",
    },
    {
      title: "Student-Centered",
      description: "We prioritize the needs and voices of our students in every decision.",
    },
    {
      title: "Justice-Oriented",
      description: "We commit to examining and dismantling systems of oppression.",
    },
    {
      title: "Collaborative Practice",
      description: "We believe in the power of shared knowledge and co-creation.",
    },
    {
      title: "Lifelong Learning",
      description: "We embrace continuous growth and reflection as educators.",
    },
    {
      title: "Radical Hope",
      description: "We maintain optimism and commitment to transformative change.",
    },
    {
      title: "Authenticity",
      description: "We show up as our full selves and invite others to do the same.",
    },
    {
      title: "Accountability",
      description: "We hold ourselves and each other to high standards of practice.",
    },
    {
      title: "Joy",
      description: "We celebrate the beauty, creativity, and resilience in our communities.",
    },
    {
      title: "Sustainability",
      description: "We build practices and relationships that last beyond single events.",
    },
  ],
  timeline: [
    {
      year: "2021",
      title: "Founding",
      description: "Teaching for Justice was founded by a small group of passionate educators responding to the urgent need for AAPI-centered K-12 education resources.",
    },
    {
      year: "2022",
      title: "First Conference",
      description: "Our inaugural conference brought together over 200 educators for two days of learning, connection, and community-building.",
    },
    {
      year: "2023",
      title: "Expansion",
      description: "We expanded our programming to include year-round workshops, resource sharing, and educator networks.",
    },
    {
      year: "2024",
      title: "Growing Community",
      description: "Our community grew to over 500 educators across multiple states, strengthening our collective impact.",
    },
    {
      year: "2025",
      title: "Partnership Development",
      description: "Formed strategic partnerships with university education programs and community organizations to deepen our reach.",
    },
    {
      year: "2026",
      title: "Communities of Care",
      description: "Our landmark 2026 conference focuses on building and sustaining communities of care in education.",
    },
  ],
  approach: [
    {
      title: "Restorative Circles",
      description: "Creating safe spaces for dialogue, healing, and community building through restorative practices.",
    },
    {
      title: "Culturally Responsive Teaching",
      description: "Designing learning experiences that honor and integrate students' cultural backgrounds and experiences.",
    },
    {
      title: "Critical Pedagogy",
      description: "Engaging students in examining power, oppression, and social justice through education.",
    },
    {
      title: "Community-Based Learning",
      description: "Connecting classroom learning to real-world issues and community partnerships.",
    },
    {
      title: "Social-Emotional Learning",
      description: "Prioritizing emotional intelligence, empathy, and well-being alongside academic growth.",
    },
    {
      title: "Anti-Bias Education",
      description: "Developing practices that actively challenge prejudice and stereotypes in the classroom.",
    },
  ],
  testimonials: [
    {
      quote: "Teaching for Justice transformed how I approach AAPI education in my classroom. I finally have the tools and community to do this work authentically.",
      author: "Sarah Chen",
      role: "High School English Teacher",
    },
    {
      quote: "The sense of community here is unmatched. I've found colleagues who challenge and support me in equal measure.",
      author: "Marcus Rivera",
      role: "Middle School Social Studies Teacher",
    },
    {
      quote: "This conference isn't just about learning—it's about belonging. That's rare in professional development.",
      author: "Dr. Maya Patel",
      role: "University Professor",
    },
  ],
  gallery: [
    { alt: "Conference participants in discussion", src: "/tfj/gallery/gallery-1.jpg" },
    { alt: "Workshop session in progress", src: "/tfj/gallery/gallery-2.jpg" },
    { alt: "Community gathering", src: "/tfj/gallery/gallery-3.jpg" },
    { alt: "Educators collaborating", src: "/tfj/gallery/gallery-4.jpg" },
    { alt: "Keynote presentation", src: "/tfj/gallery/gallery-5.jpg" },
    { alt: "Group photo", src: "/tfj/gallery/gallery-6.jpg" },
  ],
  quoteBanner: {
    quote: "Education is either for domestication or for freedom. There is no neutral education.",
    author: "Grace Lee Boggs",
  },
};
