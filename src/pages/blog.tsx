import React from "react";
import "./reset.scss";
import "./blog.scss";

import Circle from "../components/Circle/Circle";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import Head from "../components/Head/Head";
import { getArticles } from "../hooks/getArticles";

const blog = () => {
  const links = [
    {
      href: "/blog",
      title: "BLOG",
      className: "blog-btn-desktop",
      id: "blog-blog",
    },
    {
      href: "/",
      title: "HOME",
      className: "home-btn-desktop",
      id: "blog-home",
    },
    {
      href: "Resume.pdf",
      title: "RESUME",
      className: "resume-btn-desktop",
      download: false,
      id: "blog-resume",
    },
  ];

  type Article = {
    title: string;
    image: string;
    href: string;
    date: string;
    description: string;
  };

  const articles: Article[] = getArticles();

  return (
    <div className="blog-body">
      <Head title="Blog" />
      <header className="alternate-header">
        <Nav links={links} />
      </header>

      <section className="blogs">
        <div className="blogs-container">
          {articles.map(({ title, date, description, href, image }) => (
            <a className="article-preview" href={`./${href}`} key={href}>
              <span
                className="article-preview__image"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                }}
              ></span>
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
