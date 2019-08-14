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
      __typename
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
      # description
      # tableOfContents
      # hero {
      #   fixed(width: 1440) {
      #     width
      #     height
      #     src
      #     srcSet
      #   }
      # }
    }
  }
`;
