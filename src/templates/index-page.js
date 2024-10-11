/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import BlogListHome from "../components/blog-list-home";
import Seo from "../components/seo";
import Site from "../util/site.json";
import { GatsbyImage } from "gatsby-plugin-image";
import AboutAndRecentArticles from "../components/AboutAndRecentArticles";

export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        name
        description
        cta {
          text
          url
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const { markdownRemark, posts } = data;
  const { frontmatter } = markdownRemark;

  const homeData = (
    <div sx={indexStyles.homeData}>
      <div>
        {frontmatter.name && (
          <h3 sx={indexStyles.title}>
            Your guide to the best software
          </h3>
        )}
        {frontmatter.description && (
          <p sx={indexStyles.description}>{frontmatter.description}</p>
        )}
        <Link
          to={frontmatter.cta.url}
          sx={indexStyles.ctaButton}
        >
          {frontmatter.cta.text} &nbsp;
          <span>&#8599;</span>
        </Link>
      </div>
      <GatsbyImage
        image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
        alt={frontmatter.title + " - Featured image"}
        sx={indexStyles.featuredImage}
      />
    </div>
  );

  return (
    <Layout>
      <Seo title={Site.title} description={frontmatter.description} />
      <div sx={indexStyles.container}>
        {homeData}
      </div>
      <BlogListHome data={posts} />
      <AboutAndRecentArticles />
    </Layout>
  );
};

export default HomePage;

const indexStyles = {
  container: {
    variant: "variants.container",
    width: "100%",
    m: "0 auto",
    padding: ["20px", "30px", "40px"],
    backgroundColor: "rgba(30, 30, 50, 0.95)", // Dark, futuristic background
    color: "white", // White text for readability
    borderRadius: "12px", // Modern rounded corners
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)", // Deep shadow for depth
  },
  title: {
    color: "#00D1FF", // Neon-like blue
    fontSize: [5, 6, 7], // Larger and futuristic
    fontWeight: "bold",
    textShadow: "0px 4px 10px rgba(0, 209, 255, 0.7)", // Neon glow effect
    mb: [3, 4],
    textAlign: "center",
  },
  description: {
    color: "#A9A9A9", // Subtle grey for a modern look
    fontSize: [3, 4],
    lineHeight: "1.6",
    mb: 5,
    textShadow: "0px 2px 8px rgba(255, 255, 255, 0.1)", // Soft glow
  },
  ctaButton: {
    variant: "variants.button",
    backgroundColor: "#FF007A", // Futuristic pink button
    color: "white",
    display: "inline-block",
    textAlign: "center",
    padding: "12px 24px",
    borderRadius: "50px", // Circular button for a futuristic feel
    mt: 4,
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-5px)", // Subtle lift on hover
      boxShadow: "0px 15px 30px rgba(255, 0, 122, 0.7)", // Pink glow on hover
    },
  },
  featuredImage: {
    maxWidth: "100%",
    width: "100%",
    height: ["400px", "500px"], // Larger image with fixed height
    borderRadius: "12px",
    transition: "transform 0.3s ease", // Zoom effect on hover
    "&:hover": {
      transform: "scale(1.05)", // Slight zoom for futuristic feel
    },
  },
  homeData: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "1fr 1fr"], // Adjust columns based on screen size
    gap: "40px",
    alignItems: "center",
  },
};
