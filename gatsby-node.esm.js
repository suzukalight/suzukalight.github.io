const path = require('path');
const { kebabCase } = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const { convertToArticles, sortByDate } = require('./src/utils/article');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostGitHubTemplate = path.resolve(
    `./src/components/templates/BlogPost/source-github.js`,
  );
  const blogPostContentfulTemplate = path.resolve(
    `./src/components/templates/BlogPost/source-contentful.js`,
  );
  const tagTemplate = path.resolve(`./src/components/templates/Tags/index.js`);
  const categoryTemplate = path.resolve(`./src/components/templates/Categories/index.js`);

  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(filter: { frontmatter: { status: { eq: "published" } } }, limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              category
              tags
              date
            }
          }
        }
      }
      allContentfulArticle(limit: 1000) {
        edges {
          node {
            id
            title
            description
            slug
            category
            tags
            date
          }
        }
      }
    }
  `);

  if (!result || result.errors) {
    throw result.errors;
  }

  // Create blog posts pages
  const posts = sortByDate(convertToArticles(result.data));
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];
    const { id, slug, source } = post.head;

    createPage({
      path: slug,
      component: source === 'github' ? blogPostGitHubTemplate : blogPostContentfulTemplate,
      context: {
        id,
        source,
        slug,
        previous,
        next,
      },
    });
  });

  // Tag pages
  const tags = posts.reduce((tags, post) => {
    const tagsInPost = post.head.tags;
    return tagsInPost ? tags.concat(tagsInPost) : tags;
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
  const categories = posts.reduce((categories, post) => {
    const categoriesInPost = post.head.category;
    return categoriesInPost ? categories.concat(categoriesInPost) : categories;
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
