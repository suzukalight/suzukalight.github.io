import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import DateAndTags from '../../molecules/DateAndTags';

import styles from './Posts.module.scss';

const PostItem = ({ node, title }) => (
  <div className={styles.item} key={node.fields.slug}>
    <div className={styles.description}>
      <Link className={styles.link} to={node.fields.slug}>
        <h3 className={styles.title}>
          <span className={styles.linkText}>{title}</span>
        </h3>

        <p
          className={styles.excerpt}
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </Link>

      <DateAndTags date={node.frontmatter.date} tags={node.frontmatter.tags} />
    </div>

    <Link className={styles.imageWrap} to={node.fields.slug}>
      {node.frontmatter.hero && <Image fixed={node.frontmatter.hero.childImageSharp.fixed} />}
    </Link>
  </div>
);

const Posts = ({ posts }) =>
  posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return <PostItem key={node.fields.slug} node={node} title={title} />;
  });

export default Posts;
