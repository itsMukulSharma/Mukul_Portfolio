// icons
import { HiHome, HiUser, HiViewColumns, HiEnvelope } from "react-icons/hi2";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  ,
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

//  About data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Front-end Developer - TCZ Digital Pvt Ltd",
        stage: "Aug 2021 - present",
      },
      {
        title: "Intern (MERN-REACT) - TCZ Digital Pvt Ltd",
        stage: "May 2021 - Aug 2021",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Btech CSE - DCRUST University",
        stage: "2017-2021",
      },
    ],
  },
];
