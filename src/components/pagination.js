/** @jsx jsx */

import { jsx } from "theme-ui";
import { graphql, Link, useStaticQuery } from "gatsby";
import BlogCard from "../components/blog-card";

const BlogList = ({ pageContext }) => {
  // Always call useStaticQuery unconditionally at the top level of your component
  const data = useStaticQuery(graphql`
    query BlogListQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              featuredImage {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
              slug
            }
          }
        }
      }
    }
  `);

  if (!pageContext) {
    return <p></p>;
  }

  const posts = data?.allMarkdownRemark?.edges || [];
  const { currentPage, numPages } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/${currentPage + 1}`;

  return (
    <div>
      <h1>Blog Posts</h1>
      <div sx={blogListStyles.grid}>
        {posts.length > 0 ? (
          posts.map(({ node }) => (
            <BlogCard key={node.id} data={node} />
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>

      <div sx={blogListStyles.pagination}>
        {!isFirst && (
          <Link to={prevPage} sx={blogListStyles.link} rel="prev">
            ← Previous
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link
            key={`pagination-number${i + 1}`}
            to={`/blog/${i === 0 ? "" : i + 1}`}
            sx={blogListStyles.link}
            activeClassName="active"
          >
            {i + 1}
          </Link>
        ))}
        {!isLast && (
          <Link to={nextPage} sx={blogListStyles.link} rel="next">
            Next →
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogList;

const blogListStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    mb: 5,
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    mt: 5,
  },
  link: {
    padding: "8px 16px",
    textDecoration: "none",
    color: "primary",
    "&.active": {
      fontWeight: "bold",
      textDecoration: "underline",
    },
  },
};
