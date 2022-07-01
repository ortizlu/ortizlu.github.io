import React from "react";

export type Link = {
  href: string;
  title: string;
  className?: string;
  download?: boolean;
};

export type NavType = {
  links: Link[];
};

const Nav = ({ links }: NavType) => {
  const linkElements = links.map((link) => (
    <a className={link.className} href={link.href} download={link.download}>
      {link.title}
    </a>
  ));
  return (
    <div className="desktop-navbar">
      <div className="menu">{linkElements}</div>
      <div className="social-menu">
        <a
          className="email-btn-desktop"
          href="mailto:ortizlu@icloud.com"
          target="_blank"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          className="linkedin-btn-desktop"
          href="https://www.linkedin.com/in/ortizlu/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className="github-btn-desktop"
          href="https://github.com/ortizlu"
          target="_blank"
        >
          <i className="fab fa-github-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Nav;
