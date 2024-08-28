/** @jsx jsx */
import { jsx } from "theme-ui";
import { useLocation } from "@reach/router"; // Import useLocation from reach/router
import Header from "./header";
import Footer from "./footer";
import Sidebar from "../components/sidebar";

const Layout = ({ children, className }) => {
  const location = useLocation(); // Get the current page location

  // Show the sidebar only for paths starting with '/blog'
  const isBlogPage = location.pathname.startsWith("/blog");

  return (
    <div sx={layoutStyles.base}>
      <Header />
      <div sx={{ display: "flex", flexDirection: ["column", "row"] }}>
        <main className={"container " + className} sx={{ flex: 3 }}>
          {children}
        </main>
        {isBlogPage && (  /* Conditionally render Sidebar only on blog pages */
          <aside sx={{ flex: 1, mt: [4, 0] }}>
            <Sidebar />
          </aside>
        )}
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
};
