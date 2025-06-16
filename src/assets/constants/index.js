import ideasImg from '../public/images/ideas.svg';
import conceptsImg from '../public/images/concepts.svg';
import designsImg from '../public/images/designs.svg';
import codeImg from '../public/images/code.svg';

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: ideasImg },
  { text: "Concepts", imgPath: conceptsImg },
  { text: "Designs", imgPath: designsImg },
  { text: "Code", imgPath: codeImg },
  { text: "Ideas", imgPath: ideasImg },
  { text: "Concepts", imgPath: conceptsImg },
  { text: "Designs", imgPath: designsImg },
  { text: "Code", imgPath: codeImg },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "+", label: "Satisfied Clients" },
  { value: 7, suffix: "+", label: "Completed Projects" },
  { value: 14, suffix: "+", label: "Tech Tools Mastered" },
];

const logoIconsList = [
  {
    imgPath: "/src/assets/public/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/src/assets/public/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/src/assets/public/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/src/assets/public/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/src/assets/public/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/src/assets/public/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/src/assets/public//images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/src/assets/public//images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/src/assets/public//images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/src/assets/public//images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/src/assets/public/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Thousif consistently delivered high-quality, scalable backend services and reusable frontend components, playing a key role in the success of multiple product releases. His versatility across the stack greatly enhanced our development workflows.",
    imgPath: "/images/exp1.png",
    logoPath: "/src/assets/public/images/logo1.png",
    title: "Frontend & Backend Developer",
    date: "March 2023 - Present",
    responsibilities: [
    "Built and maintained scalable backend services using Node.js, Express, TypeScript, and MongoDB.",
    "Designed and integrated RESTful APIs for seamless communication between services and clients.",
    "Collaborated within a product development team to deliver robust, production-ready features.",
    "Developed reusable, accessible, and responsive UI components using React, TypeScript, Tailwind CSS, and Shadcn UI.",
    "Worked closely with product managers and designers to align technical implementation with business goals.",
    "Optimized application performance and maintained code quality through Git-based workflows and code reviews.",
    ],
  },
  {
    review: "Thousif made a significant impact during his internship by developing robust backend services and contributing key features to our meeting scheduling platform. His reliability and technical skills added real value to our product team.",
    imgPath: "/images/exp2.png",
    logoPath: "/src/assets/public/images/logo2.png",
    title: "Backend Developer Intern",
    date: "July 2024 - March 2025",
    responsibilities: [
      "Developed RESTful APIs using Node.js, Express, and TypeScript for a meeting scheduling product.",
    "Designed and managed MongoDB schemas and queries for efficient data handling.",
    "Built core features such as meeting creation, meeting type management, app integrations, and notifications.",
    "Collaborated with the product team to translate business requirements into scalable backend solutions.",
    "Implemented API validations, error handling, and optimized database operations for performance.",
    "Contributed to improving code quality and maintainability through code reviews and version control workflows.",
    ],
  },
  {
    review: "Thousif successfully completed his Bachelor's in Computer Science Engineering, demonstrating strong academic performance and a solid understanding of core computer science principles. His dedication and grasp of foundational concepts positioned him well for a career in software development.",
    imgPath: "/images/exp3.png",
    logoPath: "/src/assets/public/images/logo3.png",
    title: "B.Tech — Computer Science Engineering",
    date: "2019 - 2023",
    responsibilities: [
      "Graduated with a CGPA of 7.8 from Crescent University, Chennai.",
    "Studied key computer science subjects including Object-Oriented Programming, Data Structures & Algorithms, Digital Systems, Software Engineering, and more.",
    "Engaged in academic projects and coursework that laid a strong foundation for backend and frontend development roles.",
    "Developed an interest in full-stack product development through academic learning and self-initiated projects.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
