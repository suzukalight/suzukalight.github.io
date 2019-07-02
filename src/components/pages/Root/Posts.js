import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

import Tags from '../../atoms/Tags';

import styles from './Posts.module.scss';

const PostItem = ({ node, title }) => (
  <div className={styles.item} key={node.fields.slug}>
    <div className={styles.description}>
      <h3 className={styles.title}>
        <Link className={styles.link} to={node.fields.slug}>
          {title}
        </Link>
      </h3>

      <p
        className={styles.excerpt}
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />

      <small className={styles.date}>{node.frontmatter.date}</small>

      <Tags className={styles.tags} tags={node.frontmatter.tags} />
    </div>

    <div className={styles.imageWrap}>
      {node.frontmatter.hero && (
        <Image fixed={node.frontmatter.hero.childImageSharp.fixed} objectFit="cover" />
      )}
    </div>
  </div>
);

const Posts = ({ posts, title }) =>
  posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return <PostItem key={node.fields.slug} node={node} title={title} />;
  });

export default Posts;
