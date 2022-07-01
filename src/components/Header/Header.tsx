import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Header = () => {
  const helloText = React.useRef(null);
  const jobRoleText = React.useRef(null);
  const helloTextTyped = React.useRef(null);
  const jobRoleTextTyped = React.useRef(null);

  React.useEffect(() => {
    const options = {
      typeSpeed: 40,
      showCursor: false,
    };

    helloTextTyped.current = new Typed(helloText.current, {
      ...options,
      strings: ["Hello I'm"],
    });
    jobRoleTextTyped.current = new Typed(jobRoleText.current, {
      ...options,
      strings: ["Software Engineer"],
    });

    return () => {
      helloTextTyped.current.destroy();
      jobRoleTextTyped.current.destroy();
    };
  }, []);

  return (
    <header>
      <div className="desktop-navbar">
        <div className="menu">
          <a className="blog-btn-desktop" href="./blog.html">
            BLOG
          </a>
          <a className="projects-btn-desktop" href="#projects">
            WORK
          </a>
          <a className="resume-btn-desktop" href="Resume.pdf" download>
            RESUME
          </a>
        </div>
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
      <div className="header-text">
        <h2>
          <span
            className="hello"
            style={{ whiteSpace: "pre" }}
            ref={helloText}
          />
          <span className="luis">Luis Ortiz</span>
          <span
            className="full-stack"
            style={{ whiteSpace: "pre" }}
            ref={jobRoleText}
          />
        </h2>
        <p className="about-description">
          I'm a Software Engineer in Washington D.C. I've built applications and
          websites for a diverse set of clients. I live and breathe Javascript
          and my current favorite tools are
          <a target="_blank" href="https://facebook.github.io/react/">
            <span className="react-container">React</span>
          </a>
          and
          <span className="second-tool-container">
            <a target="_blank" href="https://www.storybook.js.org/">
              sb
              <img
                className="logos secondtool"
                alt="Storybook"
                src="logos/storybook.svg"
              />
            </a>
          </span>
        </p>
      </div>
      <a href="#projects" className="welcome-btn">
        &#8595;
      </a>
    </header>
  );
};

export default Header;
