import React from 'react';
import { Link } from 'gatsby';

import Tags from '../../atoms/Tags';

import styles from './Posts.module.scss';

const PostItem = ({ node, title }) => (
  <div className={styles.item} key={node.fields.slug}>
    <h3 className={styles.title}>
      <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
        {title}
      </Link>
    </h3>
    <small>{node.frontmatter.date}</small>
    <p
      style={{ marginBottom: '0.5em' }}
      dangerouslySetInnerHTML={{
        __html: node.frontmatter.description || node.excerpt,
      }}
    />
    <Tags tags={node.frontmatter.tags} />
  </div>
);

const Posts = ({ posts, title }) =>
  posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return <PostItem key={node.fields.slug} node={node} title={title} />;
  });

export default Posts;
