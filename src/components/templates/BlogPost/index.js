import React from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Seo from '../../atoms/Seo';
import DateAndTags from '../../molecules/DateAndTags';
import Bio from '../../molecules/Bio';
import SocialLinks from '../../molecules/SocialLinks';
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
  const { title, date, hero, tags } = post.frontmatter;
  const description = post.frontmatter.description || post.excerpt;
  const { previous, next, slug } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={title} description={description} />

      <section className={styles.head}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
        <DateAndTags date={date} tags={tags} />

        <div className={styles.hero}>{hero && <Image fluid={hero.childImageSharp.fluid} />}</div>
      </section>

      <section className={styles.toc}>
        <h1 className={styles.tocHeader}>目次</h1>
        <div
          className={styles.tocBody}
          dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
        />
      </section>

      <div className={styles.article} dangerouslySetInnerHTML={{ __html: post.html }} />

      <section className={styles.footer}>
        <div className={styles.socialLinks}>
          <SocialLinks url={slug} title={title} />
        </div>
        <div className={styles.bio}>
          <Bio />
        </div>
        <div className={styles.pager}>
          <Pager previous={previous} next={next} />
        </div>
      </section>
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
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY/M/D")
        description
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
