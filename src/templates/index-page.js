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
  const { markdownRemark, posts } = data; // data.markdownRemark holds your page data
  const { frontmatter } = markdownRemark;

  const homeData = (
    <div sx={indexStyles.homeData}>
      <div>
        {frontmatter.name && (
          <h3
            sx={{
              color: "text",
              fontSize: [4, 5, 6],
              fontWeight: "bold",
              mb: [3, 4],
              textAlign: "center",
            }}
          >
            Your guide to the best software
          </h3>
        )}
        {frontmatter.description && (
          <p sx={indexStyles.description}>{frontmatter.description}</p>
        )}
        <Link
          to={frontmatter.cta.url}
          sx={{
            variant: "variants.button",
            backgroundColor: "#a31933", // Set the button color
            display: "inline-block", // Ensures it respects margin auto for centering
            textAlign: "center",
            mx: "auto", // Centers the button horizontally
            color: "white", // Ensure text is readable against the new button color
            padding: "10px 20px", // Adjust padding as needed
            borderRadius: "5px", // Optional: Adjust border radius to match your design
            mt: 4, // Add some margin to separate from the description
          }}
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
      <div
        sx={{
          variant: "variants.container",
          width: "100%",
          m: "0 auto",
        }}
      >
        {homeData}
      </div>
      <BlogListHome data={posts} />

      {/* Place the new component near the footer */}
      <AboutAndRecentArticles />

      {/* Footer component */}
    </Layout>
  );
};

export default HomePage;

const indexStyles = {
  title: {
    color: "black",
    mb: 3,
    fontSize: [5, 5, 6],
    letterSpacing: "1px",
    fontWeight: "600 !important",
  },
  description: {
    color: "mutedColor",
    fontSize: "22px",
    fontStyle: "italic",
    lineHeight: "1.4",
    fontWeight: "200",
    mb: 5,
  },
  featuredImage: {
    maxWidth: "100% !important",
    width: "100% !important",
    height: ["400px"],
    borderRadius: "12px",
  },
  homeData: {
    display: "grid",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
    ],
    gap: "36px",
    alignItems: "center",
  },
};
