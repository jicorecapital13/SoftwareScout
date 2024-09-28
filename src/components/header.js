/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  const { theme } = useThemeUI();
  return (
    <header sx={headerStyles.container}>
      <div sx={{ display: "flex", alignItems: "center" }}>
        <Logo sx={headerStyles.logoStyle} />
        <h2 sx={headerStyles.titleStyle}>
          Software
          <span sx={{ color: theme.colors.secondary || "#a31933" }}>
            Discoverer
          </span>
        </h2>
      </div>
      <div sx={headerStyles.navIcons}>
        <div sx={headerStyles.navMenu}>
          <Navigation />
        </div>
      </div>
      <div sx={headerStyles.navMenuBigScreen}>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;

const headerStyles = {
  container: {
    m: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    px: ["10px", "60px", "80px", "160px", "160px"],
    py: "8px",
    bg: "primaryBg",
  },
  logoStyle: {
    width: ["50px", "60px", "70px"], // Adjust the size for mobile, tablet, and larger screens
    height: "auto", // Keeps the aspect ratio of the logo
  },
  titleStyle: {
    ml: "12px", // Adjust margin-left to space the title from the logo
    color: "text", // Assumes 'text' is a defined color in your theme
    fontWeight: "bold",
    fontSize: [3, 4], // Responsive font size for title
  },
  navMenuBigScreen: {
    display: ["none", "none", "none", "flex"],
    alignItems: "center",
  },
  navMenu: {
    display: ["block", "block", "block", "none"],
    ".site-menu": {
      display: "none",
    },
  },
  navIcons: {
    display: ["flex", "flex", "flex", "none"],
    float: ["right", "right", "inherit"],
  },
};
