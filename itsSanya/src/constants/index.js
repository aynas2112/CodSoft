import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    PPAI,
    ca,
    AR,
    ars,
    threejs,
    insightsLogo,
    sedsLogo,
    omdenaLogo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Resource Team Member and Lead",
      company_name: "Insights Club",
      icon: insightsLogo,
      iconBg: "#383E56",
      date: "July 2022-July 2023",
      points: [
        "Resource Curation: Skillfully curated resources for college events, ensuring current and relevant content.",
        "Team Collaboration: Collaborated with a diverse team to compile resources for various media, fostering teamwork.",
        "Content Contribution: Contributed to engaging content for newsletters and magazines, covering numerous events.",
        "Resource Management: Organized and maintained resources for team access, improving organizational skills.",
      ],
    },
    {
      title: "Event Team Lead",
      company_name: "SEDS Nebula",
      icon: sedsLogo,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Present",
      points: [
        "Outreach Team Member: Shared space knowledge, promoting inclusivity.",
        "Event Team Lead: Led event planning, honed leadership and organizational skills.",
        "Educational Advocacy: Promoted space awareness for all students.",
        "Community Impact: Enhanced learning experiences, ignited passion for space.",
      ],
    },
    {
      title: "Social Media Team Lead",
      company_name: "Omdena VIT Bhopal",
      icon: omdenaLogo,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "Social Media Lead: Drove online presence and engagement for AI projects.",
        "Content Strategy: Formulated content plans to showcase real-world AI initiatives.",
        "Audience Engagement: Fostered a vibrant online AI community.",
        "Team Collaboration: Worked in unison to achieve Omdena's AI project goals.",
      ],
    },
    // {
    //   title: "PicPerfectAI",
    //   company_name: "Machine Learning",
    //   icon: PPAI,
    //   iconBg: "#E6DEDD",
    //   date: "Oct 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Amazon Recommender",
      description:
      "Amazon Recommender System: Developed tailored product recommendations using Python and ML for 25,000 users, surpassing industry standards, enhancing the user shopping experience.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Data Analysis",
          color: "pink-text-gradient",
        },
      ],
      image: ars,
      source_code_link: "https://github.com/aynas2112/Amazon-recommende-system",
    },
    {
      name: "Crypto-analysis",
      description:
        "Enhancing digital transaction security, this tool validates cryptographic keys through text and image analysis, significantly boosting protection against potential cyber threats.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "Tesseract",
          color: "pink-text-gradient",
        },
      ],
      image: ca,
      source_code_link: "https://github.com/SakkyOP/crypto-analysis",
    },
    {
      name: "PicPerfectAI",
      description:
        "Your AI companion revolutionizes social media by offering effortless and stylish posts. It provides tailored pose suggestions based on your surroundings, ensuring captivating and personalized content.",
      tags: [
        {
          name: "ML",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: PPAI,
      source_code_link: "https://github.com/aynas2112/PicPerfectAI",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };