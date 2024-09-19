/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';

const FooterNavigation = () => {
  return (
    <div sx={footerStyles.footerWrapper}>
      <div sx={footerStyles.siteContainer}>
        <div sx={footerStyles.footerInnerWrap}>
          <div sx={footerStyles.footerSection}>
            <nav sx={footerStyles.footerNav} aria-label="Footer Navigation">
              <ul sx={footerStyles.footerMenu}>
                <li sx={footerStyles.footerMenuItem}>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li sx={footerStyles.footerMenuItem}>
                  <Link to="/disclaimer">Disclaimer</Link>
                </li>
                <li sx={footerStyles.footerMenuItem}>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNavigation;

const footerStyles = {
  footerWrapper: {
    backgroundColor: 'background', // Use theme color for background
    py: [4, 5], // Responsive padding for top and bottom
  },
  siteContainer: {
    maxWidth: '1200px', // Max width of the footer container
    margin: '0 auto', // Center align the footer
    px: [3, 4, 5], // Padding for responsiveness
  },
  footerInnerWrap: {
    display: 'flex',
    justifyContent: 'center', // Center the items horizontally
    flexDirection: ['column', 'row'], // Stack vertically on mobile, horizontal on larger screens
  },
  footerSection: {
    flex: 1,
    textAlign: 'center', // Center-align text on smaller devices
  },
  footerNav: {
    mt: 4,
  },
  footerMenu: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center', // Align items centrally
    gap: [3, 4], // Responsive gap between the menu items
    p: 0,
  },
  footerMenuItem: {
    a: {
      color: 'text', // Theme color for text
      fontSize: 2,
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        color: 'primary', // Hover effect
      },
    },
  },
};
