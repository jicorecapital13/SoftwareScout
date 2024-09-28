const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const slugify = require("@sindresorhus/slugify");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogListTemplate = path.resolve(`./src/templates/blog-list.js`);
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`);
  const tagTemplate = path.resolve(`./src/templates/tags-page.js`);

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
              tags
            }
          }
        }
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.allMarkdownRemark.edges;
  const tags = result.data.allMarkdownRemark.group;

  // Helper function to create pages for specific templates
  const createPagesByTemplate = (templateName, prefix = "") => {
    const pages = posts.filter(
      (edge) => edge.node.frontmatter.template === templateName
    );

    pages.forEach((page, index) => {
      const id = page.node.id;
      const title = page.node.frontmatter.title;
      const previous = index === pages.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

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

  // Create pages for static templates
  createPagesByTemplate("index-page");
  createPagesByTemplate("contact-page");
  createPagesByTemplate("about-page", "/about");

  // Create blog posts with previous and next navigation
  posts
    .filter((post) => post.node.frontmatter.template === "blog-post")
    .forEach((post, index) => {
      const id = post.node.id;
      const postTitle = post.node.frontmatter.title;
      const previous = index === posts.length - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;
      const prefix = `/blog/`;
      const slug = post.node.frontmatter.slug || slugify(postTitle);

      createPage({
        path: prefix + slug,
        component: blogPostTemplate,
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
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create tag pages dynamically
  tags.forEach((tag) => {
    createPage({
      path: `/tag/${slugify(tag.fieldValue)}`,
      component: tagTemplate,
      context: {
        tagTitle: tag.fieldValue,
      },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};
