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
    padding: '15px 0', // Remove background and border, add vertical padding
    marginBottom: '20px',
  },
  heading: {
    fontSize: '1.5rem', // Larger font size for better visibility
    fontWeight: 'bold',
    color: '#030303',
    marginBottom: '15px',
    position: 'relative', // Position for the pseudo-element
    paddingBottom: '10px',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%', // Extend the line fully under the title
      height: '2px',
      backgroundColor: '#A31933', // Custom color for the line
    },
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '10px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
  link: {
    textDecoration: 'none',
    color: '#030303',
    fontSize: '1rem',
    display: 'inline-block',
    position: 'relative',
    transition: 'color 0.2s ease',
    '&:hover': {
      textDecoration: 'underline',
      color: '#A31933', // Futuristic hover effect
    },
  },
  count: {
    marginLeft: '5px',
    color: '#666',
    fontSize: '0.9rem',
  },
};
