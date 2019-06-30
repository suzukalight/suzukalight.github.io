import React from 'react';
import { Link, graphql } from 'gatsby';

import Seo from '../../atoms/Seo';
import Tags from '../../atoms/Tags';
import Bio from '../../molecules/Bio';
import Layout from '../Layout';

import styles from './index.module.scss';

const Pager = ({ previous, next }) => (
  <ul className={styles.pager}>
    <li>
      {previous && (
        <Link to={previous.fields.slug} rel="prev">
          ← {previous.frontmatter.title}
        </Link>
      )}
    </li>
    <li>
      {next && (
        <Link to={next.fields.slug} rel="next">
          {next.frontmatter.title} →
        </Link>
      )}
    </li>
  </ul>
);

const BlogPostTemplate = ({ location, data, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <h1 className={styles.title}>{post.frontmatter.title}</h1>
      <p className={styles.date}>{post.frontmatter.date}</p>
      <Tags tags={post.frontmatter.tags} />

      <div dangerouslySetInnerHTML={{ __html: post.html }} />

      <hr className={styles.articleEnd} />
      <Bio />

      <Pager previous={previous} next={next} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
