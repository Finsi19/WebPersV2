// Import assets social media
// import instagram from "../assets/icons/social-media/nstagram.svg";
import medium from "../assets/icons/social-media/medium.webp";
import linkedin from "../assets/icons/social-media/linkedin.webp";
import github from "../assets/icons/social-media/github.webp";
import email from "../assets/icons/social-media/email.webp";

// Import assets projects and skills
import badonorDarah from "../assets/images/badonordarah.png";
import hrev from "../assets/images/hrev.png";
import impactPalu from "../assets/images/impact-palu.png";
import snResidence from "../assets/images/sn-residence.png";

import logoBadonorDarah from "../assets/icons/logo-badonordarah.jpeg";
import logoHrev from "../assets/icons/logo-hrev.png";
import logoimpactPalu from "../assets/icons/logo-impact-palu.png";
import logoSnResidence from "../assets/icons/logo-sn-residence.png";

import nextjs from "../assets/icons/tech-stack/nextjs.svg";
import ht from "../assets/icons/tech-stack/ht.svg";
import nextjsDark from "../assets/icons/tech-stack/nextjs-dark.svg";
import react from "../assets/icons/tech-stack/react.svg";
import typescript from "../assets/icons/tech-stack/typescript.svg";
import javascript from "../assets/icons/tech-stack/javascript.svg";
import redux from "../assets/icons/tech-stack/redux.svg";
import graphql from "../assets/icons/tech-stack/graphql.svg";
import nodejs from "../assets/icons/tech-stack/nodejs.svg";
import tailwind from "../assets/icons/tech-stack/tailwind.svg";
import antdesign from "../assets/icons/tech-stack/antdesign.svg";
import mongodb from "../assets/icons/tech-stack/mongodb.svg";
import postgresql from "../assets/icons/tech-stack/postgresql.svg";
import firebase from "../assets/icons/tech-stack/firebase.svg";
import css from "../assets/icons/tech-stack/css.svg";
import vite from "../assets/icons/tech-stack/vite.svg";
import express from "../assets/icons/tech-stack/express.svg";
import php from "../assets/icons/tech-stack/php.svg";
import git from "../assets/icons/tech-stack/git.svg";

// import assets experience
import eduqat from "../assets/icons/company-logo/eduqat.svg";
import kalla from "../assets/icons/company-logo/kalla.svg";
import kodingna from "../assets/icons/company-logo/kodingna.svg";
import bangkit from "../assets/icons/company-logo/bangkit.svg";

import pattern1 from "../assets/images/patterns/pattern1.svg";
import pattern2 from "../assets/images/patterns/pattern2.svg";
import pattern3 from "../assets/images/patterns/pattern3.svg";
import pattern4 from "../assets/images/patterns/pattern4.svg";

export const dataNavbar: Navbar[] = [
  {
    id: 0,
    navigate: "Profile",
    navigate_url: "profile",
    offset: -100,
  },
  {
    id: 1,
    navigate: "Projects",
    navigate_url: "projects",
    offset: -105,
  },
  {
    id: 2,
    navigate: "Experience",
    navigate_url: "experience",
    offset: -50,
  },
  {
    id: 3,
    navigate: "Contact",
    navigate_url: "contact",
    offset: 0,
  },
];

export const dataLogoSocialMedia: LogoSocialMedia[] = [
  {
    id: 0,
    logo: linkedin,
    navigate: "https://api.whatsapp.com/send/?phone=6288973380122",
  },
  {
    id: 1,
    logo: medium,
    navigate: "https://www.instagram.com/alfinoraditya_/",
  },
  {
    id: 2,
    logo: github,
    navigate: "https://github.com/Finsi19",
  },
  {
    id: 3,
    logo: email,
    navigate: "mailto:alfinoraditya011@gmail.com",
  },
];

