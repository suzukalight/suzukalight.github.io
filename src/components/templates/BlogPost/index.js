import React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import Seo from '../../atoms/Seo';
import Iframely from '../../atoms/Iframely';
import DateAndTags from '../../molecules/DateAndTags';
import Bio from '../../molecules/Bio';
import SocialLinks from '../../molecules/SocialLinks';
import { Layout, Centered } from '../Layout';

import { convertToArticle } from '../../../utils/article';
import { contentfulArticleToReactComponents } from '../../../utils/contentful';
import { getFluidImage } from '../../../utils/dom';

import styles from './index.module.scss';

const Pager = ({ previous, next }) => (
  <div className={styles.footerPager}>
    <ul className={styles.pager}>
      <li className={styles.prev}>
        {previous && (
          <Link to={previous.head.slug} rel="prev">
            {`← ${previous.head.title}`}
          </Link>
        )}
      </li>
      <li className={styles.next}>
        {next && (
          <Link to={next.head.slug} rel="next">
            {`${next.head.title} →`}
          </Link>
        )}
      </li>
    </ul>
  </div>
);

const BlogPostTemplate = ({ location, siteMetadata, head, body, richTextJson, pageContext }) => (
  <Layout location={location} title={siteMetadata.title}>
    <Seo title={head.title} description={head.description} />
    <Iframely />

    <Centered>
      <section className={styles.head}>
        <Link className={styles.category} to={`/categories/${kebabCase(head.category)}`}>
          <span>{head.category}</span>
        </Link>
        <h1 className={styles.title}>{head.title}</h1>
        <p className={styles.description}>{head.description}</p>
        <DateAndTags date={head.date} tags={head.tags} />

        {head.hero && <div className={styles.hero}>{getFluidImage(head.hero)}</div>}
      </section>

      {head && head.tableOfContents && (
        <section className={styles.toc}>
          <h1 className={styles.tocHeader}>目次</h1>
          <div
            className={styles.tocBody}
            dangerouslySetInnerHTML={{ __html: head.tableOfContents }}
          />
        </section>
      )}

      {body && <div className={styles.article} dangerouslySetInnerHTML={{ __html: body }} />}
      {richTextJson && (
        <div className={styles.article}>{contentfulArticleToReactComponents(richTextJson)}</div>
      )}

      <section className={styles.footer}>
        <SocialLinks className={styles.socialLinks} url={head.slug} title={head.title} />
        <Bio className={styles.bio} />
        <Pager previous={pageContext.previous} next={pageContext.next} />
      </section>
    </Centered>
  </Layout>
);

const BlogPost = ({ data, pageContext }) => {
  return <BlogPostTemplate {...convertToArticle(data)} pageContext={pageContext} />;
};

export default BlogPost;
