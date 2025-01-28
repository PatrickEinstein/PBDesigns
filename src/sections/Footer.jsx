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
      <div className="text-white-500 flex flex-wrap gap-2">
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
        <p>|</p>
        <p>Media</p>
        <p>|</p>
        <p>Blogs</p>
      </div>
      <div className="flex gap-3">
        {SocialLinks.map(({ name, link, logo }, index) => (
          <div key={index} className="social-icon text-white-600 text-3xl">{logo}</div>
        ))}
      </div>
      <p className="text-white-500">
        <p>©️ {new Date().getFullYear()} PB Designs All rights reserved</p>
      </p>
      <p className="text-white-700">
        {" "}
        web app built by{" "}
        <a
          href="https://patrick-xi.vercel.app/"
          className="underline text-blue-200"
        >
          Olalekan
        </a>
      </p>
    </section>
  );
};
export default Footer;
