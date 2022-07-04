import React, { PropsWithChildren } from "react";
import { graphql, StaticQuery } from "gatsby";

import Circle from "../Circle/Circle";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Nav from "../Nav/Nav";

import "./Article.scss";

const Article = ({ children }: PropsWithChildren) => {
  const links = [
    {
      href: "/blog",
      title: "BLOG",
      className: "blog-btn-desktop",
      id: "article-blog",
    },
    {
      href: "/",
      title: "HOME",
      className: "home-btn-desktop",
      id: "article-home",
    },
    {
      href: "Resume.pdf",
      title: "RESUME",
      className: "resume-btn-desktop",
      download: false,
      id: "article-resume",
    },
  ];
  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx {
            edges {
              node {
                frontmatter {
                  title
                  date
                }
                slug
              }
            }
          }
          allImageSharp {
            edges {
              node {
                id
                fluid {
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const pathname = window.location.pathname.substring(1);
        const article = (data.allMdx.edges || []).find(
          ({ node }: { node: { slug: string } }) => node.slug === pathname
        );
        const image = (data.allImageSharp.edges || []).find(
          ({ node }: { node: { fluid: { originalName: string } } }) =>
            node.fluid.originalName.slice(0, -4) === pathname
        );
        const title = article?.node?.frontmatter?.title || "";
        const date = article?.node?.frontmatter?.date || "";
        const imgUrl = image?.node?.fluid?.originalImg || "";

        return (
          <div>
            <Head title={title} />
            <Nav links={links} />
            <section className="article-content">
              <div className="back-btn">
                <a className="back-btn__link" href="./blog">
                  ← BACK
                </a>
              </div>
              <div
                className="article-image"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                }}
              ></div>
              <div className="article-body">
                <h1 className="article-body__title">{title}</h1>
                <div className="article-body__date">{date}</div>
                <div className="article-body__text">{children}</div>
              </div>
            </section>
            <Circle />
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default Article;
