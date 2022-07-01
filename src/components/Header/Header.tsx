import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import "./Header.scss";
import Storybook from "../../images/storybook";
import Nav from "../Nav/Nav";
import { NavType } from "../Nav/Nav";

type TypedObject = any;

const Header = ({ links }: NavType) => {
  const helloText = useRef<TypedObject>(null);
  const jobRoleText = useRef<TypedObject>(null);
  const helloTextTyped = useRef<TypedObject>(null);
  const jobRoleTextTyped = useRef<TypedObject>(null);

  useEffect(() => {
    const options = {
      typeSpeed: 40,
      showCursor: false,
    };

    helloTextTyped.current = new Typed(helloText.current, {
      ...options,
      strings: ["Hello I'm"],
    }) as TypedObject;
    jobRoleTextTyped.current = new Typed(jobRoleText.current, {
      ...options,
      strings: ["Software Engineer"],
    }) as TypedObject;

    return () => {
      helloTextTyped.current.destroy();
      jobRoleTextTyped.current.destroy();
    };
  }, []);

  return (
    <header>
      <Nav links={links} />
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
            <span className="react-container">&nbsp; React &nbsp;</span>
          </a>
          and
          <span className="second-tool-container">
            <a target="_blank" href="https://www.storybook.js.org/">
              sb
              <Storybook className="logos secondtool" />
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
