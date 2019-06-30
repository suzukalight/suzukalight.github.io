import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/atoms/Seo';
import Bio from '../components/molecules/Bio';
import Posts from '../components/pages/Root/Posts';
import Layout from '../components/templates/Layout';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="Index" description="なければ作ればいいじゃない" />
        <Bio />
        <Posts posts={posts} />
      </Layout>
    );
  }
}

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
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
