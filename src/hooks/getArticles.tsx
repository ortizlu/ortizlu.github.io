import { useStaticQuery, graphql } from "gatsby";

type AllMdx = {
  edges: {
    node: {
      frontmatter: {
        title: string;
        date: string;
        description: string;
        href: string;
        image: string;
      };
    };
  }[];
};

type AllImageSharp = {
  nodes: {
    fluid: {
      originalName: string;
      originalImg: string;
    };
  }[];
};

export const getArticles = (href?: string) => {
  const data: { allMdx: AllMdx; allImageSharp: AllImageSharp } = useStaticQuery(
    graphql`
      query articles {
        allMdx {
          edges {
            node {
              frontmatter {
                date
                description
                href
                image
                title
              }
            }
          }
        }
        allImageSharp {
          nodes {
            fluid {
              originalName
              originalImg
            }
          }
        }
      }
    `
  );
  const articles: {
    node: {
      frontmatter: {
        title: string;
        date: string;
        description: string;
        href: string;
        image: string;
      };
    };
  }[] = data?.allMdx?.edges || [];
  const images = data.allImageSharp.nodes || [];
  const allArticles = articles.map(
    ({
      node: {
        frontmatter: { title, date, description, href, image },
      },
    }) => {
      const imageObj = images.find(({ fluid: { originalName } }) => {
        return originalName === image;
      });

      return {
        title,
        date,
        description,
        href,
        image: imageObj?.fluid?.originalImg || "",
      };
    }
  );
  const article = [
    allArticles.find((article) => article.href === href) || {
      title: "",
      image: "",
      href: "",
      date: "",
      description: "",
    },
  ];

  return href ? article : allArticles;
};
