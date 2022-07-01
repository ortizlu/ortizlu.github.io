import React from "react";
import "./reset.scss";
import "./blog.scss";

import Circle from "../components/Circle/Circle";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Head from "../components/Head/Head";

import watches from "../images/watches.jpg";

const blog = () => {
  const links = [
    { href: "/blog", title: "BLOG", className: "blog-btn-desktop" },
    {
      href: "/",
      title: "HOME",
      className: "home-btn-desktop",
    },
    {
      href: "Resume.pdf",
      title: "RESUME",
      className: "resume-btn-desktop",
      download: false,
    },
  ];

  type Blog = {
    title: string;
    style: {
      backgroundImage: string;
    };
    href: string;
    date: string;
    description: string;
  };

  const blogs: Blog[] = [
    {
      href: "./moment-to-date-fns-migration",
      style: { backgroundImage: `url(${watches})` },
      title: "Moment.js to Date-fns Migration",
      date: "May 25, 2022",
      description: "During a few of our quarterly innovation sprints...",
    },
  ];

  return (
    <div className="blog-body">
      <Head title="Blog" />
      <Nav links={links} />
      <section className="blogs">
        <div className="blogs-container">
          {blogs.map(({ title, style, href, date, description }: Blog) => (
            <a className="article-preview" href={href}>
              <span className="article-preview__image" style={style}></span>
              <span className="article-preview__title">{title}</span>
              <span className="article-preview__date">{date}</span>
              <span className="article-preview__description">
                {description}
              </span>
            </a>
          ))}
        </div>
      </section>
      <Circle />
      <Footer />
    </div>
  );
};

export default blog;
