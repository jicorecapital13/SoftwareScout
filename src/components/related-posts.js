/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import slugify from "@sindresorhus/slugify";

const RelatedPosts = ({ posts }) => {
  return (
    <div sx={relatedPostsStyles.container}>
      <h3>Related Posts</h3>
      <ul sx={relatedPostsStyles.list}>
        {posts.map((post) => (
          <li key={post.frontmatter.slug} sx={relatedPostsStyles.listItem}>
            <Link to={`/blog/${slugify(post.frontmatter.slug)}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedPosts;

const relatedPostsStyles = {
  container: {
    mt: 5,
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    fontSize: 3,
    marginBottom: 2,
    "&:last-child": {
      marginBottom: 0,
    },
    a: {
      textDecoration: "none",
      color: "primary",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
};
