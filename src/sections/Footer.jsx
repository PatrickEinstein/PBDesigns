import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";

const SocialLinks = [
  {
    name: "Facebook",
    link: "",
    logo: <IoLogoFacebook />,
  },
  {
    name: "Twitter",
    link: "",
    logo: <IoLogoTwitter />,
  },
  {
    name: "LinkedIn",
    link: "",
    logo: <IoLogoLinkedin />,
  },
  {
    name: "Instagram",
    link: "",
    logo: <IoLogoInstagram />,
  },
];

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap flex-col gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Media</p>
        <p>|</p>
        <p>Blogs</p>
      </div>
      <div className="flex gap-3">
        {SocialLinks.map(({ name, link, logo }) => (
          <div className="social-icon text-white-600 text-3xl">{logo}</div>
        ))}
      </div>
      <p className="text-white-500">
        ©️ 2024 Mohammed Olalekan Patrick. All rights reserved
      </p>
    </section>
  );
};
export default Footer;
