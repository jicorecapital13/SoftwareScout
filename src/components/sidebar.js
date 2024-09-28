/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery, Link } from "gatsby";

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query SidebarQuery {
      categoriesGroup: allMarkdownRemark {
        group(field: frontmatter___category) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  // Categories data
  const categories = data.categoriesGroup.group;

  return (
    <div className="blog-sidebar d-none d-lg-block">
      {/* Categories */}
      {categories.length > 0 && (
        <aside sx={sidebarStyles.widget}>
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
      )}
    </div>
  );
};

export default Sidebar;

const sidebarStyles = {
  widget: {
    width: '100%',
    padding: '15px',
    marginBottom: '30px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    borderBottom: '2px solid #A31933',
    paddingBottom: '10px',
    color: '#030303',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    margin: '0',
  },
  listItem: {
    padding: '8px 0',
    borderBottom: '1px solid #ddd',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  link: {
    color: '#030303',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#A31933',
      textDecoration: 'underline',
    },
  },
  count: {
    marginLeft: '5px',
    color: '#999',
    fontSize: '0.9rem',
  },
};
