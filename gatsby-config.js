/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// Import necessary files
const integration = require("./src/util/integrations.json");
const settings = require("./src/util/site.json");
const themecolors = require("./src/util/default-colors.json");

// Define variables for easier use
const iconImg = settings.meta.iconimage; // Ensure this is the relative path from the root
const siteFont = integration.siteFont;

// Function to resolve the correct icon path
const getIconPath = (icon) => {
  // Ensure the icon path is relative to the project root
  return icon.startsWith('static/') ? icon : `static/${icon}`;
};

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: settings.meta,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `${siteFont.body}`,
          `${siteFont.heading}:300,400,700`,
          `${siteFont.monospace}`,
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              showCaptions: true,
              linkImagesToOriginal: false,
              tracedSVG: true,
              loading: "lazy",
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              escapeEntities: {},
            },
          },
          // Add the TOC plugin here
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents", // Exclude headings named 'Table of Contents'
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "toc",
            },
          },
        ],
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: integration.ga,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: settings.title,
        short_name: settings.title,
        start_url: `/`,
        background_color: themecolors.background,
        theme_color: themecolors.background,
        display: `standalone`,
        icon: getIconPath(`assets/softwarescoutslogo.png`), // Ensure the correct icon path is used
      },
    },
    `gatsby-plugin-offline`,
  ],
};
