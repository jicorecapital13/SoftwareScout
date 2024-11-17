/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import BlogCard from "./blog-card";
import postData from "../util/posts.json";

export default function BlogListHome(props) {
  // Ensure `data` is available and has the expected structure
  const data = props.data && props.data.edges ? props.data : { edges: [] };

  // Log data for debugging 
  console.log("Blog data:", data);

  // Map through the blog posts and pass necessary data to `BlogCard`
  const posts = data.edges
    .filter((edge) => !!edge.node.frontmatter?.date) // Ensure date exists
    .map((edge) => (
      <BlogCard
        key={edge.node.id}
        data={edge.node}
        // Pass the description here as part of the data being rendered
        description={edge.node.frontmatter?.description || "No description available."}
      />
    ));

  return <PostMaker data={posts} />;
}

const PostMaker = ({ data }) => (
  <section sx={{ variant: "variants.container" }}>
    <div>
      <div sx={blogStyles.blogListHomeHead}>
        <div>
          <h2 sx={blogStyles.title}>{postData?.title || "Blog"}</h2>
          <p sx={blogStyles.description}>{postData?.description || "Latest blog posts."}</p>
        </div>
        <div style={{ display: "flex" }}>
  {data.length > 10 && (
    <Link
      to="/blog"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#A31933", // Same background color
        color: "white", // White text by default
        borderRadius: "8px", // Rounded corners
        textDecoration: "none",
        fontWeight: "bold",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow
        transition: "background-color 0.3s ease, transform 0.2s ease, color 0.3s ease",
        ":hover": {
          backgroundColor: "darkred", // Slightly darker red on hover
          transform: "translateY(-2px)", // Lift effect
          color: "blue", // Link font turns blue on hover
        },
      }}
    >
      See all Blogs &nbsp;
      <span>&#8599;</span>
    </Link>
  )}
</div>

      </div>
      {data.length ? (
        <div sx={blogStyles.blogPosts}>{data.slice(0, 6)}</div>
      ) : (
        <p>No blog posts available at the moment.</p>
      )}
    </div>
  </section>
);

const blogStyles = {
  blogListHomeHead: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "30px",
    alignItems: "flex-end",
    mb: 6,
  },
  title: {
    mb: 2,
    color: "black",
    fontSize: "42px !important",
    fontWeight: "600 !important",
  },
  description: {
    fontSize: 3,
    color: "mutedColor",
    maxWidth: "30ch",
  },
  blogPosts: {
    display: "grid",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    rowGap: "42px",
    columnGap: "36px",
  },
};
