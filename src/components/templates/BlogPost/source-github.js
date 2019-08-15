import { graphql } from 'gatsby';

import BlogPost from './';

export default BlogPost;

export const pageQuery = graphql`
  query GitHubBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date
        description
        category
        tags
        hero {
          childImageSharp {
            fluid(maxWidth: 980, maxHeight: 480) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
