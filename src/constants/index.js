import ModernHome3 from "../components/ModernHome3";
import ModernHome4 from "../components/ModernHome4";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 5,
    name: "Gallery",
    href: "/gallery",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Operations Manager at GreenLeaf Construction",
    img: "assets/review1.png",
    review:
      "Working with PB Designs on our office building project was a fantastic experience. They transformed our vision into a functional, sustainable design. Their attention to detail and commitment to quality are unmatched. Highly recommended!",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of BuildSmart Innovations",
    img: "assets/review2.png",
    review:
      "PB Designs’ expertise in construction management is truly impressive. They delivered a robust and scalable solution for our multi-site development project, and the results have been exceptional. They’re true professionals! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech Builders",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about PB Designs. They took our complex project requirements and delivered an innovative structural design on time and within budget. Their problem-solving abilities and engineering expertise are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "PB Designs was a pleasure to work with. They understood our construction requirements perfectly and delivered results that exceeded our expectations. Their skills in both project planning and execution are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Loveworld Studio Project",
    desc: "A state-of-the-art studio facility designed and constructed to meet international broadcasting standards, reflecting our expertise in delivering complex and specialized structures.",
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    // model: <ModernHome3 />,
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "3-Bedroom Terrace Building",
    desc: "A residential development featuring modern design and quality construction, exemplifying our commitment to creating comfortable and aesthetically pleasing living spaces.",
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    // model: <ModernHome4 />,
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Road Rehabilitation for Revolution Plus Property",
    desc: "Comprehensive road rehabilitation within the estate, enhancing accessibility and infrastructure, demonstrating our proficiency in large-scale civil engineering projects.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    // model: <ModernHome4 />,
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 2, 0]
      : isTablet
      ? [5, 4, 0]
      : [10, 2, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 5, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 2, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-18, -8, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Julius Berger",
    pos: "Lead Structural Engineer",
    duration: "2022 - Present",
    title:
      "As the Lead Structural Engineer, I specialize in designing and supervising large-scale infrastructure projects, ensuring structural integrity and compliance with safety standards. My role involves leading teams and overseeing all aspects of construction engineering.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Titanic Builders",
    pos: "Site Engineer",
    duration: "2020 - 2022",
    title:
      "During my tenure as a Site Engineer, I managed on-site operations for residential and commercial projects. I coordinated with subcontractors, monitored construction progress, and ensured that all tasks were completed on time and within budget.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "3D Builders",
    pos: "Junior Civil Engineer",
    duration: "2019 - 2020",
    title:
      "As a Junior Civil Engineer, I assisted in project planning, material estimation, and quality assurance. I collaborated with senior engineers to analyze structural designs and provided support in preparing detailed project reports.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];

export const Services = [
  {
    headtext: "Comprehensive Engineering Solutions Tailored to Your Needs",
    subtext:
      "At PB Designs Limited, we offer a wide range of services designed to meet the diverse needs of our clients. Our expertise spans multiple disciplines, ensuring that we can provide comprehensive solutions for any project.",
  },
  {
    headtext: "Automation and Control Systems Design and Implementation",
    subtext:
      "In today's fast-paced industrial environment, automation is key to maintaining competitiveness. Our team designs and implements advanced control systems that streamline operations, enhance productivity, and reduce costs. By integrating the latest technologies, we create customized solutions that align with your specific operational requirements.",
  },
  {
    headtext: "Corrosion Control and Cathodic Protection",
    subtext:
      "Corrosion can significantly impact the longevity and safety of your assets. Our corrosion control strategies, including cathodic protection, are designed to prevent deterioration, ensuring the durability and reliability of your infrastructure. We conduct thorough assessments to develop tailored solutions that mitigate corrosion risks effectively.",
  },
  {
    headtext: "Pipeline Construction",
    subtext:
      "Pipelines are the lifelines of energy and resource distribution. Our comprehensive pipeline construction services encompass planning, design, procurement, installation, and commissioning. We adhere to stringent safety and environmental standards, delivering pipelines that are efficient, reliable, and sustainable.",
  },
  {
    headtext: "Industrial Building Construction",
    subtext:
      "The foundation of any successful industrial operation lies in its infrastructure. We specialize in constructing industrial buildings that meet international standards, focusing on functionality, safety, and scalability. Our designs are tailored to support your operational needs, providing a conducive environment for productivity and growth.",
  },
  {
    headtext: "Non-Destructive Testing Services",
    subtext:
      "Ensuring the integrity of materials and structures is crucial for safety and performance. Our non-destructive testing services, including Ultrasonic Thickness Gauging, Magnetic Particle Inspection (MPI), Positive Material Identification (PMI), and Hardness Testing, provide accurate assessments without causing damage. These services help in early detection of potential issues, allowing for proactive maintenance and prevention of failures.",
  },
  {
    headtext: "Casing and Tubing Inspection",
    subtext:
      "In the oil and gas industry, the integrity of casing and tubing is vital for safe and efficient operations. Our inspection services utilize advanced technologies to detect defects, corrosion, or wear, ensuring compliance with industry standards and preventing costly downtimes.",
  },
];
