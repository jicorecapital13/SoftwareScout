import defaultColors from "../util/default-colors.json";
import fontFamily from "../util/integrations.json";

const theme = {
  breakpoints: ["40em", "56em", "64em", "90em", "120em"], // Responsive breakpoints for mobile, tablet, and desktop
  space: [0, 4, 8, 16, 24, 32, 48, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fonts: {
    body: `${fontFamily.siteFont.body}, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif`,
    heading: `${fontFamily.siteFont.heading}, -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif`,
    monospace: `${fontFamily.siteFont.monospace}, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  },
  colors: {
    ...defaultColors,
  },
  variants: {
    container: {
      maxWidth: "1440px",
      m: "0 auto",
      px: ["16px", "32px", "48px", "80px", "100px"], // More responsive padding values for different breakpoints
      py: [3, 4, 6],
    },
    button: {
      py: 2,
      px: 3,
      fontSize: 2,
      cursor: "pointer",
      borderRadius: "12px",
      border: "1.2px solid",
      borderColor: "black",
      color: "black",
      background: "none",
      letterSpacing: "1px",
      "&:hover": {
        color: "primaryColor",
      },
    },
    markdown: {
      py: 5,
      "h1, h2, h3, h4, h5, h6": {
        color: "black",
      },
      pre: {
        borderRadius: "12px",
        p: 3,
        bg: "#333",
        color: "#fff",
      },
      img: {
        display: "block",
        width: ["100%", "100%", "80%", "80%", "70%"], // Responsive image width to make it larger on smaller screens
        maxWidth: "100%",
        height: "auto",
        borderRadius: "18px",
        margin: "0 auto", // Center-align images
      },
      ".gatsby-resp-image-figure": {
        my: 4,
        mx: 0,
        ".gatsby-resp-image-wrapper": {
          maxWidth: "none !important",
        },
      },
      blockquote: {
        borderLeft: "3px solid",
        borderColor: "borderColor",
        px: 4,
        p: {
          fontWeight: "300",
        },
      },
      "blockquote, pre": {
        my: 5,
      },
      figure: {
        mx: 0,
        my: 3,
        figcaption: {
          mt: 1,
          fontSize: 0,
          textAlign: "center",
          color: "mutedColor",
        },
      },
      "p, li": {
        fontSize: 3,
        color: "black",
        py: 2,
      },
      a: {
        color: "primaryColor",
        fontWeight: "600",
        letterSpacing: "0.5px",
        "&:hover": {
          color: "black",
        },
      },
    },
    pageListPagination: {
      mt: 4,
      mb: 7,
      textAlign: "center",
      ul: {
        m: 0,
        p: 0,
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        li: {
          listStyle: "none",
          margin: "0 5px",
          a: {
            display: "inline-block",
            fontWeight: "bold",
            fontSize: [3, 4], // Responsive font size for pagination links
            color: "primaryColor",
            "&:hover": {
              color: "black",
            },
            "&.is-active": {
              color: "black",
            },
          },
        },
      },
    },
    pagination: {
      mt: 7,
      ul: {
        m: 0,
        p: 0,
        display: ["flex"],
        justifyContent: "space-between",
        gap: "30px", // Reduced gap for better responsiveness
        flexWrap: "wrap",
        alignItems: "center",
        li: {
          width: ["100%", "100%", "45%", "45%"], // Responsive width for pagination items
          listStyle: "none",
          padding: 4,
          borderRadius: "12px",
          bg: "primaryBg",
          p: {
            color: "black",
            fontSize: 3,
          },
          span: {
            display: "block",
            fontSize: 3,
            mt: 4,
            color: "primaryColor",
          },
          "&:nth-of-type(1)": {
            textAlign: "left",
          },
          "&:nth-of-type(2)": {
            textAlign: "right",
          },
        },
      },
    },
  },
  // Adding flexbox styles for any sections
  flexbox: {
    flexColumn: {
      flex: "1",
      paddingRight: "2rem",
      paddingBottom: [2, 3, 4], // Responsive padding for smaller screens
    },
  },
};

export default theme;
