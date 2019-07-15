import React from 'react';
import cn from 'classnames';

import PostCard from '../../molecules/PostCard';

import styles from './index.module.scss';

const Posts = ({ className, posts }) => (
  <section className={cn(styles.root, className)}>
    {posts.map(({ node }) => (
      <PostCard
        key={node.fields.slug}
        node={node}
        title={node.frontmatter.title || node.fields.slug}
      />
    ))}
  </section>
);

export default Posts;
