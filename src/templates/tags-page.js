/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import BlogCard from "../components/blog-card";

export const pageQuery = graphql`
  query tagsQuery($tagTitle: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tagTitle } } }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
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

const Tags = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data;
  const { tagTitle } = pageContext; // Access the tag title from pageContext

  const tagCard = allMarkdownRemark.edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <BlogCard key={edge.node.id} data={edge.node} />);

  return (
    <Layout>
      <Seo title={`Tag: ${tagTitle}`} />
      <div sx={tagsStyles.tagContainer}>
        <section sx={tagsStyles.tagHead}>
          <h2>{`Tag: ${tagTitle}`}</h2>
          {tagCard.length !== 1 ? (
            <p>{tagCard.length} Blogs</p>
          ) : (
            <p>{tagCard.length} Blog</p>
          )}
        </section>
        <div sx={tagsStyles.tagCard}>{tagCard}</div>
      </div>
    </Layout>
  );
};

export default Tags;

const tagsStyles = {
  tagContainer: {
    variant: "variants.container",
    minHeight: "70vh",
  },
  tagHead: {
    h2: {
      mb: 2,
      color: "black",
    },
    p: {
      fontSize: 3,
      color: "mutedColor",
      display: "block",
    },
  },
  tagCard: {
    mt: 4,
    display: "grid",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    gap: "50px",
  },
};
