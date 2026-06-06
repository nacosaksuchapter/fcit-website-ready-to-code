// Central site configuration and static content for FCIT AKSU.
// Replace placeholder links/emails with the real values when provided.

export const SITE = {
  name: "FCIT AKSU",
  fullName: "Faculty of Computing and Information Technology",
  university: "Akwa Ibom State University",
  email: "info@fcit.aksu.edu.ng",
  phone: "+234 800 000 0000",
  address: "Akwa Ibom State University, Main Campus, Mkpat Enin, Akwa Ibom State, Nigeria",
  whatsappChannel: "https://wa.me/2348000000000",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  // Google Form embed/link placeholders
  forms: {
    mentee: "https://docs.google.com/forms",
    mentor: "https://docs.google.com/forms",
  },
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Staff", to: "/staff" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Opportunities", to: "/opportunities" },
  { label: "Blog", to: "/blog" },
  { label: "NACOS", to: "/nacos" },
  { label: "Contact", to: "/contact" },
] as const;

export const STATS = [
  { value: "500+", label: "Students" },
  { value: "30+", label: "Staff" },
  { value: "3", label: "Programs" },
  { value: "10+", label: "Years" },
];

export const PROGRAMS = [
  {
    slug: "computer-science",
    name: "B.Sc. Computer Science",
    duration: "4 Years",
    summary:
      "A rigorous foundation in algorithms, software development, systems and theory — preparing graduates to design and build the technology that powers tomorrow.",
    description: [
      "Computer Science at FCIT blends theoretical foundations with hands-on practice. Students explore programming, data structures, algorithms, computer architecture, operating systems, databases and artificial intelligence.",
      "The curriculum emphasises problem solving and computational thinking, equipping graduates to thrive in research, industry and entrepreneurship across a rapidly evolving digital economy.",
    ],
    requirements: [
      "JAMB UTME subjects: English, Mathematics, Physics and one other Science subject",
      "O'Level: Five credits including English, Mathematics, Physics and Chemistry/Biology",
      "Minimum acceptable UTME score as set by the university",
    ],
    careers: [
      "Software Engineer",
      "Data Scientist",
      "Systems Analyst",
      "AI / Machine Learning Engineer",
      "Research Scientist",
    ],
  },
  {
    slug: "information-technology",
    name: "B.Sc. Information Technology",
    duration: "4 Years",
    summary:
      "Bridging business and technology — covering networks, security, web systems and IT management for the modern enterprise.",
    description: [
      "Information Technology focuses on the application of computing to solve real organisational problems. Students study networking, cybersecurity, web and mobile systems, cloud computing and IT project management.",
      "Graduates emerge as versatile professionals able to plan, deploy and manage the information systems that keep organisations running securely and efficiently.",
    ],
    requirements: [
      "JAMB UTME subjects: English, Mathematics, Physics and one other Science subject",
      "O'Level: Five credits including English, Mathematics and Physics",
      "Minimum acceptable UTME score as set by the university",
    ],
    careers: [
      "Network Administrator",
      "Cybersecurity Analyst",
      "Cloud Engineer",
      "IT Project Manager",
      "Database Administrator",
    ],
  },
  {
    slug: "software-engineering",
    name: "B.Sc. Software Engineering",
    duration: "4 Years",
    summary:
      "An engineering-led approach to building reliable, scalable software systems — from requirements to deployment.",
    description: [
      "Software Engineering applies engineering discipline to the full software lifecycle. Students learn requirements analysis, software design, testing, DevOps, agile methodologies and large-scale system architecture.",
      "The programme prepares graduates to lead teams that deliver dependable, high-quality software products on time and at scale.",
    ],
    requirements: [
      "JAMB UTME subjects: English, Mathematics, Physics and one other Science subject",
      "O'Level: Five credits including English, Mathematics and Physics",
      "Minimum acceptable UTME score as set by the university",
    ],
    careers: [
      "Software Developer",
      "DevOps Engineer",
      "QA / Test Engineer",
      "Solutions Architect",
      "Product Engineer",
    ],
  },
];

export const STAFF = [
  { name: "Prof. Emmanuel Udo", title: "Dean & Professor", dept: "Computer Science", email: "e.udo@fcit.aksu.edu.ng", interest: "Artificial Intelligence" },
  { name: "Dr. Grace Akpan", title: "Head of Department", dept: "Information Technology", email: "g.akpan@fcit.aksu.edu.ng", interest: "Network Security" },
  { name: "Dr. John Effiong", title: "Senior Lecturer", dept: "Software Engineering", email: "j.effiong@fcit.aksu.edu.ng", interest: "Distributed Systems" },
  { name: "Dr. Mary Bassey", title: "Senior Lecturer", dept: "Computer Science", email: "m.bassey@fcit.aksu.edu.ng", interest: "Machine Learning" },
  { name: "Mr. Daniel Okon", title: "Lecturer I", dept: "Information Technology", email: "d.okon@fcit.aksu.edu.ng", interest: "Cloud Computing" },
  { name: "Mrs. Patience Etim", title: "Lecturer II", dept: "Software Engineering", email: "p.etim@fcit.aksu.edu.ng", interest: "Human-Computer Interaction" },
  { name: "Mr. Samuel Inyang", title: "Assistant Lecturer", dept: "Computer Science", email: "s.inyang@fcit.aksu.edu.ng", interest: "Data Engineering" },
  { name: "Mrs. Esther Umoh", title: "Administrative Officer", dept: "Faculty Administration", email: "e.umoh@fcit.aksu.edu.ng", interest: "" },
  { name: "Mr. Victor Asuquo", title: "Technologist", dept: "Computer Laboratory", email: "v.asuquo@fcit.aksu.edu.ng", interest: "" },
];

