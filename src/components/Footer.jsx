import React from "react";
import Logo from "../assets/logo.png";
import { MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const icons = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/sathwik9887/",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/sathwik9887/",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://instagram.com/sathwik9887/",
  },
];

const Footer = () => {
  return (
    <div className="bg-slate-400 lg:px-40 md:px-20 sm:px-10  flex lg:flex-row flex-col lg:justify-between justify-center items-center  lg:space-y-0 lg:space-x-5 overflow-hidden">
      <div className="flex lg:flex-row flex-col items-center lg:space-x-4 space-y-2 lg:space-y-0 ">
        <img src={Logo} alt="Logo" width={100} />
        <span className="text-black text-lg font-medium lg:border-r-2 border-black lg:pr-4 pr-0">
          Dressy Dazzle
        </span>
        <div className="flex items-center space-x-2">
          <MdCopyright className="text-black text-lg" />
          <p className="text-black text-sm">2024 Dress Dazzle</p>
        </div>
      </div>

      <div className="flex justify-start items-center space-x-2 cursor-pointer lg:mt-0 mt-4">
        {icons.map((icon, index) => (
          <a href={icon.link} target="_blank" key={index}>
            {icon.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
