const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);
const slugify = require("@sindresorhus/slugify");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogList = path.resolve(`./src/templates/blog-list.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            frontmatter {
              slug
              template
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Helper function to create pages based on template type
  const createPagesByTemplate = (templateName, prefix = '') => {
    const pages = result.data.allMarkdownRemark.edges.filter(
      (edge) => edge.node.frontmatter.template === templateName
    );

    pages.forEach((page, index) => {
      const id = page.node.id;
      const title = page.node.frontmatter.title;
      const previous = index === pages.length - 1 ? null : pages[index + 1].node;
      const next = index === 0 ? null : pages[index - 1].node;

      // Check if slug is provided in frontmatter, otherwise use a slugified title
      const pathSlug = page.node.frontmatter.slug
        ? page.node.frontmatter.slug
        : `${prefix}${slugify(title)}`;

      createPage({
        path: pathSlug,
        component: path.resolve(`src/templates/${templateName}.js`),
        context: {
          id,
          previous,
          next,
        },
      });
    });
  };

  // Create pages for different templates
  createPagesByTemplate("index-page");
  createPagesByTemplate("contact-page");
  createPagesByTemplate("about-page", "/about"); // Assuming the About page should be under /about

  // Create blog posts
  const posts = result.data.allMarkdownRemark.edges.filter(
    (edge) => edge.node.frontmatter.template === "blog-post"
  );

  posts.forEach((post, index) => {
    const id = post.node.id;
    const postTitle = post.node.frontmatter.title;
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    const prefix = `/blog/`;
    const slug = slugify(postTitle);

    createPage({
      path: prefix + slug,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        id,
        previous,
        next,
      },
    });
  });

  // Create paginated blog list pages
  const postsPerPage = 9;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create tag pages
  createPagesByTemplate("tags-page", `/tag/`);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
