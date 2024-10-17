/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import slugify from "@sindresorhus/slugify";

const postPrefix = "/blog/";

const BlogCard = ({ data }) => {
  return (
    <article sx={blogStyles.cardContainer}>
      <Link to={postPrefix + slugify(data.frontmatter.title)} sx={blogStyles.cardLink}>
        {data.frontmatter.featuredImage && (
          <div sx={blogStyles.imageContainer}>
            <GatsbyImage
              image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              alt={data.frontmatter.title + " - Blog image"}
              sx={blogStyles.featuredImage}
            />
          </div>
        )}
        <div sx={blogStyles.cardContent}>
          <h3 sx={blogStyles.title}>{data.frontmatter.title}</h3>
          <span sx={blogStyles.date}>{data.frontmatter.date}</span>
          <p sx={blogStyles.description}>{data.excerpt}</p>
          <div sx={blogStyles.readMoreContainer}>
            <Link to={postPrefix + slugify(data.frontmatter.title)} sx={blogStyles.readMore}>
              Read more
            </Link>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;

const blogStyles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    bg: "white",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
  cardLink: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  imageContainer: {
    height: "200px",
    overflow: "hidden",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease",
    ":hover": {
      transform: "scale(1.1)",
    },
  },
  cardContent: {
    padding: "1.5rem",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  title: {
    fontSize: [3, 4],
    fontWeight: "bold",
    color: "text",
    mb: 2,
    transition: "color 0.2s",
    ":hover": {
      color: "primaryColor",
    },
  },
  date: {
    fontSize: 1,
    color: "mutedColor",
    mb: 3,
  },
  description: {
    fontSize: [2, 3],
    color: "text",
    lineHeight: "1.7",
    mb: 4,
  },
  readMoreContainer: {
    mt: "auto",
    textAlign: "right",
  },
  readMore: {
    fontSize: [1, 2],
    color: "primaryColor",
    fontWeight: "bold",
    textDecoration: "none",
    ":hover": {
      color: "secondaryColor",
    },
  },
};
