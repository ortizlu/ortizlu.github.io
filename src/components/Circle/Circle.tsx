import React from "react";
import "./Circle.scss";

const Circle = () => {
  return (
    <div className="circle">
      <p className="circle__shape circle__text">work with me.</p>
      <a
        href="mailto:ortizlu@icloud.com"
        target="_blank"
        className="circle__email circle__text"
      >
        ortizlu@icloud<span className="circle__text--blue">.</span>com
      </a>
    </div>
  );
};

export default Circle;
