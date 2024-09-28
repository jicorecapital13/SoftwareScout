/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const integration = require("./src/util/integrations.json");
const settings = require("./src/util/site.json");
const themecolors = require("./src/util/default-colors.json");

const iconImg = "assets/softwarediscoverer.png";  // Corrected path relative to static folder
const siteFont = integration.siteFont;

module.exports = {
  siteMetadata: settings.meta,
  plugins: [
    // Source static assets and content
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

    // Google fonts setup
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

    // Image processing plugins
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    // Markdown transformer with plugins for enhanced markdown support
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
              loading: "lazy", // Use lazy-loading for performance
              placeholder: "none", // Removed blurred placeholder as requested
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
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

    // Theme UI for styling
    `gatsby-plugin-theme-ui`,

    // SEO and site enhancements
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,

    // Google Analytics setup
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: integration.ga,
      },
    },

    // Sitemap generation
    `gatsby-plugin-sitemap`,

    // Web manifest setup
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: settings.title,
        short_name: settings.title,
        start_url: `/`,
        background_color: themecolors.background,
        theme_color: themecolors.background,
        display: `standalone`,
        icon: `static/${iconImg}`,  // Use a direct relative path to the static folder
      },
    },

    // Enable offline support
    `gatsby-plugin-offline`,
  ],
};
