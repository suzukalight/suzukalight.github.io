import React from 'react';
import cn from 'classnames';

import PostCard from '../../molecules/PostCard';

import styles from './index.module.scss';

const Posts = ({ className, posts }) => (
  <section className={cn(styles.root, className)}>
    {posts.map(post => (
      <PostCard key={post.head.slug} post={post} />
    ))}
  </section>
);

export default Posts;