export const MENTORS = [
  { name: "Blessing Eyo", spec: "Frontend", github: "https://github.com" },
  { name: "Michael Edet", spec: "Backend", github: "https://github.com" },
  { name: "Faith Sunday", spec: "Mobile", github: "https://github.com" },
  { name: "David Bassey", spec: "Data", github: "https://github.com" },
  { name: "Joy Williams", spec: "Frontend", github: "https://github.com" },
  { name: "Peter Obot", spec: "Backend", github: "https://github.com" },
];

export type OpportunityType = "Internship" | "Remote" | "Freelance";

export const OPPORTUNITIES: {
  role: string;
  company: string;
  type: OpportunityType;
  location: string;
  deadline: string;
  link: string;
}[] = [
  { role: "Frontend Intern", company: "Paystack", type: "Internship", location: "Lagos", deadline: "Jun 30, 2026", link: "https://example.com" },
  { role: "Backend Developer", company: "Andela", type: "Remote", location: "Remote", deadline: "Jul 10, 2026", link: "https://example.com" },
  { role: "UI/UX Designer", company: "Flutterwave", type: "Internship", location: "Lagos", deadline: "Jul 05, 2026", link: "https://example.com" },
  { role: "Data Analyst", company: "Kuda Bank", type: "Remote", location: "Remote", deadline: "Jul 15, 2026", link: "https://example.com" },
  { role: "Mobile Developer", company: "Freelance Client", type: "Freelance", location: "Remote", deadline: "Open", link: "https://example.com" },
  { role: "DevOps Trainee", company: "SeamlessHR", type: "Internship", location: "Hybrid", deadline: "Jun 28, 2026", link: "https://example.com" },
  { role: "WordPress Developer", company: "Local Agency", type: "Freelance", location: "Uyo", deadline: "Open", link: "https://example.com" },
  { role: "QA Engineer", company: "Interswitch", type: "Remote", location: "Remote", deadline: "Jul 20, 2026", link: "https://example.com" },
  { role: "Cybersecurity Intern", company: "MainOne", type: "Internship", location: "Lagos", deadline: "Jul 01, 2026", link: "https://example.com" },
  { role: "Technical Writer", company: "Remote Startup", type: "Freelance", location: "Remote", deadline: "Open", link: "https://example.com" },
];

export const POSTS = [
  {
    slug: "welcome-to-the-new-fcit-website",
    title: "Welcome to the New FCIT Website",
    category: "Faculty News",
    date: "2026-06-01",
    author: "FCIT Communications",
    excerpt:
      "We are proud to launch the official digital home of the Faculty of Computing and Information Technology, AKSU.",
    body: [
      "After weeks of careful planning and design, we are delighted to unveil the new official website of the Faculty of Computing and Information Technology, Akwa Ibom State University.",
      "This platform is more than a brochure — it is the digital front door of our faculty. Here you will find our programmes, our people, opportunities for students, and the vibrant life of our student body through NACOS AKSU.",
      "We invite all students, staff, prospective applicants and partners to explore the site and connect with us.",
    ],
  },
  {
    slug: "meet-our-first-portfolio-program-mentors",
    title: "Meet Our First Portfolio Program Mentors",
    category: "Student Spotlight",
    date: "2026-05-28",
    author: "Portfolio Program Team",
    excerpt:
      "Final-year students step up to guide juniors in building professional GitHub portfolios.",
    body: [
      "The Student Developer Portfolio Program kicks off with an inspiring roster of final-year mentors spanning frontend, backend, mobile and data specialisations.",
      "Through structured mentorship, these students will help 100 and 200 level students build real, portfolio-worthy projects and establish a strong presence on GitHub.",
      "If you are a junior student eager to grow, registration is open — get matched with a mentor today.",
    ],
  },
  {
    slug: "top-5-tech-skills-for-200l-students",
    title: "Top 5 Tech Skills for 200L Students",
    category: "Tech Articles",
    date: "2026-05-20",
    author: "Dr. Mary Bassey",
    excerpt:
      "From version control to cloud basics — the foundational skills every computing student should start building early.",
    body: [
      "Your second year is the perfect time to begin building skills that compound over the rest of your degree and career.",
      "1. Version control with Git and GitHub. 2. A modern programming language you enjoy. 3. Fundamentals of data structures and algorithms. 4. Basic cloud and deployment literacy. 5. Communication and documentation.",
      "Start small, stay consistent, and document your journey publicly. Future-you will thank present-you.",
    ],
  },
];

export const EVENTS = [
  { title: "Tech Career Fair 2026", date: "Jun 18, 2026", location: "FCIT Auditorium" },
  { title: "NACOS Hackathon", date: "Jun 25, 2026", location: "Computer Lab 2" },
  { title: "Portfolio Program Demo Day", date: "Jul 02, 2026", location: "FCIT Auditorium" },
];

export const NACOS_EXCOS = [
  { name: "Imaobong Asuquo", role: "President" },
  { name: "Godswill Etuk", role: "Vice President" },
  { name: "Mfon Akpan", role: "Secretary General" },
  { name: "Glory Sunday", role: "Public Relations Officer" },
];

export const NACOS_NEWS = [
  { title: "NACOS AKSU Wins Inter-Faculty Hackathon", date: "May 30, 2026" },
  { title: "Annual Tech Week Announced", date: "May 22, 2026" },
  { title: "New Excos Inaugurated for 2025/2026 Session", date: "May 10, 2026" },
];

export const NACOS_ACHIEVEMENTS = [
  "1st Place — AKSU Inter-Faculty Hackathon 2026",
  "Best Student Association Award 2025",
  "Over 300 active members across all levels",
  "Hosted 5 industry workshops in the last session",
];
