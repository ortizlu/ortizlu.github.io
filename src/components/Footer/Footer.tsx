import React from "react";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear().toString();

  return (
    <footer className="footer">
      Luis Ortiz | Copyright &nbsp;
      <span className="footer__year">{year}</span>
    </footer>
  );
};

export default Footer;
