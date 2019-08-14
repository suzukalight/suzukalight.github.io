import React from 'react';
import { graphql } from 'gatsby';

import Root from '../components/pages/Root';

import { convertToArticles, sortByDate } from '../utils/article';

const IndexPage = ({ data, pageContext }) => {
  const posts = sortByDate(convertToArticles(data));

  return <Root siteMetadata={data.site.siteMetadata} posts={posts} pageContext={pageContext} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { status: { eq: "published" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            category
            tags
            hero {
              childImageSharp {
                fixed(width: 280, height: 140) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    allContentfulArticle {
      edges {
        node {
          id
          title
          description
          slug
          category
          tags
          date
          hero {
            title
            description
            sizes(maxWidth: 1440) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`;
