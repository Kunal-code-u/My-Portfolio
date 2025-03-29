import {
    mobile,
    backend,
    aiml,
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
    meta,
    starbucks,
    tesla,
    shopify,
    // carrent,
    wanderlust,
    // jobit,
    ebook,
    // tripguide,
    pneumonia,
    threejs,
    YoutubeVideoToNotesConvertor
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "work",
    //   title: "Work",
    // },
    {
      id : "projects",
      title : "Projects",
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
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI/ML Enthusiast",
      icon: aiml,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
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
      name: "Wanderlust",
      description:
        "Web-based platform that allows users to search, book, and manage hotels from various providers, providing a convenient and efficient solution for booking hotels on unknown places.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
      ],
      // image: carrent,
      image: wanderlust,
      source_code_link: "https://github.com/Kunal-code-u/WanderLust-Project",
    },
    {
      name: "E-Book Web App",
      description:
        "A comprehensive Book Retail Management System that offers a seamless and intuitive interface for users to browse, search, and purchase as well as sell books effortlessly" ,
      tags: [
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "servlet",
          color: "green-text-gradient",
        },
        {
          name: "JSP",
          color: "pink-text-gradient",
        },
      ],
      image: ebook,
      source_code_link: "https://github.com/Kunal-code-u/Ebook_Web_App",
    },
    {
      name: "Pneumonia Detection Using CNN",
      description:
        "This project implements a Convolutional Neural Network (CNN) to detect pneumonia from chest X-ray images. The goal is to provide a reliable and efficient diagnostic tool to assist healthcare providers.",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "neural networks",
          color: "green-text-gradient",
        },
        {
          name: "deep learning",
          color: "pink-text-gradient",
        },
      ],
      // image: tripguide,
      image: pneumonia,
      source_code_link: "https://github.com/Kunal-code-u/PneumoniaDetection",
    },
    {
      name: "YouTube Transcript to Detailed Notes Converter",
      description:
        "This project converts YouTube video transcripts into detailed and concise notes using Google Gemini Pro. Given a YouTube video URL, the app automatically extracts the transcript, generates a structured summary, and displays it on a sleek Streamlit interface.",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "Generative-AI",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      // image: tripguide,
      image: YoutubeVideoToNotesConvertor,
      source_code_link: "https://github.com/Kunal-code-u/Youtube-Transcript-to-Detailed-Notes-converter",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };