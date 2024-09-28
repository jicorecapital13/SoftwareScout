/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import slugify from "@sindresorhus/slugify";

const postPrefix = `/blog/`;

const BlogCard = ({ data }) => {
  return (
    <div sx={blogStyles.wrapper}>
      <div sx={blogStyles.cardContainer}>
        <Link to={postPrefix + slugify(`${data.frontmatter.title}`)}>
          {data.frontmatter.featuredImage && (
            <GatsbyImage
              image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
              alt={data.frontmatter.title + " - Blog image"}
              sx={blogStyles.featuredImage}
            />
          )}
          <div sx={blogStyles.cardContent}>
            <h3 sx={blogStyles.title}>{data.frontmatter.title}</h3>
            <span sx={blogStyles.date}>{data.frontmatter.date}</span>
            <p sx={blogStyles.description}>
              {data.excerpt} {/* Use the blog post excerpt as the brief summary */}
            </p>
            <div sx={blogStyles.readMoreContainer}>
              <Link to={postPrefix + slugify(`${data.frontmatter.title}`)} sx={blogStyles.readMore}>
                Read more
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

const blogStyles = {
  wrapper: {
    mb: 5,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)", // Enlarges the card on hover
    },
    bg: "white",
  },
  featuredImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    transition: ".3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardContent: {
    p: 4,
    textAlign: "left",
  },
  title: {
    fontSize: [3, 4],
    fontWeight: "bold",
    color: "text",
    mb: 2,
    transition: "color 0.2s",
    "&:hover": {
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
    textAlign: "right",
  },
  readMore: {
    fontSize: [1, 2],
    color: "primaryColor",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      color: "secondaryColor",
    },
  },
};
