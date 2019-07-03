import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Seo from '../../atoms/Seo';
import DateAndTags from '../../molecules/DateAndTags';
import Bio from '../../molecules/Bio';
import Layout from '../Layout';

import styles from './index.module.scss';

const Pager = ({ previous, next }) => (
  <ul className={styles.pager}>
    <li className={styles.prev}>
      {previous && (
        <Link to={previous.fields.slug} rel="prev">
          {`← ${previous.frontmatter.title}`}
        </Link>
      )}
    </li>
    <li className={styles.next}>
      {next && (
        <Link to={next.fields.slug} rel="next">
          {`${next.frontmatter.title} →`}
        </Link>
      )}
    </li>
  </ul>
);

const BlogPostTemplate = ({ location, data, pageContext }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const description = post.frontmatter.description || post.excerpt;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} description={description} />

      <section className={styles.head}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <p className={styles.description}>{description}</p>
        <DateAndTags date={post.frontmatter.date} tags={post.frontmatter.tags} />

        <div className={styles.hero}>
          {post.frontmatter.hero && <Image fluid={post.frontmatter.hero.childImageSharp.fluid} />}
        </div>
      </section>

      <div className={styles.article} dangerouslySetInnerHTML={{ __html: post.html }} />

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
        date(formatString: "YYYY/M/D")
        description
        tags
        hero {
          childImageSharp {
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