export const dataProjectss: Projects[] = [
  {
    id: 0,
    img_url: badonorDarah,
    logo: logoBadonorDarah,
    type: "Medical Apps •",
    tech_stack_logo: [ht, css, react, tailwind, firebase],
    navigate_url: "https://thisclass8e.my.id/",
  },
  // {
  //   id: 1,
  //   img_url: hrev,
  //   logo: logoHrev,
  //   type: "Landing Page •",
  //   tech_stack_logo: [react, typescript, vite, tailwind],
  //   navigate_url: "https://halohrev.com",
  // }
  // {
  //   id: 2,
  //   img_url: impactPalu,
  //   logo: logoimpactPalu,
  //   type: "Company Profile •",
  //   tech_stack_logo: [react, nextjsDark, tailwind],
  //   navigate_url: "https://impactpalu.id",
  // },
  // {
  //   id: 3,
  //   img_url: snResidence,
  //   logo: logoSnResidence,
  //   type: "Company Profile •",
  //   tech_stack_logo: [react, tailwind],
  //   navigate_url: "https://sn-residence-dev.vercel.app",
  // },
];

export const dataSkills: string[] = [
  ht,
  css,
  javascript,
  firebase,
  php,
  git
];

export const dataExperience: Experience[] = [
  {
    id: 0,
    logo_url: eduqat,
    pattern: pattern1,
    name: " Eskul IT",
    description: "@smpn19bogor_official",
    date: "",
    position: "Student",
    responsibilites: [
      "Mengikuti ekskul setiap hari jumat.",
      "Belajar bahasa pemrograman seperti PHP.",
      "Mempelajari ilmu tentang Microsoft Excel.",
      "Belajar tentang Html dasar.",
    ],
    first_color: "#0C3342",
    second_color: "#054C5B",
    desc_color: "#B6EDF8",
    position_color: "#002D3E",
    border_color: "#329CA9",
  },
  {
    id: 1,
    logo_url: kalla,
    pattern: pattern2,
    name: "Reselling Hosting for Web",
    description: "",
    date: "",
    position: "Reseller",
    responsibilites: [
      "Membeli cPanel dan WHM yang berkualitas.",
      "Bernegosiasi dengan seller lainnya.",
      "Menjaga agar cPanel dan WHM tidak mati,agar pengguna merasa nyaman.",
    ],
    first_color: "#01271C",
    second_color: "#08573E",
    desc_color: "#C6F8B1",
    position_color: "#033424",
    border_color: "#10AA7A",
  },
  {
    id: 2,
    logo_url: kodingna,
    pattern: pattern3,
    name: "Selling Website",
    description: "",
    date: "",
    position: "Website Builder",
    responsibilites: [
      "Membeli dan mengurus domain yang di inginkan untuk website.",
      "Mengurus hosting pada website agar,website bisa online dan tidak ada gangguan.",
      "Membuat design yang di inginkan pembeli.",
    ],
    first_color: "#020C12",
    second_color: "#022E4A",
    desc_color: "#BEE7FB",
    position_color: "#021826",
    border_color: "#1994A4",
  } 
  // {
  //   id: 3,
  //   logo_url: bangkit,
  //   pattern: pattern4,
  //   name: "Bangkit Academy",
  //   description: "by Google, GoTo, Traveloka",
  //   date: "Feb 2022 - Jul 2022",
  //   position: "Cloud Computing Learning Path",
  //   responsibilites: [
  //     "Build and deploy RESTFul API to our team. Deploy to Cloud Function and can be used or consumed by Mobile Development Path.",
  //     "Deploy Flask App from Machine Learning Path using Docker and then deploy to Cloud Run.",
  //     "Develop our website for our team capstone project.",
  //     "Learn about cloud fundamentals and Softskills.",
  //   ],
  //   first_color: "#2E0D17",
  //   second_color: "#390916",
  //   desc_color: "#F9B6BE",
  //   position_color: "#18040A",
  //   border_color: "#7D2038",
  // },
];
