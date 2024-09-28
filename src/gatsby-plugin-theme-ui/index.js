import defaultColors from "../util/default-colors.json";
import fontFamily from "../util/integrations.json";

const theme = {
  breakpoints: ["40em", "56em", "64em", "90em", "120em"],
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
  shadows: {
    card: "0px 4px 12px rgba(0, 0, 0, 0.05)",
    hoverCard: "0px 6px 18px rgba(0, 0, 0, 0.1)",
  },
  variants: {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      paddingX: ["16px", "32px", "48px", "80px", "100px"],
      paddingY: [3, 4, 6],
      backgroundColor: "primaryBg",
      borderRadius: "8px",
      boxShadow: "card",
    },
    sidebar: {
      maxWidth: ["100%", "100%", "230px"], // Make sidebar smaller
      backgroundColor: "primaryBg",
      boxShadow: "card",
      padding: 3,
      borderRadius: "8px",
      margin: ["0 auto", null, "0"],
    },
    blogCard: {
      flexBasis: ["100%", "100%", "60%"], // Increase blog card size for larger screens
      backgroundColor: "primaryBg",
      boxShadow: "card",
      padding: 4,
      borderRadius: "8px",
      marginBottom: 4,
      "&:hover": {
        boxShadow: "hoverCard",
      },
    },
    button: {
      paddingY: 2,
      paddingX: 4,
      fontSize: 2,
      cursor: "pointer",
      borderRadius: "8px",
      border: "1.2px solid",
      borderColor: "black",
      color: "black",
      backgroundColor: "white",
      transition: "background-color 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        backgroundColor: "primaryColor",
        color: "white",
        boxShadow: "hoverCard",
      },
    },
    footer: {
      backgroundColor: "primaryBg",
      paddingY: 3,
      textAlign: "center",
      borderTop: "1px solid",
      borderColor: "borderColor",
      fontSize: 1,
      color: "mutedColor",
      a: {
        color: "primaryColor",
        textDecoration: "none",
        fontSize: 1,
        "&:hover": {
          color: "secondary",
        },
      },
    },
    markdown: {
      paddingY: 5,
      "h1, h2, h3, h4, h5, h6": {
        color: "black",
      },
      pre: {
        borderRadius: "8px",
        padding: 3,
        backgroundColor: "#333",
        color: "#fff",
      },
      img: {
        display: "block",
        width: ["100%", "100%", "80%", "80%", "70%"],
        maxWidth: "100%",
        height: "auto",
        borderRadius: "16px",
        margin: "0 auto",
      },
      blockquote: {
        borderLeft: "3px solid",
        borderColor: "primaryColor",
        paddingX: 4,
        p: {
          fontWeight: "300",
        },
      },
      "blockquote, pre": {
        marginY: 5,
        boxShadow: "card",
      },
      figure: {
        marginX: 0,
        marginY: 3,
        figcaption: {
          marginTop: 1,
          fontSize: 0,
          textAlign: "center",
          color: "mutedColor",
        },
      },
      "p, li": {
        fontSize: 3,
        color: "black",
        paddingY: 2,
      },
      a: {
        color: "primaryColor",
        fontWeight: "600",
        letterSpacing: "0.5px",
        transition: "color 0.2s ease",
        "&:hover": {
          color: "black",
        },
      },
    },
    pageListPagination: {
      marginTop: 4,
      marginBottom: 7,
      textAlign: "center",
      ul: {
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        li: {
          listStyle: "none",
          margin: "0 5px",
          a: {
            display: "inline-block",
            fontWeight: "bold",
            fontSize: [3, 4],
            color: "primaryColor",
            transition: "color 0.2s ease",
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
      marginTop: 5,
      ul: {
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap",
        alignItems: "center",
        li: {
          width: ["100%", "100%", "45%", "45%"],
          listStyle: "none",
          padding: 3,
          borderRadius: "8px",
          backgroundColor: "primaryBg",
          boxShadow: "card",
          p: {
            color: "black",
            fontSize: 3,
          },
          span: {
            display: "block",
            fontSize: 3,
            marginTop: 4,
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
  flexbox: {
    flexColumn: {
      flex: "1",
      paddingRight: "2rem",
      paddingBottom: [2, 3, 4],
    },
  },
};

export default theme;
