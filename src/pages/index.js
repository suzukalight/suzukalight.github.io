import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/atoms/Seo';
import Hero from '../components/pages/Root/Hero';
import Posts from '../components/pages/Root/Posts';
import Layout from '../components/templates/Layout';

const BlogIndex = ({ location, data }) => (
  <Layout location={location} title={data.site.siteMetadata.title}>
    <Seo title="Index" description="なければ作ればいいじゃない" />
    <Hero />
    <Posts posts={data.allMarkdownRemark.edges} />
  </Layout>
);

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/M/D")
            title
            description
            tags
            hero {
              childImageSharp {
                fixed(width: 128, height: 128) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
