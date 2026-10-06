/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AcademicPathway {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface Leader {
  id: string;
  name: string;
  designation: string;
  qualifications?: string;
  bio: string;
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'Literary' | 'Technology' | 'Community' | 'Sustainability' | 'Leadership';
  description?: string;
  isUpcoming: boolean;
}

export interface Testimonial {
  id: string;
  parentName: string;
  content: string;
  videoUrl?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  date: string;
  category: string;
  coverImage: string;
  description?: string;
  images: GalleryImage[];
}

export const SCHOOL_DATA = {
  name: "Delhi Public School Nacharam",
  address: "Plot No.44, Uppal Mandal, 42A, behind BSNL Telephone exchange, Durga Nagar, Nacharam, Hyderabad, Secunderabad, Telangana 500076",
  phone: ["7670900348", "9100975725"],
  hostelPhone: ["7670804105", "9014160240"],
  landline: "1800 212 999999",
  helpDesk: "040 67580013",
  email: ["admission@dpssecunderabad.in", "email@dpssecunderabad.in", "principal@dpssecunderabad.in"],
  socials: {
    instagram: "https://www.instagram.com/dpsnacharam/",
    facebook: "#",
    twitter: "#",
    youtube: "#"
  },
  stats: [
    { value: "20:1", label: "Student Teacher Ratio" },
    { value: "16", label: "Sports Facilities" },
    { value: "24", label: "Community Outreach" },
    { value: "10", label: "International Collaborations" },
    { value: "30", label: "Clubs" }
  ],
  pillars: [
    { id: "academic", title: "Academic Excellence", description: "Fostering a culture of rigorous learning and intellectual curiosity.", icon: "BookOpen" },
    { id: "critical", title: "Critical Thinking", description: "Encouraging students to analyze, evaluate, and create new ideas.", icon: "Lightbulb" },
    { id: "skill", title: "Skill Enrichment", description: "Developing practical skills for the 21st-century global landscape.", icon: "Award" },
    { id: "health", title: "Health & Well-being", description: "Prioritizing physical and mental health as the foundation for growth.", icon: "Heart" },
    { id: "community", title: "Community & Values", description: "Instilling empathy, responsibility, and strong ethical values.", icon: "Users" },
    { id: "safety", title: "Safety", description: "Providing a secure and nurturing environment for every student.", icon: "Shield" }
  ],
  pathways: [
    { id: "cbse", title: "CBSE", description: "Central Board of Secondary Education curriculum with a focus on holistic development.", href: "/academics/cbse", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop" },
    { id: "cambridge", title: "Cambridge International", description: "Global curriculum fostering independent thinking and international perspectives.", href: "/academics/cambridge", image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?q=80&w=800&auto=format&fit=crop" },
    { id: "ibdp", title: "IBDP", description: "International Baccalaureate Diploma Programme for advanced academic preparation.", href: "/academics/ibdp", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" },
    { id: "early-years", title: "Early Years", description: "Nurturing curiosity and discovery in our youngest learners.", href: "/academics/early-years", image: "https://images.unsplash.com/photo-1503919919749-64670085813f?q=80&w=800&auto=format&fit=crop" },
    { id: "nios", title: "NIOS", description: "Flexible learning pathways through the National Institute of Open Schooling.", href: "/academics/nios", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop" }
  ],
  facilities: [
    { id: "residential", title: "Residential Campus", description: "Separate boarding facilities for Boys (V-XII) and Girls (VI-XII).", image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop" },
    { id: "library", title: "Central Library", description: "A vast resource hub for research, reading, and intellectual exploration.", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop" },
    { id: "labs", title: "Science Labs", description: "State-of-the-art laboratories for physics, chemistry, and biology.", image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200&auto=format&fit=crop" },
    { id: "digital", title: "Digital Classrooms", description: "Technology-integrated learning environments for the modern age.", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" },
    { id: "sports", title: "Sports Facilities", description: "Professional-grade infrastructure for athletics, swimming, and team sports.", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop" },
    { id: "art", title: "Art Gallery", description: "A dedicated space to showcase and celebrate student creativity.", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop" }
  ],
  leadership: [
    { id: "m-komaraiah", name: "M Komaraiah", designation: "Chairman", bio: "Leading with vision and commitment to educational excellence.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
    { id: "yasasvi-malka", name: "Yasasvi Malka", designation: "Director", bio: "Driving innovation and global standards across the institution.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
    { id: "pallavi", name: "Mrs. Pallavi", designation: "Director", bio: "Focusing on academic rigour and student development.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { id: "thribhuvana-malka", name: "Ms. Thribhuvana Malka", designation: "Vice Chairperson", bio: "Ensuring high standards of operation and campus life.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
    { id: "t-sudha", name: "Dr. T. Sudha", designation: "Academic Director", bio: "Overseeing curriculum excellence and teacher training.", image: "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=800&auto=format&fit=crop" },
    { id: "turaga-padma", name: "Mrs. Turaga Padma Jyothi", designation: "Principal", bio: "Dedicated to nurturing students in a values-based environment.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { id: "shanti-michael", name: "Shanti Michael Anthony", designation: "Headmistress", bio: "Focusing on early years and foundational learning.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" }
  ],
  events: [
    { id: "mun", title: "DPS MUN", date: "2026-10-12", category: "Academic", isUpcoming: true, description: "Model United Nations conference for diplomacy and debate." },
    { id: "no-bag-day", title: "No Bag Day", date: "2026-11-13", category: "Cultural", isUpcoming: true },
    { id: "vox", title: "VOX - DPS Communications Conclave", date: "2026-11-21", category: "Literary", isUpcoming: true },
    { id: "intra-murals", title: "Intra Murals", date: "2026-12-07", category: "Sports", isUpcoming: true },
    { id: "showcase", title: "Academic Showcase Week", date: "2026-12-10", category: "Academic", isUpcoming: true },
    { id: "sports-day", title: "Sports Day", date: "2026-12-11", category: "Sports", isUpcoming: true },
    { id: "joy-giving", title: "Joy of Giving Week", date: "2026-12-28", category: "Community", isUpcoming: true },
    { id: "spell-bee", title: "International Spell Bee", date: "2026-12-28", category: "Literary", isUpcoming: true },
    { id: "kids-spectrum", title: "Kids Spectrum & SLC", date: "2027-01-23", category: "Academic", isUpcoming: true },
    { id: "republic-day", title: "Republic Day", date: "2027-01-26", category: "Cultural", isUpcoming: true },
    { id: "slc", title: "SLC", date: "2027-01-30", category: "Academic", isUpcoming: true },
    { id: "babys-night-out", title: "Baby's Night Out", date: "2027-02-05", category: "Cultural", isUpcoming: true },
    { id: "farewell", title: "Farewell", date: "2027-02-06", category: "Cultural", isUpcoming: true }
  ],
  news: [
    {
      id: "1",
      title: "DPS Nacharam Receives National Excellence Award 2026",
      date: "2026-09-20",
      category: "Achievement",
      excerpt: "The institution has been recognized for its outstanding contribution to holistic education and innovative teaching methodologies.",
      image: "https://images.unsplash.com/photo-1567942712661-82b9b407abbf?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "New International Language Lab Inaugurated",
      date: "2026-09-15",
      category: "Facility",
      excerpt: "State-of-the-art language laboratory to enhance linguistic skills in French, Spanish, and German for middle and high school students.",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "Inter-School Sports Meet: DPS Emerges Overall Champion",
      date: "2026-09-10",
      category: "Sports",
      excerpt: "Our students showcased exceptional talent and sportsmanship, securing the top spot in basketball, swimming, and athletics.",
      image: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "4",
      title: "Workshop on Sustainable Development Goals",
      date: "2026-09-05",
      category: "Academic",
      excerpt: "A comprehensive workshop for senior students on integrating SDGs into community projects and daily life.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "5",
      title: "Annual Science Exhibition 'Discovery 2026' Announced",
      date: "2026-08-28",
      category: "Event",
      excerpt: "Students from all grades to present innovative models and research projects on climate change and renewable energy.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "6",
      title: "Success in Board Examinations: 100% Results",
      date: "2026-08-20",
      category: "Achievement",
      excerpt: "Exceptional academic performance by the batch of 2026 with a significant number of students scoring above 95%.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
    }
  ],
  galleryAlbums: [
    {
      id: "annual-sports-2025",
      title: "Annual Sports Day 2025",
      date: "2025-12-15",
      category: "Sports",
      coverImage: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=1200&auto=format&fit=crop",
      description: "A celebration of sportsmanship, endurance, and team spirit.",
      images: [
        { id: "1", url: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=1200&auto=format&fit=crop", caption: "Opening Ceremony" },
        { id: "2", url: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=1200&auto=format&fit=crop", caption: "Swimming Events" },
        { id: "3", url: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1200&auto=format&fit=crop", caption: "Relay Race" },
        { id: "4", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop", caption: "Football Match" }
      ]
    },
    {
      id: "science-expo-2026",
      title: "Science Exhibition 'Discovery'",
      date: "2026-02-10",
      category: "Academic",
      coverImage: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200&auto=format&fit=crop",
      description: "Showcasing innovative models and research by our young scientists.",
      images: [
        { id: "1", url: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=1200&auto=format&fit=crop", caption: "Robotics Display" },
        { id: "2", url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop", caption: "Chemistry Lab Projects" },
        { id: "3", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop", caption: "Coding Workshop" }
      ]
    },
    {
      id: "cultural-fest-2026",
      title: "Kalanjali Cultural Fest",
      date: "2026-03-20",
      category: "Cultural",
      coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
      description: "A vibrant showcase of dance, music, and theatrical performances.",
      images: [
        { id: "1", url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop", caption: "Music Band Performance" },
        { id: "2", url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop", caption: "Art Exhibition" },
        { id: "3", url: "https://images.unsplash.com/photo-1514525253361-bee8a19740c1?q=80&w=1200&auto=format&fit=crop", caption: "Dance Gala" }
      ]
    },
    {
      id: "campus-infrastructure",
      title: "Campus Infrastructure",
      date: "2026-01-01",
      category: "Campus",
      coverImage: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
      description: "A look into our state-of-the-art learning environments.",
      images: [
        { id: "1", url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop", caption: "Main Building" },
        { id: "2", url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop", caption: "Library" },
        { id: "3", url: "https://images.unsplash.com/photo-1541339907198-e08759df9a13?q=80&w=1200&auto=format&fit=crop", caption: "Residential Blocks" }
      ]
    }
  ],
  branches: [
    { name: "DPS Nadergul", href: "https://www.dpsnadergul.in/" },
    { name: "DPS Mahendra Hills", href: "https://www.dpsmahendrahills.in/" },
    { name: "DPS Aerocity", href: "https://www.dpsaerocity.in/" },
    { name: "DPS Santoshnagar", href: "https://www.dpssantoshnagar.in/" }
  ],
  coachingPartners: [
    { name: "Allen / Aakash", focus: "IIT / NEET / JEE" },
    { name: "MODe / Curiosity", focus: "Olympiads / Foundation" }
  ],
  collaborations: ["BITS", "IIT Kharagpur", "ISB", "Osmania", "British Council"]
};
