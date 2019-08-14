import { graphql } from 'gatsby';

import BlogPost from './';

export default BlogPost;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulArticle(id: { eq: $id }) {
      id
      slug
      title
      description
      body {
        json
      }
      date
      category
      tags
      hero {
        title
        description
        sizes(maxWidth: 1440) {
          ...GatsbyContentfulSizes
        }
      }
    }
  }
`;
