import React from "react";
import "./reset.scss";
import "./index.scss";

import Circle from "../components/Circle/Circle";
import Footer from "../components/Footer/Footer";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";

const IndexPage = () => {
  const links = [
    {
      href: "/blog",
      title: "BLOG",
      className: "blog-btn-desktop",
      id: "index-blog",
    },
    {
      href: "#projects",
      title: "WORK",
      className: "projects-btn-desktop",
      id: "index-work",
    },
    {
      href: "Resume.pdf",
      title: "RESUME",
      className: "resume-btn-desktop",
      download: false,
      id: "index-resume",
    },
  ];

  return (
    <main>
      <Head title="Welcome!" />
      <Header links={links} />
      <Projects />
      <Circle />
      <Footer />
    </main>
  );
};

export default IndexPage;
