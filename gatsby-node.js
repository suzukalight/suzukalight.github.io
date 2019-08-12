const path = require(`path`);
const get = require('lodash/get');
const kebabCase = require('lodash/kebabCase');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`./src/components/templates/BlogPost/index.js`);
  const tagTemplate = path.resolve(`./src/components/templates/Tags/index.js`);
  const categoryTemplate = path.resolve(`./src/components/templates/Categories/index.js`);

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { status: { eq: "published" } } }
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              category
              tags
            }
          }
        }
      }
    }
  `);

  if (!result || result.errors) {
    throw result.errors;
  }

  // Create blog posts pages
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Tag pages
  const tags = posts.reduce((tags, edge) => {
    const edgeTags = get(edge, 'node.frontmatter.tags');
    return edgeTags ? tags.concat(edge.node.frontmatter.tags) : tags;
  }, []);

  [...new Set(tags)].forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    });
  });

  // Category pages
  const categories = posts.reduce((categories, edge) => {
    const edgeTags = get(edge, 'node.frontmatter.category');
    return edgeTags ? categories.concat(edge.node.frontmatter.category) : categories;
  }, []);

  [...new Set(categories)].forEach(category => {
    createPage({
      path: `/categories/${kebabCase(category)}/`,
      component: categoryTemplate,
      context: {
        category,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
