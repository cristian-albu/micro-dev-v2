import React from "react";
import { footerData, navData } from "../data";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {navData.map((navLink, index) => (
        <Link key={index.toString()} href={navLink.link}>
          {navLink.title}
        </Link>
      ))}
      {footerData.map((footerLink, index) => (
        <Link key={index.toString()} href={footerLink.link}>
          {footerLink.title}
        </Link>
      ))}
    </div>
  );
};

export default Footer;
