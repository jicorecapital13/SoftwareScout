/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const categories = data.allMarkdownRemark.group;

  return (
    <aside sx={sidebarStyles.container}>
      <h3 sx={sidebarStyles.heading}>Categories</h3>
      <ul sx={sidebarStyles.list}>
        {categories.map((category) => (
          <li key={category.fieldValue} sx={sidebarStyles.listItem}>
            <Link to={`/category/${category.fieldValue}`} sx={sidebarStyles.link}>
              {category.fieldValue} <span sx={sidebarStyles.count}>({category.totalCount})</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

const sidebarStyles = {
  container: {
    bg: "background",
    border: "1px solid",
    borderColor: "muted",
    borderRadius: "8px",
    p: 3,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    mt: 4,
  },
  heading: {
    mb: 3,
    fontSize: 4,
    fontWeight: "heading",
    color: "primary",
    borderBottom: "2px solid",
    borderColor: "primary",
    pb: 2,
  },
  list: {
    listStyleType: "none",
    m: 0,
    p: 0,
  },
  listItem: {
    mb: 2,
    '&:last-child': {
      mb: 0,
    },
  },
  link: {
    color: "text",
    fontSize: 2,
    fontWeight: "body",
    textDecoration: "none",
    transition: "color 0.2s ease",
    '&:hover': {
      color: "primary",
    },
  },
  count: {
    ml: 2,
    color: "muted",
    fontSize: 1,
  },
};
