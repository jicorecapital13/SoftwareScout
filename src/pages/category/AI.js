import * as React from "react";
import { graphql, Link } from "gatsby";

// Define your inline CSS styles
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '20px',
  },
  postList: {
    listStyleType: 'none',
    paddingLeft: 0,
  },
  postItem: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  postLink: {
    color: '#007acc',
    textDecoration: 'none',
    fontSize: '1.1rem',
  },
};

const AICategoryPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges; // Get all posts for the AI category

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>AI Category</h1>
      <p style={styles.paragraph}>These are the blog posts related to the AI category:</p>
      <ul style={styles.postList}>
        {posts.map(({ node }) => (
          <li key={node.id} style={styles.postItem}>
            <Link to={`/blog${node.fields.slug}`} style={styles.postLink}>
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// GraphQL query to fetch blog posts under the "AI" category
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "AI" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default AICategoryPage;
