/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, className }) => {
  return (
    <div sx={layoutStyles.base}>
      <Header />
      <div sx={layoutStyles.mainContainer}>
        <main className={"container " + className} sx={layoutStyles.main}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

const layoutStyles = {
  base: {
    bg: "background",
    fontFamily: "body",
    fontWeight: "body",
    lineHeight: "body",
    code: {
      fontFamily: "monospace",
    },
    b: {
      fontWeight: "heading",
    },
    a: {
      textDecoration: "none",
      color: "primary", // Ensures link color is from the theme
      "&:hover": {
        color: "secondary", // Link hover effect from theme
      },
      "&:focus": {
        outline: "none",
        boxShadow: (theme) => `0 0 0 3px ${theme.colors.primary}`,
      },
    },
    "h1, h2, h3": {
      fontFamily: "heading",
      fontWeight: "500",
      lineHeight: "1.3",
    },
    h1: {
      fontSize: [5, 6, 7],
    },
    h2: {
      fontSize: [5, 5, 6],
    },
    "h4, h5, h6": {
      fontFamily: "body",
      fontWeight: "500",
      lineHeight: "1.3",
    },
    ".section-heading": {
      fontFamily: "body",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  mainContainer: {
    display: "flex",
    flexDirection: ["column", "row"],
    px: [3, 4, 5], // Responsive padding for better spacing
    py: [4, 5], // Top/bottom padding for spacing on larger screens
    justifyContent: "center",
    maxWidth: "1200px", // Maximum width for better readability
    margin: "0 auto", // Centering the content
  },
  main: {
    flex: 1,
    width: "100%",
    px: [2, 3], // Responsive padding inside the main content area
  },
};
